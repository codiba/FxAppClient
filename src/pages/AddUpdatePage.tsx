import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowIcon from '../assets/icons/arrow.svg'

export const AddUpdatePage = () => {
    const [isBuyOptionChecked, setIsBuyOptionChecked] = useState(false);
    const navigate = useNavigate();
    return (
      <div className='h-screen p-4'>
        <div className='relative h-full p-8 flex flex-col items-center gap-y-4'>
            <div className='absolute left-0 top-0 ml-4 cursor-pointer' onClick={e => navigate('/')}>
                <img className='w-16 h-16 -rotate-90 hover:scale-105' src={ArrowIcon} alt="arrowIcon" />
            </div>
            <div className='flex font-bold justify-center'>
                <span>1 USD = 8.0000 TL</span>
            </div>
            <div className='flex justify-center'>
            <form>
                <div className='flex gap-x-8 font-semibold'>
                    <label className='rad-label'>
                        <input onClick={e => setIsBuyOptionChecked(false)} className='rad-input' type={'radio'} name="actionType" checked={!isBuyOptionChecked}/>
                        <div className='rad-design'></div>
                        <div className='rad-text'>Satmak İstiyorum</div>
                    </label>
                    <label className='rad-label'>
                        <input className='rad-input' onClick={e => setIsBuyOptionChecked(true)} type={'radio'} name="actionType" checked={isBuyOptionChecked}/>
                        <div className='rad-design'></div>
                        <div className='rad-text'>Almak İstiyorum</div>
                    </label>
                </div>
                <div>
                    <label className='rad-label'>
                        <input disabled={isBuyOptionChecked} className='rad-input bg-gray-400 rounded-md px-2 py-1' type={'radio'} checked={!isBuyOptionChecked} name=""/>
                        <div className='rad-design'></div>
                        <input disabled={isBuyOptionChecked} placeholder='Dolar Miktarı' className='placeholder:text-gray-600 rad-text w-full bg-gray-400 rounded-md px-2 py-1' type='number' name="sellValue"/>
                    </label>
                    <label className='rad-label'>
                        <input disabled={!isBuyOptionChecked} className='rad-input bg-gray-400 rounded-md px-2 py-1' type={'radio'} checked={isBuyOptionChecked} name=""/>
                        <div className='rad-design'></div>
                        <input disabled={!isBuyOptionChecked} placeholder='TL Miktarı' className='placeholder:text-gray-600 rad-text w-full bg-gray-400 rounded-md px-2 py-1' type='text' name="sellValue"/>
                    </label>
                </div>
                <div className='justify-center flex mt-8'>
                    <button className='py-2 px-16 bg-gray-300 hover:bg-gray-400 rounded-md shadow-md transition duration-300 font-semibold' type='submit'>İlanı Yayınla!</button>
                </div>
            </form>
            </div>
            <div className='mt-4 flex flex-1 justify-center items-end font-semibold'>
                <span>Son kur güncelleme zamanı: 17.10.2923 14:45</span>
            </div>
        </div>
      </div>
    )
}