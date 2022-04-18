import React from 'react'


export default function CommonButton(props) {
    const text = props.text ? props.text : 'Button'
    return (

        <button type="button" onClick={() => props.handler()} className={`button button_blue ${props.customClass}`}>
            {text}
        </button>

    )
}