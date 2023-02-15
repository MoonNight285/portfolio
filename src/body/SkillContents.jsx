import React from "react";
import "./SkillContents.css";

function SkillContents({titleName}) {
    return (
        <div id={"div-skill-contents"}>
            <h5>{titleName}</h5>
        </div>
    );
}

export default SkillContents;
