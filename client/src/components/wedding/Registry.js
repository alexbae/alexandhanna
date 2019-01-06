import React, { Component } from 'react'

class Registry extends Component {
    render() {
        return (
            <section>
                <div className="center">
                    <div className="hr" />
                    <h2 className="header">Registry</h2>
                    <p>
                        Please be aware that gifts are not necessary. Your presence is all that is required. However, for your convenience Hanna Kim and Alex Bae have prepared a gift registry.
                    </p>
                    <ul className="Registry-list">
                        <li>
                            <a href="https://www.amazon.com/wedding/junman-bae-hanna-kim-rancho-palos-verdes-may-2019/registry/3SEBCGSRDV3XL" target="_blank" rel="noopener noreferrer">Amazon</a>
                        </li>
                        <li>
                            <a href="https://www.crateandbarrel.com/gift-registry/junman-bae-and-ha-na-ri-kim/r5928256" target="_blank" rel="noopener noreferrer">Crate&Barrel</a>    
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Registry