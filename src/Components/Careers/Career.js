import React, { useEffect, useRef, useState } from 'react';
import {
  Search,
  Button,
  Select,
  SelectItem,
  SelectItemGroup,
  Loading,
} from 'carbon-components-react';

import { Code16, ArrowDown16, Chat16, ArrowRight16 } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import { RichTextFormat } from '@carbon/pictograms-react';

import FooterBotm from '../Homepage/Footer/FooterBotm';
import MainHeader from '../Homepage/Mainheader/MainHeader';
import {connect} from 'react-redux';
import {careerPageDataStart,careerUvationDataStart,applyingPageDataStart,jobPageDataStart,questionsPageDataStart} from "../../actions/index";

const CareerCard = ({
  title,
  posticon,
  desc,
}) => (
  <div className='bx--col-lg-2 bx--col-md-2 bx--col-sm-2'>
    <div className='card'>
      <h4>{title}</h4>
      <div className='card--content'></div>
      <div>
        <Code16 fill='#0F61FD' /> {posticon}
      </div>
      <div>
        <p>{desc}</p>
      </div>
    </div>
  </div>
);

const Testimonial = ({ heading,subHeading,desc }) => (
  <div className='bx--col-lg-6 bx--no-gutter--left testimonial'>
    <div className='review'>
      <p>
        {desc}
      </p>
    </div>
    <div className='bx--col-lg-2 bx--no-gutter sep-line'> </div>
    <div className='name'>
      <p>{heading}</p>
    </div>

    <div className='position'>
      <p>{subHeading}</p>
    </div>
  </div>
);

const ProcessCard = ({ num, title, titlepict, prodetails }) => (
  <div className='bx--row stages'>
    <div className='bx--col-lg-5 bx--no-gutter--left'>
      <div className='bx--col left'>
        <div className='num'>
          <p>{num}</p>
        </div>
        <div>
          <h4>{title}</h4>
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
          {prodetails}
        </p>
      </div>
    </div>
  </div>
);

