import { useRef } from "react";
import { StickySectionHeader } from "../section/sticky-header";

export const PhilosophySection = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	return (
		<section ref={sectionRef}>
			<StickySectionHeader
				id="philosophy"
				title="Systems Philosophy"
				sectionRef={sectionRef}
			/>
			
			<div className="space-y-4 text-gray-300 leading-relaxed">
				<p>
					Production AI systems require more than models that train—they require systems that run. 
					After building platforms serving 1500+ daily users and securing $2M in funding, I&apos;ve learned 
					that reliability, observability, and cost-efficiency matter as much as model performance.
				</p>
				
				<p>
					Scalability isn&apos;t about handling theoretical load—it&apos;s about making architectural decisions 
					that balance performance, cost, and complexity. Serverless architectures can reduce costs 95% 
					while improving speed 60%, but only with careful design around hot partitions, data typing, 
					and observability. I&apos;ve optimized databases by 40% not through better algorithms, but through 
					understanding access patterns and partition strategies.
				</p>
				
				<p>
					ML production differs fundamentally from experimentation. Notebooks that train models become 
					systems that ingest data, mask PHI/PII, route through LLMs, implement human-in-the-loop governance, 
					and maintain audit trails. The difference between a prototype and a production system is 
					observability infrastructure, fault tolerance, and separation of concerns.
				</p>
				
				<p>
					Cost and performance aren&apos;t opposing forces—they&apos;re design constraints that drive better architecture. 
					Reducing infrastructure costs from $24K to $90 annually while improving performance 60% required 
					rethinking the entire stack, not just optimizing existing code. Every architectural decision has 
					a cost dimension: compute, storage, data transfer, and operational overhead.
				</p>
				
				<p>
					Reliability is built through observability and governance. CloudWatch dashboards, Athena queries, 
					and custom logging aren&apos;t overhead—they&apos;re how you achieve 99.9% data validation accuracy and zero 
					timeout incidents. Human-in-the-loop systems aren&apos;t bureaucracy—they&apos;re how you maintain explainability 
					and regulatory compliance while leveraging AI capabilities.
				</p>
			</div>
		</section>
	);
};
