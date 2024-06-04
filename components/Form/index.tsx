'use client';

import { useState } from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import DailyButton from '../Button';

type DailyFormProps = {
  label: string;
}

export default function DailyForm({ label }: DailyFormProps) {
  const [formType, setFormType] = useState<'login' | 'forgotPassword' | 'register'>('login');

  const handleForgotPasswordClick = () => {
    setFormType('forgotPassword');
  };

  const handleRegisterClick = () => {
    setFormType('register');
  };

  const getValidationSchema = () => {
    switch (formType) {
      case 'forgotPassword':
        return yup.object().shape({
          email: yup.string().email('Enter a valid email').required('Email is required'),
          newPassword: yup.string().min(8, 'New Password should be of minimum 8 characters length').required('New Password is required'),
        });
      case 'register':
        return yup.object().shape({
          name: yup.string().required('Name is required'),
          email: yup.string().email('Enter a valid email').required('Email is required'),
          password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
        });
      default:
        return yup.object().shape({
          email: yup.string().email('Enter a valid email').required('Email is required'),
          password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
        });
    }
  };

  return (
    <div className='bg-brand-primary 2xl:w-[40rem] items-center gap-20 flex-col flex justify-center rounded-lg  p-8 xl:p-16 w-[20rem]'>
      <div className='flex items-center justify-center w-full'>
        <span className='text-white text-2xl xl:text-6xl'>{formType === 'login' ? 'Entrar' : formType === 'register' ? 'Cadastra-se' : 'Esqueci minha senha'}</span>
      </div>
      <Formik
        initialValues={{ email: '', password: '', newPassword: '', name: '' }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
        validationSchema={getValidationSchema()}
      >
        {({ isSubmitting }) => (
          <Form style={{ width: "90%", gap: "2rem", display: "flex", flexDirection: "column" }}>
            {formType === 'login' && (
              <>
                <div className='flex items-center justify-center'>
                  <input type="text" id="email" name="email" className="bg-white p-2 w-80 text-black rounded-lg" placeholder="Email" />
                </div>
                <div className='flex items-center justify-center'>
                  <input type="password" id="password" name="password" className="bg-white p-2 w-80 text-black rounded-lg" placeholder="Senha" />
                </div>
              </>
            )}

            {formType === 'forgotPassword' && (
              <>
                <div className='flex items-center justify-center'>
                  <input type="email" id="email" name="email" className="bg-white p-2 w-80 text-black rounded-lg" placeholder="Email" />
                </div>
                <div className='flex items-center justify-center'>
                  <input type="password" id="newPassword" name="newPassword" className="bg-white p-2 w-80 text-black rounded-lg" placeholder="Nova senha" />
                </div>
              </>
            )}

            {formType === 'register' && (
              <>
                <div className='flex items-center justify-center'>
                  <input type="text" id="name" name="name" className="bg-white p-2 w-80 text-black rounded-lg" placeholder="Name" />
                </div>
                <div className='flex items-center justify-center'>
                  <input type="email" id="email" name="email" className="bg-white p-2 w-80 text-black rounded-lg" placeholder="Email" />
                </div>
                <div className='flex items-center justify-center'>
                  <input type="password" id="password" name="password" className="bg-white p-2 w-80 text-black rounded-lg" placeholder="Password" />
                </div>
              </>
            )}

            <div className='flex flex-col xl:flex-row items-center gap-4 justify-center w-full'>
              <div className='flex flex-col gap-2'>
                <span className='text-white text-lg xl:text-2xl cursor-pointer' onClick={handleRegisterClick}>Não tem conta? Cadastra-se</span>
                <span className='text-white text-lg xl:text-2xl cursor-pointer' onClick={handleForgotPasswordClick}>Esqueci minha senha</span>
              </div>
              <DailyButton label={formType === 'login' ? 'Entrar' : formType === 'register' ? 'Cadastra-se' : 'Alterar'} type="submit" disabled={isSubmitting} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

