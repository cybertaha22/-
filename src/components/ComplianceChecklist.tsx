/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FileCheck, ShieldAlert, CheckCircle2, AlertOctagon, Printer, RotateCcw, AlertTriangle } from 'lucide-react';

interface ChecklistItem {
  id: number;
  question: string;
  article: string;
  weight: number;
  explanation: string;
  recommendationIfNo: string;
}

export const ComplianceChecklist: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, boolean | null>>({});

  const checklistItems: ChecklistItem[] = [
    {
      id: 1,
      question: "هل تم تحديث النظام الداخلي للمؤسسة بالنص صراحة على حظر تعاطي التبغ والعقوبات التأديبية وإيداعه لدى مفتشية العمل والمحكمة؟",
      article: "المادة 8",
      weight: 25,
      explanation: "إلزام قانوني صريح بالمادة 8. غيابه يبطل أي عقوبة تأديبية على الموظف ويعرض المنشأة لإعذار إداري.",
      recommendationIfNo: "بادر فوراً بتعديل النظام الداخلي بالصياغة القانونية المعتمدة وإخطار العمال ومفتشية العمل."
    },
    {
      id: 2,
      question: "هل تم تثبيت لافتات وإشارات مرئية وظاهرة تذكّر بمنع التدخين عند مداخل المنشأة وقاعات الانتظار وممرات العمل؟",
      article: "المادة 7",
      weight: 20,
      explanation: "المادة 7 توجب الإشارة الظاهرة. انعدام الإشارة يبرر للمرتادين التذرع بعدم العلم ويعرض المؤسسة للإعذار.",
      recommendationIfNo: "قم بطباعة وتثبيت لافتات المنع المعتمدة اليوم في الأماكن المشتركة والمداخل."
    },
    {
      id: 3,
      question: "إذا كانت مؤسستكم تابعة للتعليم، التكوين، الصحة، أو القاعات الرياضية؛ هل تضمنون عدم وجود أي غرفة تدخين بداخلها بنسبة 100%؟",
      article: "المادتان 3 و4",
      weight: 20,
      explanation: "هذه القطاعات محظورة كلياً بدون استثناء ولا يجوز للإدارة تخصيص أي فضاء بداخلها للمدخنين.",
      recommendationIfNo: "ألغِ فوراً أي زاوية تدخين غير قانونية في الحرم المدرسي أو الصحي أو الرياضي."
    },
    {
      id: 4,
      question: "في حال تخصيص موضع للمدخنين بالمنشأة؛ هل تم التحقق هندسياً من تحقيق شرط التهوية (7 لتر/ثا للشخص أو 7 م³ للشخص)؟",
      article: "المادة 5",
      weight: 15,
      explanation: "شرط هندسي صارم للسلامة ومنع تراكم الغازات السامة داخل الغرفة.",
      recommendationIfNo: "كلف مصلحة الصيانة والوقاية (HSE) بقياس تدفق الهواء أو توسيع منافذ التهوية."
    },
    {
      id: 5,
      question: "هل موضع التدخين معزول تماماً ومحكم الإغلاق بحيث لا يتسرب الدخان نهائياً نحو مكاتب غير المدخنين أو الممرات؟",
      article: "المادة 6",
      weight: 10,
      explanation: "المادة 6 تفرض حماية غير المدخنين كأولوية قصوى تحت مسؤولية الإدارة المشرفة.",
      recommendationIfNo: "تأكد من تركيب أبواب ذاتية الإغلاق ونظام سحب هواء بضغط سلبي لمنع تسرب الروائح."
    },
    {
      id: 6,
      question: "هل تطبق إدارة الموارد البشرية التدرج التأديبي (إنذار - إيقاف 1 إلى 3 أيام) عند ضبط أي موظف يدخن في الأماكن المحظورة؟",
      article: "المادتان 9 و10",
      weight: 10,
      explanation: "التراخي يعرض المؤسسة لتوقيع السحب المؤقت للرخصة لمدة 15 يوماً وفق المادة 9.",
      recommendationIfNo: "فعل إجراءات الضبط والمتابعة التأديبية لحماية المنشأة من العقوبات الإدارية الخارجية."
    }
  ];

  const handleAnswer = (id: number, val: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [id]: val
    }));
  };

  const resetQuiz = () => {
    setAnswers({});
  };

  // Calculate score
  const answeredCount = Object.keys(answers).length;
  let totalScore = 0;
  checklistItems.forEach(item => {
    if (answers[item.id] === true) {
      totalScore += item.weight;
    }
  });

  const getRiskStatus = (score: number) => {
    if (score >= 85) {
      return {
        level: 'امتثال عالٍ ومخاطر منعدمة',
        color: 'text-emerald-800 bg-emerald-100 border-emerald-300',
        summary: 'مؤسستكم في وضعية قانونية آمنة ومطابقة لأحكام المرسوم 01-285، والنظام الداخلي والتهوية محمية قانونياً.'
      };
    } else if (score >= 50) {
      return {
        level: 'امتثال جزئي - مخاطر إدارية متوسطة',
        color: 'text-amber-800 bg-amber-100 border-amber-300',
        summary: 'توجد نقائص تتطلب تصحيحاً سريعاً (مثل النظام الداخلي أو اللافتات) لتفادي توجيه إعذار إداري من مفتشية العمل أو مصالح التجارة.'
      };
    } else {
      return {
        level: 'مخاطر إدارية عالية (خطر سحب الرخصة 15 يوماً)',
        color: 'text-rose-900 bg-rose-100 border-rose-300',
        summary: 'المؤسسة معرضة بشكل مباشر لتوقيع العقوبات الإدارية المنصوص عليها بالمادة 9: الإعذار أو السحب المؤقت لرخصة الممارسة لمدة 15 يوماً.'
      };
    }
  };

  const risk = getRiskStatus(totalScore);

  return (
    <section id="compliance" className="py-12 px-4 sm:px-8 bg-white border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
            <FileCheck className="w-4 h-4" />
            <span>تدقيق الامتثال الذاتي للمنشآت</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
            فاحص الامتثال الذاتي لأحكام المرسوم التنفيذي 01-285
          </h2>
          <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
            أجب عن الأسئلة الـ 6 التالية للتحقق الفوري من سلامة الموقف القانوني لمنشأتكم، ومعرفة هل تواجهون خطر الإعذار أو السحب المؤقت للرخصة لمدة 15 يوماً.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Questions Column */}
          <div className="lg:col-span-8 space-y-4">
            {checklistItems.map((item, idx) => {
              const currentAns = answers[item.id];
              return (
                <div
                  key={item.id}
                  className="bg-stone-50 rounded-xl border border-stone-300 p-5 space-y-3 transition-colors hover:border-stone-400"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-800 text-white font-bold text-[11px] flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-stone-200">
                          {item.article}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-stone-900 leading-snug">
                        {item.question}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleAnswer(item.id, true)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          currentAns === true
                            ? 'bg-emerald-800 text-white shadow-xs'
                            : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-100'
                        }`}
                      >
                        نعم
                      </button>
                      <button
                        onClick={() => handleAnswer(item.id, false)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          currentAns === false
                            ? 'bg-rose-700 text-white shadow-xs'
                            : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-100'
                        }`}
                      >
                        لا
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-stone-500 leading-relaxed pr-7">
                    {item.explanation}
                  </p>

                  {currentAns === false && (
                    <div className="mt-2 text-xs text-rose-900 bg-rose-50 p-2.5 rounded-lg border border-rose-200 flex items-start gap-2 pr-7">
                      <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>توصية التصحيح الفوري: </strong>
                        <span>{item.recommendationIfNo}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="bg-white rounded-xl border border-stone-300 p-6 space-y-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <span className="text-xs font-bold text-stone-500 uppercase">
                  تقرير تقييم الامتثال
                </span>
                <span className="text-xs text-stone-400">
                  تمت الإجابة: {answeredCount} من {checklistItems.length}
                </span>
              </div>

              {/* Score Display */}
              <div className="text-center space-y-2 py-2">
                <div className="text-4xl sm:text-5xl font-black text-stone-900">
                  {totalScore}<span className="text-2xl font-bold text-stone-400">%</span>
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${risk.color}`}>
                  {risk.level}
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200">
                {risk.summary}
              </p>

              {/* Progress bar */}
              <div className="space-y-1">
                <div className="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      totalScore >= 80 ? 'bg-emerald-600' : totalScore >= 50 ? 'bg-amber-500' : 'bg-rose-600'
                    }`}
                    style={{ width: `${totalScore}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-stone-400">
                  <span>خطر إداري (سحب رخصة)</span>
                  <span>مطابق كلياً</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-2 pt-2 border-t border-stone-200">
                <button
                  onClick={() => window.print()}
                  className="w-full py-2 px-3 bg-stone-800 hover:bg-stone-900 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>طباعة تقرير التدقيق</span>
                </button>
                <button
                  onClick={resetQuiz}
                  className="w-full py-2 px-3 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>إعادة تعيين الأسئلة</span>
                </button>
              </div>
            </div>

            {/* Quick Reminder Box */}
            <div className="bg-amber-50 rounded-xl border border-amber-200 p-4 space-y-2 text-xs text-amber-900">
              <strong className="block font-bold flex items-center gap-1.5">
                <AlertOctagon className="w-4 h-4 text-amber-700 shrink-0" />
                <span>المادة 9: السحب المؤقت للرخصة لمدة 15 يوماً</span>
              </strong>
              <p className="text-[11px] leading-relaxed">
                لا تتردد لجان المراقبة التابعة للدوائر والولايات ومصالح التجارة في توقيع الغلق المؤقت فور ضبط عمال أو زبائن يدخنون في محلات لا تتوفر على شروط المطابقة.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
