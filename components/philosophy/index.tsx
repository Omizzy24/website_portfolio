import { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { StickySectionHeader } from "../section/sticky-header";
import { Database, Shield, GitBranch, Users } from "lucide-react";

const principles = [
	{
		icon: Database,
		title: "Scheduling & Orchestration",
		body: "The Airflow DAGs I designed for CollateralIQ had one job: handle millions of claim records in batches without failing, while meeting compliance and enterprise standards for production. We ran hundreds of thousands of documents in parallel from on-prem Oracle and other warehouses into the cloud. The system runs on a schedule, ensuring no data is lost or misrepresented. Designing it with automation in mind didn\u2019t just keep us out of compliance trouble \u2014 it let us scale from Virginia to CT, NY, TX, and FL, where violations would have run into the millions per state.",
	},
	{
		icon: Shield,
		title: "Masking Sensitive Data",
		body: "PII gets masked through our proxy within EKS, well before any data reaches an LLM or AI agent. Every decision is logged so audit trails hold up under scrutiny. There\u2019s always a human-in-the-loop step before anything goes through. The LLM follows golden rules and a negative prompt telling it what to avoid. Walking through multiple fail-safes and tight guardrails across 266 million documents a year \u2014 that\u2019s the line between something that scales in production and something that becomes a liability.",
	},
	{
		icon: GitBranch,
		title: "Architecture With Purpose",
		body: "The MetagenAI architecture I was part of had four clear lanes: data ingestion, reasoning, review, reporting. Each one works independently. When something breaks \u2014 and it will \u2014 you fix that piece without touching anything else. You make sure data retention is viable, no hallucinations, no invalid data. When AI was first emerging, there was a lot of uncertainty around whether it was safe in a sensitive healthcare platform. Reassuring everyone with clarity and security is part of why we landed $2M in funding and expanded the team. Investors could follow what we built without needing a whiteboard session.",
	},
	{
		icon: Users,
		title: "Everybody On the Same Page",
		body: "Before any go-live, compliance teams, QA, production support, developers \u2014 everyone involved should agree on what\u2019s needed. On the Provider Inquiry Tool, I continuously asked questions, documented findings, and restructured what was right and wrong architecturally, testing across multiple environments before we hit our go-live date. You want your system handling 1,100+ daily users without downtime or data pipeline deficiencies. That loop tightened our accuracy, decreased data-related incidents in our provider data space, and we built monitoring and notifications so nothing stays broken for long \u2014 things get caught early, with minimal downside and little to no cost.",
	},
];

export const PhilosophySection = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	return (
		<section ref={sectionRef}>
			<StickySectionHeader
				id="philosophy"
				title="My Systemic Workflow"
				sectionRef={sectionRef}
			/>

			<div className="grid gap-4 md:grid-cols-2">
				{principles.map((p, i) => (
					<Card
						key={i}
						className="border-teal-500/10 bg-gray-900/40 transition-all duration-300 hover:border-teal-500/25 hover:bg-gray-900/60"
					>
						<CardContent className="p-5">
							<div className="flex items-start gap-4">
								<div className="mt-0.5 rounded-md bg-teal-500/10 p-2 shrink-0">
									<p.icon className="h-5 w-5 text-teal-400" />
								</div>
								<div>
									<h3 className="font-semibold text-gray-100 mb-2">{p.title}</h3>
									<p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};