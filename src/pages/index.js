import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => {
  return <div>로딩중...</div>;
};

export const About = Loadable({
  loader: () => import('./About'),
  loading: Loading,
});

export const Toy = Loadable({
  loader: () => import('./Toy'),
  loading: Loading,
});

// One depth pages
// export { default as About } from './About';
// export { default as Toy } from './Toy';
export { default as NotFound } from './NotFound';
export { default as Development } from './Development';

// Development details
export { default as DevelopmentDetails } from './DevelopmentDetails';
export { default as ReactEvernote } from './DevelopmentDetails/ReactEvernote';
export { default as SpeechRecognition } from './DevelopmentDetails/SpeechRecognition';
export { default as Balloon } from './DevelopmentDetails/Balloon';
export { default as RemoteSeminar } from './DevelopmentDetails/RemoteSeminar';
export { default as RemoteMeeting } from './DevelopmentDetails/RemoteMeeting';
export { default as RemoteLive } from './DevelopmentDetails/RemoteLive';
export { default as BookTransform } from './DevelopmentDetails/BookTransform';
export { default as CanvasCase } from './DevelopmentDetails/CanvasCase';
export { default as DropboxTourBook } from './DevelopmentDetails/DropboxTourBook';
export { default as FileAPI } from './DevelopmentDetails/FileAPI';
export { default as FrontendConvension } from './DevelopmentDetails/FrontendConvension';
export { default as ImageSlider } from './DevelopmentDetails/ImageSlider';
export { default as IpadSmartCover } from './DevelopmentDetails/IpadSmartCover';
export { default as Localization } from './DevelopmentDetails/Localization';
export { default as NateOnMyPC } from './DevelopmentDetails/NateOnMyPC';
export { default as SamsungRemotePC } from './DevelopmentDetails/SamsungRemotePC';
export { default as RemoteViewBusiness } from './DevelopmentDetails/RemoteViewBusiness';
export { default as RemoteViewPersonal } from './DevelopmentDetails/RemoteViewPersonal';
export { default as RemoteWOL } from './DevelopmentDetails/RemoteWOL';
export { default as WebrtcLab } from './DevelopmentDetails/WebrtcLab';
export { default as WebrtcPresentation } from './DevelopmentDetails/WebrtcPresentation';
export { default as ZzangGu } from './DevelopmentDetails/ZzangGu';
export { default as Rsupport } from './DevelopmentDetails/Rsupport';
