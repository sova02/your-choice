import '../styles.sass';
import {Link} from "react-router-dom";

import dogImg from './images/dogsignin.png';
import Body from "../../../components/body";

export default function SignIn() {
    const page =
        <div id="sign">
            <div className="info">
                <h1>Рады вас видеть снова</h1>
                <img src={dogImg} alt="Изображение собаки"/>
            </div>
            <div className="form">
                <form action="" method="post">
                    <h2>Вход</h2>
                    <div className="email">
                        <label>
                            <p>E-mail:</p>
                            <input type="email" name="email" className="input"/>
                        </label>
                    </div>
                    <div className="password">
                        <label>
                            <p>Пароль:</p>
                            <input type="password" name="password" className="input"/>
                        </label>
                    </div>
                    <button type="submit">Войти</button>
                </form>
                <div className="auth">
                    <p>Нет аккаунта?</p>
                    <Link to="/signup">
                        <a href="#">Зарегистрироваться</a>
                    </Link>
                </div>
            </div>
        </div>

    return (
        <Body content={page}/>
    )
}