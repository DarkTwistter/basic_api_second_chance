import Calendar from "../../components/body/main/calendar/Calendar";
import Categories from "../../components/body/main/categories/Categories";
import Ekaterinburg from "../../components/body/main/ekaterinburg/Ekaterinburg";
import Recommend from "../../components/body/main/recommend/Recommend";
import Soon from "../../components/body/main/soon/Soon";
import "./Main.scss"
import town from "../../imgs/town.png"
import Unusual from "../../components/body/main/unusual/Unusual";

const Main = () => {
    return (
        <div className="container">
            <div className="main">
                <Categories />
                <div className="main__picture">
                    <img src={town} alt="город храбрых" />
                </div>
                <Calendar />
                <Soon />
                <Ekaterinburg />
                <Recommend />
                <Unusual />
            </div>
        </div>

    );
};

export default Main;