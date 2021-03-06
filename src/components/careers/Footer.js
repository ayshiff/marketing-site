import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import { LayoutControl, ButtonLink, InterstitialTitle, Link } from 'components';
import { applicationHref } from './links';

const useStyles = createUseStyles((theme) => ({
  hero: {
    textAlign: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },

  spacing: {
    paddingBottom: 24,
    marginBottom: 40,
  },

  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    marginLeft: 16,

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const CareersFooter = ({ typeformSlug }) => {
  const classes = useStyles();

  return (
    <div className={classnames(classes.spacing, classes.hero)}>
      <LayoutControl maxWidthBreakpoint="lg">
        <InterstitialTitle text="Sound good?" />
        <div>
          <ButtonLink to={applicationHref(typeformSlug)}>
            <span>Apply for this role</span>
          </ButtonLink>

          <Link to="/careers/" className={classnames('typography-mono', classes.link)}>
            See all roles
          </Link>
        </div>
      </LayoutControl>
    </div>
  );
};

export default CareersFooter;
