import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import styles from "../../styles/TaskCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";


function TaskEditForm() {
  const [errors, setErrors] = useState({});

  const [taskData, setTaskData] = useState({
    title: "",
    content: "",
    due_date: "",
    privacy: "",
    priority: "",
    status: "",
  });
  const { title, content, due_date, privacy, priority, status } = taskData;

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
        try {
            const {data} = await axiosReq.get(`/tasks/${id}/`)
            const {
                title,
                content,
                due_date,
                privacy,
                priority,
                status,
                is_owner,
            } = data;

            is_owner ? setTaskData({
                title,
                content,
                due_date,
                privacy,
                priority,
                status,
                is_owner,
            }) : history.push('/')
        } catch (err) {
            console.log(err)
        }
    };

    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("priority", priority);
    formData.append("due_date", due_date);
    formData.append("privacy", privacy);
    formData.set("status", status);
    // console.log(formData)

    try {
      await axiosReq.put(`/tasks/${id}/`, formData);
      history.push(`/tasks/${id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Container className={`${styles.Container}`}>
        <Form.Group>
          <Form.Label>Task title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        {errors?.title?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="content"
            value={content}
            onChange={handleChange}
          />
        </Form.Group>
        {errors?.content?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group>
          <Form.Label>Priority</Form.Label>
          <Form.Control
            as="select"
            name="priority"
            value={priority}
            onChange={handleChange}
          >
            <option>--- Select a priority ---</option>
            <option value="1">URGENT</option>
            <option value="2">Normal</option>
            <option value="3">Low</option>
          </Form.Control>
        </Form.Group>
        {errors?.priority?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group>
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="date"
            name="due_date"
            value={due_date}
            onChange={handleChange}                        
          />
        </Form.Group>
        {errors?.due_date?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group>
          <Form.Label>Privacy</Form.Label>
          <Form.Control
            as="select"
            name="privacy"
            value={privacy}
            onChange={handleChange}
          >
            <option>--- Select privacy ---</option>
            <option value="1">Private</option>
            <option value="2">Public</option>
          </Form.Control>
        </Form.Group>
        {errors?.privacy?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group>
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            name="status"
            value={status}
            onChange={handleChange}
          >
            {/* <option>--- Select status ---</option> */}
            <option value="1">Not Started</option>
            <option value="2">In Progress</option>
            <option value="3">Complete</option>
            <option value="4">On Hold</option>
          </Form.Control>
        </Form.Group>
        {errors?.status?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Button
          className={`${btnStyles.Button} ${btnStyles.Orange}`}
          onClick={() => history.goBack()}
        >
          cancel
        </Button>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Orange}`}
          type="submit"
        >
          save
        </Button>
      </Container>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={12} lg={8} className="d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default TaskEditForm;
