import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../assets/scss/mySlider.scss'
import { ReactComponent as FolderIcon } from '../../../assets/img/icons/folder.svg'
export default function ShowFoldres(props) {
    const { type } = props

    const [folders, setFolders] = useState([
        { title: 'Name', link: '#' },
        { title: 'Name', link: '#' },
        { title: 'Name', link: '#' },
        { title: 'Name', link: '#' },
        { title: 'Name', link: '#' },
        { title: 'Name', link: '#' },
        { title: 'Name', link: '#' },
        { title: 'Name', link: '#' },
        { title: 'Name', link: '#' },
        { title: 'Name', link: '#' },
        { title: 'Name', link: '#' },
        { title: 'Name', link: '#' },
        { title: 'Name', link: '#' },
        { title: 'Name', link: '#' },
    ])

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    rows: 3,
                    infinite: true,
                }
            },
        ]
    };
    return (
        <div className="showFolders">
            <div className="widget-block">
                <div className="block-header">
                    {type}
                </div>
                <div className="slider-wrapper">
                    <Slider {...settings}>
                        {folders.map((item) => {

                            return (
                                <div className="slide folder" onDoubleClick={() => { console.log(item.link) }}>
                                    <FolderIcon width={44} height={44} />
                                    <span className="_title" >{item.title}</span>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}