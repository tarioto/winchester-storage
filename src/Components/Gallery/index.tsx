import { Container, Image, Center, SimpleGrid } from '@chakra-ui/react'

export default function Gallery() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={2} spacing={10}>
        <Center>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={process.env.PUBLIC_URL + '/images/inside_units.png'}
            objectFit={'cover'}
          />
        </Center>
        <Center>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={process.env.PUBLIC_URL + '/images/Drone 11.JPG'}
            objectFit={'cover'}
          />
        </Center>
      </SimpleGrid>
    </Container>
  )
}
