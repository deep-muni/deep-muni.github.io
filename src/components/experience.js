import React from 'react';
import '../css/experience.css';
import { ReactComponent as Accenture } from '../raw/Accenture.svg';
import { ReactComponent as MediaNet } from '../raw/MediaNet.svg';
import { ReactComponent as Dalhousie } from '../raw/Dalhousie.svg';
import { ReactComponent as CRA } from '../raw/CRA.svg';


const Experience = () => {

    const workHistory = [
        {
            companyName: "Accenture Solutions",
            designation: "Application Development Analyst",
            type: "Full-Time",
            logo: Accenture,
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
                            <div className="exp__position">
                                <div className="exp__positionLogo">
                                    {
                                        React.createElement(position.logo)
                                    }
                                </div>
                                <div className="exp__positionDetails">
                                    <p>{position.companyName}</p>
                                    <p>{position.designation}</p>
                                    <p><span>{position.duration.joining.month}  {position.duration.joining.year} - </span>
                                    {
                                        position.duration.current ? <span>Present</span> : <span>{position.duration.leaving.month}  {position.duration.leaving.year}</span>
                                    }
                                    </p>
                                    <p>{position.type}</p>
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