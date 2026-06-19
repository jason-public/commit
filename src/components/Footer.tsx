import { Landmark, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-[#0F172A] text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Logo Brand Block */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <div className="p-2 rounded-xl bg-[#005BAC] text-white">
                <Landmark className="h-5 w-5" />
              </div>
              <div>
                <span className="block font-black text-base tracking-tight">
                  남양주시 민선9기
                </span>
                <span className="block text-xs text-slate-400 font-semibold tracking-wider">
                  시민주권위원회
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-sm">
              남양주시 시민주권위원회는 시민들과 호흡하며 투명하고 지속 수립 가능한 참좋은 자치 발전에 솔선수범합니다.
            </p>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              OFFICE INFO & CONTACT
            </h4>
            <div className="space-y-2 text-xs font-light text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#00A6D6] shrink-0 mt-0.5" />
                <span>주소 : 경기도 남양주시 경춘로 1037 (금곡동, 남양주시청 제1청사)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#00A6D6] shrink-0" />
                <span>대표전화 : <a href="tel:031-590-2114" className="hover:text-white underline underline-offset-2">031-590-2114</a></span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              LEGAL & PORTALS
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-light">
              <a
                id="footer-privacy-link"
                href="#privacy"
                onClick={(e) => {
                  e.preventDefault();
                  alert('본 사이트는 시립 시민주권위원회의 공식 데이터 가이드 채널로서 수집하는 개인정보를 일체 보관하지 않습니다.');
                }}
                className="hover:text-white transition-colors underline underline-offset-4 decoration-slate-700 hover:decoration-white font-semibold text-slate-300"
              >
                개인정보처리방침
              </a>
              <a
                id="footer-city-hall-link"
                href="https://www.nyj.go.kr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center space-x-1"
              >
                <span>남양주시청 대표홈페이지</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 font-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Namyangju City Citizen Sovereignty Committee. All rights reserved.</p>
          <div className="flex items-center space-x-4 text-[11px]">
            <span>민선9기 실무 인수단 공식 종합 백서 공지용 포털</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
