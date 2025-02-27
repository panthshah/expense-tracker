export interface Expense {
  id: string;
  title: string;
  amount: number;
  paidBy: string;
  participants: string[];
}

export interface Balance {
  person: string;
  amount: number;
} 