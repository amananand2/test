import React from 'react';
import { Link } from 'react-router-dom';
import Footerlogo from './../../../img/Homepage/logo.png';
import {
  CloudApp20,
  Wikis20,
  Unlocked16,
  ShoppingCart16,
  Chat16,
  Education16,
} from '@carbon/icons-react';

const FooterBotm = () => {
  return (
    <div className='bx--grid--full-width bx--no-gutter footer-bottom'>
      <div className='bx--grid'>
        <div className='bx--row footer-bottem--toprow '>
          <div className='bx--col-lg-2 footer--list'>
            <h5>Products & Services</h5>

            <div className='bx--row'>
              <div className='bx--col bx--no-guttter--right'>
                <li>
                  <Link to='/'>InfraStrcture</Link>
                </li>
                <li>
                  <Link to='/'>DevOps</Link>
                </li>
                <li>
                  <Link to='/'>CyberSecurity</Link>
                </li>
                <li>
                  <Link to='/'>Technology Services</Link>
                </li>
              </div>
            </div>
          </div>
          <div className='bx--col-lg-5  bx--col--md-4 bx--col-sm-2 footer--list'>
            <div className='bx--grid '>
              <div className='bx--row'>
                <h5>Discover</h5>
              </div>
              <div className='bx--row'>
                <div className='bx--col bx--no-gutter--left'>
                  <li>
                    <Link to='/Industries'>Industries</Link>
                  </li>
                  <li>
                    <Link to='/Innovation'>Innovation</Link>
                  </li>
                  <li>
                    <Link to='/'>Marketplace</Link>
                  </li>
                </div>

                <div className='bx--col bx--no-gutter--left'>
                  <li>
                    <Link to='/'> Blog </Link>
                  </li>
                  <li>
                    <Link to='/'> Focus </Link>
                  </li>
                  <li>
                    <Link to='/'> Covid-19 </Link>
                  </li>
                </div>
                <div className='bx--col bx--no-gutter--left'>
                  <li>
                    <Link to='/'> Lorem ipsum </Link>
                  </li>
                  <li>
                    <Link to='/'> Lorem ipsum </Link>
                  </li>
                  <li>
                    <Link to='/'> Lorem ipsum </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className='bx--col-lg-4   bx--col--md-4 bx--col-sm-2 footer--list'>
            <div className='bx--grid '>
              <div className='bx--row'>
                <h5>We are here to help!</h5>
              </div>
              <div className='bx--row'>
                <div className='bx--col--no-guttter'>
                  <p>
                    Contact us to learn more about our products, solutions and
                    services.
                  </p>
                  <li>
                    <Link to='/'> How To Reach Us </Link>
                  </li>
                  <li>
                    <Link to='/'> Support Center </Link>
                  </li>
                  <li>
                    <Link to='/'> Submit a Service Request </Link>
                  </li>
                  <li>
                    <Link to='/'> My Support Requests </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className='bx--col-lg-4  bx--col--md-2 bx--col-sm-2 footer--list no--border'>
            <div className='bx--grid '>
              <div className='bx--row'>
                <h5>About Uvation</h5>
              </div>
              <div className='bx--row'>
                <div className='bx--col--no-guttter'>
                  <li>
                    <Link to='/careers'>Careers</Link>
                  </li>
                  <li>
                    <Link to='/partnership'>Partnerships and Alliances</Link>
                  </li>
                  <li>
                    <Link to='/investersrelation'>Investors</Link>
                  </li>
                  <li>
                    <Link to='/investersla'>SLAs & Term</Link>
                  </li>
                  <li>
                    <Link to='/about'>About</Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className='bx--col-lg-1  bx--col--md-1 bx--col-sm-2 footer--img '>
            <Link to='/'>
              <img className='logo-img' alt='' src={Footerlogo} />
            </Link>
          </div>
        </div>

        <div className=' footer--icons--row '>
          <div>
            <Link to='/' className='footer--icons'>
              <span>
                <Wikis20 fill='white' />
              </span>
              <span className='footer--icons--text'>Uvation.com</span>
            </Link>
          </div>

          <div className='seprt'>/</div>

          <div>
            <Link to='/' className='footer--icons'>
              <span>
                <CloudApp20 fill='white' />
              </span>
              <span className='footer--icons--text'>
                Uvation Cloud Services
              </span>
            </Link>
          </div>

          <div className='seprt'>/</div>

          <div>
            <Link to='/' className='footer--icons'>
              <span>
                <ShoppingCart16 fill='white' />
              </span>
              <span className='footer--icons--text'>Marketplace</span>
            </Link>
          </div>

          <div className='seprt'>/</div>

          <div>
            <Link to='/' className='footer--icons'>
              <span>
                <Chat16 fill='white' />
              </span>
              <span className='footer--icons--text'>Support</span>
            </Link>
          </div>

          <div className='seprt'>/</div>

          <div>
            <Link to='/' className='footer--icons'>
              <span>
                <Unlocked16 fill='white' />
              </span>
              <span className='footer--icons--text'>Uvation Identity</span>
            </Link>
          </div>

          <div className='seprt'>/</div>

          <div>
            <Link to='/' className='footer--icons'>
              <span>
                <Education16 fill='white' />
              </span>
              <span className='footer--icons--text'>Uvation.org</span>
            </Link>
          </div>
        </div>

        <div className='bx--row bx--no-gutter footer-bottem--bottemrow '>
          <div className='bx--col bx--no-gutter footer__term'>
            <p>Copyright © 2020 Uvation LLC. All rights reserved.</p>
          </div>
          <div className='footer__terms'>
            <div className='footer__term'>
              <p>
                <Link to='/'> Privacy </Link>
              </p>
              <span>/</span>
            </div>

            <div className='footer__term'>
              <p>
                <Link to='/'> Cookies & ad choices </Link>
              </p>
              <span>/</span>
            </div>

            <div className='footer__term'>
              <p>
                <Link to='/'> Terms of use </Link>
              </p>
              <span>/</span>
            </div>

            <div className='footer__term'>
              <p>
                <Link to='/'> Limited warranty statement </Link>
              </p>
              <span>/</span>
            </div>

            <div className='footer__term'>
              <p>
                <Link to='/'> Terms & conditions of sales & service </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBotm;
