import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import moment from 'moment'

import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleSideMenu } from '../../actions/menuActions';

//styles
import "./calendar.scss"
function Calendar(props) {
    const dispatch = useDispatch()
    const menu = props.menu
    const isMobile = window.matchMedia("(max-width: 425px)").matches



    const [startDate, setStartDate] = useState(new Date());

    const renderDayContents = (day, date) => {

        return <Link
            {...(
                isMobile ?
                    { onClick: () => dispatch(toggleSideMenu()) }
                    :
                    null
            )}

            {...(
                //Меняем цвет прошедших дат
                moment(date).isBefore(moment(), 'day') ?
                    { className: 'prevDates' }
                    :
                    {}
            )}
            to={{
                pathname: "/diary",
                state: { date },
            }}>
            {date.getDate()}
        </Link>;
    };
    return (
        <div className="customDatePickerWidth">
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                renderDayContents={renderDayContents}
                inline
                wrapperClassName="customDatePickerWidth"
                calendarClassName="calendar"
                calendarStartDay={1} //Старт с понедельника
            />
        </div>
    );
}
const mapStateToProps = (state) => ({
    menu: state.menu
})
export default connect(mapStateToProps, { toggleSideMenu })(Calendar)