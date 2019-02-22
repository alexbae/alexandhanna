import React, { Component } from 'react'

const KCOPY = {
    title: "선물",
    desc: "저희는 선물보다 하객들의 참석이 더 중요합니다."
}

const ECOPY = {
    title: "Registry",
    desc: "Please be aware that gifts are not necessary. Your presence is all that is required."
}

class Registry extends Component {
    render() {
        const COPY = this.props.isKor ? KCOPY : ECOPY

        return (
            <section>
                <div className="center tac">
                    <div className="hr" />
                    <h2 className="header">{COPY.title}</h2>
                    <p>{COPY.desc}</p>
                    <ul className="Registry-list">
                        <li>
                            <a href="https://www.amazon.com/wedding/junman-bae-hanna-kim-rancho-palos-verdes-may-2019/registry/3SEBCGSRDV3XL" target="_blank" rel="noopener noreferrer">
                                Amazon
                                <img className="icon-link" alt="link" src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.crateandbarrel.com/gift-registry/junman-bae-and-ha-na-ri-kim/r5928256" target="_blank" rel="noopener noreferrer">
                                Crate&Barrel
                                <img className="icon-link" alt="link" src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E" />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Registry