import React from "react";
import DatePicker from "react-datepicker";
import { useField, useFormikContext } from "formik";


export const formatterStateColumn = (cell) => {
    const val = cell.getValue()
    if (val.toLowerCase() == 'scheduled') {
        return "<span class='state state-scheduled'>" + val + "</span>"
    }
    else if (val.toLowerCase() == 'completed') {
        return "<span class='state state-completed'>" + val + "</span>"
    }
    else if (val.toLowerCase() == 'sent' || val.toLowerCase() == 'paid') {
        return "<span class='state state-sent'>" + val + "</span>"
    }
    else if (val.toLowerCase() == 'bounce') {
        return "<span class='state state-bounce'>" + val + "</span>"
    }

}


export const formatterColorColumn = (cell) => {
    const val = cell.getValue()
    if (val.toLowerCase() == 'no') {
        return "<span class='color color-red'>" + val + "</span>"
    }
}

export const roundNumber = (num, scale) => {
    if (!("" + num).includes("e")) {
        return +(Math.round(num + "e+" + scale) + "e-" + scale);
    } else {
        var arr = ("" + num).split("e");
        var sig = ""
        if (+arr[1] + scale > 0) {
            sig = "+";
        }
        return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
    }
}

//download helper
const download = require("downloadjs")
export async function handleDownload(filename, path) {
    const res = await fetch(path + filename);
    const blob = res.blob();
    download(blob, filename);
}


export function datePickerCustomHeaderRender({
    date,
    changeYear,
    changeMonth

}) {
    const { months, range } = require('../Forms/vars')
    const moment = require('moment')
    const years = range(1940, moment().year());

    return (
        <div
            style={{
                margin: 10,
                display: "flex",
                justifyContent: "center",
            }}
        >

            <select
                value={date.getYear()}
                onChange={({ target: { value } }) => changeYear(value)}
            >
                {years.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                value={months[(date).getMonth()]}
                onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                }
            >
                {months.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>


        </div>
    )
}


export const DatePickerField = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <DatePicker
            {...field}
            {...props}
            className="field"
            selected={(field.value && new Date(field.value)) || null}
            onChange={val => {
                setFieldValue(field.name, val);
            }}
        />
    );
};


export function simulateMouseClick(element) {
    const mouseClickEvents = ['mousedown', 'click', 'mouseup'];
    mouseClickEvents.forEach(mouseEventType =>
        element.dispatchEvent(
            new MouseEvent(mouseEventType, {
                view: window,
                bubbles: true,
                cancelable: true,
                buttons: 1
            })
        )
    );
}


export const getSiblings = function (e) {
    // for collecting siblings
    let siblings = [];
    // if no parent, return no sibling
    if (!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling = e.parentNode.firstChild;

    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};

export const addActiveClassOnClickForElements = (selector, activeClass, defaultSelect) => {
    document.addEventListener("DOMContentLoaded", () => {
        const els = document.querySelectorAll(selector)
        if (defaultSelect != undefined) { els[defaultSelect].classList.add(activeClass) }

        els.forEach((el) => {
            const siblings = getSiblings(el)
            el.addEventListener("click", (e) => {
                e.target.classList.add(activeClass)
                siblings.forEach((el) => {
                    el.classList.remove(activeClass)
                })
            })
        })
    })
}


