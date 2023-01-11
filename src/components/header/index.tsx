import './styles.sass';
import {Link} from "react-router-dom";

import logoImg from './images/logo.png';
import userImg from './images/user.png';
import heartImg from './images/heart.png';
import userlinkImg from './images/userlink.png';

function Header() {
    return (
        <div id="header">
            <div className="-logo">
                <Link to="/">
                    <a href="#">
                        <img src={logoImg} alt="Логотип" />
                    </a>
                </Link>
            </div>
            <nav className="-menu">
                <ul>
                    <Link to="/categories">
                        <li>
                            <a href="#">Категории</a>
                        </li>
                    </Link>
                    <Link to="/care">
                        <li>
                            <a href="#">Уход</a>
                        </li>
                    </Link>
                    <Link to="/facts">
                        <li>
                            <a href="#">Интересные факты</a>
                        </li>
                    </Link>
                </ul>
            </nav>
            <div className="-heart">
                <Link to="/#">
                    <a href="#">
                        <img src={heartImg} alt="Избранное"/>
                    </a>
                </Link>
            </div>
            <div className="-user">
                <Link to="/signin">
                    <a href="#">
                        <img src={userImg} alt="Персональный кабинет" />
                    </a>
                </Link>
            </div>
            <div className="-userlink">
                <Link to="/signin">
                    <a href="#">
                        <img src={userlinkImg} alt="Личный кабинет" />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Header;