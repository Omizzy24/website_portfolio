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
				description: "Implemented serverless data pipeline for Health Rating Engine powering actuarial calculations for small group insurance quotations, processing 80K+ files across 320+ tables on AWS-native architecture (S3, DynamoDB, Lambda)\u2014reducing operational costs by 95% ($24K annually) while improving underwriter quote generation speed by 60%, directly supporting millions in annual premium revenue. Optimized DynamoDB runtime configuration by troubleshooting hot partition issues and refactoring nested array structures, contributing to 40% performance improvement across 10K+ columns. Built observability infrastructure using CloudWatch and Athena for Lambda execution metrics, implementing custom logging for data pipeline monitoring\u2014enabling data-driven optimization decisions that secured FY2026 executive budget approval.",
				start: "2025-07-01",
				current: true,
				location: "Bloomfield, CT",
			},
			{
				title: "Software Engineer",
				type: "Full Time",
				description: "Re-engineered ETL architecture from Lambda to Glue achieving 30% efficiency improvement and zero timeout incidents by implementing horizontal scaling to process 100K+ records daily, eliminating serverless execution limits for business-critical analytics systems serving 200+ engineering teams. Built RESTful APIs ingesting enterprise metadata improving data retrieval speeds by 50%, optimizing LLM RAG response efficiency within Neo4j graph database\u2014equivalent to 15-20 FTE hours saved weekly. Secured $2M funding for AI infrastructure expansion by leading MetagenAI project, demonstrating technical feasibility and ROI through full-stack implementation\u2014enabling AI department growth from 5 to 15+ headcount for FY2025. Resolved critical production outage within 2 hours by leading AWS troubleshooting with 100+ participants, preventing $500K+ in claims processing errors.",
				start: "2024-02-01",
				end: "2025-07-01",
				location: "Bloomfield, CT",
			},
			{
				title: "Solutions Architect",
				type: "Full Time",
				description: "Deployed high-availability API serving 1,100+ daily users (220K+ annual queries) by architecting real-time data synchronization between DynamoDB and AppSync GraphQL, reducing query latency from hours to under 1 minute\u2014reducing call center inquiries by 20% (estimated $150K+ annual savings). Led production release of AWS Glue jobs for provider data migration from on-premises to cloud, reducing data retrieval times by 30%. Achieved 15% reduction in data-related production incidents, preventing $2.5M in subsidiary budget overruns through improved data quality.",
				start: "2023-02-01",
				end: "2024-02-01",
				location: "Bloomfield, CT",
			},
			{
				title: "Data Analyst Intern",
				type: "Internship",
				description: "Analyzed 2.5M+ longitudinal patient records using regression analysis and exploratory time series techniques to identify trends in post-COVID outcomes. Built predictive models using gradient boosting, segmented high-risk cohorts using K-means clustering and KNN classification\u2014informing targeted interventions that lowered hospitalization rates by 10%. Led development winning 1st place in TECDP Summer Innovation Project 2022, recognized by CEO David Cordani during company-wide town hall, securing full-time return offer.",
				start: "2022-05-01",
				end: "2022-08-01",
				location: "Bloomfield, CT",
			},
		],
	},
];
