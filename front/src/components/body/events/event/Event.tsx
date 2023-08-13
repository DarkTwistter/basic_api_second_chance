import { NavLink } from "react-router-dom";
import './Event.scss'
import monetochka from '../../../../imgs/monetochka.png'
import heart from '../../../../imgs/heart.svg'
import { IEvent } from "../../../../models";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { AnyObject } from "@pbe/react-yandex-maps/typings/util/typing";

interface EventProps {
    event: IEvent
}

interface IUser {
    user_id: number
    email: string
    name: string
    role: string
    iat: string
}

const Event = (props: EventProps) => {
    console.log(props)
    let token = String(localStorage?.getItem("token"))
    const user = jwt_decode<IUser>(token)
console.log(user)
    /* const handleClick = async () => {
        const response = await axios.post<any>(`http://51.250.68.99:5000/api/favourites/add/${user.user_id}`, {
            event_id: props.event.event_id,
        },{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage?.getItem("token")
            }
            
        })
    } */
    return (
        <NavLink to="/event" className="event" state={props.event}>
            <div className="event__top">
                <img src={monetochka} alt='monetochka'/>
                <img src={heart} alt='heart' className="event__top__heart" /* onClick={() => handleClick()} *//>
            </div>
            <div className="event__bottom">
                <div className="event__bottom__name">{props?.event?.name}</div>
                <div className="event__bottom__date">{props?.event?.date}</div>
                <div className="event__bottom__price">{props?.event?.price}</div>
                <div className="event__bottom__place">{props?.event?.place}</div>
            </div>
        </NavLink>
    );
};

export default Event;