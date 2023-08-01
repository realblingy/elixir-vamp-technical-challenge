defmodule VampapiWeb.Resolvers.Campaigns do
  alias Vampapi.Campaigns

  def create_campaign(_parent, args, _resolution) do
    Campaigns.create_campaign(args)
  end

  def list_campaigns(%Vampapi.Models.Team{} = team, _args, _resolution) do
    {:ok, Campaigns.get_campaigns(team.id)}
  end

  # def list_campaigns(_parent, _args, _resolution) do
  #   {:ok, Campaigns.list_campaigns()}
  # end
end
