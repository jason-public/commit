import { useState, useMemo, useEffect, useRef } from 'react';
import { Search, Phone, User, RefreshCw, X, SlidersHorizontal, Check } from 'lucide-react';
import { Member } from '../types';
import { MEMBERS_DATA } from '../data/members';
import { motion, AnimatePresence } from 'motion/react';

interface MemberSectionProps {
  onOpenDetail: (member: Member) => void;
  selectedDeptFilter: string;
  onClearDeptFilter: () => void;
  selectedCommitteeTypeForced?: string;
}

export default function MemberSection({
  onOpenDetail,
  selectedDeptFilter,
  onClearDeptFilter,
  selectedCommitteeTypeForced,
}: MemberSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCommitteeType, setSelectedCommitteeType] = useState<string>('인수위원단');
  const [selectedDept, setSelectedDept] = useState<string>('전체');
  const resultsRef = useRef<HTMLDivElement>(null);

  // If a forced department filter comes from the Org Chart click, apply it!
  useEffect(() => {
    if (selectedDeptFilter) {
      // Set committee type to 인수위원단 because divisions belong there
      setSelectedCommitteeType('인수위원단');
      
      // Match the abbreviated department selection
      if (selectedDeptFilter.includes('미래경제')) setSelectedDept('미래경제');
      else if (selectedDeptFilter.includes('기획자치')) setSelectedDept('기획자치');
      else if (selectedDeptFilter.includes('도시교통환경')) setSelectedDept('도시교통환경');
      else if (selectedDeptFilter.includes('복지문화교육')) setSelectedDept('복지문화교육');
      else setSelectedDept('전체');
    }
  }, [selectedDeptFilter]);

  // If menu button forces a category filter
  useEffect(() => {
    if (selectedCommitteeTypeForced) {
      setSelectedCommitteeType(selectedCommitteeTypeForced);
      setSelectedDept('전체'); // reset division filter when switching committee types
    }
  }, [selectedCommitteeTypeForced]);

  const committeeTypes = ['인수위원단', '특별위원단', '자문위원단'];
  const departments = ['전체', '미래경제', '기획자치', '도시교통환경', '복지문화교육'];

  const filteredMembers = useMemo(() => {
    return MEMBERS_DATA.filter((member) => {
      // 1. Filter by Committee Type
      if (member.committeeType !== selectedCommitteeType) return false;

      // 2. Filter by Department Tab (only applicable for 인수위원단, since others have specialized depts like 특별위원회)
      if (selectedCommitteeType === '인수위원단' && selectedDept !== '전체') {
        if (!member.department.includes(selectedDept)) return false;
      }

      // 3. Filter by Search Query (Name or Department or Position)
      const q = searchQuery.toLowerCase().trim();
      if (q) {
        const matchName = member.name.toLowerCase().includes(q);
        const matchDept = member.department.toLowerCase().includes(q);
        const matchPos = member.position.toLowerCase().includes(q);
        return matchName || matchDept || matchPos;
      }

      return true;
    });
  }, [searchQuery, selectedCommitteeType, selectedDept]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCommitteeType('인수위원단');
    setSelectedDept('전체');
    onClearDeptFilter();
  };

  return (
    <section id="members" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              위원 소개 및 실시간 조회
            </h2>
            <p className="mt-2 text-sm text-slate-500 font-light">
              각 분과 및 기획단의 위원들의 연락처와 주요 실무 경력을 확인하실 수 있습니다.
            </p>
          </div>

          <button
            id="reset-filter-btn-top"
            onClick={handleResetFilters}
            className="self-start md:self-end flex items-center space-x-1 text-xs text-slate-500 hover:text-[#005BAC] border border-slate-200 hover:border-blue-100 bg-slate-50 hover:bg-blue-50/30 px-3 py-2 rounded-xl transition-all"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>검색 초기화</span>
          </button>
        </div>

        {/* Filter Toolbar Area */}
        <div className="bg-white border border-slate-200 rounded-[28px] p-6 mb-8 shadow-sm relative overflow-hidden">
          
          {/* Main Selectors (Committee Types) */}
          <div className="flex flex-col items-center justify-center w-full">
            {/* Search Input Box */}
            <div className="w-full max-w-md space-y-2">
              <label className="hidden">
                위원 통합 실시간 검색
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  id="member-search-input"
                  type="text"
                  placeholder="이름, 직위 또는 분과명을 입력해 주세요"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white text-slate-800 placeholder-slate-400 text-sm pl-11 pr-10 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#005BAC] focus:border-transparent transition-all shadow-inner"
                />
                {searchQuery && (
                  <button
                    id="clear-search-query"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Sub-Selector for 인수위원단 Divisions */}
          {selectedCommitteeType === '인수위원단' && (
            <motion.div
              id="sub-dept-selector"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-6 pt-6 border-t border-slate-200/70 space-y-2"
            >
              <span className="hidden">
                <SlidersHorizontal className="h-3.5 w-3.5 text-[#00A6D6]" />
                <span>2. 세부 분과 필터링</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {departments.map((dept) => {
                  const isSel = selectedDept === dept;
                  return (
                    <button
                      id={`dept-sub-tab-${dept}`}
                      key={dept}
                      onClick={() => {
                        setSelectedDept(dept);
                        onClearDeptFilter();
                        setTimeout(() => {
                          resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 50);
                      }}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-150 flex items-center gap-1 border ${
                        isSel
                          ? 'bg-[#00A6D6]/10 text-[#005BAC] border-[#00A6D6] font-bold'
                          : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-100/50'
                      }`}
                    >
                      {isSel && <Check className="h-3 w-3" />}
                      <span>{dept === '전체' ? '전체분과' : `${dept} 분과`}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* External highlight info badge if selectedDeptFilter is in place */}
          {selectedDeptFilter && (
            <div className="mt-4 p-3 bg-blue-50 border border-blue-100/50 text-xs text-[#005BAC] rounded-xl flex items-center justify-between">
              <span>
                👉 조직도에서 <strong>{selectedDeptFilter}</strong>가 선택되어 추천 목록을 집중적으로 보여드리고 있습니다.
              </span>
              <button
                id="clear-org-highlight"
                onClick={handleResetFilters}
                className="font-bold underline text-[#005BAC] hover:text-[#005BAC]/80 pl-2 shrink-0"
              >
                추천 초기화
              </button>
            </div>
          )}
        </div>

        {/* Scroll Target */}
        <div ref={resultsRef} className="scroll-mt-28" />

        {/* Dynamic Count Banner */}
        <div className="mb-6 flex items-center justify-between text-slate-500 text-xs px-2 font-medium">
          <span>
            {selectedCommitteeType} &gt; {selectedDept === '전체' ? '전체' : `${selectedDept} 분과`} 조회 결과
          </span>
          <span>
            총 <strong className="text-[#005BAC] font-black">{filteredMembers.length}명</strong>의 위원 검색됨
          </span>
        </div>

        {/* Results Grid */}
        <AnimatePresence mode="popLayout">
          {filteredMembers.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {filteredMembers.map((member, index) => {
                // If photo URL doesn't load or fallback, create dynamic initial styling
                const initials = member.name.substring(1);
                
                return (
                  <motion.div
                    id={`member-card-${member.id}`}
                    key={member.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
                    className="group bg-white rounded-[20px] border border-slate-200/60 overflow-hidden shadow-sm card-hover flex flex-col justify-between"
                  >
                    
                    {/* Top Accent Gradient Header */}
                    <div className="h-2 w-full bg-gradient-to-r from-[#005BAC] to-[#00A6D6]" />

                    {/* Member Body Information */}
                    <div className="p-6 flex-grow flex flex-col items-center text-center">
                      
                      {/* Avatar Profile Box */}
                      <div className="relative w-24 h-24 mb-4 select-none">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#005BAC]/10 to-[#00A6D6]/10 animate-pulse group-hover:scale-105 transition-transform" />
                        <img
                          src={member.photoUrl}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full border-2 border-white shadow-md relative z-10"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            // Fallback if image fails or reaches cross-origin error
                            e.currentTarget.style.display = 'none';
                            const nextNode = e.currentTarget.nextElementSibling;
                            if (nextNode) {
                              (nextNode as HTMLElement).style.display = 'flex';
                            }
                          }}
                        />
                        {/* Beautiful Fallback Circle with First Name Initial */}
                        <div
                          className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#005BAC] to-[#00A6D6] text-white flex items-center justify-center font-bold text-2xl border-2 border-white shadow-md z-1"
                          style={{ display: 'none' }}
                        >
                          {member.name[0]}
                        </div>
                      </div>

                      {/* Info Text */}
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 block">
                        {member.department}
                      </span>
                      
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-[#005BAC] transition-colors">
                        {member.name}
                      </h3>
                      
                      <p className="text-xs font-semibold text-[#00A6D6] mt-0.5">
                        {member.position}
                      </p>

                      {/* Truncated Career or summary preview */}
                      <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-light w-full line-clamp-2 h-9 text-left">
                        • {member.career[0]}
                      </div>

                      {/* Safe administrative Phone badge */}
                      <div className="mt-3 text-xs bg-slate-50 text-slate-600 font-mono py-1 px-2.5 rounded-lg border border-slate-100/70 inline-flex items-center gap-1">
                        <Phone className="h-3 w-3 text-slate-400" />
                        <span>{member.phone}</span>
                      </div>

                    </div>

                    {/* Footer Buttons */}
                    <div className="p-4 bg-slate-50/60 border-t border-slate-100/80 grid grid-cols-2 gap-2">
                      <a
                        id={`btn-call-${member.id}`}
                        href={`tel:${member.phone}`}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white text-slate-700 hover:text-white hover:bg-[#005BAC] border border-slate-200 font-bold text-xs transition-all tracking-tight"
                        title={`${member.name} 위원전화연결`}
                      >
                        <Phone className="h-3.5 w-3.5 text-slate-400 group-hover:text-white" />
                        <span>전화걸기</span>
                      </a>
                      
                      <button
                        id={`btn-detail-${member.id}`}
                        onClick={() => onOpenDetail(member)}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#005BAC] hover:bg-[#005BAC]/90 text-white font-bold text-xs transition-all shadow-sm tracking-tight"
                      >
                        <User className="h-3.5 w-3.5" />
                        <span>상세보기</span>
                      </button>
                    </div>

                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            // Empty Results Banner
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-200"
            >
              <div className="max-w-md mx-auto flex flex-col items-center">
                <Search className="h-10 w-10 text-slate-300 mb-3" />
                <h4 className="text-base font-bold text-slate-800">검색 또는 정돈 결과가 없습니다</h4>
                <p className="mt-1 text-xs text-slate-500 font-light leading-relaxed">
                  입력해 주신 키워드와 일치하는 위원 정보가 없습니다. 이름이나 분과명 철자를 다시 확인하고 검색해 주세요.
                </p>
                <button
                  id="empty-reset-filter-btn"
                  onClick={handleResetFilters}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-[#005BAC] hover:bg-[#005BAC]/90 rounded-xl shadow transition-all"
                >
                  필터 전체 초기화
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
