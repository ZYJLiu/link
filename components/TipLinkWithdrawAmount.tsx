import {
  Box,
  Text,
  VStack,
  Heading,
  Divider,
  Button,
  Flex,
  Icon,
  Image,
  HStack,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react"
import {
  ArrowForwardIcon,
  ArrowBackIcon,
  ChevronDownIcon,
  CheckIcon,
} from "@chakra-ui/icons"
import React from "react"

interface DepositAmountProps {
  onClose: () => void
  setIsOpenForm: (bool: boolean) => void
}

function DepositAmount({ onClose, setIsOpenForm }: DepositAmountProps) {
  return (
    <Box rounded="xl" w="full">
      <Flex alignItems="center">
        <Button
          variant="unstyled"
          cursor="pointer"
          _hover={{ opacity: 0.7 }}
          onClick={() => setIsOpenForm(false)}
          justifyContent="flex-start"
          alignItems="center"
          display="flex"
        >
          <Icon as={ArrowBackIcon} width="24px" height="24px" />
        </Button>
        <Text fontWeight="bold" color="#111" fontSize={["xl", "2xl"]}>
          Withdraw to Wallet
        </Text>
      </Flex>

      <Tabs colorScheme="gray">
        <TabList>
          <Tab>Withdraw all assets</Tab>
          <Tab>Specify asset</Tab>
        </TabList>

        <TabPanels>
          <TabPanel p={0} mt="10px">
            <Flex justify="space-between" alignItems="center" py={3}>
              <Box
                display="flex"
                alignItems="center"
                flexGrow={1} // added flexGrow={1} here
              >
                <Box w="28px" h="28px" position="relative" overflow="hidden">
                  <Box
                    as="img"
                    src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
                    className="rounded-full"
                    position="absolute"
                    inset="0"
                  />
                </Box>
                <Box
                  ml={2}
                  display="flex"
                  flexDirection="column"
                  alignItems="start"
                >
                  <Text fontSize="xs" fontWeight="semibold" textAlign="left">
                    Solana
                  </Text>
                  <Flex alignItems="center" textAlign="left" fontSize="xs">
                    <Text>1 SOL</Text>
                    <Text mx={1} mb="0.5">
                      ≈
                    </Text>
                    <Text>$22.27</Text>
                  </Flex>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="end"
                flexGrow={0} // added flexGrow={0} here
              >
                <Text fontSize="xs" fontWeight="semibold" color="gray.800">
                  $0.02
                </Text>
                <Text fontSize="xs" color="gray.500">
                  0.0010 SOL
                </Text>
              </Box>
            </Flex>

            <Flex
              justify="space-between"
              alignItems="center"
              py={3}
              borderTop="1px"
              borderColor="gray.100"
            >
              <Box display="flex" alignItems="center">
                <Text
                  fontSize="xs"
                  fontWeight="semibold"
                  color="gray.600"
                  ml={2}
                >
                  TOTAL AMOUNT
                </Text>
                <Text fontSize="xs" color="gray.600" ml={2}>
                  (MAY INCL SOL)
                </Text>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="end"
                justifyContent="center"
                fontWeight="bold"
                fontSize="normal"
                color="gray.800"
              >
                <Text>$0.02</Text>
              </Box>
            </Flex>

            <Flex mt="5" justify="space-between" align="center">
              <Button
                onClick={() => setIsOpenForm(false)}
                bg="white"
                h="44px"
                color="gray.500"
                fontWeight="semibold"
                outline="none"
                py="3"
                px="4"
                borderRadius="8px"
                border="1px solid"
                borderColor="rgb(224, 231, 235)"
              >
                Cancel
              </Button>

              <Flex justify="end" align="center" gap="2">
                <Button
                  flex="1"
                  h="44px"
                  bg="blue.500"
                  _hover={{ bg: "blue.600" }}
                  _active={{ bg: "blue.700" }}
                  color="white"
                  fontWeight="semibold"
                  outline="none"
                  py="3"
                  transition="all"
                  px="4"
                  borderRadius="8px"
                  cursor="pointer"
                  textTransform="none"
                  boxShadow="none"
                >
                  <Flex justify="center" align="center" mr="0.25rem">
                    <Icon as={CheckIcon} />
                  </Flex>
                  <Text>Withdraw All</Text>
                </Button>
              </Flex>
            </Flex>
          </TabPanel>
          <TabPanel p={0} mt="10px">
            <Box
              mb="1"
              py="2"
              px="6"
              bg="white"
              border="1px"
              borderColor="gray.100"
              rounded="lg"
              cursor="pointer"
              _hover={{
                borderColor: "gray.500",
                bg: "gray.25",
              }}
              _active={{
                bg: "gray.50",
              }}
              position="relative"
            >
              <HStack justifyContent="center" alignItems="center" spacing="1">
                <Text color="gray.800">Asset:</Text>
                <Box w="24px" h="24px" position="relative" overflow="hidden">
                  <Box
                    as="img"
                    src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
                    className="rounded-full"
                    position="absolute"
                    inset="0"
                  />
                </Box>
                <Text fontWeight="bold" color="foreground">
                  SOL
                </Text>
              </HStack>

              <Box
                className="transition absolute right-3 top-3 w-4 h-4 flex items-center justify-center"
                _hover={{
                  color: "gray.500",
                }}
              >
                <Icon as={ChevronDownIcon} w="4" h="4" />
              </Box>
            </Box>

            <Box
              className="inline-flex items-center justify-center mx-auto w-full css-0"
              pt="2"
              pb="1"
              bg="transparent"
            >
              <Text fontSize="xs" color="gray.700" className="text-grey-700">
                TipLink's available SOL:
              </Text>
              <Text fontSize="xs" fontWeight="bold" className="font-bold">
                0.000 ($0.00)
              </Text>
            </Box>

            <Box className="dropdown-container relative w-full my-0 mx-auto">
              <Box
                className="relative py-1 pb-5 bg-white border border-gray-100 flex space-x-1 justify-center items-center min-h-[80px] rounded-t-lg rounded-b-none"
                position="relative"
              >
                <Input
                  className="full border-none w-full text-center py-2 font-light text-3xl outline-none"
                  placeholder="$0 USD"
                  type="text"
                  value=""
                  inputMode="numeric"
                  borderColor="transparent"
                  focusBorderColor="transparent"
                  outline="none"
                  _hover={{ borderColor: "transparent" }}
                />
                <Box className="absolute bottom-2 text-xs text-gray-400">
                  <Text>~0.0000 SOL</Text>
                </Box>
                <Box
                  id="undefinedToggle"
                  className="select-none rounded-full flex items-center justify-center py-2 cursor-pointer bg-gray-50 hover:bg-gray-100 active:bg-gray-200 absolute top-5 right-2 mobile:right-4 text-xs text-gray-600 hover:text-foreground mobile:min-w-9 mobile:w-9 mobile:max-w-9 mobile:min-h-9 mobile:h-9 mobile:max-h-9 min-w-8 w-8 max-w-8 min-h-8 h-8 max-h-8 transition duration-120 ease-out "
                  style={{
                    top: "50%",
                    transform: "translateY(-50%) rotate(-180deg)",
                    zIndex: "10",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14px"
                    height="14px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-down"
                  >
                    <polyline points="11 17 7 21 3 17"></polyline>
                    <line x1="7" y1="21" x2="7" y2="9"></line>
                    <polyline points="21 7 17 3 13 7"></polyline>
                    <line x1="17" y1="15" x2="17" y2="3"></line>
                  </svg>
                </Box>
              </Box>
            </Box>

            <Flex mt="5" justify="space-between" align="center">
              <Button
                onClick={() => setIsOpenForm(false)}
                bg="white"
                h="44px"
                color="gray.500"
                fontWeight="semibold"
                outline="none"
                py="3"
                px="4"
                borderRadius="8px"
                border="1px solid"
                borderColor="rgb(224, 231, 235)"
              >
                Cancel
              </Button>

              <Flex justify="end" align="center" gap="2">
                <Button
                  flex="1"
                  h="44px"
                  bg="blue.500"
                  _hover={{ bg: "blue.600" }}
                  _active={{ bg: "blue.700" }}
                  color="white"
                  fontWeight="semibold"
                  outline="none"
                  py="3"
                  transition="all"
                  px="4"
                  borderRadius="8px"
                  cursor="pointer"
                  textTransform="none"
                  boxShadow="none"
                >
                  <Flex justify="center" align="center" mr="0.25rem">
                    <Icon as={CheckIcon} />
                  </Flex>
                  <Text>Withdraw</Text>
                </Button>
              </Flex>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default React.memo(DepositAmount)
