export interface HebData {
    welcomeTitle: string;
    welcomeDescription: string;
    personalDetailsTitle: string;
    summaryTitle: string;
    card1: {
      titles: {
        transferredAmountTitle: string;
        installmentsNumber: string;
        firstPeriodicPayment: string;
        firstPeriodicPaymentDueDate: string;
        interestForPaymentDeferral: string;
      };
      values: {
        transferredAmountTitle: string;
        installmentsNumber: string;
        firstPeriodicPayment: string;
        firstPeriodicPaymentDueDate: string;
        interestForPaymentDeferral: string;
      };
    };
    card2: {
      titles: {
        primeInterestRate: string;
        interestMargin: string;
        digitalDiscount: string;
        nominalInterestRate: string;
        adjustedInterestRate: string;
      };
      values: {
        primeInterestRate: string;
        interestMargin: string;
        digitalDiscount: string;
        nominalInterestRate: string;
        adjustedInterestRate: string;
      };
    };
    termsOfTheLoan: string;
    continue: string;
    return: string;
  }
  