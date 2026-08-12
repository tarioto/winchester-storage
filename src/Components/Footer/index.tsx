import { Box, Container, Stack, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box bg="bg.muted" color="fg.muted">
      <Container maxW={'6xl'} py={4}>
        <Stack gap={4} justify={'center'} align={'center'}>
          <Text textAlign={'center'}>
            © 2026 Winchester RV and Boat Storage. All rights reserved
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}
