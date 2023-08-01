defmodule Vampapi.Repo.Migrations.CreateCampaigns do
  use Ecto.Migration

  def change do
    create table(:campaigns) do
      add :name, :string
      add :start_date, :date
      add :end_date, :date
      add :budget, :float
      add :hashtags, :string
      add :team_id, :integer
      add :description, :string
    end
  end
end
