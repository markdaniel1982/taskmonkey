import React from "react";
import styles from "../../styles/Task.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, useHistory } from "react-router-dom";
import { MoreDropdown } from "../../components/MoreDropDown";
import { axiosRes } from "../../api/axiosDefaults";
// import Avatar from "../../components/Avatar";

const Task = (props) => {
  const {
    id,
    owner,
    comments_count,
    title,
    content,
    priority,
    due_date,
    privacy,
    status,
    updated_on,
    created_on,
    taskPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/tasks/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/tasks/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      {is_owner && Task && (
        <Card className={styles.Task}>
          <div className="d-flex align-items-center">
            {created_on}
            <span>{updated_on}</span>
            {is_owner && taskPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
          <Card.Body>
            <Card.Body>{title && <Card.Text>{title}</Card.Text>}</Card.Body>
          </Card.Body>
          <Card.Body>{content && <Card.Text>{content}</Card.Text>}</Card.Body>
          <Card.Body>
            {priority && <Card.Text>Priority: {priority}</Card.Text>}
          </Card.Body>
          <Card.Body>
            {due_date && <Card.Text>Due date: {due_date}</Card.Text>}
          </Card.Body>
          <Card.Body>{privacy && <Card.Text>Privacy: </Card.Text>}</Card.Body>
          <Card.Body>
            {status && <Card.Text>Status: {status}</Card.Text>}
          </Card.Body>

          <Card.Body>
            <div className={styles.taskBar}>
              <Link to={`/tasks/${id}`}>
                <i className="far fa-comments" />
              </Link>
              {comments_count}
            </div>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Task;
