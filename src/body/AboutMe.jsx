import React from "react";
import "./AboutMe.css"

function AboutMe() {
    return (
        <div className={"container mb-5"}>
            <div className={"row"}>
                <div id={"div-about-me-wrapper"} className={"col"}>
                    <div id={"div-about-me-header"}>
                        <h5>소개</h5>
                    </div>
                    <div id={"div-about-me-contents"}>
                        <h5>나의 경력</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;