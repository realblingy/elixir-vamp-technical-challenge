import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./components/ColorModeSwitcher"
import { Logo } from "./components/Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Heading as="h2">
            Technical Induction Assignment
          </Heading>
          <Text>
            Retrieve a user's campaigns via their id
          </Text>
          <Input w={400} placeholder="Enter a user id" size="md" />
          <Button>Submit</Button>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
