defmodule Vampapi.Campaigns do
  require Ecto.Query
  alias Vampapi.Models.Membership
  alias Vampapi.Models.Campaign
  # alias Vampapi.Campaigns
  alias Vampapi.Repo

  def create_campaign(%{team_id: team_id, name: name}) do
    %Vampapi.Models.Campaign{team_id: team_id, name: name, id: 60..900000 |> Enum.random()}
      |> Repo.insert
  end

  def get_teamids(user_id) do
    Membership
      |> Ecto.Query.where(user_id: ^user_id)
      |> Ecto.Query.select([:team_id])
      |> Repo.all
  end

  def get_campaigns(team_id) do
    Campaign
      |> Ecto.Query.where(team_id: ^team_id)
      |> Repo.all
  end

  # def list_campaigns(user_id) do
  #   get_teamids(user_id)
  #     |> Enum.map(fn team -> Campaigns.get_campaigns(team.team_id) end)
  #     |> Enum.reduce([], fn campaign, acc -> acc ++ campaign end)
  # end

  # def list_campaigns do
  #   Repo.all(Campaign)
  # end

end
