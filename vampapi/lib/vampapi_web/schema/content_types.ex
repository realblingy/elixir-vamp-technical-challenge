defmodule VampapiWeb.Schema.ContentTypes do
  alias VampapiWeb.Resolvers
  use Absinthe.Schema.Notation

  @desc "Information of a campaign"
  object :campaign do
    field :id, :id
    field :name, :string
    field :start_date, :string
    field :end_date, :string
    field :budget, :float
    field :hashtags, :string
    field :team_id, :id
    field :description, :string
  end

  @desc "Information of a user"
  object :user do
    field :id, :id
    field :email, :string
    field :full_name, :string
    field :mobile_phone, :integer
    field :teams, list_of(:team) do
      resolve &Resolvers.Teams.list_teams/3
    end
  end

  @desc "Information of a team"
  object :team do
    field :id, :id
    field :name, :string
    field :code, :string
    field :color_set, :string
    field :campaigns, list_of(:campaign) do
      resolve &Resolvers.Campaigns.list_campaigns/3
    end
  end

  @desc "Membership link between a user and team"
  object :membership do
    field :id, :id
    field :user_id, :integer
    field :team_id, :integer
  end

end
