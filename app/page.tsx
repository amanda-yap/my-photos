import { Gallery } from "./components/gallery";

export default function Page() {
	return (
		<section>
			<h1 className="my-6 text-xl text-yellow-100 tracking-wide text-center">
				amanda's photos
			</h1>
			<Gallery />
		</section>
	)
}