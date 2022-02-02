import {
	Box,
	Image,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	Text,
	Button,
} from "@chakra-ui/react";
import { useState } from "react";
const Card = (props) => {
	const [amount, setAmount] = useState(0);
	const [button, setButton] = useState(false);
	const { name, currency, price, type, imageURL } = props;
	const handleChange = (value) => {
		return (
			<>
				{setAmount(value)}
				{value > 0 ? setButton(true) : setButton(false)}
			</>
		);
	};
	return (
		<Box
			mt="2"
			ml="10px"
			padding="10px"
			maxW="sm"
			minW="200"
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			display="flex"
			flexDirection="column"
			alignItems="center"
		>
			<Image
				boxSize="100px"
				objectFit="cover"
				src={imageURL}
				alt={name}
				alignSelf="center"
				borderRadius="50%"
			/>
			<Box
				mt="1"
				fontWeight="semibold"
				as="h4"
				lineHeight="tight"
				isTruncated
				alignSelf="center"
			>
				{name}
			</Box>
			<Box display="flex" mt="2" alignItems="center" alignSelf="center">
				<Box
					color="gray.500"
					fontWeight="semibold"
					letterSpacing="wide"
					fontSize="xs"
					textTransform="uppercase"
					ml="2"
				>
					{currency} {price.toFixed(2)}
				</Box>
				<Box
					color="gray.500"
					fontWeight="bold"
					letterSpacing="wide"
					fontSize="xs"
					textTransform="capitalize"
					ml="2"
				>
					{type}
				</Box>
			</Box>
			<Box display="flex" flexDirection="row" alignItems="center ">
				<Text fontSize="sm" fontWeight="bold" pr="5px">
					Quantidade:
				</Text>
				<NumberInput
					onChange={handleChange}
					value={amount}
					step={type === "kg" ? 0.1 : 1}
					maxW="80px"
					min="0"
				>
					<NumberInputField fontSize="12px" maxH="30" />
					<NumberInputStepper maxH="30" maxW="15px">
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
			</Box>

			<Text fontSize="12px">Total: R$ {(amount * price).toFixed(2)}</Text>
			<Button colorScheme="blue" isDisabled={!button}>
				Adicionar ao carrinho
			</Button>
		</Box>
	);
};

export default Card;
