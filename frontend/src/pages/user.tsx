import { useQuery } from '@apollo/client'
import { Box, Heading, VStack } from '@chakra-ui/layout'
import { TEAMS_QUERY } from '../api/graphql/queries'
import { useParams } from 'react-router'
import { Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ArrowBackIcon } from '@chakra-ui/icons'

type UserParams = {
  user_id: string
}

const generateTeamColor = (colorSet: string | undefined | null) => {
  if (colorSet === undefined || colorSet === null) {
    return ""
  } 

  return colorSet;
}

const UserPage = () => {

  const { user_id } = useParams() as UserParams;
  const { data, loading, error } = useQuery(TEAMS_QUERY, {
    variables: { user_id }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <Box p={4}>
      <Link to="/">
        <Button>
          <ArrowBackIcon/>
          Home
        </Button>
      </Link>
      <VStack spacing={8}>
        <Heading as="h2">
          Teams for {data?.user?.fullName}
        </Heading>
        <HStack spacing={4}>
            {data?.user?.teams?.map((team) => (
              <Link to={`/team/${user_id}/${team?.id}`}>
                <Button backgroundColor={generateTeamColor(team?.colorSet)}>
                  {team?.name}
                </Button>
              </Link>
            ))}
        </HStack>
      </VStack>
    </Box>
  )
}

export default UserPage