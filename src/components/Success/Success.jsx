import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../../mock/data';

const Success = ({ resetSuccess }) => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Thank You</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Thank You" />
      </Helmet>

      <Fade bottom duration={1000} delay={500} distance="30px">
        <h1 className="hero-title text-center">
          We'll be in contact no more than 2 days{' '}
          <span role="img" aria-label="emoji">
            😀
          </span>
        </h1>
      </Fade>
      <Fade bottom duration={1000} delay={1000} distance="30px">
        <p className="hero-cta justify-content-center">
          <Link onClick={resetSuccess} className="cta-btn cta-btn--hero" to="/">
            Go back
          </Link>
        </p>
      </Fade>
    </>
  );
};

export default Success;
