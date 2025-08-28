'use client';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'AIキャリアサポーター',
//   description: '未経験からITエンジニアを目指すあなたをAIがサポート',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <title>AIキャリアサポーター</title>
        <meta name="description" content="未経験からITエンジニアを目指すあなたをAIがサポート" />
      </head>
      <body className={inter.className}>
        <motion.header 
          className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
                  AIキャリアサポーター
                </h1>
              </motion.div>
              <nav className="hidden md:flex space-x-8">
                {['ダッシュボード', '求人検索', 'プロフィール'].map((item, index) => (
                  <motion.a 
                    key={item}
                    href="#" 
                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </div>
          </div>
        </motion.header>
        <main>{children}</main>
      </body>
    </html>
  )
}