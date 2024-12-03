import Image from 'next/image';
import React from 'react';
import ErrorImg from '/public/images/backgrounds/errorimg.svg';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Error-404',
};
const Error = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-white dark:bg-darkgray">
        <div className="text-center">
          <Image src={ErrorImg} alt="error" className="mb-4" />
          <h1 className="text-ld text-4xl mb-6">Maaf Anda Tersesat!!!</h1>
          <h6 className="text-xl text-ld">
            Kembali Ke Menu Utama Tekan Tombol di bawah ini
          </h6>
          <Button
            color={'primary'}
            as={Link}
            href="/dashboard"
            className="w-fit mt-6 mx-auto"
          >
            Go Back to Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default Error;
