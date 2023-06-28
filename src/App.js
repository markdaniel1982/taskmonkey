import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import pagenotfound from "./assets/pagenotfound.png";
import "./api/axiosDefaults";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route exact path="/signin" render={() => <h1>Sign In</h1>} />
          <Route exact path="/signup" render={() => <h1>Sign Up</h1>} />
          <Route
            render={() => (
              <div>
                <img src={pagenotfound} alt="page not found"></img>
                <h1>Page Not Found</h1>
              </div>
            )}
          />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
