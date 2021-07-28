import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Camilla Correia</Text>
        <Text color="gray.300" fontSize="small">
          camillajesuscorreia@hotmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Camilla Correia"
        src="https://github.com/camillacorreia.png"
      />
    </Flex>
  );
}