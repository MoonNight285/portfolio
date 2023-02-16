import React from "react";
import SkillContents from "./SkillContents";

const frontImgList = ["html.png", "css.png", "JavaScript-Logo.png", "jquery.png",
    "bootstrap-logo-shadow.png", "react.png"];
const backImgList = ["java.png", "jsp-logo.png", "mysql-tutorial.png",
    "springboot-1.webp", "thymeleaf.png", "cShapp.png", "mssql.png"];
const collaborationImgList = ["git.png", "SourceTree.png", "notion.png"];

function Skill() {
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col"}>
                    <SkillContents titleName={"Frontend"} imgFolderPath={"front"} imgList={frontImgList} />
                </div>
            </div>
            <div className={"row"}>
                <div className={"col"}>
                    <SkillContents titleName={"Backend"} imgFolderPath={"back"} imgList={backImgList} />
                </div>
            </div>
            <div className={"row"}>
                <div className={"col"}>
                    <SkillContents titleName={"collaboration"} imgFolderPath={"collaboration"} imgList={collaborationImgList} />
                </div>
            </div>
        </div>
    )
}

export default Skill;