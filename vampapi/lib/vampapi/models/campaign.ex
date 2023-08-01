defmodule Vampapi.Models.Campaign do
  use Ecto.Schema

  schema "campaigns" do
    field :start_date, :date
    field :end_date, :date
    field :budget, :float
    field :hashtags, :string
    field :team_id, :integer
    field :description, :string
    field :name, :string
  end

end
