import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import { title } from "process";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Gwenaël Magnenat" },
      _id: 1,
      description: "A platform for sharing and discovering new music",
      image:
        "https://images.unsplash.com/photo-1516783154360-123b392d0833?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Craft",
      title: "Craft Workshop group class",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and get Noticed in Virtual Competitions
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p>No startup found</p>
          )}
        </ul>
      </section>
    </>
  );
}
