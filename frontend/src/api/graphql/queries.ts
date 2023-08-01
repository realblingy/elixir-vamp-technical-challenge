import { gql } from "../../__generated__"

export const TEAMS_QUERY = gql(`
  query User($user_id: ID!) {
    user(id: $user_id) {
      id,
      fullName,
      teams {
        id,
        name,
        code,
        colorSet
      }
    }
  }
`)

export const TEAM_QUERY = gql(`
  query Team($team_id: ID!) {
    team(id: $team_id) {
      id,
      name,
      code,
      colorSet,
      campaigns {
        id,
        budget,
        description,
        startDate,
        endDate,
        hashtags,
        name
      }
    }
  }
`)