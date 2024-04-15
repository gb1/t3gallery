import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/5cc8f82c-a3a0-4dbc-aa58-d6661bc2667e-mvncrb.png",
  "https://utfs.io/f/5cc8f82c-a3a0-4dbc-aa58-d6661bc2667e-mvncrb.png",
  "https://utfs.io/f/5cc8f82c-a3a0-4dbc-aa58-d6661bc2667e-mvncrb.png",
  "https://utfs.io/f/5cc8f82c-a3a0-4dbc-aa58-d6661bc2667e-mvncrb.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            <p>{post.name}</p>
          </div>
        ))}

        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={index + 1} className="w-48">
            <img src={image.url} className="h-40 w-full object-cover" />
          </div>
        ))}
      </div>
    </main>
  );
}
