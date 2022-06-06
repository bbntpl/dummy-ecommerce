const getItemFromCart = (state, { targetId }) => {
	const copiedArr = [...state.cart];
	if (!copiedArr.length) return 0;
	const filteredCart = copiedArr.filter(item => targetId === item.id);
	return filteredCart.length ? filteredCart : 0;
}

const getItemFromProducts = (state, { targetId }) => {
	const copiedArr = [...state.products];
	return copiedArr.filter(item => targetId === item.id)[0];
}

const getItemStock = (state, { targetId }) => {
	return getItemFromProducts(state, { targetId }).stock || 0;
}

const getCartItemQty = (state, { targetId }) => {
	const { quantity } = getItemFromCart(state, { targetId });
	return quantity ? quantity : 0;
}

const isItemExistsFromCart = (state, { targetId }) => {
	return [...state.cart].some((item) => item.id === targetId);
}

// increment the quantity of item from cart
const incrementItem = (state, payload) => {
	const { targetId, targetQty } = payload;
	const copiedArray = [...state.cart];
	const stock = getItemStock(state, { targetId });
	const updatedCart = copiedArray.map((product) => {
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
	return { ...state, cart: updatedCart }
}

// increment the quantity of item from cart
const decrementItem = (state, payload) => {
	const { targetId, targetQty } = payload;
	const copiedArray = [...state.cart];
	const stock = getItemStock(state, { targetId });
	const updatedCart = copiedArray.map((product) => {
		const { quantity } = product;

		//requirements for pass validation to update quantity
		const isIdMatched = product.id === targetId;
		const isStockMoreThanQty = stock > quantity;
		const isTargetQtyValid = stock >= targetQty || 1;
		if (isIdMatched && isStockMoreThanQty && isTargetQtyValid) {
			return { ...product, quantity: quantity - (targetQty || 1) };
		}
		return product;
	});
	return { ...state, cart: updatedCart }
}

const addObjItemToCart = (state, cartItemObj) => {
	const copiedCartArr = [...state.cart];
	const cartItemObjWithQty = { ...cartItemObj, quantity: 1 }
	const updatedCartArr = copiedCartArr.concat([cartItemObjWithQty]);
	return { ...state, cart: updatedCartArr };
}

const addItemToCart = (state, { targetId, targetQty }) => {
	const quantity = getCartItemQty(state, { targetId });
	const {
		thumbnail,
		title,
		price,
		discountPercentage,
		stock,
		id,
	} = getItemFromProducts(state, { targetId });
	if (stock > quantity) {
		// increment quantity if this item is in cart already
		if (isItemExistsFromCart(state, { targetId })) {
			return incrementItem(state, { targetId, targetQty });
		} else {
			const cartItemProps = {
				thumbnail,
				title,
				price,
				discountPercentage,
				stock,
				id,
			};
			return addObjItemToCart(state, cartItemProps)
		}
	}
}

// decrement one quantity of item from cart
const decrementItemQty = (state, { targetId, targetQty }) => {
	if (!isItemExistsFromCart(state, { targetId })) return;
	return decrementItem(state, { targetId, targetQty });
}

// remove one specific item from cart ignoring the quantities
const removeItemFromCart = (state, { targetId }) => {
	const filteredArr = [...state.cart].filter((item) => {
		return item.id !== targetId;
	})
	return { ...state, cart: filteredArr };
}

// directly change the cart item quantity by user's choosing
const setCartItemQty = (state, { targetId, quantity }) => {
	const updatedCartItems = [...state.cart].map((item) => {
		return item.id !== targetId ? { ...item, quantity } : item;
	})
	return { ...state, cart: updatedCartItems }
}

// initialize products
const initProducts = (state, products) => {
	const copiedArr = [...state.products];
	return { ...state, products: copiedArr.concat(products) }
}

export const stateReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'INIT_PRODUCTS':
			return initProducts(state, payload);
		case 'ADD_ITEM_TO_CART':
			return addItemToCart(state, payload);
		case 'SET_ITEM_QTY':
			return setCartItemQty(state, payload);
		case 'DECREMENT_ITEM_QTY':
			return decrementItemQty(state, payload);
		case 'REMOVE_ITEM':
			return removeItemFromCart(state, payload);
		case 'REMOVE_ALL_ITEMS':
			return { ...state, cart: [] };
		default:
			throw new Error('The passed action type is not recognized');
	}
}