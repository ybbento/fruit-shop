import { useEffect, useState } from "react";
import { Wrap, WrapItem, Center, Button, Flex } from "@chakra-ui/react";
import listItems from "../services/listItems";
import Card from "../Components/Card";
import { getItem, setItem, sortByID } from "../../src/helpers/storageHelper.js";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

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
			<Link to="/">
				<Header>Lojinha do Yan</Header>
			</Link>

			<Flex alignItems={"center"} flexDirection="column">
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
				<Link to="/cart">
					<Button margin={10}>Ir para o Carrinho</Button>
				</Link>
			</Flex>
		</>
	);
};

export default Home;
