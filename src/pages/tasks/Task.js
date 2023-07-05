import React from "react";
import styles from "../../styles/Task.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

const Task = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
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

  return (
    <Container>
      {is_owner && Task && (
        <Card className={styles.Task}>
          <Card.Body>
            {title && <Card.Title className="text-center">{title}</Card.Title>}
          </Card.Body>
          <Card.Body>
            <Media className="align-items-center justify-content-between">
              <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} text={owner} height={40} />
              </Link>
              <div className="d-flex align-items-center">
                <span>
                  Date added: {created_on} | Updated: {updated_on}
                  {is_owner && taskPage && "..."}
                </span>
              </div>
            </Media>
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
              <Link to={`/profiles/${currentUser}/tasks/${id}`}>
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
