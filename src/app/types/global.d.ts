declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
declare module '*.jpeg';
declare module '*.png';
declare module '*.jpg';
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
  // import React from 'react';
  // const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  // export default SVG;
}

declare const __IS_DEV__: boolean;
