import Filter from "./Filter";
import "./Filters.scss"

const Filters = () => {
    return (
        <div className="">
            <div className="filters">
                <Filter title="Категория" />
                <Filter title="Цена" />
                <Filter title="Жанр" />
                <Filter title="Место" />
            </div>
        </div>
    );
};

export default Filters;