import React from 'react';
import _ from 'lodash';
import { Link } from '../utils';

const HOME_URL = '';
const SAVED_URL = 'saved';

const FooterNav = (props) => {
  const pageUrl = _.trim(_.get(props, 'pageContext.url', null), '/');

  const homeColor = pageUrl === HOME_URL ? '#25282b' : '#cecece';
  const savedColor = pageUrl === SAVED_URL ? '#25282b' : '#cecece';

  return (
    <nav className="footer-nav">
      <div className="footer-nav__content">
        <Link className={pageUrl !== HOME_URL ? 'footer-nav__link--inactive' : ''} to={`/${HOME_URL}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7402 0.229032C12.3476 -0.0763439 11.7978 -0.0763439 11.4052 0.229032L1.6197 7.83994C1.35486 8.04593 1.19995 8.36266 1.19995 8.69818V20.6582C1.19995 21.5233 1.54361 22.3529 2.15532 22.9646C2.76703 23.5763 3.59668 23.92 4.46177 23.92L7.72358 23.92V21.7455L4.46177 21.7455C4.17341 21.7455 3.89685 21.6309 3.69295 21.427C3.48905 21.2231 3.3745 20.9465 3.3745 20.6582V9.22995L12.0727 2.4647L20.7709 9.22995V20.6582C20.7709 20.9465 20.6563 21.2231 20.4524 21.427C20.2485 21.6309 19.972 21.7455 19.6836 21.7455L16.4218 21.7455V23.92L19.6836 23.92C20.5487 23.92 21.3783 23.5763 21.99 22.9646C22.6018 22.3529 22.9454 21.5233 22.9454 20.6582V8.69818C22.9454 8.36266 22.7905 8.04593 22.5257 7.83994L12.7402 0.229032Z" fill={homeColor} />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.89818 23.92V15.2218H14.2473V23.92H9.89818ZM16.4218 26.0946H7.72364V23.92H9.89818V23.92H14.2473V23.92H16.4218L16.4218 23.92L16.4218 26.0946ZM16.4218 26.0946L16.4218 26.0946H14.2473H9.89818H7.72363V23.92V14.1346C7.72363 13.5341 8.21042 13.0473 8.81091 13.0473H15.3345C15.935 13.0473 16.4218 13.5341 16.4218 14.1346L16.4218 23.92V26.0946Z" fill={homeColor} />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </Link>
        <Link className={pageUrl !== SAVED_URL ? 'footer-nav__link--inactive' : ''} to={`/${SAVED_URL}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.4001 22.8L12.0001 16.8L3.6001 22.8V3.59995C3.6001 2.96343 3.85295 2.35298 4.30304 1.90289C4.75313 1.45281 5.36358 1.19995 6.0001 1.19995H18.0001C18.6366 1.19995 19.2471 1.45281 19.6972 1.90289C20.1472 2.35298 20.4001 2.96343 20.4001 3.59995V22.8Z" stroke={savedColor} stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default FooterNav;