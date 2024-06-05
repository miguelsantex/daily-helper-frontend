'use client';

import { useContext, useState } from 'react';
import * as yup from 'yup';
import DailyButton from '../Button';
import { AuthContext } from '@/app/context/AuthContext';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

type DailyFormProps = {
  label: string;
}

export default function DailyForm({ label }: DailyFormProps) {
  const [formType, setFormType] = useState<'login' | 'forgotPassword' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [newPassword, setNewPassword] = useState('');


  const { login } = useContext(AuthContext);

  const handleForgotPasswordClick = () => {
    setFormType('forgotPassword');
  };

  const handleRegisterClick = () => {
    setFormType('register');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (formType == 'login') {
        login(email, password);
      } else if (formType == 'register') {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/users`, {
          name,
          email,
          password
        });

        const { token } = response.data;
        localStorage.setItem('token', token);

        window.location.href = '/dashboard';
      } else if (formType === 'forgotPassword') {
        await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/users/change-password`, {
          email,
          password,
          newPassword,
        });

        toast.success("Senha alterada com sucesso!");
        setTimeout(() => {
          window.location.href = '/login';
        }, 3000);
      }
    } catch (error: any) {
      console.error('Validation error:', error?.message);
      toast.error("Usuário e senha inválidos.")
    }
  };

  return (
    <div className='bg-brand-primary 2xl:w-[40rem] items-center gap-20 flex-col flex justify-center rounded-lg  p-8 xl:p-16 w-[20rem]'>
      <div className='flex items-center justify-center w-full'>
        <span className='text-white text-2xl xl:text-6xl'>{formType === 'login' ? 'Entrar' : formType === 'register' ? 'Cadastra-se' : 'Esqueci minha senha'}</span>
      </div>
      <Toaster />

      <form onSubmit={handleSubmit} style={{ width: "90%", gap: "2rem", display: "flex", flexDirection: "column" }}>
        {formType === 'login' && (
          <>
            <div className='flex items-center justify-center'>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white p-2 w-80 text-black rounded-lg"
                placeholder="Email"
              />
            </div>
            <div className='flex items-center justify-center'>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white p-2 w-80 text-black rounded-lg"
                placeholder="Senha"
              />
            </div>
          </>
        )}

        {formType === 'forgotPassword' && (
          <>
            <div className='flex items-center justify-center'>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white p-2 w-80 text-black rounded-lg"
                placeholder="Email"
              />
            </div>
            <div className='flex items-center justify-center'>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white p-2 w-80 text-black rounded-lg"
                placeholder="Antiga senha"
              />
            </div>
            <div className='flex items-center justify-center'>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="bg-white p-2 w-80 text-black rounded-lg"
                placeholder="Nova senha"
              />
            </div>

          </>
        )}

        {formType === 'register' && (
          <>
            <div className='flex items-center justify-center'>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-white p-2 w-80 text-black rounded-lg"
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className='flex items-center justify-center'>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white p-2 w-80 text-black rounded-lg"
                placeholder="Email"
              />
            </div>
            <div className='flex items-center justify-center'>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white p-2 w-80 text-black rounded-lg"
                placeholder="Senha"
              />
            </div>
          </>
        )}

        <div className='flex flex-col xl:flex-row items-center gap-4 justify-center w-full'>
          <div className='flex flex-col gap-2'>
            <span className='text-white text-lg xl:text-2xl cursor-pointer' onClick={handleRegisterClick}>Não tem conta? Cadastra-se</span>
            <span className='text-white text-lg xl:text-2xl cursor-pointer' onClick={handleForgotPasswordClick}>Esqueci minha senha</span>
          </div>
          <DailyButton
            label={formType === 'login' ? 'Entrar' : formType === 'register' ? 'Cadastra-se' : 'Alterar'}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}


