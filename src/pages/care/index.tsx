import './styles.sass';
import Body from "../../components/body";

import carewoolImg from "../care/images/carewool.png";
import swimmingImg from "../care/images/swimming.png";
import careteethImg from "../care/images/careteeth.png";
import careclawImg from "../care/images/careclaw.png";

const Images = {
    'carewool': carewoolImg,
    'swimming': swimmingImg,
    'careteeth': careteethImg,
    'careclaw': careclawImg,
}

import { useLoaderData } from 'react-router-dom';

export function careLoader() {
    return [
        { title: 'Уход за шерстью', img: 'carewool', text: 'Если ваша собака — представитель длинношерстной породы, ее стоит расчесывать каждые два-три дня с помощью специальной расчески. Короткошерстных собак можно чесать раз в неделю в период линьки и два-три раза в месяц — между ними. Расчесывая питомца, обращайте внимание на состояние кожи.' },
        { title: 'Купание', img: 'swimming', text: 'Делать это рекомендуется по мере необходимости. Приобретите специальный шампунь для собак, поскольку остальные средства могут вызывать раздражение и аллергическую реакцию.' },
        { title: 'Уход за зубами', img: 'careteeth', text: 'Уход за зубами собаки подразумевает регулярную чистку с помощью специальной зубной пасты. Также помогут избавиться от налета и твердые лакомства для животных.' },
        { title: 'Уход за когтями', img: 'careclaw', text: 'Особое внимание стоит уделять когтям питомца, особенно если вы владелец декоративной породы или карликовой собаки, у которых они быстро отрастают. Стричь когти желательно у специалиста, поскольку это достаточно травмоопасный процесс.' },
    ]
}

export default function Care() {
    const data = useLoaderData() as any[];

    const getCards = () => {
        return data.map(card => {
            return (
                <div className="-card">
                    <div className="text-title">
                        {card.title}
                    </div>
                    <img src={Images[card.img]} alt="Изображение собаки" className="-photo"/>
                    <div className="-box">
                        <div className="text">
                            {card.text}
                        </div>
                    </div>
                </div>
            )
        });
    }

    const page =
        <div className="care">
            <div className="-info">
                <h1 className="-title">Уход за питомцем</h1>
                <div className="-text">Каждая порода уникальна и, чтобы правильно ухаживать за собакой, необходим индивидуальный подход.
                    Кончено, есть и основные принципы ухода, одинаково необходимые как шпицу, так и ирландскому догу.
                </div>
            </div>
            <div className="-breeds">
                <div className="-breed">
                    {getCards()}
                </div>
            </div>
        </div>


    return (
        <Body content={page}/>
    )
}