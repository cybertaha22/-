/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { OverviewSection } from './components/OverviewSection';
import { MechanismSection } from './components/MechanismSection';
import { EnforcementBodiesSection } from './components/EnforcementBodiesSection';
import { PracticalGuideSection } from './components/PracticalGuideSection';
import { ArticlesSection } from './components/ArticlesSection';
import { VentilationCalculator } from './components/VentilationCalculator';
import { ComplianceChecklist } from './components/ComplianceChecklist';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PdfViewerModal } from './components/PdfViewerModal';
import { SignGeneratorModal } from './components/SignGeneratorModal';
import { ArrowUp, Download, Printer } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [isPdfModalOpen, setIsPdfModalOpen] = useState<boolean>(false);
  const [isSignModalOpen, setIsSignModalOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Top Header Navigation */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenPdf={() => setIsPdfModalOpen(true)}
        onOpenSignModal={() => setIsSignModalOpen(true)}
      />

      {/* Main Body Content */}
      <main className="flex-1">
        
        {/* Hero & Statutory Overview */}
        <OverviewSection
          onOpenPdf={() => setIsPdfModalOpen(true)}
          onNavigateToMechanism={() => scrollToSection('mechanism')}
        />

        {/* 1. Implementation Mechanism (آلية التطبيق) */}
        <MechanismSection />

        {/* 2. Responsible Governmental & Institutional Bodies (الجهات المسؤولة) */}
        <EnforcementBodiesSection />

        {/* 3. Practical Steps for Companies & Individuals (الإجراءات العملية للشركات والأفراد) */}
        <PracticalGuideSection
          onOpenSignModal={() => setIsSignModalOpen(true)}
          onOpenCalculator={() => scrollToSection('calculator')}
        />

        {/* 4. Full Text & In-depth Commentary of 14 Articles (النص الكامل للمواد والشرح) */}
        <ArticlesSection />

        {/* 5. Ventilation Engineering Calculator (حاسبة التهوية - المادة 5) */}
        <VentilationCalculator />

        {/* 6. Institutional Compliance Audit Checklist (فاحص الامتثال الذاتي) */}
        <ComplianceChecklist />

        {/* 7. Frequently Asked Legal Questions (الأسئلة الشائعة) */}
        <FaqSection />

      </main>

      {/* Institutional Footer */}
      <Footer
        onOpenPdf={() => setIsPdfModalOpen(true)}
        onOpenSignModal={() => setIsSignModalOpen(true)}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-30 flex flex-col gap-2.5 no-print">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center shadow-lg hover:bg-stone-800 transition-transform hover:scale-105"
          title="العودة لأعلى الصفحة"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Modals */}
      <PdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />

      <SignGeneratorModal
        isOpen={isSignModalOpen}
        onClose={() => setIsSignModalOpen(false)}
      />

    </div>
  );
}
