import { 
  Flex,
  Box,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Checkbox,
  Tbody,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Pagination from '../../components/Pagination';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

export default function UsersList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              cursor="pointer"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={
                <Icon as={RiAddLine} fontSize="20"/>
              }
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>
                  Usuário
                </Th>
                { isWideVersion && (
                  <Th>
                    Data de cadastro
                  </Th>
                )}
                { isWideVersion && (
                  <Th>
                  </Th>
                )}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Adrian Knapp</Text>
                    <Text fontSize="sm" color="gray.300">adrknapp@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>27 de março, 2021</Td> }
                { isWideVersion && (
                  <Td textAlign="right">
                    <Button
                      as="a"
                      cursor="pointer"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={
                        <Icon as={RiPencilLine} fontSize="16" />
                      }
                    >
                      Editar
                    </Button>
                </Td>
                )}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}