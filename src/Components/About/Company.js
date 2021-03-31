import React from 'react';
import { Advocate } from '@carbon/pictograms-react';

const CompanyCard = ({ pictoIcon, title, desc }) => (
  <div className='bx--col bx--col-md-8 bx--col-sm-4'>
    <div className='card'>
      <div className='content'>
        <div className='pictoicon'>{pictoIcon}</div>
        <div className='title'>
          <h4>{title} Title of the card</h4>
        </div>
        <div className='desc'>
          <p>
            {desc}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            maximus quam eu porta molestie. Fusce et vulputate metus, ac
            sagittis risus.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Company = () => {
  return (
    <div className='company'>
      <div className='bx--grid company--page'>
        <div className='bx--row'>
          <div className='bx--col-lg-4'>
            <div className='about--our'>
              <h6>ABOUT OUR</h6>
              <h3>Company</h3>
              <p>
                Our vision is to be a global end-to-end Information Technology,
                Aerospace, Defense and Consulting Company providing services,
                innovating products and pioneering technologies to create
                prosperity and a better world.
              </p>
            </div>
          </div>
          <div className='bx--col'>
            <div className='cards'>
              <div className='bx--row bx--no-gutter--left'>
                <CompanyCard pictoIcon={<Advocate />} />
                <CompanyCard pictoIcon={<Advocate />} />
                <CompanyCard pictoIcon={<Advocate />} />
              </div>
              <div className='bx--row bx--no-gutter--left'>
                <CompanyCard pictoIcon={<Advocate />} />
                <CompanyCard pictoIcon={<Advocate />} />
                <CompanyCard pictoIcon={<Advocate />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
