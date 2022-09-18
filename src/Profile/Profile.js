import React from "react";
import image from '../image.jpg'
const Profile =(props) => {

    return (
<>
<h1> {props.FullName}</h1>
<p> {props.Bio}</p>
<h2> {props.Profession}</h2>
<img src={image} alt=""/>
</>
    )
}
  export default Profile
