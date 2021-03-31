import React from 'react';

import { Phone16, Email16 } from '@carbon/icons-react';
import { DistributionLedger } from '@carbon/pictograms-react';
import { OptimizeCashFlow_02 as OC } from '@carbon/pictograms-react';

import { InfoCard } from './ContactUs';

const MoreContactUs = () => {
  return (
    <div className='morecontactPage'>
      <div className='bx--grid--full-width contact-us'>
        <div className='bx--grid '>
          <div className='bx--row'>
            <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4 info__col'>
              <div className='heading '>
                <h4>More contact options</h4>
                <h6>we are here to help</h6>
              </div>
              <div className='line'></div>
              <div className='desc'>
                <p>
                  Contact us to learn more about ourproducts, solutions and
                  services.
                </p>
              </div>
            </div>

            <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4 info__col'>
              <div className='heading'>
                <DistributionLedger />
                <h3>Government, Partnerships, Vendors, Legal</h3>
              </div>

              <div className='line'></div>

              <div className='info--cards'>
                <h6>General Inquiries</h6>
                <InfoCard
                  icon={<Phone16 />}
                  source='+1 855-721-1155 (North America)'
                />
                <InfoCard icon={<Email16 />} source='info@uvation.com' />
              </div>
              <div className='info--cards'>
                <h6>Federal, Military &Local Government:</h6>
                <InfoCard
                  icon={<Phone16 />}
                  source='+1 855-721-1155 (North America)'
                />
                <InfoCard icon={<Email16 />} source='sales@uvation.com' />
              </div>
              <div className='info--cards'>
                <h6>Alliances & Partnerships:</h6>
                <InfoCard
                  icon={<Phone16 />}
                  source='+1 855-721-1155 (North America)'
                />
                <InfoCard icon={<Email16 />} source='sales@uvation.com' />
              </div>
              <div className='info--cards'>
                <h6>Vendors & Procurement:</h6>
                <InfoCard
                  icon={<Phone16 />}
                  source='+1 855-721-1155 (North America))'
                />
                <InfoCard icon={<Email16 />} source='billing@uvation.com' />
                <InfoCard icon={<Email16 />} source='accounts@uvation.com' />
              </div>
              <div className='info--cards'>
                <h6>Press, News & Social inquiries:</h6>
                <InfoCard
                  icon={<Phone16 />}
                  source='+1 855-721-1155 (North America))'
                />
                <InfoCard icon={<Email16 />} source='press@uvation.comm' />
              </div>
            </div>

            <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4 info__col'>
              <div className='heading'>
                <OC />
                <h3>Press, Investors, Finance, Human Resources</h3>
              </div>

              <div className='line'></div>

              <div className='info--cards'>
                <h6>General Inquiries</h6>
                <InfoCard
                  icon={<Phone16 />}
                  source='+1 855-721-1155 (North America)'
                />
                <InfoCard icon={<Email16 />} source='info@uvation.com' />
              </div>
              <div className='info--cards'>
                <h6>Federal, Military &Local Government:</h6>
                <InfoCard
                  icon={<Phone16 />}
                  source='+1 855-721-1155 (North America)'
                />
                <InfoCard icon={<Email16 />} source='sales@uvation.com' />
              </div>
              <div className='info--cards'>
                <h6>Alliances & Partnerships:</h6>
                <InfoCard
                  icon={<Phone16 />}
                  source='+1 855-721-1155 (North America)'
                />
                <InfoCard icon={<Email16 />} source='sales@uvation.com' />
              </div>
              <div className='info--cards'>
                <h6>Vendors & Procurement:</h6>
                <InfoCard
                  icon={<Phone16 />}
                  source='+1 855-721-1155 (North America))'
                />
                <InfoCard icon={<Email16 />} source='billing@uvation.com' />
                <InfoCard icon={<Email16 />} source='accounts@uvation.com' />
              </div>
              <div className='info--cards'>
                <h6>Press, News & Social inquiries:</h6>
                <InfoCard
                  icon={<Phone16 />}
                  source='+1 855-721-1155 (North America))'
                />
                <InfoCard icon={<Email16 />} source='press@uvation.comm' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreContactUs;
