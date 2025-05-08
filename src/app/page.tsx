import { ModeToggle } from "@/components/ui/toggle-mode";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <header className="w-full p-2 flex justify-between items-center">
        <ModeToggle />
      </header>
    </main>
  );
}
