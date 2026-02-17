import { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { StickySectionHeader } from "../section/sticky-header";
import { Database, Shield, GitBranch, Users, Zap } from "lucide-react";

const principles = [
	{
		icon: Database,
		title: "I Build for Production, Not Presentations",
		body: "When I designed those Airflow DAGs for CollateralIQ, they had to process millions of claim records without breaking. We're talking thousands of documents running in parallel — because when regulators are watching, your system better work at 2 AM on a weekend. That architecture saved us from compliance penalties that could have cost hundreds of thousands.",
	},
	{
		icon: Shield,
		title: "Compliance Isn't an Afterthought",
		body: "Before any data touches an LLM, I mask the PII. Every decision gets logged for audit trails that regulators actually accept. The human-in-the-loop workflows I built aren't just nice-to-have — they're what kept us compliant while processing 266 million documents annually. That's the difference between innovation and liability.",
	},
	{
		icon: GitBranch,
		title: "I Keep Things Simple on Purpose",
		body: "My MetagenAI architecture had clear boundaries: data ingestion, reasoning, review, reporting. Each piece works independently. When something breaks (and it will), you can debug one component without taking down the whole system. This approach helped us secure $2M in funding because investors could actually understand what we built.",
	},
	{
		icon: Users,
		title: "Humans Make the Final Call",
		body: "I don't build black boxes. The compliance teams using CollateralIQ can accept findings, reject them, and explain why. That feedback loop improved our accuracy and gave auditors the transparency they needed. The result? We went from reactive compliance to catching issues within 24-48 hours of document production.",
	},
	{
		icon: Zap,
		title: "I Measure What Matters",
		body: "The MetagenAI recommendation system didn't just 'improve user experience' — it cut dataset discovery time by 50% and saved 15-20 FTE hours weekly. CollateralIQ prevented Virginia from issuing findings for the first time in three years. When you can put numbers on the business impact, that's when executives pay attention.",
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