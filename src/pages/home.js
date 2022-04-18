import React, { useEffect, useState, createRef } from 'react'
import '../assets/scss/pages.scss'

import CircleDiagram from '../components/HomePageComponents/CircleDiagram';
import ClosestActivity from '../components/HomePageComponents/ClosestActivity';
import HaveToSendLetter from '../components/HomePageComponents/HaveToSendLetter';
import HoldingListPatients from '../components/HomePageComponents/HoldingListPatients';
import StatisticsWidget from '../components/HomePageComponents/StatisticsWidget';


export default function HomePage() {

    const wrapperRef = createRef(null);
    const [statisticWrapperWidth, setstatisticWrapperWidth] = useState(0)

    useEffect(() => {
        //Определяем  ширину контейнера для корректного отображения 
        setstatisticWrapperWidth(wrapperRef.current.offsetWidth)
    }, [wrapperRef]);



    return (
        <div className="page page-home">
            <section className="header-section">
                <h1 className="page-header">Welcome to the primary managment software, Andrew Dev!</h1>
                <div className="header-section__message">Hi guys - welcome to the new practice management software. You should be aware that we are monitoring diary activity, and everything on here is logged so we can track any issues.</div>
            </section>

            <section className="widgets">
                <div className="widgets-main-part">
                    <div className="flex flex_space-between">
                        <div className="widget-block circle-diagram">
                            <div className="block-header">
                                Your holding list entries
                            </div>
                            <CircleDiagram maxVal={16} current={12}  />

                        </div>
                        <div className="widget-block circle-diagram">
                            <div className="block-header">
                                Your online booking entries
                            </div>
                            <CircleDiagram maxVal={13} current={5}  />

                        </div>
                    </div>
                    <HoldingListPatients />

                </div>

                <div className="widgets-side-part">
                    <ClosestActivity />
                    <HaveToSendLetter />
                </div>
            </section>

            <section className="statistic">

                <StatisticsWidget
                    width={statisticWrapperWidth}
                    height={400}
                    wrapperRef={wrapperRef}
                />
            </section>
        </div>
    );
}

