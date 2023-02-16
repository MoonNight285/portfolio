import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "./SkillContents.css";
import "./slick-theme.css";
import "./slick.css";

// slick 캐러셀 옵션 설정
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
};

function SkillContents({titleName, imgFolderPath, imgList}) {
    const [imgUrl, setImgUrl] = useState([]);

    useEffect(() => {
        let tempUrl = [];
        for (let i = 0; i < imgList.length; ++i) {
            tempUrl.push({
                key : i,
                url : `/images/${imgFolderPath}/${imgList[i]}`
            });
        }
        setImgUrl(tempUrl);
    }, []);

    return (
        <div id={"div-skill-contents"}>
            <h5 className={"h5-skill-title"}>{titleName}</h5>
            {
                imgList.length >=5 ?
                    <div className={"div-slider-wrapper"}>
                        {
                            <Slider {...settings}>
                                {
                                    imgUrl.map(item => {
                                        return (
                                            <div key={item.key} className={"div-skill-logo-wrapper"}>
                                                <img className={"img-skill-logo"} key={item.key} src={item.url} />
                                            </div>
                                        );
                                    })
                                }
                            </Slider>
                        }
                    </div>
                    :
                    <div className={"div-skill-no-slick"}>
                        {
                            imgUrl.map(item => {
                                return (
                                    <div key={item.key} className={"div-skill-logo-wrapper"}>
                                        <img className={"img-skill-logo"} key={item.key} src={item.url} />
                                    </div>
                                );
                            })
                        }
                    </div>
            }
        </div>
    );
}

export default SkillContents;
