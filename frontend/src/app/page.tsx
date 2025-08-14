import Box from "@/components/ui/Box";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Box>
        <h2 className="text-xl font-bold mb-4">Box Title</h2>
        <p>This is the content inside the box.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Click Me
        </button>
      </Box>
    </main>
  );
}
