"use client";

export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, LogIn, Shield, User, Mail, Lock } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function PublicLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState<"holder" | "public">("holder");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "public") {
      setLoginType("public");
    } else {
      setLoginType("holder");
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (loginType === "holder") {
        window.location.href = "/public/dashboard/holder";
      } else {
        window.location.href = "/public/dashboard/public";
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-maroon-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-maroon-300/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative"
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-t-2xl p-2 flex gap-2 border-b border-gray-200">
          <button
            onClick={() => setLoginType("holder")}
            className={`flex-1 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
              loginType === "holder"
                ? "bg-maroon-600 text-white shadow-lg shadow-maroon-600/25"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <User size={18} />
            Pemegang Lesen
          </button>
          <button
            onClick={() => setLoginType("public")}
            className={`flex-1 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
              loginType === "public"
                ? "bg-maroon-600 text-white shadow-lg shadow-maroon-600/25"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <Shield size={18} />
            Orang Awam
          </button>
        </div>

        <div className="bg-white/90 backdrop-blur-xl rounded-b-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-maroon-500 to-maroon-700 text-white mb-4 shadow-lg shadow-maroon-600/30">
              {loginType === "holder" ? (
                <User size={40} />
              ) : (
                <Shield size={40} />
              )}
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              {loginType === "holder" ? "Portal Pemegang Lesen" : "Portal Awam"}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {loginType === "holder"
                ? "Log masuk untuk menguruskan lesen dan permohonan anda"
                : "Log masuk untuk permohonan dan perkhidmatan awam"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-maroon-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  required
                />
              </div>

              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Kata Laluan"
                  className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-maroon-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-maroon-600 focus:ring-maroon-500"
                />
                <span className="text-sm text-gray-600">Ingat saya</span>
              </label>
              <button
                type="button"
                className="text-sm text-maroon-600 hover:text-maroon-700 font-medium"
              >
                Lupa kata laluan?
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-maroon-600 to-maroon-700 text-white py-3 rounded-xl font-medium hover:from-maroon-700 hover:to-maroon-800 transition-all duration-300 shadow-lg shadow-maroon-600/25 flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Memproses...</span>
                </>
              ) : (
                <>
                  <LogIn size={20} />
                  <span>Log Masuk</span>
                </>
              )}
            </motion.button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/50 text-gray-500">atau</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-white border-2 border-gray-200 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Log Masuk dengan SSO MyGOV</span>
            </button>
          </form>

          {loginType === "public" && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Tidak mempunyai akaun?{" "}
                <button className="text-maroon-600 hover:text-maroon-700 font-medium">
                  Daftar di sini
                </button>
              </p>
            </div>
          )}

          <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-xs text-gray-500 mb-2">Demo Credentials:</p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Email:</span>{" "}
              {loginType === "holder" ? "lesen@demo.com" : "public@demo.com"}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Kata Laluan:</span> Demo123!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
