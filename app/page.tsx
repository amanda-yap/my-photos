import { Gallery } from "./components/gallery";

export default function Page() {
  return (
    <section>
      <h1 className="mb-10 text-4xl font-semibold tracking-wide">
        Amanda Yap
      </h1>
      <p className="mb-4">
        Welcome to my website! Here you will find a digital curation of the things I like to create and consume.
      </p>
      <Gallery />
    </section>
  )
}