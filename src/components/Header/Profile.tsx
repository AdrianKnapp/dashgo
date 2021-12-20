import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Adrian Knapp</Text>
          <Text color="gray.300" fontSize="sm"
          >adrknapp@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Adrian Knapp" src="https://avatars.githubusercontent.com/u/71047946?v=4"/>
    </Flex>
  )
}