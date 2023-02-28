import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "./SkillContents.css";
import "./slick-theme.css";
import "./slick.css";
import "../font/fontStyle.css";

function SkillContents({titleName, imgFolderPath, imgList}) {
    const [imgUrl, setImgUrl] = useState([]);
    const [sildeShowCount, setSildeShowCount] = useState(4);
    const [width, setWidth] = useState(0);

    // slick 캐러셀 옵션 설정
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: sildeShowCount,
        slidesToScroll: 1
    };

    useEffect(() => {
        setWidth(window.screen.width);
    }, []);

    useEffect(() => {
        if (width > 1200) {
            setSildeShowCount(4);
        } else if (width > 990) {
            setSildeShowCount(3);
        } else if (width >= 768) {
            setSildeShowCount(2);
        } else {
            setSildeShowCount(1);
        }
    }, [width]);

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
                    width > 988 ?
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
                        :
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
            }
        </div>
    );
}

export default SkillContents;
