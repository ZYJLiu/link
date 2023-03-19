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
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import React from "react"

interface DepositSectionProps {
  onClose: () => void
  setIsOpenForm: (bool: boolean) => void
}

function DepositSection({ onClose, setIsOpenForm }: DepositSectionProps) {
  return (
    <Box rounded="xl" w="full">
      <Text fontWeight="bold" color="#111" fontSize={["xl", "2xl"]}>
        Withdraw
      </Text>
      <Text color="gray.800" fontWeight="normal" my="2" textAlign="left">
        Select source to add money into this TipLink:
      </Text>
      <Box
        bg="white"
        border="1px solid gray.200"
        borderColor="gray.200"
        borderRadius="xl"
        mt="10px"
        width="100%"
      >
        <Button
          className="flex justify-start items-start w-full whitespace-normal break-words css-lj54vf"
          variant="outline"
          p={4}
          minHeight="72px"
          borderBottom="none"
          onClick={() => setIsOpenForm(true)}
        >
          <Flex justify="start" align="start" gap={3} w="full">
            <Box
              pt="1"
              color="gray.800"
              w="6"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box position="relative" display="inline-block">
                <Box
                  display="block"
                  width="initial"
                  height="initial"
                  background="none"
                  opacity={1}
                  border={0}
                  margin={0}
                  padding={0}
                  maxW="100%"
                >
                  <Box
                    display="block"
                    width="initial"
                    height="initial"
                    background="none"
                    opacity={1}
                    border={0}
                    margin={0}
                    padding={0}
                    maxW="100%"
                  >
                    <Image
                      src="https://tiplink.io/_next/static/media/phantom.2430b282.svg"
                      alt=""
                      aria-hidden
                      display="block"
                      maxW="100%"
                      width="initial"
                      height="initial"
                      background="none"
                      opacity={1}
                      border={0}
                      margin={0}
                      padding={0}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <VStack alignItems="flex-start" w="full" spacing={2}>
              <Heading
                as="h3"
                fontWeight="medium"
                fontSize={["md", "base"]}
                textAlign="left"
                className="text-gray-800"
              >
                Connected Wallet
              </Heading>
              <Text
                fontSize="xs"
                textAlign="left"
                className="text-gray-600 font-normal"
              >
                <span>
                  Assets will be sent to the <b>Phantom</b> wallet.
                </span>
              </Text>
            </VStack>
          </Flex>
          <Icon as={ArrowForwardIcon} color="#2D4C5D" boxSize="6" />
        </Button>
        <Divider
          orientation="horizontal"
          className="chakra-divider css-svjswr"
        />
        <Button
          className="flex justify-start items-start w-full whitespace-normal break-words css-lj54vf"
          variant="outline"
          p={4}
          minHeight="72px"
          borderTop="none"
        >
          <Flex justify="start" align="start" gap={3} w="full">
            <Box
              pt="1"
              color="gray.800"
              w="6"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box position="relative" display="inline-block">
                <Box
                  display="block"
                  width="initial"
                  height="initial"
                  background="none"
                  opacity={1}
                  border={0}
                  margin={0}
                  padding={0}
                  maxW="100%"
                >
                  <Box
                    display="block"
                    width="initial"
                    height="initial"
                    background="none"
                    opacity={1}
                    border={0}
                    margin={0}
                    padding={0}
                    maxW="100%"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-key"
                    >
                      <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                    </svg>
                  </Box>
                </Box>
              </Box>
            </Box>
            <VStack alignItems="flex-start" w="full" spacing={2}>
              <Heading
                as="h3"
                fontWeight="medium"
                fontSize={["md", "base"]}
                textAlign="left"
                className="text-gray-800"
              >
                Public Key
              </Heading>
              <Text
                fontSize="xs"
                textAlign="left"
                className="text-gray-600 font-normal"
              >
                <span>Assets will be sent to a Solana wallet address.</span>
              </Text>
            </VStack>
          </Flex>
          <Icon as={ArrowForwardIcon} color="#2D4C5D" boxSize="6" />
        </Button>
      </Box>
      <Box className="mt-5 w-full flex justify-between items-center">
        <Button
          onClick={onClose}
          className="flex justify-start items-start w-full whitespace-normal break-words css-lj54vf"
          bg="white"
          h="44px"
          color="gray.800"
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
        <Flex className="flex justify-end items-center gap-2" />
      </Box>
    </Box>
  )
}

export default React.memo(DepositSection)
