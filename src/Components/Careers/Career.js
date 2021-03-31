import React, { useRef } from 'react';
import {
  Search,
  Button,
  Select,
  SelectItem,
  SelectItemGroup,
} from 'carbon-components-react';

import { Code16, ArrowDown16, Chat16, ArrowRight16 } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import { RichTextFormat } from '@carbon/pictograms-react';

import FooterBotm from '../Homepage/Footer/FooterBotm';
import MainHeader from '../Homepage/Mainheader/MainHeader';

const CareerCard = ({
  heading = 'development',
  posticon,
  postname = 'Front-end Developer',
}) => (
  <div className='bx--col-lg-2 bx--col-md-2 bx--col-sm-2'>
    <div className='card'>
      <h4>{heading}</h4>
      <div className='card--content'></div>
      <div>
        <Code16 fill='#0F61FD' /> {posticon}
      </div>
      <div>
        <p>{postname}</p>
      </div>
    </div>
  </div>
);

const Testimonial = ({ reviews, name, position }) => (
  <div className='bx--col-lg-6 bx--no-gutter--left testimonial'>
    <div className='review'>
      <p>
        {reviews}
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus
        quam eu porta molestie. Fusce et vulputate metus, ac sagittis risus."
      </p>
    </div>
    <div className='bx--col-lg-2 bx--no-gutter sep-line'> </div>
    <div className='name'>
      <p>Johanna Doe {name}</p>
    </div>

    <div className='position'>
      <p>Software Engineer {position}</p>
    </div>
  </div>
);

const ProcessCard = ({ num, pctitle, titlepict, prodetails }) => (
  <div className='bx--row stages'>
    <div className='bx--col-lg-5 bx--no-gutter--left'>
      <div className='bx--col left'>
        <div className='num'>
          <p>{num}01</p>
        </div>
        <div>
          <h4>{pctitle}Apply to desired position</h4>
        </div>
        <div className='titlepict'>
          {titlepict}
          <RichTextFormat />
        </div>
      </div>
    </div>
    <div className='bx--col'>
      <div className='details'>
        <p>
          {prodetails}Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce cursus elementum justo. Morbi congue sit amet massa et mollis.
          Proin sit amet elit mi. Nunc ante sem, aliquam a erat ac, tincidunt
          condimentum nisl. Proin eros urna, imperdiet eget condimentum at,
          dictum id nisl.
        </p>
      </div>
    </div>
  </div>
);

const JobCard = ({ location, jobtitle, exp, department }) => (
  <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4'>
    <div className='job--card'>
      <div className='location'>
        <h6>United States | Los Angeles{location}</h6>
      </div>
      <div className='bx--col-lg-12 job-title'>
        <h4>Back-end Software Engineer{jobtitle}</h4>
      </div>
      <div className='exp'>
        <h6>senior, +5 years of exp.{exp}</h6>
      </div>
      <div className='department'>
        <h6>senior, +5 years of exp.{department}</h6>
        <span>
          <Link to='/'>
            <ArrowRight16 />
          </Link>
        </span>
      </div>
    </div>
  </div>
);

//Career Page function

const scrollToRef = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop - 50,
    behavior: 'smooth',
  });

