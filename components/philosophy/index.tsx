import { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { StickySectionHeader } from "../section/sticky-header";
import { Database, Shield, GitBranch, Users, Zap } from "lucide-react";

const principles = [
	{
		icon: Database,
		title: "Build for Scale, Not Demos",
		body: "I designed Airflow DAGs to process millions of claim records in parallel batches, landing them in S3 with full lineage tracking. The system handles thousands of documents concurrently without blocking or single-point failures. Production systems need to work at 3 AM under load, not just in presentations.",
	},
	{
		icon: Shield,
		title: "Governance First, AI Second",
		body: "Before any LLM interaction, I implement PII/PHI detection and masking. Every discrepancy gets full metadata for audit trails suitable for market conduct exams. Human-in-the-loop review isn't optional — it's how you maintain explainability in regulated environments.",
	},
	{
		icon: GitBranch,
		title: "Separation of Concerns",
		body: "I enforce strong architectural boundaries: ingestion, AI reasoning, human review, and reporting are independently observable and debuggable. When compliance issues arise, you need to trace from claim to document to audit result without guesswork.",
	},
	{
		icon: Users,
		title: "Human Feedback Loops",
		body: "I built UIs where compliance reviewers can accept or reject findings, add rationale, and feed corrections back into the system. The goal isn't to replace humans — it's to give them tools that scale with regulatory requirements and document volumes.",
	},
	{
		icon: Zap,
		title: "Proactive, Not Reactive",
		body: "Instead of waiting for regulators to find compliance issues months later, I built systems that audit collaterals within 24-48 hours of production. This shifts compliance from reactive manual processes to continuous preventative monitoring.",
	},
];

export const PhilosophySection = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	return (
		<section ref={sectionRef}>
			<StickySectionHeader
				id="philosophy"
				title="How I Build Systems"
				sectionRef={sectionRef}
			/>

			<div className="grid gap-4 md:grid-cols-2">
				{principles.map((p, i) => (
					<Card
						key={i}
						className={`border-teal-500/10 bg-gray-900/40 transition-all duration-300 hover:border-teal-500/25 hover:bg-gray-900/60 ${i === principles.length - 1 && principles.length % 2 !== 0 ? "md:col-span-2" : ""}`}
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