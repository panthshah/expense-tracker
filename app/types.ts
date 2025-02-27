export interface Expense {
  id: string;
  title: string;
  description: string;
  amount: number;
  date: Date;
  category: string;
  paidBy: string;
  participants: string[];
}

export interface Balance {
  person: string;
  amount: number;
} 