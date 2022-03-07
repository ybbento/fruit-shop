import { Button, Flex, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CartItem from "../Components/CartItem";
import Header from "../Components/Header";
import { getItem, setItem, sortByID } from "../helpers/storageHelper";

const Cart = () => {
	const fruitList = getItem();
	const [fruits, setFruits] = useState([]);
	const [cart, setCart] = useState([]);
	const [totalValue, setTotalValue] = useState(0);
	const toast = useToast();

	useEffect(() => {
		setFruits(fruitList);
		const cart = getItem();
		let total = 0;
		cart.forEach((fruit) => {
			total = total + fruit.total;
		});
		setTotalValue(total);
	}, [cart]);

	const handleClick = (fruit) => {
		const cart = getItem();
		const newCart = cart.filter((item) => item.id !== fruit.id);
		newCart.push(fruit);
		sortByID(newCart);
		setCart(newCart);
		setItem(newCart);
	};

	const handleRemoveClick = (fruit) => {
		const cart = getItem();
		const newCart = cart.filter((item) => item.id !== fruit.id);
		sortByID(newCart);
		setCart(newCart);
		setItem(newCart);
	};
	return (
		<>
			<Header>
				Carrinho{" "}
				<Link to="/">
					<Button colorScheme={""} textColor={"white"}>
						Voltar para o inicio
					</Button>
				</Link>
			</Header>

			<Flex flexDirection={"column"} alignItems={"center"}>
				{fruits?.map((fruit) => (
					<CartItem
						key={fruit.id}
						id={fruit.id}
						name={fruit.name}
						currency={fruit.currency}
						amount={fruit.amount}
						total={fruit.total}
						price={fruit.price}
						type={fruit.type}
						image={fruit.image}
						handleClick={handleClick}
						handleRemoveClick={handleRemoveClick}
					></CartItem>
				))}
				<Text margin={10} fontSize={20} fontWeight={"bold"}>
					Valor total:{" "}
					{Number(totalValue.toFixed(2)).toLocaleString("pt-BR", {
						currency: "BRL",
						style: "currency",
						minimumFractionDigits: 2,
					})}
				</Text>
				<Link to="/">
					<Button
						onClick={() => {
							localStorage.clear();
							toast({
								title: "Compra finalizada!",
								description: "Compra finalizada com sucesso!",
								status: "success",
								duration: 15000,
								isClosable: true,
							});
						}}
					>
						Finalizar compra
					</Button>
				</Link>
			</Flex>
		</>
	);
};

export default Cart;
