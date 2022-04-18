import React from 'react';
import EmailLog from './AlertLogComponents/EmailLog';
import SMSLog from './AlertLogComponents/SMSLog';
import VideoChatsLog from './AlertLogComponents/VideoChatsLog';

export default function AlertLog(props) {

    return (
        <div className="alertLogTab">
            <div className="mainArea">
                <EmailLog />
                <SMSLog />
                <VideoChatsLog />
            </div>
        </div>
    )
}