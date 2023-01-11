import { useLoaderData } from 'react-router-dom';
import Body from '../../components/body';
import './styles.sass';

export function factsLoader() {
    return [
        {
            text: 'Собаки - это единственное животное, которое умеет следить за тем, куда смотрит человек, и использует это при взаимодействии с людьми.',
            img: 'https://proprikol.ru/wp-content/uploads/2020/02/porodistye-sobaki-krasivye-kartinki-19.jpg'
        },
        {
            text: 'Отпечатки носов собак уникальны - во всем мире не найдется двух одинаковых.',
            img: 'https://funik.ru/wp-content/uploads/2018/10/a2158910befacbdd595c.jpg'
        },
        {
            text: 'Собаки не любят дождь, потому что шум падающих капель вреден для их слуха',
            img: 'https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
        },
    ];
}

export default function Facts() {
    const data = useLoaderData() as any[];

    const getCards = () => {
        return data.map(fact => {
            return (
                <div className="-card">
                    <span>{fact.text}</span>
                    <img src={fact.img} />
                </div>
            )
        })
    }

    const page =
        <div id="facts">
            <div className="-info">
                <h1 className="-title">Интересные факты</h1>
                <div className="-text">
                    Они живут с нами бок о бок уже больше 30 тысяч лет. Мы заботимся о них, они любят и радуют нас.
                    Казалось бы, чего ещё мы о них не знаем?
                </div>
            </div>
            <div className="-cards">
                {getCards()}
            </div>
        </div>

    return <Body content={page} />
}
