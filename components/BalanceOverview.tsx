import React from 'react';
import { Expense, Balance } from '../app/types';

interface BalanceOverviewProps {
  expenses: Expense[];
}

export default function BalanceOverview({ expenses }: BalanceOverviewProps) {
  const calculateBalances = (expenses: Expense[]): Balance[] => {
    const balances: { [key: string]: number } = {};

    // Calculate each person's balance
    expenses.forEach((expense) => {
      const perPersonAmount = expense.amount / expense.participants.length;

      // Add the full amount to the person who paid
      balances[expense.paidBy] = (balances[expense.paidBy] || 0) + expense.amount;

      // Subtract the share from each participant
      expense.participants.forEach((participant) => {
        balances[participant] = (balances[participant] || 0) - perPersonAmount;
      });
    });

    return Object.entries(balances).map(([person, amount]) => ({
      person,
      amount,
    }));
  };

  const balances = calculateBalances(expenses);

  return (
    <div className="p-4">
      <div className="space-y-4">
        <div className="grid gap-2">
          {balances.map(({ person, amount }) => (
            <div key={person} className="flex justify-between items-center">
              <span>{person}</span>
              <span className={amount >= 0 ? 'text-green-600' : 'text-red-600'}>
                {amount >= 0 ? 'gets back' : 'owes'} ${Math.abs(amount).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 