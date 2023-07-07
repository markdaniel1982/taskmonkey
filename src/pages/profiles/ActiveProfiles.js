import React from "react";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useProfileData } from "../../contexts/ProfileDataContext";

import Profile from "./Profile";

const ActiveProfiles = ({ mobile }) => {
  const { activeProfiles } = useProfileData();

  return (
    <Container className={appStyles.BusyMonkeys}>
      {activeProfiles.results.length ? (
        <>
          <p>Our Busiest Monkeys</p>
          {activeProfiles.results.map((profile) => (
            <Profile key={profile.id} profile={profile} />
          ))}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default ActiveProfiles;
