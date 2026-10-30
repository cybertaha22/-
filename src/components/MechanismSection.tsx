/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Wind, 
  FileText, 
  AlertTriangle, 
  Check, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Sliders, 
  ArrowLeft,
  Sparkles,
  Info
} from 'lucide-react';

export const MechanismSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [showComparison, setShowComparison] = useState<boolean>(true);

  const mechanismSteps = [
    {
      id: 1,
      title: "1. التحديد القانوني لنطاق الحظر (المادتان 3 و4)",
      short: "تحديد الأماكن المحظورة",
      description: "تبدأ آلية التطبيق بفرز وتصنيف الأماكن العمومية إلى صنفين لا لبس فيهما: صنف يخضع للحظر المطلق دون أي استثناء، وصنف يخضع للحظر المبدئي العام مع إمكانية استثناء مشروط بضوابط هندسية صارمة.",
      details: [
        "الحظر المطلق: يشمل المدارس، مؤسسات التعليم التحضيري، معاهد التكوين المهني، ومراكز إيواء واستقبال القصر. كما يمتد الحظر المطلق ليشمل الساحات غير المغطاة بالمدارس ومؤسسات الصحة والقاعات الرياضية والثقافية.",
        "الحظر المبدئي العام: يشمل كل مكان مغلق ومغطى مخصص لاستعمال جماعي (أماكن العمل، قاعات الاجتماعات، وسائل النقل بكافة أنواعها، المطاعم والمقاهي، قاعات الانتظار)."
      ],
      legalRef: "المواد 3 و4 من المرسوم"
    },
    {
      id: 2,
      title: "2. آلية الاستثناء وضبط المعايير الهندسية لغرف المدخنين (المادة 5)",
      short: "شروط غرف المدخنين والتهوية",
      description: "المشرع لم يترك مسألة تخصيص أماكن للمدخنين عشوائية، بل أحاطها بقيود تقنية وهندسية ملزمة تمنع تسرب الدخان وتضمن تجديد الهواء بمعدلات حسابية محددة بدقة.",
      details: [
        "استثناء الأماكن الحساسة: يحظر قطعاً تخصيص أي غرفة للمدخنين في قطاعات التعليم والتكوين والصحة والقاعات الرياضية والترفيهية.",
        "معيار التهوية الميكانيكية: 7 لترات في الثانية للشخص الواحد كحد أدنى للمحلات ذات التهوية الاصطناعية أو المعتمدة على مجاري سحب الهواء.",
        "معيار التهوية بالمنافذ الخارجية: 7 أمتار مكعبة للشخص الواحد كحد أدنى للمحلات المعتمدة على نوافذ ومنافذ خارجية مباشرة.",
        "الضغط السلبي والعزل التام: يشترط عدم ارتداد الهواء الملوث إلى الممرات والقاعات المشتركة."
      ],
      legalRef: "المادة 5 من المرسوم"
    },
    {
      id: 3,
      title: "3. أولوية حماية غير المدخنين تحت مسؤولية الإدارة المشرفة (المادة 6)",
      short: "مسؤولية الإدارة وحماية غير المدخنين",
      description: "تُسند المادة 6 إلى السلطة المشرفة على المنشأة (المدير، صاحب العمل، المسؤول الأول) صلاحية تحديد أماكن التدخين، لكنها تقيدها بشرط جوهري وأولوي: ضمان حماية الأشخاص غير المدخنين في كافة الأحوال.",
      details: [
        "المسؤولية الإدارية والمدنية تقع مباشرة على عاتق الإدارة المشرفة.",
        "في حال حدوث أي تعارض بين راحة المدخن وسلامة غير المدخن، فإن القانون يوجب ترجيح حماية غير المدخن فوراً بإلغاء أو نقل موضع التدخين."
      ],
      legalRef: "المادة 6 من المرسوم"
    },
    {
      id: 4,
      title: "4. آلية الإشهار والتنبيه البصري الإلزامي (المادة 7)",
      short: "تثبيت لافتات المنع الرسمية",
      description: "لا يكتفي القانون بوجود النص في الجريدة الرسمية، بل يفرض على كل منشأة آلية بصرية لإعلام وتذكير المرتفقين والعمال بصفة يومية ومستمرة.",
      details: [
        "تثبيت لوحات وإشارات ظاهرة ومرئية عند مداخل المنشآت والممرات وقاعات الانتظار.",
        "الإشارة بوضوح إلى منع التدخين وتوضيح الموضع المخصص للمدخنين إن وُجد.",
        "غياب الإشارة البصرية الظاهرة يعد مخالفة قائمة بذاتها توجب الإعذار الإداري للمنشأة."
      ],
      legalRef: "المادة 7 من المرسوم"
    },
    {
      id: 5,
      title: "5. آلية الإدماج التعاقدي في النظام الداخلي (المادة 8)",
      short: "تعديل النظام الداخلي للمؤسسة",
      description: "هذه هي الحلقة المفصلية في تحويل القانون العام إلى واجب مهني ملزم؛ حيث يلزم المرسوم كل هيئة أو مؤسسة بتعديل نظامها الداخلي (Règlement Intérieur).",
      details: [
        "إدراج نص صريح بحظر التدخين وحماية غير المدخنين.",
        "إدراج سلم العقوبات التأديبية المنصوص عليها بالمادة 10 في النظام الداخلي وإيداعه رسمياً لدى مفتشية العمل وأمانة ضبط المحكمة.",
        "التبليغ الإلزامي: إشعار جميع المستخدمين والعمال كتابياً وبالتعليق في أماكن العمل لضمان النفاذ القانوني للجزاءات."
      ],
      legalRef: "المادة 8 من المرسوم"
    },
    {
      id: 6,
      title: "6. الآلية الزجرية المزدوجة: إدارية وتأديبية (المادتان 9 و10)",
      short: "الردع المزدوج: المؤسسات والعمال",
      description: "صمم المرسوم آلية جزائية متوازنة تطال كلاً من الهيئة المقصرة والعامل المخالف، لضمان عدم تواطؤ المؤسسات مع المدخنين.",
      details: [
        "العقوبات الإدارية على المؤسسات (المادة 9): توجيه إعذار لتدارك المخالفة، أو السحب المؤقت لرخصة الممارسة لمدة خمسة عشر (15) يوماً مع توقف النشاط.",
        "العقوبات التأديبية على الأفراد (المادة 10): تتراوح بين الإنذار الكتابي، والتوقيف المؤقت عن العمل من يوم (1) إلى ثلاثة (3) أيام مع خصم الأجر المقابل."
      ],
      legalRef: "المادتان 9 و10 من المرسوم"
    },
    {
      id: 7,
      title: "7. آلية التنظيم القطاعي والتوعية المستمرة (المادتان 11 و12)",
      short: "القرارات الوزارية وحملات التحسيس",
      description: "استكمالاً لمنظومة التطبيق، منح المرسوم صلاحية للوزراء المختصين لإصدار قرارات تفصيلية ملائمة لكل نشاط، مع إلزام أجهزة الدولة بتنظيم حملات إعلام وتثقيف دائمة.",
      details: [
        "قرارات وزارية قطاعية تصدر عن وزراء النقل والتجارة والسياحة والصحة لضبط الإجراءات الدقيقة.",
        "أعمال الإعلام والتربية والاتصال الموجهة للجمهور والمرتادين (المادة 11) لتحقيق الامتثال الطوعي."
      ],
      legalRef: "المادتان 11 و12 من المرسوم"
    }
  ];

  return (
    <section id="mechanism" className="py-12 px-4 sm:px-8 bg-stone-50 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
            <ShieldCheck className="w-4 h-4" />
            <span>محور السؤال الرئيسي</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
            آلية تطبيق المرسوم التنفيذي 01-285 بالتفصيل
          </h2>
          <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
            تعتمد آلية تطبيق المرسوم على <strong>منظومة متكاملة من 7 مراحل تنظيمية وهندسية وقانونية</strong> تبدأ بتصنيف الفضاءات، مروراً بالاشتراطات التقنية للتهوية، ودمج الحظر في النظام الداخلي، وصولاً إلى منظومة الردع المزدوج للهيئات والأفراد.
          </p>
        </div>

        {/* Mechanism Timeline / Step Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Steps List (Left / Side) */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-bold text-stone-500 uppercase tracking-wider px-1">
              مراحل منظومة التطبيق (اختر للمعاينة الفورية):
            </div>
            {mechanismSteps.map((step) => {
              const isSelected = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full text-right p-3.5 rounded-xl border transition-all text-xs font-semibold flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-emerald-800 text-white border-emerald-900 shadow-md ring-2 ring-emerald-600/30'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-100/80'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${
                      isSelected ? 'bg-white text-emerald-900' : 'bg-stone-100 text-stone-600'
                    }`}>
                      {step.id}
                    </span>
                    <span className="line-clamp-1">{step.short}</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded ${
                    isSelected ? 'bg-emerald-900/60 text-emerald-200' : 'bg-stone-100 text-stone-500'
                  }`}>
                    {step.legalRef}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Card */}
          <div className="lg:col-span-7">
            {(() => {
              const current = mechanismSteps.find((s) => s.id === activeStep) || mechanismSteps[0];
              return (
                <div className="bg-white rounded-xl border border-stone-300 p-6 sm:p-8 space-y-5 shadow-sm min-h-[440px] flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3 pb-3 border-b border-stone-200">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                        {current.legalRef}
                      </span>
                      <span className="text-xs text-stone-400 font-medium">
                        المرحلة التنفيذية {current.id} من {mechanismSteps.length}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                      {current.title}
                    </h3>

                    <p className="text-sm text-stone-700 leading-relaxed font-medium">
                      {current.description}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      <h4 className="text-xs font-bold text-stone-900 flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-emerald-700" />
                        <span>تفاصيل الإجراء والمقتضيات العملية:</span>
                      </h4>
                      <div className="space-y-2">
                        {current.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-600 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                    <span>المرسوم التنفيذي 01-285 | الجريدة الرسمية رقم 55</span>
                    <div className="flex gap-2">
                      <button
                        disabled={activeStep === 1}
                        onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                        className="px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 disabled:opacity-40 text-stone-700 font-bold"
                      >
                        السابق
                      </button>
                      <button
                        disabled={activeStep === mechanismSteps.length}
                        onClick={() => setActiveStep(prev => Math.min(mechanismSteps.length, prev + 1))}
                        className="px-2.5 py-1 rounded bg-emerald-800 hover:bg-emerald-900 disabled:opacity-40 text-white font-bold"
                      >
                        التالي
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

        </div>

        {/* Essential Comparison Table: Total Ban vs. Places with Conditional Smoking Zones */}
        <div className="bg-white rounded-xl border border-stone-300 p-6 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Sliders className="w-5 h-5 text-emerald-700" />
              <h3 className="text-base font-bold text-stone-900">
                مقارنة حاسمة في آلية التطبيق: أين يمنع التدخين قطعاً؟ وأين يجوز تخصيص مواضع؟
              </h3>
            </div>
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="text-xs text-emerald-800 font-bold hover:underline flex items-center gap-1"
            >
              <span>{showComparison ? 'طي المقارنة' : 'عرض المقارنة'}</span>
              {showComparison ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {showComparison && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              
              {/* Category A: Absolutely Forbidden */}
              <div className="bg-rose-50/60 border border-rose-200 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-800 bg-rose-100 px-2 py-0.5 rounded">
                    المادتان 3 و4 (النقاط 1-3)
                  </span>
                  <X className="w-4 h-4 text-rose-600" />
                </div>
                <h4 className="text-sm font-bold text-rose-950">
                  أماكن الحظر المطلق (يمنع فيها تخصيص أي غرفة تدخين قطعاً)
                </h4>
                <p className="text-xs text-stone-700 leading-relaxed">
                  يُحظر فيها تعاطي التبغ بجميع أشكاله، ولا يحق للإدارة بأي حال من الأحوال إحداث أي موضع للمدخنين بداخلها:
                </p>
                <ul className="text-xs space-y-1.5 text-stone-700 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span>المؤسسات المدرسية والتعليم التحضيري (المغلقة والمفتوحة)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span>مراكز ومعاهد التكوين المهني والتمهين</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span>أماكن استقبال القصّر وإيوائهم ودور الحضانة والطفولة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span>مؤسسات الصحة العمومية والخاصة (المستشفيات، العيادات، المصحات)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span>قاعات التظاهرات الرياضية والثقافية والعلمية والاقتصادية والترفيهية</span>
                  </li>
                </ul>
              </div>

              {/* Category B: Places Allowed to Have Regulated Smoking Zones */}
              <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    المادتان 4 (النقاط 4-7) و5
                  </span>
                  <Check className="w-4 h-4 text-emerald-700" />
                </div>
                <h4 className="text-sm font-bold text-emerald-950">
                  أماكن يجوز فيها تخصيص مواضع للمدخنين (بشروط هندسية)
                </h4>
                <p className="text-xs text-stone-700 leading-relaxed">
                  يمنع التدخين في الأصل، ولكن يجوز للإدارة تخصيص غرفة أو مساحة مستقلة مع الالتزام الصارم بمعايير التهوية وحماية غير المدخنين:
                </p>
                <ul className="text-xs space-y-1.5 text-stone-700 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>أماكن العمل الجماعية (محلات الاستقبال، الإطعام العمالي، المكاتب)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>المحلات التجارية المستهلكة للمواد الغذائية والمشروبات (المطاعم والمقاهي)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>قاعات ومناطق الانتظار (محطات المسافرين، المطارات، الموانئ)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>وسائل النقل العمومي البري والبحري والجوي (وفق شروط النقل الدولية)</span>
                  </li>
                  <li className="flex items-center gap-2 font-bold text-emerald-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>شرط التهوية الإجباري: 7 لتر/ثا للشخص أو 7 م³ للشخص عبر منافذ خارجية</span>
                  </li>
                </ul>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
};
