import React from 'react'
import { NothingFoundFiller } from './NothingFoundFiller'

export default function HaveToSendLetter() {
    return (
        <div className="widget-block">
            <div className="block-header">
                You have to send letters for
            </div>
            <NothingFoundFiller />
        </div>
    )
}
