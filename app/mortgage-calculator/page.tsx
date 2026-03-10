'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Info, ChevronDown, ChevronUp, X } from 'lucide-react';

export default function MortgageCalculator() {
  const [propertyValue, setPropertyValue] = useState(1500000);
  const [fixedRate, setFixedRate] = useState(3.99);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanDuration, setLoanDuration] = useState(25);
  const [financeAcquisitionFees, setFinanceAcquisitionFees] = useState(false);
  const [showUpfrontDetails, setShowUpfrontDetails] = useState(false);
  const [showFeesBreakdown, setShowFeesBreakdown] = useState(false);

  // Calculations
  const downPaymentAmount = (propertyValue * downPaymentPercent) / 100;
  const loanAmount = propertyValue - downPaymentAmount;

  // Acquisition Fees Breakdown
  const landDepartmentFee = (propertyValue * 0.04) + 580;
  const registrationFee = 4000 * 1.05; // 4,000 AED + 5% VAT
  const mortgageRegistrationFee = (loanAmount * 0.0025) + 10;
  const realEstateAgencyFee = (propertyValue * 0.02) * 1.05; // 2% + 5% VAT
  const bankArrangementFee = (loanAmount * 0.0025) * 1.05; // 0.25% + 5% VAT
  const valuationFee = 2500 * 1.05; // Average 2,500 AED + 5% VAT
  
  const totalAcquisitionFees = 
    landDepartmentFee + 
    registrationFee + 
    mortgageRegistrationFee + 
    realEstateAgencyFee + 
    bankArrangementFee + 
    valuationFee;

  // Total Mortgage Amount
  const totalMortgageAmount = financeAcquisitionFees 
    ? loanAmount + totalAcquisitionFees 
    : loanAmount;

  // Monthly Payment Calculation (using standard mortgage formula)
  const monthlyRate = fixedRate / 100 / 12;
  const numberOfPayments = loanDuration * 12;
  const monthlyPayment = totalMortgageAmount * 
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  // Amount Required Upfront
  const amountRequiredUpfront = financeAcquisitionFees 
    ? downPaymentAmount 
    : downPaymentAmount + totalAcquisitionFees;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <main className="min-h-screen bg-white text-[#001F3F]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#001F3F] to-[#003366]">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            UAE Mortgage Calculator
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Our free <strong>UAE mortgage calculator</strong> helps you simulate your UAE home finance total down-payment, monthly payments and acquisition fees.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-[#C5A24A]/5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:items-start items-center">
            {/* Left Side - Results */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#C5A24A]/20 w-full max-w-2xl lg:max-w-none">
              <h2 
                className="text-xl font-bold mb-2 text-[#001F3F]/70 uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Monthly Installments
              </h2>
              <div 
                className="text-4xl sm:text-5xl font-bold mb-8 gold-gradient-text"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                {formatCurrency(monthlyPayment)} <span className="text-2xl sm:text-3xl text-[#001F3F]/60">AED / Month</span>
              </div>
              
              {/* Summary Cards */}
              <div className="space-y-4 pt-6 border-t border-[#C5A24A]/20">
                <div className="flex justify-between items-center">
                  <span className="text-[#001F3F]/70 font-medium">Property Value</span>
                  <span className="font-bold text-[#001F3F]">{formatCurrency(propertyValue)} AED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#001F3F]/70 font-medium">Down Payment ({downPaymentPercent}%)</span>
                  <span className="font-bold text-[#001F3F]">{formatCurrency(downPaymentAmount)} AED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#001F3F]/70 font-medium">Loan Duration</span>
                  <span className="font-bold text-[#001F3F]">{loanDuration} Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#001F3F]/70 font-medium">Interest Rate</span>
                  <span className="font-bold text-[#001F3F]">{fixedRate}%</span>
                </div>
              </div>
            </div>

            {/* Right Side - Calculator Inputs */}
            <div className="space-y-6 w-full max-w-2xl lg:max-w-none">
              {/* Property Value and Fixed Rate */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#C5A24A]/20">
                  <label className="flex items-center gap-2 font-semibold mb-3 text-[#001F3F] text-sm uppercase tracking-wide">
                    Property Value (AED)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={propertyValue}
                    onChange={(e) => {
                      const value = e.target.value === '' ? 1 : Number(e.target.value);
                      if (value > 0) {
                        setPropertyValue(value);
                      }
                    }}
                    onFocus={(e) => e.target.select()}
                    className="w-full px-4 py-3 border-2 border-[#C5A24A]/30 rounded-lg focus:border-[#C5A24A] focus:outline-none transition-all text-lg font-bold text-[#001F3F]"
                  />
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#C5A24A]/20">
                  <label className="flex items-center gap-2 font-semibold mb-3 text-[#001F3F] text-sm uppercase tracking-wide">
                    Fixed Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0.01"
                    value={fixedRate}
                    onChange={(e) => {
                      const value = e.target.value === '' ? 0.01 : Number(e.target.value);
                      if (value > 0) {
                        setFixedRate(value);
                      }
                    }}
                    onFocus={(e) => e.target.select()}
                    className="w-full px-4 py-3 border-2 border-[#C5A24A]/30 rounded-lg focus:border-[#C5A24A] focus:outline-none transition-all text-lg font-bold text-[#001F3F]"
                  />
                </div>
              </div>

              {/* Down Payment */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#C5A24A]/20">
                <div className="flex justify-between items-center mb-4">
                  <label className="font-semibold text-[#001F3F] text-sm uppercase tracking-wide">Down Payment</label>
                  <div className="flex items-center gap-3">
                    <span className="gold-gradient text-white px-4 py-1.5 rounded-lg text-sm font-bold shadow-md">
                      {downPaymentPercent}%
                    </span>
                    <span className="font-bold text-[#001F3F] text-lg">
                      {formatCurrency(downPaymentAmount)} AED
                    </span>
                  </div>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full h-2 bg-[#C5A24A]/20 rounded-lg appearance-none cursor-pointer accent-[#C5A24A]"
                  style={{
                    background: `linear-gradient(to right, #C5A24A 0%, #C5A24A ${(downPaymentPercent - 10) / 0.4}%, #e5e7eb ${(downPaymentPercent - 10) / 0.4}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-[#001F3F]/50 mt-2">
                  <span>10%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Loan Duration */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#C5A24A]/20">
                <div className="flex justify-between items-center mb-4">
                  <label className="font-semibold text-[#001F3F] text-sm uppercase tracking-wide">Loan Duration</label>
                  <span className="font-bold text-[#001F3F] text-lg">{loanDuration} Years</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="25"
                  step="1"
                  value={loanDuration}
                  onChange={(e) => setLoanDuration(Number(e.target.value))}
                  className="w-full h-2 bg-[#C5A24A]/20 rounded-lg appearance-none cursor-pointer accent-[#C5A24A]"
                  style={{
                    background: `linear-gradient(to right, #C5A24A 0%, #C5A24A ${(loanDuration - 5) / 0.2}%, #e5e7eb ${(loanDuration - 5) / 0.2}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-[#001F3F]/50 mt-2">
                  <span>5 Years</span>
                  <span>25 Years</span>
                </div>
              </div>

              {/* Finance Acquisition Fees Toggle */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#C5A24A]/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <label className="font-semibold text-[#001F3F] text-sm uppercase tracking-wide">Finance acquisition fees</label>
                  <button
                    onClick={() => setShowFeesBreakdown(true)}
                    className="text-[#C5A24A] hover:text-[#EBD181] transition-colors"
                    title="View fees breakdown"
                  >
                    <Info className="w-5 h-5" />
                  </button>
                </div>
                <button
                  onClick={() => setFinanceAcquisitionFees(!financeAcquisitionFees)}
                  className={`relative w-14 h-7 rounded-full transition-all duration-300 shadow-inner ${
                    financeAcquisitionFees ? 'gold-gradient' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
                      financeAcquisitionFees ? 'translate-x-8' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Total Mortgage Amount */}
              <div className="bg-gradient-to-br from-[#001F3F] to-[#003366] rounded-xl p-8 shadow-2xl border-2 border-[#C5A24A]/30">
                <div className="flex justify-between items-center mb-6">
                  <span 
                    className="font-bold text-lg text-white/90 uppercase tracking-wide"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    Total Mortgage Amount
                  </span>
                  <span 
                    className="font-bold text-2xl gold-gradient-text"
                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                  >
                    {formatCurrency(totalMortgageAmount)} AED
                  </span>
                </div>

                {/* Amount Required Upfront */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <button
                    onClick={() => setShowUpfrontDetails(!showUpfrontDetails)}
                    className="w-full flex justify-between items-center py-2 hover:bg-white/5 transition-colors rounded-lg px-2"
                  >
                    <span className="font-bold text-white uppercase tracking-wide text-sm">Amount required upfront</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#EBD181] text-lg">
                        {formatCurrency(amountRequiredUpfront)} AED
                      </span>
                      {showUpfrontDetails ? (
                        <ChevronUp className="w-5 h-5 text-[#EBD181]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#EBD181]" />
                      )}
                    </div>
                  </button>

                  {showUpfrontDetails && (
                    <div className="ml-4 mt-4 space-y-3 text-white/80 border-t border-white/20 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Downpayment amount</span>
                        <span className="font-semibold text-white">{formatCurrency(downPaymentAmount)} AED</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Total acquisition fees</span>
                        <span className="font-semibold text-white">{formatCurrency(totalAcquisitionFees)} AED</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acquisition Fees Breakdown Modal */}
      {showFeesBreakdown && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 sm:p-10 relative shadow-2xl border-4 border-[#C5A24A]/30 animate-fadeInUp">
            <button
              onClick={() => setShowFeesBreakdown(false)}
              className="absolute top-6 right-6 text-[#001F3F]/50 hover:text-[#C5A24A] transition-all hover:scale-110 hover:rotate-90 duration-300"
            >
              <X className="w-7 h-7" />
            </button>

            <h2 
              className="text-3xl sm:text-4xl font-bold mb-3 gold-gradient-text text-center"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Acquisition Fees Breakdown
            </h2>
            <p className="text-center text-[#001F3F]/60 mb-8">
              Detailed breakdown of all fees payable when purchasing a property in the UAE
            </p>

            <div className="space-y-4">
              {/* Land Department Fee */}
              <div className="bg-gradient-to-br from-[#C5A24A]/5 to-[#EBD181]/10 border-2 border-[#C5A24A]/20 rounded-xl p-5 hover:shadow-lg transition-all">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 
                      className="font-bold text-lg text-[#001F3F] mb-1"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      Land Department Fee
                    </h3>
                    <p className="text-sm text-[#001F3F]/60">4% of the property value + 580 AED admin fee</p>
                  </div>
                  <div className="text-right">
                    <div className="gold-gradient-text font-bold text-xl">
                      {formatCurrency(landDepartmentFee)} AED
                    </div>
                  </div>
                </div>
              </div>

              {/* Registration Fee */}
              <div className="bg-gradient-to-br from-[#C5A24A]/5 to-[#EBD181]/10 border-2 border-[#C5A24A]/20 rounded-xl p-5 hover:shadow-lg transition-all">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-[#001F3F] mb-1" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                      Registration Fee
                    </h3>
                    <p className="text-sm text-[#001F3F]/60">4,000 AED for properties over 500,000 AED + 5% VAT</p>
                  </div>
                  <div className="text-right">
                    <div className="gold-gradient-text font-bold text-xl">
                      {formatCurrency(registrationFee)} AED
                    </div>
                  </div>
                </div>
              </div>

              {/* Mortgage Registration Fee */}
              <div className="bg-gradient-to-br from-[#C5A24A]/5 to-[#EBD181]/10 border-2 border-[#C5A24A]/20 rounded-xl p-5 hover:shadow-lg transition-all">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-[#001F3F] mb-1" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                      Mortgage Registration Fee
                    </h3>
                    <p className="text-sm text-[#001F3F]/60">0.25% of the loan amount + 10 AED admin fee</p>
                  </div>
                  <div className="text-right">
                    <div className="gold-gradient-text font-bold text-xl">
                      {formatCurrency(mortgageRegistrationFee)} AED
                    </div>
                  </div>
                </div>
              </div>

              {/* Real Estate Agency Fee */}
              <div className="bg-gradient-to-br from-[#C5A24A]/5 to-[#EBD181]/10 border-2 border-[#C5A24A]/20 rounded-xl p-5 hover:shadow-lg transition-all">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-[#001F3F] mb-1" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                      Real Estate Agency Fee
                    </h3>
                    <p className="text-sm text-[#001F3F]/60">Typically 2% of the property value + 5% VAT</p>
                  </div>
                  <div className="text-right">
                    <div className="gold-gradient-text font-bold text-xl">
                      {formatCurrency(realEstateAgencyFee)} AED
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank Arrangement Fee */}
              <div className="bg-gradient-to-br from-[#C5A24A]/5 to-[#EBD181]/10 border-2 border-[#C5A24A]/20 rounded-xl p-5 hover:shadow-lg transition-all">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-[#001F3F] mb-1" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                      Bank Arrangement Fee
                    </h3>
                    <p className="text-sm text-[#001F3F]/60">Discounted to 0.25% of the loan amount + 5% VAT</p>
                  </div>
                  <div className="text-right">
                    <div className="gold-gradient-text font-bold text-xl">
                      {formatCurrency(bankArrangementFee)} AED
                    </div>
                  </div>
                </div>
              </div>

              {/* Valuation Fee */}
              <div className="bg-gradient-to-br from-[#C5A24A]/5 to-[#EBD181]/10 border-2 border-[#C5A24A]/20 rounded-xl p-5 hover:shadow-lg transition-all">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-[#001F3F] mb-1" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                      Valuation Fee
                    </h3>
                    <p className="text-sm text-[#001F3F]/60">Between 2,500 and 3,500 AED + 5% VAT</p>
                  </div>
                  <div className="text-right">
                    <div className="gold-gradient-text font-bold text-xl">
                      {formatCurrency(valuationFee)} AED
                    </div>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="mt-6 pt-6 border-t-4 border-[#C5A24A]/30">
                <div className="bg-gradient-to-br from-[#001F3F] to-[#003366] rounded-2xl p-6 shadow-xl">
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex-1">
                      <h3 
                        className="font-bold text-2xl text-white mb-1"
                        style={{ fontFamily: 'var(--font-playfair), serif' }}
                      >
                        Total Acquisition Fees
                      </h3>
                      <p className="text-sm text-white/70">Fees payable when purchasing a property in the UAE</p>
                    </div>
                    <div className="text-right">
                      <div className="gold-gradient-text font-bold text-3xl">
                        {formatCurrency(totalAcquisitionFees)} AED
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

