import React, {FC} from 'react';

import './ProductCard.css'
import {Link} from "react-router-dom";

interface productCardState {
    id: string
    image: string;
    title: string;
    price: number;
}

const ProductCard: FC<productCardState> = ({image, title, price, id}) => {
    return (
        <Link to={`/product/${id}`}>
        <div className="productCard">
            <img src={image} alt={title}/>
            <h4>{title}</h4>
            <span>{`$${price}`}</span>
        </div>
        </Link>
    );
};

export default ProductCard;