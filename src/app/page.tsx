'use client';

import { motion } from 'framer-motion';
import FileUpload from '@/features/fileUpload/components/FileUpload'
import SummaryDashboard from '@/features/summaryDashboard/components/SummaryDashboard'
import JobRecommendation from '@/features/jobRecommendation/components/JobRecommendation'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AIがあなたのキャリアをサポート
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            職務経歴書をアップロードして、AIがスキルを分析し最適な求人を推薦します
          </motion.p>
          <motion.div
            className="flex justify-center space-x-8 mb-8"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-2 text-primary-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">AI解析</span>
            </div>
            <div className="flex items-center space-x-2 text-primary-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">求人マッチング</span>
            </div>
            <div className="flex items-center space-x-2 text-primary-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">キャリア支援</span>
            </div>
          </motion.div>
        </motion.div>

        {/* File Upload Section */}
        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <FileUpload />
        </motion.div>

        {/* Summary Dashboard Section */}
        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <SummaryDashboard />
        </motion.div>

        {/* Job Recommendation Section */}
        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <JobRecommendation />
        </motion.div>

        {/* Footer CTA */}
        <motion.div 
          className="text-center py-12 border-t border-gray-200"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            今すぐキャリア分析を始めませんか？
          </h3>
          <p className="text-gray-600 mb-6">
            数分で完了する分析で、あなたの可能性を発見しましょう
          </p>
          <motion.button
            className="bg-gradient-to-r from-primary-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            分析を開始する
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}