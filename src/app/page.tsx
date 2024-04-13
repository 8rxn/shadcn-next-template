import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-mono bg-gradient-to-r from-blue-700/10 to-red-600/10">
      <div>
        <h1 className="font-bold text-7xl">Hello Next.js Template!</h1>
        <h2 className="text-5xl">
          Includes - Tailwind CSS, Shadcn, Typescript, Inter Font, Next-themes
        </h2>
      </div>
      <ModeToggle></ModeToggle>
    </main>
  );
}
