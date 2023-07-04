import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Task from "./Task";

function TaskPage() {
  const { id } = useParams();
  const [task, setTask] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: task }] = await Promise.all([
          axiosReq.get(`/tasks/${id}`),
        ]);
        setTask({ results: [task] });
        console.log(task);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);


  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <h3>Not Started</h3>
        <Task {...task.results[0]} setTask={setTask} TaskPage />
        <Container className={appStyles.Content}>Comments</Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <h3>Popular profiles for desktop</h3>
      </Col>
    </Row>
  );
}

export default TaskPage;