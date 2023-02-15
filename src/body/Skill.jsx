import React from "react";
import SkillContents from "./SkillContents";

function Skill() {
    return (
        <div className={"container mb-5"}>
            <div className={"row"}>
                <div className={"col"}>
                    <SkillContents titleName={"Frontend"} />
                </div>
            </div>
            <div className={"row"}>
                <div className={"col"}>
                    <SkillContents titleName={"Backend"} />
                </div>
            </div>
            <div className={"row"}>
                <div className={"col"}>
                    <SkillContents titleName={"collaboration"} />
                </div>
            </div>
        </div>
    )
}

export default Skill;