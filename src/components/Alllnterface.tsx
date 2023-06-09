export interface UserData {
  name: string;
  email: string;
  password: string;

  _id: string;
  wallet: [];
  backToSchool: [];
}

export interface BackToSchool {
  balance: number;
  credit: number;
  debit: number;
  Target: number;
  purpose: string;
}
export interface WalletData {
  balance: number;
  credit: number;
  debit: number;
  quickSave: {}[];
  saveLock: {}[];
  Target: {}[];
  invest: {}[];
  myInvestment: [];
}

export interface HistoryData {
  message: string;
  transactionReference: number;
  transactionType: string;
}

export interface Quick {
  amount: number;
  autoSave: boolean;
  dateTime: number | string;
  interest: number;
}

export interface Locks {
  amount: number;
  PayBackTime: string;
  interest: number;
  lock: boolean;
  title: string;
}

export interface TargetData {
  amount: number;
  fixedAmount: number;
  interest: number;
  dateTime: string;
  title: string;
  targetValue: boolean;
  Targetbalance: number;
}

export interface Inves {
  title: string;
  percentageInterest: number;
  description: string;
  investors: {}[];
  startTime: string;
  duration: string;
  category: string;
  status: boolean;
  totalUnit: number;
  amountPerUnit: number;
}

export interface InvestorData {
  investorId: string;
  amount: number;
  unit: number;
}

export interface checkoutpay {
  amount: string;
  name: string;
  number: string;
  cvv: string;
  expiry_month: string;
  expiry_year: string;
  pin: string;
}
