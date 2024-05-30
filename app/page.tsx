import Image from "next/image";
import produtividade from '../public/produtividade.svg'

export default function Home() {
  return (
    <main className="flex w-full flex-col h-full items-center justify-between">

      <section className="bg-[#3973B8] w-full p-8 gap-20 h-full flex flex-row items-center">
        <div className="flex flex-col gap-32 items-start justify-start">
          <span className="text-brand-primary text-6xl">Bem vindo ao DailyHelper, <br />
            Organize sua rotina e seja <br /> mais <span className="text-brand-second font-bold">produtivo!</span></span>
          <span className="text-brand-second text-7xl font-bold">Expiremente já!</span>
        </div>
        <div className="flex justify-evenly">
          <Image alt="Hero" src={produtividade} width={900} />
        </div>
      </section>
      <section className="bg-white p-8 gap-64 flex w-full items-center justify-center">
        <div className="flex">
          <span className="text-brand-primary text-2xl font-bold">Mantenha-se organizado e com <span className="text-brand-second font-bold">alta</span> <br />
            <span className="text-brand-second font-bold">perfomance</span> anotando, agendando e <br />
            controlando o seu horário e tarefas. <br />
            O <span className="text-brand-second font-bold">DailyHelper</span> é perfeito para atletas,<br />
            empresários, ou qualquer outra pessoa <br />
            que queira manter uma rotina <br />
            produtiva  sem se preocupar em <br />
            esquecer seus compromissos ou <br />
            de informações importantes suas reuniões</span>
        </div>
        <div className="flex">
          <div className="bg-white flex rounded-lg border-brand-second border flex-col">
            <div className="flex flex-row gap-20 p-8">
              <div className="flex justify-center">
                <span className="text-md text-center text-brand-primary">
                  10:00 - 12:00
                </span>
              </div>
              <div className="flex justify-center">
                <span className="text-md text-brand-primary">
                  Encontro com os gestores
                </span>
              </div>
            </div>
            <hr className="w-full h-0.5 bg-brand-second" />
            <div className="flex flex-row gap-20 p-8">
              <div className="flex justify-center">
                <span className="text-md text-center text-brand-primary">
                  13:00 - 14:00
                </span>
              </div>
              <div className="flex justify-center">
                <span className="text-md text-brand-primary">
                  Almoço com a Equipe
                </span>
              </div>
            </div>
            <hr className="w-full h-0.5 bg-brand-second" />
            <div className="flex flex-row gap-20 p-8">
              <div className="flex justify-center">
                <span className="text-md text-center text-brand-primary">
                  19:00 - 22:00
                </span>
              </div>
              <div className="flex justify-center">
                <span className="text-md text-brand-primary">
                  Academia
                </span>
              </div>
            </div>
            <hr className="w-0.5 h-10 bg-brand-second absolute left-[73rem] h-[16.8rem] 2xl:left-[73rem] xl:left-[64rem] lg:left-[50rem]" />
          </div>
        </div>
      </section>
      <section className="bg-white p-8 gap-64 flex w-full items-center justify-center">
        <div className="flex">
          <div className="bg-white flex rounded-lg border-brand-second border flex-col">
            <div className="flex flex-row gap-20 p-8">
              <div className="flex justify-center">
                <span className="text-md text-center text-brand-primary">
                  10:00 - 12:00
                </span>
              </div>
              <div className="flex justify-center">
                <span className="text-md text-brand-primary">
                  Encontro com os gestores
                </span>
              </div>
            </div>
            <hr className="w-full h-0.5 bg-brand-second" />
            <div className="flex flex-row gap-20 p-8">
              <div className="flex justify-center">
                <span className="text-md text-center text-brand-primary">
                  13:00 - 14:00
                </span>
              </div>
              <div className="flex justify-center">
                <span className="text-md text-brand-primary">
                  Almoço com a Equipe
                </span>
              </div>
            </div>
            <hr className="w-full h-0.5 bg-brand-second" />
            <div className="flex flex-row gap-20 p-8">
              <div className="flex justify-center">
                <span className="text-md text-center text-brand-primary">
                  19:00 - 22:00
                </span>
              </div>
              <div className="flex justify-center">
                <span className="text-md text-brand-primary">
                  Academia
                </span>
              </div>
            </div>
          </div>
          <hr className="w-0.5 h-10 bg-brand-second absolute left-[35rem] h-[16.8rem] 2xl:left-[35rem] xl:left-[26rem] lg:left-[12rem] md:left-[10rem]" />

        </div>
        <div className="flex items-center justify-center">
          <span className="text-brand-primary text-2xl font-bold">Anote pontos altos de reuniões, cargas <br />
            e resultados de treinos, lembretes de <br />
            uma reunião e familia, tudo em uma <br />
            O <span className="text-brand-second font-bold">plataforma centralizada</span> e que você<br />
            pode acessar aonde estiver.<br /></span>
        </div>
      </section>
    </main >
  );
}
