import './styles.sass';
import Body from "../../components/body";
import {Link} from "react-router-dom";

import watchdogsImg from './images/watchdogs.png';
import huntingImg from './images/hunting.png';
import pastoralImg from './images/pastoral.png';
import fightingImg from './images/fighting.png';
import greyhoundsImg from './images/greyhounds.png';
import houndsImg from './images/hounds.png';
import copsImg from './images/cops.png';
import decorativeImg from './images/decorative.png';

export default function Categories() {
    const page =
        <div id="categories">
            <div className="-info">
                <h1 className="-title">Категории собак</h1>
                <div className="-text">Особенности породы и характер щенка, состояние здоровья - какие вопросы следует
                    задать себе, прежде чем забрать питомца домой?
                </div>
            </div>
            <div className="-categories">
                <Link to="/categories/watchdogs">
                    <a href="#" className="-description">
                        <img src={watchdogsImg} alt=""/>
                    </a>
                </Link>
                <Link to="/categories/hunting">
                    <a href="#" className="-description">
                        <img src={huntingImg} alt=""/>
                    </a>
                </Link>
                <Link to="/categories/pastoral">
                    <a href="#" className="-description">
                        <img src={pastoralImg} alt=""/>
                    </a>
                </Link>
                <Link to="/categories/fighting">
                    <a href="#" className="-description">
                        <img src={fightingImg} alt=""/>
                    </a>
                </Link>
                <Link to="/categories/greyhounds">
                    <a href="#" className="-description">
                        <img src={greyhoundsImg} alt=""/>
                    </a>
                </Link>
                <Link to="/categories/hounds">
                    <a href="#" className="-description">
                        <img src={houndsImg} alt=""/>
                    </a>
                </Link>
                <Link to="/categories/cops">
                    <a href="#" className="-description">
                        <img src={copsImg} alt=""/>
                    </a>
                </Link>
                <Link to="/categories/decorative">
                    <a href="#" className="-description">
                        <img src={decorativeImg} alt=""/>
                    </a>
                </Link>

            </div>

        </div>


    return (
        <Body content={page}/>
    )
}