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
import TasksPage from "./pages/tasks/TasksPage";
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
  const profile_id = currentUser?.profile_id || "";

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
                    <Col className="align-item-center"><LogoComponent /></Col>
                    <Col xs lg="4"><ActiveProfiles /></Col>
                  </Row>
                </Container>
              </>
            )}
          />
          <Route
            exact
            path={"/my-tasks"}
            render={() => (
              <TasksPage
                message="The monkey couldn't find anything"
                // eslint-disable-next-line no-restricted-globals
                filter={`tasks__${profile_id}?__status=${2}`}
              />
            )}
          />
          <Route
            exact
            path={"/completed"}
            render={() => (
              <TasksPage
                message="The monkey couldn't find anything"
                filter={`currentUser__${profile_id}?__task__status=${3}&ordering=-due_date&`}
              />
            )}
          />

          <Route exact path="/tasks/create" render={() => <TaskCreateForm />} />
          <Route exact path="/tasks/:id" render={() => <TaskPage />} />
          <Route exact path="/tasks/:id/edit" render={() => <TaskEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
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
