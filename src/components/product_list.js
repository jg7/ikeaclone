import React from 'react'
import product_card from "../data/product_data";

const MainContent = () => {
    const listItems = product_card.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} alt="" />
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price"><span>{item.currency}</span>{item.price}</p>
                <div className="btn">Add to cart</div>
            </div>
        </div>
    );

    return (
        <div>
            <div className="main_text">
                <h1>BILLY series</h1>
                <br></br>
                <br></br>
                <h2>A Dream Come True For Book Lovers</h2>
                <br></br>
                <br></br>
                <p className="main_para">Give your favourite novels home with the bookcases and storage units from our BILLY series.
                We’ve created it to be highly-customisable. Need to store small paperbacks and large trophies?
                Just adjust the shelves! Made a trip to the bookstore again? Add more units for your growing collection.
                Get our BILLY / OXBERG combo to de-clutter your living room, add a personal touch to your space with the BILLY /
                MORLIDEN or choose the BILLY / BOTTNA to display those rare first editions - the classics for your classics!
                </p>
            </div>
            <div>
                <nav>
                    <ul>
                        <li className="btn-1">Content</li>
                        <li className="btn-1">Sort</li>
                        <li className="btn-1">Size</li>
                        <li className="btn-1">Color</li>
                        <li className="btn-1">Category</li>
                        <li className="btn-1">Material</li>
                        <li className="btn-1">Price</li>
                    </ul>
                </nav>
            </div>
            <br></br>
            <hr></hr>
            <div className="main_content">
                {listItems}
            </div>
        </div>
    )
}
export default MainContent;
