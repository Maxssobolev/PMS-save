import React, {createRef, useEffect, useState} from 'react'
import * as d3 from 'd3'

export default function StatiscticsBarChart (props){
    const wrapperRef = createRef(null);
    const [width, setWidth] = useState(null)
    const { height, data, fromToByVertical} = props

    useEffect(() => {
        setWidth(wrapperRef.current.offsetWidth)
    },[wrapperRef])

    useEffect(() => {
        if(width) {
            let x = d3.scaleBand()
                .domain(data.map(item => item.name))
                .range([0, width])
                .paddingInner(.1)
                .paddingOuter(.3)

            let y = d3.scaleLinear()
                .domain(fromToByVertical)
                .range([height, 0])

            let xAxis = d3.axisBottom(x)
            let yAxis = d3.axisLeft(y)

            let svg = d3.select("#barChart").append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")


            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", `translate(0, ${height})`)
                .call(xAxis)
                .selectAll(".tick text")
                .call(wrap, x.bandwidth())

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)

            svg.selectAll(".bar")
                .data(data)
                .enter().append("rect")
                .attr("class", "bar")
                .attr("x", d => x(d.name))
                .attr("width", x.bandwidth())
                .attr("y", d => y(d.value))
                .attr("height", d => height - y(d.value))
                .attr("rx", 4).attr("ry", 4)

        }
    }, [width])
    return (

        <div className="wrapper" ref={wrapperRef} id="barChart">


        </div>
    )
}


function wrap(text, width) {
    text.each(function () {
        let text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, // ems
            y = text.attr("y"),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em")
        while (word = words.pop()) {
            line.push(word)
            tspan.text(line.join(" "))
            if (tspan.node().getComputedTextLength() > width) {
                line.pop()
                tspan.text(line.join(" "))
                line = [word]
                tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", `${++lineNumber * lineHeight + dy}em`).text(word)
            }
        }
    })
}