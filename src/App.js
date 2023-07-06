import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import TaskCreateForm from "./pages/tasks/TaskCreateForm";
import TaskPage from "./pages/tasks/TaskPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import TasksPage from "./pages/tasks/TasksPage";
import NotFound from "./components/NotFound";
import TaskEditForm from "./pages/tasks/TaskEditForm";


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <TasksPage
              message="Task monkey couldn't find anything with those keywords. Try another, or throw a banana or something"
              />
            )}
          />
          <Route
            exact
            path={"/in-progress"}
            render={() => (                
              <TasksPage
                message="The monkey couldn't find anything"
                // eslint-disable-next-line no-restricted-globals
                filter={`owner__profile__task__status=${2}`}
              />
            )}
          />
          <Route
            exact
            path={"/completed"}
            render={() => (
              <TasksPage
                message="The monkey couldn't find anything"
                filter={`tasks__owner__task__status=${3}&ordering=-due_date&`}
              />
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/tasks/create" render={() => <TaskCreateForm />} />
          <Route exact path="/tasks/:id" render={() => <TaskPage />} />
          <Route exact path="/tasks/:id/edit" render={() => <TaskEditForm />} />
          <Route render={() => ( <NotFound />)}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
