import { Header } from "@/components/header";

export default function Home() {
  const title = "Hi, I'm Aaron.";
  return (
    <>
      <Header />
      <main>
        <h1>{title}</h1>
      </main>
    </>
  );
}
