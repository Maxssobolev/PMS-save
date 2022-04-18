import React from 'react'
import { NothingFoundFiller } from './NothingFoundFiller'

export default function ClosestActivity() {
    return (
        <div className="widget-block">
            <div className="block-header">
                Your closest activity
            </div>
            <NothingFoundFiller />
        </div>
    )
}
