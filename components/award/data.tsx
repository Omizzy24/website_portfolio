export type Award = {
   authority: string;
   title: string;
   description: string;
   credential: string;
   href: string;
   date: string;
}

export type AwardAuthority = {
   name: string;
   id: string;
   href: string;
   image: string;
}

export const AwardAuthorities: AwardAuthority[] = [
	{
		name: 'Amazon Web Services',
		id: 'aws',
		href: 'https://aws.amazon.com/certification/',
		image: '/logos/aws.png'
	},
	{
		name: 'The Cigna Group',
		id: 'cigna',
		href: 'https://www.thecignagroup.com',
		image: '/logos/cigna.png'
	}
]

export const Awards: Award[] = [
	{
		authority: 'cigna',
		title: 'CEO Recognition - 1st Place Innovation Project',
		description: 'Won 1st place in TECDP Summer Innovation Project 2022, recognized by CEO David Cordani during company-wide town hall for COVID-19 population health analytics work.',
		credential: 'TECDP-2022',
		href: 'https://www.thecignagroup.com',
		date: 'Aug 2022'
	},
	{
		authority: 'cigna',
		title: 'Secured $2M AI Infrastructure Funding',
		description: 'Led MetagenAI project that drove AI department expansion for FY2025, demonstrating technical feasibility and ROI through full-stack implementation.',
		credential: 'METAGENAI-2024',
		href: 'https://www.thecignagroup.com',
		date: 'Jul 2024'
	},
	{
		authority: 'aws',
		title: 'AWS Solutions Architect Associate',
		description: 'Certified in designing distributed systems on AWS, demonstrating expertise in cloud architecture, security, and cost optimization.',
		credential: 'SAA-C03',
		href: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
		date: '2024'
	},
	{
		authority: 'aws',
		title: 'AWS Cloud Practitioner',
		description: 'Foundational AWS certification demonstrating cloud concepts, services, security, architecture, pricing, and support.',
		credential: 'CLF-C02',
		href: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
		date: '2023'
	}
]
