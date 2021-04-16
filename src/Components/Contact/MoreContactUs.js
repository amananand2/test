import React from 'react';

import { Phone16, Email16 } from '@carbon/icons-react';
import { DistributionLedger } from '@carbon/pictograms-react';
import { OptimizeCashFlow_02 as OC } from '@carbon/pictograms-react';
import { useSelector } from 'react-redux';

import { InfoCard } from './ContactUs';

const MoreContactUs = () => {
  const ContactUsData = useSelector(state => state.landingPageReducer.moreContactUsData);

  // console.log(reachUsData && reachUsData.help_centers && reachUsData.help_centers[0].help_centers_description ,"reachUsData")

  // console.log(ContactUsData,"ContactUsData")
  // console.log(ContactUsData && ContactUsData.government_partnerships && ContactUsData.government_partnerships[0].general_inquiries[0].general_inquiries_heading ,"ContactUsData")


  return (
    <div className='morecontactPage'>
      <div className='bx--grid--full-width contact-us'>
        <div className='bx--grid '>
          <div className='bx--row'>
            <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4 info__col'>
              <div className='heading '>
                <h4>{ContactUsData && ContactUsData.more_contact_top_heading}</h4>
                <h6>{ContactUsData && ContactUsData.more_contact_heading}</h6>
              </div>
              <div className='line'></div>
              <div className='desc'>
                <p>
                {ContactUsData && ContactUsData.more_contact_description}
                </p>
              </div>
            </div>

            <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4 info__col'>
              <div className='heading'>
                <DistributionLedger />
                <h3>{ContactUsData && ContactUsData.government_heading}</h3>
              </div>

              <div className='line'></div>

              <div className='info--cards'>
                <h6>{ContactUsData && ContactUsData.government_partnerships && ContactUsData.government_partnerships[0].general_inquiries[0].general_inquiries_heading}</h6>
                <InfoCard
                  icon={<Phone16 />}
                  source={`${ContactUsData && ContactUsData.government_partnerships && ContactUsData.government_partnerships[0].general_inquiries[0].general_inquiries_phone} (North America)`}
                />
                <InfoCard icon={<Email16 />} source={ContactUsData && ContactUsData.government_partnerships && ContactUsData.government_partnerships[0].general_inquiries[0].general_inquiries_email} />
              </div>
              <div className='info--cards'>
                <h6>{ContactUsData && ContactUsData.government_partnerships && ContactUsData.government_partnerships[0].federal[0].federal_heading}</h6>
                <InfoCard
                  icon={<Phone16 />}
                  source={`${ContactUsData && ContactUsData.government_partnerships && ContactUsData.government_partnerships[0].federal[0].federal_phone} (North America)`}
                />
                <InfoCard icon={<Email16 />} source={ContactUsData && ContactUsData.government_partnerships && ContactUsData.government_partnerships[0].federal[0].federal_email} />
              </div>
              <div className='info--cards'>
                <h6>{ContactUsData && ContactUsData.government_partnerships && ContactUsData.government_partnerships[0].alliances[0].alliances_heading}</h6>
                <InfoCard
                  icon={<Phone16 />}
                  source={`${ContactUsData && ContactUsData.government_partnerships && ContactUsData.government_partnerships[0].alliances[0].alliances_phone} (North America)`}
                />
                <InfoCard icon={<Email16 />} source={ContactUsData && ContactUsData.government_partnerships && ContactUsData.government_partnerships[0].alliances[0].alliances_email} />
                <InfoCard icon={<Email16 />} source={ContactUsData && ContactUsData.government_partnerships && ContactUsData.government_partnerships[0].alliances[0].alliances_message} />
              </div>
              <div className='info--cards'>
                <h6>{ContactUsData && ContactUsData.government_partnerships && ContactUsData.government_partnerships[0].vendors[0].vendors_heading}</h6>
                <InfoCard
                  icon={<Phone16 />}
                  source={`${ContactUsData && ContactUsData.government_partnerships && ContactUsData.government_partnerships[0].vendors[0].vendors_phone} (North America)`}
                />
                <InfoCard icon={<Email16 />} source={ContactUsData && ContactUsData.government_partnerships && ContactUsData.government_partnerships[0].vendors[0].vendors_email} />
                <InfoCard icon={<Email16 />} source='accounts@uvation.com' />
              </div>
              <div className='info--cards'>
                <h6>{ContactUsData && ContactUsData.government_partnerships && ContactUsData.government_partnerships[0].press[0].press_heading}</h6>
                <InfoCard
                  icon={<Phone16 />}
                  source={`${ContactUsData && ContactUsData.government_partnerships && ContactUsData.government_partnerships[0].press[0].press_phone} (North America)`}
                />
                <InfoCard icon={<Email16 />} source='press@uvation.comm' />
              </div>
            </div>

            <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4 info__col'>
              <div className='heading'>
                <OC />
                <h3>{ContactUsData && ContactUsData.human_heading}</h3>
              </div>

              <div className='line'></div>

              <div className='info--cards'>
                <h6>{ContactUsData && ContactUsData.human_resources && ContactUsData.human_resources[0].human_resources_general[0].human_resources_heading}</h6>
                <InfoCard
                  icon={<Phone16 />}
                  source={`${ContactUsData && ContactUsData.human_resources && ContactUsData.human_resources[0].human_resources_general[0].human_resources_phone} (North America)`}
                />
                <InfoCard icon={<Email16 />} source={ContactUsData && ContactUsData.human_resources && ContactUsData.human_resources[0].human_resources_general[0].human_resources_email} />
              </div>
              <div className='info--cards'>
                <h6>{ContactUsData && ContactUsData.human_resources && ContactUsData.human_resources[0].human_resources_federal[0].human_resources_federal_heading}</h6>
                <InfoCard
                  icon={<Phone16 />}
                  source={`${ContactUsData && ContactUsData.human_resources && ContactUsData.human_resources[0].human_resources_federal[0].human_resources_federal_phone} (North America)`}
                />
                <InfoCard icon={<Email16 />} source={ContactUsData && ContactUsData.human_resources && ContactUsData.human_resources[0].human_resources_federal[0].human_resources_federal_email} />
              </div>
              <div className='info--cards'>
                <h6>{ContactUsData && ContactUsData.human_resources && ContactUsData.human_resources[0].human_resources_alliances[0].human_resources_alliances_heading}</h6>
                <InfoCard
                  icon={<Phone16 />}
                  source={`${ContactUsData && ContactUsData.human_resources && ContactUsData.human_resources[0].human_resources_alliances[0].human_resources_alliances_phone} (North America)`}
                  
                />
                <InfoCard icon={<Email16 />} source={ContactUsData && ContactUsData.human_resources && ContactUsData.human_resources[0].human_resources_alliances[0].human_resources_alliances_email} />
                <InfoCard icon={<Email16 />} source={ContactUsData && ContactUsData.human_resources && ContactUsData.human_resources[0].human_resources_alliances[0].human_resources_alliances_message} />

              </div>
              <div className='info--cards'>
                <h6>{ContactUsData && ContactUsData.human_resources && ContactUsData.human_resources[0].human_resources_vendors[0].human_resources_vendors_heading}</h6>
                <InfoCard
                  icon={<Phone16 />}
                  source={`${ContactUsData && ContactUsData.human_resources && ContactUsData.human_resources[0].human_resources_vendors[0].human_resources_vendors_phone} (North America)`}
                />
                <InfoCard icon={<Email16 />} source={ContactUsData && ContactUsData.human_resources && ContactUsData.human_resources[0].human_resources_vendors[0].human_resources_vendors_email} />
                <InfoCard icon={<Email16 />} source='accounts@uvation.com' />
              </div>
              <div className='info--cards'>
                <h6>{ContactUsData && ContactUsData.human_resources && ContactUsData.human_resources[0].human_resources_press[0].human_resources_press_heading}</h6>
                <InfoCard
                  icon={<Phone16 />}
                  source={`${ContactUsData && ContactUsData.human_resources && ContactUsData.human_resources[0].human_resources_press[0].human_resources_press_phone} (North America)`}
                />
                <InfoCard icon={<Email16 />} source={ContactUsData && ContactUsData.human_resources && ContactUsData.human_resources[0].human_resources_press[0].human_resources_press_email} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreContactUs;
