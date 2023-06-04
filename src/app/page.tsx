import Image from "next/image";
import { ProfileSettings } from "./components/ProfileSettings";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <ProfileSettings />
    </main>
  );
}
