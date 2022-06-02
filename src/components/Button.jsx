//Buat component button pada file ini, jadikan button menjadi child dari Pages/Counter
import React from 'react'

//Props drilling
//Catatan: ada yang hilang
export const Button = ({idTest, act, label}) => { //Memakai props dari parent component nya, dipanggil menggunakan metode desctructuring
  return (
    <button data-testid={idTest} className='button-5' onClick={act}>
      {label}
    </button>
  )
}