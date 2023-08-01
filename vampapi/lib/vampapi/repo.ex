defmodule Vampapi.Repo do
  use Ecto.Repo,
    otp_app: :vampapi,
    adapter: Ecto.Adapters.Postgres
end
