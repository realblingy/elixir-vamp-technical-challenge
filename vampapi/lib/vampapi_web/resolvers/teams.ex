defmodule VampapiWeb.Resolvers.Teams do
  alias Vampapi.Teams

  def list_teams(%Vampapi.Models.User{} = user, _args, _resolution) do
    {:ok, Teams.list_teams(user.id)}
  end

  def find_team(_parent, %{id: id}, _resolution) do
    {:ok, Teams.get_team(id)}
  end

end
