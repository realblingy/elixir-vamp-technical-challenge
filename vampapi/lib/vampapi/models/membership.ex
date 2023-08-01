defmodule Vampapi.Models.Membership do
  use Ecto.Schema

  schema "memberships" do
    field :user_id, :integer
    field :team_id, :integer
  end

end
