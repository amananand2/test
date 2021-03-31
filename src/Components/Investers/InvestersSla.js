import React, { useEffect, useRef } from 'react';
import { Button, ModalWrapper } from 'carbon-components-react';
import { ArrowDown20, CaretRight16, Document32 } from '@carbon/icons-react';
import Footer from '../Homepage/Footer/Footer';
import MainHeader from '../Homepage/Mainheader/MainHeader';

// import Footer from "../Homepage/Footer/Footer";

const TermsCard = ({
  icon,
  heading,
  title = 'Title',
  optionalLabel = 'label',
}) => (
  <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4 bx--no-gutter'>
    <div className='card'>
      <div className='bx--col-lg-12 content'>
        <div className='icon'>
          {icon} {<Document32 />}
        </div>
        <div className='card--heading'>
          <h4>{heading} Acceptance of Terms</h4>
        </div>
      </div>

      <ModalWrapper
        triggerButtonKind='ghost'
        renderTriggerButtonIcon={CaretRight16}
        size='sm'
        buttonTriggerText='Read'
        modalHeading={title}
        modalLabel={optionalLabel}
        primaryButtonText='I understand'
      >
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
            accumsan augue. Phasellus consequat augue vitae tellus tincidunt
            posuere. Curabitur justo urna, consectetur vel elit iaculis,
            ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie
            tellus. Quisque consectetur non risus eu rutrum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
            accumsan augue. Phasellus consequat augue vitae tellus tincidunt
            posuere. Curabitur justo urna, consectetur vel elit iaculis,
            ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie
            tellus. Quisque consectetur non risus eu rutrum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
            accumsan augue. Phasellus consequat augue vitae tellus tincidunt
            posuere. Curabitur justo urna, consectetur vel elit iaculis,
            ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie
            tellus. Quisque consectetur non risus eu rutrum.
          </p>
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
            accumsan augue. Phasellus consequat augue vitae tellus tincidunt
            posuere. Curabitur justo urna, consectetur vel elit iaculis,
            ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie
            tellus. Quisque consectetur non risus eu rutrum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
            accumsan augue. Phasellus consequat augue vitae tellus tincidunt
            posuere. Curabitur justo urna, consectetur vel elit iaculis,
            ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie
            tellus. Quisque consectetur non risus eu rutrum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
            accumsan augue. Phasellus consequat augue vitae tellus tincidunt
            posuere. Curabitur justo urna, consectetur vel elit iaculis,
            ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie
            tellus. Quisque consectetur non risus eu rutrum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
            accumsan augue. Phasellus consequat augue vitae tellus tincidunt
            posuere. Curabitur justo urna, consectetur vel elit iaculis,
            ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie
            tellus. Quisque consectetur non risus eu rutrum.
          </p>
        </>
      </ModalWrapper>
    </div>
  </div>
);

const scrollToRef = () => window.scrollTo(0, 0);
const scrollToRef1 = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop - 125,
    behavior: 'smooth',
  });

const InvestersSla = () => {
  const myRef = useRef(null);
  const myRef1 = useRef(null);

  const executeScroll = () => scrollToRef(myRef);
  const executeScroll1 = () => scrollToRef1(myRef1);

  useEffect(() => {
    executeScroll();
  }, []);

  return (
    <>
      <MainHeader />
      <div className='investersSla'>
        <div className='bx--grid--full-width banner'>
          <div className='bx--grid'>
            <div className='bx--row'>
              <div className='bx--col-lg-12 content'>
                <div className='heading'>
                  <h1>Uvation SLAs & Terms of Use</h1>
                </div>
                <div className='sub-heading'>
                  <h3>Last Updated: June 24, 2015</h3>
                </div>
                <Button
                  className='see-more'
                  renderIcon={ArrowDown20}
                  onClick={executeScroll1}
                >
                  See more
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='bx--grid--full-width cards'>
          <div className='bx--grid '>
            <div className='bx--row' ref={myRef1}>
              <TermsCard />
              <TermsCard />
              <TermsCard />
              <TermsCard />

              <TermsCard />
              <TermsCard />
              <TermsCard />
              <TermsCard />

              <TermsCard />
              <TermsCard />
              <TermsCard />
              <TermsCard />

              <TermsCard />
              <TermsCard />
              <TermsCard />
              <TermsCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InvestersSla;
