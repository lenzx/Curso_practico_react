import React from 'react';
import '../styles/OrderItem.scss';
import close from '@icons/icon_close.png'

const OrderItem = ({ product }) => {
	
	return (
		<div className="OrderItem">
			<figure>
				<img src={ product[0].images } alt={product[0].title} />
			</figure>
			<p>{product[0].title}</p>
			<p>${product[0].price}</p>
			<img src={close} alt="close" />
		</div>
	
	);
}

export default OrderItem;
