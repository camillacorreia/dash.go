import NextLink from "next/link";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Link
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <NextLink href="/users/create" passHref>
              <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon
                as={RiAddLine}
                fontSize="20"
              />}
            >
              Criar novo
            </Button>
            </NextLink>
          </Flex>
        

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>

            <Tbody>
                <Tr>
                <Td px={["4", "4","6"]}>
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Link color="purple.400">
                      <Text fontWeight="bold">Camilla Correia</Text>
                    </Link>
                    <Text fontSize="sm" color="gray.300">camillajesuscorreia@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>30 de Julho, 2021</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon
                      as={RiPencilLine}
                      fontSize="16"

                    />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              
            </Tbody>
          </Table>

        </Box>
      </Flex>
    </Box>
  )
}