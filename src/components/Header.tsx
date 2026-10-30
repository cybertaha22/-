/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FileText, ShieldCheck, Building2, UserCheck, BookOpen, Wind, Download, Printer, ExternalLink, Menu, X } from 'lucide-react';
import { DECREE_INFO } from '../data/decreeData';

interface HeaderProps {
  onOpenPdf: () => void;
  onOpenSignModal: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenPdf,
  onOpenSignModal,
  activeSection,
  setActiveSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'mechanism', label: 'آلية التطبيق', icon: ShieldCheck },
    { id: 'enforcement', label: 'الجهات المسؤولة', icon: Building2 },
    { id: 'practical-guide', label: 'الدليل العملي للشركات والأفراد', icon: UserCheck },
    { id: 'articles', label: 'النص الكامل للمواد', icon: BookOpen },
    { id: 'calculator', label: 'حاسبة التهوية', icon: Wind },
    { id: 'compliance', label: 'فاحص الامتثال', icon: FileText },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-stone-200 shadow-xs">
      {/* Official State Banner */}
      <div className="bg-stone-900 text-stone-200 text-xs py-1.5 px-4 sm:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-emerald-400">الجمهورية الجزائرية الديمقراطية الشعبية</span>
            <span className="text-stone-500 hidden sm:inline">|</span>
            <span className="text-stone-300 hidden sm:inline">الجريدة الرسمية رقم 55 - 26 سبتمبر 2001</span>
          </div>
          <div className="flex items-center gap-4 text-stone-300">
            <span>رقم المرسوم: <strong className="text-white">01-285</strong></span>
            <span className="text-stone-600">|</span>
            <span className="text-amber-400">حماية الصحة وترقيتها</span>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand / Logo Title */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-bold text-lg shadow-sm border border-emerald-900">
            285
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-black text-stone-900 tracking-tight">
                دليل المرسوم التنفيذي 01-285
              </h1>
              <span className="hidden md:inline-block px-2 py-0.5 text-[11px] font-semibold bg-emerald-100 text-emerald-800 rounded">
                منع التبغ بالأماكن العمومية
              </span>
            </div>
            <p className="text-xs text-stone-500 hidden sm:block">
              المرجع القانوني الشامل لآليات التطبيق، التزامات المؤسسات، والجزاءات
            </p>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          <button
            onClick={onOpenPdf}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors border border-stone-300"
            title="الاطلاع على وثيقة الجريدة الرسمية الأصلية"
          >
            <Download className="w-4 h-4 text-emerald-700" />
            <span>الجريدة الرسمية (PDF)</span>
          </button>

          <button
            onClick={onOpenSignModal}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors shadow-xs"
            title="طباعة لافتة منع التدخين ونموذج النظام الداخلي"
          >
            <Printer className="w-4 h-4" />
            <span>طباعة لافتة المنع والنموذج</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenPdf}
            className="p-2 text-stone-700 hover:bg-stone-100 rounded-lg"
            title="الجريدة الرسمية PDF"
          >
            <Download className="w-5 h-5 text-emerald-700" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:bg-stone-100 rounded-lg"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Secondary Navigation Bar */}
      <nav className="hidden lg:block bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-1 overflow-x-auto py-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/70'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-stone-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 px-4 py-4 space-y-2 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-stone-700 hover:bg-emerald-50 hover:text-emerald-900 rounded-lg text-right"
              >
                <Icon className="w-4 h-4 text-emerald-700" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-stone-200 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg"
            >
              <Printer className="w-4 h-4" />
              <span>طباعة لافتة المنع والنموذج النظامي</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
