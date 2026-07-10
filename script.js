// ==========================================================
// profileData: 이력서 원본 자료를 그대로 옮겨온 단일 데이터 소스
// (다른 사람의 프로필로 재사용하려면 이 객체만 교체하면 됨)
// ==========================================================
const profileData = {
  name: "김채은",
  nameEn: "Chaeeun Kim",
  role: "생태공간 데이터 분석 실무자",
  roleEn: "Ecological GIS Specialist",
  department: "환경생태부 생태복원팀",
  position: "사원",
  careerLength: "9개월",
  email: "kim_cheen@naver.com",
  tagline: "QGIS 기반의 정밀한 공간 분석으로 데이터 기반 환경 계획을 수립합니다.",
  taglineEn: "Grounded in landscape architecture, advancing through GIS-driven ecological planning.",
  motto: "사람과 자연을 하나로 — Connecting People and Nature",
  keywords: ["QGIS 공간분석", "비오톱 지도화", "보호구역 관리계획", "데이터 시각화", "협업 커뮤니케이션"],

  oneLineIntro:
    "나는 생태 및 조경계획 분야에서 QGIS 기반의 정밀한 공간 분석 능력을 바탕으로 데이터 기반의 정확한 환경 계획 수립 및 공간 정보 구축을 수행하는 사람입니다.",

  aiSummary: [
    "김채은님은 건국대학교 산림조경학과에서 쌓은 전공 지식과 조경기사·자연생태복원기사 자격을 바탕으로, QGIS를 활용한 공간 데이터 구축과 비오톱 분류 등 생태공간 분석 전문성을 보유한 실무자입니다.",
    "도시생태현황지도 작성부터 보호지역 관리계획 수립, 법정보호종 분포 분석까지 데이터 기반 환경 계획 업무 전반을 폭넓게 경험했습니다.",
    "필리핀 유학으로 다진 영어 커뮤니케이션 능력과 서비스센터 CS 경력에서 길러진 문제해결력을 더해, 발주처·전문가와의 협업과 대외 소통까지 안정적으로 수행합니다."
  ],

  education: [
    { period: "2020.03 – 2025.02", school: "건국대학교(서울)", detail: "산림조경학과 졸업" },
    { period: "2018.07 – 2020.01", school: "부산외국어고등학교", detail: "영·독일어과" },
    { period: "2014.03 – 2018.05", school: "필리핀 국제학교", detail: "해외연수 · 4년간 영어 몰입 교육" }
  ],

  certifications: [
    { date: "2024.12", name: "조경기사", org: "한국산업인력공단" },
    { date: "2023.11", name: "자연생태복원기사", org: "한국산업인력공단" },
    { date: "2025.08", name: "2종보통운전면허(오토)", org: "경찰청" }
  ],

  mainTasks: [
    {
      title: "도시생태현황지도(비오톱지도) 작성 및 검증",
      desc: "QGIS로 토지이용현황, 토지피복도, 식생도 등 공간 데이터를 구축하고 비오톱 유형을 분류·평가하며 속성 테이블 관리와 라벨 규칙 설정으로 데이터 정확도를 높입니다."
    },
    {
      title: "보호지역 관리계획 수립 및 보고서 작성",
      desc: "습지보호지역 등 생태계 보호구역의 중장기 관리계획을 수립하고, 관련 법규와 가이드라인에 맞춰 현황 분석·문제점 도출·보고서 작성을 담당합니다."
    },
    {
      title: "전문가 자문단 구성 및 대관 업무",
      desc: "학계 전문가, 박사급 연구원과 소통하며 자문위원단을 구성하고, 착수보고회 등 지자체 행사를 기획·준비하며 발주처 대응을 수행합니다."
    }
  ],

  projects: [
    {
      name: "제2차 제천시 도시생태현황지도 작성 용역",
      role: "QGIS 공간 데이터 구축, 비오톱 분류 및 속성 정보 최적화, 착수보고회 기획·운영",
      result: "복잡한 식생·토지이용 데이터를 QGIS 표현식으로 체계적으로 시각화하고 라벨링 오류를 최소화. 시청 착수보고회를 성공적으로 준비해 프로젝트의 안정적인 시작에 기여."
    },
    {
      name: "옹진 장봉도갯벌 습지보호지역 관리계획",
      role: "갯벌 습지보호지역 현황 조사 데이터 분석 및 관리계획 작성",
      result: "방대한 생태·환경 데이터를 정리해 보호지역 지정 목적에 부합하는 실효성 있는 관리 방안과 추진 과제를 도출, 보고서 완성도를 높임."
    },
    {
      name: "법정보호종(멸종위기 야생생물) 출현 분포 분석 및 보고",
      role: "수달, 삵 등 법정보호종 조사 데이터 기반 등급 분류 및 공간 매핑",
      result: "최신 야생생물 보호 지침에 맞춰 오류 없이 종을 분류하고 정확한 분포 현황을 도출해 환경영향평가 및 생태 계획의 신뢰성을 확보."
    }
  ],

  strengths: [
    {
      title: "독보적인 QGIS 활용 및 데이터 시각화 역량",
      desc: "MMGeokr 등 다양한 플러그인과 XYZ Tiles를 능숙히 다루며, 고급 표현식과 함수로 대량의 공간 속성 데이터를 빠르게 가공해 직관적인 지도로 시각화합니다."
    },
    {
      title: "Adobe Illustrator 기반의 고품질 성과물 제작 능력",
      desc: "도면·수치지도 등 벡터 데이터로 가독성 높은 아이콘, 스와치, 인포그래픽을 제작하며, 공공 간행물 지침에 맞춘 꼼꼼한 편집 디자인이 가능합니다."
    },
    {
      title: "주도적인 업무 추진력과 매끄러운 협업 커뮤니케이션",
      desc: "사내 멘토의 피드백을 적극 수용해 업무에 반영하고, 외부 박사급 전문가와도 예의 바르고 명확한 소통으로 신뢰 관계를 구축합니다. 필리핀 유학으로 다진 영어 구사력과 2년 가까운 CS 상담 경력에서 길러진 문제해결력이 바탕이 되었습니다."
    }
  ],

  skills: [
    "QGIS 공간분석", "비오톱 지도화", "생태공간 데이터 구축", "보호구역 관리계획 수립",
    "Adobe Illustrator 편집디자인", "법정보호종 분포분석", "전문가 자문단 운영", "보고서 작성"
  ],

  futureGoals: [
    "대규모 신도시·국책 사업의 조경·생태 계획 수립 (LH, SH, 한국도로공사 등)",
    "스마트 그린시티 및 생태축 복원을 위한 고도화된 공간 분석 프로젝트",
    "발주처 제안부터 예산·자문 조율, 납품까지 총괄하는 PM으로의 성장"
  ],

  collaborationAreas: [
    "QGIS 기반 생태공간 데이터 구축 및 지도화",
    "보호구역 관리계획 수립 및 보고서 작성",
    "공공 간행물 편집 디자인(Adobe Illustrator)",
    "전문가 자문단 운영 및 대관(착수보고회 등) 업무"
  ]
};

