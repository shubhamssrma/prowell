'use client'
import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Package, FileText, Image, TrendingUp, Users, ShoppingCart, Eye, Calendar } from 'lucide-react';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('week');

  // Sample data
  const statsCards = [
    { title: 'Total Products', value: '1,234', change: '+12%', icon: Package, color: 'bg-blue-500' },
    { title: 'Blog Posts', value: '89', change: '+5%', icon: FileText, color: 'bg-purple-500' },
    { title: 'Gallery Items', value: '456', change: '+8%', icon: Image, color: 'bg-pink-500' },
    { title: 'Total Views', value: '45.2K', change: '+23%', icon: Eye, color: 'bg-green-500' },
  ];

  const revenueData = [
    { name: 'Mon', value: 4200 },
    { name: 'Tue', value: 3800 },
    { name: 'Wed', value: 5100 },
    { name: 'Thu', value: 4600 },
    { name: 'Fri', value: 5900 },
    { name: 'Sat', value: 6300 },
    { name: 'Sun', value: 5400 },
  ];

  const productCategoryData = [
    { name: 'Electronics', value: 35 },
    { name: 'Fashion', value: 25 },
    { name: 'Home & Garden', value: 20 },
    { name: 'Sports', value: 12 },
    { name: 'Others', value: 8 },
  ];

  const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];

  const recentActivities = [
    { action: 'New product added', item: 'Wireless Headphones Pro', time: '5 min ago', type: 'product' },
    { action: 'Blog published', item: 'Top 10 Tech Trends 2025', time: '1 hour ago', type: 'blog' },
    { action: 'Gallery updated', item: 'Summer Collection 2025', time: '2 hours ago', type: 'gallery' },
    { action: 'Product updated', item: 'Smart Watch X2', time: '3 hours ago', type: 'product' },
    { action: 'News published', item: 'Company Milestone Reached', time: '5 hours ago', type: 'news' },
  ];

  const topProducts = [
    { name: 'Premium Laptop', sales: 234, revenue: '$45,680' },
    { name: 'Wireless Mouse', sales: 189, revenue: '$8,456' },
    { name: 'Mechanical Keyboard', sales: 156, revenue: '$15,600' },
    { name: 'USB-C Hub', sales: 142, revenue: '$7,100' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your store today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-600 text-sm font-semibold">{stat.change}</span>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Revenue Overview</h2>
              <div className="flex gap-2">
                {['week', 'month', 'year'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${timeRange === range
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    {range.charAt(0).toUpperCase() + range.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Product Categories Pie Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Product Categories</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={productCategoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent ? percent * 100 : 1).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {productCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activities */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Activities</h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`p-2 rounded-lg ${activity.type === 'product' ? 'bg-blue-100' :
                      activity.type === 'blog' ? 'bg-purple-100' :
                        activity.type === 'gallery' ? 'bg-pink-100' : 'bg-green-100'
                    }`}>
                    {activity.type === 'product' ? <Package className="w-5 h-5 text-blue-600" /> :
                      activity.type === 'blog' ? <FileText className="w-5 h-5 text-purple-600" /> :
                        activity.type === 'gallery' ? <Image className="w-5 h-5 text-pink-600" /> :
                          <Calendar className="w-5 h-5 text-green-600" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.item}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Top Selling Products</h2>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.sales} sales</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{product.revenue}</p>
                    <TrendingUp className="w-4 h-4 text-green-500 ml-auto" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;