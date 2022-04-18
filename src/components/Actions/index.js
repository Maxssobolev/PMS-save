import React from 'react'
import BookNewAppointment from './BookNewAppointment/BookNewAppointment'
import EditDetails from './EditDetails/EditDetails'
import MoreOptions from './MoreOptions/MoreOptions'
import '../../assets/scss/actions.scss'
import Delete from './Delete/Delete'
import QuickPayment from './QuickPayment/QuickPayment'
import ViewDetails from './ViewDetails/ViewDetails'
import Consultation from './Consultation/Consultation'
import ChangeTheState from './ChangeTheState/ChangeTheState'
import SendEmail from './SendEmail/SendEmail'
import SendSMS from './SendSMS/SendSMS'
import DidNotAttend from './DidNotAttend/DidNotAttend'
import Print from './Print/Print'

export default function Actions(props) {
    const location = window.location.pathname
    const menu = { isMobile: window.matchMedia("(max-width: 425px)").matches }

    /*
    Так как эти экшоны будут использоваться на разных страницах, то я буду передавать им роут
    чтобы уже внутри компонента решить, что выводить
    */

    return (
        <div className='actions'>
            {props?.moreOptions && <MoreOptions location={location} {...props} menu={menu} />}
            {props?.viewDetails && <ViewDetails location={location} {...props} menu={menu} />}
            {props?.bookNewAppointment && <BookNewAppointment location={location} {...props} menu={menu} />}
            {props?.editDetails && <EditDetails location={location} {...props} menu={menu} />}
            {props?.print && <Print location={location} {...props} menu={menu} />}
            {props?.consultation && <Consultation location={location} {...props} menu={menu} />}
            {props?.changeTheState && <ChangeTheState location={location} {...props} menu={menu} />}
            {props?.sendEmail && <SendEmail location={location} {...props} menu={menu} />}
            {props?.sendSMS && <SendSMS location={location} {...props} menu={menu} />}
            {props?.didNotAttend && <DidNotAttend location={location} {...props} menu={menu} />}
            {props?.quickPayment && <QuickPayment location={location} {...props} menu={menu} />}
            {props?.delete && <Delete location={location}  {...props} menu={menu} />}
        </div>
    )
}
