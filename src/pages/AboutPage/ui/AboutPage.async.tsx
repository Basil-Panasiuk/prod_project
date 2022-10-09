import React from 'react';

// export const AboutPageAsync = React.lazy(async () => await import('./AboutPage'));

export const AboutPageAsync = React.lazy(
  async () =>
    await new Promise((res) => {
      setTimeout(() => {
        // @ts-expect-error
        res(import('./AboutPage'));
      }, 1000);
    })
);
