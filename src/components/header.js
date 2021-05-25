import React from 'react'

export default function Header() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src="./images/ikea-logo.svg" alt="ikea logo"></img>
                </div>
                <ul>
                    <li>Products</li>
                    <li>Rooms</li>
                    <li>Deals</li>
                </ul>
                <div className="search">
                    <input placeholder="What are you looking for?">
                    </input>
                </div>
            </nav>
            <h4>Series  > BILLY</h4>
            <hr></hr>
        </div>
    )
}
