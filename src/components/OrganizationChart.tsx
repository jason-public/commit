import { useState, useRef, useEffect } from 'react';
import { Network, ZoomIn, ZoomOut, RotateCcw, HelpCircle, ArrowRight, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface OrganizationChartProps {
  onSelectDepartment: (deptName: string) => void;
}

export default function OrganizationChart({ onSelectDepartment }: OrganizationChartProps) {
  const [zoomScale, setZoomScale] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Responsively set initial zoom scale on mount for mobile/tablet screens
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) {
        setZoomScale(0.65);
      } else if (window.innerWidth < 1024) {
        setZoomScale(0.8);
      } else {
        setZoomScale(1);
      }
    }
  }, []);

  const handleZoomIn = () => setZoomScale((prev) => Math.min(prev + 0.1, 1.4));
  const handleZoomOut = () => setZoomScale((prev) => Math.max(prev - 0.1, 0.4));
  const handleResetZoom = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) {
        setZoomScale(0.65);
      } else if (window.innerWidth < 1024) {
        setZoomScale(0.8);
      } else {
        setZoomScale(1);
      }
    } else {
      setZoomScale(1);
    }
  };

  const divisions = [
    { name: '기획자치분과', label: '곽소녕, 김경미, 권용식 위원 (3명)', color: 'border-cyan-500 bg-cyan-50/50 hover:bg-cyan-50 text-cyan-900' },
    { name: '미래경제분과', label: '손영희, 김진호, 정재철, 구준서 위원 (4명)', color: 'border-blue-500 bg-blue-50/50 hover:bg-blue-50 text-blue-900' },
    { name: '도시교통환경분과', label: '이상우, 최현범 위원 (2명)', color: 'border-emerald-500 bg-emerald-50/50 hover:bg-emerald-50 text-emerald-900' },
    { name: '복지문화교육분과', label: '이경숙, 남미우, 이선희 위원 (3명)', color: 'border-amber-500 bg-amber-50/50 hover:bg-amber-50 text-amber-900' },
  ];

  return (
    <section id="org" className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      {/* Decorative vector shape background */}
      <div className="absolute top-12 left-12 w-64 h-64 rounded-full bg-blue-50/60 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-50 text-[#005BAC] text-xs font-semibold rounded-full mb-3">
            <Network className="h-3.5 w-3.5" />
            <span>ORGANIZATION CHART</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            시민주권위원회 조직도
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
            민선9기 정책 추진을 주도하는 실무 조직 체계입니다. <br />
            <strong>분과명을 클릭</strong>하시면 하단 멤버 조회 목록에서 해당 분과 위원을 즉시 필터링하여 확인하실 수 있습니다.
          </p>
        </div>

        {/* Toolbar Controls */}
        <div className="flex flex-wrap items-center justify-between bg-white border border-slate-200/60 p-3 rounded-2xl md:rounded-full shadow-sm max-w-4xl mx-auto mb-8 gap-3">
          <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 pl-3">
            <HelpCircle className="h-4 w-4 text-[#00A6D6]" />
            <span className="hidden md:inline">마우스 휠/드래그와 필터를 지원하는 인터랙티브 차트</span>
            <span className="md:hidden">손가락으로 밀며 자유롭게 확인하세요</span>
          </span>
          <div className="flex items-center space-x-2 w-full md:w-auto justify-end">
            <button
              id="zoom-out-btn"
              onClick={handleZoomOut}
              className="p-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100 border border-slate-200"
              title="축소"
            >
              <ZoomOut className="h-4 w-4" />
            </button>
            <span className="text-xs font-bold font-mono text-slate-700 min-w-[40px] text-center">
              {Math.round(zoomScale * 100)}%
            </span>
            <button
              id="zoom-in-btn"
              onClick={handleZoomIn}
              className="p-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100 border border-slate-200"
              title="확대"
            >
              <ZoomIn className="h-4 w-4" />
            </button>
            <button
              id="zoom-reset-btn"
              onClick={handleResetZoom}
              className="p-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100 border border-slate-200 flex items-center space-x-1"
              title="초기화"
            >
              <RotateCcw className="h-4 w-4" />
              <span className="text-xs hidden sm:inline">초기화</span>
            </button>
          </div>
        </div>

        {/* Outer Container (Scrollable) */}
        <div className="w-full overflow-x-auto overflow-y-hidden border border-slate-200/80 bg-white shadow-inner rounded-3xl p-6 md:p-12 mb-8 select-none">
          <div className="min-w-[850px] flex justify-center py-4 relative" ref={containerRef}>
            
            {/* Tree Chart Component Wrapper */}
            <div
              className="transition-transform duration-300 origin-center ease-out"
              style={{ transform: `scale(${zoomScale})` }}
            >
              <div className="flex flex-col items-center">
                
                {/* Level 1: 위원장 */}
                <motion.div
                  id="org-node-chair"
                  whileHover={{ scale: 1.03 }}
                  className="bg-slate-900 text-white border border-slate-800 rounded-2xl p-4 shadow-lg text-center min-w-[220px] relative z-10"
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl" />
                  <span className="text-[10px] font-bold text-[#00A6D6] uppercase tracking-wider">COMMITTEE CHAIR</span>
                  <h3 className="text-lg font-black mt-1">경성석 위원장</h3>
                  <p className="text-xs text-slate-300 font-light mt-0.5">시민주권위원회 종합 대표</p>
                </motion.div>

                {/* Vertical Connector Line */}
                <div className="w-0.5 h-8 bg-slate-300" />

                {/* Level 2: 부위원장 */}
                <motion.div
                  id="org-node-vice"
                  whileHover={{ scale: 1.03 }}
                  className="bg-slate-100 border-2 border-slate-200 rounded-2xl p-4 text-center min-w-[200px] relative z-10"
                >
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">VICE CHAIR</span>
                  <h3 className="text-base font-extrabold text-slate-800 mt-1">손영희 부위원장</h3>
                  <p className="text-xs text-slate-600 font-light mt-0.5">미래경제분과 겸임 및 시민 소통 조율</p>
                </motion.div>

                {/* Vertical Connector Line */}
                <div className="w-0.5 h-8 bg-slate-300" />

                {/* Level 3: 총괄간사 */}
                <motion.div
                  id="org-node-sec"
                  whileHover={{ scale: 1.03 }}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center min-w-[180px] relative z-10"
                >
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">SECRETARY GENERAL</span>
                  <h3 className="text-sm font-extrabold text-slate-700 mt-1">김종동 총괄간사</h3>
                  <p className="text-xs text-slate-500 font-light mt-0.5">인수위원회 기획 및 분과 실무 연계</p>
                </motion.div>

                {/* Multi-branched Connection SVG */}
                <div className="relative w-full h-12">
                  {/* SVG drawing connection lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                    {/* Main vertical stem coming down from 총괄간사 */}
                    <line x1="50%" y1="0" x2="50%" y2="24" stroke="#CBD5E1" strokeWidth="2" />
                    {/* Horizontal bar across fields */}
                    <line x1="12.5%" y1="24" x2="87.5%" y2="24" stroke="#CBD5E1" strokeWidth="2" />
                    {/* Vertical drops to each division */}
                    <line x1="12.5%" y1="24" x2="12.5%" y2="48" stroke="#CBD5E1" strokeWidth="2" />
                    <line x1="37.5%" y1="24" x2="37.5%" y2="48" stroke="#CBD5E1" strokeWidth="2" />
                    <line x1="62.5%" y1="24" x2="62.5%" y2="48" stroke="#CBD5E1" strokeWidth="2" />
                    <line x1="87.5%" y1="24" x2="87.5%" y2="48" stroke="#CBD5E1" strokeWidth="2" />
                  </svg>
                </div>

                {/* Level 4: 4대 핵심 분과 */}
                <div className="grid grid-cols-4 gap-4 w-full px-4 pt-1">
                  
                  {divisions.map((div) => (
                    <motion.button
                      id={`org-node-dept-${div.name.replace(' ', '-')}`}
                      key={div.name}
                      onClick={() => onSelectDepartment(div.name)}
                      whileHover={{ y: -4, scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className={`border-2 rounded-2xl p-4 text-center relative pointer shadow-sm transition-all duration-200 flex flex-col items-center justify-between ${div.color}`}
                    >
                      <UserCheck className="h-4 w-4 mb-2 opacity-70" />
                      <h4 className="text-sm font-bold tracking-tight">{div.name}</h4>
                      <p className="text-[11px] opacity-80 font-light mt-1 whitespace-normal break-keep leading-relaxed max-w-[160px] mx-auto">{div.label}</p>
                      
                      <div className="mt-4 flex items-center text-[10px] font-bold text-blue-600 gap-1 opacity-0 hover:opacity-100 sm:opacity-100 transition-opacity">
                        <span>위원 조회</span>
                        <ArrowRight className="h-2.5 w-2.5" />
                      </div>
                    </motion.button>
                  ))}

                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Tip text */}
        <p className="text-center text-xs text-slate-400 font-light">
          💡 모바일 기기에서는 차트 부분을 좌우로 스크롤하여 모든 분과 조직 체계를 전체 확인하실 수 있습니다.
        </p>

      </div>
    </section>
  );
}
