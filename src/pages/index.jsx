import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import Theme, { theme } from '@pagerland/themes/src/Corporate';
import {
  Navbar,
  Welcome,
  Offer,
  Goals,
  Mission,
  Cta,
  Team,
  Copyright,
  Contact,
} from '@pagerland/themes/src/Corporate/containers';
import data from '@pagerland/themes/src/Corporate/data';

import preview from '@pagerland/themes/src/Corporate/assets/preview.jpg';

import SEO from '../components/SEO';

const Corporate = ({ url }) => (
  <Theme>
    <Helmet>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Helmet>
    <SEO title="Willkommen!" />

    <Navbar />
    <Welcome name="" />
    <Offer name="angebot" />
    <Goals name="velden" />
    <Mission name="cardinal" />
    <Cta name="cta" {...data.supportCta} />
    <Team name="team" />
    <Cta name="cta" {...data.contactCta} />
    <Contact name="kontakt" />
    <Copyright />
  </Theme>
);

Corporate.propTypes = {
  url: PropTypes.string,
};

Corporate.defaultProps = {
  url: 'https://theyphania.de',
};

export default Corporate;
