import React from "react"
import {
  VStack,
  HStack,
  Text,
  Box,
  Button,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Image,
  Skeleton,
  Divider,
  Spacer,
  Flex,
} from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import { MoreVertical, Plus, ExternalLink } from "react-feather"

const Test = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="full"
      maxWidth="xl"
      margin="0 auto"
      py={4}
      minHeight="screen"
      className="lg:px-8 pl-2 pr-3 mobile:px-4 pt-0"
    >
      <VStack spacing={2} textAlign="center" mt={[2, 0]}>
        <Text
          fontSize={{ base: "32px", sm: "26px" }}
          fontWeight="bold"
          lineHeight="1.5"
        >
          URL Crypto Wallet
        </Text>
      </VStack>
      <Box
        pb={5}
        width="full"
        className="rounded-tr-[12px] rounded-b-[12px] !rounded-tl-0 rounded-bl-[20px] mb-5 max-w-[520px] mx-auto relative z-1 mt-[45px] mobile:mt-[70px] min-h-[300px]"
        style={{
          background:
            "linear-gradient(90deg, rgb(248, 248, 248) 0%, rgb(255, 255, 255) 6.03%, rgb(255, 255, 255) 96.44%)",
          boxShadow:
            "rgba(0, 0, 0, 0.08) 0px 4px 40px, rgba(255, 255, 255, 0.8) 0px 0px 40px inset",
          filter: "drop-shadow(rgba(0, 0, 0, 0.15) 0px 4px 4px)",
        }}
      >
        <Box
          position="absolute"
          zIndex="0"
          top="-28px"
          left="0"
          h="28px"
          w="calc(100% - 0.75rem)"
          className="mobile:h-10 mobile:top-[-40px] mobile:w-[calc(100%_-_1.25rem)] rounded-t-[20px]"
          bgGradient="linear(to-r, #F8F8F8, #FFFFFF 6.03%, #FFFFFF 96.44%)"
        >
          <Box
            className="rounded-tl-[20px] rounded-bl-[20px] rounded-tr-[20px] h-full w-full border-l-[3px] border-l-[#fafafa] border-t-2 border-r-2 border-[#fcfcfc] border-b-none"
            bgGradient="linear(to-b, #EDF2F7, rgba(204, 216, 224, 0.7) 100%)"
            boxShadow="rgba(0, 0, 0, 0.07) 0px -10px 20px inset"
            borderBottom="none"
          ></Box>
        </Box>
        <VStack
          className="relative py-5 mobile:py-10 mobile:px-5 z-2"
          borderRadius="0px 12px 12px 20px"
          bgGradient="linear(to-r, #F8F8F8, #FFFFFF 6.03%, #FFFFFF 96.44%)"
          spacing="2"
          alignItems="start"
        >
          <HStack w="full" alignItems="center">
            <span className="mobile:mb-[1px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6B818C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-wallet"
              >
                <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
                <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
              </svg>
            </span>
            <p className="chakra-text text-grey-600 pl-[6px] text-xs mobile:text-sm font-semibold css-0">
              URL Crypto Wallet
            </p>
            <Spacer />
            {/* <button
              className="chakra-menu__menu-button hover:bg-grey-25 active:bg-grey-50 p-2 m-[-4px] rounded-lg css-kjvu41"
              id="menu-button-:r5f:"
              aria-expanded="false"
              aria-haspopup="menu"
              aria-controls="menu-list-:r5f:"
            >
              <span className="css-xl71ch">
                <p className="chakra-text pointer-events-auto cursor-pointer text-[#2D4C5D] hover:text-primaryBlue active:text-blue-600 css-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-more-vertical"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                </p>
              </span>
            </button> */}

            <Menu placement="bottom-end">
              <MenuButton as="button">
                <Flex alignItems="center">
                  <Box mr="2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="12" cy="5" r="1" />
                      <circle cx="12" cy="19" r="1" />
                    </svg>
                  </Box>
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem icon={<ExternalLink />}>
                  <VStack alignItems="flex-start">
                    <Text fontWeight="medium">Send</Text>
                    <Text fontSize="xs" color="gray.600">
                      Send assets to a new TipLink or to a Solana wallet
                      address.
                    </Text>
                  </VStack>
                </MenuItem>
                <Divider />
                <MenuItem icon={<Plus />}>
                  <VStack alignItems="flex-start">
                    <Text fontWeight="medium">Withdraw</Text>
                    <Text fontSize="xs" color="gray.600">
                      Withdraw to a crypto wallet
                    </Text>
                  </VStack>
                </MenuItem>
                <Divider />
                <MenuItem icon={<Plus />}>
                  <VStack alignItems="flex-start">
                    <Text fontWeight="medium">Deposit Assets</Text>
                    <Text fontSize="xs" color="gray.600">
                      Add more balance into this TipLink.
                    </Text>
                  </VStack>
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <Box className="inline-flex justify-start items-end w-full py-4 mobile:pb-10 mobile:pt-5 px-5">
            <Text
              className="text-[40px] xs:text-5xl sm:text-6xl text-foreground font-bold css-0"
              letterSpacing="-0.02em"
            >
              $0.00
            </Text>
            <Text className="text-[20px] sm:text-[32px] uppercase ml-2 font-bold text-grey-600 leading-[2.3] mobile:leading-[1.2] css-0">
              USD
            </Text>
          </Box>
          <Button bg="blue.500" colorScheme="blue" borderRadius="lg" w="full">
            Back to TipLink App
          </Button>
          <Button
            className="bg-blue-50 font-semibold text-blue-500 cursor-pointer rounded-lg h-11 flex justify-center items-center hover:bg-blue-100 active:bg-grey-50 transition duration-150 ease-out hover:ease-in w-full"
            bg="blue.50"
            _hover={{ bg: "blue.100" }}
            _active={{ bg: "gray.50" }}
          >
            Learn more about TipLink
          </Button>
        </VStack>
      </Box>
    </Box>
  )
}

export default Test
