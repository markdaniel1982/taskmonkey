import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/Upload.png";

import styles from "../../styles/TaskCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";

function TaskCreateForm() {
  const [errors, setErrors] = useState({});

  const [taskData, setTaskData] = useState({
    title: "",
    content: "",
    priority: "",
    due_date: "",
    privacy: "",
    status: "",
    attachments: "",
  });
  const { title, content, priority, due_date, privacy, status, attachments } =
    taskData;

  const handleChange = (event) => {
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Task title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control as="textarea" rows={6} name="content" value={content} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Priority</Form.Label>
        <Form.Control as="select" name="priority" value={priority}>
          <option>Urgent</option>
          <option>Normal</option>
          <option>Low</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" name="duedate" value={due_date} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Privacy</Form.Label>
        <Form.Control as="select" name="privacy" value={privacy}>
          <option>Private</option>
          <option>Public</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Status</Form.Label>
        <Form.Control as="select" name="status" value={status}>
          <option>Not Started</option>
          <option>In Progress</option>
          <option>On Hold</option>
          <option>Complete</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Attachments</Form.Label>
        <Form.Control
          type="file"
          multiple
          rows={5}
          name="attachments"
          value={attachments}
        ></Form.Control>
      </Form.Group>

      <Button
        className={`${btnStyles.Button} ${btnStyles.Orange}`}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Orange}`}
        type="submit"
      >
        create
      </Button>
    </div>
  );

  return (
    <Form>
      <Row>
        <Col md={5} lg={8} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
        <Col className="py-2 p-0 p-md-2" md={7} lg={4}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              <Form.Label
                className="d-flex justify-content-center"
                htmlFor="Upload"
              >
                <Asset
                  src={Upload}
                  message="Click or tap to upload a file (Max 5mb)"
                />
              </Form.Label>
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default TaskCreateForm;
