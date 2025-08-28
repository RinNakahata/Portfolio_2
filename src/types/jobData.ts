import { JobPosting } from './index';

// ダミー求人データ（要件定義書に従い10-20件のデータを用意）
export const DUMMY_JOB_POSTINGS: JobPosting[] = [
  {
    id: '1',
    companyName: 'フューチャーテック株式会社',
    jobTitle: 'フルスタックエンジニア',
    description: 'TypeScript、React、Node.jsを使用したWebアプリケーション開発。週4-5日のフルリモート勤務可能。',
    requiredSkills: ['TypeScript', 'React', 'Node.js'],
    preferredSkills: ['Next.js', 'AWS', 'Docker'],
    experienceLevel: 'Entry',
    location: '東京都（フルリモート可）',
    employmentType: 'FullTime',
    salaryRange: {
      min: 4000000,
      max: 6000000,
      currency: 'JPY'
    },
    benefits: ['フルリモート', '週4-5日勤務', '技術書購入補助'],
    postedAt: '2024-01-15',
    applicationUrl: 'https://example.com/apply/1'
  },
  {
    id: '2',
    companyName: 'テックスタートアップ株式会社',
    jobTitle: 'フロントエンドエンジニア',
    description: 'React/Next.jsを使用したモダンなWebアプリケーション開発。',
    requiredSkills: ['JavaScript', 'React', 'HTML', 'CSS'],
    preferredSkills: ['TypeScript', 'Tailwind CSS', 'Vercel'],
    experienceLevel: 'Entry',
    location: '東京都渋谷区',
    employmentType: 'FullTime',
    salaryRange: {
      min: 3500000,
      max: 5500000,
      currency: 'JPY'
    },
    benefits: ['裁量労働制', 'ストックオプション', '最新機器貸与'],
    postedAt: '2024-01-10',
    applicationUrl: 'https://example.com/apply/2'
  },
  {
    id: '3',
    companyName: 'デジタルソリューションズ',
    jobTitle: 'バックエンドエンジニア',
    description: 'Node.js/Express、MongoDB、AWSを使用したサーバーサイド開発。',
    requiredSkills: ['Node.js', 'Express', 'MongoDB'],
    preferredSkills: ['AWS', 'Docker', 'GraphQL'],
    experienceLevel: 'Mid',
    location: '大阪府大阪市',
    employmentType: 'FullTime',
    salaryRange: {
      min: 5000000,
      max: 7500000,
      currency: 'JPY'
    },
    benefits: ['リモートワーク可', '技術研修充実', '副業OK'],
    postedAt: '2024-01-12',
    applicationUrl: 'https://example.com/apply/3'
  },
  {
    id: '4',
    companyName: 'モダンWebカンパニー',
    jobTitle: 'UI/UXエンジニア',
    description: 'React、TypeScript、Figmaを使用したUIコンポーネント設計・開発。',
    requiredSkills: ['React', 'TypeScript', 'CSS'],
    preferredSkills: ['Figma', 'Storybook', 'デザインシステム'],
    experienceLevel: 'Entry',
    location: 'フルリモート',
    employmentType: 'FullTime',
    salaryRange: {
      min: 4500000,
      max: 6500000,
      currency: 'JPY'
    },
    benefits: ['フルリモート', 'フレックス勤務', 'デザインツール支給'],
    postedAt: '2024-01-08',
    applicationUrl: 'https://example.com/apply/4'
  },
  {
    id: '5',
    companyName: 'クラウドテック株式会社',
    jobTitle: 'DevOpsエンジニア',
    description: 'AWS、Docker、Kubernetesを使用したインフラ構築・運用。',
    requiredSkills: ['AWS', 'Docker', 'Linux'],
    preferredSkills: ['Kubernetes', 'Terraform', 'CI/CD'],
    experienceLevel: 'Mid',
    location: '東京都新宿区',
    employmentType: 'FullTime',
    salaryRange: {
      min: 6000000,
      max: 9000000,
      currency: 'JPY'
    },
    benefits: ['AWS資格取得支援', 'リモートワーク', '勉強会参加支援'],
    postedAt: '2024-01-05',
    applicationUrl: 'https://example.com/apply/5'
  },
  {
    id: '6',
    companyName: 'アジャイル開発株式会社',
    jobTitle: 'スクラムマスター兼エンジニア',
    description: 'アジャイル開発のファシリテーションとReact開発を両立。',
    requiredSkills: ['React', 'アジャイル開発', 'チームリード経験'],
    preferredSkills: ['Scrum Master資格', 'プロジェクト管理', 'コーチング'],
    experienceLevel: 'Senior',
    location: '東京都港区',
    employmentType: 'FullTime',
    salaryRange: {
      min: 7000000,
      max: 10000000,
      currency: 'JPY'
    },
    benefits: ['資格取得支援', 'カンファレンス参加費支給', 'チームビルディング'],
    postedAt: '2024-01-03',
    applicationUrl: 'https://example.com/apply/6'
  },
  {
    id: '7',
    companyName: 'スマートソリューションズ株式会社',
    jobTitle: 'React Native エンジニア',
    description: 'React Nativeを使用したモバイルアプリ開発。iOS/Android対応。',
    requiredSkills: ['React Native', 'JavaScript', 'TypeScript'],
    preferredSkills: ['Expo', 'Firebase', 'Redux'],
    experienceLevel: 'Mid',
    location: '東京都品川区',
    employmentType: 'FullTime',
    salaryRange: {
      min: 5500000,
      max: 8000000,
      currency: 'JPY'
    },
    benefits: ['リモートワーク可', 'モバイルデバイス支給', '技術書籍購入支援'],
    postedAt: '2024-01-14',
    applicationUrl: 'https://example.com/apply/7'
  },
  {
    id: '8',
    companyName: 'AI テックスタジオ',
    jobTitle: 'データサイエンティスト',
    description: 'Python、機械学習を活用したデータ分析・予測モデル構築。',
    requiredSkills: ['Python', 'Pandas', 'scikit-learn'],
    preferredSkills: ['TensorFlow', 'PyTorch', 'SQL'],
    experienceLevel: 'Entry',
    location: 'フルリモート',
    employmentType: 'FullTime',
    salaryRange: {
      min: 4800000,
      max: 7200000,
      currency: 'JPY'
    },
    benefits: ['フルリモート', 'GPU環境提供', 'カンファレンス参加支援'],
    postedAt: '2024-01-11',
    applicationUrl: 'https://example.com/apply/8'
  }
];