import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import HTMLFlipBook from 'react-pageflip';
import './style.css';

import CoverPage from './CoverPage';
import FirstImage from './FirstImage';
import FirstImageDesc from './FirstImageDesc';
import OurStory from './OurStory';
import OurStoryVid from './OurStoryVid';
import ThemePage from './ThemePage';
import LocationPage from './LocationPage';
import EntouragePage1 from './EntouragePage1';
import EntouragePage2 from './EntouragePage2';
import EntouragePage3 from './EntouragePage3';
import EntouragePage4 from './EntouragePage4';
import japanVid from '../../images/JAPAN.mp4';
import RsvpPage from './RsvpPage';
import LastPage from './LastPage';
import TimelinePage from './TimelinePage';

const Page = React.forwardRef(({ children }, ref) => (
  <div className="demoPage" ref={ref}>
    <div className="Alex">{children}</div>
  </div>
));

function Book() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const videoRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleResize = () => {
    setIsMobileView(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePageFlip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsExpanded(false);
    document.body.classList.remove('blur-background');
  };

  const handlePlay = () => {
    setIsExpanded(true);
    document.body.classList.add('blur-background');
    setTimeout(() => {
      if (videoRef.current) videoRef.current.play();
    }, 50);
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsExpanded(false);
    document.body.classList.remove('blur-background');
  };

  const overlay = (
    <div className="video-overlay">
      <button className="close-button" onClick={handleClose}>✕</button>
      <video ref={videoRef} className="expanded-video" src={japanVid} controls />
    </div>
  );

  return (
    <>
      <div className="book-container">
        <HTMLFlipBook
          width={isMobileView ? 400 : 500}
          height={isMobileView ? 710 : 710}
          size="fixed"
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          pagesPerView={isMobileView ? 1 : 2}
          onFlip={handlePageFlip}
        >
          <Page><CoverPage /></Page>
          <Page><FirstImage /></Page>
          <Page><FirstImageDesc /></Page>
          <Page><OurStory /></Page>
          <Page><OurStoryVid onPlay={handlePlay} /></Page>
          <Page><ThemePage /></Page>
          <Page><LocationPage /></Page>
          <Page><TimelinePage/></Page>
          <Page><EntouragePage1 /></Page>
          <Page><EntouragePage4 /></Page>
          <Page><EntouragePage2 /></Page>
          <Page><RsvpPage/></Page>
          <Page><LastPage/></Page>
        </HTMLFlipBook>
      </div>

      {isExpanded && ReactDOM.createPortal(overlay, document.body)}
    </>
  );
}

export default Book;
