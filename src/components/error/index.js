import { Alert, AlertDescription, AlertIcon, AlertTitle, Center, Heading, Text, VStack } from "@chakra-ui/react"

function FullPageDashError({ msg }) {
  return (
    <Center height={"60%"}>
      <VStack align={'start'} spacing={6} width={{ base: null, md: "50%" }}>
        <Heading size={'4xl'}>:</Heading>
        <Heading>Something went wrong...</Heading>
        <Text fontSize={'xl'}>Try reloading the page or logging in again.</Text>
        {
          msg
          &&
          <Alert status={'error'}>
            <AlertIcon />
            <AlertTitle>Error:</AlertTitle>
            <AlertDescription>{msg}</AlertDescription>
          </Alert>
        }
      </VStack>
    </Center>
  )
}

export { FullPageDashError }
