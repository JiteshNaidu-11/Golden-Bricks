export type EmiResult = {
  emi: number;
  totalPayment: number;
  totalInterest: number;
  tenureMonths: number;
  monthlyRate: number;
};

/**
 * EMI = [P × R × (1+R)^N] / [(1+R)^N – 1]
 * P = principal, R = monthly rate, N = months
 */
export function computeEmi(
  principal: number,
  annualInterestPercent: number,
  tenureYears: number,
): EmiResult {
  const tenureMonths = Math.max(1, Math.round(tenureYears * 12));
  const monthlyRate = annualInterestPercent / 12 / 100;

  if (principal <= 0) {
    return {
      emi: 0,
      totalPayment: 0,
      totalInterest: 0,
      tenureMonths,
      monthlyRate,
    };
  }

  if (monthlyRate <= 0) {
    const emi = principal / tenureMonths;
    return {
      emi,
      totalPayment: principal,
      totalInterest: 0,
      tenureMonths,
      monthlyRate: 0,
    };
  }

  const pow = Math.pow(1 + monthlyRate, tenureMonths);
  const emi = (principal * monthlyRate * pow) / (pow - 1);
  const totalPayment = emi * tenureMonths;
  const totalInterest = Math.max(0, totalPayment - principal);

  return { emi, totalPayment, totalInterest, tenureMonths, monthlyRate };
}

export type YearlyRow = {
  year: number;
  principalPaid: number;
  interestPaid: number;
  closingBalance: number;
};

export function buildYearlyAmortization(
  principal: number,
  annualInterestPercent: number,
  tenureYears: number,
): YearlyRow[] {
  const { emi, tenureMonths, monthlyRate } = computeEmi(
    principal,
    annualInterestPercent,
    tenureYears,
  );

  let balance = principal;
  const rows: YearlyRow[] = [];
  let yPrincipal = 0;
  let yInterest = 0;
  let displayYear = 1;

  for (let m = 1; m <= tenureMonths; m++) {
    const interest = balance * monthlyRate;
    const princ = emi - interest;
    balance = Math.max(0, balance - princ);
    yPrincipal += princ;
    yInterest += interest;

    if (m % 12 === 0 || m === tenureMonths) {
      rows.push({
        year: displayYear,
        principalPaid: yPrincipal,
        interestPaid: yInterest,
        closingBalance: balance,
      });
      displayYear += 1;
      yPrincipal = 0;
      yInterest = 0;
    }
  }

  return rows;
}
