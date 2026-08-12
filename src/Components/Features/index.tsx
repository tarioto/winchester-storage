import type { ReactElement } from 'react'
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Caravan, Cctv, Fence, Siren, Thermometer } from 'lucide-react'

interface FeatureProps {
  title: string
  text?: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack flex="1 1 220px" maxW="280px">
      <Center>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          color="blue.fg"
          bg="blue.subtle"
          mb={1}
        >
          {icon}
        </Flex>
      </Center>
      <Center>
        <Text fontWeight={600}>{title}</Text>
      </Center>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function Features() {
  return (
    <Box bg="bg.muted">
      <Container maxW={'5xl'} py={12}>
        <Center p="10">
          <Heading size="md">
            All units are 15’x50’ indoor secured storage{' '}
          </Heading>
        </Center>
        <Flex wrap="wrap" justify="center" gap={10}>
          <Feature
            icon={<Thermometer size={32} />}
            title={'Individually heated'}
            // text={
            //   'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            // }
          />
          <Feature
            icon={<Cctv size={32} />}
            title={'Video surveillance'}
            // text={
            //   'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            // }
          />
          <Feature
            icon={<Fence size={32} />}
            title={'Fully fenced'}
            // text={
            //   'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            // }
          />
          <Feature
            icon={<Siren size={32} />}
            title={'Individually alarmed units'}
            // text={
            //   'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            // }
          />
          {/* <Feature
            icon={<Smartphone size={32} />}
            title={'Cell phone app controlled access'}
            // text={
            //   'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            // }
          /> */}
          <Feature
            icon={<Caravan size={32} />}
            title={'RV utilities'}
            // text={'Dump station along with compressed air and potable water'}
          />
        </Flex>
      </Container>
    </Box>
  )
}
