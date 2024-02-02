import Chat from "@/components/Chat";
import Sidebar from "@/components/Sidebar";

export default async function Home() {
  return (
    <main className="text-white flex">
      <Sidebar />
      <Chat />
    </main>
  );
}
