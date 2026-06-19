import { HelpCircle, Landmark, ShieldCheck, HeartHandshake, Zap, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export default function IntroductionSection() {
  const visionList = [
    {
      icon: ShieldCheck,
      title: '시민 주권과 열린 거버넌스',
      desc: '시정의 모든 결정 과정에 시민이 참여하고, 남양주시민 한 사람 한 사람의 주권을 존중하는 정책을 세웁니다.',
      color: 'text-blue-600 bg-blue-50',
    },
    {
      icon: HeartHandshake,
      title: '다산의 실무 중심 설계',
      desc: '공허한 이론이나 이념이 아닌, 실제 일상생활 속에서 혜택을 체감할 수 있는 실현 가능한 행정 매뉴얼을 다듬습니다.',
      color: 'text-cyan-600 bg-cyan-50',
    },
    {
      icon: Zap,
      title: '미래지향적 복합 균형 개발',
      desc: '왕숙신도시 건설, GTX 광역급행노선 조기 완료 등 남양주의 미래 교통망과 친환경 도시 공간 혁신을 조율합니다.',
      color: 'text-amber-600 bg-amber-50',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Accent blur */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-50/70 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-50/70 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - Removed per user request */}



        {/* Vision details with Side Graphic Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <span className="w-1.5 h-6 bg-[#005BAC] rounded-full inline-block" />
              <span>핵심 시정 설계 방향</span>
            </h3>
            
            <div className="space-y-4">
              {visionList.map((vision, i) => {
                const Icon = vision.icon;
                return (
                  <motion.div
                    id={`vision-item-${i}`}
                    key={vision.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex space-x-4 p-5 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-200"
                  >
                    <div className={`p-3 rounded-xl shrink-0 h-11 w-11 flex items-center justify-center ${vision.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-base">{vision.title}</h4>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed font-light">{vision.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Info Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden shadow-xl"
            >
              {/* background highlights */}
              <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-blue-500/10 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-cyan-500/10 blur-2xl" />
              
              <div className="relative space-y-6">
                <div className="flex items-center space-x-2 text-[#00A6D6]">
                  <Calendar className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">주요 운영 일정 안내</span>
                </div>
                
                <h3 className="text-xl font-extrabold tracking-tight">
                  체계적이고 신속한 정책 확정
                </h3>
                
                <div className="space-y-4 text-xs font-light text-slate-300">
                  <div className="flex justify-between items-start border-b border-white/5 pb-3">
                    <div>
                      <p className="font-semibold text-white text-sm">위원회 출범식 및 상견례</p>
                      <p className="mt-0.5 text-slate-400">민선9기 비전 선포 및 공통 안건 조율</p>
                    </div>
                    <span className="bg-[#005BAC] text-[10px] text-white px-2 py-0.5 rounded font-bold uppercase">완료</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-white/5 pb-3">
                    <div>
                      <p className="font-semibold text-white text-sm">분과별 현장 실사 및 간담회</p>
                      <p className="mt-0.5 text-slate-400">시민, 상인, 환경단체와 현장 토론</p>
                    </div>
                    <span className="bg-[#005BAC] text-[10px] text-white px-2 py-0.5 rounded font-bold uppercase">완료</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-white/5 pb-3">
                    <div>
                      <p className="font-semibold text-white text-sm">인수 핵심 과제 중간 보고회</p>
                      <p className="mt-0.5 text-slate-400">10대 핵심 현안 및 대책 최종 가안 조율</p>
                    </div>
                    <span className="bg-yellow-500 text-[10px] text-slate-900 px-2 py-0.5 rounded font-bold uppercase">진행중</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-white text-sm">백서 발간 및 종합 정책 제안식</p>
                      <p className="mt-0.5 text-slate-400">백서 인쇄 및 남양주 시민께 최종안 공개</p>
                    </div>
                    <span className="bg-emerald-500 text-[10px] text-white px-2 py-0.5 rounded font-bold uppercase">예정</span>
                  </div>
                </div>

                <div className="pt-4 bg-white/5 p-4 rounded-2xl border border-white/10 text-[11px] leading-relaxed text-slate-300 font-light">
                  💡 <strong>시민 소통 안내 :</strong> 위원회 활동 내용 및 건의사항 수렴에 대한 자세한 내용은 각 분과 위원의 연락처를 통해 상담하시거나, 공식 남양주시청 프레스룸을 통해 상시 공지됩니다.
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
