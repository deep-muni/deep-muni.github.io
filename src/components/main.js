import React from 'react';
import '../css/main.css';
import {GitHub, LinkedIn, Email, GetApp} from '@material-ui/icons';
import {Tooltip, Zoom} from "@material-ui/core";
import Resume from "../raw/Resume.pdf";

const Main = () => {

    const personalDetails = {
        name: "Deep Muni",
        email: "deep.muni94@gmail.com",
        title: "Full Stack Developer"
    }

    const links = [
        {index: 0, name: "GitHub", tagName: GitHub, url: "https://github.com/deep-muni/"},
        {index: 1, name: "LinkedIn", tagName: LinkedIn, url: "https://www.linkedin.com/in/deep-muni-775942bb/"},
        {index: 2, name: "Resume", tagName: GetApp, url: Resume},
        {index: 3, name: "Email", tagName: Email, url: "mailto:" + personalDetails.email},
    ];

    return (
        <div className="main" id="section-home">
            <div className="main__name-container">
                <p className="main__name">{personalDetails.name}</p>
            </div>
            <div className="main__title-container">
                <p className="main__title">{personalDetails.title}</p>
            </div>
            <div className="main__icon-container">
                {
                    links.map(link => {
                        return (
                            <div className="main__icon-wrapper">
                                <Tooltip
                                    title={<span className="main__tooltip">{link.name}</span>}
                                    arrow key={link.index}
                                    TransitionComponent={Zoom}>
                                    <div className="main__icon">
                                        {
                                            React.createElement(link.tagName, {style: {fontSize : "45px"}})
                                        }
                                        <a href={link.url} target="_blank" rel="noopener noreferrer">A</a>
                                    </div>
                                </Tooltip>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Main;
