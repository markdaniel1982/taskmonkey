import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Task from "./Task";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/TasksPage.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";

function TasksPage({ message, filter = "" }) {
  const [tasksCopy, setTasksCopy] = useState({ results: [] });
  const [tasks, setTasks] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

//   useEffect(() => {
//     console.log(pathname, "<===pathname use1");
//     const fetchTasks = async () => {
//       try {
//         const { data } = await axiosReq.get(`/tasks/${filter}`);
//         setTasks(data);
//         setTasksCopy(data);
//         setHasLoaded(true);

//         //==========
//         if (!pathname.includes("completed")) {
//           setTasks(tasks);
//           console.log("this is home");
//         } else {
//           console.log("this is filtered");
//           const completedTasks = tasksCopy.results.filter(
//             (task) => task.status === 3
//           );
//           const data = {
//             count: tasksCopy.count,
//             next: tasksCopy.next,
//             previous: tasksCopy.previous,
//             results: completedTasks,
//           };
//           setTasks(data);
//           console.log(data, "<======= completed tasks");
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     setHasLoaded(false);
//     fetchTasks();
//   }, [filter, pathname]);

  //   useEffect(() => {
  //     if (!pathname.includes("completed")) {
  //       setTasks(tasks)
  //       console.log("this is home");
  //     } else {
  //       console.log("this is filtered");
  //         const completedTasks = tasksCopy.results.filter(task => task.status === 3)
  //         const data = {
  //             count:tasksCopy.count,
  //             next:tasksCopy.next,
  //             previous:tasksCopy.previous,
  //             results:completedTasks
  //         }
  //         setTasks(data)
  //         console.log(data, "<======= completed tasks")

  //     }
  //     setHasLoaded(true);
  //   }, [pathname]);

  console.log(tasks, "<===tasks");
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles mobile</p>
        {hasLoaded ? (
          <>
            {tasks.results.length ? (
              tasks.results.map((task) => (
                <Task key={task.id} {...task} setTasks={setTasks} />
              ))
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>Popular profiles for desktop</p>
      </Col>
    </Row>
  );
}

export default TasksPage;
