// import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarehouse } from '@fortawesome/pro-duotone-svg-icons'
import { Box, Flex, Heading, Button, Spacer, Center } from '@chakra-ui/react'

function Header() {
  return (
    <Flex p="2">
      <Box>
        <Heading size="md">
          <Center w="40px" h="40px">
            <FontAwesomeIcon icon={faWarehouse} className="d-inline-block" />{' '}
          </Center>
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="red">Get in Touch</Button>
      </Box>
    </Flex>
  )
}

export default Header
