'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  FileText,
  Users,
  Megaphone,
  GraduationCap,
  Shield,
  Heart,
  MapPin,
  Bell,
  LogOut,
  Search,
  ChevronRight,
  Calendar,
  Mail,
  Building2,
  Menu,
  X
} from 'lucide-react';

export default function PublicDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'disposal', label: 'Kebenaran Pelupusan', icon: FileText },
    { id: 'speaker', label: 'Permohonan Penceramah', icon: Users },
    { id: 'outreach', label: 'Program Outreach', icon: Megaphone },
    { id: 'training', label: 'Latihan Industri', icon: GraduationCap },
    { id: 'exemption', label: 'Pengecualian Akta 304', icon: Shield },
    { id: 'medical', label: 'Lesen Perubatan', icon: Heart },
    { id: 'site-visit', label: 'Lawatan Tapak', icon: MapPin },
  ];

  const stats = [
    { label: 'Permohonan Aktif', value: '3', icon: FileText, color: 'maroon' },
    { label: 'Program Dihadiri', value: '5', icon: Megaphone, color: 'blue' },
    { label: 'Latihan Diikuti', value: '2', icon: GraduationCap, color: 'green' },
    { label: 'Notis', value: '1', icon: Bell, color: 'orange' },
  ];

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
              <p className="text-xs text-gray-500">Portal Awam</p>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-maroon-50 to-maroon-100/50 rounded-2xl mb-6 border border-maroon-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-maroon-600 to-maroon-700 flex items-center justify-center text-white font-bold text-lg">
                SN
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">Nur Sara Damia</h3>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <Mail size={12} />
                  sara@email.com
                </p>
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
              Portal Awam eATOM
            </h1>
            <p className="text-gray-500 mt-1">
              Selamat datang ke portal awam. Uruskan permohonan dan perkhidmatan anda di sini.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cari perkhidmatan..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-maroon-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm w-64"
              />
            </div>
            <button className="p-2 bg-white rounded-xl border border-gray-200 hover:bg-gray-50">
              <Bell size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
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
                </div>
                <div className={`p-3 rounded-xl bg-${stat.color}-50`}>
                  <stat.icon className={`text-${stat.color}-600`} size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.slice(1).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-maroon-50 to-maroon-100">
                  <service.icon className="text-maroon-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{service.label}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {service.id === 'disposal' && 'Permohonan kebenaran pelupusan untuk penangkap kilat, sisa, sekolah, dan awam'}
                    {service.id === 'speaker' && 'Jemputan penceramah untuk program dan seminar'}
                    {service.id === 'outreach' && 'Lawatan, kursus, dan pameran outreach'}
                    {service.id === 'training' && 'Latihan industri dan fellowship'}
                    {service.id === 'exemption' && 'Permohonan pengecualian di bawah Akta 304'}
                    {service.id === 'medical' && 'Lesen untuk tujuan perubatan'}
                    {service.id === 'site-visit' && 'Penilaian lawatan tapak'}
                  </p>
                  <button className="mt-4 text-sm text-maroon-600 hover:text-maroon-700 font-medium flex items-center gap-1">
                    Mohon Sekarang
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Permohonan Terkini</h2>
              <button className="text-sm text-maroon-600 hover:text-maroon-700">Lihat Semua</button>
            </div>
            <div className="space-y-3">
              {[
                { type: 'Kebenaran Pelupusan', status: 'Dalam Proses', date: '22 Feb 2026', ref: 'KBN/2026/001' },
                { type: 'Penceramah', status: 'Diluluskan', date: '20 Feb 2026', ref: 'PCR/2026/002' },
                { type: 'Lawatan Tapak', status: 'Menunggu', date: '18 Feb 2026', ref: 'LTP/2026/003' },
              ].map((app, index) => (
                <div key={index} className="p-3 bg-white rounded-xl border border-gray-100 hover:border-maroon-200 transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-800">{app.type}</p>
                      <p className="text-xs text-gray-500 mt-1">{app.ref}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      app.status === 'Diluluskan' ? 'bg-green-50 text-green-600' :
                      app.status === 'Dalam Proses' ? 'bg-yellow-50 text-yellow-600' :
                      'bg-blue-50 text-blue-600'
                    }`}>
                      {app.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Pengumuman</h2>
              <span className="text-xs bg-maroon-100 text-maroon-600 px-2 py-1 rounded-full">2 Baru</span>
            </div>
            <div className="space-y-3">
              {[
                { title: 'Program Kesedaran Sinaran', date: '25 Feb 2026', desc: 'Pendaftaran dibuka untuk program kesedaran sinaran' },
                { title: 'Latihan Industri 2026', date: '20 Feb 2026', desc: 'Permohonan latihan industri untuk sesi 2026 kini dibuka' },
              ].map((announcement, index) => (
                <div key={index} className="p-3 bg-white rounded-xl border border-gray-100">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-maroon-100 flex items-center justify-center">
                      <Megaphone size={20} className="text-maroon-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{announcement.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{announcement.desc}</p>
                      <p className="text-xs text-gray-400 mt-1">{announcement.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}