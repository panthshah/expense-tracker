'use client';

import React from 'react';
import { Expense } from '../app/types';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ExpenseChartProps {
  expenses: Expense[];
}

const ExpenseChart: React.FC<ExpenseChartProps> = ({ expenses }) => {
  const expensesByPerson = expenses.reduce((acc: { [key: string]: number }, expense) => {
    acc[expense.paidBy] = (acc[expense.paidBy] || 0) + expense.amount;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(expensesByPerson),
    datasets: [
      {
        label: 'Total Expenses',
        data: Object.values(expensesByPerson),
        backgroundColor: 'rgb(249, 115, 22)', // Tailwind orange-500
        borderColor: 'rgb(234, 88, 12)',      // Tailwind orange-600
        borderWidth: 1,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Expenses by Person',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 h-[calc(400px-4rem)] font-geist">
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-gray-100 shadow-sm">
        <div style={{ width: 'calc(100% - 30px)', margin: '0 auto' }}>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseChart; 