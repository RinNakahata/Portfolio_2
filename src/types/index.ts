// ユーザー関連の型定義
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

// スキル関連の型定義
export interface Skill {
  id: string;
  name: string;
  category: string;
  experienceYears: number;
  proficiencyLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

// 職務経歴書解析結果の型定義
export interface CareerAnalysis {
  skills: Skill[];
  totalExperience: number;
  careerSummary: string;
  strengths: string[];
  improvementAreas: string[];
  analyzedAt: string;
}

// 求人情報の型定義
export interface JobPosting {
  id: string;
  companyName: string;
  jobTitle: string;
  description: string;
  requiredSkills: string[];
  preferredSkills: string[];
  experienceLevel: 'Entry' | 'Mid' | 'Senior';
  location: string;
  employmentType: 'FullTime' | 'PartTime' | 'Contract' | 'Freelance';
  salaryRange: {
    min: number;
    max: number;
    currency: string;
  };
  benefits: string[];
  postedAt: string;
  applicationUrl: string;
}

// マッチング結果の型定義
export interface JobMatch {
  jobPosting: JobPosting;
  matchScore: number;
  matchedSkills: string[];
  missingSkills: string[];
  reasoning: string;
}

// ファイルアップロード関連の型定義
export interface FileUploadResult {
  fileName: string;
  fileSize: number;
  fileType: string;
  uploadedAt: string;
  extractedText: string;
}

// API レスポンスの型定義
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// ローディング状態の型定義
export interface LoadingState {
  isLoading: boolean;
  progress?: number;
  message?: string;
}

// エラー情報の型定義
export interface ErrorInfo {
  code: string;
  message: string;
  details?: Record<string, any>;
}