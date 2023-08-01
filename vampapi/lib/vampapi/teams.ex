defmodule Vampapi.Teams do
  require Ecto.Query
  alias Vampapi.Models.Team
  alias Vampapi.Teams
  alias Vampapi.Models.Membership
  alias Vampapi.Repo

  def get_teamids(user_id) do
    Membership
      |> Ecto.Query.where(user_id: ^user_id)
      |> Ecto.Query.select([:team_id])
      |> Repo.all
  end

  def get_team(team_id) do
    Team |> Repo.get(team_id)
  end

  def get_teams(user_id) do
    get_teamids(user_id)
      |> Enum.map(fn team_id -> Teams.get_team(team_id) end)
      |> Enum.reduce([], fn team, acc -> acc ++ team end)
  end

  def list_teams(user_id) do
    get_teamids(user_id)
      |> Enum.map(fn team -> Teams.get_team(team.team_id) end)
  end

  def list_teams do
    Repo.all(Team)
  end
end
