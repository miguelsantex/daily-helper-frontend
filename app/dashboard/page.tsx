'use client';

import Image from "next/image";
import produtividade from '../../public//dashabord.svg'
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {

  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [user, loading, router]);

  return (
    <main className="flex w-full flex-col h-full items-center justify-between">
      <section className="bg-[#5B93C4] justify-between w-full p-8 gap-20 h-full flex flex-row items-start">
        <div className="flex flex-col gap-32 items-start justify-start">
          <span className="text-brand-primary text-6xl">Bem vindo ao DailyHelper, <br />
            Organize sua rotina e seja <br /> mais <span className="text-brand-second font-bold">produtivo!</span></span>
          <a href="/daily" className="cursor-pointer bg-brand-second rounded-md text-[#5B93C4] p-4 text-7xl font-bold">Acesse sua agenda</a>
        </div>
        <div className="flex justify-evenly">
          <Image alt="Hero" src={produtividade} width={900} />
        </div>
      </section>
    </main >
  )
}
