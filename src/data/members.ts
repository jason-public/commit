import { Member } from '../types';

export const MEMBERS_DATA: Member[] = [
  // 위원회 핵심 임원 (인수위원단)
  {
    id: 'm1',
    name: '경성석',
    position: '위원장',
    department: '공통',
    committeeType: '인수위원단',
    phone: '010-4767-3362',
    photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256',
    career: [
      '1974년 4월생',
      '남성고등학교 졸업',
      '서울대학교 졸업',
      '최현덕 후보 총괄선대본부장',
      '(전)국회의원 비서관, 보좌관(17, 18, 19, 20, 21대)',
      '(전)더불어민주당 해양수산특별위원회 부위원장',
      '(전)광주광역시 서구청 인수위원'
    ]
  },
  {
    id: 'm2',
    name: '손영희',
    position: '부위원장 (미래경제분과)',
    department: '미래경제분과',
    committeeType: '인수위원단',
    phone: '010-4757-5277',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256&h=256',
    career: [
      '서강대 최고경영자과정 수료',
      '(현)한국여성경제인협회 경기동부지회 회장',
      '(현)에벤에셀기업 각자대표(주)',
      '(현)아이캔 대표',
      '(현)남양주시 양성평등위원회 위원',
      '(현)경기동부상공회의소 부회장'
    ]
  },
  {
    id: 'm3',
    name: '김종동',
    position: '인수위원 총괄간사',
    department: '공통',
    committeeType: '인수위원단',
    phone: '010-8262-2654',
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256&h=256',
    career: [
      '(전)수원도시재단 센터장(도시재생, 주거복지)',
      '(전)서울시청 협치지원관',
      '(전)LH 연구원'
    ]
  },

  // 기획자치분과 (기획, 예산, 인사, 자치행정, 시민주권, 공약관리 등)
  {
    id: 'm4',
    name: '곽소녕',
    position: '위원',
    department: '기획자치분과',
    committeeType: '인수위원단',
    phone: '010-3101-5065',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256&h=256',
    career: [
      '(현)출판·인쇄 디자인 전문 아이두스튜디오 대표',
      '(전)경희대학교 예술디자인대학 시각디자인LAP 연구원'
    ]
  },
  {
    id: 'm5',
    name: '김경미',
    position: '위원',
    department: '기획자치분과',
    committeeType: '인수위원단',
    phone: '010-3883-2650',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256&h=256',
    career: [
      '(현)전략컨설팅그룹 ㈜새도우캐비닛 대표',
      '(전)대통령비서실 인사비서관실 행정관',
      '(전)행정안전부 책임운영기관 민간운영위원'
    ]
  },
  {
    id: 'm6',
    name: '권용식',
    position: '위원',
    department: '기획자치분과',
    committeeType: '인수위원단',
    phone: '010-6640-4552',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256&h=256',
    career: [
      '(현)민예총 남양주지부 대외협력국장',
      '(전)경기도 민관협치위원회 위원',
      '(전)남양주시민단체정책연대 실무 담당'
    ]
  },

  // 미래경제분과 (경제, 민생, 일자리, 산업, 노동, 기업지원, 농업 등)
  {
    id: 'm7',
    name: '김진호',
    position: '위원',
    department: '미래경제분과',
    committeeType: '인수위원단',
    phone: '010-8965-8735',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=256&h=256',
    career: [
      '(현)아쿠아마인 회장 & CTO',
      '(전)삼성전자 경영혁신, 인사관리 등 담당',
      '(전)경기도청 투자통상자문관'
    ]
  },
  {
    id: 'm8',
    name: '정재철',
    position: '위원',
    department: '미래경제분과',
    committeeType: '인수위원단',
    phone: '010-9915-1896',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256&h=256',
    career: [
      '(전)핀테크 스타트업 앳원즈 대표',
      '(전)NICE평가정보',
      '(전)삼성전자'
    ]
  },
  {
    id: 'm9',
    name: '구준서',
    position: '위원',
    department: '미래경제분과',
    committeeType: '인수위원단',
    phone: '010-6321-9113',
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=256&h=256',
    career: [
      '(현)제이에스디엔디(주) 대표이사',
      '(전)남양주점프벼룩시장 사무처장',
      '(전)남양주뉴스 대표이사'
    ]
  },

  // 도시교통환경분과 (도시계획, 주거, 광역교통, 철도, 환경, 시민안전, 탄소중립, 공원녹지 등)
  {
    id: 'm10',
    name: '이상우',
    position: '위원',
    department: '도시교통환경분과',
    committeeType: '인수위원단',
    phone: '010-3522-6192',
    photoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=256&h=256',
    career: [
      '(현)위스테이별내 상임이사',
      '경기도 공동주택 관리지원자문단 자문위원',
      '(사)한국사회주택협회 이사'
    ]
  },
  {
    id: 'm11',
    name: '최현범',
    position: '위원',
    department: '도시교통환경분과',
    committeeType: '인수위원단',
    phone: '010-4728-1101',
    photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=256&h=256',
    career: [
      '(현)도시정의연구원 대표이사',
      '(현)성남시 도시계획위원',
      '(전)남양주시 도시계획위원'
    ]
  },

  // 복지문화교육분과 (복지, 보건, 청년, 여성, 문화, 예술, 관광, 체육 등)
  {
    id: 'm12',
    name: '이경숙',
    position: '위원',
    department: '복지문화교육분과',
    committeeType: '인수위원단',
    phone: '010-2748-1860',
    photoUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=256&h=256',
    career: [
      '(현)남양주시의원 복지환경위원회 위원장',
      '라선거구(오남읍) 의원'
    ]
  },
  {
    id: 'm13',
    name: '남미우',
    position: '위원',
    department: '복지문화교육분과',
    committeeType: '인수위원단',
    phone: '010-9176-3870',
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=256&h=256',
    career: [
      '(현)남양주시배드민턴협회 스포츠공정위원장',
      '가온 대표'
    ]
  },
  {
    id: 'm14',
    name: '이선희',
    position: '위원',
    department: '복지문화교육분과',
    committeeType: '인수위원단',
    phone: '010-6877-0312',
    photoUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=256&h=256',
    career: [
      '(현)이우 어린이집 원장',
      '(현)남양주시 육아종합지원센터 운영위원',
      '(전)남양주시어이지집총연합회 회장'
    ]
  },

  // 특별위원단 (재정혁신특위, 공동주택 관리비 특위)
  {
    id: 's1',
    name: '재정혁신 특별위원회',
    position: '주요 상설기구',
    department: '재정혁신특위',
    committeeType: '특별위원단',
    phone: '031-590-2114',
    photoUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=256&h=256',
    career: [
      '지방재정 건전성 및 효율성 확보 방안 수립',
      '민선9기 핵심 공약 실현을 위한 세입·세출 구조 조정 사전 검토',
      '재정 혁신 로드맵 마련 및 시민 주권 기반의 투명한 예산 실천 지원'
    ]
  },
  {
    id: 's2',
    name: '공동주택 관리비 특별위원회',
    position: '주요 상설기구',
    department: '공동주택 관리비 특위',
    committeeType: '특별위원단',
    phone: '031-590-2114',
    photoUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=256&h=256',
    career: [
      '관내 공동주택 관리 실태 분석 및 실질적 대안 모색',
      '어려운 민생 생활 안정을 위한 아파트 및 공동주택 관리비 분석 및 합리화 유도',
      '투명하고 전문적인 관리제도 정비 및 가이드 수립 지원'
    ]
  },

  // 자문위원단
  {
    id: 'a1',
    name: '자문위원총괄간사',
    position: '자문총괄',
    department: '자문위원단',
    committeeType: '자문위원단',
    phone: '031-590-2114',
    photoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=256&h=256',
    career: [
      '학계, 기술적, 정무적 분야별 자문단 구성 총괄 연계',
      '민선9기 시민주권 정책 수립에 필요한 외부 전문적 통찰 제공 조율',
      '시민 체감형 실무 위주 실천 과제 컨설팅 관리'
    ]
  }
];

