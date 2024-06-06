'use client';

import { useContext, useEffect } from 'react';
import profile from '../../public/profile.svg';
import Image from 'next/image';
import { AuthContext } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Profile() {

  const { user, loading, logout } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [user, loading, router, logout]);

  return (
    <main className="w-full h-full bg-white flex flex-col items-center p-20 gap-8 justify-center lg:flex-row">
      <div className="flex items-start w-full flex-col gap-[21rem]">
        <div className="flex flex-col">
          <span className="text-brand-primary text-6xl">Perfil</span>
          <span className="text-brand-primary text-2xl">Nome: {user?.name}</span>
          <span className="text-brand-primary text-2xl">Email: {user?.email}</span>
        </div>
        <div className="">
          <span className="text-brand-primary text-2xl" onClick={logout}>Sair da conta</span>
        </div>
      </div>
      <div>
        <Image src={profile} alt='Avatar' width={350} />
      </div>
    </main >
  )
}
