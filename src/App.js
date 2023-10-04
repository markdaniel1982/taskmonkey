import styles from "./App.module.css";
import appStyles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Link, Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import TaskCreateForm from "./pages/tasks/TaskCreateForm";
import TaskPage from "./pages/tasks/TaskPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import NotFound from "./components/NotFound";
import TaskEditForm from "./pages/tasks/TaskEditForm";
import Image from "react-bootstrap/Image";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import LogoComponent from "./components/LogoComponent";
import ActiveProfiles from "./pages/profiles/ActiveProfiles";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  const currentUser = useCurrentUser();

  const loggedInPage = (
    <>
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Container>
                  <Row>
                    <Col className="align-items-center">
                      <LogoComponent />
                      <h2>
                        Click on your profile or add a task to get started
                      </h2>
                    </Col>
                    <Col xs lg="4">
                      <ActiveProfiles />
                    </Col>
                  </Row>
                </Container>
              </>
            )}
          />
          
          <Route exact path="/profiles/:id/tasks/not-started" render={() => <ProfilePage status={"1"} />} />
          <Route exact path="/profiles/:id/tasks/in-progress" render={() => <ProfilePage status={"2"} />} />
          <Route exact path="/profiles/:id/tasks/completed" render={() => <ProfilePage status={"3"} />} />
          <Route exact path="/profiles/:id/tasks/on-hold" render={() => <ProfilePage status={"4"} />} />

          <Route exact path="/tasks/create" render={() => <TaskCreateForm />} />
          <Route exact path="/tasks/:id" render={() => <TaskPage />} />
          <Route exact path="/tasks/:id/edit" render={() => <TaskEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage status={""} />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </>
  );

  const notLoggedInPage = (
    <>
      <Container>
        <Switch>
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
        </Switch>
      </Container>
      <div className="text-center">
        <Image
          className={`${appStyles.LogoHome}`}
          src={
            "https://res.cloudinary.com/dexpjjntx/image/upload/v1687949371/taskmonkey_p5rppm.png"
          }
        />
        <p>
          Not got an account? click <Link to={"/signin"}>here</Link> to sign up
        </p>
      </div>
    </>
  );

  return (
    <>
      <div className={styles.App}>
        <NavBar />

        {currentUser ? loggedInPage : notLoggedInPage}
      </div>
    </>
  );
}

export default App;