export const PRINCIPLES = [
  { name: '시민주권', desc: '모든 정책과 예산의 최일선 기준은 남양주 시민입니다.' },
  { name: '현장중심', desc: '해답은 언제나 현장에 있습니다. 발로 뛰는 소통을 실천합니다.' },
  { name: '전문성', desc: '정교하고 실질적인 연구와 검토를 통한 실무적 해법을 모색합니다.' },
  { name: '실용성', desc: '이념을 넘어 실제 시민 생활의 편의를 더하는 가치를 우선시합니다.' },
  { name: '책임성', desc: '약속을 이행하고 실행 가능한 예산 확보 대책까지 함께 설계합니다.' }
];

// Org Tree Node matching the exact PDF Page 1 diagram
export const ORG_CHART_DATA = {
  name: '시민주권위원회 위원장',
  role: '경성석 위원장',
  children: [
    {
      name: '부위원장',
      role: '손영희 부위원장',
      children: [
        {
          name: '인수위원총괄간사',
          role: '김종동 총괄간사',
          children: [
            {
              name: '기획자치분과',
              role: '곽소녕, 김경미, 권용식 위원',
            },
            {
              name: '미래경제분과',
              role: '손영희(부위원장), 김진호, 정재철, 구준서 위원',
            },
            {
              name: '도시교통환경분과',
              role: '이상우, 최현범 위원',
            },
            {
              name: '복지문화교육분과',
              role: '이경숙, 남미우, 이선희 위원',
            }
          ]
        }
      ]
    }
  ]
};
