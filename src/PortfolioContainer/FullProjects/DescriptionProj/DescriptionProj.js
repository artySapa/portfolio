import React from "react";
import "./DescriptionProj.css";

import { Button } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";

export default function DescriptionProj(props) {
  const { description } = props;
  if (props.ind === "1") {
    return (
      <div className="project-body">
        <h1 className="project-header">{props.title}</h1>
        <div className="video-demo-container">
          <video
            className="video-demo"
            controls
            autoPlay
            muted
            loop
            src={props.video}
          />
          <div className="demo-description1">
            <h2 className="project-header2"> About </h2>
            <div className="description-test">
              {description.map((description) => (
                <p>{description}</p>
              ))}
            </div>
          </div>
        </div>
        <Button
          variant="contained"
          href={props.to_link}
          className="project-button"
          sx={{
            marginLeft: "50%",
            marginTop: "2%",
            backgroundColor: "rgb(252, 91, 91)",
            "&:hover": {
              backgroundColor: "rgb(200, 91, 91)",
            },
          }}
          startIcon={<GitHubIcon></GitHubIcon>}
          target="_blank"
        >
          GitHub
        </Button>
      </div>
    );
  } else if (props.ind === "2") {
    return (
      <div className="project-body">
        <h1 className="project-header">{props.title}</h1>
        <div className="video-demo-container">
          <div className="demo-description2">
            <h2 className="project-header2"> About </h2>
            <div className="description-test">
              {description.map((description) => (
                <p>{description}</p>
              ))}
            </div>
          </div>
          <video
            className="video-demo"
            controls
            autoPlay
            muted
            loop
            src={props.video}
          />
        </div>
        <Button
          variant="contained"
          href={props.to_link}
          className="project-button"
          sx={{
            marginLeft: "50%",
            marginTop: "2%",
            backgroundColor: "rgb(252, 91, 91)",
            "&:hover": {
              backgroundColor: "rgb(200, 91, 91)",
            },
          }}
          startIcon={<GitHubIcon></GitHubIcon>}
          target="_blank"
        >
          GitHub
        </Button>
      </div>
    );
  }
}
