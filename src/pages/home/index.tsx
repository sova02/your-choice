import './styles.sass';
import Body from "../../components/body";
import {Link} from "react-router-dom";

import dogImage from './images/dog.png';
import buttonMoreImage from './images/button_more.png';

export default function Home() {
    const page =
        <div className="home">
            <div className="-image">
                <img src={dogImage} alt="Собака" />
            </div>
            <div className="-texts">
                <h1 className="-title">ТВОЙ ВЫБОР</h1>
                <p className="-text">
                    Готовы взять домой собаку, но не уверены, какая порода лучше всего подходит вам и вашей семье?
                    Специально
                    для вас мы создали библиотеку пород.
                </p>
                <div className="-more">
                    <Link to="/categories">
                        <a href="#">Подобрать</a>
                    </Link>
                    <img src={buttonMoreImage} alt="Подобрать" />
                </div>
            </div>
        </div>

    return (
        <Body content={page} />
    )
}
