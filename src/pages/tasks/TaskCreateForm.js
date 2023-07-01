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
    'title': "",
    'content': "",
    'priority': "",
    'due_date': "",
    'privacy': "",
    'status': "",
    'attachments': "",
  });
  const { title, content, priority, due_date, privacy, status, attachments } = taskData;


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
        <Form.Control type="text" name="title" value={title} onChange={handleChange}></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control as="textarea" rows={6} name="content" ></Form.Control>
      </Form.Group>

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="attachments"
                >
                  <Asset src={Upload} message="Click or tap to upload a file (Max 5mb)" />
                </Form.Label>

            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default TaskCreateForm;