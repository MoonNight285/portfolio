import React from "react";
import "./PortfolioContent.css";
import {Carousel} from "react-bootstrap";

function PortfolioContent({portfolioName}) {
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col d-flex justify-content-center"}>
                    <div id={"div-portfolio-box"}>
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100" src="holder.js/800x400?text=First slide&bg=373940"
                                    alt="First slide"/>
                                <Carousel.Caption>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src="holder.js/800x400?text=Second slide&bg=282c34"
                                    alt="Second slide"/>
                                <Carousel.Caption>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=20232a"
                                    alt="Third slide"/>
                                <Carousel.Caption>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <h3 id={"h3-portfolio-name"}>프로젝트 이름</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioContent;