import React, { useRef, useState } from "react";

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
import { Alert, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";


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

  const attachmentsInput = useRef(null)
  const history = useHistory()

  const handleChange = (event) => {
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeAttachments = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(attachments);
      setTaskData({
        ...taskData,
        attachments: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();

    formData.append("title", title)
    formData.append("content", content)
    formData.append("priority", priority)
    formData.append("due_date", due_date)
    formData.append("privacy", privacy)
    formData.append("status", status)
    formData.append("attachments", attachmentsInput.current.files[0])

    try {
        const { data } = await axiosReq.post("/tasks/", formData);
        history.push(`/tasks/${data.id}`)
    } catch (err) {
        console.log(err)
        if (err.response?.status !== 401){
            setErrors(err.response?.data)
        }
    }
  }

  

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
          <option value="1">Not Started</option>
          <option value="2">In Progress</option>
          {/* <option>On Hold</option> */}
          <option value="3">Complete</option>
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
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={5} lg={8} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
        <Col className="py-2 p-0 p-md-2" md={7} lg={4}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {attachments ? (
                <>
                  <figure>
                    <Image
                      className={appStyles.Image}
                      src={attachments}
                      rounded
                    />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Orange} btn`}
                      htmlFor="attachments"
                    >
                      Change the file
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="attachments"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload a file (Max 5mb)"
                  />
                </Form.Label>
              )}

              <Form.File
                id="attachments"
                accept="image/*,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handleChangeAttachments}
                ref={attachmentsInput}
              />
            </Form.Group>
            {errors?.attachments?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default TaskCreateForm;
