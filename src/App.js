import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import pagenotfound from "./assets/pagenotfound.png";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import TaskCreateForm from "./pages/tasks/TaskCreateForm";
import TaskPage from "./pages/tasks/TaskPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import TasksPage from "./pages/tasks/TasksPage";


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
//   const status = task_id.status;
//   const inProgress = Task.status===2;

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
              filter={`owner__tasks__owner__profile=${profile_id}`}/>
            )}
          />
          <Route
            exact
            path={"/in-progress"}
            render={() => (                
              <TasksPage
                message="The monkey couldn't find anything"
                // filter={`tasks__owner__profile${Task?.owner === profile_id}__status=${2}&ordering=-status__in-progress&`}
                // filter={`${Task.status===2}`}
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
          <Route
            render={() => (
              <div className="d-flex flex-column align-items-center">
                <img src={pagenotfound} className="flex-column align-items-center" alt="page not found"></img>
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
