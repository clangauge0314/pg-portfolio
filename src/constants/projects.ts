import { Heart, Brain, Vote, Timer, Building2 } from 'lucide-react';
import type { Language } from '@/store/languageStore';

type LocalizedText = {
  ko: string;
  ja: string;
  en: string;
};

export type ProjectId =
  | 'diabeats'
  | 'titanic-ai'
  | 'vote-community'
  | 'electron-timer'
  | 'company-website';

interface ProjectData {
  id: ProjectId;
  icon: typeof Heart;
  color: string;
  tech: string[];
  title: LocalizedText;
  description: LocalizedText;
  longDescription: LocalizedText;
  features: LocalizedText[];
  github?: string;
  demo?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 'diabeats',
    icon: Heart,
    color: 'from-red-500 to-pink-500',
    tech: ['iOS', 'Swift', 'SwiftUI', 'HealthKit'],
    title: {
      ko: 'DiaBeats - Diabetes Tracker',
      ja: 'DiaBeats - Diabetes Tracker',
      en: 'DiaBeats - Diabetes Tracker',
    },
    description: {
      ko: '인슐린 계산 iOS 앱 - 기획부터 App Store 출시까지 단독 완결',
      ja: 'インスリン計算iOSアプリ – 企画からApp Storeリリースまでを単独で完結',
      en: 'Insulin calculator iOS app – completed the entire process from planning to App Store release alone.',
    },
    longDescription: {
      ko: '당뇨병 관리를 위한 iOS 앱으로, 인슐린 계산 기능을 제공합니다. 기획부터 개발, App Store 출시까지 모든 과정을 단독으로 완료했습니다. 사용자 친화적인 UI/UX와 정확한 인슐린 계산 알고리즘을 구현하여 실제 사용자들에게 도움을 주는 앱을 만들었습니다. HealthKit과의 연동을 통해 건강 데이터를 체계적으로 관리할 수 있습니다.',
      ja: '糖尿病管理のためのiOSアプリで、インスリン計算機能を提供します。企画から開発、App Storeリリースまでの全工程を一人で完遂しました。ユーザーフレンドリーなUI/UXと正確なインスリン計算アルゴリズムを実装し、実際のユーザーに役立つアプリを目指しました。HealthKit連携により健康データを一元管理できます。',
      en: 'An iOS app for diabetes management that provides insulin calculation features. I completed the entire process from planning and development to App Store release on my own. With a user-friendly UI/UX and accurate insulin calculation algorithms, the app aims to support real users in their daily lives. HealthKit integration enables structured management of health data.',
    },
    features: [
      {
        ko: '인슐린 계산 기능',
        ja: 'インスリン計算機能',
        en: 'Insulin calculation feature',
      },
      {
        ko: '혈당 추적 및 기록',
        ja: '血糖値の記録・トラッキング',
        en: 'Blood glucose tracking and logging',
      },
      {
        ko: 'HealthKit 연동',
        ja: 'HealthKit連携',
        en: 'HealthKit integration',
      },
      {
        ko: '사용자 친화적인 UI/UX',
        ja: 'ユーザーフレンドリーなUI/UX',
        en: 'User-friendly UI/UX',
      },
      {
        ko: 'App Store 출시 및 운영',
        ja: 'App Storeリリースおよび運用',
        en: 'App Store release and operation',
      },
    ],
    github: 'https://github.com/clangauge0314',
    demo: 'https://apps.apple.com/kr/app/diabeats-diabetes-tracker/id6757661452',
  },
  {
    id: 'titanic-ai',
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
    tech: ['PyTorch', 'Next.js', 'FastAPI', 'Python', 'Shadcn UI', 'Machine Learning'],
    title: {
      ko: '타이타닉 생존 확률 예측 AI',
      ja: 'タイタニック生存確率予測AI',
      en: 'Titanic Survival Prediction AI',
    },
    description: {
      ko: 'PyTorch & Next.js로 만드는 AI 웹 서비스 - 딥러닝 모델과 웹 통합',
      ja: 'PyTorchとNext.jsで構築するAIウェブサービス – ディープラーニングモデルとWebの統合',
      en: 'AI web service built with PyTorch & Next.js integrating a deep learning model with the web.',
    },
    longDescription: {
      ko: 'PyTorch를 활용한 딥러닝 모델을 개발하고, FastAPI 백엔드와 Next.js 프론트엔드를 통합한 AI 웹 서비스입니다. 타이타닉 데이터를 기반으로 생존 확률을 예측하며, 데이터 전처리부터 모델 학습, 배포까지 전체 파이프라인을 구현했습니다. Shadcn UI를 활용해 모던한 인터페이스를 제공합니다.',
      ja: 'PyTorchを用いてディープラーニングモデルを開発し、FastAPIバックエンドとNext.jsフロントエンドを統合したAIウェブサービスです。タイタニックデータを基に生存確率を予測し、データ前処理からモデル学習、デプロイまでのパイプラインを構築しました。Shadcn UIでモダンなUIを実現しています。',
      en: 'An AI web service that combines a deep learning model built with PyTorch, a FastAPI backend, and a Next.js frontend. The system predicts Titanic survival probabilities and implements the full pipeline from data preprocessing and model training to deployment. The UI is built with Shadcn UI for a modern user experience.',
    },
    features: [
      {
        ko: 'PyTorch 기반 딥러닝 모델 개발',
        ja: 'PyTorchベースのディープラーニングモデル開発',
        en: 'Deep learning model development with PyTorch',
      },
      {
        ko: 'FastAPI 기반 REST API 서버',
        ja: 'FastAPIによるREST APIサーバー',
        en: 'REST API server with FastAPI',
      },
      {
        ko: 'Next.js + Shadcn UI 프론트엔드',
        ja: 'Next.js + Shadcn UIフロントエンド',
        en: 'Next.js + Shadcn UI frontend',
      },
      {
        ko: '데이터 전처리 및 특성 엔지니어링',
        ja: 'データ前処理と特徴量エンジニアリング',
        en: 'Data preprocessing and feature engineering',
      },
      {
        ko: '실제 서비스 배포 및 운영',
        ja: '実サービスとしてのデプロイと運用',
        en: 'Real-world deployment and operation',
      },
    ],
    github: 'https://github.com/clangauge0314/titanic-project',
    demo: 'https://survivethetitanic.site',
  },
  {
    id: 'vote-community',
    icon: Vote,
    color: 'from-purple-500 to-indigo-500',
    tech: ['React', 'FastAPI', 'Docker', 'Python', 'PostgreSQL', 'JWT', 'Payments'],
    title: {
      ko: '투표 커뮤니티 플랫폼',
      ja: '投票コミュニティプラットフォーム',
      en: 'Voting Community Platform',
    },
    description: {
      ko: 'React & FastAPI로 만드는 투표 커뮤니티 - 결제 시스템으로 수익화까지',
      ja: 'ReactとFastAPIで構築する投票コミュニティ – 決済システムによるマネタイズまで',
      en: 'Voting community built with React & FastAPI, including payment-based monetization.',
    },
    longDescription: {
      ko: '화제가 되는 토픽을 만들고 익명으로 의견을 나누며 실시간 결과를 확인할 수 있는 투표 커뮤니티 플랫폼입니다. React와 FastAPI, Docker를 활용해 풀스택으로 구현했으며, 토스·카카오페이 등 결제 시스템 연동으로 멤버십 기능과 수익화 구조를 설계했습니다.',
      ja: '話題のトピックを作成し、匿名で意見を交わし、リアルタイムで結果を確認できる投票コミュニティプラットフォームです。ReactとFastAPI、Dockerを用いてフルスタックで実装し、トス・カカオペイなどの決済システム連携によりメンバーシップ機能とマネタイズの仕組みを構築しました。',
      en: 'A voting community platform where users can create trending topics, share opinions anonymously, and see results in real time. Built full-stack with React, FastAPI, and Docker, and integrated with Korean payment systems such as Toss and KakaoPay to support membership features and monetization.',
    },
    features: [
      {
        ko: '토픽 생성 및 공유',
        ja: 'トピックの作成と共有',
        en: 'Topic creation and sharing',
      },
      {
        ko: '실시간 투표 및 그래프 시각화',
        ja: 'リアルタイム投票とグラフ可視化',
        en: 'Real-time voting and graph visualization',
      },
      {
        ko: '익명 참여 및 커뮤니티 기능',
        ja: '匿名参加とコミュニティ機能',
        en: 'Anonymous participation and community features',
      },
      {
        ko: '국내 결제 시스템(토스·카카오페이) 연동',
        ja: '国内決済システム（トス・カカオペイ）連携',
        en: 'Integration with local payment systems (Toss, KakaoPay)',
      },
      {
        ko: 'FastAPI 기반 관리자 페이지',
        ja: 'FastAPIベースの管理者ページ',
        en: 'Admin dashboard built with FastAPI',
      },
    ],
    github: 'https://github.com/clangauge0314',
    demo: 'https://talkandvote-demo.site',
  },
  {
    id: 'electron-timer',
    icon: Timer,
    color: 'from-orange-500 to-amber-500',
    tech: ['React', 'Electron', 'Zustand', 'Tailwind CSS', 'Firebase', 'Cross-platform'],
    title: {
      ko: 'Electron 타이머 앱',
      ja: 'Electronタイマーアプリ',
      en: 'Electron Timer App',
    },
    description: {
      ko: 'React & Electron으로 만드는 크로스 플랫폼 데스크톱 앱',
      ja: 'ReactとElectronで作るクロスプラットフォームデスクトップアプリ',
      en: 'Cross-platform desktop app built with React & Electron.',
    },
    longDescription: {
      ko: 'React와 Electron을 활용하여 Windows, macOS, Linux에서 실행 가능한 타이머 앱입니다. Zustand로 전역 상태를 관리하고 Tailwind CSS로 모던한 UI를 구현했으며, Firebase Hosting과 Electron Builder를 활용해 웹과 데스크톱 모두 배포했습니다.',
      ja: 'ReactとElectronを用いて、Windows・macOS・Linuxで動作するタイマーアプリを開発しました。Zustandでグローバル状態を管理し、Tailwind CSSでモダンなUIを実装、Firebase HostingとElectron Builderを使ってWebとデスクトップの両方にデプロイしています。',
      en: 'A timer application that runs on Windows, macOS, and Linux using React and Electron. Global state is managed with Zustand and the UI is styled with Tailwind CSS. The app is deployed both as a web app via Firebase Hosting and as desktop binaries via Electron Builder.',
    },
    features: [
      {
        ko: 'Windows, macOS, Linux 크로스 플랫폼 지원',
        ja: 'Windows・macOS・Linuxのクロスプラットフォーム対応',
        en: 'Cross-platform support for Windows, macOS, and Linux',
      },
      {
        ko: 'Zustand를 활용한 전역 상태 관리',
        ja: 'Zustandによるグローバル状態管理',
        en: 'Global state management with Zustand',
      },
      {
        ko: 'Tailwind CSS 기반 모던 UI',
        ja: 'Tailwind CSSベースのモダンなUI',
        en: 'Modern UI built with Tailwind CSS',
      },
      {
        ko: '타이머 시작/정지/리셋 기능',
        ja: 'タイマーの開始・停止・リセット機能',
        en: 'Timer start/stop/reset features',
      },
      {
        ko: 'Firebase Hosting 및 Electron Builder 배포',
        ja: 'Firebase HostingとElectron Builderによるデプロイ',
        en: 'Deployment via Firebase Hosting and Electron Builder',
      },
    ],
    github: 'https://github.com/clangauge0314/react-electronjs-clock',
    demo: 'https://react-electronjs-clock.web.app',
  },
  {
    id: 'company-website',
    icon: Building2,
    color: 'from-green-500 to-emerald-500',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'TinyMCE', 'RESTful API'],
    title: {
      ko: '회사 웹사이트 풀스택',
      ja: '企業サイト・フルスタック開発',
      en: 'Company Website Full-stack',
    },
    description: {
      ko: 'React, Node.js, MongoDB로 만드는 Production Ready 웹사이트',
      ja: 'React・Node.js・MongoDBで構築するProduction Readyな企業サイト',
      en: 'Production-ready company website built with React, Node.js, and MongoDB.',
    },
    longDescription: {
      ko: 'React로 프론트엔드를, Node.js와 MongoDB로 백엔드를 설계하여 실제 회사 웹사이트 수준의 프로젝트를 완성했습니다. 효율적인 상태 관리, RESTful API 통합, 데이터베이스 설계 등 실무에서 요구되는 핵심 기술을 깊이 있게 다루며 AWS S3와 TinyMCE를 활용한 콘텐츠 관리 기능도 구현했습니다.',
      ja: 'Reactでフロントエンドを、Node.jsとMongoDBでバックエンドを設計し、実際の企業サイトレベルのプロジェクトを完成させました。効率的な状態管理、RESTful API統合、データベース設計など、実務で求められるコアスキルをカバーし、AWS S3とTinyMCEによるコンテンツ管理機能も実装しています。',
      en: 'A production-ready company website project with a React frontend and a Node.js + MongoDB backend. It covers key skills required in real-world development such as efficient state management, RESTful API integration, and database design, and also implements a content management system using AWS S3 and TinyMCE.',
    },
    features: [
      {
        ko: '프론트엔드부터 백엔드까지 풀스택 구현',
        ja: 'フロントからバックエンドまでのフルスタック実装',
        en: 'Full-stack implementation from frontend to backend',
      },
      {
        ko: 'MongoDB 기반 스키마 설계 및 최적화',
        ja: 'MongoDBベースのスキーマ設計と最適化',
        en: 'Schema design and optimization with MongoDB',
      },
      {
        ko: 'RESTful API 설계 및 통합',
        ja: 'RESTful APIの設計と統合',
        en: 'RESTful API design and integration',
      },
      {
        ko: 'AWS S3를 활용한 파일 업로드',
        ja: 'AWS S3を利用したファイルアップロード',
        en: 'File upload with AWS S3',
      },
      {
        ko: 'TinyMCE 에디터를 활용한 콘텐츠 관리',
        ja: 'TinyMCEエディタによるコンテンツ管理',
        en: 'Content management with TinyMCE editor',
      },
    ],
    github: 'https://github.com/clangauge0314/company_website',
    demo: 'https://my-company.site',
  },
];

export function getProjectsForLanguage(language: Language) {
  return projectsData.map((project) => ({
    ...project,
    titleText: project.title[language],
    descriptionText: project.description[language],
  }));
}

export function getProjectDetail(id: ProjectId, language: Language) {
  const project = projectsData.find((p) => p.id === id);
  if (!project) {
    return null;
  }

  return {
    ...project,
    titleText: project.title[language],
    descriptionText: project.description[language],
    longDescriptionText: project.longDescription[language],
    featuresText: project.features.map((f) => f[language]),
  };
}


