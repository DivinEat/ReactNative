import "./App.css";
import ButtonGroup from "./components/ButtonGroup";
import Page from "./components/Page";
import ListProvider from "./contexts/ListContext";
import { useState } from "react";
import Button from "./components/lib/Button";
import CredentialsProvider from "./contexts/CredentialContext";
import ThemeProvider from "./contexts/ThemeContext";
import Credentials from "./components/Admin/Credentials";
import Header from "./components/Header";
import ShowItem from "./components/Cart/ShowItem";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [page, setPage] = useState(0);
  return (
    <ThemeProvider>
      <CredentialsProvider>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <ButtonGroup />
              <Button
                title="Change Page"
                onClick={() => setPage((page + 1) % 3)}
              />
              <Switch>
                <Route path="/credentials">
                  <Header />
                  <Credentials />
                </Route>
                <ListProvider>
                  <Route path="/items/:id" exact>
                    <Header />
                    <ShowItem />
                  </Route>
                  <Route path="/" exact>
                    <Page />
                  </Route>
                </ListProvider>
              </Switch>
            </header>
          </div>
        </BrowserRouter>
      </CredentialsProvider>
    </ThemeProvider>
  );
}

export default App;
