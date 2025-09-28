import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  DollarSign, 
  TrendingUp, 
  PieChart, 
  CreditCard, 
  Target,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  Calendar,
  Settings,
  User
} from 'lucide-react';

// Dashboard Component
function Dashboard() {
  const [transactions] = useState([
    { id: 1, description: 'Salary', amount: 5000, type: 'income', date: '2025-01-15', category: 'Income' },
    { id: 2, description: 'Groceries', amount: -120, type: 'expense', date: '2025-01-14', category: 'Food' },
    { id: 3, description: 'Gas', amount: -60, type: 'expense', date: '2025-01-13', category: 'Transportation' },
    { id: 4, description: 'Freelance', amount: 800, type: 'income', date: '2025-01-12', category: 'Income' },
    { id: 5, description: 'Utilities', amount: -200, type: 'expense', date: '2025-01-11', category: 'Bills' },
  ]);

  const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + Math.abs(t.amount), 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div className="space-y-6">
      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Balance</p>
              <p className="text-2xl font-bold text-gray-900">${balance.toLocaleString()}</p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Wallet className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Income</p>
              <p className="text-2xl font-bold text-green-600">${totalIncome.toLocaleString()}</p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <ArrowUpRight className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Expenses</p>
              <p className="text-2xl font-bold text-red-600">${totalExpenses.toLocaleString()}</p>
            </div>
            <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center">
              <ArrowDownRight className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="h-4 w-4 mr-2" />
              Add Transaction
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-100">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                  transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {transaction.type === 'income' ? (
                    <ArrowUpRight className="h-5 w-5 text-green-600" />
                  ) : (
                    <ArrowDownRight className="h-5 w-5 text-red-600" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{transaction.description}</p>
                  <p className="text-sm text-gray-500">{transaction.category} • {transaction.date}</p>
                </div>
              </div>
              <div className={`font-semibold ${
                transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.type === 'income' ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Transactions Component
function Transactions() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">All Transactions</h2>
      <p className="text-gray-600">Transaction management coming soon...</p>
    </div>
  );
}

// Analytics Component
function Analytics() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Financial Analytics</h2>
      <p className="text-gray-600">Analytics dashboard coming soon...</p>
    </div>
  );
}

// Goals Component
function Goals() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Financial Goals</h2>
      <p className="text-gray-600">Goal tracking coming soon...</p>
    </div>
  );
}

// Navigation Component
function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Dashboard', icon: DollarSign },
    { path: '/transactions', label: 'Transactions', icon: CreditCard },
    { path: '/analytics', label: 'Analytics', icon: PieChart },
    { path: '/goals', label: 'Goals', icon: Target },
  ];

  return (
    <nav className="bg-white border-r border-gray-200 w-64 min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <DollarSign className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">SmartFinance</h1>
        </div>
      </div>
      
      <div className="px-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg mb-1 transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-gray-200">
        <div className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
          <Settings className="h-5 w-5" />
          <span className="font-medium">Settings</span>
        </div>
        <div className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
          <User className="h-5 w-5" />
          <span className="font-medium">Profile</span>
        </div>
      </div>
    </nav>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex">
        <Navigation />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/goals" element={<Goals />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;