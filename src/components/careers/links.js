import React from 'react';
import { renderToString } from 'react-dom/server';

export const applicationHref = (typeformSlug) =>
  `https://roadiehq.typeform.com/to/cdF3Ls?roleslug=${typeformSlug}&utm_source=roadie.io`;

export const backstageLink = renderToString(
  <a href="https://github.com/backstage/backstage" target="_blank" rel="noopener noreferrer">
    the open-source platform
  </a>
);
