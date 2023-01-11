import './styles.sass';
import Body from "../../components/body";

import hearthImg from "../morewatchdogs/images/heartcard.png";
import { useLoaderData } from 'react-router-dom';

const CATEGORIES_DATA = {
    'watchdogs': {
        title: 'Сторожевые',
        dogs: [
            { name: 'Акита-ину', img: 'https://i.pinimg.com/564x/0d/ff/b0/0dffb0d42cf7cb7816180ebb52ac1f75.jpg' },
            { name: 'Ка де бо', img: 'https://i.pinimg.com/564x/11/c0/3e/11c03e8257d912bdfab139fe6351163d.jpg' },
            { name: 'Немецкий дог', img: 'https://i.pinimg.com/564x/6a/73/16/6a731653859357fcaf8169dc3237143a.jpg' },
            { name: 'Ротвейлер', img: 'https://i.pinimg.com/564x/83/bf/44/83bf4452faed2e6ab11dcd1b7dd0f6cc.jpg' },
        ]
    },
    'hunting': {
        title: 'Охотничьи',
        dogs: [
            { name: 'Бассет-хаунд', img: 'https://i05.fotocdn.net/s121/5598fa3d49add9d1/public_pin_l/2756329948.jpg' },
            { name: 'Бассенджи', img: 'http://www.basenji.permp.ru/photo/709.jpg' },
            { name: 'Английский сеттер', img: 'http://www.noahsdogs.com/m/photos/get_image/file/9838cba60e15c9276a020f01c4697283.jpg' },
            { name: 'Ротвейлер', img: 'https://i.pinimg.com/originals/63/79/a2/6379a23673422c70c109e62c2b0725ba.jpg' },
        ]
    },
    'pastoral': {
        title: 'Пастушьи',
        dogs: [
            { name: 'Австралийская овчарка', img: 'https://aussie-info.ru/ph/24321-0.jpg' },
            { name: 'Бобтейл', img: 'http://www.griland.ru/wp-content/uploads/2017/05/IMG_6153.jpg' },
            { name: 'Бордер колли', img: 'https://kartinkin.net/pics/uploads/posts/2022-09/1663661810_64-kartinkin-net-p-metis-kolli-i-ovcharki-pinterest-64.jpg' },
            { name: 'Самоед', img: 'https://pettime.net/wp-content/uploads/2021/04/Samoyed-39.jpg' },
        ]
    },
    'fighting': {
        title: 'Бойцовские',
        dogs: [
            { name: 'Американский булли', img: 'http://static.wixstatic.com/media/f4205a_f63336d1aa1349e09437b494d4de71e7~mv2.jpg' },
            { name: 'Аргентинский дог', img: 'https://i.pinimg.com/564x/c8/17/cc/c817cc60308b26db711206e02eddfd42.jpg' },
            { name: 'Бультерьер', img: 'https://i.pinimg.com/564x/2b/f9/95/2bf995fca9c09e9b5d2e465519135789.jpg' },
            { name: 'Питбуль', img: 'https://i.pinimg.com/564x/8e/58/30/8e583072e2ef7439f871d2e71f8bfc94.jpg' },
        ]
    },
    'greyhounds': {
        title: 'Борзые',
        dogs: [
            { name: 'Акита-ину', img: 'http://static.wixstatic.com/media/f4205a_f63336d1aa1349e09437b494d4de71e7~mv2.jpg' },
            { name: 'Акита-ину', img: 'http://static.wixstatic.com/media/f4205a_f63336d1aa1349e09437b494d4de71e7~mv2.jpg' },
            { name: 'Акита-ину', img: 'http://static.wixstatic.com/media/f4205a_f63336d1aa1349e09437b494d4de71e7~mv2.jpg' },
            { name: 'Акита-ину', img: 'http://static.wixstatic.com/media/f4205a_f63336d1aa1349e09437b494d4de71e7~mv2.jpg' },
        ]
    },
    'hounds': {
        title: 'Гончие',
        dogs: [
            { name: 'Акита-ину', img: 'http://static.wixstatic.com/media/f4205a_f63336d1aa1349e09437b494d4de71e7~mv2.jpg' },
            { name: 'Акита-ину', img: 'http://static.wixstatic.com/media/f4205a_f63336d1aa1349e09437b494d4de71e7~mv2.jpg' },
            { name: 'Акита-ину', img: 'http://static.wixstatic.com/media/f4205a_f63336d1aa1349e09437b494d4de71e7~mv2.jpg' },
            { name: 'Акита-ину', img: 'http://static.wixstatic.com/media/f4205a_f63336d1aa1349e09437b494d4de71e7~mv2.jpg' },
        ]
    },
    'cops': {
        title: 'Легавые',
        dogs: [
            { name: 'Акита-ину', img: 'http://static.wixstatic.com/media/f4205a_f63336d1aa1349e09437b494d4de71e7~mv2.jpg' },
            { name: 'Акита-ину', img: 'http://static.wixstatic.com/media/f4205a_f63336d1aa1349e09437b494d4de71e7~mv2.jpg' },
            { name: 'Акита-ину', img: 'http://static.wixstatic.com/media/f4205a_f63336d1aa1349e09437b494d4de71e7~mv2.jpg' },
            { name: 'Акита-ину', img: 'http://static.wixstatic.com/media/f4205a_f63336d1aa1349e09437b494d4de71e7~mv2.jpg' },

        ]
    },
    'decorative': {
        title: 'Декоративные',
        dogs: [
            { name: 'Акита-ину', img: 'http://static.wixstatic.com/media/f4205a_f63336d1aa1349e09437b494d4de71e7~mv2.jpg' },
            { name: 'Акита-ину', img: 'http://static.wixstatic.com/media/f4205a_f63336d1aa1349e09437b494d4de71e7~mv2.jpg' },
            { name: 'Акита-ину', img: 'http://static.wixstatic.com/media/f4205a_f63336d1aa1349e09437b494d4de71e7~mv2.jpg' },
            { name: 'Акита-ину', img: 'http://static.wixstatic.com/media/f4205a_f63336d1aa1349e09437b494d4de71e7~mv2.jpg' },
        ]
    },
}

export function moreWatchdogsLoader({ params }) {
    console.log(params)
    return CATEGORIES_DATA[params.id];
}

export default function MoreWatchdogs() {
    const data = useLoaderData() as {
        title: string,
        dogs: any[]
    };

    const getDogs = () => {
        return data.dogs.map(dog => {
            return (
                <div className="-card">
                    <img src={dog.img} alt="Фото " className="photo"/>
                    <div className="box">
                        <div className="text">{dog.name}</div>
                        <a href="#">
                            <img src={hearthImg} alt="Добавить в избранное"/>
                        </a>
                    </div>
                </div>
            )
        });
    }

    const page =
        <div id="morewatchdogs">
            <div className="-info">
                <h1 className="-title">Категории собак</h1>
                <div className="-text">Особенности породы и характер щенка, состояние здоровья - какие вопросы следует
                    задать себе, прежде чем забрать питомца домой?
                </div>
            </div>
            <div className="-breeds">
                <h1>{data.title}</h1>
                <div className="-breed">
                    {getDogs()}
                </div>
            </div>
        </div>


    return (
        <Body content={page}/>
    )
}