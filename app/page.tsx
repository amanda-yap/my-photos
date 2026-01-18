import { Gallery } from "./components/gallery";

export default function Page() {
	return (
		<section>
			<h1 className="mb-14 text-4xl font-semibold text-red-950 tracking-wide">
			amanda yap<span className="text-red-800 opacity-40">s</span>
			</h1>
			<p className="text-stone-900">
				Welcome to my website of random musings and various works.
			</p>
			<Gallery />
		</section>
	)
}