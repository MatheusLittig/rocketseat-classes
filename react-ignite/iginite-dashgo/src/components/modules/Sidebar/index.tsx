import { useSidebarDrawer } from '@/contexts/SideBarDrawerContext'
import {
  Box,
  Drawer,
  useBreakpointValue,
  DrawerContent,
  DrawerBody,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader
} from '@chakra-ui/react'
import { SideBarNav } from './components'

export function Sidebar(): JSX.Element {
  const { isOpen, onClose } = useSidebarDrawer()

  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SideBarNav />
    </Box>
  )
}
