import { Container } from '@chakra-ui/react'
import { Glass } from '../ui/glass'
import { useColorModeValue } from '../ui/use-color-mode'

function LocationMap() {
  const mapFilter = useColorModeValue('none', 'invert(90%) hue-rotate(180deg)')

  return (
    <Container maxW={'5xl'} py={12}>
      <Glass w="full" aspectRatio={16 / 9} cornerRadius={24}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3081.174258597806!2d-119.7677248492059!3d39.44279322211542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80991515801c558d%3A0x42233ff8c6f105e!2s9611%20Prototype%20Ct%2C%20Reno%2C%20NV%2089521%2C%20Stati%20Uniti!5e0!3m2!1sit!2sit!4v1649340270077!5m2!1sit!2sit"
          title="location-map"
          width="100%"
          height="100%"
          style={{ border: 0, filter: mapFilter }}
        ></iframe>
      </Glass>
    </Container>
  )
}

export default LocationMap
