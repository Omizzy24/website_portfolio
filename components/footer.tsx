import Image from "next/image";

import { Button } from "./ui/button";
import { SocialConfig } from "~/util";
import { Dither } from "./ui/dithering";
import { GithubIcon } from "./ui/icons/github";
import { LinkedinIcon } from "./ui/icons/linkedin";

export const Footer: React.FC = () => (
	<footer className="relative md:px-8 py-3 md:mb-5 md:py-6 bg-black overflow-hidden">
		<div className="absolute inset-0 z-0 opacity-40 flex items-center justify-center">
			<Dither
				waveColor={[0.3, 0.6, 0.8]}
				disableAnimation={false}
				enableMouseInteraction={false}
				colorNum={6}
				waveAmplitude={0.3}
				waveFrequency={4.7}
				waveSpeed={0.03}
			/>
		</div>

		<div className="max-w-6xl mx-auto px-6 flex flex-row items-center justify-between gap-4">
			<div className="flex items-center gap-2 z-10 ml-3">
				<Image
					src="/brand.svg"
					alt="OA"
					width={32}
					height={32}
					className="opacity-80"
				/>
				<span className="font-mono text-sm text-gray-400">
					&copy; {new Date().getFullYear()}
				</span>
			</div>
			<div className="flex">
				<Button
					asChild
					variant="link"
				>
					<a
						href={SocialConfig.github}
						rel="noopener noreferrer"
						target="_blank"
						className="hover:text-teal-400 transition-all duration-500 scale-125"
					>
						<GithubIcon size={24} />
					</a>
				</Button>
				<Button
					asChild
					variant="link"
				>
					<a
						href={SocialConfig.linkedin}
						rel="noopener noreferrer"
						target="_blank"
						className="hover:text-teal-400 transition-all duration-500 scale-125"
					>
						<LinkedinIcon size={100} />
					</a>
				</Button>
			</div>
		</div>
	</footer>
);
