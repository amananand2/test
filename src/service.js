import axios from "axios";

export const API_URL = 'https://testurls.net/uvation/all-apis/?method'

export const HomeData = {
	fetchsection1: () => {
		return axios.get(`${API_URL}=home_page&section_name=section1`);
	},

	deploy: () => {
		return axios.get(`${API_URL}=home_page&section_name=deploy`);
	},

    expertise: () => {
		return axios.get(`${API_URL}=home_page&section_name=expertise`);
	},

	casestudies: () => {
		return axios.get(`${API_URL}=home_page&section_name=case`);
	},

	caption: () => {
		return axios.get(`${API_URL}=home_page&section_name=caption`);
	},
	newsroom: () => {
		return axios.get(`${API_URL}=home_page&section_name=newsroom`);
	},
	history: () => {
		return axios.get(`${API_URL}=home_page&section_name=history`);
	},

	getintouch: () => {
		return axios.get(`${API_URL}=home_page&section_name=home_get`);
	},
};


export const AboutData = {
	uvation: () => {
		return axios.get(`${API_URL}=about_page&section_name=uvation`);
	},
	company: () => {
		return axios.get(`${API_URL}=about_page&section_name=company`);
	},
	brand: () => {
		return axios.get(`${API_URL}=about_page&section_name=brand`);
	},
	services: () => {
		return axios.get(`${API_URL}=about_page&section_name=services`);
	},
	people: () => {
		return axios.get(`${API_URL}=about_page&section_name=people`);
	},
	history: () => {
		return axios.get(`${API_URL}=about_page&section_name=history`);	 
	}
};


export const ContactData = {

	reachus: () => {
		return axios.get(`${API_URL}=reach_us_page&section_name=reach_us`);
	},

	morecontactus: () => {
		return axios.get(`${API_URL}=reach_us_page&section_name=more_contact`);
	},

}



export const IndustriesData = {

	industries: () => {
		return axios.get(`${API_URL}=industries_page&section_name=industries`);
	},

	featured: () => {
		return axios.get(`${API_URL}=industries_page&section_name=featured`);
	},

	futureindustries: () => {
		return axios.get(`${API_URL}=industries_page&section_name=future_industries`);
	},

	workwith: () => {
		return axios.get(`${API_URL}=industries_page&section_name=work_with`);
	},

	resources: () => {
		return axios.get(`${API_URL}=industries_page&section_name=resources`);
	},

	explore: () => {
		return axios.get(`${API_URL}=industries_page&section_name=explore`);
	},
}


export const InnovationData = {

	innovation: () => {
		return axios.get(`${API_URL}=innovation_page&section_name=innovation`);
	},

	featuredinnovation: () => {
		return axios.get(`${API_URL}=innovation_page&section_name=featured_innovation`);
	},

	recommended: () => {
		return axios.get(`${API_URL}=innovation_page&section_name=recommended`);
	},

	content: () => {
		return axios.get(`${API_URL}=innovation_page&section_name=lorem`);
	},

	explore: () => {
		return axios.get(`${API_URL}=innovation_page&section_name=explore`);
	},

}

export const CareerData = {

	career: () => {
		return axios.get(`${API_URL}=careers_page&section_name=careers`);
	},

	uvation: () => {
		return axios.get(`${API_URL}=careers_page&section_name=uvation`);
	},

	applying: () => {
		return axios.get(`${API_URL}=careers_page&section_name=applying`);
	},

	job: () => {
		return axios.get(`${API_URL}=careers_page&section_name=job`);
	},

	questions: () => {
		return axios.get(`${API_URL}=careers_page&section_name=questions`);
	},

}

export const PartnershipData = {

	partnership: () => {
		return axios.get(`${API_URL}=partnerships_and_alliances_page&section_name=partnerships`);
	},

	discover: () => {
		return axios.get(`${API_URL}=partnerships_and_alliances_page&section_name=discover`);
	},

	channel: () => {
		return axios.get(`${API_URL}=partnerships_and_alliances_page&section_name=channel`);
	},

	job: () => {
		return axios.get(`${API_URL}=careers_page&section_name=job`);
	},

	questions: () => {
		return axios.get(`${API_URL}=careers_page&section_name=questions`);
	},

}

export const PeopleData = {

	people: () => {
		return axios.get(`${API_URL}=people_Page&section_name=people`);
	},

	teampeople: () => {
		return axios.get(`${API_URL}=people_Page&section_name=team_people`);
	},

}


export const InvestorRelationsData = {

	information: () => {
		return axios.get(`${API_URL}=information_for_investors_page&section_name=information`);
	},

	news: () => {
		return axios.get(`${API_URL}=information_for_investors_page&section_name=investors`);
	},

	uvation: () => {
		return axios.get(`${API_URL}=information_for_investors_page&section_name=uvation`);
	},

	want: () => {
		return axios.get(`${API_URL}=information_for_investors_page&section_name=want`);
	},
}

