import React from "react";
import "./Introduction.css";

function Introduction() {
    return (
        <div id={"div-intro"} className={"container-fluid"}>
            <div className={"row"}>
                <div id={"div-intro-img-wrapper"} className={"col-sm-12 col-lg-4 col-xl-5"}>
                    <img width={200} height={200} src={"/logo192.png"} />
                </div>
                <div id={"div-intro-contents-wrapper"} className={"col-sm-12 col-lg-8 col-xl-7"}>
                    <div id={"div-intro-contents"}>
                        <div>
                            <p>테스트 문구입니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;