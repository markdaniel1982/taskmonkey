import React from 'react'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import styles from "../styles/SignInUpForm.module.css";
import appStyles from "../App.module.css";

const LogoComponent = () => {
  return (
    <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://res.cloudinary.com/dexpjjntx/image/upload/v1687949371/taskmonkey_p5rppm.png"
          }
          alt="logo"
        />
      </Col>
  )
}

export default LogoComponent