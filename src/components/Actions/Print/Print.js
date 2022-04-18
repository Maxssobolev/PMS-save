import React from 'react'


/*
*   
*
*
*/

import { ReactComponent as Icon } from '../../../assets/img/icons/print.svg'
export default function Print(props) {
    const handler = props.handlerPrint
    return (
        <button type='button' onClick={() => handler()} title="Print" className='action action_print'>
            <Icon /> {props.printAll && <span>Print All</span>}
        </button>
    )
}