import '../styles.sass';
import {Link} from "react-router-dom";

import dogupImg from './images/dogsignup.png';
import Body from "../../../components/body";

export default function SignUp() {
    const page =
        <div id="sign">
            <div className="info">
                <h1>Спасибо за посещение!</h1>
                <img src={dogupImg} alt="Изображение собаки"/>
            </div>
            <div className="form">
                <form action="" method="post">
                    <h2>Регистрация</h2>
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
                    <button type="submit">Зарегистрироваться</button>
                </form>
                <div className="auth">
                    <p>Есть аккаунт?</p>
                    <Link to="/signin">
                        <a href="#">Войти</a>
                    </Link>
                </div>
            </div>
        </div>

    return (
        <Body content={page} />
    )
}