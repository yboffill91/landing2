'use client';

import { useState } from 'react';
import { AcBtn } from '@/components/utils/AcBtn';
import { elementosPorDefecto, AcordeonProps } from '@/constants';

export default function Acordeon({
  elementos = elementosPorDefecto,
}: AcordeonProps) {
  const [seccionesAbiertas, setSeccionesAbiertas] = useState<boolean[]>(() =>
    elementos.map((_, index) => index === 0)
  );

  const toggleSeccion = (index: number) => {
    setSeccionesAbiertas((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className='border border-slate-500/50 rounded-lg min-w-full'>
      <div className='w-full mx-auto space-y-2 rounded-lg'>
        {elementos.map((elemento, index) => (
          <div key={index} className=' overflow-hidden'>
            <AcBtn
              titulo={elemento.titulo}
              estaAbierto={seccionesAbiertas[index]}
              onClick={() => toggleSeccion(index)}
              ariaExpanded={seccionesAbiertas[index]}
              ariaControls={`content-${index}`}
            />
            <div
              id={`content-${index}`}
              className={`overflow-hidden transition-all duration-200  ${
                seccionesAbiertas[index] ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className='p-6 bg-slate-900 text-pretty text-base md:text-md'>
                {elemento.texto}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
