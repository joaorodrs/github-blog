import { Outlet } from 'react-router-dom'
import { Box, Container, Flex, useTheme } from '@chakra-ui/react'
import Header from '../components/Header'

export function DefaultLayout() {
  const theme = useTheme()

  return (
    <Container
      as="div"
      bg={theme.colors.base.bg}
      minHeight="100vh"
      maxWidth="100vw"
      px={0}
      scrollBehavior="smooth"
    >
      <Header />
      <Box maxW="864px" margin="auto">
        <Outlet />
      </Box>
    </Container>
  )
}