import { Flex, Image } from "@chakra-ui/react";

import headerBackground from '../assets/img/header-background.svg'
import logo from '../assets/img/logo.svg'

export default function Header() {
  return (
    <Flex
      as="header"
      bgImage={headerBackground}
      h="300px"
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      alignItems="center"
      justifyContent="center"
    >
      <Image src={logo} w="180px" />
    </Flex>
  )
}