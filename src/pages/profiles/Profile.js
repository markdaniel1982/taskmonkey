import React from "react";
import styles from "../../styles/Profile.module.css";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

const Profile = (props) => {
  const { profile, imageSize = 55 } = props;
  const { id, image, tasks_count, owner } = profile;
  

  return (
    <div className="my-3 d-flex align-items-center">
      <div>
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <Avatar src={image} height={imageSize} />
          <div className={styles.WordBreak}>
            <strong>{owner}</strong>: <span className="text-muted" >{tasks_count}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
