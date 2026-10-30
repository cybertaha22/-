/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Wind, Calculator, AlertTriangle, CheckCircle2, XCircle, Info, Building } from 'lucide-react';

export const VentilationCalculator: React.FC = () => {
  const [establishmentType, setEstablishmentType] = useState<string>('workplace');
  const [ventilationMethod, setVentilationMethod] = useState<'mechanical' | 'external'>('mechanical');
  const [peopleCount, setPeopleCount] = useState<number>(5);
  const [roomArea, setRoomArea] = useState<number>(15); // m²
  const [ceilingHeight, setCeilingHeight] = useState<number>(2.8); // m
  const [actualAirflowRate, setActualAirflowRate] = useState<number>(50); // L/s if mechanical

  const isForbiddenFacility = establishmentType === 'school' || establishmentType === 'health' || establishmentType === 'sports';

  // Calculations
  const roomVolume = Number((roomArea * ceilingHeight).toFixed(1)); // m³
  const requiredMechanicalFlowLs = peopleCount * 7; // 7 L/s per person
  const requiredMechanicalFlowM3h = Number((requiredMechanicalFlowLs * 3.6).toFixed(1)); // 1 L/s = 3.6 m³/h
  const requiredVolumeExternal = peopleCount * 7; // 7 m³ per person

  // Check compliance
  let isCompliant = false;
  let complianceMessage = '';

  if (isForbiddenFacility) {
    isCompliant = false;
    complianceMessage = 'يحظر القانون قطاعياً إنشاء أي موضع للمدخنين في هذه المنشأة وفق المادتين 3 و4!';
  } else if (ventilationMethod === 'mechanical') {
    isCompliant = actualAirflowRate >= requiredMechanicalFlowLs;
    complianceMessage = isCompliant
      ? `معدل تدفق الهواء (${actualAirflowRate} لتر/ثا) يحقق أو يفوق الحد الأدنى المطلوب (${requiredMechanicalFlowLs} لتر/ثا).`
      : `معدل التدفق الحالي (${actualAirflowRate} لتر/ثا) غير كافٍ. المطلوب على الأقل ${requiredMechanicalFlowLs} لتر/ثا لـ ${peopleCount} أشخاص.`;
  } else {
    isCompliant = roomVolume >= requiredVolumeExternal;
    complianceMessage = isCompliant
      ? `حجم الغرفة الحالي (${roomVolume} م³) يتجاوز الحد الأدنى المطلوب (${requiredVolumeExternal} م³) لـ ${peopleCount} أشخاص.`
      : `حجم الغرفة الحالي (${roomVolume} م³) ضيق جداً. المطلوب ${requiredVolumeExternal} م³ على الأقل لـ ${peopleCount} أشخاص بمعدل 7 م³ للشخص.`;
  }

  return (
    <section id="calculator" className="py-12 px-4 sm:px-8 bg-stone-50 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
            <Wind className="w-4 h-4" />
            <span>أداة هندسية تفاعلية</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
            حاسبة معايير التهوية القانونية لمواضع المدخنين (المادة 5)
          </h2>
          <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
            تنص المادة 5 من المرسوم 01-285 على معايير هندسية ملزمة: <strong>7 لترات/ثانية للشخص</strong> (للتهوية الميكانيكية أو النواقل) أو <strong>7 أمتار مكعبة للشخص</strong> (للمنافذ الخارجية). استخدم هذه الحاسبة لمراجعة مطابقة منشأتك.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Column */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-stone-300 p-6 space-y-5 shadow-xs">
            <h3 className="text-base font-bold text-stone-900 flex items-center gap-2 pb-2 border-b border-stone-200">
              <Calculator className="w-4 h-4 text-emerald-700" />
              <span>بيانات المنشأة وغرفة المدخنين:</span>
            </h3>

            {/* Field 1: Facility Type */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 block">
                1. نوع وطبيعة المنشأة:
              </label>
              <select
                value={establishmentType}
                onChange={(e) => setEstablishmentType(e.target.value)}
                className="w-full py-2.5 px-3 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:outline-hidden font-semibold"
              >
                <option value="workplace">مقر عمل إداري أو شركة خاصة أو مصنع (مرخص بشروط)</option>
                <option value="restaurant">مطعم أو مقهى أو محل استهلاك أغذية (مرخص بشروط)</option>
                <option value="station">محطة انتظار مسافرين أو نقل عمومي (مرخص بشروط)</option>
                <option value="school">مؤسسة مدرسية أو تعليمية أو تكوين مهني (محظور كلياً قطاعياً)</option>
                <option value="health">مؤسسة صحية / مستشفى / عيادة (محظور كلياً قطاعياً)</option>
                <option value="sports">قاعة تظاهرات رياضية أو ثقافية (محظور كلياً قطاعياً)</option>
              </select>
            </div>

            {/* Forbidden Warning if applicable */}
            {isForbiddenFacility && (
              <div className="p-3.5 bg-rose-50 border border-rose-300 rounded-lg text-rose-900 text-xs flex items-start gap-2.5">
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">تنبيه قانوني صريح بالمادة 5:</strong>
                  <span>
                    الاستثناء الوارد بالمادة 5 لا ينطبق إطلاقاً على هذا الصنف من المؤسسات! يمنع منعاً باتاً استحداث أي غرفة تدخين داخل المدارس أو المستشفيات أو القاعات الرياضية، والالتزام هنا هو الحظر الكامل 100%.
                  </span>
                </div>
              </div>
            )}

            {/* Field 2: Ventilation System */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 block">
                2. نظام وطريقة التهوية المعتمدة في الموضع:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setVentilationMethod('mechanical')}
                  className={`p-3 rounded-lg border text-right text-xs transition-all ${
                    ventilationMethod === 'mechanical'
                      ? 'bg-emerald-50 border-emerald-700 text-emerald-950 font-bold ring-1 ring-emerald-700'
                      : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <div className="font-bold">تهوية ميكانيكية أو عبر ناقل</div>
                  <div className="text-[11px] text-stone-500 font-normal mt-0.5">
                    مضخات سحب هواء، مداخن شفط، مجاري ناقلة (7 لتر/ثا للشخص)
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setVentilationMethod('external')}
                  className={`p-3 rounded-lg border text-right text-xs transition-all ${
                    ventilationMethod === 'external'
                      ? 'bg-emerald-50 border-emerald-700 text-emerald-950 font-bold ring-1 ring-emerald-700'
                      : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <div className="font-bold">تهوية طبيعية عبر منافذ خارجية</div>
                  <div className="text-[11px] text-stone-500 font-normal mt-0.5">
                    نوافذ ومنافذ تهوية مفتوحة للخارج مباشرة (7 م³ للشخص)
                  </div>
                </button>
              </div>
            </div>

            {/* Field 3: Expected capacity */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-stone-700">
                  3. الطاقة الاستيعابية المتوقعة (عدد الأشخاص المدخنين بالتزامن):
                </label>
                <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                  {peopleCount} أشخاص
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={peopleCount}
                onChange={(e) => setPeopleCount(Number(e.target.value))}
                className="w-full accent-emerald-700 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-400">
                <span>شخص واحد</span>
                <span>15 شخصاً</span>
                <span>30 شخصاً</span>
              </div>
            </div>

            {/* Field 4: Specific parameters based on chosen method */}
            {ventilationMethod === 'mechanical' ? (
              <div className="space-y-1.5 pt-1">
                <label className="text-xs font-bold text-stone-700 block">
                  4. معدل سحب الهواء الفعلي لمراوح/نظام الشفط (لتر/ثانية):
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="5"
                    max="500"
                    value={actualAirflowRate}
                    onChange={(e) => setActualAirflowRate(Math.max(1, Number(e.target.value)))}
                    className="w-32 py-2 px-3 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-700 font-bold text-left"
                  />
                  <span className="text-xs text-stone-500">
                    لتر / ثانية (تعادل تقريباً {(actualAirflowRate * 3.6).toFixed(0)} م³ / ساعة)
                  </span>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 pt-1">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 block">
                    مساحة الغرفة (م²):
                  </label>
                  <input
                    type="number"
                    min="3"
                    max="100"
                    value={roomArea}
                    onChange={(e) => setRoomArea(Math.max(1, Number(e.target.value)))}
                    className="w-full py-2 px-3 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-700 font-bold text-left"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 block">
                    ارتفاع السقف (متر):
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="2"
                    max="6"
                    value={ceilingHeight}
                    onChange={(e) => setCeilingHeight(Math.max(1.8, Number(e.target.value)))}
                    className="w-full py-2 px-3 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-700 font-bold text-left"
                  />
                </div>
              </div>
            )}

          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Verdict Box */}
            <div className={`rounded-xl border p-6 space-y-4 shadow-sm ${
              isForbiddenFacility
                ? 'bg-rose-50 border-rose-300 text-rose-950'
                : isCompliant
                  ? 'bg-emerald-900 border-emerald-950 text-white'
                  : 'bg-amber-50 border-amber-300 text-amber-950'
            }`}>
              <div className="flex items-center justify-between pb-3 border-b border-black/10">
                <span className="text-xs font-bold uppercase tracking-wide opacity-80">
                  نتيجة التحقق القانوني
                </span>
                {isForbiddenFacility ? (
                  <XCircle className="w-5 h-5 text-rose-600" />
                ) : isCompliant ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                )}
              </div>

              <div>
                <h4 className="text-lg font-black">
                  {isForbiddenFacility
                    ? 'محظور قانوناً (غير قابل للتخصيص)'
                    : isCompliant
                      ? 'مطابق لاشتراطات المادة 5'
                      : 'غير مطابق (يتطلب زيادة التهوية)'}
                </h4>
                <p className={`text-xs mt-1.5 leading-relaxed ${
                  isCompliant && !isForbiddenFacility ? 'text-emerald-200' : 'text-stone-700'
                }`}>
                  {complianceMessage}
                </p>
              </div>

              {/* Requirement Summary Table */}
              <div className="space-y-2 pt-2 border-t border-black/10 text-xs">
                <div className="flex justify-between items-center py-1">
                  <span>الحد الأدنى القانوني للشخص:</span>
                  <strong className="font-bold">
                    {ventilationMethod === 'mechanical' ? '7 لتر / ثانية' : '7 أمتار مكعبة'}
                  </strong>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span>إجمالي المتطلب لـ {peopleCount} أشخاص:</span>
                  <strong className="font-bold">
                    {ventilationMethod === 'mechanical'
                      ? `${requiredMechanicalFlowLs} لتر/ثا (${requiredMechanicalFlowM3h} م³/سا)`
                      : `${requiredVolumeExternal} متر مكعب`}
                  </strong>
                </div>

                {ventilationMethod === 'external' && (
                  <div className="flex justify-between items-center py-1">
                    <span>حجم الغرفة الفعلي المحسوب:</span>
                    <strong className="font-bold">{roomVolume} متر مكعب</strong>
                  </div>
                )}
              </div>
            </div>

            {/* Engineering Note Card */}
            <div className="bg-white rounded-xl border border-stone-300 p-5 space-y-3 text-xs text-stone-600">
              <div className="flex items-center gap-2 text-stone-900 font-bold">
                <Info className="w-4 h-4 text-emerald-700" />
                <span>الاشتراطات المكملة بالمادة 6 (حماية غير المدخنين):</span>
              </div>
              <p className="leading-relaxed">
                حتى لو طابقت التهوية الأرقام المذكورة، يلزم بموجب <strong>المادة 6</strong> التأكد من عدم ارتداد دخان السجائر نحو ممرات المؤسسة أو مكاتب الموظفين الآخرين، ويفضل تطبيق مبدأ الضغط السلبي (Negative Pressure) بحيث يسحب الهواء نحو الخارج فقط.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
