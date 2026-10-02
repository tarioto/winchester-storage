import { Container, Image, SimpleGrid } from '@chakra-ui/react'
import { Glass } from '../ui/glass'

const LANDSCAPE = 4 / 3
const PORTRAIT = 3 / 4

const photos = [
  {
    src: '/images/Drone 3.JPG',
    alt: 'Aerial view of the storage facility beside Highway 580',
    ratio: LANDSCAPE,
  },
  {
    src: '/images/Drone 11.JPG',
    alt: 'Fenced storage buildings with rows of roll-up doors',
    ratio: LANDSCAPE,
  },
  {
    src: '/images/inside_units.png',
    alt: 'Empty 15′×50′ indoor storage unit',
    ratio: PORTRAIT,
  },
  {
    src: '/images/inside_with_cars.jpg',
    alt: 'Classic cars parked inside a storage unit',
    ratio: PORTRAIT,
  },
  {
    src: '/images/boat.jpg',
    alt: 'Boat on a trailer outside a storage unit',
    ratio: LANDSCAPE,
  },
  {
    src: '/images/front_night.jpg',
    alt: 'Storage buildings lit up at dusk',
    ratio: LANDSCAPE,
  },
]

export default function Gallery() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
        {photos.map(({ src, alt, ratio }) => (
          <Glass key={src} w="full" aspectRatio={ratio} cornerRadius={16}>
            <Image alt={alt} src={src} w="full" h="full" objectFit={'cover'} />
          </Glass>
        ))}
      </SimpleGrid>
    </Container>
  )
}
