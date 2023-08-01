import React, { useState } from 'react'
import {
  Box,
  Text,
  VStack,
  Grid,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from '../components/ColorModeSwitcher'
import { Logo } from '../components/Logo'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleSubmitClick = () => {
    navigate(`/user/${id}`)
  }

  return (
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
          <Input w={400} onChange={(e) => setId(e.target.value)} value={id} placeholder="Enter a user id" size="md" />
          <Button onClick={handleSubmitClick}>Submit</Button>
        </VStack>
      </Grid>
    </Box>
  )
}

export default HomePage