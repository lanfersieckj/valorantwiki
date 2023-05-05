import { Box, HStack, Input, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  const handleSearch = async (term) => {
    if (!term) {
      setSearchResults([]);
      return;
    }

    const searchTerm = term.toLowerCase();

    const responses = await Promise.all([
      fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true'),
      fetch('https://valorant-api.com/v1/maps'),
      fetch('https://valorant-api.com/v1/weapons'),
    ]);

    const data = await Promise.all(responses.map(response => response.json()));

    const foundAgents = data[0].data.filter(agent => agent.displayName.toLowerCase().includes(searchTerm));
    const foundMaps = data[1].data.filter(map => map.displayName.toLowerCase().includes(searchTerm));
    const foundWeapons = data[2].data.filter(weapon => weapon.displayName.toLowerCase().includes(searchTerm));

    const results = [...foundAgents, ...foundMaps, ...foundWeapons];
    setSearchResults(results);
    setShowResults(true);
  };

  const handleSelectResult = (result) => {
    if (result.role) {
      router.push(`/agents/${result.uuid}`);
    } else if (result.coordinates) {
      router.push(`/maps/${result.uuid}`);
    } else {
      router.push(`/weapons/${result.uuid}`);
    }
    setSearchTerm('');
    setSearchResults([]);
    setShowResults(false);
  };

  const hideResults = () => {
    setTimeout(() => {
      setShowResults(false);
    },200);
  };

  return (
    <Box position="relative" display="flex" alignItems="center">
      <Input
        borderColor={'gray.400'}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
        onBlur={hideResults}
        onFocus={() => { setShowResults(true); }}
        placeholder="Search"
      />
      {showResults && (
        <VStack
          position="absolute"
          zIndex="popover"
          top="100%"
          mt={2}
          w="100%"
          boxShadow="md"
          borderRadius="md"
          bg="white"
          p={2}
          spacing={1}
          maxH="200px"
          overflowY="auto"
        >
          {searchResults.length > 0 ? (
            searchResults.map((result) => (
              <HStack _hover={{ bg: 'gray.100' }} onClick={() => handleSelectResult(result)} cursor="pointer" width={"full"} key={result.uuid} spacing={2}>
                <img
                  src={result?.displayIcon}
                  style={{ width: '20%', height: '20%' }}
                />
                <Text
                  
                >
                  {result.displayName}
                </Text>
              </HStack>
            ))
          ) : (
            <Text color="gray.500">No results found</Text>
          )}
        </VStack>
      )}
    </Box>
  );
};

export default SearchBar
