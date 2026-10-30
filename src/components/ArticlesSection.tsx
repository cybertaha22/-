/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { ARTICLES_DATA, CHAPTERS } from '../data/decreeData';
import { BookOpen, Search, Copy, Check, Filter, ExternalLink, ChevronDown, ChevronUp, Quote } from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [expandedArticles, setExpandedArticles] = useState<Record<number, boolean>>({
    3: true,
    4: true,
    5: true,
    8: true,
    9: true,
    10: true
  });

  const toggleExpand = (id: number) => {
    setExpandedArticles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCopyText = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((art) => {
      const matchesChapter = selectedChapter === 'all' || art.chapterId === selectedChapter;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesChapter;
      const matchesSearch =
        art.articleNumber.toLowerCase().includes(q) ||
        art.title.toLowerCase().includes(q) ||
        art.originalText.toLowerCase().includes(q) ||
        art.simpleExplanation.toLowerCase().includes(q);
      return matchesChapter && matchesSearch;
    });
  }, [searchQuery, selectedChapter]);

  return (
    <section id="articles" className="py-12 px-4 sm:px-8 bg-white border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
            <BookOpen className="w-4 h-4" />
            <span>المتن القانوني الكامل والتفسير</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
            النص الكامل لمواد المرسوم التنفيذي 01-285 مع الشرح والتحليل
          </h2>
          <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
            استعراض دقيق لكافة المواد الـ 14 كما وردت في الجريدة الرسمية للجمهورية الجزائرية رقم 55، مدعمة بالشرح العملي، الأثر القانوني، والالتزامات التنفيذية المترتبة على كل مادة.
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="bg-stone-50 border border-stone-300 rounded-xl p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Search Input */}
            <div className="md:col-span-7 relative">
              <Search className="w-4 h-4 text-stone-400 absolute right-3.5 top-3.5" />
              <input
                type="text"
                placeholder="ابحث في نص المواد (مثال: تهوية، عقوبات، نظام داخلي، النقل، مدارس...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-3 top-2.5 text-xs text-stone-400 hover:text-stone-700"
                >
                  مسح
                </button>
              )}
            </div>

            {/* Chapter Filter */}
            <div className="md:col-span-5 flex items-center gap-2">
              <Filter className="w-4 h-4 text-stone-500 shrink-0" />
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                className="w-full py-2.5 px-3 text-xs bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
              >
                <option value="all">كافة الفصول (14 مادة)</option>
                {CHAPTERS.map(chap => (
                  <option key={chap.id} value={chap.id}>
                    {chap.title} ({chap.articlesCount} مواد)
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Result counter */}
          <div className="flex items-center justify-between text-xs text-stone-500 pt-1 border-t border-stone-200">
            <span>تم العثور على: <strong>{filteredArticles.length}</strong> مادة قانونية</span>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  const allExpanded = filteredArticles.reduce((acc, curr) => ({ ...acc, [curr.id]: true }), {});
                  setExpandedArticles(allExpanded);
                }}
                className="text-emerald-800 hover:underline font-semibold"
              >
                توسيع الكل
              </button>
              <span>|</span>
              <button
                onClick={() => setExpandedArticles({})}
                className="text-stone-600 hover:underline font-semibold"
              >
                طي الكل
              </button>
            </div>
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-4">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12 bg-stone-50 rounded-xl border border-stone-200 text-stone-500 text-sm">
              لا توجد مادة تطابق معايير البحث الحالية. جرّب كلمات بحث أخرى.
            </div>
          ) : (
            filteredArticles.map((art) => {
              const isExpanded = !!expandedArticles[art.id];
              return (
                <div
                  key={art.id}
                  className="bg-white rounded-xl border border-stone-300 shadow-2xs overflow-hidden transition-all hover:border-stone-400"
                >
                  {/* Article Card Header */}
                  <div
                    onClick={() => toggleExpand(art.id)}
                    className="p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-stone-50/70 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                          {art.articleNumber}
                        </span>
                        <span className="text-xs text-stone-400 hidden sm:inline">
                          {art.chapterTitle}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-stone-900">
                        {art.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyText(art.id, art.originalText);
                        }}
                        className="p-1.5 text-stone-500 hover:text-emerald-800 hover:bg-stone-100 rounded-md transition-colors"
                        title="نسخ نص المادة الرسمي"
                      >
                        {copiedId === art.id ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                      <button
                        className="p-1.5 text-stone-500 hover:text-stone-900 rounded-md"
                        aria-label="توسيع أو طي"
                      >
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Body */}
                  {isExpanded && (
                    <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-stone-200 space-y-5 bg-stone-50/40">
                      
                      {/* Official Text Box */}
                      <div className="bg-white rounded-lg p-4 sm:p-5 border border-stone-300 shadow-2xs space-y-2 relative">
                        <div className="flex items-center justify-between text-xs font-bold text-stone-500 pb-2 border-b border-stone-100">
                          <span className="flex items-center gap-1.5 text-emerald-800">
                            <Quote className="w-3.5 h-3.5 rotate-180" />
                            <span>النص الأصلي كما ورد في الجريدة الرسمية رقم 55:</span>
                          </span>
                          <span className="text-[11px] text-stone-400">مرسوم تنفيذي 01-285</span>
                        </div>
                        <p className="font-amiri text-base sm:text-lg text-stone-900 leading-relaxed font-semibold whitespace-pre-line select-text">
                          "{art.originalText}"
                        </p>
                      </div>

                      {/* Explanation & Legal Analysis Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        {/* Simple Explanation */}
                        <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-3.5 space-y-1.5">
                          <strong className="text-xs font-bold text-emerald-900 block">
                            الشرح والتفسير التطبيقي المبسط:
                          </strong>
                          <p className="text-xs text-stone-700 leading-relaxed">
                            {art.simpleExplanation}
                          </p>
                        </div>

                        {/* Legal Impact */}
                        <div className="bg-amber-50/50 border border-amber-100 rounded-lg p-3.5 space-y-1.5">
                          <strong className="text-xs font-bold text-amber-900 block">
                            الأثر القانوني والمسؤولية المترتبة:
                          </strong>
                          <p className="text-xs text-stone-700 leading-relaxed">
                            {art.legalSignificance}
                          </p>
                        </div>

                      </div>

                      {/* Key Obligations & Target */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-stone-500 font-semibold">الفئات المعنية:</span>
                          {art.targetAudience.map((aud, i) => (
                            <span key={i} className="bg-stone-200/70 text-stone-800 px-2 py-0.5 rounded text-[11px]">
                              {aud}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-stone-500 font-semibold">الالتزام الرئيسي:</span>
                          {art.keyObligations.map((obl, j) => (
                            <span key={j} className="bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded text-[11px] font-medium">
                              {obl}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
