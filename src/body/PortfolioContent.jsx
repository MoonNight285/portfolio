import React, {useState} from "react";
import "./PortfolioContent.css";
import {Carousel} from "react-bootstrap";
import "../font/fontStyle.css";

function PortfolioContent({portfolioEngName, portfolioName, imgList, imgContentList}) {
    const [viewImgExplanationNumber, setViewImgExplanationNumber] = useState(0); // 이미지에 맞춰 표시할 이미지 내용

    return (
        <div id={`div-portfolio-${portfolioEngName}`} className={"container div-portfolio-container"}>
            <div className={"row"}>
                <div className={"col"}>
                    <h3 className={"h3-portfolio-name"}>{portfolioName}</h3>
                </div>
            </div>
            <div className={"row div-portfolio-content-wrapper"}>
                <div className={"col-12 col-lg-6 div-portfolio-content-information"}>
                    <div>
                        <h5>개발 취지</h5>
                        <p>
                            React와 Spring boot를 메인으로
                            웹 사이트의 정석인 쇼핑몰을 만들어보고자 하여 제작된 사이트입니다.
                        </p>
                        <h5>개발 기간</h5>
                        <p>2023.01.13.~2023.02.13</p>
                        <h5>개발 인원</h5>
                        <p>4명</p>
                        <h5>깃허브</h5>
                        <a href={"https://github.com/dreamcommall/dream_com"} target={"_blank"}>
                            깃허브 주소로 이동하기
                        </a>
                    </div>
                </div>
                <div className={"col-12 col-lg-6 div-portfolio-role-list"}>
                    <h5>담당역할</h5>
                    <ul className={"ul-portfolio-role"}>
                        <li>히스토리 박스 UI 및 기능 구현</li>
                        <li>메인화면 페이지 UI 및 기능 구현</li>
                        <li>검색 페이지 UI 및 기능 구현</li>
                        <li>제품 상세페이지 UI 및 기능 구현</li>
                        <li>마이페이지 구매내역 코드 리팩터링 및 기능 구현</li>
                        <li>로그인 기능 구현</li>
                        <li>DB 설계</li>
                    </ul>
                </div>
            </div>
            <div className={"row"}>
                <h4 className={"h4-portfolio-sub-title"}>구현 화면</h4>
                <div className={"col d-flex justify-content-center"}>
                    <div id={"div-portfolio-box"} title={imgContentList[viewImgExplanationNumber]}>
                        <Carousel indicators={false} onSlid={(number) => {setViewImgExplanationNumber(number)}}>
                            {
                                imgList.map(item => {
                                    return (
                                        <Carousel.Item key={item}>
                                            <img className="d-block" src={item}
                                                 alt={imgContentList[viewImgExplanationNumber]}/>
                                        </Carousel.Item>
                                    );
                                })
                            }
                        </Carousel>
                        <div className={"div-portfolio-img-explanation"}>
                            <p>{imgContentList[viewImgExplanationNumber]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioContent;