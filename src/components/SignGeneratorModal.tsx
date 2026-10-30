/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Printer, Cigarette, Ban, Download, FileText, Check, Copy } from 'lucide-react';
import { DECREE_INFO } from '../data/decreeData';

interface SignGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignGeneratorModal: React.FC<SignGeneratorModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'sign' | 'regulation'>('sign');
  const [establishmentName, setEstablishmentName] = useState<string>('مؤسسة / شركة');
  const [includePenaltyNotice, setIncludePenaltyNotice] = useState<boolean>(true);
  const [includeBilingual, setIncludeBilingual] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const internalRegulationText = `الجمهورية الجزائرية الديمقراطية الشعبية
ملحق تعديل النظام الداخلي للمؤسسة:
اسم الهيئة / المؤسسة: ${establishmentName}

المادة (...): منع تعاطي التبغ وحماية غير المدخنين
تطبيقاً لأحكام المرسوم التنفيذي رقم 01-285 المؤرخ في 6 رجب عام 1422 الموافق 24 سبتمبر سنة 2001 (الجريدة الرسمية رقم 55) والمادة 63 من القانون رقم 85-05 المتعلق بحماية الصحة وترقيتها:

1. الحظر العام:
يمنع منعاً باتاً ومطلقاً تعاطي التبغ بجميع أنواعه ومظاهره (التدخين، الشم "الشمة"، المضغ، اللوك، أو المص) في كل الأماكن المغلقة والمغطاة المخصصة للعمل المشترك، قاعات الاجتماعات، مكاتب الاستقبال، المطاعم العمالية، دورات المياه، وممرات المنشأة.

2. مواضع المدخنين (عند الاقتضاء):
لا يسمح بالتدخين إلا في الأماكن المعلمة رسمياً بإشارة "موضع مخصص للمدخنين"، والتي تتوفر على تهوية مطابقة للمادة 5 من المرسوم (7 لترات/ثانية للشخص للتهوية الميكانيكية أو 7 م³ للشخص للمنافذ الخارجية)، وتحت طائلة الإغلاق الفوري للموضع في حال تضرّر غير المدخنين (المادة 6).

3. الجزاءات التأديبية الفردية (المادة 10):
كل مستخدم أو عامل يخالف هذا المنع يتعرض للعقوبات التأديبية الآتية:
- الدرجة الأولى: إنذار كتابي رسمي يسجل في الملف الإداري للمعني.
- الدرجة الثانية: الإيقاف المؤقت عن العمل لمدة تتراوح بين يوم واحد (1) وثلاثة (3) أيام مع الحرمان من الأجر المقابل.
دون الإخلال بالعقوبات الإدارية التي قد تتخذها الجهات الرقابية ضد المنشأة (المادة 9).`;

  const handleCopy = () => {
    navigator.clipboard.writeText(internalRegulationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl border border-stone-300 overflow-hidden my-auto">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800 shrink-0 no-print">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-800 rounded-lg">
              <Printer className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base">
                مولد وطابع المستندات الرسمية للامتثال للمرسوم 01-285
              </h3>
              <p className="text-xs text-stone-400">
                جاهزة للطباعة فوراً بتنسيق A4 وتعليقها بالمؤسسة
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs font-bold transition-colors shadow-xs"
            >
              <Printer className="w-4 h-4" />
              <span>طباعة المستند الحالي (A4)</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-300 hover:text-white hover:bg-stone-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Customization Toolbar (No Print) */}
        <div className="px-6 py-3 bg-stone-100 border-b border-stone-200 flex flex-wrap items-center justify-between gap-4 shrink-0 no-print">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('sign')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                activeTab === 'sign'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-stone-700 border border-stone-300'
              }`}
            >
              لافتة منع التدخين الرسمية (المادة 7)
            </button>
            <button
              onClick={() => setActiveTab('regulation')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                activeTab === 'regulation'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-stone-700 border border-stone-300'
              }`}
            >
              ملحق تعديل النظام الداخلي (المادة 8)
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <label className="font-semibold text-stone-700 flex items-center gap-2">
              <span>اسم المنشأة:</span>
              <input
                type="text"
                value={establishmentName}
                onChange={(e) => setEstablishmentName(e.target.value)}
                placeholder="أدخل اسم المؤسسة"
                className="py-1 px-2.5 text-xs bg-white border border-stone-300 rounded focus:ring-1 focus:ring-emerald-700"
              />
            </label>
          </div>
        </div>

        {/* Modal Printable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-stone-200/50 flex justify-center">
          
          {activeTab === 'sign' ? (
            /* Printable Official No-Smoking Sign */
            <div className="bg-white w-full max-w-[650px] min-h-[700px] border-4 border-stone-900 p-8 sm:p-12 text-center flex flex-col justify-between shadow-lg text-stone-900 rounded-sm">
              
              {/* Sign Header */}
              <div className="space-y-2 border-b-2 border-stone-900 pb-4">
                <span className="text-xs sm:text-sm font-bold tracking-wider text-stone-700 block">
                  الجمهورية الجزائرية الديمقراطية الشعبية
                </span>
                <span className="text-sm font-extrabold text-stone-900 block">
                  {establishmentName}
                </span>
              </div>

              {/* Big Universal Symbol */}
              <div className="py-6 flex flex-col items-center justify-center space-y-4">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-12 border-rose-600 flex items-center justify-center">
                  <Cigarette className="w-24 h-24 sm:w-28 sm:h-28 text-stone-900" />
                  <div className="absolute w-[185px] sm:w-[220px] h-3.5 bg-rose-600 rotate-45 transform" />
                </div>

                <div className="space-y-1">
                  <h1 className="text-3xl sm:text-4xl font-black text-rose-700 tracking-tight">
                    ممنوع التدخين
                  </h1>
                  {includeBilingual && (
                    <h2 className="text-xl sm:text-2xl font-black text-stone-800 tracking-wider">
                      DÉFENSE DE FUMER
                    </h2>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 font-bold max-w-md mx-auto leading-relaxed pt-2">
                  يشمل المنع كافة منتجات التبغ: السجائر، الشمة (الشم)، المضغ، والمص
                </p>
              </div>

              {/* Legal Reference & Penalties */}
              <div className="space-y-3 border-t-2 border-stone-900 pt-4 text-xs text-stone-800">
                <div className="font-bold text-stone-900 text-sm">
                  تطبيقاً لأحكام المرسوم التنفيذي رقم 01-285 المؤرخ في 24 سبتمبر 2001
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-[11px] text-right bg-stone-50 p-3 border border-stone-300 rounded">
                  <div>
                    <strong className="block text-rose-700 font-bold">عقوبة الموظف المخالف (المادة 10):</strong>
                    <span>الإنذار والتوقيف المؤقت عن العمل من 1 إلى 3 أيام مع خصم الأجر.</span>
                  </div>
                  <div>
                    <strong className="block text-rose-700 font-bold">عقوبة المؤسسة المقصرة (المادة 9):</strong>
                    <span>الإعذار أو السحب المؤقت لرخصة الممارسة لمدة 15 يوماً.</span>
                  </div>
                </div>

                <span className="text-[10px] text-stone-500 block">
                  الجريدة الرسمية رقم 55 - حماية الصحة العمومية وحق غير المدخنين في هواء نقي
                </span>
              </div>

            </div>
          ) : (
            /* Printable Internal Regulation Clause Document */
            <div className="bg-white w-full max-w-[700px] border border-stone-300 p-8 sm:p-12 shadow-md text-stone-900 rounded-sm space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <span className="text-xs font-bold text-emerald-800">صيغة إيداع قانونية لدى مفتشية العمل والمحكمة</span>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-xs font-bold flex items-center gap-1.5 no-print"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'تم النسخ!' : 'نسخ النص'}</span>
                </button>
              </div>

              <div className="font-amiri text-sm sm:text-base leading-relaxed text-stone-900 whitespace-pre-line">
                {internalRegulationText}
              </div>

              <div className="pt-6 border-t border-stone-300 flex justify-between items-center text-xs text-stone-500">
                <div>
                  <span>حرر بـ: ............................ في: .... / .... / 202...</span>
                  <div className="mt-4 font-bold text-stone-800">ختم وتوقيع الإدارة العامة:</div>
                </div>
                <div>
                  <span className="block">تأشيرة مفتشية العمل:</span>
                  <div className="w-24 h-16 border border-dashed border-stone-300 mt-2 rounded" />
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer (No Print) */}
        <div className="px-6 py-3 bg-stone-100 text-stone-600 text-xs flex items-center justify-between border-t border-stone-200 shrink-0 no-print">
          <span>يمكنك الضغط على زر "طباعة المستند" لتوليد ورقة A4 أو حفظها كملف PDF</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg font-bold"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
};
