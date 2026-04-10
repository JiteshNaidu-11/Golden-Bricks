"use client";

import { useMemo, useState, useEffect, useRef, useCallback } from "react";
import {
  computeEmi,
  buildYearlyAmortization,
} from "@/lib/emiCalculator";
import { Calculator, ChevronDown, Download, IndianRupee } from "lucide-react";

const LOAN_MIN = 5_00_000;
const LOAN_MAX = 5_00_00_000;
const RATE_MIN = 5;
const RATE_MAX = 20;
const TENURE_MIN = 1;
const TENURE_MAX = 30;

function formatInr(n: number) {
  const v = Math.round(Number.isFinite(n) ? n : 0);
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(v);
}

function formatIndianInteger(n: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function useAnimatedNumber(target: number, duration = 420) {
  const [display, setDisplay] = useState(target);
  const fromRef = useRef(target);

  useEffect(() => {
    const from = fromRef.current;
    const to = target;
    const start = performance.now();
    let raf = 0;

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(from + (to - from) * eased);
      if (t < 1) raf = requestAnimationFrame(step);
      else {
        fromRef.current = to;
        setDisplay(to);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return display;
}

/** Donut + legend; `compact` = smaller ring + tighter copy for dense dashboard row */
function EmiDonut({
  principalFraction,
  interestFraction,
  compact = false,
}: {
  principalFraction: number;
  interestFraction: number;
  compact?: boolean;
}) {
  const deg = Math.min(360, Math.max(0, principalFraction * 360));
  const pPct = Math.round(principalFraction * 100);
  const iPct = Math.round(interestFraction * 100);

  const ring =
    compact
      ? "h-[76px] w-[76px] sm:h-[80px] sm:w-[80px]"
      : "h-[108px] w-[108px] sm:h-[118px] sm:w-[118px]";

  return (
    <div
      className={
        compact
          ? "flex w-full max-w-full flex-row items-center justify-between gap-3 sm:gap-4"
          : "flex w-full flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5"
      }
      aria-hidden
    >
      <div className={`relative shrink-0 ${ring}`}>
        <div
          className="absolute inset-0 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.45)] ring-1 ring-white/10 transition-[background] duration-500 ease-out"
          style={{
            background: `conic-gradient(from -90deg, #d4af37 0deg, #f5d061 ${deg * 0.5}deg, #d4af37 ${deg}deg, #64748b ${deg}deg, #334155 360deg)`,
          }}
        />
        <div className="absolute inset-[18%] flex items-center justify-center rounded-full bg-[#020617]/95 text-center shadow-[inset_0_2px_12px_rgba(0,0,0,0.65)] ring-1 ring-white/10">
          <span
            className={`px-0.5 font-bold uppercase leading-tight tracking-[0.18em] text-gray-300 ${compact ? "text-[8px] sm:text-[9px]" : "text-[10px]"}`}
          >
            EMI Split
          </span>
        </div>
      </div>

      <div
        className={
          compact
            ? "flex min-w-0 flex-1 flex-col justify-center gap-1.5 text-left"
            : "flex min-w-0 flex-1 flex-col justify-center gap-4 text-left"
        }
      >
        <p
          className={
            compact
              ? "text-[10px] font-semibold uppercase tracking-wider text-gray-400"
              : "text-xs font-semibold uppercase tracking-wider text-gray-400"
          }
        >
          Payment breakdown
        </p>
        <div className={compact ? "flex flex-col gap-1.5" : "flex flex-col gap-3"}>
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f5d061] shadow-sm ring-1 ring-[#d4af37]/40"
              aria-hidden
            />
            <span
              className={
                compact
                  ? "text-xs font-medium text-white/90"
                  : "text-sm font-medium text-white/90"
              }
            >
              Principal{" "}
              <span className="font-semibold tabular-nums text-[#d4af37]">
                {pPct}%
              </span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-slate-500 ring-1 ring-white/15"
              aria-hidden
            />
            <span
              className={
                compact
                  ? "text-xs font-medium text-white/90"
                  : "text-sm font-medium text-white/90"
              }
            >
              Interest{" "}
              <span className="font-semibold tabular-nums text-gray-300">
                {iPct}%
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

type SliderFieldProps = {
  label: string;
  hint: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (n: number) => void;
  format: (n: number) => string;
  inputSuffix?: string;
  valueDecimals?: number;
  integerGrouping?: false | "indian";
  /** No outer card; tighter spacing for merged form layout */
  compact?: boolean;
};

function draftFromValue(
  v: number,
  decimals: number,
  grouping: false | "indian" = false,
) {
  if (grouping === "indian" && decimals === 0) {
    return formatIndianInteger(v);
  }
  if (decimals <= 0) return String(Math.round(v));
  const r = Math.round(v * 10 ** decimals) / 10 ** decimals;
  return String(r);
}

function SliderField({
  label,
  hint,
  min,
  max,
  step,
  value,
  onChange,
  format,
  inputSuffix,
  valueDecimals = 0,
  integerGrouping = false,
  compact = false,
}: SliderFieldProps) {
  const [draft, setDraft] = useState(() =>
    draftFromValue(value, valueDecimals, integerGrouping),
  );

  useEffect(() => {
    setDraft(draftFromValue(value, valueDecimals, integerGrouping));
  }, [value, valueDecimals, integerGrouping]);

  const commit = useCallback(() => {
    if (integerGrouping === "indian") {
      const digits = draft.replace(/\D/g, "");
      if (digits === "") {
        setDraft(draftFromValue(value, valueDecimals, integerGrouping));
        return;
      }
      const n = clamp(parseInt(digits, 10), min, max);
      onChange(n);
      setDraft(draftFromValue(n, valueDecimals, integerGrouping));
      return;
    }
    const parsed = parseFloat(draft.replace(/,/g, ""));
    if (Number.isFinite(parsed)) {
      onChange(clamp(parsed, min, max));
    } else {
      setDraft(draftFromValue(value, valueDecimals, integerGrouping));
    }
  }, [draft, min, max, onChange, value, valueDecimals, integerGrouping]);

  const handleTextInputChange = (raw: string) => {
    if (integerGrouping !== "indian") {
      setDraft(raw);
      return;
    }
    const digits = raw.replace(/\D/g, "");
    if (digits === "") {
      setDraft("");
      return;
    }
    const n = clamp(parseInt(digits, 10), min, max);
    setDraft(formatIndianInteger(n));
    onChange(n);
  };

  const pct = ((value - min) / (max - min)) * 100;

  const rangeClassFixed =
    "absolute inset-x-0 top-1/2 w-full -translate-y-1/2 cursor-pointer appearance-none bg-transparent " +
    (compact ? "h-8 " : "h-10 ") +
    (compact
      ? "[&::-webkit-slider-runnable-track]:h-1.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-transparent " +
        "[&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-10 [&::-webkit-slider-thumb]:-mt-[5px] [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-gradient-to-br [&::-webkit-slider-thumb]:from-[#d4af37] [&::-webkit-slider-thumb]:to-[#f5d061] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:hover:scale-110 " +
        "[&::-moz-range-track]:h-1.5 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-transparent " +
        "[&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-gradient-to-br [&::-moz-range-thumb]:from-[#d4af37] [&::-moz-range-thumb]:to-[#f5d061] [&::-moz-range-thumb]:shadow-md"
      : "[&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-transparent " +
        "[&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-10 [&::-webkit-slider-thumb]:-mt-1.5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-gradient-to-br [&::-webkit-slider-thumb]:from-[#d4af37] [&::-webkit-slider-thumb]:to-[#f5d061] [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:hover:scale-110 " +
        "[&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-transparent " +
        "[&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-gradient-to-br [&::-moz-range-thumb]:from-[#d4af37] [&::-moz-range-thumb]:to-[#f5d061] [&::-moz-range-thumb]:shadow-lg");

  const inner = (
    <>
      <div
        className={
          compact
            ? "mb-2 flex flex-wrap items-end justify-between gap-2"
            : "mb-4 flex flex-wrap items-end justify-between gap-4"
        }
      >
        <div className="min-w-0">
          <p
            className={
              compact
                ? "text-sm text-gray-500"
                : "text-sm font-semibold text-[#0c1b2a]"
            }
          >
            {label}
          </p>
          <p
            className={
              compact
                ? "mt-0.5 text-xs leading-snug text-gray-400"
                : "mt-1 text-xs leading-relaxed text-gray-500"
            }
          >
            {hint}
          </p>
        </div>
        <div
          className={`flex items-center gap-1.5 rounded-lg border border-gray-200 bg-[#fafafa] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-200 focus-within:border-[#d4af37]/50 focus-within:ring-2 focus-within:ring-[#d4af37]/40 focus-within:ring-offset-0 ${
            compact ? "px-2 py-1.5" : "px-3 py-2"
          } ${
            integerGrouping === "indian"
              ? compact
                ? "min-w-[8.5rem] sm:min-w-[9.5rem]"
                : "min-w-[9.25rem] sm:min-w-[10.5rem]"
              : compact
                ? "min-w-[6.5rem]"
                : "min-w-[7.5rem]"
          }`}
        >
          {inputSuffix === "₹" && (
            <IndianRupee
              className={`shrink-0 text-[#d4af37] ${compact ? "h-3.5 w-3.5" : "h-4 w-4"}`}
            />
          )}
          <input
            type="text"
            inputMode={integerGrouping === "indian" ? "numeric" : "decimal"}
            className={`w-full min-w-0 rounded-lg bg-transparent text-right font-semibold text-[#0c1b2a] outline-none tabular-nums tracking-tight focus:ring-0 ${compact ? "text-xs sm:text-sm" : "text-sm"}`}
            value={draft}
            onChange={(e) => handleTextInputChange(e.target.value)}
            onBlur={commit}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                (e.target as HTMLInputElement).blur();
                commit();
              }
            }}
            aria-label={label}
          />
          {inputSuffix && inputSuffix !== "₹" && (
            <span
              className={`font-medium text-gray-500 ${compact ? "text-[11px]" : "text-xs"}`}
            >
              {inputSuffix}
            </span>
          )}
        </div>
      </div>
      <div
        className={`relative flex items-center ${compact ? "h-8" : "h-10"}`}
      >
        <div
          className={`pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 rounded-full bg-gray-200/90 ${compact ? "h-1.5" : "h-2"}`}
          aria-hidden
        />
        <div
          className={`pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f5d061] transition-[width] duration-200 ease-out ${compact ? "h-1.5" : "h-2"}`}
          style={{ width: `${pct}%` }}
          aria-hidden
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className={rangeClassFixed}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
        />
      </div>
      <div
        className={`flex justify-between font-medium text-gray-400 ${compact ? "mt-1.5 text-[10px]" : "mt-3 text-[11px]"}`}
      >
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </>
  );

  if (compact) {
    return <div className="min-w-0">{inner}</div>;
  }

  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
      {inner}
    </div>
  );
}

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState(50_00_000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(20);
  const [showTable, setShowTable] = useState(false);

  const result = useMemo(
    () => computeEmi(loanAmount, interestRate, tenureYears),
    [loanAmount, interestRate, tenureYears],
  );

  const yearly = useMemo(
    () => buildYearlyAmortization(loanAmount, interestRate, tenureYears),
    [loanAmount, interestRate, tenureYears],
  );

  const animatedEmi = useAnimatedNumber(result.emi);
  const animatedTotal = useAnimatedNumber(result.totalPayment);
  const animatedInterest = useAnimatedNumber(result.totalInterest);

  const principalFrac =
    result.totalPayment > 0 ? loanAmount / result.totalPayment : 0;
  const interestFrac =
    result.totalPayment > 0 ? result.totalInterest / result.totalPayment : 0;

  const downloadCsv = useCallback(() => {
    const lines = [
      "Golden Brix — EMI breakdown",
      `Loan amount,${loanAmount}`,
      `Interest rate (p.a.),${interestRate}%`,
      `Tenure (years),${tenureYears}`,
      `Monthly EMI,${Math.round(result.emi)}`,
      `Total interest,${Math.round(result.totalInterest)}`,
      `Total payment,${Math.round(result.totalPayment)}`,
      "",
      "Year,Principal paid (INR),Interest paid (INR),Closing balance (INR)",
      ...yearly.map(
        (r) =>
          `${r.year},${Math.round(r.principalPaid)},${Math.round(r.interestPaid)},${Math.round(r.closingBalance)}`,
      ),
    ];
    const blob = new Blob([lines.join("\n")], {
      type: "text/csv;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `emi-breakdown-golden-brix-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }, [loanAmount, interestRate, tenureYears, result, yearly]);

  return (
    <div className="emi-calculator-enter mx-auto w-full max-w-7xl overflow-x-hidden opacity-0">
      <div className="py-6 md:py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:items-start lg:gap-10">
          {/* LEFT — 40%: one compact form card */}
          <div className="min-w-0 lg:col-span-2">
            <div className="rounded-2xl border border-gray-100/90 bg-white p-5 shadow-lg ring-1 ring-black/[0.04] md:p-6">
              <div className="mb-4 flex items-start gap-3 border-b border-gray-100 pb-4 md:mb-5 md:pb-5">
                <div className="rounded-xl bg-gradient-to-br from-[#d4af37] to-[#f5d061] p-2 text-[#0c1b2a] shadow-sm ring-1 ring-black/5">
                  <Calculator className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div className="min-w-0 text-left">
                  <h2
                    className="text-lg font-bold text-[#0c1b2a] md:text-xl"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    Loan details
                  </h2>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Sliders or type — updates live.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4">
                <div className="md:col-span-2">
                  <SliderField
                    compact
                    label="Loan amount"
                    hint="Principal you plan to borrow"
                    min={LOAN_MIN}
                    max={LOAN_MAX}
                    step={1_00_000}
                    value={loanAmount}
                    onChange={setLoanAmount}
                    format={(n) => formatInr(n)}
                    inputSuffix="₹"
                    integerGrouping="indian"
                  />
                </div>
                <div className="min-w-0">
                  <SliderField
                    compact
                    label="Interest rate"
                    hint="Annual % (reducing)"
                    min={RATE_MIN}
                    max={RATE_MAX}
                    step={0.1}
                    value={interestRate}
                    onChange={setInterestRate}
                    format={(n) => `${n}%`}
                    inputSuffix="%"
                    valueDecimals={1}
                  />
                </div>
                <div className="min-w-0">
                  <SliderField
                    compact
                    label="Loan tenure"
                    hint="Repayment period"
                    min={TENURE_MIN}
                    max={TENURE_MAX}
                    step={1}
                    value={tenureYears}
                    onChange={setTenureYears}
                    format={(n) => `${n} yrs`}
                    inputSuffix="yrs"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — dense dashboard: no internal scroll; lg = EMI+stats | donut */}
          <div className="min-w-0 lg:col-span-3">
            <div className="rounded-2xl border border-[#C5A24A]/25 bg-gradient-to-br from-[#0b1f2e] via-[#0c2233] to-[#020617] p-4 text-white shadow-xl sm:p-5 lg:p-5 ring-1 ring-black/10 [box-shadow:0_16px_48px_rgba(11,31,46,0.16),inset_0_1px_0_rgba(255,255,255,0.06)]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-0 lg:divide-x lg:divide-white/10">
                  <div className="min-w-0 flex-1 space-y-2.5 lg:pr-4 xl:pr-5">
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 sm:text-xs">
                        Monthly EMI
                      </p>
                      <div className="mt-1 max-w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        <p
                          className="whitespace-nowrap text-3xl font-bold leading-none tracking-tight text-[#d4af37] tabular-nums sm:text-4xl lg:text-[2.35rem] lg:leading-none"
                          style={{
                            fontFamily: "var(--font-playfair), serif",
                            textShadow:
                              "0 4px 20px rgba(212, 175, 55, 0.35)",
                          }}
                        >
                          {formatInr(Math.round(animatedEmi))}
                        </p>
                      </div>
                      <p className="mt-1.5 text-xs leading-snug text-gray-400 sm:text-sm">
                        {formatIndianInteger(result.tenureMonths)} mo ·{" "}
                        {interestRate % 1 === 0
                          ? interestRate
                          : interestRate.toFixed(1)}
                        % p.a. · reducing balance
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                      <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm sm:px-3.5 sm:py-2.5">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                          Total interest
                        </p>
                        <div className="mt-1 max-w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                          <p className="whitespace-nowrap text-sm font-semibold leading-tight text-[#d4af37] tabular-nums sm:text-base">
                            {formatInr(Math.round(animatedInterest))}
                          </p>
                        </div>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm sm:px-3.5 sm:py-2.5">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                          Total payment
                        </p>
                        <div className="mt-1 max-w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                          <p className="whitespace-nowrap text-sm font-semibold leading-tight text-white tabular-nums sm:text-base">
                            {formatInr(Math.round(animatedTotal))}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="min-w-0 shrink-0 border-t border-white/10 pt-4 lg:w-[min(100%,13.5rem)] lg:border-t-0 lg:pt-0 lg:pl-4 xl:w-56 xl:pl-5">
                    <EmiDonut
                      compact
                      principalFraction={principalFrac}
                      interestFraction={interestFrac}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 border-t border-white/10 pt-3 sm:gap-3 sm:pt-3.5 lg:flex-row lg:items-center lg:gap-4">
                  <p className="min-w-0 flex-1 text-left text-[10px] leading-snug text-gray-400 sm:text-xs">
                    Indicative only. Actual EMI may vary with fees and rate
                    changes. Consult Golden Brix for tailored options.
                  </p>
                  <button
                    type="button"
                    onClick={downloadCsv}
                    className="group/dl flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f5d061] py-3 text-xs font-semibold text-[#0c1520] shadow-lg transition-all duration-300 hover:brightness-110 active:scale-[0.99] sm:text-sm lg:w-auto lg:min-w-[11rem] lg:py-3"
                  >
                    <Download className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover/dl:-translate-y-0.5 sm:h-4 sm:w-4" />
                    Download EMI breakdown
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amortization */}
      <div className="border-t border-[#C5A24A]/15 pb-12 pt-8 md:pt-10">
        <div className="overflow-hidden rounded-2xl border border-[#C5A24A]/15 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <button
            type="button"
            onClick={() => setShowTable((v) => !v)}
            className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors duration-200 hover:bg-[#faf8f3]/90 sm:px-8 sm:py-5"
          >
            <div>
              <p
                className="text-xl font-semibold text-[#0c1b2a] sm:text-2xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Yearly amortization
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Principal vs interest paid each year
              </p>
            </div>
            <ChevronDown
              className={`h-6 w-6 shrink-0 text-[#C5A24A] transition-transform duration-300 ${
                showTable ? "rotate-180" : ""
              }`}
            />
          </button>
          {showTable && (
            <div className="max-h-[min(55vh,520px)] overflow-auto border-t border-[#C5A24A]/10">
              <table className="w-full min-w-[520px] text-sm">
                <thead className="sticky top-0 z-20">
                  <tr className="border-b border-[#C5A24A]/15 bg-[#faf8f3] text-xs font-semibold uppercase tracking-wider text-[#0c1b2a]/75 shadow-sm">
                    <th className="px-4 py-3 text-left sm:px-5">Year</th>
                    <th className="px-4 py-3 text-right tabular-nums sm:px-5">
                      Principal paid
                    </th>
                    <th className="px-4 py-3 text-right tabular-nums sm:px-5">
                      Interest paid
                    </th>
                    <th className="px-4 py-3 text-right tabular-nums sm:px-5">
                      Closing balance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {yearly.map((row, index) => (
                    <tr
                      key={row.year}
                      className={`border-b border-[#0c1b2a]/5 transition-colors duration-150 hover:bg-[#C5A24A]/10 ${
                        index % 2 === 1 ? "bg-gray-50/90" : "bg-white"
                      }`}
                    >
                      <td className="px-4 py-3 font-medium text-[#0c1b2a] sm:px-5">
                        {row.year}
                      </td>
                      <td className="px-4 py-3 text-right tabular-nums text-[#0c1b2a]/85 sm:px-5">
                        {formatInr(row.principalPaid)}
                      </td>
                      <td className="px-4 py-3 text-right tabular-nums text-[#C5A24A] sm:px-5">
                        {formatInr(row.interestPaid)}
                      </td>
                      <td className="px-4 py-3 text-right tabular-nums text-[#0c1b2a]/75 sm:px-5">
                        {formatInr(row.closingBalance)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
