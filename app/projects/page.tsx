
type Project = {
	title: string;
	description: string;
	stack: string[];
	live_link?: string;
	repo_link?: string;
};

const projects: Project[] = [
	{
		title: "artist portfolio",
		description: "A display of art exhibitions and information on the artist.",
		stack: ["Astro", "Tailwind"],
		live_link: "https://artsd.netlify.app",
		repo_link: "https://github.com/amanda-yap/art-portfolio"
	},
	{
		title: "cli dashboard",
		description: "A personal command-line dashboard to help you stay organised and motivated.",
		stack: ["Python", "Rich"],
		repo_link: "https://github.com/amanda-yap/cli-dashboard",
	},
	{
		title: "personal website",
		description: "An online space to share my works. You're already here!",
		stack: ["Next.js", "Typescript", "Tailwind", "Vercel"],
		repo_link: "https://github.com/amanda-yap/personal-website",
	},
];

export default function Projects() {
    return (
		<section>
			<h1 className="text-3xl font-semibold text-red-950 mb-10">projects</h1>

			<div className="grid gap-8 grid-cols-1">
				{projects.map((project) => (
					<div
						key={project.title}
						className="group border-l-2 border-yellow-900"
					>
						<div className="p-4">
							<h3 className="mb-2 text-md font-medium text-red-950">
								{project.title}
							</h3>
							<p className="text-sm text-stone-900 mb-4">
								{project.description}
							</p>

							<div className="flex flex-wrap gap-2 mb-4">
								{project.stack.map((stack) => (
								<span
									key={stack}
									className="text-xs text-white px-2 py-1 bg-red-950"
								>
									{stack}
								</span>
								))}
							</div>

							<div className="flex flex-col gap-2">
								{project.live_link && (
									<a
										href={project.live_link}
										target="_blank"
										className="text-sm font-medium text-yellow-900 underline"
									>
										View live
									</a>
								)}
								{project.repo_link && (
									<a
										href={project.repo_link}
										target="_blank"
										className="text-sm font-medium text-yellow-900 underline"
									>
										View repo
									</a>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}