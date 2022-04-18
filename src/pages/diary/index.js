import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useRouteMatch, Switch, Route } from 'react-router-dom';
import '../../assets/scss/pages.scss'
import { MultiSelect } from "react-multi-select-component";

import { Row, Col } from 'react-bootstrap'
import SubPageRenderer from '../sub-page-renderer';
import CommonButton from '../../components/ButtonControllers/CommonButton';

import { ReactComponent as LeftPaginatonArrow } from '../../assets/img/icons/left-arrow-paginate.svg'
import { ReactComponent as RightPaginatonArrow } from '../../assets/img/icons/right-arrow-paginate.svg'
import Diary from '../../components/Diary/Diary';
import { simulateMouseClick, addActiveClassOnClickForElements } from '../../components/CommonUtils/CommonUtils';
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import BookNewAppointment from '../../components/Actions/BookNewAppointment/BookNewAppointment';
import HoldingListPatients from '../../components/HomePageComponents/HoldingListPatients';

function DiaryPage() {
    const menu = useSelector(state => state.menu)
    let match = useRouteMatch();

    return (
        <div className="page page-diary">
            <Switch>
                <Route path={`${match.path}/:subcomponent`} component={SubPageRenderer} />
                <Route path="/"> <Index menu={menu} /> </Route>
            </Switch>
        </div>
    );
}


