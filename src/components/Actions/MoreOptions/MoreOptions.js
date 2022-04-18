import React from 'react'

import { ReactComponent as Icon } from '../../../assets/img/icons/more-options.svg'
export default function MoreOptions(props) {

    return (
        <button type='button' title="More Options" className='action'>
            <Icon />
        </button>
    )
}