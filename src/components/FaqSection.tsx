/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FREQUENT_QUESTIONS } from '../data/decreeData';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 px-4 sm:px-8 bg-stone-50 border-b border-stone-200">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
            <HelpCircle className="w-4 h-4" />
            <span>الأسئلة القانونية الشائعة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
            أبرز الاستفسارات العملية حول تطبيق المرسوم 01-285
          </h2>
          <p className="text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
            إجابات قانونية مستندة مباشرة إلى نصوص الجريدة الرسمية رقم 55 لفض النزاعات اليومية بين المدخنين وإدارات المنشآت.
          </p>
        </div>

        {/* Questions Accordion */}
        <div className="space-y-3">
          {FREQUENT_QUESTIONS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-stone-300 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-right flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-stone-900 hover:bg-stone-50/80 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{item.q}</span>
                  </span>
                  <span className="text-stone-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-stone-100 text-xs sm:text-sm text-stone-700 leading-relaxed font-medium bg-stone-50/50">
                    <p className="pr-9">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
