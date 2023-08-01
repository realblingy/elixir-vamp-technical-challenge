defmodule Vampapi.Models.Team do
  use Ecto.Schema

  schema "teams" do
    field :name, :string
    field :code, :string
    field :color_set, :string
  end

end
