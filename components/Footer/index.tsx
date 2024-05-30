import Image from 'next/image'
import logo from '../../public/logo.svg';

export default function Footer() {
  return (
    <footer className='flex flex-col'>
      <div className="w-full bg-[#181E2B] flex items-center justify-center p-4">
        <Image src={logo} alt='logo' width={150} />
      </div>
      <div className="bg-[#0E1118]	w-full flex items-center justify-center p-8">
        <span className="text-white">Copyright © 2024 DailyHelper | Todos direitos reservados</span>
      </div>
    </footer>
  )
}
