import React, { FunctionComponent } from 'react'
import {MockType} from '../mock/mockSellers'

type Props = {
    data: MockType;
}

const CardItem: FunctionComponent<Props> = ({data}) => {
  return (
    <div className='bg-white shadow-md p-4 hover:translate-x-2 transition duration-300 hover:bg-gray-200 cursor-pointer rounded-lg'>
        <div className='flex justify-between items-center'>
            <span className='font-bold'>{data.dolar_miktar}$</span>
            <span className='font-bold'>1 USD = {data.dolar_kuru} TL</span>
        </div>
        <div className='flex flex-col'>
            <span>Kazanç: {data.kazanc_tl} TL</span>
            <span>Telefon: {data.telefon}</span>
        </div>
    </div>
  )
}

export default CardItem