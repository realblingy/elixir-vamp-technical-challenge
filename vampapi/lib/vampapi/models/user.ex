defmodule Vampapi.Models.User do
  use Ecto.Schema

  schema "users" do
    field :email, :string
    field :full_name, :string
    field :mobile_phone, :integer
  end

end