const Career = () => {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  return (
    <>
      <MainHeader />
      <div className='bx--grid--full-width career'>
        <div className='banner'>
          <div className='bx--grid'>
            <div className='bx--row'>
              <div className='bx--col-lg-7'>
                <div className='content'>
                  <div className='heading'>
                    <h1>Grow your career with Uvation</h1>
                  </div>
                  <div className='searchbar'>
                    <Search
                      id='search-2'
                      placeHolderText='Search'
                      labelText='search'
                    />
                    <div className='searchbtn'>
                      <Button>Search</Button>
                    </div>
                  </div>
                  <div className='featured'>
                    <h5>Featured:</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='bx--row cards'>
              <CareerCard />
              <CareerCard />
              <CareerCard />
              <CareerCard />
              <CareerCard />
              <CareerCard />
              <CareerCard />
              <CareerCard />
            </div>
            <div className='bx--row see-all' onClick={executeScroll}>
              <p style={{ cursor: 'pointer' }}>See all available jobs </p>
              <Link to='#'>
                <ArrowDown16 />
              </Link>
            </div>
          </div>
        </div>

        <div className='join--banner'>
          <div className='bx--grid'>
            <div className='bx--row'>
              <div className='bx--col'>
                <div className='content'>
                  <div className='title'>
                    <h6>CAREERS</h6>
                  </div>

                  <div className='heading'>
                    <h3>Why to join Uvation</h3>
                  </div>

                  <Testimonial />

                  <div className='lines'>
                    <div className=' line'></div>
                    <div className=' line'></div>
                    <div className=' line'></div>
                    <div className=' line'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='application--process'>
          <div className='bx--grid'>
            <div className='bx--row '>
              <div className='bx--col'>
                <div className='content'>
                  <div className='title'>
                    <h6>APPLYING</h6>
                  </div>

                  <div className='heading'>
                    <h4>Application process</h4>
                  </div>
                </div>
              </div>
            </div>
            <ProcessCard />
            <ProcessCard />
            <ProcessCard />
            <ProcessCard />
            <ProcessCard />
            <ProcessCard />
          </div>
        </div>

        <div className='bx--grid--full-width job--optn' ref={myRef}>
          <div className='bx--grid '>
            <div className='bx--row'>
              <div className='bx--col '>
                <div className='header'>
                  <h6>CAREERS</h6>
                  <h3>Why to join Uvation</h3>
                </div>
              </div>
            </div>

            <div className='filter--row'>
              <div className='bx--row'>
                <div className='bx--col bx--no-gutter'>
                  <div className='searchcol'>
                    <Search
                      labelText='serch'
                      size='lg'
                      light
                      id='search-1'
                      placeHolderText='Enter the job title, skill or location'
                    />
                  </div>
                </div>
                <div className='bx--col bx--no-gutter'>
                  <div className='select'>
                    <Select
                      light
                      defaultValue='placeholder-item'
                      id='select-1'
                      invalidText='A valid value is required'
                      labelText='Country/region'
                    >
                      <SelectItem text='All' value='placeholder-item' />
                      <SelectItemGroup label='Category 1'>
                        <SelectItem text='Option 1' value='option-1' />
                        <SelectItem text='Option 2' value='option-2' />
                      </SelectItemGroup>
                      <SelectItemGroup label='Category 2'>
                        <SelectItem text='Option 3' value='option-3' />
                        <SelectItem text='Option 4' value='option-4' />
                      </SelectItemGroup>
                    </Select>
                  </div>
                </div>
                <div className='bx--col bx--no-gutter'>
                  <div className='select'>
                    <Select
                      light
                      defaultValue='placeholder-item'
                      id='select-1'
                      invalidText='A valid value is required'
                      labelText='Job category'
                    >
                      <SelectItem text='All' value='placeholder-item' />
                      <SelectItemGroup label='Category 1'>
                        <SelectItem text='Option 1' value='option-1' />
                        <SelectItem text='Option 2' value='option-2' />
                      </SelectItemGroup>
                      <SelectItemGroup label='Category 2'>
                        <SelectItem text='Option 3' value='option-3' />
                        <SelectItem text='Option 4' value='option-4' />
                      </SelectItemGroup>
                    </Select>
                  </div>
                </div>
                <div className='bx--col bx--no-gutter'>
                  <div className='select'>
                    <Select
                      light
                      defaultValue='placeholder-item'
                      id='select-1'
                      invalidText='A valid value is required'
                      labelText='Experience level'
                    >
                      <SelectItem text='All' value='placeholder-item' />
                      <SelectItemGroup label='Category 1'>
                        <SelectItem text='Option 1' value='option-1' />
                        <SelectItem text='Option 2' value='option-2' />
                      </SelectItemGroup>
                      <SelectItemGroup label='Category 2'>
                        <SelectItem text='Option 3' value='option-3' />
                        <SelectItem text='Option 4' value='option-4' />
                      </SelectItemGroup>
                    </Select>
                  </div>
                </div>
              </div>

              <div className='filter-btn'>
                <Button size='field'>Reset all filters</Button>
              </div>
            </div>

            <div className='bx--row cards'>
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />

              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />

              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
            </div>
          </div>
        </div>

        <div className='bx--grid--full-width '>
          <div className='footer'>
            <div className='bx--grid '>
              <div className='bx--row'>
                <div className='bx--col-lg-4 footer--content'>
                  <div className='bx--col bx--no-gutter heading'>
                    <h2>Any questions?</h2>
                    <p>Feel free to message us</p>
                  </div>
                  <div className='bx--col-lg-12 bx--no-gutter sub-heading'>
                    <h4>
                      Get in touch for a call or answer to any questions you
                      might have.
                    </h4>
                  </div>
                </div>
              </div>
              <div className='bx--row'>
                <div className='bx--col bx--no-gutter button'>
                  <Button className='btn'>Applications FAQs</Button>

                  <Button className='btn' kind='secondary' renderIcon={Chat16}>
                    Live chat
                  </Button>
                </div>
              </div>
            </div>

            <div className='btns'>
              <div className='learnmore '>
                <Button href='/' kind='primary' className='lrg-btn'>
                  Send us message
                  <div className='learn'>{<ArrowRight16 />}</div>
                </Button>
                <Button className='lrg-btn-right .lrg-btn' kind='secondary'>
                  Request a meeting
                  <div className='learn'>{<ArrowRight16 />}</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBotm />
    </>
  );
};

export default Career;
