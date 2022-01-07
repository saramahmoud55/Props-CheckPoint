import React from "react";
import PropTypes from "prop-types";

const Profile = props => {
    const handleClick = e => {
        e.preventDefault();
        alert(props.fullName)
      };
      const imgStyle ={width:"250px",hight:"300px",borderRadius:"15px"}
      const btnStyle ={backgroundColor:"#000C66",width:"120px",fontSize:"25px",borderRadius:"10px",color:"white",border:"#000C66"}

    return (
    <>
     <h1>I'm {props.fullName}</h1>
     <h2> {props.bio}</h2>
     <h2>{props.profession}</h2>
     <img style={imgStyle} src={props.src} alt="shafik habar" className="imagesrc"/><br/>
     <button style={btnStyle} onClick={handleClick}>Click me</button>
     </>
    );
  }
  

  Profile.prototype={
    fullName : PropTypes.string.isRequired,
    bio :PropTypes.string.isRequired,
    profession : PropTypes.string.isRequired,
    src:PropTypes.object.isRequired
};

  Profile.defaultProps={
      fullName: 'Nobody', bio:'I do not work',profession:'I have no job',src:'There is a photo somewhere'
  }

  export default Profile;
