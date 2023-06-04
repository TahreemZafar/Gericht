import React from 'react';

import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutUs app__bg flex__center section__padding' id='about'>
     <div className='app__aboutUs-overlay flex__center'>
     {/*  eslint-disable-next-line */}
      <img src={images.G} alt="g letter" />
     </div>
     <div className='app__aboutUs-content flex__center'>

       <div className='app__aboutUs-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
           {/* eslint-disable-next-line */}
          <img src={images.spoon} alt="spoon image" className='spoon__img' />
          <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
          <button type='button' className='custom__button'>Know More</button>
       </div>

        <div className='app__aboutUs-content_knife flex__center'>
        {/*  eslint-disable-next-line */}
          <img src={images.knife} alt="knife image" />
        </div>

        {/* This page is being in a second commit */}

        <div className='app__aboutUs-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          {/*  eslint-disable-next-line */}
          <img src={images.spoon} alt="spoon image" className='spoon__img' />
          <p className='p__opensans'>Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.</p>
          <button type='button' className='custom__button'>Know More</button>
       </div>

     </div>
  </div>
);

export default AboutUs;
