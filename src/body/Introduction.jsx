import React from "react";
import "./Introduction.css";
import "../font/fontStyle.css"

function Introduction() {
    return (
        <div id={"div-intro"} className={"container-fluid"}>
            <div className={"row"}>
                <div id={"div-intro-img-wrapper"} className={"col-sm-12 col-lg-4 col-xl-5"}>
                    <img width={200} height={200} src={"/images/profile.jpg"} />
                </div>
                <div id={"div-intro-contents-wrapper"} className={"col-sm-12 col-lg-8 col-xl-7"}>
                    <div id={"div-intro-contents"}>
                        <div>
                            <p className={"p-intro-title-header"}>안녕하세요?</p>
                            <p className={"p-intro-title"}>끊임없이 탐구하고 지속적인 성장을 원하는</p>
                            <p className={"p-intro-title"}>백엔드 개발자 지망생 김준영입니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;