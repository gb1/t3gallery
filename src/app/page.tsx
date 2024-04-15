import Link from "next/link";

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

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} className="h-40 w-full object-cover" />
          </div>
        ))}
      </div>
    </main>
  );
}
