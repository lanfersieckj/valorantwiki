import React from 'react';
import { Flex, Box, Link, Spacer, Text, useColorModeValue, textDecoration } from '@chakra-ui/react';
import NextLink from 'next/link';
import SearchBar from '../search/searchBar';

const NavBar = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.100');

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg={bgColor}
      color={textColor}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
    >
      <NextLink href="/" passHref>
        <Text _hover={{textDecoration: "underline"}}>Valorant Wiki</Text>
      </NextLink>
      <Spacer />
      <SearchBar/>
      <Spacer />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <NextLink href="/weapons" passHref>
          <Text _hover={{textDecoration: "underline"}} marginX={2}>Weapons</Text>
        </NextLink>
        <NextLink href="/maps" passHref>
          <Text _hover={{textDecoration: "underline"}} marginX={2}>Maps</Text>
        </NextLink>
        <NextLink href="/agents" passHref>
          <Text _hover={{textDecoration: "underline"}} marginX={2}>Agents</Text>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default NavBar;
