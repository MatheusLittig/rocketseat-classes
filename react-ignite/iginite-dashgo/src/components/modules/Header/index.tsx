import { useSidebarDrawer } from '@/contexts/SideBarDrawerContext'
import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { Profile, Notifications, SearchBox, Logo } from './components'

export function Header(): JSX.Element {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({ base: false, lg: true })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      px="6"
      mx="auto"
      mt="4"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <Notifications />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
