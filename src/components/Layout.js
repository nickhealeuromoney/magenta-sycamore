import React from 'react';
import { Helmet } from 'react-helmet';
import _ from 'lodash';

import '../sass/main.scss';
import Header from './Header';
import FooterNav from './FooterNav';

export default class Body extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{_.get(this.props, 'pageContext.frontmatter.title', null) && (_.get(this.props, 'pageContext.frontmatter.title', null) + ' | ')}{_.get(this.props, 'pageContext.site.siteMetadata.title', null)}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initialScale=1.0" />
          <meta name="description" content={_.get(this.props, 'pageContext.frontmatter.excerpt', null) || _.get(this.props, 'pageContext.site.siteMetadata.description', null)} />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet"></link>
        </Helmet>
        <div id="site-wrap" className="site">
          <Header {...this.props} />
          <main id="content" className="site-content">
            {this.props.children}
          </main>
          <FooterNav {...this.props} />
        </div>
      </React.Fragment>
    );
  }
}
