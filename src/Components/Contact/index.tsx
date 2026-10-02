import {
  Box,
  Center,
  Container,
  Heading,
  Link,
  SimpleGrid,
} from '@chakra-ui/react'
import { Mail, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { Glass } from '../ui/glass'

function GlassButton({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <Center>
      <Glass w="280px" h="52px" contentProps={{ bg: 'blue.solid/75' }}>
        <Link
          href={href}
          w="full"
          h="full"
          justifyContent="center"
          gap={2}
          color="white"
          fontSize="lg"
          fontWeight="semibold"
          textDecoration="none"
          _hover={{ textDecoration: 'none' }}
          _focusVisible={{ outlineOffset: '-4px', rounded: 'full' }}
        >
          {children}
        </Link>
      </Glass>
    </Center>
  )
}

function Contact() {
  return (
    <Box bg="bg.muted">
      <Container bg="bg.muted" maxW={'5xl'} py={12}>
        <Box
          maxW="7xl"
          mx={'auto'}
          pt={5}
          pb={10}
          px={{ base: 2, sm: 12, md: 17 }}
        >
          <Heading textAlign={'center'} fontSize={'4xl'} fontWeight={'bold'}>
            Interested? Contact us to find out more!
          </Heading>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 5, lg: 8 }}>
          <GlassButton href="mailto:lee@winchesterrvandboatstorage.com">
            <Mail size={18} />
            Email
          </GlassButton>
          <GlassButton href="tel:+1-775-447-0573">
            <Phone size={18} />
            Call
          </GlassButton>
        </SimpleGrid>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={{ base: 5, lg: 8 }}
          mt={4}
        >
          <Heading as="h4" size="md">
            <Center>
              <Link href="mailto:lee@winchesterrvandboatstorage.com">
                lee@winchesterrvandboatstorage.com
              </Link>
            </Center>
          </Heading>
          <Heading as="h4" size="md">
            <Center>
              <Link href="tel:+1-775-447-0573">+1-775-447-0573</Link>
            </Center>
          </Heading>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Contact
