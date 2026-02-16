import type { JSX, PropsWithChildren } from "react";

export type EducationEntry = {
	institution: string;
	location: string;
	image: string;
	degreeType: string;
	major: string;
	minor?: string[];
	start: string;
	end?: string;
	description?: string | JSX.Element;
};

const Link: React.FC<PropsWithChildren<{ href: string }>> = ({ href, children }) => (
	<a className="text-purple-300 hover:text-purple-400 transition-all duration-500" href={href} target="_blank">
		{children}
	</a>
);

export const Education: Array<EducationEntry> = [
	{
		institution: "University of Connecticut",
		location: "Storrs, CT",
		image: "/logos/uconn.jpeg",
		degreeType: "M.S",
		major: "Quantitative Economics",
		start: "Aug '21",
		end: "Dec '22",
		description: (
			<div className="space-y-4">
				<p>
					Master's program focused on econometric modeling, statistical analysis, and quantitative methods. 
					Developed strong foundation in data analysis and modeling techniques that directly translate to 
					production ML systems and data platform engineering.
				</p>
			</div>
		),
	},
	{
		institution: "University of Connecticut",
		location: "Storrs, CT",
		image: "/logos/uconn.jpeg",
		degreeType: "B.S",
		major: "Economics & Microbiology",
		start: "Aug '17",
		end: "May '21",
		description: (
			<div className="space-y-4">
				<p>
					Dual degree combining quantitative economics with biological sciences. 
					Built analytical and research skills through coursework in statistical methods, 
					data analysis, and scientific research methodologies.
				</p>
			</div>
		),
	},
];
