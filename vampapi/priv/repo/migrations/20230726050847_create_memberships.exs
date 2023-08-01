defmodule Vampapi.Repo.Migrations.CreateMemberships do
  use Ecto.Migration

  def change do
    create table(:memberships) do
      add :user_id, :integer
      add :team_id, :integer
    end
  end
end
