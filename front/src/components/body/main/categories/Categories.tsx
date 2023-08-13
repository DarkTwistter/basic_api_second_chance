import "./Categories.scss"
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';

const Categories = () => {
    /* let [active, setActive] = useState<IActive>({active: false}) */
    let [active, setActive] = useState<boolean>(false)
    console.log(active)
    return (
        <div >
            <div className="categories">
                <NavLink to="/your" className={`categories__link ${active && 'click'}`} onClick={() => setActive(active => !active)}>Для вас</NavLink>
                <NavLink to="/" className="categories__link">Будут популярны</NavLink>
                <NavLink to="/" className="categories__link">Кино</NavLink>
                <NavLink to="/" className="categories__link">Спорт</NavLink>
                <NavLink to="/" className="categories__link">Пушкинская карта</NavLink>
                <NavLink to="/" className="categories__link">Концерты</NavLink>
                <NavLink to="/" className="categories__link">Театр</NavLink>
                <NavLink to="/" className="categories__link">Хобби</NavLink>
                <p className="categories__link categories__link__yet">Еще</p>
            </div>
        </div>
    );
};

export default Categories;