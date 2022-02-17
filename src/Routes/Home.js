import { useEffect, useState } from "react";
import { Wrap, WrapItem, Center, Button } from "@chakra-ui/react";
import listItems from "../services/listItems";
import Card from "../Components/Card";
import { getItem, setItem, sortByID } from "../../src/helpers/storageHelper.js";
import Header from "../Components/Header";

const Home = () => {
	const [fruits, setFruits] = useState([]);
	useEffect(() => {
		setFruits(listItems);
	}, []);
	console.log(fruits);

	const handleClick = (fruit) => {
		const cart = getItem();
		const newCart = cart.filter((item) => item.id !== fruit.id);
		newCart.push(fruit);
		sortByID(newCart);
		console.log(newCart);
		setItem(newCart);
	};

	return (
		<>
			<Header>Lojinha do Yan</Header>
			<Wrap display="flex" flexDirection="row" justifyContent="space-evenly">
				<>
					{fruits?.map((fruit) => (
						<>
							<WrapItem>
								<Center w="auto" h="auto">
									<Card
										key={fruit.id}
										id={fruit.id}
										name={fruit.name}
										currency={fruit.currency}
										price={fruit.price}
										type={fruit.type}
										image={fruit.image}
										handleClick={handleClick}
									/>
								</Center>
							</WrapItem>
						</>
					))}
				</>
			</Wrap>

			<Button>Ir para o Carrinho</Button>
		</>
	);
};

export default Home;
