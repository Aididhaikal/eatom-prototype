'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Activity,
  User,
  Settings,
  LogOut,
  Bell,
  Search,
  ChevronRight,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
  Calendar,
  BarChart3,
  Shield,
  AlertTriangle,
  Building2,
  CreditCard,
  ClipboardList,
  Thermometer,
  Menu,
  X
} from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  read: boolean;
  timestamp: string;
}

interface Application {
  id: string;
  type: string;
  status: 'pending' | 'approved' | 'rejected' | 'review';
  date: string;
  referenceNo: string;
}

export default function LicenseHolderDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const notifications: Notification[] = [
    {
      id: '1',
      title: 'Permohonan Lesen Baru',
      message: 'Permohonan lesen anda telah diterima dan sedang diproses.',
      type: 'info',
      read: false,
      timestamp: '2026-02-23T10:30:00'
    },
    {
      id: '2',
      title: 'Peringatan Pembayaran',
      message: 'Bayaran yuran lesen perlu diselesaikan sebelum 28 Feb 2026.',
      type: 'warning',
      read: false,
      timestamp: '2026-02-22T14:20:00'
    },
    {
      id: '3',
      title: 'Pemeriksaan Dijadualkan',
      message: 'Pemeriksaan tapak akan diadakan pada 15 Mac 2026.',
      type: 'info',
      read: true,
      timestamp: '2026-02-21T09:15:00'
    }
  ];

  const applications: Application[] = [
    {
      id: 'APP001',
      type: 'Permohonan Lesen Baru',
      status: 'pending',
      date: '2026-02-20',
      referenceNo: 'LSN/2026/00234'
    },
    {
      id: 'APP002',
      type: 'Pembaharuan Lesen',
      status: 'approved',
      date: '2026-02-18',
      referenceNo: 'LSN/2026/00123'
    },
    {
      id: 'APP003',
      type: 'Pengiktirafan Pekerja',
      status: 'review',
      date: '2026-02-15',
      referenceNo: 'PRK/2026/00567'
    }
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'applications', label: 'Permohonan', icon: FileText },
    { id: 'feedback', label: 'Maklumbalas', icon: MessageSquare },
    { id: 'monitoring', label: 'Pemantauan Radiologi', icon: Activity },
    { id: 'account', label: 'Akaun Pengguna', icon: User },
    { id: 'reports', label: 'Laporan', icon: BarChart3 },
    { id: 'settings', label: 'Tetapan', icon: Settings },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-green-600 bg-green-50 border-green-200';
      case 'pending': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'rejected': return 'text-red-600 bg-red-50 border-red-200';
      case 'review': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return CheckCircle;
      case 'pending': return Clock;
      case 'rejected': return XCircle;
      case 'review': return AlertCircle;
      default: return AlertCircle;
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success': return CheckCircle;
      case 'warning': return AlertTriangle;
      case 'error': return XCircle;
      default: return Bell;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className={`fixed top-0 left-0 h-full w-80 bg-white/90 backdrop-blur-xl border-r border-gray-200 shadow-2xl z-50 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-maroon-600 to-maroon-700 flex items-center justify-center">
              <Shield className="text-white" size={24} />
            </div>
            <div>
              <h1 className="font-bold text-gray-800">eATOM</h1>
              <p className="text-xs text-gray-500">Portal Pemegang Lesen</p>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-maroon-50 to-maroon-100/50 rounded-2xl mb-6 border border-maroon-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-maroon-600 to-maroon-700 flex items-center justify-center text-white font-bold text-lg">
                AB
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">Ahmad Aiman Bin Ilyas</h3>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <Building2 size={12} />
                  Syarikat Sinaran Sdn Bhd
                </p>
                <p className="text-xs text-maroon-600 font-medium mt-1">Lesen No: LSN/2026/00123</p>
              </div>
            </div>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-maroon-600 to-maroon-700 text-white shadow-lg shadow-maroon-600/25'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
                {item.id === 'applications' && (
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    3
                  </span>
                )}
              </motion.button>
            ))}
          </nav>

          <div className="absolute bottom-6 left-6 right-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all duration-300"
            >
              <LogOut size={20} />
              <span>Log Keluar</span>
            </motion.button>
          </div>
        </div>
      </motion.aside>

      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-xl shadow-lg border border-gray-200"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <main className="lg:ml-80 p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {menuItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
            </h1>
            <p className="text-gray-500 mt-1">
              Selamat datang kembali, Ahmad. Berikut adalah ringkasan aktiviti terkini.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cari..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-maroon-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm w-64"
              />
            </div>

            <div className="relative">
              <button className="p-2 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-all duration-300 relative">
                <Bell size={20} className="text-gray-600" />
                {notifications.filter(n => !n.read).length > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200">
              <Calendar size={18} className="text-maroon-600" />
              <span className="text-sm font-medium text-gray-600">
                {new Date().toLocaleDateString('ms-MY', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Permohonan Aktif', value: '8', icon: FileText, color: 'maroon', change: '+2' },
                  { label: 'Lesen Aktif', value: '3', icon: Shield, color: 'green', change: '0' },
                  { label: 'Pemeriksaan', value: '2', icon: ClipboardList, color: 'blue', change: '+1' },
                  { label: 'Notis', value: '5', icon: Bell, color: 'orange', change: '+3' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-500 text-sm">{stat.label}</p>
                        <p className="text-3xl font-bold text-gray-800 mt-1">{stat.value}</p>
                        <p className={`text-xs mt-2 ${
                          stat.change.startsWith('+') ? 'text-green-600' : 'text-gray-500'
                        }`}>
                          {stat.change} dari minggu lepas
                        </p>
                      </div>
                      <div className={`p-3 rounded-xl bg-${stat.color}-50`}>
                        <stat.icon className={`text-${stat.color}-600`} size={24} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Permohonan Baru', icon: FileText, color: 'maroon' },
                  { label: 'Bayaran', icon: CreditCard, color: 'green' },
                  { label: 'Laporan Dos', icon: Thermometer, color: 'blue' },
                  { label: 'Pemeriksaan', icon: ClipboardList, color: 'orange' },
                ].map((action, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-4 bg-white/80 backdrop-blur-xl rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 flex items-center gap-3"
                  >
                    <div className={`p-2 rounded-lg bg-${action.color}-50`}>
                      <action.icon className={`text-${action.color}-600`} size={20} />
                    </div>
                    <span className="font-medium text-gray-700">{action.label}</span>
                    <ChevronRight size={16} className="ml-auto text-gray-400" />
                  </motion.button>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Permohonan Terkini</h2>
                    <button className="text-sm text-maroon-600 hover:text-maroon-700 font-medium">
                      Lihat Semua
                    </button>
                  </div>

                  <div className="space-y-3">
                    {applications.map((app) => {
                      const StatusIcon = getStatusIcon(app.status);
                      return (
                        <motion.div
                          key={app.id}
                          whileHover={{ scale: 1.01 }}
                          className="p-4 bg-white rounded-xl border border-gray-100 hover:border-maroon-200 transition-all duration-300"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg ${getStatusColor(app.status)}`}>
                                <StatusIcon size={18} />
                              </div>
                              <div>
                                <h3 className="font-medium text-gray-800">{app.type}</h3>
                                <p className="text-xs text-gray-500 mt-1">
                                  No. Rujukan: {app.referenceNo}
                                </p>
                                <p className="text-xs text-gray-400 mt-0.5">
                                  {new Date(app.date).toLocaleDateString('ms-MY', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric'
                                  })}
                                </p>
                              </div>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                              {app.status === 'approved' && 'Diluluskan'}
                              {app.status === 'pending' && 'Dalam Proses'}
                              {app.status === 'rejected' && 'Ditolak'}
                              {app.status === 'review' && 'Dalam Semakan'}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Notifikasi</h2>
                    <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                      {notifications.filter(n => !n.read).length} Baru
                    </span>
                  </div>

                  <div className="space-y-3">
                    {notifications.map((notif) => {
                      const Icon = getNotificationIcon(notif.type);
                      return (
                        <motion.div
                          key={notif.id}
                          whileHover={{ scale: 1.02 }}
                          className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                            notif.read
                              ? 'bg-gray-50 border-gray-200'
                              : 'bg-white border-maroon-200 shadow-sm'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${
                              notif.type === 'warning' ? 'bg-orange-50 text-orange-600' :
                              notif.type === 'success' ? 'bg-green-50 text-green-600' :
                              notif.type === 'error' ? 'bg-red-50 text-red-600' :
                              'bg-blue-50 text-blue-600'
                            }`}>
                              <Icon size={16} />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-800">{notif.title}</p>
                              <p className="text-xs text-gray-500 mt-0.5">{notif.message}</p>
                              <p className="text-xs text-gray-400 mt-1">
                                {new Date(notif.timestamp).toLocaleDateString('ms-MY', {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                  day: 'numeric',
                                  month: 'short'
                                })}
                              </p>
                            </div>
                            {!notif.read && (
                              <span className="w-2 h-2 bg-maroon-600 rounded-full"></span>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Penyata Pemilikan', icon: FileText, href: '#' },
                  { label: 'Laporan Dos', icon: Thermometer, href: '#' },
                  { label: 'Pemeriksaan Perubatan', icon: Activity, href: '#' },
                  { label: 'Pelan Kecemasan', icon: AlertTriangle, href: '#' },
                ].map((link, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    href={link.href}
                    className="p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-maroon-200 hover:bg-white transition-all duration-300 flex items-center gap-3"
                  >
                    <div className="p-2 rounded-lg bg-gray-100">
                      <link.icon size={18} className="text-gray-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{link.label}</span>
                    <ChevronRight size={14} className="ml-auto text-gray-400" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}