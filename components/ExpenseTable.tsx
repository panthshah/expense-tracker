'use client';

import React from 'react';
import { Expense } from '../app/types';

interface ExpenseTableProps {
  expenses: Expense[];
}

const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses }) => {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const formatDate = (date: Date) => date.toLocaleDateString();
  const formatAmount = (amount: number) => amount.toFixed(2);

  return (
    <div className="font-mono p-4 max-w-2xl mx-auto">
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
        {/* Receipt Header */}
        <div className="text-center mb-4 border-b border-dashed pb-2">
          <h2 className="text-xl font-bold">EXPENSE RECEIPT</h2>
          <p>{new Date().toLocaleDateString()}</p>
        </div>

        {/* Receipt Items */}
        <div className="space-y-2 mb-4">
          {expenses.map((expense, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex-1">
                <p className="font-semibold">{expense.description}</p>
                <p className="text-sm text-gray-600">{formatDate(expense.date)}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-600">{expense.category}</span>
                <span className="font-bold">${formatAmount(expense.amount)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Receipt Footer */}
        <div className="border-t border-dashed pt-2">
          <div className="flex justify-between items-center font-bold">
            <span>TOTAL</span>
            <span>${formatAmount(total)}</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>*** Thank you for tracking ***</p>
          <p className="mt-2">------------------------</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTable; 