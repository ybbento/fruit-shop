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
import fruits from "../services/listItems";

const CartItem = (props) => {
	const {
		name,
		price,
		image,
		id,
		handleClick,
		type,
		handleRemoveClick,
		total,
		amount,
	} = props;
	const [itemAmount, setItemAmount] = useState(amount);

	const [button, setButton] = useState(false);

	const handleChange = (value) => {
		return (
			<>
				{setItemAmount(value)}
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
			flexDirection="row"
			alignItems="center"
		>
			<Image
				boxSize="100px"
				objectFit="cover"
				src={image}
				alt={name}
				alignSelf="center"
				borderRadius="50%"
			/>
			<Box
				display={"flex"}
				flexDirection="column"
				alignItems="flex-start"
				ml={5}
			>
				<Box
					mt="1"
					fontWeight="semibold"
					as="h4"
					lineHeight="tight"
					isTruncated
					// alignSelf="center"
				>
					{name}{" "}
					{Number(price.toFixed(2)).toLocaleString("pt-BR", {
						currency: "BRL",
						style: "currency",
						minimumFractionDigits: 2,
					})}{" "}
					{type}
				</Box>

				<Box display="flex" flexDirection="row" alignItems="center ">
					<Text fontSize="sm" fontWeight="bold" pr="5px">
						Qt:
					</Text>
					<NumberInput
						onChange={handleChange}
						value={itemAmount}
						step={type === "kg" ? 0.1 : 1}
						maxW="70px"
						min="0"
					>
						<NumberInputField fontSize="12px" maxH="30" />
						<NumberInputStepper maxH="30" maxW="15px">
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
					<Button
						margin={2}
						width={"80px"}
						height={"25px"}
						colorScheme="blue"
						fontSize={14}
						isDisabled={!button}
						onClick={() =>
							handleClick({
								id,
								name,
								image,
								amount: itemAmount,
								total: itemAmount * price,
								type,
								price,
							})
						}
					>
						Atualizar
					</Button>
					<Button
						onClick={() => {
							handleRemoveClick({
								id,
							});
						}}
						colorScheme="red"
						size="xs"
					>
						X
					</Button>
				</Box>

				<Text
					fontSize="
				16px"
				>
					Total:{" "}
					{Number(itemAmount * price.toFixed(2)).toLocaleString("pt-BR", {
						currency: "BRL",
						style: "currency",
						minimumFractionDigits: 2,
					})}
				</Text>
			</Box>
		</Box>
	);
};

export default CartItem;
