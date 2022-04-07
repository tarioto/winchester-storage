import { ReactElement } from 'react'
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCameraCctv,
  faCaravan,
  faFence,
  faLightEmergencyOn,
  faMobileNotch,
  faThermometerHalf,
} from '@fortawesome/pro-duotone-svg-icons'

interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        color={'teal.400'}
        bg={useColorModeValue('teal.50', 'teal.900')}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function Features() {
  return (
    <Box bg={useColorModeValue('gray.200', 'gray.900')}>
      <Container maxW={'5xl'} py={12}>
        <Center p="10">
          <Heading size="md">All units are 15’x50’ </Heading>
        </Center>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<FontAwesomeIcon icon={faThermometerHalf} size="2x" />}
            title={'Individually heated'}
            text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
          />
          <Feature
            icon={<FontAwesomeIcon icon={faCameraCctv} size="2x" />}
            title={'Video surveillance'}
            text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
          />
          <Feature
            icon={<FontAwesomeIcon icon={faFence} size="2x" />}
            title={'Fully fenced'}
            text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
          />
          <Feature
            icon={<FontAwesomeIcon icon={faLightEmergencyOn} size="2x" />}
            title={'Individually alarmed units'}
            text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
          />
          <Feature
            icon={<FontAwesomeIcon icon={faMobileNotch} size="2x" />}
            title={'Cell phone app controlled access'}
            text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
          />
          <Feature
            icon={<FontAwesomeIcon icon={faCaravan} size="2x" />}
            title={'RV utilities'}
            text={'Dump station along with compressed air and potable water'}
          />
        </SimpleGrid>
      </Container>
    </Box>
  )
}
