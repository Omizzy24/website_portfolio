import { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { StickySectionHeader } from "../section/sticky-header";
import { Layers, Zap, DollarSign, Bot, Eye } from "lucide-react";

const principles = [
	{
		icon: Layers,
		title: "Systems Over Scripts",
		body: "Production AI requires more than models that train — it requires systems that run. Reliability, observability, and cost-efficiency matter as much as model performance. Notebooks become pipelines that ingest data, mask PHI/PII, route through LLMs, and maintain audit trails.",
	},
	{
		icon: DollarSign,
		title: "Cost as Architecture",
		body: "Cost and performance aren\u2019t opposing forces — they\u2019re design constraints that drive better architecture. Reducing infrastructure from $24K to $90 annually while improving speed 60% required rethinking the entire stack, not optimizing existing code.",
	},
	{
		icon: Zap,
		title: "Scalability Over Hacks",
		body: "Scalability isn\u2019t about handling theoretical load — it\u2019s about making architectural decisions that balance performance, cost, and complexity. Serverless can cut costs 95%, but only with careful design around hot partitions, data typing, and observability.",
	},
	{
		icon: Eye,
		title: "Observability as Foundation",
		body: "CloudWatch dashboards, Athena queries, and custom logging aren\u2019t overhead — they\u2019re how you achieve 99.9% data validation accuracy and zero timeout incidents. You can\u2019t fix what you can\u2019t see.",
	},
	{
		icon: Bot,
		title: "AI Agents as Force Multipliers",
		body: "Human-in-the-loop systems aren\u2019t bureaucracy — they\u2019re how you maintain explainability and regulatory compliance while leveraging AI capabilities. The goal is augmentation, not replacement.",
	},
];

export const PhilosophySection = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	return (
		<section ref={sectionRef}>
			<StickySectionHeader
				id="philosophy"
				title="Systems Philosophy"
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
