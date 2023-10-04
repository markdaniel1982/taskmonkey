import React from "react";
import styles from "../../styles/Task.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link, useHistory } from "react-router-dom";
import { MoreDropdown } from "../../components/MoreDropDown";
import { axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";

const Task = (props) => {
  const {
    id,
    owner,
    comments_count,
    profile_image,
    title,
    content,
    priority,
    due_date,
    privacy,
    status,
    updated_on,
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
    //   console.log(err);
    }
  };

  return (
    <Container className={styles.Task}>
      {is_owner && Task && (
        <Card>
          <Card.Body>
            <Media>
              <Link to={`/profiles/${id}`}>
                <Avatar src={profile_image} height={50} />
                {owner}
              </Link>

              <div className="d-flex align-items-center justify-content-center">
                {is_owner && taskPage && (
                  <MoreDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                )}
              </div>
            </Media>
          </Card.Body>
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
                    {/* 
                    Privacy to be added in future iteration 
                    */}
          {/* <Card.Body>{privacy && <Card.Text>Privacy: </Card.Text>}</Card.Body> */} 
          <Card.Body>
            {status && <Card.Text>Status: {status}</Card.Text>}
          </Card.Body>
          <Card.Body>
            <div>
              <Link to={`/tasks/${id}`}>
                <i className="far fa-comments" />
              </Link>
              {comments_count}
            </div>
            <Row className="align-self-left mx-auto date-container">
              <span className="font-weight-light small text-muted">
                Last updated: {updated_on}
              </span>
            </Row>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Task;
