import React from 'react';

export const AboutPageAsync = React.lazy(async () => await import('./AboutPage'));

// async () =>
//   await new Promise((res) => {
//     // @ts-expect-error
//     setTimeout(() => {
//       res(import('./AboutPage'));
//     }, 1500);
//   });
