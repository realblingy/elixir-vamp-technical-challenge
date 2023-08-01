defmodule VampapiWeb.Resolvers.Users do
  alias Vampapi.Users

  def list_users(_parent, _args, _resolution) do
    {:ok, Users.list_users()}
  end

  def find_user(_parent, %{id: id}, _resolution) do
    {:ok, Users.find_user(id)}
  end
end
