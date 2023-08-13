import "./Facts.scss"
import palace from "../../../../imgs/palace.png"
import clava from "../../../../imgs/clava.png"

const Facts = () => {
    return (
        <div className="container">
            <div className="facts">
                <h1>Факты</h1>
                <div className="facts__pictures">
                    <div className="facts__pictures__item">
                        <img src={palace} alt="palace" />
                        <p>Основание Екатеринбурга</p>
                    </div>
                    <div className="facts__pictures__item">
                        <img src={clava} alt="clava" />
                        <p>Знаменитости</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Facts;