// ==========================================================
// 렌더링
// ==========================================================
function renderProfile() {
  document.getElementById("hero-keywords").innerHTML = profileData.keywords
    .map(k => `<span>${k}</span>`).join("");

  document.getElementById("summary-text").innerHTML = profileData.aiSummary
    .map(s => `<p>${s}</p>`).join("");

  document.getElementById("feature-motto").textContent = `“ ${profileData.motto} ”`;

  document.getElementById("education-list").innerHTML = profileData.education
    .map(e => `
      <li>
        <span class="credential-period">${e.period}</span>
        <span class="credential-main">${e.school}</span>
        <span class="credential-sub">${e.detail}</span>
      </li>
    `).join("");

  document.getElementById("certification-list").innerHTML = profileData.certifications
    .map(c => `
      <li>
        <span class="credential-period">${c.date}</span>
        <span class="credential-main">${c.name}</span>
        <span class="credential-sub">${c.org}</span>
      </li>
    `).join("");

  document.getElementById("project-count").textContent = `전체 ${profileData.projects.length}건`;

  document.getElementById("project-cards").innerHTML = profileData.projects
    .map((p, i) => `
      <div class="project-card">
        <span class="project-index">${String(i + 1).padStart(2, "0")}</span>
        <h3>${p.name}</h3>
        <p class="project-role">${p.role}</p>
        <p class="project-desc">${p.result}</p>
      </div>
    `).join("");

  document.getElementById("skill-tags").innerHTML = profileData.skills
    .map(s => `<span>${s}</span>`).join("");

  document.getElementById("collab-list").innerHTML = profileData.collaborationAreas
    .map(c => `<li>${c}</li>`).join("");

  document.getElementById("contact-email").textContent = profileData.email;
  document.getElementById("contact-mail-btn").href = `mailto:${profileData.email}`;
}

// ==========================================================
// 챗봇 (mock 응답 — profileData 기반 규칙/키워드 매칭)
// ==========================================================
const quickQuestions = [
  "이 사람의 핵심 강점은 무엇인가요?",
  "어떤 프로젝트 경험이 있나요?",
  "어떤 업무를 맡기면 좋을까요?",
  "고객에게 소개한다면 어떻게 설명할 수 있나요?"
];

function renderQuickQuestions() {
  const wrap = document.getElementById("quick-questions");
  wrap.innerHTML = quickQuestions
    .map(q => `<button type="button" data-q="${q}">${q}</button>`).join("");
  wrap.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => handleQuestion(btn.dataset.q));
  });
}

