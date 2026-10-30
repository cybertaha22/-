/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { RESPONSIBLE_BODIES } from '../data/decreeData';
import { Building2, Shield, Scale, Megaphone, CheckCircle2, ChevronRight, FileBadge2, AlertOctagon } from 'lucide-react';

export const EnforcementBodiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'كافة الجهات المسؤولة' },
    { id: 'supervisory', label: 'إدارات المؤسسات وأرباب العمل' },
    { id: 'ministerial', label: 'الوزارات القطاعية' },
    { id: 'inspection', label: 'أجهزة الرقابة والتفتيش' },
    { id: 'internal', label: 'هيئات الإعلام والتوعية' },
  ];

  const filteredBodies = selectedCategory === 'all'
    ? RESPONSIBLE_BODIES
    : RESPONSIBLE_BODIES.filter(b => b.category === selectedCategory);

  return (
    <section id="enforcement" className="py-12 px-4 sm:px-8 bg-white border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
            <Building2 className="w-4 h-4" />
            <span>الجهات الفاعلة والمؤسسات المسؤولة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
            الجهات الحكومية والمؤسسات المسؤولة عن تنفيذ أحكام المرسوم 01-285
          </h2>
          <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
            يوزع المرسوم المسؤولية بين <strong>السلطة المشرفة المباشرة داخل كل مؤسسة</strong>، و<strong>الوزارات القطاعية</strong> عبر القرارات المنظمة، و<strong>أجهزة الرقابة والتفتيش الإداري</strong> التي تمتلك سلطة الإعذار وتوقيع السحب المؤقت لرخصة الممارسة (15 يوماً).
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsible Bodies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBodies.map((body) => (
            <div
              key={body.id}
              className="bg-stone-50 rounded-xl border border-stone-300 p-6 space-y-4 hover:border-emerald-600 transition-colors shadow-xs"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded">
                    {body.legalBasis}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900">
                    {body.title}
                  </h3>
                  <p className="text-xs text-stone-500 font-medium">
                    {body.role}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-emerald-800 shrink-0">
                  {body.category === 'supervisory' && <Building2 className="w-5 h-5" />}
                  {body.category === 'ministerial' && <Scale className="w-5 h-5" />}
                  {body.category === 'inspection' && <Shield className="w-5 h-5" />}
                  {body.category === 'internal' && <Megaphone className="w-5 h-5" />}
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  <span>الالتزامات والمهام التنفيذية المحددة بالمرسوم:</span>
                </h4>
                <ul className="text-xs space-y-1.5 text-stone-600">
                  {body.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 bg-white p-2 rounded border border-stone-200/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-1.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Powers and Authorities */}
              <div className="space-y-2 pt-2 border-t border-stone-200">
                <h4 className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                  <FileBadge2 className="w-3.5 h-3.5 text-amber-700" />
                  <span>الصلاحيات والسلطات القانونية الممنوحة:</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {body.powers.map((pow, j) => (
                    <span
                      key={j}
                      className="text-[11px] bg-amber-50 text-amber-900 border border-amber-200 px-2 py-1 rounded leading-normal"
                    >
                      {pow}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Detailed Ministerial Breakdown Callout (Article 12) */}
        <div className="bg-stone-900 text-stone-200 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
            <Scale className="w-4 h-4" />
            <span>المادة 12 من المرسوم: القرارات الوزارية القطاعية التكميلية</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white">
            كيف تتوزع المهام بين القطاعات الحكومية الوزارية في الجزائر؟
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs pt-2">
            
            <div className="bg-stone-800/80 p-3.5 rounded-lg border border-stone-700 space-y-1.5">
              <strong className="block text-emerald-300 font-bold">وزارة النقل</strong>
              <p className="text-stone-300 leading-relaxed">
                مسؤولة عن السكك الحديدية (SNTF)، النقل البري (الحافلات وسيارات الأجرة)، النقل الجوي (الخطوط الجوية الجزائرية)، والموانئ ومحطات النقل البري.
              </p>
            </div>

            <div className="bg-stone-800/80 p-3.5 rounded-lg border border-stone-700 space-y-1.5">
              <strong className="block text-emerald-300 font-bold">وزارة التجارة وترقية الصادرات</strong>
              <p className="text-stone-300 leading-relaxed">
                مراقبة المحلات التجارية، المقاهي والمطاعم، وفرض العقوبات الإدارية بالغلق المؤقت وسحب السجل/الرخصة لـ 15 يوماً عند عدم الامتثال.
              </p>
            </div>

            <div className="bg-stone-800/80 p-3.5 rounded-lg border border-stone-700 space-y-1.5">
              <strong className="block text-emerald-300 font-bold">وزارة العمل والتشغيل</strong>
              <p className="text-stone-300 leading-relaxed">
                مفتشية العمل مسؤولة عن إلزام أرباب العمل بتسجيل الحظر في الأنظمة الداخلية ومتابعة النزاعات العمالية الناتجة عن التدخين.
              </p>
            </div>

            <div className="bg-stone-800/80 p-3.5 rounded-lg border border-stone-700 space-y-1.5">
              <strong className="block text-emerald-300 font-bold">وزارة التربية والتكوين والصحة</strong>
              <p className="text-stone-300 leading-relaxed">
                التطبيق الصارم للحظر التام داخل المدارس والمستشفيات، ومنع إحداث أي غرف للمدخنين تحت طائلة المسؤولية الجزائية والتأديبية الفورية.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
