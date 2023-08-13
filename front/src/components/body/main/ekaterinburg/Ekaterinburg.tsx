import "./Ekaterinburg.scss"
import ekaterinburg1 from "../../../../imgs/ekaterinburg1.png"
import ekaterinburg2 from "../../../../imgs/ekaterinburg2.png"

const Ekaterinburg = () => {
    return (
        <div>
            <div className="ekat">
                <h1>Екатеринбург 300</h1>
                <div className="ekat__pictures">
                    <img src={ekaterinburg1} alt="ekaterinburg1" />
                    <img src={ekaterinburg2} alt="ekaterinburg2" />
                </div>
            </div>
        </div>
    );
};

export default Ekaterinburg;