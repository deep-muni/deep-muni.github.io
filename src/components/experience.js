import React from 'react';
import '../css/experience.css';
import Accenture from '../raw/Accenture';
import MediaNet from '../raw/MediaNet';
import Dalhousie from '../raw/Dalhousie';
import CRA from '../raw/CRA';

const Experience = () => {

    const workHistory = [
        {
            companyName: "Accenture Solutions",
            designation: "Application Development Analyst",
            type: "Full-Time",
            logo: Accenture,
            url: "https://www.accenture.com/in-en/accenture-solutions-private",
            duration: {
                current: false,
                joining: {day: "30", month: "August", year: "2016"},
                leaving: {day: "06", month: "March", year: "2019"}
            }
        },
        {
            companyName: "Media.Net",
            designation: "Associate UI Developer",
            type: "Full-Time",
            logo: MediaNet,
            url: "https://www.media.net/",
            duration: {
                current: false,
                joining: {day: "11", month: "March", year: "2019"},
                leaving: {day: "28", month: "June", year: "2019"}
            }
        },
        {
            companyName: "Dalhousie University",
            designation: "Graduate Teaching Assistant",
            type: "Part-Time",
            logo: Dalhousie,
            url: "https://www.dal.ca/",
            duration: {
                current: false,
                joining: {day: "01", month: "September", year: "2020"},
                leaving: {day: "31", month: "December", year: "2020"}
            }
        },
        {
            companyName: "Canada Revenue Agency",
            designation: "IT Analyst/Developer",
            type: "Internship",
            logo: CRA,
            url: "https://www.canada.ca/en/revenue-agency.html",
            duration: {
                current: false,
                joining: {day: "11", month: "January", year: "2021"},
                leaving: {day: "30", month: "April", year: "2021"}
            }
        },
        {
            companyName: "Canada Revenue Agency",
            designation: "IT Developer",
            type: "Full-Time",
            logo: CRA,
            url: "https://www.canada.ca/en/revenue-agency.html",
            duration: {
                current: true,
                joining: {day: "03", month: "May", year: "2021"},
                leaving: {day: "", month: "", year: ""}
            }
        },
    ];

    return (
        <div className="exp">
            <div className="exp__history">
                {
                    workHistory.map((position, index) => {
                        return(
                            <div className="exp__position" key={index}>
                                <a href={position.url} target="__blank" rel="noopener noreferrer"/>
                                <div className="exp__positionLogo">
                                    {
                                        React.createElement(position.logo)
                                    }
                                </div>
                                <div className="exp__positionDetails">
                                    <p className="exp__duration">
                                        <span>{position.duration.joining.month}  {position.duration.joining.year} - </span>
                                        {
                                            position.duration.current ? <span>Present</span> : <span>{position.duration.leaving.month}  {position.duration.leaving.year}</span>
                                        }
                                    </p>
                                    <p className="exp__company">{position.companyName}</p>
                                    <p className="exp__designation">{position.designation}</p>
                                    <p className="exp__type">{position.type}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Experience;