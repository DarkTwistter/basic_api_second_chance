import "./Auth.scss"
import logo from '../../imgs/logo.png'
import mountains from '../../imgs/mountains.png'
import {useEffect, useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Auth = () => {
    const [email, setEmail] = useState<string>('alena@mail.ru')
    const [password, setPassword] = useState<string>('12345')
    let [token, setToken] = useState()
    let nav = useNavigate()

    const handleSubmit = async () => {
        const response = await axios.post<any>('http://51.250.68.99:5000/api/auth/login', {
            email,
            password
        },{
            headers: {
                'Content-Type': 'application/json',
            }
            
        })
        .then((response) => {
            console.log()
            localStorage.setItem('token', JSON.stringify(response.data.token))
            nav("/events")
        })

        

        /* let data = await response.json() */
        /* console.log(data) */
    }

    return (
        <div className="auth">
            <div className="auth__block">
                <div className="auth__block__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="auth__block__form">
                    <input placeholder="Логин" onChange={(e) => {
                        setEmail(e.target.value)
                    }} value={email}></input>
                    <input placeholder="Пароль" onChange={(e) => {
                        setPassword(e.target.value)
                    }} value={password}></input>
                </div>
                <div className="auth__block__buttons">
                    <button onClick={() => {
                        handleSubmit()
                    }} >Войти</button>
                    <button>Зарегистрироваться</button>
                    <p>Не помню пароль</p>
                </div>
            </div>
            <img src={mountains} alt="mountains" className="auth__mountains"/>
        </div>
    );
};

export default Auth;