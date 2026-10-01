import { Center, Container, Image, SimpleGrid } from '@chakra-ui/react'

export default function Gallery() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={2} gap={10}>
        <Center>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={'/images/Drone 3.JPG'}
            objectFit={'cover'}
          />
        </Center>
        <Center>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={'/images/Drone 11.JPG'}
            objectFit={'cover'}
          />
        </Center>
        <Center>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={'/images/inside_units.png'}
            objectFit={'cover'}
          />
        </Center>
        <Center>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={'/images/inside_with_cars.jpg'}
            objectFit={'cover'}
          />
        </Center>
        <Center>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={'/images/boat.jpg'}
            objectFit={'cover'}
          />
        </Center>
        <Center>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={'/images/front_night.jpg'}
            objectFit={'cover'}
          />
        </Center>
      </SimpleGrid>
    </Container>
  )
}
