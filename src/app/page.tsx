import ResizablePanels from "@/app/ResizablePanels";

export default function Home() {
  return (
    <main className="h-screen flex p-10">
      <div className="w-96 h-20 bg-gray-900 text-white">
        <ResizablePanels />
      </div>
    </main>
  );
}
