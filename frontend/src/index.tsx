import { ColorModeScript, theme } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/provider"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import HomePage from "./pages/home"
import UserPage from "./pages/user"
import TeamsPage from "./pages/teams"

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/user/:user_id",
    element: <UserPage />,
  },
  {
    path: "team/:user_id/:team_id",
    element: <TeamsPage />
  }
])

const client = new ApolloClient({
  uri: "http://localhost:4000/api",
  cache: new InMemoryCache()
})

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

