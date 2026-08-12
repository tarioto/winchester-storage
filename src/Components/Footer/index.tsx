import { Box, Container, Stack, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box bg="bg.muted" color="fg.muted">
      <Container maxW={'6xl'} py={4}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          gap={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2022 Winchester RV and Boat Storage. All rights reserved</Text>
        </Stack>
      </Container>
    </Box>
  )
}
