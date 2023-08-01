defmodule Vampapi.Users do
  alias Vampapi.Models.User
  alias Vampapi.Repo
  require Ecto.Query

  def find_user(id) do
    User
      |> Repo.get(id)
  end

  def list_users do
    Repo.all(User)
  end
end
