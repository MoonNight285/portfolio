import React, {useContext} from "react";
import "./AboutMe.css";
import "../font/fontStyle.css";
import Homepage from "../context/Homepage";

function AboutMe() {
    const homepage = useContext(Homepage);

    return (
        <div className={"container mb-5"}>
            <div className={"row"}>
                <div id={"div-about-me-wrapper"} className={"col"}>
                    <div id={"div-about-me-header"}>
                        <h5 className={"h5-about-me-menu-title"}>나의 소개</h5>
                        <div className={"div-about-me-profile-summary"}>
                            <img src={`${homepage}/images/programmer.png`} />
                            <p>김준영(만 26세)</p>
                        </div>
                        <div className={"div-about-me-profile-summary"}>
                            <img src={`${homepage}/images/graduation-hat.png`} />
                            <p>한국 폴리텍대학 창원 캠퍼스 메카트로닉스과 졸업</p>
                        </div>
                        <div className={"div-about-me-profile-summary"}>
                            <img src={`${homepage}/images/home.png`} />
                            <p>경상남도 창원시 거주</p>
                        </div>
                        <div className={"div-about-me-profile-summary"}>
                            <img src={`${homepage}/images/phone.png`} />
                            <p>010 - 7189 - 0933</p>
                        </div>
                        <div className={"div-about-me-profile-summary"}>
                            <img src={`${homepage}/images/email.png`} />
                            <p>kimjyjh123@gmail.com</p>
                        </div>
                    </div>
                    <div id={"div-about-me-contents"}>
                        <div>
                            <h5 className={"h5-about-me-menu-title"}>나의 연혁</h5>
                            <ul>2015.03 ~
                                <li>- 한국 폴리텍 대학 창원 캠퍼스 메카트로닉스과 입학</li>
                            </ul>
                            <ul>2018.07 ~ 2020.05
                                <li>- 병역 필</li>
                            </ul>
                            <ul>2020.11 ~
                                <li>- 아이오텍 입사(C# winform 기반 POP 개발 업무)</li>
                            </ul>
                            <ul>2021.02 ~
                                <li>- 한국 폴리텍 대학 창원 캠퍼스 졸업</li>
                            </ul>
                            <ul>2022.03 ~
                                <li>- 아이오텍 퇴사</li>
                            </ul>
                            <ul>2022.08 ~ 2023.02
                                <li>- 부산 IT 직업 전문학교 웹 개발자 교육 이수</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className={"h5-about-me-menu-title"}>자격증</h5>
                            <ul>취득일 : 2019.05.22
                                <li>- 정보처리 산업기사</li>
                            </ul>
                            <ul>취득일 : 2018.01.21
                                <li>- JLPT N2(2급)</li>
                            </ul>
                            <ul>취득일 : 2013.04.05
                                <li>- 컴퓨터 활용능력 2급</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;