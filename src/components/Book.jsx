import React, { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './Entourage'
import Entourage from './Entourage';
import CoverPage from './CoverPage';
import FirstImage from './FirstImage';
import './Book.css';
import FirstImageDesc from './FirstImageDesc';
import OurStory from './OurStory';
import OurStoryVid from './OurStoryVid';
import ThemePage from './ThemePage';
import LocationPage from './LocationPage';
import EntouragePage1 from './EntouragePage1';
import EntouragePage2 from './EntouragePage2';

// Page component with forwardRef correctly set up
const Page = forwardRef(({ number, children }, ref) => (
  <div className="demoPage" ref={ref}>
    {/* <h1>R&I</h1> */}
    <p>{children}</p>
    {/* <p>Page number: {number}</p> */}
  </div>
));

function Book() {
  return (
    <HTMLFlipBook
      width={800}
      height={1000}
      maxShadowOpacity={0.5}
      drawShadow={true}
      showCover={true}
      size="fixed"
    >
      <Page number={1}>
        <CoverPage/>
      </Page>
      <Page number={2}>
        <FirstImage/>
      </Page>
      <Page number={3}>
        <FirstImageDesc/>
      </Page>
      <Page number={4}>
        <OurStory/>
      </Page>
      <Page number={5}>
        <OurStoryVid/>
      </Page>
      <Page number={6}>
        <ThemePage/>
      </Page>
      <Page number={7}>
        <LocationPage/>
      </Page>
      <Page number={8}>
        <EntouragePage1/>
      </Page>
      <Page number={9}>
        <EntouragePage2/>
      </Page>
      <Page number={10}></Page>
    </HTMLFlipBook>
  );
}

export default Book;