const JobCard = ({ location, jobtitle, exp, department }) => (
  <div className='bx--col-lg-4 bx--col-md-4 bx--col-sm-4'>
    <div className='job--card'>
      <div className='location'>
        <h6>{location}</h6>
      </div>
      <div className='bx--col-lg-12 job-title'>
        <h4>{jobtitle}</h4>
      </div>
      <div className='exp'>
        <h6>{exp}</h6>
      </div>
      <div className='department'>
        <h6>{department}</h6>
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

const Career = ({careerPageDataStart,careerData,careerUvationDataStart,careerUvationData,applyingPageDataStart,applyingData,jobPageDataStart,jobData,questionsPageDataStart,questionsData}) => {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  const [activeSlide,setActiveSlide]=useState(1);
  const [filterData,setFilterData]=useState("");
  const [updatedJob,setUpdatedJob]=useState(jobData && jobData.job_content);


  useEffect(()=>{
    careerPageDataStart();
    careerUvationDataStart();
    applyingPageDataStart();
    jobPageDataStart();
    questionsPageDataStart();
    // setUpdatedJob(jobData && jobData.job_content)
  },[])


  useEffect(()=>{
    setUpdatedJob(jobData && jobData.job_content && jobData.job_content.filter(value => {
      return value.job_content_heading.toLowerCase().includes(filterData.toLowerCase()) || value.job_content_top_heading.toLowerCase().includes(filterData.toLowerCase())
     }))
   
  },[filterData])

  



  // console.log(questionsData,"questionsData");

  return (
    <>
    <Loading active={careerData.careerPageLoader}/>
      <MainHeader />
      <div className='bx--grid--full-width career'>
        <div className='banner'>
          <div className='bx--grid'>
            <div className='bx--row'>
              <div className='bx--col-lg-7'>
                <div className='content'>
                  <div className='heading'>
                    <h1>{careerData && careerData.careers_heading}</h1>
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
            {careerData && careerData.featured_content && careerData.featured_content.map(value=>{
                return(
              <CareerCard title={value.featured_content_heading} desc={value.featured_content_description} />
                )
              }) }
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
                    <h6>{careerUvationData && careerUvationData.uvation_heading}</h6>
                  </div>

                  <div className='heading'>
                    <h3>{careerUvationData && careerUvationData.uvation_description}</h3>
                  </div>
                  {
              careerUvationData && careerUvationData.uvation_content && careerUvationData.uvation_content.slice(activeSlide-1,activeSlide).map((value,index)=>{
                return (
              <Testimonial  heading={value.uvation_content_top_heading} subHeading={value.uvation_content_heading} desc={value.uvation_content_description} />
                );

              })
            }
            
                  {/* <Testimonial /> */}

                  <div className='lines'>
                    <div className={activeSlide === 1 ? 'line-active' : "line"} onClick={()=>{setActiveSlide(1)}}></div>
                    <div className={activeSlide === 2 ? 'line-active' : "line"} onClick={()=>{setActiveSlide(2)}}></div>
                    <div className={activeSlide === 3 ? 'line-active' : "line"} onClick={()=>{setActiveSlide(3)}}></div>
                    <div className={activeSlide === 4 ? 'line-active' : "line"} onClick={()=>{setActiveSlide(4)}}></div>
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
                    <h6>{applyingData && applyingData.applying_top_heading}</h6>
                  </div>

                  <div className='heading'>
                    <h4>{applyingData && applyingData.applying_heading}</h4>
                  </div>
                </div>
              </div>
            </div>
            {applyingData && applyingData.applying_content && applyingData.applying_content.map(value=>{
                return(
              <ProcessCard num={value.applying_content_top_heading} title={value.applying_content_heading} prodetails={value.applying_content_description} />
                )
              }) }
  
          </div>
        </div>

        <div className='bx--grid--full-width job--optn' ref={myRef}>
          <div className='bx--grid '>
            <div className='bx--row'>
              <div className='bx--col '>
                <div className='header'>
                  <h6>{jobData && jobData.job_top_heading}</h6>
                  <h3>{jobData && jobData.job_heading}</h3>
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
                      value={filterData}
                      placeHolderText='Enter the job title, skill or location'
                      onChange={(e)=>{setFilterData(e.target.value)}}
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
                <Button size='field' onClick={()=>{setFilterData("")}}>Reset all filters</Button>
              </div>
            </div>

            <div className='bx--row cards'>
            {
             filterData.length >= 1 && updatedJob && updatedJob.map((value,index)=>{
                return (
              <JobCard  location={value.job_content_top_heading} jobtitle={value.job_content_heading} exp={value.job_content_exp} department={value.job_content_description} />
                );

              })
            }

{
             filterData.length === 0 && jobData && jobData.job_content && jobData.job_content.map((value,index)=>{
                return (
              <JobCard  location={value.job_content_top_heading} jobtitle={value.job_content_heading} exp={value.job_content_exp} department={value.job_content_description} />
                );

              })
            }
          
            </div>
          </div>
        </div>

        <div className='bx--grid--full-width '>
          <div className='footer'>
            <div className='bx--grid '>
              <div className='bx--row'>
                <div className='bx--col-lg-4 footer--content'>
                  <div className='bx--col bx--no-gutter heading'>
                    <h2>{questionsData && questionsData.questions_top_heading}</h2>
                    <p>{questionsData && questionsData.questions_heading}</p>
                  </div>
                  <div className='bx--col-lg-12 bx--no-gutter sub-heading'>
                    <h4>
                    {questionsData && questionsData.questions_description}
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


const mapStateToProps = state => ({

  careerData: state.careerPageReducer.careerData,
  careerUvationData:state.careerPageReducer.careerUvationData,
  applyingData:state.careerPageReducer.applyingData,
  jobData:state.careerPageReducer.jobData,
  questionsData:state.careerPageReducer.questionsData
});

const mapDispatchToProps = (dispatch) => ({

  careerPageDataStart: () => dispatch(careerPageDataStart()),
  careerUvationDataStart: () => dispatch(careerUvationDataStart()),
  applyingPageDataStart: () => dispatch(applyingPageDataStart()),
  jobPageDataStart: () => dispatch(jobPageDataStart()),
  questionsPageDataStart: () => dispatch(questionsPageDataStart()),
});


export default connect(mapStateToProps,mapDispatchToProps)(Career);

