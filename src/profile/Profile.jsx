import React from "react";
import PropTypes from "prop-types";
const Profile = (props) => {
  const { fullName, bio, profession, children } = props;
  const showfullName = (fullName) => alert(`fullname: ${fullName}`);
  const handleClick = (e) => showfullName(fullName);
  return (
    <div
      className="card"
      style={{
        background: "#DFE7FF",
        boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        maxWidth: " 300px",
        margin: "auto",
        textalign: "center",
      }}
    >
      <h2
        style={{
          color: "#BA49FF",
          textAlign: "center",
          textDecoration: "underline",
        }}
      >
        Name :
      </h2>
      <h4>{fullName}</h4>
      <h2
        style={{
          color: "#BA49FF",
          textAlign: "center",
          textDecoration: "underline",
        }}
      >
        Profession :
      </h2>
      <h4> {profession} </h4>
      <h2
        style={{
          color: "#BA49FF",
          textAlign: "center",
          textDecoration: "underline",
        }}
      >
        Biography :
      </h2>
      <p> {bio}</p>
      <div
        style={{
          textAlign: "center",
        }}
      >
        {children}{" "}
      </div>
      <br />
      <button>
        <a href="#!" onClick={handleClick} style={{ color: "black" }}>
          fullName
        </a>
      </button>
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