const Index = (props) => {
    const menu = props.menu
    //wait for calendar loading
    const calendar = useRef(null)
    const [weekViewButton, setWeekViewButton] = useState()
    const [dayViewButton, setDayViewButton] = useState()
    const [listViewButton, setListViewButton] = useState()
    const [monthViewButton, setMonthViewButton] = useState()
    const [prevButton, setPrevButton] = useState()
    const [nextButton, setNextButton] = useState()
    const [todayButton, setTodayButton] = useState()
    //const [calendarTitle, setCalendarTitle] = useState()

    //add custom calendar buttons
    useEffect(() => {
        //setCalendarTitle(document.querySelector(".fc-toolbar-title").innerHTML)
        setWeekViewButton(document.querySelector('.fc-timeGridWeek-button'))
        setMonthViewButton(document.querySelector('.fc-dayGridMonth-button'))
        setDayViewButton(document.querySelector('.fc-timeGridDay-button'))
        setListViewButton(document.querySelector('.fc-listWeek-button'))
        setPrevButton(document.querySelector('.fc-prev-button'))
        setNextButton(document.querySelector('.fc-next-button'))
        setTodayButton(document.querySelector('.fc-today-button'))
    }, [calendar])

    const { state } = useLocation()
    const selectedDay = state?.date


    //Controllers Select 
    const select1 = [
        { label: "Seldon House", value: "Seldon House" },
        { label: "Other House", value: "Other House" },
    ]
    const [selected1, setSelected1] = useState([]);

    const select2 = [
        { label: "Antonio Galante", value: "Antonio Galante" },
        { label: "Other", value: "Other" },
    ]
    const [selected2, setSelected2] = useState([]);
    const [combinedSelect, setCombinedSelect] = useState([...selected1, ...selected2])
    //

    //CALENDAR IVENTS
    const [events, setEvents] = useState([
        {
            id: 'a',
            title: 'room 2',
            start: '2021-09-15 12:00:00',

            //end: '2021-09-15 12:29:00',
            //textColor: '',
            //borderColor: 'pink',
            //backgroundColor: 'pink'
        },
        {
            id: 'b',
            title: 'Selsdon House',
            start: '2021-09-15 12:30:00',
        },
        {
            id: 'c',
            title: 'Selsdon House',
            start: '2021-09-15 13:00:00',
            end: '2021-09-15 20:30:00',
            borderColor: 'gray',
            backgroundColor: 'gray'
        }
    ])


    //buttons animate
    addActiveClassOnClickForElements('.viewControllers button', 'active_controller', 0)

    const decoratedOnClick = (e) => {

        if (e.target.innerText == e.target.getAttribute('textbeforeclicked')) {
            setCombinedSelect([...select1, ...select2])
            e.target.innerText = e.target.getAttribute('textafterclicked')
        } else {
            setCombinedSelect([])
            e.target.innerText = e.target.getAttribute('textbeforeclicked')
        }
    }
    const [bookNewAppointmentShow, setBookNewAppointmentShow] = useState(false)
    const [holdingListPatientsShow, setHoldingListPatientsShow] = useState(false)
    const topButtons = [
        { title: 'New appointment', btnClick: () => { setBookNewAppointmentShow(true) } },
        { title: 'Holding list', btnClick: () => { setHoldingListPatientsShow(true) } },
        { title: 'Print diary', btnClick: () => { } },
        { title: 'New event', btnClick: () => { } },
        { title: 'Online booking', btnClick: () => { } },
        { title: 'Copy between practitioners', btnClick: () => { } },
        { title: 'New note', btnClick: () => { } },
        { title: 'Show/Hide client names', btnClick: () => { } },
        { title: 'Show by practitioners', btnClick: () => { } },
        { title: 'Block out a slot', btnClick: () => { } },
        { title: 'Refresh calendar', btnClick: () => { } },
    ]
    return (
        <>
            <section className="header-section">
                <h1 className="page-header">Diary</h1>
            </section>
            <div className="widget-block">
                <div className="diary-top">
                    <div className="leftSideArea">
                        <div className="actions-block">
                            <Row className="header">
                                <Col>Add to Calendar</Col>
                                <Col>Other</Col>
                                {!menu.isMobile && <Col></Col>}
                            </Row>
                            <Row>
                                {topButtons.map((itm, index) => {
                                    if (menu.isMobile) {
                                        return <div className="groupList_element-col-2"><button className="actions" type="button" onClick={itm.btnClick}>{itm.title}</button></div>
                                    } else {
                                        //3 columns
                                        return <div className="groupList_element-col-3"><button className="actions" type="button" onClick={itm.btnClick}>{itm.title}</button></div>
                                    }
                                })}
                            </Row>



                        </div>
                        {!menu.isMobile && (
                            <div className="markers">
                                <button type="button" className="button_special green">Arrived</button>
                                <button type="button" className="button_special yellow">Seen</button>
                                <button type="button" className="button_special fiolent">Completed</button>
                                <button type="button" className="button_special red">Did not Attempt</button>
                                <button type="button" className="button_special gray-btn">Block</button>
                            </div>)
                        }
                    </div>
                    <div className="rightSideArea">
                        <div className="wrapper">
                            {menu.isMobile ? <div>
                                <div className="field-wrapper">
                                    <MultiSelect
                                        className="field field_select"
                                        hasSelectAll={false}
                                        options={select1}
                                        value={selected1}
                                        onChange={setSelected1}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className="field-wrapper">
                                    <MultiSelect
                                        className="field field_select"
                                        hasSelectAll={false}
                                        options={select2}
                                        value={selected2}
                                        onChange={setSelected2}
                                        labelledBy="Select"
                                    />
                                </div>
                            </div> :
                                <>
                                    <div className="field-wrapper">
                                        <MultiSelect
                                            className="field field_select"
                                            hasSelectAll={false}
                                            options={select1}
                                            value={selected1}
                                            onChange={setSelected1}
                                            labelledBy="Select"
                                        />
                                    </div>
                                    <div className="field-wrapper">
                                        <MultiSelect
                                            className="field field_select"
                                            hasSelectAll={false}
                                            options={select2}
                                            value={selected2}
                                            onChange={setSelected2}
                                            labelledBy="Select"
                                        />
                                    </div>
                                </>
                            }
                            <div className="btn-wrapper">
                                <button className="button button_accent" textbeforeclicked="Select All" textafterclicked="Deselect All" onClick={(event) => { decoratedOnClick(event); }} > Select All </button>
                                <CommonButton text="New Appointment" customClass="button_accent" handler={() => { setBookNewAppointmentShow(true) }} />
                            </div>

                        </div>

                        {menu.isMobile && (
                            <div className="markers">
                                <button type="button" className="button_special green">Arrived</button>
                                <button type="button" className="button_special yellow">Seen</button>
                                <button type="button" className="button_special fiolent">Completed</button>
                                <button type="button" className="button_special red">Did not Attempt</button>
                                <button type="button" className="button_special gray-btn">Block</button>
                            </div>)
                        }
                    </div>
                </div>

                <div className="controllers">
                    <div className="paginate">
                        <button type="button" onClick={() => { simulateMouseClick(prevButton); }}><LeftPaginatonArrow /></button>
                        <button type="button" onClick={() => { simulateMouseClick(nextButton); }}><RightPaginatonArrow /></button>
                        <div className="today" onClick={() => { simulateMouseClick(todayButton); }}>Today</div>
                    </div>

                    <div className="viewControllers">
                        <button type="button" className="viewButton" onClick={() => { simulateMouseClick(weekViewButton); }}>Week</button>
                        <button type="button" className="viewButton active" onClick={() => { simulateMouseClick(monthViewButton); }}>Month</button>
                        <button type="button" className="viewButton" onClick={() => { simulateMouseClick(dayViewButton); }}>Day</button>
                        <button type="button" className="viewButton" onClick={() => { simulateMouseClick(listViewButton); }}>List</button>
                    </div>
                </div>
                <div className="selected">
                    {combinedSelect.map((item, index) => (
                        <span key={`${index}__selected1`}>{item.label} </span>
                    ))}
                </div>
            </div >
            {/* 1000 - условное число, сама таблица выглядит довольно адекватно даже при небольшой ширине */}
            <div className="widget-block" style={menu.isMobile ? { width: '1000px' } : {}}>
                <Diary calendarRef={calendar} events={events} initialDate={selectedDay} />
            </div>

            <BookNewAppointment
                custom={true}
                show={bookNewAppointmentShow}
                close={() => setBookNewAppointmentShow(false)} />
            <HoldingListPatients
                custom={true}
                show={holdingListPatientsShow}
                setShow={setHoldingListPatientsShow}
            />
        </>
    )
}


const mapStateToProps = (state) => ({
    menu: state.menu
})
export default connect(mapStateToProps)(DiaryPage)