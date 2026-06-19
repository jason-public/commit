import { PRINCIPLES } from '../data/members';
import { ChevronDown, Sparkles, Award, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center bg-slate-950 overflow-hidden pt-24"
    >
      {/* Background Gradient & Abstract Decorative Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft, glowing orb gradients behind elements */}
        <div className="absolute top-1/4 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-blue-600/20 blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-[#00A6D6]/15 blur-[100px] sm:blur-[150px]" />
        <div className="absolute top-[10%] right-[15%] w-[100px] sm:w-[200px] h-[100px] sm:h-[200px] rounded-full bg-yellow-500/10 blur-[60px]" />

        {/* Abstract cyber grid of dots to simulate data & infrastructure */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Geometric aesthetic lines representing "city networks" or "change connection" */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#005BAC" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00A6D6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M-100 200 C300 400, 600 100, 1000 350 S 1400 600, 1800 200" fill="none" stroke="url(#lineGrad)" strokeWidth="3" />
          <path d="M200 800 C600 500, 1000 900, 1400 400" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="5,5" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center py-12">
        {/* Badge */}
        <motion.div
          id="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-[#00A6D6] text-xs sm:text-sm font-semibold tracking-wider backdrop-blur-sm shadow-inner shadow-white/5"
        >
          <Sparkles className="h-4 w-4 text-yellow-500 animate-pulse" />
          <span>시민의 손으로 그리는 남양주의 미래</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          id="hero-main-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.1] max-w-4xl"
        >
          남양주시 민선9기 <br />
          <span className="bg-gradient-to-r from-white via-slate-100 to-[#00A6D6] bg-clip-text text-transparent">시민주권위원회</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          id="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-semibold leading-relaxed"
        >
          &ldquo;시민이 체감하는, 변화로 연결하는 실무 중심 인수위원회&rdquo;
        </motion.p>

        {/* Sleek Design Horizontal Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-2 mt-6 max-w-md select-none"
        >
          <span className="px-3.5 py-1.5 bg-white/10 text-white rounded-full text-xs font-bold border border-white/20 tracking-wide backdrop-blur-sm">
            시민주권
          </span>
          <span className="px-3.5 py-1.5 bg-white/10 text-white rounded-full text-xs font-bold border border-white/20 tracking-wide backdrop-blur-sm">
            현장중심
          </span>
          <span className="px-3.5 py-1.5 bg-white/10 text-white rounded-full text-xs font-bold border border-white/20 tracking-wide backdrop-blur-sm">
            전문성
          </span>
          <span className="px-3.5 py-1.5 bg-white/10 text-white rounded-full text-xs font-bold border border-white/20 tracking-wide backdrop-blur-sm">
            실용성
          </span>
          <span className="px-3.5 py-1.5 bg-[#F4B400] text-slate-950 rounded-full text-xs font-black tracking-wide shadow-md shadow-yellow-500/20">
            책임성
          </span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          id="hero-cta-group"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0"
        >
          <button
            id="hero-scroll-org-btn"
            onClick={() => onScrollTo('org')}
            className="w-full sm:w-52 py-4 px-6 rounded-2xl bg-[#005BAC] hover:bg-[#005BAC]/90 text-white font-bold text-sm tracking-wide shadow-lg shadow-[#005BAC]/30 active:scale-95 hover:-translate-y-0.5 transition-all duration-250 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>조직도 확인하기</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          
          <button
            id="hero-scroll-members-btn"
            onClick={() => onScrollTo('members')}
            className="w-full sm:w-52 py-4 px-6 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm tracking-wide border border-white/10 backdrop-blur-md active:scale-95 hover:-translate-y-0.5 transition-all duration-250 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>위원 검색 및 조회</span>
          </button>
        </motion.div>

        {/* Operation Principles Label */}
        <motion.div
          id="principles-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 w-full text-left max-w-4xl"
        >
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#00A6D6] border-b border-white/10 pb-2 mb-4 flex items-center space-x-1.5">
            <Award className="h-4 w-4" />
            <span>민선9기 시민주권위원회 5대 운영 기틀</span>
          </h2>

          {/* Pill Badges Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {PRINCIPLES.map((principle, index) => (
              <motion.div
                id={`principle-badge-${index}`}
                key={principle.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group relative bg-slate-900 border border-white/10 rounded-2xl p-4 transition-all duration-300 hover:border-[#00A6D6] hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#005BAC] rounded-l-2xl group-hover:bg-[#00A6D6] transition-colors" />
                <h3 className="text-base font-bold text-white group-hover:text-[#00A6D6] transition-colors pl-2">
                  {principle.name}
                </h3>
                <p className="mt-2 text-xs text-slate-400 font-light leading-relaxed pl-2 group-hover:text-slate-200 transition-colors">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Chevron Scroll Indicator */}
        <motion.div
          id="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 1 }}
          onClick={() => onScrollTo('about')}
          className="absolute bottom-6 cursor-pointer text-slate-400 hover:text-white transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </div>
    </section>
  );
}
