import Header from "./header/Header";
import Introduction from "./body/Introduction";
import "./App.css";
import AboutMe from "./body/AboutMe";
import Skill from "./body/Skill";
import PortfolioContent from "./body/PortfolioContent";
import Footer from "./footer/Footer";
import Homepage from "./context/Homepage";

const covid19ImgList = [
    "/images/covid19/covid19_1.png",
    "/images/covid19/covid19_2.png",
    "/images/covid19/covid19_3.png",
    "/images/covid19/covid19_4.png",
    "/images/covid19/covid19_5.png",
    "/images/covid19/covid19_6.png"
    ];

const covid19ImgContents = [
    "도시와 날짜를 선택해 모든 데이터를 보여줍니다.",
    "도시와 날짜를 선택해서 누적 확진자 수를 보여줍니다.",
    "공지사항 목록을 표시합니다.",
    "관리자 로그인 기능입니다.",
    "공지사항 작성 기능입니다.",
    "현재 내 계정 상태 확인 및 관리자 신청 대기목록을 볼수있습니다."
]

const covid19Information = {
    developObject : "코로나를 주제로 선정해 코로나의 각종 현황 상황을 알수있게 공공데이터 " +
        "포털사이트를 이용하여 제작한 사이트입니다.",
    developTime : "2022.11.26.~2022.12.06",
    developMemberCount : 1,
    github : "https://github.com/MoonNight285/Covid19Monitor",
    roles : [
        {key : 0, role : "공공데이터 포털 API 적용"},
        {key : 1, role : "공지사항 & 관리자 페이지 개발"},
        {key : 2, role : "로그인 & 회원가입 구현"},
        {key : 3, role : "DB 설계"}
    ]
}

const cinemaImgList = [
    "/images/cinema/cinema_1.png",
    "/images/cinema/cinema_2.png",
    "/images/cinema/cinema_3.png",
    "/images/cinema/cinema_4.png",
    "/images/cinema/cinema_5.png",
    "/images/cinema/cinema_6.png",
    "/images/cinema/cinema_7.png",
    "/images/cinema/cinema_8.png"
];

const cinemaImgContents = [
    "스프링 시네마의 메인화면입니다.",
    "DB에 현재 등록되어있는 현재상영작을 보여줍니다.",
    "DB에 저장된 데이터를 기반으로 영화의 상세정보를 표시합니다.",
    "약관동의 화면입니다.",
    "회원가입 페이지입니다.",
    "현재 상영중인 영화목록에서 영화를 선택하는 페이지입니다.",
    "좌석 선택페이지입니다.",
    "결제페이지입니다."
]


const cinemaInformation = {
    developObject : "Spring boot와 Thymeleaf를 메인으로 " +
        "CGV, 롯데시네마 같은 영화관 같은 사이트를 만들어보고자 하여 제작된 사이트입니다.",
    developTime : "2022.12.07.~2022.12.27",
    developMemberCount : 3,
    github : "https://github.com/SpringCinema/SpringCinemaProject",
    roles : [
        {key : 0, role : "스케줄러 사용해 특정시간에 영화 데이터 DB에 저장"},
        {key : 1, role : "마이페이지 UI 및 기능 구현"},
        {key : 2, role : "결제 페이지 UI 및 기능 구현"},
        {key : 3, role : "로그인 & 회원가입 구현"},
        {key : 4, role : "KMDB(한국 영화 데이터 베이스) API 적용"},
        {key : 5, role : "XML 데이터 파싱"},
        {key : 6, role : "DB 설계"}
    ]
}

const dreamcomImgList = [
    "/images/dreamcom/dreamcom_1.png",
    "/images/dreamcom/dreamcom_2.png",
    "/images/dreamcom/dreamcom_3.png",
    "/images/dreamcom/dreamcom_4.png",
    "/images/dreamcom/dreamcom_5.png",
    "/images/dreamcom/dreamcom_6.png",
    "/images/dreamcom/dreamcom_7.png",
    "/images/dreamcom/dreamcom_8.png",
    "/images/dreamcom/dreamcom_9.png",
    "/images/dreamcom/dreamcom_10.png"
];

const dreamcomImgContents = [
    "드림컴퓨터의 메인화면입니다.",
    "메인화면의 하단부분으로 스크롤시 새롭게 아이템을 불러옵니다.",
    "검색결과를 보여주는 페이지입니다.",
    "제품 상세페이지입니다.",
    "제품 상세페이지중 구매후기를 표시하는 부분입니다.",
    "주문내역과 배송조회를 확인하는 페이지입니다.",
    "주문결제하기전 확인하는 페이지입니다.",
    "아임포트 결제모듈을 사용한 결제화면입니다.",
    "회원가입 페이지입니다.",
    "이메일과 비밀번호찾기 페이지입니다."
]

const dreamcomInformation = {
    developObject : "React와 Spring boot를 메인으로 웹 사이트의 정석인 쇼핑몰을 만들어보고자 하여 제작된 사이트입니다.",
    developTime : "2023.01.13.~2023.02.13",
    developMemberCount : 4,
    github : "https://github.com/dreamcommall/dream_com",
    roles : [
        {key : 0, role : "히스토리 박스 UI 및 기능 구현"},
        {key : 1, role : "메인화면 페이지 UI 및 기능 구현"},
        {key : 2, role : "검색 페이지 UI 및 기능 구현"},
        {key : 3, role : "제품 상세페이지 UI 및 기능 구현"},
        {key : 4, role : "마이페이지 구매내역 코드 리팩터링 및 기능 구현"},
        {key : 5, role : "로그인 기능 구현"},
        {key : 6, role : "DB 설계"}
    ]
}

function App() {
  return (
    <div id={"div-main-app"}>
        <Homepage.Provider value={"https://moonnight285.github.io/portfolio/"}>
            <Header/>
            <Introduction />
            <AboutMe />
            <Skill />
            <PortfolioContent portfolioEngName={"dream-com"} portfolioName={"드림컴"} imgList={dreamcomImgList}
                              imgContentList={dreamcomImgContents} information={dreamcomInformation} />
            <PortfolioContent portfolioEngName={"spring-cinema"} portfolioName={"스프링 시네마"} imgList={cinemaImgList}
                              imgContentList={cinemaImgContents} information={cinemaInformation} />
            <PortfolioContent portfolioEngName={"covid19-monitor"} portfolioName={"코로나 모니터"} imgList={covid19ImgList}
                              imgContentList={covid19ImgContents} information={covid19Information} />
            <Footer />
        </Homepage.Provider>
    </div>
  );
}

export default App;
