import React from 'react'


export default function SubmitButton(props) {
    const text = props.text ? props.text : 'Save'
    return (

        <button type="submit" className={`button button_submit ${props.customClass}`}>
            {text}
        </button>

    )
}