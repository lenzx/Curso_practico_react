import React, {useContext} from 'react';
import '../styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import AddCart from '@icons/bt_add_to_cart.svg'

const ProductItem = ({product}) => {
	const {addToCart} = useContext(AppContext)
	const handleCart = (item) => {
		addToCart([item]);
		console.log(addToCart([item]))
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title}/>
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={()=> {handleCart(product)}}>
					<img src={AddCart}alt="" />
				</figure>
				
			</div>
		</div>
	);
}

export default ProductItem;