export const InvestorSlaData = {

	heading: () => {
		return axios.get(`${API_URL}=information_for_investors1_page&section_name=investors1`);
	},

}

export const technologyData = {

	heading: () => {
		return axios.get(`${API_URL}=technology_services_landing_page&section_name=technology`);
	},

}

export const applicationData = {

	application: () => {
		return axios.get(`${API_URL}=application_page&section_name=application`);
	},

	benefits: () => {
		return axios.get(`${API_URL}=application_page&section_name=benefits`);
	},

	develop: () => {
		return axios.get(`${API_URL}=application_page&section_name=develop`);
	},

	business: () => {
		return axios.get(`${API_URL}=application_page&section_name=business`);
	},

	tabs: () => {
		return axios.get(`${API_URL}=application_page&section_name=tabs`);
	},

	chat: () => {
		return axios.get(`${API_URL}=application_page&section_name=chat`);
	},
}


export const businessResiliencyData = {

	business: () => {
		return axios.get(`${API_URL}=business_resiliency_page&section_name=business`);
	},

	resiliency: () => {
		return axios.get(`${API_URL}=business_resiliency_page&section_name=resiliency`);
	},
     
	improve: () => {
		return axios.get(`${API_URL}=business_resiliency_page&section_name=improve`);
	},

	chat: () => {
		return axios.get(`${API_URL}=business_resiliency_page&section_name=business_chat`);
	},
}


export const cloudData = {

	cloud: () => {
		return axios.get(`${API_URL}=cloud_page&section_name=cloud`);
	},

	benefits: () => {
		return axios.get(`${API_URL}=cloud_page&section_name=benefits`);
	},
     
	get: () => {
		return axios.get(`${API_URL}=cloud_page&section_name=cloud_get`);
	},

	cloudcomputing: () => {
		return axios.get(`${API_URL}=cloud_page&section_name=cloud_computing`);
	},

	cloudunique: () => {
		return axios.get(`${API_URL}=cloud_page&section_name=computing_unique`);
	},

	clouddifferent: () => {
		return axios.get(`${API_URL}=cloud_page&section_name=different`);
	},
	cloudchat: () => {
		return axios.get(`${API_URL}=cloud_page&section_name=cloud_chat`);
	},
}

export const dataCenterData = {

	datacenter: () => {
		return axios.get(`${API_URL}=datacenter_page&section_name=datacenter`);
	},

	benefits: () => {
		return axios.get(`${API_URL}=datacenter_page&section_name=benefits`);
	},
     
	deploy: () => {
		return axios.get(`${API_URL}=datacenter_page&section_name=deploy`);
	},

	explained: () => {
		return axios.get(`${API_URL}=datacenter_page&section_name=explained`);
	},

	centerservices: () => {
		return axios.get(`${API_URL}=datacenter_page&section_name=center_services`);
	},

	technologies: () => {
		return axios.get(`${API_URL}=datacenter_page&section_name=technologies`);
	},
	chat: () => {
		return axios.get(`${API_URL}=datacenter_page&section_name=datacenter_chat`);
	},
}

export const manageditData = {

	landing: () => {
		return axios.get(`${API_URL}=managed_it_page&section_name=managed_it`);
	},

	benefits: () => {
		return axios.get(`${API_URL}=managed_it_page&section_name=benefits`);
	},

	incorporate: () => {
		return axios.get(`${API_URL}=managed_it_page&section_name=incorporate`);
	},

	managed: () => {
		return axios.get(`${API_URL}=managed_it_page&section_name=managed`);
	},

	solution: () => {
		return axios.get(`${API_URL}=managed_it_page&section_name=it_solution`);
	},

	uvation: () => {
		return axios.get(`${API_URL}=managed_it_page&section_name=uvation_solution`);
	},

	chat: () => {
		return axios.get(`${API_URL}=managed_it_page&section_name=chat`);
	},
}

export const workforceData = {

	landing: () => {
		return axios.get(`${API_URL}=workforce_enablement_page&section_name=workforce`);
	},
    
	approach: () => {
		return axios.get(`${API_URL}=workforce_enablement_page&section_name=approach`);
	},
    reachout: () => {
		return axios.get(`${API_URL}=workforce_enablement_page&section_name=reach_out`);
	},
	drives: () => {
		return axios.get(`${API_URL}=workforce_enablement_page&section_name=drives`);
	},
	sourcing: () => {
		return axios.get(`${API_URL}=workforce_enablement_page&section_name=sourcing`);
	},
	chat: () =>{
		return axios.get(`${API_URL}=workforce_enablement_page&section_name=chat`);
	}
}


export const cyberSecurityData = {

	landing: () => {
		return axios.get(`${API_URL}=cybersecurity_landing_page&section_name=prepare`);
	},
    
	chat: () => {
		return axios.get(`${API_URL}=cybersecurity_landing_page&section_name=cybersecurity_get`);
	},

}

export const socPageData = {

	landing: () => {
		return axios.get(`${API_URL}=soc_service_page&section_name=soc`);
	},
    
}