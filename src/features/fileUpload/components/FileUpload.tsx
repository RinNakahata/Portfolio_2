'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Card, Spinner } from '@/components';

interface FileUploadProps {
  onFileUpload?: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [dragActive, setDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileSelect(files[0]);
    }
  }, []);

  const handleFileSelect = (file: File) => {
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    if (!allowedTypes.includes(file.type)) {
      alert('PDFまたはWordファイル(.docx)のみアップロード可能です。');
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB制限
      alert('ファイルサイズが10MBを超えています。');
      return;
    }

    setUploadedFile(file);
    setIsUploading(true);
    
    // ここで実際のアップロード処理を行う（今は模擬）
    setTimeout(() => {
      setIsUploading(false);
      onFileUpload?.(file);
    }, 2000);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto overflow-hidden">
      <motion.div 
        className="text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          職務経歴書をアップロード
        </h2>
        <p className="text-gray-600">
          PDFまたはWordファイルをアップロードして、AIがスキルを分析します
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {!uploadedFile ? (
          <motion.div
            key="upload-area"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
              dragActive
                ? 'border-primary-500 bg-primary-50 scale-105'
                : 'border-gray-300 bg-gray-50 hover:border-primary-400 hover:bg-primary-25'
            }`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <motion.div 
              className="mb-4"
              animate={dragActive ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                className={`mx-auto h-12 w-12 transition-colors duration-300 ${
                  dragActive ? 'text-primary-500' : 'text-gray-400'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </motion.div>
            <motion.p 
              className="text-lg font-medium text-gray-900 mb-2"
              animate={dragActive ? { scale: 1.05 } : { scale: 1 }}
            >
              ファイルをドラッグ&ドロップ
            </motion.p>
            <p className="text-gray-600 mb-4">または</p>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".pdf,.docx"
              onChange={handleFileInputChange}
            />
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={() => document.getElementById('file-upload')?.click()}
                disabled={isUploading}
              >
                ファイルを選択
              </Button>
            </motion.div>
            <p className="text-sm text-gray-500 mt-4">
              対応形式: PDF, Word (.docx) / 最大ファイルサイズ: 10MB
            </p>
          </motion.div>
        ) : (
          <motion.div 
            key="upload-result"
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {isUploading ? (
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Spinner size="lg" />
                </motion.div>
                <motion.p 
                  className="text-lg font-medium text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  ファイルを解析中...
                </motion.p>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div 
                    className="bg-gradient-to-r from-primary-500 to-cyan-500 h-3 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </div>
                <motion.div
                  className="flex justify-center space-x-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-primary-500 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <motion.div 
                  className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <motion.svg 
                    className="w-10 h-10 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M5 13l4 4L19 7" 
                    />
                  </motion.svg>
                </motion.div>
                <motion.p 
                  className="text-xl font-semibold text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  アップロード完了！
                </motion.p>
                <motion.p 
                  className="text-gray-600 bg-gray-50 py-2 px-4 rounded-lg inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {uploadedFile.name} ({(uploadedFile.size / 1024 / 1024).toFixed(1)}MB)
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setUploadedFile(null);
                      setIsUploading(false);
                    }}
                  >
                    別のファイルを選択
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default FileUpload;