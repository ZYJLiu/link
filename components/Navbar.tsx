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

const Navbar = () => {
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
          {/* {locations.map((location) => (
            <MenuItem
              as={Link}
              href={`/location/${location.index}`}
              key={location.index}
            >
              Location {location.index}
            </MenuItem>
          ))} */}
        </MenuList>
      </Menu>
      <Spacer />
      <WalletMultiButton />
    </Flex>
  )
}

export default Navbar
