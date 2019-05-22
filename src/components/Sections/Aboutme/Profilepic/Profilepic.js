import React from 'react';

import Mypic from '../../../../assets/cartoonish.jpg';

import Image from 'react-bootstrap/Image';

const Profilepic = () => {
    return(
        <div>
            <Image src={Mypic} alt="Shreyas Kalyanaraman" thumbnail></Image>
        </div>
    );
}

export default Profilepic;