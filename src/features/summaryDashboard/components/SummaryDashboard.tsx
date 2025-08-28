'use client';

import React from 'react';
import { Card, Tag } from '@/components';
import { CareerAnalysis } from '@/types';

interface SummaryDashboardProps {
  analysis?: CareerAnalysis | null;
  isLoading?: boolean;
}

// ダミーデータ（開発用）
const mockAnalysis: CareerAnalysis = {
  skills: [
    { id: '1', name: 'JavaScript', category: 'Programming', experienceYears: 2, proficiencyLevel: 'Intermediate' },
    { id: '2', name: 'React', category: 'Frontend', experienceYears: 1.5, proficiencyLevel: 'Intermediate' },
    { id: '3', name: 'Node.js', category: 'Backend', experienceYears: 1, proficiencyLevel: 'Beginner' },
    { id: '4', name: 'HTML/CSS', category: 'Frontend', experienceYears: 3, proficiencyLevel: 'Advanced' },
    { id: '5', name: 'Git', category: 'Tools', experienceYears: 2, proficiencyLevel: 'Intermediate' },
  ],
  totalExperience: 3,
  careerSummary: 'フロントエンド開発を中心に3年間のIT業務経験があります。特にJavaScriptとReactを使用したWebアプリケーション開発に従事しており、ユーザーインターフェースの構築と改善に取り組んできました。',
  strengths: [
    'フロントエンド技術への深い理解',
    'ユーザビリティを重視した開発姿勢',
    '継続的な学習意欲'
  ],
  improvementAreas: [
    'バックエンド技術の習得',
    'データベース設計の知識',
    'テスト駆動開発の実践'
  ],
  analyzedAt: '2024-01-15T10:30:00Z'
};

const SummaryDashboard: React.FC<SummaryDashboardProps> = ({
  analysis = mockAnalysis, // 開発用にダミーデータを使用
  isLoading = false
}) => {
  if (isLoading) {
    return (
      <Card>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </Card>
    );
  }

  if (!analysis) {
    return (
      <Card>
        <div className="text-center text-gray-500">
          <p>職務経歴書をアップロードすると、AIが自動で分析結果を表示します。</p>
        </div>
      </Card>
    );
  }

  const getProficiencyColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'success';
      case 'Advanced':
        return 'primary';
      case 'Intermediate':
        return 'warning';
      case 'Beginner':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Programming':
        return 'primary';
      case 'Frontend':
        return 'success';
      case 'Backend':
        return 'warning';
      case 'Tools':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      {/* キャリアサマリー */}
      <Card>
        <h2 className="text-xl font-bold text-gray-900 mb-4">キャリア分析結果</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {analysis.totalExperience}
            </div>
            <div className="text-gray-600">年間の経験</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {analysis.skills.length}
            </div>
            <div className="text-gray-600">スキル</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {analysis.skills.filter(s => s.proficiencyLevel === 'Advanced' || s.proficiencyLevel === 'Expert').length}
            </div>
            <div className="text-gray-600">上級スキル</div>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          {analysis.careerSummary}
        </p>
      </Card>

      {/* スキル一覧 */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">スキル詳細</h3>
        <div className="space-y-4">
          {analysis.skills.map((skill) => (
            <div key={skill.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <Tag variant={getCategoryColor(skill.category)} size="sm">
                  {skill.category}
                </Tag>
                <span className="font-medium text-gray-900">{skill.name}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">
                  {skill.experienceYears}年
                </span>
                <Tag variant={getProficiencyColor(skill.proficiencyLevel)} size="sm">
                  {skill.proficiencyLevel}
                </Tag>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 強みと改善点 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <span className="text-green-600 mr-2">✓</span>
            強み
          </h3>
          <ul className="space-y-2">
            {analysis.strengths.map((strength, index) => (
              <li key={index} className="text-gray-700 flex items-start">
                <span className="text-green-600 mr-2 mt-1">•</span>
                {strength}
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <span className="text-orange-600 mr-2">⚡</span>
            改善ポイント
          </h3>
          <ul className="space-y-2">
            {analysis.improvementAreas.map((area, index) => (
              <li key={index} className="text-gray-700 flex items-start">
                <span className="text-orange-600 mr-2 mt-1">•</span>
                {area}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default SummaryDashboard;