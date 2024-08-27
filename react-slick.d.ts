declare module 'react-slick' {
  import * as React from 'react';

  interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    arrows?: boolean;
    [key: string]: any; // This allows for additional settings not included in the type definitions
  }

  export default class Slider extends React.Component<Settings> {}
}
