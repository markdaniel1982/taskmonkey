import React from 'react'
import styles from "../../styles/Profile.module.css"
import btnStyle from "../../Button.module.css"
import { useCurrentUser } from '../contexts/CurrentUserContext'

const Profile = (props) => {
    const { profile, mobile, imageSize=55 } = props
    const { id, image, owner } = profile

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;


  return (
    <div
    className={`my-3  d-flex align-items-center ${mobile && 'flex-column'}`}
    >
        <div>
            <Link className="align-self-center" to={`/profiles/${id}`} >
                <Avatar src={image} height={55}/>
                <strong>{owner}</strong>
            </Link>
        </div>
    </div>
  )
}

export default Profile