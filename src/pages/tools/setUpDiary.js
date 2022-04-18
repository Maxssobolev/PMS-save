import React, { useRef, useEffect, useState, forwardRef } from 'react'
import DatePicker from 'react-datepicker';
import SelectPatient from '../../components/SelectPatient/SelectPatient'
import Diary from '../../components/Diary/Diary';
import { datePickerCustomHeaderRender, simulateMouseClick } from '../../components/CommonUtils/CommonUtils';
import { ReactComponent as LeftPaginatonArrow } from '../../assets/img/icons/left-arrow-paginate.svg'
import { ReactComponent as RightPaginatonArrow } from '../../assets/img/icons/right-arrow-paginate.svg'
import CommonButton from '../../components/ButtonControllers/CommonButton';

export default function SetUpDiaryTools() {
    const calendar = useRef(null)
    const [todayButton, setTodayButton] = useState()
    const [prevButton, setPrevButton] = useState()
    const [nextButton, setNextButton] = useState()
    const [selectedDay, setSelectedDay] = useState(new Date())


    useEffect(() => {
        setPrevButton(document.querySelector('.fc-prev-button'))
        setNextButton(document.querySelector('.fc-next-button'))
        setTodayButton(document.querySelector('.fc-today-button'))
    }, [calendar])
    const [users, setUsers] = useState([
        { name: 'Select' },
        { name: 'Dan Pufulete' }
    ])
    const [selectUser, setSelectUser] = useState(users[0].name)
    const [events, setEvents] = useState([
        {
            id: 'a',
            title: 'room 2',
            start: '2021-09-15 12:00:00',
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
    //Меняем внешний вид поля DatePicker
    const CustomDatePickerField = forwardRef(({ value, onClick, addclass }, ref) => (
        <input className={`field field_datepicker  ${addclass}`} onClick={onClick} ref={ref} defaultValue={value} />
    ));
    return (
        <div className="setUpDiary">
            <section className="header-section">
                <h1 className="page-header">Set Up Diary</h1>
            </section>

            <div className="widget-block formSetup">
                <div className="flex mb mt">
                    <div className="flex">
                        <div className="field-wrapper">
                            <div className="field-wrapper">
                                <DatePicker
                                    className="field"
                                    selected={selectedDay}
                                    renderCustomHeader={datePickerCustomHeaderRender}
                                    onChange={(date) => setSelectedDay(date)}
                                    dateFormat="dd.MM.yyyy"
                                    customInput={<CustomDatePickerField />}
                                />
                                <span>Go to date:</span>
                            </div>
                        </div>
                        <div className="field-wrapper">
                            <div className="field-wrapper">
                                <SelectPatient
                                    onlySearch={true}
                                    change={(val) => setSelectUser(val)}
                                />
                                <span>Pick User:</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <CommonButton text="Add New Tome Scope" handler={() => { }} customClass="button_accent" />
                    </div>
                </div>
                <div className="controllers">
                    <div className="paginate">
                        <button type="button" onClick={() => { simulateMouseClick(prevButton); }}><LeftPaginatonArrow /></button>
                        <button type="button" onClick={() => { simulateMouseClick(nextButton); }}><RightPaginatonArrow /></button>
                        <div className="today" onClick={() => { simulateMouseClick(todayButton); }}>Today</div>
                    </div>
                </div>
            </div>

            <div className="widget-block">
                <Diary
                    calendarRef={calendar}
                    events={events}
                    initialDate={selectedDay}
                />
            </div>
        </div>
    );
}

