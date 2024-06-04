import Image from 'next/image'
import book from '../../public/book.svg'

export default function AboutUs() {
  return (<main className="w-full h-full bg-white flex flex-col items-center p-20 justify-center">
    <div className="flex flex-col gap-4 items-center justify-center">
      <span className="text-brand-second text-6xl">Sobre nós</span>
      <span className="text-brand-primary text-2xl">    Somos uma empresa focada em auxiliar na produtividade empresarial e diária do usuário. <br />
        Fundada em 2024 por estudantes que buscavam o alto desempenho e organização nas suas atividades <br /> tanto de lazer quanto em suas vidas profissionais.</span>
    </div>
    <div className='flex items-center justify-center xl:items-end xl:justify-end w-full'>
      <Image src={book} alt='Book' width={350} />
    </div>
  </main>)
}
