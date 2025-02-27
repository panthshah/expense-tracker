'use client';

import React, { useState } from 'react';
import { Expense } from '../app/types';

interface ExpenseFormProps {
  onSubmit: (expense: Expense) => void;
}

export default function ExpenseForm({ onSubmit }: ExpenseFormProps) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [paidBy, setPaidBy] = useState('');
  const [participants, setParticipants] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const expense: Expense = {
      id: Date.now().toString(),
      title,
      description: title,
      amount: parseFloat(amount),
      date: new Date(),
      category: 'General',
      paidBy,
      participants: participants.split(',').map(p => p.trim()).filter(p => p),
    };

    onSubmit(expense);
    setTitle('');
    setAmount('');
    setPaidBy('');
    setParticipants('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div className="grid gap-4">
        <div>
          <label htmlFor="title" className="block text-sm font-bold mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="windows-input w-full"
          />
        </div>
        
        <div>
          <label htmlFor="amount" className="block text-sm font-bold mb-1">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="0"
            step="0.01"
            className="windows-input w-full"
          />
        </div>

        <div>
          <label htmlFor="paidBy" className="block text-sm font-bold mb-1">
            Paid By
          </label>
          <input
            type="text"
            id="paidBy"
            value={paidBy}
            onChange={(e) => setPaidBy(e.target.value)}
            required
            className="windows-input w-full"
          />
        </div>

        <div>
          <label htmlFor="participants" className="block text-sm font-bold mb-1">
            Participants (comma-separated)
          </label>
          <input
            type="text"
            id="participants"
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
            required
            placeholder="John, Jane, Bob"
            className="windows-input w-full"
          />
        </div>
      </div>
      
      <button
        type="submit"
        className="w-full h-fit py-2 px-4 rounded-[32px] bg-black text-white font-bold hover:bg-gray-800 transition-colors"
      >
        Add Expense
      </button>
    </form>
  );
} 