import React from 'react'


export default function CancelButton(props) {
    const text = props.text ? props.text : 'Cancel'
    return (

        <button type="button" onClick={() => props.handler()} className={`button button_cancel ${props.customClass}`}>
            {text}
        </button>

    )
}