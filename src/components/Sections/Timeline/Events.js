import React from 'react';

import {Timeline} from 'react-material-timeline';
import {Avatar, Icon} from '@material-ui/core'; 

import classes from './Events.css'; 

const Events = () => {

    const events = [
        {
          title: 'Phood LLC',
          subheader: '01/2019 - 04-2019',
          description: [ 'Software Developer Intern' ],
          icon: <Avatar><Icon>work</Icon></Avatar>,
        },
        {
          title: 'Northeastern University',
          subheader: '09/2017 - 08/2019',
          description: [ 'Masters in Information Systems', ],
          icon: <Avatar><Icon>school</Icon></Avatar>,
        },
        {
          title: 'L&T Infotech',
          subheader: '06/2015 - 07/2017',
          description: [ 'Software Engineer' ],
          icon: <Avatar><Icon>work</Icon></Avatar>
        },
        {
          title: 'SIES GST',
          subheader: '05/2011 - 06/2015',
          description: [ 'Bachelors in Information Technology' ],
          icon: <Avatar><Icon>school</Icon></Avatar>
        }
      ];
    
    return(
        <div className={classes.Timeline}>
            <h4>My Life</h4>
            <Timeline className={classes.Timeline} events={events}/>
        </div>
    );
}

export default Events;