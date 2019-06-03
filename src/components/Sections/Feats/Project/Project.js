import React from 'react';

import classes from "./Project.css";

import Button from '@material-ui/core/Button';

const Project = (props) => {
        
        return(
            <div className={classes.Project}>
                <h4>{props.title}</h4>
                <img src={props.img} alt={Project.description}/>
                <div className={classes.Topic}>
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                    <p>Tech: {props.tech}</p>
                </div>
                <div className={classes.DescriptionBox}>
                    <Button variant="contained" 
                            color="primary" 
                            size={"medium"}
                            onClick={() => props.more(props.carousel,props.description)}>
                        View More
                    </Button>
                    <Button variant="contained"
                            color="primary"
                            size={"medium"}
                            href={props.link}
                            target="_blank">
                        Github
                    </Button>
                </div>
            </div>
        );
    }

export default Project;