"use client";

import Image from "next/image";

import { css, SocialConfig } from "~/util";
import { Banner } from "~/components/ui/banner";
import { WorkSection } from "~/components/work";
import { Send } from "~/components/ui/icons/send";
import { AwardSection } from "~/components/award";
import { Separator } from "~/components/ui/separator";
import { ProjectSection } from "~/components/project";
import { ArrowRight, MapPinHouse } from "lucide-react";
import { ScrollArea } from "~/components/ui/scroll-area";
import { EducationSection } from "~/components/education";
import { PhilosophySection } from "~/components/philosophy";
import { GithubIcon } from "~/components/ui/icons/github";
import { LinkedinIcon } from "~/components/ui/icons/linkedin";
import { useSectionObserver } from "~/hooks/use-section-observer";

export default function Home() {
	const activeSection = useSectionObserver();

	return (
		<div className="min-h-screen bg-black text-white">
			<div className="relative w-full backdrop-blur-md backdrop-filter blur-md hidden sm:block">
				<Banner
					height="6rem"
					variant="vaporwave"
				/>
			</div>
			<div className="relative w-full sm:hidden">
				<Banner
					height="2rem"
					variant="vaporwave"
				/>
			</div>
			<div className="mx-auto max-w-6xl px-4 -mt-2 sm:mt-0 sm:pt-1 pb-8">
				<div className="grid gap-8">
					<div className="space-y-12">
						{/* Hero Section */}
						<div className="relative">
							{/* Subtle glow behind hero */}
							<div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
							
							<div className="flex items-center gap-8 mt-2 sm:mt-12 relative z-10">
								<Image
									src="/me.png"
									alt="Omar Al-Shammary"
									width={180}
									height={180}
									priority
									className="rounded-lg border-3 mt-2 border-teal-500/40 hidden sm:inline"
									style={{ filter: `sepia(100%) saturate(150%) brightness(90%) hue-rotate(130deg)` }}
								/>
								<div className="flex flex-col justify-center mt-8 sm:mt-0">
									<span className="text-4xl sm:text-5xl text-teal-400 font-extrabold font-offbit-dots">
										Omar Al-Shammary
									</span>
									<div className="mt-3">
										<span className="text-md sm:text-lg font-semibold text-gray-100">
											I build production AI/ML infrastructure that scales, saves money, and ships.
										</span>
										<br />
										<span className="text-sm sm:text-md text-gray-400 leading-relaxed">
											Serverless Data Platforms · Enterprise RAG Systems · MLOps · Cost-Optimized Cloud Architectures
										</span>
										<div className="flex items-center gap-4 mt-4">
											<div className="flex items-center gap-1 text-md text-teal-300/80">
												<MapPinHouse className="h-5 w-5 mr-1" />
												Tri-State Area
											</div>
											<Separator
												orientation="vertical"
												className="h-6 bg-teal-500/30"
											/>
											<div className="flex items-center gap-4">
												<a
													href={SocialConfig.github}
													className="text-teal-300/70 hover:text-teal-200 transition-colors duration-300"
													aria-label="GitHub"
												>
													<GithubIcon size={22} className="h-6 w-6" />
												</a>
												<a
													href={SocialConfig.linkedin}
													className="text-teal-300/70 hover:text-teal-200 transition-colors duration-300"
													aria-label="LinkedIn"
												>
													<LinkedinIcon size={22} className="h-6 w-6" />
												</a>
												<a
													href={SocialConfig.email}
													className="text-teal-300/70 hover:text-teal-200 transition-colors duration-300"
													aria-label="Email"
												>
													<Send animateOnHover className="h-5.5 w-5.5" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Credibility Indicators */}
							<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 relative z-10">
								<div className="group rounded-lg border border-teal-500/10 bg-teal-950/20 px-5 py-4 transition-all duration-300 hover:border-teal-500/25 hover:bg-teal-950/30">
									<div className="text-2xl font-bold text-teal-400 font-offbit">$2M</div>
									<div className="text-sm text-gray-400 mt-1">AI infrastructure funding secured through technical leadership</div>
								</div>
								<div className="group rounded-lg border border-teal-500/10 bg-teal-950/20 px-5 py-4 transition-all duration-300 hover:border-teal-500/25 hover:bg-teal-950/30">
									<div className="text-2xl font-bold text-teal-400 font-offbit">95%</div>
									<div className="text-sm text-gray-400 mt-1">Infrastructure cost reduction — $24K to $90/month</div>
								</div>
								<div className="group rounded-lg border border-teal-500/10 bg-teal-950/20 px-5 py-4 transition-all duration-300 hover:border-teal-500/25 hover:bg-teal-950/30">
									<div className="text-2xl font-bold text-teal-400 font-offbit">1,500+</div>
									<div className="text-sm text-gray-400 mt-1">Daily users served, 220K+ annual queries at {"<"}1min latency</div>
								</div>
							</div>
						</div>
						
						{/* Work Experience */}
						<WorkSection />
						
						{/* Systems Philosophy */}
						<PhilosophySection />
						
						{/* Selected Work */}
						<ProjectSection />

						{/* Education */}
						<EducationSection />

						{/* Honors & Awards */}
						<AwardSection />	
					</div>

					{/* Sidebar */}
					<div className="sticky top-8 h-screen pt-12 hidden">
						<ScrollArea className="h-[calc(100vh-6rem)]">
							<nav className="space-y-2">
								<h3 className="mb-4 text-lg font-bold text-teal-400">
									On This Page
								</h3>
								{["work", "philosophy", "projects", "education", "honors"].map(
									(section) => (
										<a
											key={section}
											href={`#${section}`}
											className={css(
												`group block text-sm transition-all duration-300`,
													activeSection === section && "text-teal-400",
													activeSection !== section && "text-gray-400 hover:text-teal-400"
											)}
										>
											<span className="inline-block w-0 group-hover:w-2 mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100 transition-all duration-500 align-middle">
												<ArrowRight className="size-3 -mt-0.5" />
											</span>
											{section.charAt(0).toUpperCase() + section.slice(1)}
										</a>
									),
								)}
							</nav>
						</ScrollArea>
					</div>
				</div>
			</div>
		</div>
	);
}
