import Select from "./Select";
import "./Selects.scss"

const Selects = () => {
    return (
        <div className="">
            <div className="selects">
                <div className="container">
                <div className="selects__search">
                    <h1>Что ты ищешь?</h1>
                    <p>Выбери цель, с которой ты зашел к нам в сервис</p>
                    <div className="selects__search__block">
                        <Select label="Найти друзей"/>
                        <Select label="Ищу любовь"/>
                        <Select label="Распиарить свой бренд"/>
                        <Select label="В поисках нового хобби"/>
                        <Select label="Хочу узнать Екб получше"/>
                        <Select label="Искать новый досуг"/>
                    </div>
                </div>
                <div className="selects__interesting">
                    <h1>Что тебе интересно?</h1>
                    <p>Выбери как минимум 3 категории, которые больше всего тебе интересны. Исходя из ответов мы составим подборку персонально для тебя!</p>
                    <div className="selects__interesting__block">
                        <Select label="Образование"/>
                        <Select label="Культура"/>
                        <Select label="Благотворительность"/>
                        <Select label="Образование"/>
                        <Select label="Культура"/>
                        <Select label="Благотворительность"/>
                        <Select label="Образование"/>
                        <Select label="Культура"/>
                        <Select label="Благотворительность"/>
                        <Select label="Образование"/>
                        <Select label="Культура"/>
                        <Select label="Благотворительность"/>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Selects;