/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DECREE_INFO } from '../data/decreeData';
import { Scale, FileCheck2, AlertCircle, Ban, Flame, Cigarette, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

interface OverviewSectionProps {
  onOpenPdf: () => void;
  onNavigateToMechanism: () => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({
  onOpenPdf,
  onNavigateToMechanism
}) => {
  return (
    <section className="bg-stone-100 border-b border-stone-200 py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Hero Card */}
        <div className="bg-white rounded-xl border border-stone-300 shadow-sm p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-emerald-700 via-emerald-600 to-amber-600" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-100 border border-stone-200 text-stone-700 text-xs font-bold">
                <Scale className="w-3.5 h-3.5 text-emerald-700" />
                <span>التنظيم الجزائري لحماية الصحة العامة</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 leading-snug">
                مرسوم تنفيذي رقم {DECREE_INFO.number}
              </h2>
              <p className="text-base sm:text-lg text-emerald-900 font-semibold font-amiri leading-relaxed">
                يحدد الأماكن العمومية التي يمنع فيها تعاطي التبغ وكيفيات تطبيق هذا المنع
              </p>
              
              <p className="text-sm text-stone-600 leading-relaxed max-w-3xl">
                صدر هذا المرسوم في الجريدة الرسمية رقم 55 بتاريخ 26 سبتمبر 2001 استناداً للمادة 63 من قانون حماية الصحة رقم 85-05. 
                يضع الإطار القانوني الصارم لحماية الأفراد، لاسيما الأطفال والمتمدرسين والمستخدمين غير المدخنين، ويحدد التزامات الهيئات العمومية والخاصة وأرباب العمل وجزاءات المخالفة.
              </p>

              {/* Badges / Key Metadata */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-stone-50 border border-stone-200 rounded-lg p-3 text-right">
                  <span className="text-[11px] text-stone-500 block">تاريخ الإصدار</span>
                  <span className="text-xs font-bold text-stone-800">{DECREE_INFO.gregorianDate}</span>
                </div>
                <div className="bg-stone-50 border border-stone-200 rounded-lg p-3 text-right">
                  <span className="text-[11px] text-stone-500 block">الجريدة الرسمية</span>
                  <span className="text-xs font-bold text-stone-800">العدد {DECREE_INFO.gazetteIssue} (ص {DECREE_INFO.gazettePages})</span>
                </div>
                <div className="bg-stone-50 border border-stone-200 rounded-lg p-3 text-right">
                  <span className="text-[11px] text-stone-500 block">السند التشريعي</span>
                  <span className="text-xs font-bold text-stone-800">قانون الصحة 85-05</span>
                </div>
                <div className="bg-stone-50 border border-stone-200 rounded-lg p-3 text-right">
                  <span className="text-[11px] text-stone-500 block">التوقيع الحكومي</span>
                  <span className="text-xs font-bold text-stone-800">{DECREE_INFO.signatory}</span>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={onNavigateToMechanism}
                  className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg text-xs font-bold transition-colors shadow-xs inline-flex items-center gap-2"
                >
                  <FileCheck2 className="w-4 h-4" />
                  <span>استكشاف آلية التطبيق والالتزامات</span>
                </button>
                <button
                  onClick={onOpenPdf}
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-800 rounded-lg text-xs font-bold transition-colors inline-flex items-center gap-2"
                >
                  <FileCheck2 className="w-4 h-4 text-emerald-700" />
                  <span>معاينة وثيقة الجريدة الرسمية الأصلية (PDF)</span>
                </button>
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="lg:col-span-4 bg-emerald-900 text-white rounded-xl p-5 sm:p-6 space-y-4 shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-800">
                <span className="text-xs font-bold text-emerald-300">جوهر المرسوم في أرقام</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>

              <div className="space-y-3 text-xs leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-sm">14 مادة قانونية موزعة على 4 فصول</strong>
                    <span className="text-emerald-200">تغطي التعريف، الأماكن المحظورة، التهوية، والعقوبات.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-sm">حظر مطلق في 3 قطاعات حساسة</strong>
                    <span className="text-emerald-200">التعليم والمدارس، المرافق الصحية، وقاعات التظاهرات.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-sm">معيار هندسي دقيق للتهوية (7 لتر أو 7 م³)</strong>
                    <span className="text-emerald-200">شرط إجباري لأي غرفة تدخين بالشركات والمصانع.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-sm">عقوبات مزدوجة: إدارية وتأديبية</strong>
                    <span className="text-emerald-200">سحب رخصة 15 يوماً للمؤسسة، وتوقيف 1-3 أيام للموظف.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-800 text-[11px] text-emerald-300">
                * ساري المفعول بصورة إلزامية في كافة التراب الوطني الجزائري.
              </div>
            </div>
          </div>
        </div>

        {/* 3 Foundation Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Tobacco Definition (Article 2) */}
          <div className="bg-white rounded-xl border border-stone-200 p-5 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
              <Cigarette className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900">تعريف التبغ الشامل (المادة 2)</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              لا يقتصر المنع على السجائر التقليدية، بل يشمل بموجب المادة 2: <strong>التدخين، الشم (الشمة)، المضغ، اللوك، والمص</strong>، وكل منتوج يحتوي ولو جزئياً على مادة التبغ.
            </p>
            <div className="text-[11px] text-amber-800 font-semibold bg-amber-50/70 p-2 rounded border border-amber-100">
              تنبيه: تعاطي "الشمة" داخل المكاتب والمنشآت مخالفة قانونية تعاقب عليها الإدارة.
            </div>
          </div>

          {/* Card 2: Total Absolute Ban (Article 3) */}
          <div className="bg-white rounded-xl border border-stone-200 p-5 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center border border-rose-200">
              <Ban className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900">الحظر المطلق دون استثناء (المادة 3)</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              يحظر التبغ منعاً باتاً ولا يجوز تخصيص أي غرفة للمدخنين في: <strong>المؤسسات المدرسية، مراكز التعليم التحضيري، معاهد التكوين المهني، ومراكز إيواء واستقبال القصّر</strong>.
            </p>
            <div className="text-[11px] text-rose-800 font-semibold bg-rose-50/70 p-2 rounded border border-rose-100">
              حماية مطلقة لحرم المؤسسة التربوية والساحات المغطاة وغير المغطاة.
            </div>
          </div>

          {/* Card 3: Collective Public Places (Article 4) */}
          <div className="bg-white rounded-xl border border-stone-200 p-5 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-200">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900">الأماكن الجماعية وبيئات العمل (المادة 4)</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              منع التدخين في كافة الأماكن المغلقة والمغطاة للاستعمال الجماعي: <strong>مؤسسات الصحة، الصالات الرياضية، أماكن العمل الجماعية، النقل العمومي، المطاعم والمقاهي، وقاعات الانتظار</strong>.
            </p>
            <div className="text-[11px] text-emerald-800 font-semibold bg-emerald-50/70 p-2 rounded border border-emerald-100">
              الأصل في الأماكن المشتركة هو خلوها التام من الدخان حفاظاً على سلامة الجميع.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
