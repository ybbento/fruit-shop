// Nossa fruteira vende banana (R$6,00/kg), maçã (R$3,00/kg), laranja
// (R$5,50/kg), abacate (R$5,00/unidade) e manga (R$6,00/unidade).
import { useEffect, useState } from "react";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";
import { listItems } from "../services/listItems";
import Card from "../Components/Card";
const Home = () => {
	console.log(listItems);
	return (
		<>
			<Wrap display="flex" flexDirection="row" alignItems="center">
				{listItems.map((item) => (
					<>
						<WrapItem>
							<Center w="auto" h="auto">
								<Card
									key={item.id}
									name={item.name}
									currency={item.currency}
									price={item.price}
									type={item.type}
									imageURL={item.imageURL}
								></Card>
							</Center>
						</WrapItem>
					</>
				))}
			</Wrap>
		</>
	);
};

export default Home;
