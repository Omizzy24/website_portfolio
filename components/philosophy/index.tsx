import { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { StickySectionHeader } from "../section/sticky-header";
import { Wrench, DollarSign, BarChart3, Shield, Users } from "lucide-react";

const principles = [
	{
		icon: Wrench,
		title: "Build It So It Runs at 3 AM",
		body: "I don\u2019t build things that work in demos. I build things that work when nobody\u2019s watching \u2014 at 3 AM on a Saturday, under load, with bad input. If a system needs me awake to stay alive, I haven\u2019t finished building it.",
	},
	{
		icon: DollarSign,
		title: "Every Dollar Is a Design Decision",
		body: "I cut a team\u2019s cloud spend from $24K to $90 a year. Not by turning things off \u2014 by rethinking what should exist in the first place. Compute, storage, data transfer: each one is an architectural choice, not a line item to accept.",
	},
	{
		icon: BarChart3,
		title: "Measure First, Then Move",
		body: "Before I refactor anything, I instrument it. CloudWatch, Athena, custom logging \u2014 whatever it takes to see what\u2019s actually happening. Gut feelings don\u2019t survive production. Data does.",
	},
	{
		icon: Shield,
		title: "Complexity Is Debt",
		body: "The best architecture is the one the next engineer can understand without a walkthrough. I pick boring, proven patterns over clever ones. If I can\u2019t explain the tradeoff in two sentences, I haven\u2019t thought it through enough.",
	},
	{
		icon: Users,
		title: "Ship for the Team, Not the Ticket",
		body: "I think past the Jira ticket. Who maintains this after me? What breaks when requirements change? The goal isn\u2019t to close a story \u2014 it\u2019s to leave the codebase better than I found it.",
	},
];

export const PhilosophySection = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	return (
		<section ref={sectionRef}>
			<StickySectionHeader
				id="philosophy"
				title="How I Think About Building"
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
