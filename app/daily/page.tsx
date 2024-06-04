'use client';

import DailyButton from '@/components/Button';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { Trash } from 'phosphor-react';

export default function Tasks() {
  const dados = [
    {
      horario: '10:00',
      nomeEvento: 'Encontro com os gestores',
      comentario: 'Pedir novo dashboard ao engenheiro',
    },
    {
      horario: '12:00',
      nomeEvento: 'Reunião com a equipe de pesquisa',
      comentario: 'Apresentar resultados das pesquisas',
    },
    {
      horario: '14:00',
      nomeEvento: 'Café com clientes',
      comentario: 'Levar resultados das pesquisas',
    },
  ];

  return (
    <main className="flex w-full flex-col h-full p-8 items-center justify-center gap-4">
      <section className="w-full flex items-start">
        <span className="text-brand-second text-6xl">Tarefas</span>
      </section>
      <section className="w-full flex items-center justify-center">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[60%]">
          <table className="w-full text-sm text-left rtl:text-right bg-white border  border-brand-second">
            <thead className="text-xs text-gray-700 uppercase bg-white p-8">
              <tr>
                <th scope="col" className="px-6 py-3 text-brand-primary">
                  Horário
                </th>
                <th scope="col" className="px-6 py-3 text-brand-primary">
                  Nome do Evento
                </th>
                <th scope="col" className="px-6 py-3 text-brand-primary">
                  Comentário
                </th>
                <th scope="col" className="px-6 py-3">
                  Excluir
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border border-brand-second">
                <th scope="row" className="px-6 py-4 font-bold text-brand-primary">
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4 text-brand-primary font-bold">
                  Silver
                </td>
                <td className="px-6 py-4 text-brand-primary font-bold">
                  Laptop
                </td>
                <td className="px-6 py-4 text-brand-primary">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    <Trash size={32} weight="fill" color='#001036' />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <div className='bg-brand-second 2xl:w-[40rem] items-center gap-20 flex-col flex justify-center rounded-lg  p-8 xl:p-16 w-[20rem]'>
          <div className='flex items-center justify-center w-full'>
            <span className='text-white text-2xl xl:text-6xl'>Adicione Eventos</span>
          </div>
          <Formik
            initialValues={{ email: '', password: '', newPassword: '', name: '' }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form style={{ width: "90%", gap: "2rem", display: "flex", flexDirection: "column" }}>
                <div className='flex items-center justify-center'>
                  <input type="text" id="email" name="email" className="bg-white p-2 w-80 text-black rounded-lg" placeholder="Email" />
                </div>
                <div className='flex items-center justify-center'>
                  <input type="password" id="password" name="password" className="bg-white p-2 w-80 text-black rounded-lg" placeholder="Senha" />
                </div>

                <div className='flex flex-col xl:flex-row items-center gap-4 justify-center w-full'>
                  <DailyButton
                    label='Adicionar'
                    type="submit"
                    disabled={isSubmitting}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </main >
  )
}
