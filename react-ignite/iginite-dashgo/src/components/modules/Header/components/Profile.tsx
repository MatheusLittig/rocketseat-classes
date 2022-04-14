import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps): JSX.Element {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Matheus L.B</Text>

          <Text color="gray.300" fontSize="small">
            littig.works@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Matheus Littig"
        src="https://github.com/MatheusLittig.png"
      />
    </Flex>
  )
}
