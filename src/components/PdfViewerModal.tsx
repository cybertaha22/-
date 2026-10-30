/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { DECREE_INFO } from '../data/decreeData';

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/80 backdrop-blur-xs">
      <div className="bg-white rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-stone-300">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-800 rounded-lg">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base">
                الجريدة الرسمية للجمهورية الجزائرية - العدد 55
              </h3>
              <p className="text-xs text-stone-400">
                مرسوم تنفيذي رقم {DECREE_INFO.number} المؤرخ في {DECREE_INFO.gregorianDate} (الصفحات {DECREE_INFO.gazettePages})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={DECREE_INFO.pdfPath}
              download="المرسوم_التنفيذي_01_285_الجريدة_الرسمية.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs font-bold transition-colors"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">تحميل الوثيقة</span>
            </a>
            <a
              href={DECREE_INFO.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-stone-300 hover:text-white hover:bg-stone-800 rounded-lg transition-colors"
              title="فتح في نافذة جديدة"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-300 hover:text-white hover:bg-stone-800 rounded-lg transition-colors"
              title="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Frame Content */}
        <div className="flex-1 bg-stone-200 relative overflow-hidden">
          <iframe
            src={`${DECREE_INFO.pdfPath}#view=FitH`}
            className="w-full h-full border-0"
            title="وثيقة الجريدة الرسمية رقم 55"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-stone-100 text-stone-600 text-xs flex flex-wrap items-center justify-between border-t border-stone-200 shrink-0">
          <span>المرجع الأصلي: الأمانة العامة للحكومة - الجمهورية الجزائرية الديمقراطية الشعبية</span>
          <span className="font-semibold text-emerald-900">نص رسمي حجة على الكافة</span>
        </div>

      </div>
    </div>
  );
};
