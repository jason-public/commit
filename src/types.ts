export interface Member {
  id: string;
  name: string;
  position: string; // e.g., 위원장, 부위원장, 총괄간사, 위원
  department: string; // e.g., 미래경제 분과, 기획자치 분과, 도시교통환경 분과, 복지문화교육 분과, 특별위원회, 자문위원회
  committeeType: '인수위원단' | '특별위원단' | '자문위원단';
  phone: string;
  photoUrl: string;
  career: string[];
}

export interface OrgNode {
  name: string;
  role: string;
  children?: OrgNode[];
}
