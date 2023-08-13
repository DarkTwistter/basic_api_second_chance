import "./Unusual.scss"
import unusual1 from "../../../../imgs/unusual1.png"
import unusual2 from "../../../../imgs/unusual2.png"

const Unusual = () => {
    return (
        <div>
            <div className="unusual">
                <h1>Необычное</h1>
                <div className="unusual__pictures">
                    <div className="unusual__pictures__item">
                        <img src={unusual1} alt="unusual1" />
                        <div className="unusual__pictures__item__text">
                            <h3>Новые ощущения</h3>
                            <p>Если хочешь пощекотать нервы</p>
                        </div>
                    </div>
                    <div className="unusual__pictures__item">
                        <img src={unusual2} alt="unusual2" />
                        <div className="unusual__pictures__item__text">
                            <h3>Образование</h3>
                            <p>Посети мастер-класс по ремеслу, которое давно тебя привлекало</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Unusual;
