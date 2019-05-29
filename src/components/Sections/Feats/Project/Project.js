import React from 'react';

import classes from "./Project.css";

import Button from '@material-ui/core/Button';

const Project = (props) => {
        
        return(
            <div className={classes.Project}>
                <img src={props.img} alt={Project.description}/>
                <div className={classes.DescriptionBox}>
                    <Button variant="contained" 
                            color="primary" 
                            onClick={() => props.more(props.carousel,props.description)}>
                        View More
                    </Button>
                </div>
            </div>
        );
    }

export default Project;