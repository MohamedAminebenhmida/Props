import React from "react";
import PropTypes from "prop-types";
const Profile =({parameters,handleName,children}) => {

    return (
<>
<h1> {parameters.FullName}</h1>
<p> {parameters.Bio}</p>
<h2> {parameters.Profession}</h2>
{children}
<br />
      <button id="click" onClick={() => handleName(parameters.FullName)}>Click me</button>
      <br />
</>
    )
}
Profile.propTypes = {
    FullName: PropTypes.string.isRequired,
    Bio: PropTypes.string,
    Profession: PropTypes.string,
    handleAlert: PropTypes.func,
  };
  Profile.defaultProps = {
    Bio: "To be defined",
  };
  export default Profile
