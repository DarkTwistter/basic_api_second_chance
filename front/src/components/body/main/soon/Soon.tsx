import Event from "../../events/event/Event";
import { useState, useEffect } from 'react'
import axios from "axios";
import { AnyObject } from '@pbe/react-yandex-maps/typings/util/typing';
import "./Soon.scss"
import { IEvent } from "../../../../models";

const Soon = () => {
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
    let elements = events?.slice(0, 3).map(event => <Event event={event} />)
    useEffect(() => {
        getEvents()
    }, [])

    return (
        <div >
            <div className="soon">
                <h1>Скоро</h1>
                <div className="soon__events">
                    {elements}
                </div>

            </div>
        </div>
    );
};

export default Soon;