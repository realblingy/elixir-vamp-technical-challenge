defmodule VampapiWeb.Schema do
  use Absinthe.Schema
  import_types VampapiWeb.Schema.ContentTypes

  alias VampapiWeb.Resolvers

  mutation do
    @desc "Create a campaign"
    field :create_campaign, type: :campaign do
      arg :name, non_null(:string)
      arg :team_id, non_null(:integer)
      resolve &Resolvers.Campaigns.create_campaign/3
    end
  end

  query do
    @desc "Get all campaigns given a user id"
    field :campaigns, list_of(:campaign) do
      resolve &Resolvers.Campaigns.list_campaigns/3
    end

    field :users, list_of(:user) do
      resolve &Resolvers.Users.list_users/3
    end

    field :user, :user do
      arg :id, non_null(:id)
      resolve &Resolvers.Users.find_user/3
    end

    field :team, :team do
      arg :id, non_null(:id)
      resolve &Resolvers.Teams.find_team/3
    end
  end


end
