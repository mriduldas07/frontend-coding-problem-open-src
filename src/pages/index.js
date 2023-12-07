import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex gap-5 flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Link href={`/practice-1`}>
        <button className="px-5 py-1 bg-slate-900 text-white">
          practice-1
        </button>
      </Link>
      <Link href={`/practice-2`}>
        <button className="px-5 py-1 bg-slate-900 text-white">
          practice-2
        </button>
      </Link>
    </main>
  );
}
