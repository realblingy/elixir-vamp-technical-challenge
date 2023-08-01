import { Box, Card, CardBody, CardHeader, HStack, Heading, VStack, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { TEAM_QUERY } from '../api/graphql/queries'
import { useQuery } from '@apollo/client'
import { ArrowBackIcon } from '@chakra-ui/icons'

type TeamParams = {
  team_id: string,
  user_id: string
}

const TeamsPage = () => {

  const { team_id, user_id } = useParams() as TeamParams;
  const { data, loading, error } = useQuery(TEAM_QUERY, {
    variables: { team_id }
  })

  return (
    <Box p={4}>
      <Link to={`/user/${user_id}`}>
        <Button>
          <ArrowBackIcon />
          Teams
        </Button>
      </Link>
      <VStack spacing={8} p={4}>
        <Heading as="h2">
          Campaigns for {data?.team?.name}
        </Heading>
        <HStack alignItems="flex-start" spacing={4} wrap={"wrap"}>
          {data?.team?.campaigns?.map((campaign) => (
            <Card w={300} minH={300}>
              <CardHeader>
                <Heading size="md">
                  {campaign?.name}
                </Heading>
              </CardHeader>
              <CardBody textAlign="left">
                <Text>
                  {campaign?.description}
                </Text>
                <Text fontWeight="bold">
                  Budget: ${campaign?.budget}
                </Text>
                <Text fontWeight="bold">
                  Start Date: ${campaign?.startDate}
                </Text>
                <Text fontWeight="bold">
                  End Date: ${campaign?.endDate}
                </Text>
                <Text>
                  Hashtags: ${campaign?.hashtags}
                </Text>
              </CardBody>
            </Card>
          ))}
        </HStack>
      </VStack>
    </Box>
  )
}

export default TeamsPage