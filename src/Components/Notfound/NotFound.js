import React from 'react';
import { Link } from 'react-router-dom';
import MainHeader from '../Homepage/Mainheader/MainHeader';

const NotFound = () => {
  return (
    <>
      <MainHeader />
      <div className='bx--grid--full-width notfound'>
        <div className='bx--col-lg-5 bx--offset-lg-1 banner '>
          <h2>Oh boy, is getting really cloudy in here!</h2>
          <h4>404 Error</h4>
          <p>
            The page you're looking for may have been moved or deleted. Start a
            new search on Uvation.com or visit one of the popular sites shown
            below. Here are some helpul places to start from:
          </p>
          <div className='links'>
            <Link to='/'>Uvation Website</Link>
          </div>

          <div className='links'>
            <Link to='/'>Uvation Marketplace</Link>
          </div>

          <div className='links'>
            <Link to='/'>Uvation Portal</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
