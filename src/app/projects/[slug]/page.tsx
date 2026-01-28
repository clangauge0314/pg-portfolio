'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useThemeStore } from '@/store/themeStore';
import { use } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguageStore } from '@/store/languageStore';
import { translations } from '@/locales';
import { getProjectDetail } from '@/constants/projects';
import type { ProjectId } from '@/constants/projects';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectDetail({ params }: PageProps) {
  const { isDark } = useThemeStore();
  const { language } = useLanguageStore();
  const t = translations[language];
  const { slug } = use(params);
  
  const project = getProjectDetail(slug as ProjectId, language);

  if (!project) {
    notFound();
  }

  const Icon = project.icon;

  return (
    <div className={`min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className={`inline-flex items-center gap-2 mb-8 hover:gap-3 transition-all duration-300 ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-yellow-600 hover:text-yellow-700'}`}
        >
          {t.projects.backToList}
        </Link>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 shadow-lg`}
        >
          <Icon className="w-10 h-10 text-white" />
        </motion.div>

        <h1 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {project.titleText}
        </h1>
        <p className={`text-xl mb-8 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {project.descriptionText}
        </p>

        <div className={`prose prose-lg max-w-none mb-8 ${isDark ? 'prose-invert' : ''}`}>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed transition-colors duration-300`}>
            {project.longDescriptionText}
          </p>
        </div>

        <div className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.projects.features}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.featuresText.map((feature, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-3 rounded-lg transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}
              >
                <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-gradient-to-br ${project.color}`} />
                <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.projects.tech}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${isDark ? 'bg-gray-800 text-gray-300 border border-gray-700' : 'bg-gray-100 text-gray-700 border border-gray-200'}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 font-medium hover:scale-105 ${isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
            >
              <Github className="w-5 h-5" />
              {t.projects.viewGithub}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 border-2 rounded-lg transition-all duration-300 font-medium hover:scale-105 ${isDark ? 'border-white text-white hover:bg-white hover:text-black' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'}`}
            >
              <ExternalLink className="w-5 h-5" />
              {t.projects.viewDemo}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
