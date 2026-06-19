import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OrganizationChart from './components/OrganizationChart';
import MemberSection from './components/MemberSection';
import MemberDetailModal from './components/MemberDetailModal';
import Footer from './components/Footer';
import { Member } from './types';

export default function App() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [selectedDeptFilter, setSelectedDeptFilter] = useState<string>('');
  const [selectedCommitteeTypeForced, setSelectedCommitteeTypeForced] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Monitor screen scrolling to update sticky navigation highlight state using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50px 0px -60% 0px', // triggers when section dominates the viewport center
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ['hero', 'org', 'members'];
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionId: string, committeeTypeFilter?: string) => {
    // If a direct committee filter is sent from Header
    if (committeeTypeFilter) {
      setSelectedCommitteeTypeForced(committeeTypeFilter);
    }

    // Scroll smoothly to target element
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // When a department node is clicked in the interactive Org Chart, filter members list dynamically
  const handleSelectDepartmentFromChart = (deptName: string) => {
    setSelectedDeptFilter(deptName);
    
    // Smoothly scroll down to the members search database view
    const membersEl = document.getElementById('members');
    if (membersEl) {
      membersEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="nyj-app-root" className="min-h-screen bg-slate-50 antialiased selection:bg-[#00A6D6] selection:text-white font-sans text-slate-800">
      {/* Sticky header bar */}
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main sections */}
      <main id="main-content-area">
        <Hero onScrollTo={(id) => handleNavigate(id)} />
        <OrganizationChart onSelectDepartment={handleSelectDepartmentFromChart} />
        <MemberSection
          onOpenDetail={(member) => setSelectedMember(member)}
          selectedDeptFilter={selectedDeptFilter}
          onClearDeptFilter={() => setSelectedDeptFilter('')}
          selectedCommitteeTypeForced={selectedCommitteeTypeForced}
        />
      </main>

      {/* Detailed Member Profiles Card Overlay Modal */}
      <MemberDetailModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />

      {/* Corporate footer */}
      <Footer />
    </div>
  );
}
