import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faHamburger,
  faMessageMiddle,
  faWarehouse,
  faXmark,
} from '@fortawesome/pro-duotone-svg-icons'
import {
  Box,
  Flex,
  Heading,
  Button,
  Spacer,
  Center,
  Link,
  useColorModeValue,
  IconButton,
  useDisclosure,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

const Links = ['Features']

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.100', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
)

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={
            isOpen ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )
          }
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box>
            <FontAwesomeIcon icon={faWarehouse} size="2x" />
          </Box>
        </HStack>
        <Flex alignItems={'center'}>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <Button
            variant={'solid'}
            colorScheme={'teal'}
            size={'sm'}
            ml={4}
            leftIcon={<FontAwesomeIcon icon={faMessageMiddle} />}
          >
            Get in Touch
          </Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}

export default Header
