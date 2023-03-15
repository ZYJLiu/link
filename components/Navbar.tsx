import {
  MenuButton,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  IconButton,
  Spacer,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import WalletMultiButton from "./WalletMultiButton"
import Link from "next/link"
import React from "react"

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex px={4} py={4}>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem as={Link} href="/">
            Home
          </MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      <WalletMultiButton />
    </Flex>
  )
}

export default React.memo(Navbar)
