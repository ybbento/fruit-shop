import { Heading, Text } from "@chakra-ui/react";

const Header = (props) => {
	const { children } = props;
	return (
		<Heading
			as="h2"
			size="2xl"
			maxW="100%"
			padding={10}
			backgroundColor="gray.400"
		>
			<Text color="white">{children}</Text>
		</Heading>
	);
};

export default Header;
