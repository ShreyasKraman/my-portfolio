import React from 'react';

import Slide from 'react-reveal/Slide';

import classes from './Events.css'; 

import Phood from '../../../assets/phood.png';
import NU from '../../../assets/nu.png';
import MU from '../../../assets/mu.png';
import LTI from '../../../assets/lti.png';

const Events = () => {

      const containerleft = [classes.container,classes.left];
      const containerRight = [classes.container,classes.right];
    
    return(
        <Slide right>
          <div className={classes.Events} id="Timeline">
              <h2>Timeline</h2>
              <div className={classes.Timeline}>
                <div className={containerleft.join(" ")}>
                  <div className={classes.content}>
                    <img src={Phood} alt="Phood LLC"/><h3>Phood LLC</h3>
                    <h6>Software Developer Intern (01/2019 - 04/2019)</h6>
                    <ul>
                      <li>Collaborated with UI/UX team for wireframing and developed consumer-end user interface in vue.js, vuex, typescript</li>
                      <li>Reduced post-consumer hardware product installation time by 40% using Raspberry Pi Zero W</li>
                      <li>Coordinated and took interviews to build team of ML engineers to develop an algorithm for live image classification </li>
                    </ul>
                  </div>
                </div>
                <div className={containerRight.join(" ")}>
                  <div className={classes.content}>
                    <img src={NU} alt="Northeastern University"/><h3>Northeastern University</h3>
                    <h6>Masters in Information Systems (09/2017 - 08/2019)</h6>
                    <ul>
                      <li>Learnt AWS as a part of academics and developed a full stack spring boot application with CI/CD pipeline</li>
                      <li>Worked as data manager assistant where I designed databases, stored procedures, reports and data input interface in MS SQL</li>
                      <li>Process around 5K records per day for statistical modeling and visualization in MS Excel using pivot tables and pivot charts</li>
                    </ul>
                  </div>
                </div>
                <div className={containerleft.join(" ")}>
                  <div className={classes.content}>
                    <img src={LTI} alt="L&T Infotech"/><h3>Larsen & Toubro Infotech</h3>
                    <h6>Software developer  (06/2015 - 07/2017)</h6>
                    <ul>
                      <li>Developed more than 20 business critical and complex reusable modules in SAP ABAP</li>
                      <li>Managed a team of three junior developers, distributed different tasks, reviewed all codes and documentation</li>
                      <li>Collaborated with team of volunteers to teach, distribute books and donate blood as part of <a href="https://www.lntinfotech.com/social-responsibility/" target="_blank" rel="noopener noreferrer">LTI CSR</a> team</li>
                    </ul>
                  </div>
                </div>
                <div className={containerRight.join(" ")}>
                  <div className={classes.content}>
                    <img src={MU} alt="Mumbai University"/><h3>Mumbai University</h3>
                    <h6>Bachelor's in Information Technology (05/2011 - 06/2015)</h6>
                    <ul>
                      <li>Participated in 7 different National level technical research paper conferences</li>
                      <li>Student chapter representative for <a href="http://www.iete.org/aboutiete.html" target="_blank" rel="noopener noreferrer">IETE</a></li>
                      <li>Conducted various camps, blood donation drives, book donation drives and also took part in awareness programmes and rallies as part of <a href="https://nss.gov.in/" target="_blank" rel="noopener noreferrer">NSS</a> team.</li>
                      <li>Published a research paper with topic name "A Novel Method for Undergraduate Admissions Using Cloud as a Platform", view paper <a href="http://ijesc.org/upload/c38b725f75110451c5b87744fbe81b17.A%20Novel%20Method%20for%20Undergraduate%20Admissions%20Using%20Cloud%20as%20a%20Platform.pdf" target="_blank" rel="noopener noreferrer">here</a></li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </Slide>
    );
}

export default Events;