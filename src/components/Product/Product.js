import React from 'react';
import "./Product.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Product = ({ id, title, image, price, rating, specification, detail }) => {
    return (
        <div>
            <div className="product">
                <div className="info">
                    <Link to={`/products/${id}`} className="title">
                        <p>{title}</p>
                    </Link>
                    <p className="price">
                        <strong>$</strong>
                        <strong>{price}</strong>
                    </p>
                    <div className="rating">
                        {Array(rating).fill().map((_, index) => <p key={index}>⭐</p>)}
                    </div>
                    </div>
                    <img src={image} alt="" />
                    <button>
                        <i>
                            <ShoppingCartIcon />
                        </i>
                        Add To Basket
                    </button>
            </div>
        </div>
    );
};


export default Product
