import { Menu as MenuIcon, MessageCircle, Warehouse, X } from 'lucide-react'
import {
  Box,
  Flex,
  Button,
  Link,
  IconButton,
  useDisclosure,
  HStack,
  Stack,
} from '@chakra-ui/react'
import type { ReactNode } from 'react'

const Links = ['Features']

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'bg.muted',
    }}
    href={'#'}
  >
    {children}
  </Link>
)

function Header() {
  const { open, onOpen, onClose } = useDisclosure()

  return (
    <Box px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={open ? onClose : onOpen}
        >
          {open ? <X /> : <MenuIcon />}
        </IconButton>
        <HStack gap={8} alignItems={'center'}>
          <Box>
            <Warehouse size={32} />
          </Box>
        </HStack>
        <Flex alignItems={'center'}>
          <HStack as={'nav'} gap={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <Button variant={'solid'} colorPalette={'teal'} size={'sm'} ml={4}>
            <MessageCircle size={18} />
            Get in Touch
          </Button>
        </Flex>
      </Flex>

      {open ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} gap={4}>
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
