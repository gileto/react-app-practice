import React from "react";
import classes from "./Profile.module.css";
import Posts from "../Posts/Posts";

const ProfileInfo = (props) => {
 return (
  <div className={classes.contentAbout}>
   <img
    src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/127888424/original/808ab52e6e9d78214bda893ecf1d14353f426a4b/draw-pet-cartoon-portrait-avatar-social-media-pet-in-24-hrs.png"
    alt=""
   />
   <div className={classes.about}>
    <p>Maria Gileto</p>
    <div>
     <p>Birth date: 24.04.1995</p>
     <p>City: Tbilisi</p>
     <p>Education: SibSau</p>
     <p>
      {" "}
      <a href="gileto.surge.sh"> Web-Site: gileto.surge.sh</a>
     </p>
    </div>
   </div>
  </div>
 );
};

const Profile = () => {
 return (
  <div className={classes.content}>
   <img
    className={classes.imgTitle}
    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
    alt=""
   />
   <ProfileInfo />
   <Posts />
  </div>
 );
};

export default Profile;
