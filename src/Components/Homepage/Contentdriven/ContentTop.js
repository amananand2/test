import React from 'react';
import { ArrowRight16 } from '@carbon/icons-react';
import { Link } from 'carbon-components-react';
import ContentBotm from './ContentBotm';

const BannerVal = {
  title: 'CAPTION TITLE',
  heading: `This is a content driven section`,
  about: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus
  quam eu porta molestie. Fusce et vulputate metus, ac sagittis risus.
  Nam maximus ex nec purus accumsan, eu congue lorem pellentesque. Etiam
  sodales mi id cursus facilisis . Etiam imperdiet nisi est, quis mollis
  lacus bibendum non.`,
};
const SectionVal = {
  title: 'Supportive sub-section title',
  about: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
  urna congue est. Lorem ipsum dolor sit amet, consectetur adipiscing
  elit. Fusce quis urna congue est.ty`,
};

const LeftSection = () => {
  return (
    <div className='bx--col-lg-15'>
      <h6>{BannerVal.title}</h6>

      <h2>{BannerVal.heading}</h2>

      <div className='about'>
        <p>{BannerVal.about}</p>
      </div>
      <div className='button'>
        <Link href='/'>
          Learn more
          <div className='arrow'>
            <ArrowRight16 fill='#ffffff' />
          </div>
        </Link>
      </div>
    </div>
  );
};

const SubSection = () => {
  return (
    <div className='bx--col sub--section bx--col-sm-4'>
      <div className='bx--col-lg-14'>
        <h5>{SectionVal.title}</h5>
        <p>{SectionVal.about}</p>
      </div>
      <div className='arrow'>
        <ArrowRight16 />
      </div>
    </div>
  );
};

const ContentTop = () => {
  return (
    <div className='bx--grid--full-width contentTop'>
      <div className='bx--grid'>
        <div className='bx--row bx--row--condensed'>
          <div className='bx--col-lg-6 banner '>
            <LeftSection />
          </div>
          <SubSection />
          <SubSection />
        </div>
      </div>
      <ContentBotm />
    </div>
  );
};

export default ContentTop;
