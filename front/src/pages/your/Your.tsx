import Event from "../../components/body/events/event/Event";
import Categories from "../../components/body/main/categories/Categories"
import Filters from "../../components/body/your/filters/Filters"
import hockey from "../../imgs/hockey.png"
import cup from "../../imgs/cup.png"
import { useState, useEffect } from 'react'
import axios from "axios";
import "./Your.scss"
import { IEvent } from "../../models";

const Your = () => {
    const [events, setEvents] = useState<IEvent[]>([])

    async function getEvents() {
        const response = axios.get<[]>('http://51.250.68.99:5000/api/event', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJlbWFpbCI6ImFsZW5hQG1haWwucnUiLCJuYW1lIjoi0JDQu9GR0L3QsCIsInJvbGUiOiLQn9C-0LvRjNC30L7QstCw0YLQtdC70YwiLCJpYXQiOjE2OTE4OTQwNjN9.azUXyJNaPcUOybquMBTkOCXFscgyzkCtk_doFs7gM9s'
            }
        })
        let data = await response
        setEvents(data?.data)
        console.log(data?.data)
    }
    console.log(events)
    let elements = events.slice(1, 4).map(event => <Event event={event} />)
    useEffect(() => {
        getEvents()
    }, [])
    return (
        <div className="container">
            <div className="your">
                <Categories />
                <Filters />
                <div className="your__exhibition">
                    <h1>Выставки</h1>
                    <div className="your__exhibition__events">
                        {elements}
                    </div>
                </div>
                <div className="your__interesting">
                    <h1>Будет интересно</h1>
                    <div className="facts__pictures">
                    <div className="facts__pictures__item">
                        <img src={hockey} alt="hockey" />
                        <p>Прогнозы на игру "Авто"</p>
                    </div>
                    <div className="facts__pictures__item">
                        <img src={cup} alt="cup" />
                        <p>Кубок России</p>
                    </div>

                </div>
                </div>
            </div>
        </div>
    );
};

export default Your;