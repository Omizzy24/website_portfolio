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
				description: "Own the serverless data platform processing 80K+ files across 320+ DynamoDB tables — S3-triggered Lambdas with Protobuf parsing piped into Redshift Spectrum external tables for downstream analytics. Diagnosed and resolved hot partition issues in DynamoDB by refactoring nested array structures and tuning runtime configuration, yielding a 40% throughput improvement. Drove a 95% infrastructure cost reduction ($24K → $90/yr) while accelerating underwriter quote generation 60%, directly supporting millions in annual premium revenue. Designed the observability layer — CloudWatch alarms, Athena audit queries, and validation pipelines — achieving 99.9% data accuracy and securing FY2026 executive budget approval.",
				start: "2025-07-01",
				current: true,
				location: "Bloomfield, CT",
			},
			{
				title: "Software Engineer",
				type: "Full Time",
				description: "Re-architected the ETL backbone from Lambda to Glue, achieving 30% efficiency gains and zero timeout incidents through horizontal scaling — processing 100K+ daily records consumed by 200+ engineering teams. Built RESTful APIs backed by a Neo4j graph database to ingest enterprise metadata for LLM RAG optimization, cutting retrieval latency 50% and saving 15–20 FTE hours weekly. Led the MetagenAI initiative that secured $2M in funding for AI infrastructure expansion, growing the AI department from 5 to 15+ headcount. Coordinated a 100+ person incident response to resolve a critical production outage within 2 hours, preventing $500K+ in claims processing errors.",
				start: "2024-02-01",
				end: "2025-07-01",
				location: "Bloomfield, CT",
			},
			{
				title: "Solutions Architect",
				type: "Full Time",
				description: "Designed a real-time sync layer between DynamoDB and AppSync GraphQL, collapsing query latency from hours to under 1 minute for 1,500+ daily users generating 220K+ annual queries. Led production release of AWS Glue jobs migrating provider data from on-premises to cloud, reducing data retrieval times 30%. Achieved a 15% reduction in data-related production incidents, preventing $2.5M in subsidiary budget overruns through improved data quality and governance.",
				start: "2023-02-01",
				end: "2024-02-01",
				location: "Bloomfield, CT",
			},
			{
				title: "Data Analyst Intern",
				type: "Internship",
				description: "Analyzed 2.5M+ longitudinal patient records using regression analysis and time series techniques to surface post-COVID outcome trends. Built predictive models with gradient boosting and segmented high-risk cohorts via K-means clustering and KNN classification, informing targeted interventions that lowered hospitalization rates 10%. Won 1st place in the TECDP Summer Innovation Project 2022, recognized by CEO David Cordani during a company-wide town hall — secured a full-time return offer.",
				start: "2022-05-01",
				end: "2022-08-01",
				location: "Bloomfield, CT",
			},
		],
	},
];
