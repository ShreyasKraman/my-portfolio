import React from 'react';

import classes from "./Project.css";

import Button from '@material-ui/core/Button';

const Project = (props) => {
        
        let viewmore = null;
        if(props.carousel){
            viewmore = <Button variant="contained" 
                            color="primary" 
                            size={"medium"}
                            onClick={() => props.more(props.carousel,props.description)}>
                        View More
                        </Button>
        }   

        let image = null;
        if(props.img){
            image = <img src={props.img} alt={Project.description}/>;
        }

        return(
            <div className={classes.Project}>
                <h4>{props.title}</h4>
                {image}
                <div className={classes.Topic}>
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                    <p>Tech: {props.tech}</p>
                </div>
                <div className={classes.DescriptionBox}>
                    {viewmore}
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