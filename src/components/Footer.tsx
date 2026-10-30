/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DECREE_INFO } from '../data/decreeData';
import { Scale, FileText, Download, Printer, Shield } from 'lucide-react';

interface FooterProps {
  onOpenPdf: () => void;
  onOpenSignModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPdf, onOpenSignModal }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 text-xs no-print">
      
      {/* Top Footer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-stone-800">
        
        {/* Col 1: Decree Identity */}
        <div className="md:col-span-5 space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <div className="w-8 h-8 rounded bg-emerald-800 flex items-center justify-center text-white font-black text-sm">
              DZ
            </div>
            <span>المرسوم التنفيذي رقم 01-285</span>
          </div>
          <p className="text-stone-400 text-xs leading-relaxed">
            يحدد الأماكن العمومية التي يمنع فيها تعاطي التبغ وكيفيات تطبيق هذا المنع. صدر بالجريدة الرسمية للجمهورية الجزائرية الديمقراطية الشعبية، العدد 55 المؤرخ في 26 سبتمبر 2001.
          </p>
          <div className="text-[11px] text-stone-500 pt-1">
            السند القانوني: المادة 63 من القانون 85-05 المتعلق بحماية الصحة وترقيتها، المعدل والمتمم.
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="md:col-span-3 space-y-2.5">
          <h4 className="text-white font-bold text-xs uppercase tracking-wider">
            أقسام الدليل التفاعلي
          </h4>
          <ul className="space-y-1.5 text-stone-400">
            <li>
              <a href="#mechanism" className="hover:text-emerald-400 transition-colors">
                آلية التطبيق ومنظومة المراحل الـ 7
              </a>
            </li>
            <li>
              <a href="#enforcement" className="hover:text-emerald-400 transition-colors">
                الجهات الحكومية والمؤسسات المسؤولة
              </a>
            </li>
            <li>
              <a href="#practical-guide" className="hover:text-emerald-400 transition-colors">
                الدليل العملي للشركات وأرباب العمل
              </a>
            </li>
            <li>
              <a href="#articles" className="hover:text-emerald-400 transition-colors">
                النص الكامل للمواد الـ 14 مع التفسير
              </a>
            </li>
            <li>
              <a href="#calculator" className="hover:text-emerald-400 transition-colors">
                حاسبة معايير التهوية القانونية (المادة 5)
              </a>
            </li>
            <li>
              <a href="#compliance" className="hover:text-emerald-400 transition-colors">
                فاحص الامتثال الذاتي للمؤسسات
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Official Actions */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="text-white font-bold text-xs uppercase tracking-wider">
            الوثائق والأدوات الرسمية
          </h4>
          <div className="space-y-2">
            <button
              onClick={onOpenPdf}
              className="w-full text-right p-2.5 rounded-lg bg-stone-800 hover:bg-stone-750 border border-stone-700 text-stone-200 text-xs font-semibold flex items-center justify-between transition-colors"
            >
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>تحميل نسخة الجريدة الرسمية الأصلية (PDF)</span>
              </span>
              <Download className="w-4 h-4 text-stone-400" />
            </button>

            <button
              onClick={onOpenSignModal}
              className="w-full text-right p-2.5 rounded-lg bg-stone-800 hover:bg-stone-750 border border-stone-700 text-stone-200 text-xs font-semibold flex items-center justify-between transition-colors"
            >
              <span className="flex items-center gap-2">
                <Printer className="w-4 h-4 text-emerald-400" />
                <span>طباعة لافتة المنع ونموذج النظام الداخلي</span>
              </span>
              <Scale className="w-4 h-4 text-stone-400" />
            </button>
          </div>
          <p className="text-[11px] text-stone-500 leading-relaxed">
            يهدف هذا الدليل لتوفير مرجع توعوي وتنفيذي مبسط لأصحاب المؤسسات، الموظفين، والمواطنين لتعزيز احترام التشريع الصحي وحماية حق الجميع في بيئة نقية.
          </p>
        </div>

      </div>

      {/* Bottom Copyright and Attributions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3 text-stone-500 text-[11px]">
        <span>
          الجمهورية الجزائرية الديمقراطية الشعبية | منصة التوعية بالمرسوم التنفيذي رقم 01-285
        </span>
        <div className="flex items-center gap-4">
          <span>الجريدة الرسمية رقم 55 - 2001</span>
          <span>•</span>
          <span>حماية الصحة وترقيتها</span>
        </div>
      </div>

    </footer>
  );
};
