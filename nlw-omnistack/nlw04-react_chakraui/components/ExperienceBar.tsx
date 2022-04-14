import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const ExperienceBar: React.FC = () => {
  return (
    <header className="experience-bar">
      <Box display="flex" alignItems="center">
        <Text fontSize="md">0 xp</Text>
        <Box
          flex="1"
          h="4px"
          borderRadius="md"
          bg="grayLine"
          margin="0 1.5rem"
          position="relative"
        >
          <Box w="50%" h="4px" bg="green" borderRadius="md" />
          <Text
            left="50%"
            className="current-experience"
            position="absolute"
            top="12px"
            transform="translateX(-50%)"
          >
            300 xp
          </Text>
        </Box>
        <Text fontSize="md">600 xp</Text>
      </Box>
    </header>
  )
}

export default ExperienceBar
