import { useEffect } from 'react';
import { X, Phone, Award, Briefcase, Landmark } from 'lucide-react';
import { Member } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface MemberDetailModalProps {
  member: Member | null;
  onClose: () => void;
}

export default function MemberDetailModal({ member, onClose }: MemberDetailModalProps) {
  // Listen for escape key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (member) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [member]);

  return (
    <AnimatePresence>
      {member && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          {/* Backdrop Blur Overlay */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Large Container Card modal (Slide Up animation) */}
          <motion.div
            id={`modal-card-${member.id}`}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white rounded-[32px] overflow-hidden shadow-2xl z-10 border border-slate-100 flex flex-col md:flex-row"
          >
            {/* Design header visual accent for mobile */}
            <div className="md:hidden h-2.5 w-full bg-gradient-to-r from-[#005BAC] to-[#00A6D6]" />

            {/* Left Column: Profile Photo & Key badging */}
            <div className="md:w-5/12 bg-slate-50 p-6 sm:p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-slate-100 select-none">
              
              <div className="relative w-36 h-36 mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#005BAC]/10 to-[#00A6D6]/10 animate-pulse" />
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg relative z-10"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextNode = e.currentTarget.nextElementSibling;
                    if (nextNode) {
                      (nextNode as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                
                {/* Avatar Failover Initial */}
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#005BAC] to-[#00A6D6] text-white flex items-center justify-center font-bold text-4xl border-4 border-white shadow-lg z-1"
                  style={{ display: 'none' }}
                >
                  {member.name[0]}
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-[#005BAC]/10 text-xs font-bold text-[#005BAC] tracking-wide mb-2 block">
                {member.committeeType}
              </span>
              
              <h3 className="text-2xl font-black text-slate-900">
                {member.name}
              </h3>
              
              <p className="text-sm font-bold text-[#00A6D6] mt-0.5">
                {member.position}
              </p>

              <span className="mt-2 text-xs text-slate-500 font-medium">
                소속 : {member.department}
              </span>

              {/* Instant Action Phone in side block */}
              <a
                id={`modal-instant-call-${member.id}`}
                href={`tel:${member.phone}`}
                className="mt-6 flex items-center justify-center space-x-2 bg-[#005BAC] hover:bg-[#005BAC]/90 text-white font-bold text-xs py-3 px-6 rounded-2xl w-full shadow-md shadow-blue-900/10 hover:shadow-lg transition-all"
              >
                <Phone className="h-4 w-4" />
                <span>위원 직통 연결 ({member.phone})</span>
              </a>
            </div>

            {/* Right Column: Dynamic Core Careers & Histories */}
            <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between">
              
              {/* Close Button at top-right */}
              <button
                id="modal-close-icon-btn"
                onClick={onClose}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="닫기"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                    <Landmark className="h-3.5 w-3.5 text-[#005BAC]" />
                    <span>소속 및 담당업무</span>
                  </h4>
                  <p className="mt-1.5 text-sm font-bold text-slate-800 bg-slate-50 rounded-xl p-3 border border-slate-100/60 leading-relaxed">
                    민선9기 시민주권위원회 <strong className="text-[#005BAC]">{member.department}</strong> 소속으로서 {member.position} 업무를 정기 심의합니다.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5 text-[#00A6D6]" />
                    <span>핵심 경력 및 이력사항</span>
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {member.career.map((careerLine, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-xs sm:text-sm text-slate-600 leading-relaxed"
                      >
                        <span className="text-[#00A6D6] mr-2 text-xs shrink-0 mt-1">✔</span>
                        <span className="font-light">{careerLine}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer administrative disclaimer */}
              <div className="mt-12 pt-4 border-t border-slate-100/80 flex items-center justify-between text-[11px] text-slate-400 font-light">
                <span className="flex items-center gap-1">
                  <Briefcase className="h-3 w-3" />
                  <span>Namyangju Administrative Office</span>
                </span>
                <button
                  id="modal-footer-close-btn"
                  onClick={onClose}
                  className="font-bold text-slate-600 hover:text-slate-800 uppercase tracking-wide"
                >
                  닫기 [ESC]
                </button>
              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