function answerStrengths() {
  const list = profileData.strengths
    .map((s, i) => `${i + 1}. ${s.title}\n   ${s.desc}`).join("\n\n");
  return `${profileData.name}님의 핵심 강점은 다음과 같습니다.\n\n${list}`;
}

function answerProjects() {
  const list = profileData.projects
    .map((p, i) => `${i + 1}. ${p.name}\n   역할: ${p.role}\n   성과: ${p.result}`).join("\n\n");
  return `주요 프로젝트 경험입니다.\n\n${list}`;
}

function answerAssignment() {
  const list = profileData.collaborationAreas.map((c, i) => `${i + 1}. ${c}`).join("\n");
  return `다음과 같은 업무를 맡기시면 강점을 잘 발휘할 수 있습니다.\n\n${list}\n\n특히 QGIS 기반 공간 데이터 구축과 보고서 작성 업무에서 가장 안정적인 결과물을 기대할 수 있습니다.`;
}

function answerPitch() {
  return `${profileData.oneLineIntro}\n\n${profileData.department}에서 ${profileData.careerLength} 동안 도시생태현황지도 작성, 보호구역 관리계획 수립 등 데이터 기반 환경 계획 업무를 수행해왔으며, 향후에는 대규모 국책 사업의 생태 계획 수립과 PM 역할까지 성장 범위를 넓혀가고자 합니다.`;
}

function answerCareer() {
  return `${profileData.name}님은 현재 ${profileData.department}에서 ${profileData.position}로 근무 중이며, 경력 기간은 ${profileData.careerLength}입니다. 주요 업무는 도시생태현황지도 작성 및 해양·습지 보호구역 관리계획 수립입니다.`;
}

function answerSkills() {
  return `핵심 역량 태그는 다음과 같습니다.\n${profileData.skills.join(" · ")}`;
}

function answerContact() {
  return `협업이나 문의는 이메일(${profileData.email})로 연락 주시면 됩니다. 협업 가능 영역: ${profileData.collaborationAreas.join(", ")}.`;
}

function answerFuture() {
  return `앞으로는 다음과 같은 방향으로 성장하고 싶어 합니다.\n\n${profileData.futureGoals.map((g, i) => `${i + 1}. ${g}`).join("\n")}`;
}

function answerEducation() {
  const eduList = profileData.education.map(e => `- ${e.period} ${e.school} (${e.detail})`).join("\n");
  const certList = profileData.certifications.map(c => `- ${c.date} ${c.name} (${c.org})`).join("\n");
  return `학력\n${eduList}\n\n자격/어학\n${certList}`;
}

// 키워드 -> mock 답변 매핑 규칙 (자유 입력 질문 대응)
function getMockAnswer(question) {
  const q = question.toLowerCase();

  if (q.includes("강점") || q.includes("장점")) return answerStrengths();
  if (q.includes("프로젝트") || q.includes("경험") || q.includes("포트폴리오")) return answerProjects();
  if (q.includes("업무를 맡") || q.includes("맡기") || q.includes("협업") && q.includes("업무")) return answerAssignment();
  if (q.includes("소개") || q.includes("고객") || q.includes("피치") || q.includes("elevator")) return answerPitch();
  if (q.includes("경력") || q.includes("직무") || q.includes("부서") || q.includes("역할")) return answerCareer();
  if (q.includes("역량") || q.includes("스킬") || q.includes("skill") || q.includes("qgis")) return answerSkills();
  if (q.includes("연락") || q.includes("이메일") || q.includes("메일") || q.includes("contact")) return answerContact();
  if (q.includes("앞으로") || q.includes("목표") || q.includes("포부") || q.includes("계획이 뭐") || q.includes("하고 싶")) return answerFuture();
  if (q.includes("학력") || q.includes("자격") || q.includes("어학") || q.includes("토익") || q.includes("영어") || q.includes("전공")) return answerEducation();

  return `죄송해요, 정확히 이해하지 못했어요. 대신 이런 질문은 답변드릴 수 있어요:\n- ${quickQuestions.join("\n- ")}`;
}

function appendBubble(text, sender) {
  const chatWindow = document.getElementById("chat-window");
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${sender}`;
  bubble.textContent = text;
  chatWindow.appendChild(bubble);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function handleQuestion(question) {
  if (!question.trim()) return;
  appendBubble(question, "user");

  const chatWindow = document.getElementById("chat-window");
  const typing = document.createElement("div");
  typing.className = "chat-bubble bot";
  typing.textContent = "답변을 준비하고 있어요...";
  chatWindow.appendChild(typing);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  setTimeout(() => {
    typing.textContent = getMockAnswer(question);
  }, 400);
}

function initChatForm() {
  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;
    if (!value.trim()) return;
    handleQuestion(value);
    input.value = "";
  });
}

// ==========================================================
// 초기화
// ==========================================================
document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  renderQuickQuestions();
  initChatForm();
});
