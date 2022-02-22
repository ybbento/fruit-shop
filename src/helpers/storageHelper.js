export const getItem = () => {
	try {
		const item = JSON.parse(localStorage.getItem("cart"));
		//busca o item no localStorage uma string com o keyname cart e transforma em obj de JS
		return item || [];
	} catch (error) {
		return [];
	}
};

export const setItem = (fruitList) => {
	const item = localStorage.setItem("cart", JSON.stringify(fruitList));
	//adiciona ao local storage uma string com keyname cart
	return item;
};

export const sortByID = (fruitList) => {
	const sortedList = fruitList.sort((a, b) => a.id - b.id);
	return sortedList;
};
