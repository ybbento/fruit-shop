import { useEffect, useState } from "react";
import { Wrap, WrapItem, Center, Button, Flex } from "@chakra-ui/react";
import listItems from "../services/listItems";
import Card from "../Components/Card";
import { getItem, setItem, sortByID } from "../../src/helpers/storageHelper.js";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const Home = () => {
	const [fruits, setFruits] = useState([]);
	const [button, setButton] = useState(false);
	useEffect(() => {
		setFruits(listItems);
	}, []);

	const handleClick = (fruit) => {
		const cart = getItem();
		const newCart = cart.filter((item) => item.id !== fruit.id);
		newCart.push(fruit);
		sortByID(newCart);

		setItem(newCart);
		newCart.lenght === 0 ? setButton(false) : setButton(true);
	};

	return (
		<>
			<Header>
				{" "}
				<Link to="/">Lojinha do Yan </Link>
			</Header>

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
					<Button margin={10} isDisabled={!button}>
						Ir para o Carrinho
					</Button>
				</Link>
			</Flex>
		</>
	);
};

export default Home;
