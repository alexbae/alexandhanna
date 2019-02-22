import React, { Component } from 'react'

const KCOPY = {
    title: '그 밖에 정보',
    food: {
        header: '음식',
        desc: `저희 결혼식에서는 모든 하객분들께 저녁으로 안심스테이크와 몇 가지 간단한 음식들을 제공할 예정입니다. 스테이크를 못 드시거나 원치 않으시는 분들은 Alex와 Hanna에게 따로 연락주시면 감사하겠습니다.`
    },
    drinks: {
        header: '음료',
        desc: '저희는 간단한 음료(물/소다/커피/차)를 준비할 예정이며, 술은 와인과 샴페인만 제공할 예정입니다. 저희는 결혼식 후 뒷풀이를 따로 예정 중이니 많이 참석하여주시기 바랍니다.'
    },
    parking: {
        header: '주차',
        desc: '결혼식장소 안에 넓은 주차공간이 준비되으니 다음 챠량을 위해 안쪽에 주차해주시기 바랍니다. 쉐어차량을 이용하시는 분들도 주차장까지 들어와서 내리시기 바랍니다.'
    },
    schedule: {
        header: '스케쥴',
        list: [
            '결혼식 - 4시',
            '칵테일 - 5시',
            '저녁식사 - 6시',
            '퇴장 - 9시',
            '뒷풀이 - 11시'
        ]
    },
    etc: {
        header: '그 외 정보',
        desc: '저녁에는 바닷바람으로 추울 수 있으니 겉옷을 지참하시기 바랍니다.'
    }
}

const ECOPY = {
    title: 'Other information',
    food: {
        header: 'Foods',
        desc: `We will serve beef steaks for everyone. Our chief name is Dora. If you don't want steak, please let Alex and Hanna know.`
    },
    drinks: {
        header: 'Beverage',
        desc: `We will provide wine and champagne during our wedding. We are planning to after party, please join us and congratulate to us.`
    },
    parking: {
        header: 'Parking',
        desc: 'Venue has a huge parking lot on the site and share car also park inside parking lot please.'
    },
    schedule: {
        header: 'Schedule',
        list: [
            'Ceremony - 4pm',
            'Cocktail hour - 5pm',
            'Dinner - 6pm',
            'Reception ends - 9pm',
            'after party - 11pm'
        ]
    },
    etc: {
        header: 'Etc.',
        desc: 'We are suggesting bring a coat/jacket for protect yourself from sea breeze at night time.'
    }
}

class Others extends Component {
    render() {
        const COPY = this.props.isKor ? KCOPY : ECOPY

        return (
            <section>
                <div className="center tac">
                    <div className="hr" />
                    <h2 className="header">{COPY.title}</h2>
                    <h3 className="title">{COPY.food.header}</h3>
                    <p className="mb2">{COPY.food.desc}</p>
                    <h3 className="title">{COPY.drinks.header}</h3>
                    <p className="mb2">{COPY.drinks.desc}</p>
                    <h3 className="title">{COPY.parking.header}</h3>
                    <p className="mb2">{COPY.parking.desc}</p>
                    <h3 className="title">{COPY.schedule.header}</h3>
                    <ul>
                        {COPY.schedule.list.map((list, idx) => {
                            return <li key={idx}>{list}</li>
                        })}
                    </ul>
                    <h3 className="title">{COPY.etc.header}</h3>
                    <p className="mb2">{COPY.etc.desc}</p>
                </div>
            </section>
        )
    }
}

export default Others