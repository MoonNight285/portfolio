import React, {useState} from "react";
import "./PortfolioContent.css";
import {Carousel} from "react-bootstrap";
import "../font/fontStyle.css";

function PortfolioContent({portfolioEngName, portfolioName, imgList, imgContentList}) {
    const [viewImgExplanationNumber, setViewImgExplanationNumber] = useState(0); // 이미지에 맞춰 표시할 이미지 내용

    return (
        <div id={`div-portfolio-${portfolioEngName}`} className={"container"}>
            <div className={"row"}>
                <div className={"col d-flex justify-content-center"}>
                    <div id={"div-portfolio-box"} title={imgContentList[viewImgExplanationNumber]}>
                        <h3 id={"h3-portfolio-name"}>{portfolioName}</h3>
                        <Carousel indicators={false} onSlid={(number) => {setViewImgExplanationNumber(number)}}>
                            {
                                imgList.map(item => {
                                    return (
                                        <Carousel.Item key={item}>
                                            <img className="d-block w-100" src={item}
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