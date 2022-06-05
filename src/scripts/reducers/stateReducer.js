const getItemStock = (state, { targetId }) => {
	const { products } = state;
	return products.filter(item => targetId === item.id)[0].stock;
}

const getItemFromCart = (state, { targetId }) => {
	const { cart } = state;
	return cart.filter(item => targetId === item.id)[0];
}

const getItemFromProducts = (state, { targetId }) => {
	const { products } = state;
	return products.filter(item => targetId === item.id)[0];
}

const isItemExistsFromCart = (state, { cartItemId }) => {
	return [...state.cart].some((item) => item.id === cartItemId);
}

// increment num of items as a value
// of property in an array object
const incrementItem = (state, payload) => {
	const { targetId, targetQty } = payload;
	const copiedArray = [...state.cart];
	const stock = getItemStock(state, { targetId });
	const updatedProducts = copiedArray.map((product) => {
		const { quantity } = product;

		//requirements for pass validation to update quantity
		const isIdMatched = product.id === targetId;
		const isStockMoreThanQty = stock > quantity;
		const isTargetQtyValid = stock >= targetQty || 1;

		if (isIdMatched && isStockMoreThanQty && isTargetQtyValid) {
			return {
				...product,
				quantity: quantity + (targetQty || 1),
			};
		}
		return product;
	});
	return { ...state, products: updatedProducts }
}

// decrement num of items as a value
// of property in an array object
const decrementItem = (state, payload) => {
	const { targetId, targetQty } = payload;
	const copiedArray = [...state.cart];
	const stock = getItemStock(state, { targetId });
	const updatedProducts = copiedArray.map((product) => {
		const { quantity } = product;

		//requirements for pass validation to update quantity
		const isIdMatched = product.id === targetId;
		const isStockMoreThanQty = stock > quantity;
		const isTargetQtyValid = stock >= targetQty || 1;
		if (isIdMatched && isStockMoreThanQty && isTargetQtyValid) {
			return {
				...product,
				quantity: quantity - (targetQty || 1),
			};
		}
		return product;
	});
	return { ...state, products: updatedProducts }
}



const addItemToCart = (state, { itemId, targetQty }) => {
	const { quantity } = getItemFromCart(state, { itemId });
	const {
		thumbnail,
		title,
		price,
		discount,
		stock,
	} = getItemFromProducts(state, { itemId });
	if (stock > quantity) {
		// increment quantity if this item is in cart already
		if (isItemExistsFromCart(state, { itemId })) {
			return incrementItem(state, { itemId, targetQty });
		} else {
			// add cart item object to the cart array
			const copiedCartArr = [...state.cart];
			const cartItemProps = {
				thumbnail,
				title,
				price,
				discount,
				stock,
			};
			return { ...state, cart: copiedCartArr.concat([cartItemProps]) }
		}
	}
}

// decrement one quantity of item from cart
const removeItemFromCart = (state, { itemId, targetQty }) => {
	if (!isItemExistsFromCart(state, { itemId })) return;
	return decrementItem(state, { itemId, targetQty });
}

// remove one specific item from cart ignoring the quantities
const removeItemsFromCart = (state, { cartItemId }) => {
	const filteredArr = [...state.cart].filter((item) => {
		return item.id !== cartItemId;
	})
	return { ...state, cart: filteredArr };
}

// directly change the cart item quantity by user's choosing
const setCartItemQty = (state, { cartItemId, quantity }) => {
	const updatedCartItems = [...state.cart].map((item) => {
		return item.id !== cartItemId ? { ...item, quantity } : item;
	})
	return { ...state, cart: updatedCartItems }
}

// initialize products
const initProducts = (state, products) => ({ ...state, products });

export const stateReducer = (state, action) => {
	switch (action.type) {
		case 'initProducts':
			return initProducts(action.payload);
		case 'addToCart':
			return addItemToCart(state, action.payload);
		case 'setCartItemQty':
			return setCartItemQty(state, action.payload);
		case 'removeItemFromCart':
			return removeItemFromCart(state, action.payload);
		case 'removeItemsFromCart':
			return removeItemsFromCart(state, action.payload);
		case 'removeEverythingFromCart':
			return { ...state, cart: [] };
		default:
			throw new Error('The passed action type is not recognized');
	}
}