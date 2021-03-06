import React, { Component } from 'react'

class LinkList extends Component {
    render() {
        const {linkUrl, title} = this.props
        return (
            <li>
                {linkUrl 
                    ? (
                        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                            {title}
                            <img className="icon-link" alt="link" src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22%3E %3Cpath fill=%22%23fff%22 stroke=%22%2336c%22 d=%22M1.5 4.518h5.982V10.5H1.5z%22/%3E %3Cpath fill=%22%2336c%22 d=%22M5.765 1H11v5.39L9.427 7.937l-1.31-1.31L5.393 9.35l-2.69-2.688 2.81-2.808L4.2 2.544z%22/%3E %3Cpath fill=%22%23fff%22 d=%22M9.995 2.004l.022 4.885L8.2 5.07 5.32 7.95 4.09 6.723l2.882-2.88-1.85-1.852z%22/%3E %3C/svg%3E" />
                        </a>

                    ) : (
                        <span>{title}</span>
                    )
                }
            </li>
        )
    }
}

export default LinkList