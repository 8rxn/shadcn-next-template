import { ModeToggle } from "@/components/theme-toggle";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello Next.js Template!</h1>
      <h2>
        Includes - Tailwind CSS, Shadcn, Typescript, Inter Font, Next-themes
      </h2>
      <ModeToggle></ModeToggle>
    </main>
  );
}
