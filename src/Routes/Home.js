// Nossa fruteira vende banana (R$6,00/kg), maçã (R$3,00/kg), laranja
// (R$5,50/kg), abacate (R$5,00/unidade) e manga (R$6,00/unidade).
import { useEffect, useState } from "react";
import { listItems } from "../services/listItems";
const Home = () => {
	console.log(listItems);
	return (
		<>
			{listItems.map((item) => (
				<>
					<ul>
						<li>{item.name}</li>
						<li>{item.currency}</li>
						<li>{item.value}</li>

						<li>{item.type}</li>
						<li>
							<img src={item.imageURL} alt={item.name}></img>
						</li>
					</ul>
				</>
			))}
		</>
	);
};

export default Home;
