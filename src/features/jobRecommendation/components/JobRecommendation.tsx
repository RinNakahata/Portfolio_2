'use client';

import React, { useState } from 'react';
import { Button, Card, Tag, Modal } from '@/components';
import { JobMatch, JobPosting } from '@/types';
import { DUMMY_JOB_POSTINGS } from '@/types/jobData';

interface JobRecommendationProps {
  matches?: JobMatch[] | null;
  isLoading?: boolean;
}

// ダミーマッチングデータ（開発用）
const mockMatches: JobMatch[] = [
  {
    jobPosting: DUMMY_JOB_POSTINGS[0],
    matchScore: 92,
    matchedSkills: ['TypeScript', 'React', 'Node.js'],
    missingSkills: ['Next.js', 'AWS'],
    reasoning: 'あなたのフロントエンド経験とTypeScript/Reactスキルが非常によく合致しています。'
  },
  {
    jobPosting: DUMMY_JOB_POSTINGS[1],
    matchScore: 85,
    matchedSkills: ['JavaScript', 'React', 'HTML', 'CSS'],
    missingSkills: ['TypeScript', 'Tailwind CSS'],
    reasoning: 'フロントエンド開発経験が活かせるポジションです。TypeScriptの習得で更にマッチ度が向上します。'
  },
  {
    jobPosting: DUMMY_JOB_POSTINGS[3],
    matchScore: 78,
    matchedSkills: ['React', 'TypeScript', 'CSS'],
    missingSkills: ['Figma', 'デザインシステム'],
    reasoning: 'UI/UX分野への興味があれば、あなたの技術スキルを活かせる良いポジションです。'
  }
];

const JobRecommendation: React.FC<JobRecommendationProps> = ({
  matches = mockMatches, // 開発用にダミーデータを使用
  isLoading = false
}) => {
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);

  if (isLoading) {
    return (
      <Card>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    );
  }

  if (!matches || matches.length === 0) {
    return (
      <Card>
        <div className="text-center text-gray-500">
          <h2 className="text-xl font-bold text-gray-900 mb-2">求人推薦</h2>
          <p>職務経歴書の分析完了後、あなたにマッチする求人を推薦します。</p>
        </div>
      </Card>
    );
  }

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-blue-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-gray-600';
  };

  const formatSalary = (min: number, max: number, currency: string) => {
    const formatNumber = (num: number) => {
      if (num >= 10000000) return `${(num / 10000000).toFixed(1)}千万`;
      if (num >= 10000) return `${(num / 10000).toFixed(0)}万`;
      return num.toLocaleString();
    };
    return `${formatNumber(min)} - ${formatNumber(max)}円`;
  };

  return (
    <div>
      <Card>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">あなたにおすすめの求人</h2>
          <span className="text-sm text-gray-600">{matches.length}件の求人がマッチしました</span>
        </div>

        <div className="space-y-4">
          {matches
            .sort((a, b) => b.matchScore - a.matchScore)
            .map((match, index) => (
              <div
                key={match.jobPosting.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {match.jobPosting.jobTitle}
                      </h3>
                      <div className={`text-lg font-bold ${getMatchScoreColor(match.matchScore)}`}>
                        {match.matchScore}%マッチ
                      </div>
                    </div>
                    <p className="text-gray-700 font-medium mb-1">
                      {match.jobPosting.companyName}
                    </p>
                    <p className="text-gray-600 text-sm mb-3">
                      {match.jobPosting.location} / {match.jobPosting.employmentType}
                    </p>
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {match.jobPosting.description}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">マッチしたスキル</h4>
                  <div className="flex flex-wrap gap-2">
                    {match.matchedSkills.map((skill) => (
                      <Tag key={skill} variant="success" size="sm">
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </div>

                {match.missingSkills.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">習得推奨スキル</h4>
                    <div className="flex flex-wrap gap-2">
                      {match.missingSkills.map((skill) => (
                        <Tag key={skill} variant="warning" size="sm">
                          {skill}
                        </Tag>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <p className="text-sm text-gray-600 italic">{match.reasoning}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900">
                    {formatSalary(
                      match.jobPosting.salaryRange.min,
                      match.jobPosting.salaryRange.max,
                      match.jobPosting.salaryRange.currency
                    )}
                  </span>
                  <div className="space-x-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setSelectedJob(match.jobPosting)}
                    >
                      詳細を見る
                    </Button>
                    <Button size="sm">応募する</Button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Card>

      {/* 求人詳細モーダル */}
      <Modal
        isOpen={selectedJob !== null}
        onClose={() => setSelectedJob(null)}
        title="求人詳細"
        className="max-w-2xl"
      >
        {selectedJob && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {selectedJob.jobTitle}
              </h3>
              <p className="text-lg text-gray-700 font-medium">
                {selectedJob.companyName}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-semibold">勤務地:</span> {selectedJob.location}
              </div>
              <div>
                <span className="font-semibold">雇用形態:</span> {selectedJob.employmentType}
              </div>
              <div>
                <span className="font-semibold">経験レベル:</span> {selectedJob.experienceLevel}
              </div>
              <div>
                <span className="font-semibold">給与:</span>{' '}
                {formatSalary(
                  selectedJob.salaryRange.min,
                  selectedJob.salaryRange.max,
                  selectedJob.salaryRange.currency
                )}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">職務内容</h4>
              <p className="text-gray-700">{selectedJob.description}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">必須スキル</h4>
              <div className="flex flex-wrap gap-2">
                {selectedJob.requiredSkills.map((skill) => (
                  <Tag key={skill} variant="primary" size="sm">
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">歓迎スキル</h4>
              <div className="flex flex-wrap gap-2">
                {selectedJob.preferredSkills.map((skill) => (
                  <Tag key={skill} variant="secondary" size="sm">
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">福利厚生</h4>
              <ul className="list-disc list-inside space-y-1">
                {selectedJob.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <Button className="w-full">この求人に応募する</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default JobRecommendation;