import React, { Component } from 'react'

const KCOPY = {
    title: '그 밖에 정보',
    food: {
        header: '저녁식사',
        desc: `저희 결혼식에서는 모든 하객분들께 저녁으로 안심스테이크와 몇 가지 간단한 음식들을 제공할 예정입니다. 스테이크를 못 드시거나 원치 않으시는 분들은 Alex와 Hanna에게 따로 연락주시면 감사하겠습니다.`
    },
    drinks: {
        header: '음료',
        desc: '저희는 간단한 음료(물/소다/커피/차)를 준비할 예정이며, 술은 와인과 샴페인만 제공할 예정입니다.'
    },
    parking: {
        header: '주차',
        desc: '결혼식장소 안에 넓은 주차공간이 준비되으니 다음 챠량을 위해 안쪽에 주차해주시기 바랍니다. 쉐어차량을 이용하시는 분들도 게이트에서 결혼식장소까지 거리가 있으니 주차장까지 들어와서 내리시기 바랍니다.'
    },
    etc: {
        header: '그 외 정보',
        desc: '저희 결혼식은 야외에서 진행되며 실내가 없습니다. 저녁에는 바닷바람으로 추울 수 있으니 겉옷을 지참하시기 바랍니다.'
    }
}

const ECOPY = {
    title: 'Other information',
    food: {
        header: 'Dinner',
        desc: `We're serving beef steak for our guests. If you're a vegetarian, please let Alex or Hanna know once you complete RSVP.`
    },
    drinks: {
        header: 'Beverage',
        desc: `Only wine, champagne and non-alcoholic beverages will be served during our reception.`
    },
    parking: {
        header: 'Parking',
        desc: `The venue has a huge self-parking area on site. Please make sure to be dropped off near the parking lot not at the front gate if you're riding Uber, otherwise there will be too much walking(or hiking) to enter the wedding area.`
    },
    etc: {
        header: 'Etc.',
        desc: `The venue is completely outside and there is no covered area. Oceanside weather in May can be unpredictable during nighttime, so bring a layer piece is recommended.`
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
                    <h3 className="title">{COPY.etc.header}</h3>
                    <p className="mb2">{COPY.etc.desc}</p>
                </div>
            </section>
        )
    }
}

export default Others