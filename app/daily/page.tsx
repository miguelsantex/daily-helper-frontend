'use client';

import { Trash } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Tasks() {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [date, setDate] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/event`, {
        name: eventName,
        start_hours: startTime,
        end_hours: endTime,
        data: date,
        coments: comment,
      },
        {
          headers: {

            Authorization: `Bearer ${token}`,
          }
        });

      setEventName('');
      setStartTime('');
      setEndTime('');
      setDate('');
      setComment('');
      window.location.reload();
    } catch (error) {
      console.error('Erro ao adicionar evento:', error);
    }
  };

  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem('token');

        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/event`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { data } = response;
        setEvents(data);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleDeleteEvent = async (eventId: string) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/event/${eventId}`);

      window.location.reload();
    } catch (error) {
      console.error('Erro ao excluir o evento:', error);
    }
  };

  useEffect(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [user, loading, router]);


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
              {events.map((event: any) => (
                <tr key={event._id} className="bg-white border border-brand-second">
                  <td className="px-6 py-4 font-bold text-brand-primary">{event.start_hours} - {event.end_hours}</td>
                  <td className="px-6 py-4 text-brand-primary font-bold">{event.name}</td>
                  <td className="px-6 py-4 text-brand-primary font-bold">{event.coments}</td>
                  <td className="px-6 py-4 text-brand-primary">
                    <button onClick={() => handleDeleteEvent(event._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <Trash size={32} weight="fill" color='#001036' />
                    </button>
                  </td>
                </tr>
              ))}            </tbody>
          </table>
        </div>
      </section>
      <section>
        <div className='bg-brand-second 2xl:w-[40rem] items-center gap-20 flex-col flex justify-center rounded-lg p-8 xl:p-16 w-[20rem]'>
          <div className='flex items-center justify-center w-full'>
            <span className='text-white text-2xl xl:text-6xl'>Adicione Eventos</span>
          </div>
          <form onSubmit={handleSubmit} style={{ width: "90%", gap: "2rem", display: "flex", flexDirection: "column" }}>
            <div className='flex items-center justify-center'>
              <input
                type="text"
                id="eventName"
                name="eventName"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="bg-white p-2 w-80 text-black rounded-lg"
                placeholder="Nome do Evento"
              />
            </div>
            <div className='flex items-center justify-center'>
              <input
                type="text"
                id="startTime"
                name="startTime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="bg-white p-2 w-80 text-black rounded-lg"
                placeholder="Hora de Início"
              />
            </div>
            <div className='flex items-center justify-center'>
              <input
                type="text"
                id="endTime"
                name="endTime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="bg-white p-2 w-80 text-black rounded-lg"
                placeholder="Hora de Fim"
              />
            </div>
            <div className='flex items-center justify-center'>
              <input
                type="text"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-white p-2 w-80 text-black rounded-lg"
                placeholder="Data"
              />
            </div>
            <div className='flex items-center justify-center'>
              <input
                type="text"
                id="comment"
                name="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="bg-white p-2 w-80 text-black rounded-lg"
                placeholder="Comentário"
              />
            </div>

            <div className='flex flex-col xl:flex-row items-center gap-4 justify-center w-full'>
              <button type='submit' className="`w-40 h-10 flex items-center justify-center bg-[#3973B8] rounded-md p-4">
                <span className="text-white text-2xl">Adicionar</span>
              </button>
            </div>
          </form>
        </div>

      </section>
    </main >
  )
}
