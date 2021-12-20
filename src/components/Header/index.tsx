import { Flex, useBreakpointValue } from '@chakra-ui/react';
import Logo from '../Header/Logo';
import NotificationsNav from '../Header/NotificationsNav';
import Profile from '../Header/Profile';
import SearchBox from '../Header/SearchBox';

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Logo />

      <SearchBox />

      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav />

        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  )
}