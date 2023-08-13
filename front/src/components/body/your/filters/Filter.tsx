import "./Filters.scss"

interface FilterProps {
    title: string
}

const Filter = (props: FilterProps) => {
    return (
        <div className="filter">
            <select>
                <option>{props.title}</option>
            </select>
        </div>
    );
};

export default Filter;