import Categories from "../../components/body/main/categories/Categories"
import Facts from "../../components/body/start/facts/Facts";
import Idea from "../../components/body/start/idea/Idea";
import Poster from "../../components/body/start/poster/Poster";
import "./Start.scss"

const Start = () => {
    return (
        <div>
            <div className="start">
                <Poster />
                <Facts />
                <Idea />
            </div>
        </div>
    );
};

export default Start;