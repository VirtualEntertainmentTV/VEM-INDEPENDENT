import React from "react";
import "../assets/scss/Developer.scss";
import { IconButton } from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Portrait,
  Twitter,
} from "@material-ui/icons";

const Developer = () => {
  return (
    <div className={"Developer"}>
      <h3 className={"Developer-head"}>Meet the developer</h3>
      <div className="Developer-profile">
        <div className="Developer-profileCard">
          <img src={AvatarImage} alt="Profile" />
          <div className={"Card-details"}>
            <h3>Herbert McKoy</h3>
            <p>Full Stack developer</p>
            <p>Technology Educator</p>
          </div>
        </div>
        <div className="Developer-profileDetails">
          <p>
            A Data Science and Software Engineering Student/Teacher who enjoys
            freelance work, teaching the youth, working with people with Autism,
            and creating cool XR and 3D Games. WHATISVET.COM
          </p>
          <p>
            VEM was created as a place for Independent/Unsigned Artists as a
            part of the Virtual Entertainment Television World.
          </p>
          <p>A full-stack web developer and a Technology student/instructor.</p>
          <p>I love designing fully responsive websites.</p>
          <p>
            I have a keen interest in developing projects, whenever I want to
            learn something new.
          </p>
          <p>And a social media blogger.</p>
          <div className="Card-btn">
            <IconButton
              target={"_blank"}
              href={"https://www.facebook.com/VirtualEntertainmentTelevision"}
              title={"VET"}
            >
              <Facebook />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://twitter.com/WHATISVET"}
              title={"VET"}
            >
              <Twitter />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={
                "https://www.linkedin.com/in/virtual-entertainment-tv-7a785b1b8/"
              }
              title={"VET-"}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://www.instagram.com/virtualentertainmenttv/"}
              title={"VET"}
            >
              <Instagram />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://WHATISVET.com/"}
              title={"Web Portfolio"}
            >
              <Portrait />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
