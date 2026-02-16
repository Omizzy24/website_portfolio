import { JSX } from "react";
import { Projects } from "../project/data";

export type ExperienceEntry = {
	company: string;
	orgKey?: string;
	href?: string;
	image: string;
	positions: ExperiencePosition[];
};

export type ExperiencePosition = {
	title: string;
	type: PositionType;
	description?: string | JSX.Element;
	assets?: string[];
	start: string;
	end?: string;
	current?: boolean;
	location: string;
};

export const getProjectsByCompany = (work: ExperienceEntry) => Projects.filter(
	project => project.org === work.orgKey
);

export const isIrregularEmployment = (position: ExperiencePosition) => position.type === 'Contract';

type PositionType = "Full Time" | "Part Time" | "Contract" | "Internship" | "Other";

export const WorkExperience: ExperienceEntry[] = [
	{
		company: "The Cigna Group",
		orgKey: "cigna",
		href: "https://www.thecignagroup.com",
		image: "/logos/cigna.png",
		positions: [
			{
				title: "DevOps Engineer",
				type: "Full Time",
				description: "Architected serverless data platform processing 80K+ files across 320+ DynamoDB tables using S3-triggered Lambda functions with Protobuf parsing and Redshift Spectrum external tables. Optimized DynamoDB runtime configuration by troubleshooting hot partition issues and refactoring nested array structures, achieving 40% performance improvement. Reduced infrastructure costs 95% ($24K annually) while improving underwriter quote generation speed 60%, directly supporting millions in annual premium revenue. Built observability infrastructure achieving 99.9% data validation accuracy, securing FY2026 executive budget approval.",
				start: "2025-07-01",
				current: true,
				location: "Bloomfield, CT",
			},
			{
				title: "Software Engineer",
				type: "Full Time",
				description: "Re-engineered ETL architecture from Lambda to Glue achieving 30% efficiency improvement and zero timeout incidents through horizontal scaling, processing 100K+ daily records for 200+ engineering teams. Built RESTful APIs ingesting enterprise metadata with Neo4j graph database for LLM RAG optimization, improving retrieval speeds 50% and saving 15-20 FTE hours weekly. Secured $2M funding for AI infrastructure expansion by leading MetagenAI project, enabling AI department growth from 5 to 15+ headcount. Resolved critical production outage within 2 hours leading 100+ person incident response, preventing $500K+ in claims processing errors.",
				start: "2024-02-01",
				end: "2025-07-01",
				location: "Bloomfield, CT",
			},
			{
				title: "Solutions Architect",
				type: "Full Time",
				description: "Designed real-time data synchronization system between DynamoDB and AppSync GraphQL endpoints, reducing query latency from hours to <1 minute for 1500+ daily users (220K+ annual queries). Led production release of AWS Glue jobs for provider data migration from on-premises to cloud, reducing data retrieval times 30%. Achieved 15% reduction in data-related production incidents, preventing $2.5M in subsidiary budget overruns through improved data quality.",
				start: "2023-02-01",
				end: "2024-02-01",
				location: "Bloomfield, CT",
			},
			{
				title: "Data Analyst Intern",
				type: "Internship",
				description: "Analyzed 2.5M+ longitudinal patient records using regression analysis and time series techniques to identify post-COVID outcome trends. Built predictive models using gradient boosting and EDA, then segmented high-risk cohorts using K-means clustering and KNN classification, informing targeted interventions that lowered hospitalization rates 10%. Won 1st place in TECDP Summer Innovation Project 2022, recognized by CEO David Cordani during company-wide town hall, securing full-time return offer.",
				start: "2022-05-01",
				end: "2022-08-01",
				location: "Bloomfield, CT",
			},
		],
	},
];
