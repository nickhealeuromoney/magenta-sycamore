import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';
import Action from './Action';

export default class Header extends React.Component {
    render() {
        return (
            <header className="site-header">
              <div className="container container--lg">
                <nav className="navbar" aria-label="Main Navigation">
                  <Link className="sr-only" to="#content">Skip to main content</Link>
                  {_.get(this.props, 'pageContext.site.siteMetadata.header.logo', null) ? (
                  <Link className="navbar__logo" to={withPrefix('/')}><img src={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo', null))} alt={_.get(this.props, 'pageContext.site.siteMetadata.header.title', null)} /></Link>
                  ) : 
                  <Link className="h4 navbar__title" to={withPrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title', null)}</Link>
                  }
                </nav>
              </div>
            </header>
        );
    }
}
