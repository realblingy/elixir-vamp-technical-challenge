defmodule VampapiWeb.Router do
  use VampapiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api" do
    pipe_through :api

    forward "/graphiql", Absinthe.Plug.GraphiQL,
      schema: VampapiWeb.Schema

    forward "/", Absinthe.Plug,
      schema: VampapiWeb.Schema
  end

end
