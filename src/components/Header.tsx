import { useState, useEffect } from 'react';
import { Menu, X, Landmark, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onNavigate: (sectionId: string, categoryFilter?: string) => void;
  activeSection: string;
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: '위원회 소개', id: 'about' },
    { label: '조직도', id: 'org' },
    { label: '인수위원단', id: 'members', filter: '인수위원단' },
  ];

  const handleItemClick = (id: string, filter?: string) => {
    onNavigate(id, filter);
    setIsOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="header-logo-button"
            onClick={() => handleItemClick('hero')}
            className="flex items-center space-x-3 text-left group"
          >
            <div className="w-9 h-9 primary-gradient rounded-xl flex items-center justify-center shadow-md shadow-[#005BAC]/15 group-hover:scale-105 transition-transform duration-200">
              <div className="w-4 h-4 bg-white rounded-full opacity-80" />
            </div>
            <div>
              <span className={`block font-bold text-sm sm:text-base tracking-tight transition-colors duration-200 ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}>
                남양주시 민선9기
              </span>
              <span className={`block text-[11px] font-bold tracking-wider ${
                isScrolled ? 'text-[#005BAC]' : 'text-slate-300'
              }`}>
                시민주권위원회
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  id={`nav-item-${item.id}-${item.filter || ''}`}
                  key={`${item.label}-${item.id}`}
                  onClick={() => handleItemClick(item.id, item.filter)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 relative ${
                    isScrolled
                      ? isActive
                        ? 'text-[#005BAC] bg-[#005BAC]/5 font-bold'
                        : 'text-slate-600 hover:text-[#005BAC] hover:bg-slate-50'
                      : isActive
                        ? 'text-white bg-white/10 font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full ${
                        isScrolled ? 'bg-[#005BAC]' : 'bg-[#00A6D6]'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>



          {/* Mobile hamburger menu */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-slate-300 hover:bg-white/10'
              }`}
              aria-label="메뉴 열기"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden border-b overflow-hidden shadow-xl ${
              isScrolled ? 'bg-white border-slate-200' : 'bg-slate-900 border-white/10'
            }`}
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {menuItems.map((item) => (
                <button
                  id={`mobile-nav-item-${item.id}-${item.filter || ''}`}
                  key={item.label}
                  onClick={() => handleItemClick(item.id, item.filter)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                    isScrolled
                      ? 'text-slate-600 hover:text-[#005BAC] hover:bg-slate-50'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-200/50 px-4 flex flex-col items-stretch">
                <a
                  id="mobile-header-call-btn"
                  href="tel:031-590-2114"
                  className={`flex items-center justify-center space-x-2 font-bold py-3 rounded-xl border shadow ${
                    isScrolled
                      ? 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      : 'bg-slate-800 text-white border-white/10'
                  }`}
                >
                  <Phone className="h-4 w-4 text-[#00A6D6]" />
                  <span>남양주시청 대표전화 연결</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
