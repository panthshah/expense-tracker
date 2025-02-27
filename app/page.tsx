'use client';

import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import BalanceOverview from '../components/BalanceOverview';
import ExpenseChart from '../components/ExpenseChart';
import { Expense } from './types';

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    // Ensure date is properly handled
    const newExpense = {
      ...expense,
      date: new Date(expense.date)
    };
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="p-4 space-y-4">
      <div className="grid md:grid-cols-2 gap-4 mb-4 items-stretch">
        <div className="bg-white rounded-lg shadow-sm h-full">
          <div className="border-b p-4">
            <h2 className="font-bold text-lg">Add New Expense</h2>
          </div>
          <ExpenseForm onSubmit={addExpense} />
        </div>
        
        <div className="bg-white rounded-lg shadow-sm h-full flex flex-col">
          <div className="border-b p-4">
            <h2 className="font-bold text-lg">Expense Analytics</h2>
          </div>
          <div className="flex-1">
            <ExpenseChart expenses={expenses} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b p-4">
          <h2 className="font-bold text-lg">Balance Summary</h2>
        </div>
        <BalanceOverview expenses={expenses} />
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b p-4">
          <h2 className="font-bold text-lg">Recent Expenses</h2>
        </div>
        <ExpenseTable expenses={expenses} />
      </div>
    </div>
  );
} 