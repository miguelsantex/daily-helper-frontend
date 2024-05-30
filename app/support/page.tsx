import Image from 'next/image'
import avatar from '../../public/user.svg'

export default function Support() {
  return (<main className="w-full h-full bg-white flex flex-col items-center p-20 justify-center">
    <div className="flex flex-col gap-4 items-center justify-center">
      <span className="text-brand-second text-6xl">Precisa de ajuda?</span>
      <span className="text-brand-primary text-2xl">   O nosso suporte é feito por e-mail onde tiramos duvidas e damos sustentação a bugs e novas ideias do usuário. <br /> Se está com problemas entre em contato com o e-mail abaixo.</span>
      <span className="text-brand-second text-1xl">dailyhelper@gmail.com</span>
    </div>
    <div className='flex items-end justify-end w-full'>
      <Image src={avatar} alt='Avatar' width={350} />
    </div>
  </main>)
}
