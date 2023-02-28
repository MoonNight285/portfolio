import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div id={"div-footer"} className={"col"}>
                    아이콘 출처 : <a href={"https://www.flaticon.com/"} target={"_blank"} rel={"icon"}>
                    <span className={"mx-1"}>https://www.flaticon.com/</span>
                </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;