import React from "react";
import PropTypes from "prop-types";
const Profile = (props) => {
  const { fullName, bio, profession, children } = props;
  return (
    <div>
      <h2>Name :</h2>
      <p>{fullName}</p>
      <h2>Profession :</h2>
      <p> {profession}</p>
      <h2>Biography :</h2>
      <p> {bio}</p>
      {children}
    </div>
  );
};
Profile.defaultProps = {
  fullName: "default fullName",
  profession: "default profession",
  bio: " default bio",
};
Profile.propTypes = { profil: PropTypes.string.isRequired };

export default Profile;
