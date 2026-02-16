import type { JSX } from "react";

export type Project = {
   type: 'web' | 'lib' | 'app' | 'misc';
   org?: string;
   lang?: string;
   title: string;
   archived?: boolean;
   visibility: 'public' | 'private' | 'internal';
   href?: string;
   brief: string | JSX.Element;
   description: string | JSX.Element;
}

export type ProjectOrg = {
   name: string;
   key: string;
}

export const Orgs: ProjectOrg[] = [
	{
		name: 'The Cigna Group',
		key: 'cigna',
	},
	{
		name: 'Personal Projects',
		key: 'me',
	}
]

const cignaProjects: Project[] = [
	{
		type: 'app',
		org: 'cigna',
		lang: 'py',
		title: 'SUWP Data Modernization Program',
		visibility: 'internal',
		brief: 'Serverless data platform processing 80K+ files for insurance underwriting analytics',
		description: 'Architected serverless data platform processing 80K+ files across 320+ DynamoDB tables by implementing S3-triggered Lambda functions with Protobuf parsing and Redshift Spectrum external tables. Reduced infrastructure costs by 95% ($24K annually) while enabling underwriters to generate accurate quotes 60% faster, directly supporting millions in annual premium revenue calculations. Built observability infrastructure achieving 99.9% data validation accuracy, securing FY2026 executive budget approval.'
	},
	{
		type: 'app',
		org: 'cigna',
		lang: 'py',
		title: 'CollateralIQ',
		visibility: 'internal',
		brief: 'AI-powered compliance platform auditing 266M+ regulated documents annually',
		description: 'Architected enterprise-scale compliance platform processing millions of regulated documents with 24-48 hour audit turnaround. Designed end-to-end Airflow DAG workflows extracting claim data from Teradata/Oracle, downloading PDFs, and persisting structured metadata with full lineage in PostgreSQL. Addressed regulatory risk with potential civil monetary penalties of $100K-$1M+ per violation while reducing manual audit preparation costs by 70%. Built fault-tolerant data ingestion pipeline achieving zero processing failures and 100% claim-to-document traceability.'
	},
	{
		type: 'app',
		org: 'cigna',
		lang: 'py',
		title: 'MetagenAI',
		visibility: 'internal',
		brief: 'Enterprise metadata intelligence platform securing $2M in AI funding',
		description: 'Built RESTful APIs ingesting enterprise metadata improving data retrieval speeds by 50% by developing Python services consuming Atlassian and GitHub endpoints. Optimized LLM Retrieval-Augmented-Graph (RAG) response efficiency within Neo4j graph database, reducing time-to-insight for engineering teams (equivalent to 15-20 FTE hours saved weekly). Secured $2M funding for AI infrastructure expansion, enabling AI department growth from 5 to 15+ headcount.'
	},
	{
		type: 'app',
		org: 'cigna',
		lang: 'ts',
		title: 'Provider Inquiry Tool',
		visibility: 'internal',
		brief: 'High-availability API serving 1,500+ daily users with 220K+ annual queries',
		description: 'Deployed high-availability API serving 1,500+ daily users (220K+ annual queries) by architecting real-time data synchronization between DynamoDB and AppSync GraphQL endpoints. Reduced query latency from hours to <1 minute, improving customer satisfaction scores and reducing call center inquiries by 20% (estimated $150K+ annual savings in support costs). Built operational monitoring dashboards reducing incident response time by 25%.'
	},
]; 

const meProjects: Project[] = [
	{
		type: 'web',
		org: 'me',
		lang: 'ts',
		title: 'Portfolio',
		visibility: 'public',
		href: 'https://github.com/Omizzy24/Portfolio-WIP',
		brief: 'Production AI/ML infrastructure engineer portfolio website',
		description: 'Personal portfolio website showcasing production AI/ML infrastructure engineering work. Built with React, TypeScript, and modern web technologies to demonstrate technical capabilities and business impact.'
	},
];

export const Projects: Project[] = [
	...cignaProjects,
	...meProjects
]

export const PersonalProjects = meProjects;
