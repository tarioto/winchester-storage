import { Box, AspectRatio, Container } from '@chakra-ui/react'

function Map() {
  return (
    <Container maxW={'5xl'} py={12}>
      <Box w="100%" h="100%" rounded={'md'}>
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3081.174258597806!2d-119.7677248492059!3d39.44279322211542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80991515801c558d%3A0x42233ff8c6f105e!2s9611%20Prototype%20Ct%2C%20Reno%2C%20NV%2089521%2C%20Stati%20Uniti!5e0!3m2!1sit!2sit!4v1649340270077!5m2!1sit!2sit"
            title="location-map"
          ></iframe>
        </AspectRatio>
      </Box>
    </Container>
  )
}

export default Map
