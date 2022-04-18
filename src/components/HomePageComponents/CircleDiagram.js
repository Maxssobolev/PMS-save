import React from 'react'

export default function CircleDiagram({ maxVal, current }) {
    let currentVal = current ? current : 0
    let percentOfFilling = currentVal / maxVal * 100;
    return (

            <div className="circle-diagram-wrapper">
                <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
                    <defs>
                        <linearGradient id="linear"
                            x1="0%"
                            y1="0%"
                            /* чтобы градиент был ближе к концу */
                            x2={currentVal > maxVal / 2 ? "-20%" : "0"}
                            y2="100%">
                            <stop offset="0%" stopColor="rgba(52, 128, 192, 1)" />
                            <stop offset={`${percentOfFilling}%`} stopColor=" rgba(23, 68, 119, 1)" />
                        </linearGradient>
                    </defs>
                    <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
                    <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="rgba(239, 239, 239, 1)" strokeWidth="3"></circle>

                    <circle className="donut-segment" cx="21" cy="21"
                        r="15.91549430918954" fill="transparent"
                        stroke="url(#linear)" strokeWidth="3"
                        /* здесь первое значение (в процентах)  - синий круг (filling) */
                        strokeDasharray={[percentOfFilling, 100 - percentOfFilling]}
                        strokeDashoffset="25"
                        strokeLinecap="round"></circle>


                    <g className="chart-text">
                        <text x="50%" y="50%" className="chart-number">
                            {currentVal}
                        </text>
                    </g>
                </svg>
            </div>

    );
}




