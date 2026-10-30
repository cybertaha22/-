/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { COMPANY_STEPS, INDIVIDUAL_STEPS } from '../data/decreeData';
import { Building2, User, CheckCircle2, AlertTriangle, Copy, Check, FileText, ArrowRight, ShieldAlert, Award } from 'lucide-react';

interface PracticalGuideSectionProps {
  onOpenSignModal: () => void;
  onOpenCalculator: () => void;
}

export const PracticalGuideSection: React.FC<PracticalGuideSectionProps> = ({
  onOpenSignModal,
  onOpenCalculator
}) => {
  const [activeTab, setActiveTab] = useState<'companies' | 'individuals'>('companies');
  const [copiedClause, setCopiedClause] = useState<boolean>(false);

  // Ready-to-use Legal Clause for Algerian Companies' Internal Regulations (Règlement Intérieur)
  const sampleInternalRegulationClause = `المادة (...): تطبيقاً للمرسوم التنفيذي رقم 01-285 المؤرخ في 24 سبتمبر 2001
يمنع منعاً باتاً تعاطي التبغ بجميع أشكاله (سواء عن طريق التدخين، الشم، المضغ، اللوك، أو المص) في كافة الأماكن المغلقة والمغطاة المخصصة للعمل والاستقبال الجماعي بالمؤسسة.
ولا يجوز التدخين إلا داخل الأماكن المحددة خصيصاً والمطابقة لمعايير التهوية المقررة بالمادة 5 من المرسوم، مع الالتزام التام بعدم إزعاج غير المدخنين.
كل مخالفة لهذه الأحكام تعرض مرتكبها للعقوبات التأديبية المنصوص عليها قانوناً:
1- الإنذار الكتابي المودع بالملف المهني.
2- التوقيف المؤقت عن العمل من يوم (1) إلى ثلاثة (3) أيام مع خصم الأجر عن مدة التوقيف.`;

  const handleCopyClause = () => {
    navigator.clipboard.writeText(sampleInternalRegulationClause);
    setCopiedClause(true);
    setTimeout(() => setCopiedClause(false), 2500);
  };

  return (
    <section id="practical-guide" className="py-12 px-4 sm:px-8 bg-stone-100 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
            <CheckCircle2 className="w-4 h-4" />
            <span>خارطة طريق الامتثال</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
            الإجراءات العملية الواجب اتباعها من قبل الشركات والأفراد
          </h2>
          <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
            دليل إجرائي تفصيلي يوضح الخطوات القانونية والإدارية والتقنية الملزمة للشركات وأرباب العمل لتفادي غلق المنشأة وسحب رخصتها، وكيفيات التزام الأفراد لتجنب العقوبات التأديبية.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-stone-300">
          <button
            onClick={() => setActiveTab('companies')}
            className={`flex items-center gap-2.5 px-6 py-3 font-bold text-sm border-b-2 transition-all ${
              activeTab === 'companies'
                ? 'border-emerald-700 text-emerald-900 bg-white rounded-t-lg'
                : 'border-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>دليل الشركات وأرباب العمل والمؤسسات</span>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">
              5 خطوات إجبارية
            </span>
          </button>

          <button
            onClick={() => setActiveTab('individuals')}
            className={`flex items-center gap-2.5 px-6 py-3 font-bold text-sm border-b-2 transition-all ${
              activeTab === 'individuals'
                ? 'border-emerald-700 text-emerald-900 bg-white rounded-t-lg'
                : 'border-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <User className="w-4 h-4" />
            <span>دليل الأفراد والموظفين والزبائن</span>
            <span className="text-[10px] bg-stone-200 text-stone-700 px-2 py-0.5 rounded font-semibold">
              4 قواعد التزام
            </span>
          </button>
        </div>

        {/* Tab 1: Companies & Establishments */}
        {activeTab === 'companies' && (
          <div className="space-y-8">
            
            {/* Steps Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPANY_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="bg-white rounded-xl border border-stone-300 p-5 space-y-3.5 flex flex-col justify-between shadow-xs hover:border-emerald-600 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-lg bg-emerald-800 text-white font-bold text-xs flex items-center justify-center">
                        {step.step}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {step.legalArticle}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-stone-900">
                      {step.title}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {step.details}
                    </p>

                    <div className="bg-emerald-50/60 border border-emerald-100 p-2.5 rounded-lg text-xs text-emerald-950 space-y-1">
                      <strong className="block font-bold text-emerald-900">الإجراء الميداني المطلوب:</strong>
                      <p className="leading-relaxed">{step.practicalAction}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-stone-200">
                    <div className="text-[11px] text-amber-900 bg-amber-50/80 p-2 rounded border border-amber-200 flex items-start gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <div>
                        <strong>المحظور: </strong>
                        <span>{step.pitfallsToAvoid}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Action Card inside grid */}
              <div className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                    <Award className="w-4 h-4" />
                    <span>أدوات مساعدة للامتثال السريع</span>
                  </div>
                  <h4 className="text-base font-bold">جاهزية فورية للامتثال للمرسوم</h4>
                  <p className="text-xs text-emerald-200 leading-relaxed">
                    وفرنا لك نموذج المادة القانونية للنظام الداخلي، ولافتة منع التدخين الرسمية الجاهزة للطباعة، وحاسبة التهوية الهندسية المعتمدة على المادة 5.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={onOpenSignModal}
                    className="w-full py-2 px-3 bg-white hover:bg-stone-100 text-stone-900 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <FileText className="w-3.5 h-3.5 text-emerald-800" />
                    <span>توليد وطباعة لافتة المنع الرسمية</span>
                  </button>
                  <button
                    onClick={onOpenCalculator}
                    className="w-full py-2 px-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>فتح حاسبة معايير التهوية (المادة 5)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Ready-to-copy Internal Regulation Clause Box */}
            <div className="bg-white rounded-xl border border-stone-300 p-6 space-y-4 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-stone-200">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-emerald-700" />
                  <div>
                    <h3 className="text-base font-bold text-stone-900">
                      نموذج مادة قانونية جاهزة للإدراج في النظام الداخلي للشركة (المادة 8)
                    </h3>
                    <p className="text-xs text-stone-500">
                      محررة بصياغة قانونية متوافقة تماماً مع أحكام المرسوم 01-285 وقانون العمل الجزائري 90-11
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyClause}
                  className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg text-xs font-bold flex items-center gap-2 transition-colors"
                >
                  {copiedClause ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedClause ? 'تم النسخ بنجاح!' : 'نسخ نص المادة بالكامل'}</span>
                </button>
              </div>

              <div className="bg-stone-50 p-4 rounded-lg border border-stone-300 font-amiri text-sm sm:text-base text-stone-800 leading-relaxed whitespace-pre-line select-all">
                {sampleInternalRegulationClause}
              </div>

              <div className="flex items-center gap-2 text-xs text-stone-500 bg-stone-100 p-2.5 rounded">
                <ShieldAlert className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>
                  <strong>تنبيه قانوني: </strong>
                  يجب إيداع نسختين من تعديل النظام الداخلي لدى مفتشية العمل المختصة إقليمياً، ونسخة لدى كتابة ضبط المحكمة المختصة، مع إشهار التعديل للعمال لمدة 8 أيام على الأقل قبل السريان.
                </span>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Individuals & Employees */}
        {activeTab === 'individuals' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {INDIVIDUAL_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="bg-white rounded-xl border border-stone-300 p-6 space-y-4 shadow-xs hover:border-emerald-600 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <span className="w-8 h-8 rounded-lg bg-emerald-800 text-white font-bold text-xs flex items-center justify-center">
                      القاعدة {step.step}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                      {step.legalArticle}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-stone-900">
                    {step.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {step.details}
                  </p>

                  <div className="bg-emerald-50/70 p-3 rounded-lg border border-emerald-100 text-xs text-emerald-950 space-y-1">
                    <strong className="block text-emerald-900">ما يجب عليك فعله عملياً:</strong>
                    <p className="leading-relaxed">{step.practicalAction}</p>
                  </div>

                  <div className="text-[11px] text-amber-900 bg-amber-50 p-2.5 rounded border border-amber-200 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <strong>تجنب الخطأ التالي: </strong>
                      <span>{step.pitfallsToAvoid}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Rights of Non-Smokers Callout */}
            <div className="bg-emerald-900 text-white rounded-xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>حقوق الموظف والزبون غير المدخن المكفولة بموجب المرسوم 01-285</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-1">
                <div className="bg-emerald-800/80 p-3.5 rounded-lg border border-emerald-700/80 space-y-1">
                  <strong className="text-amber-300 font-bold block">1. الحق في هواء نقي وبيئة عمل صحية</strong>
                  <p className="text-emerald-100 leading-relaxed">
                    لكل موظف الحق في رفض استنشاق الدخان في مكاتب العمل الجماعية وقاعات الاجتماعات دون أن يعد ذلك امتناعاً عن أداء المهام.
                  </p>
                </div>
                <div className="bg-emerald-800/80 p-3.5 rounded-lg border border-emerald-700/80 space-y-1">
                  <strong className="text-amber-300 font-bold block">2. الحق في التبليغ والشكوى الإدارية</strong>
                  <p className="text-emerald-100 leading-relaxed">
                    يحق لأي شخص إخطار مسؤول الأمن، مصلحة الموارد البشرية، أو مفتشية العمل في حال عدم احترام قواعد المنع.
                  </p>
                </div>
                <div className="bg-emerald-800/80 p-3.5 rounded-lg border border-emerald-700/80 space-y-1">
                  <strong className="text-amber-300 font-bold block">3. الحماية في وسائل النقل والمرافق</strong>
                  <p className="text-emerald-100 leading-relaxed">
                    من حق الركاب في الحافلات والقطارات والطائرات ومراجعي المستشفيات مطالبة المشرفين بالتدخل الفوري لمنع المدخن.
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
