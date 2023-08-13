import "./Selects.scss"

interface SelectProps {
    label: string
}

const Select = (props: SelectProps) => {
    return (
        <div className="select">
            <input type="radio"></input>
            <label>{props?.label}</label>
        </div>
    );
};

export default Select;