import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CardItem from '../components/CardItem';
import {mockBuyers} from '../mock/mockBuyers';
import {mockSellers, MockType} from '../mock/mockSellers';

export enum TabStates {
    Buyers,
    Sellers
}




export const HomePage = () => {

    const [currentTab, setCurrentTab] = useState(TabStates.Buyers);
    const [data, setData] = useState<MockType[]>([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        setData(mockBuyers);
    }, [])


    return (
    <div className='h-screen p-8 flex flex-col w-full gap-y-2'>
        <div className='flex gap-4 w-full'>
            <button onClick={e => {setCurrentTab(TabStates.Buyers); setData(mockBuyers)}} className={`flex-1 shadow-md border rounded-lg px-6 py-2 font-bold ${currentTab === TabStates.Buyers ? 'bg-gray-600':'bg-white hover:bg-gray-200'}`}>
                <span>Alıcılar</span>
            </button>
            <button onClick={e => {setCurrentTab(TabStates.Sellers); setData(mockSellers)}} className={`flex-1 shadow-md border rounded-lg px-6 py-2 font-bold ${currentTab === TabStates.Sellers ? 'bg-gray-600':'bg-white hover:bg-gray-200'}`}>
                <span>Satıcılar</span>
            </button>
        </div>
        <div>
            <button className='w-full font-bold py-3 border rounded-lg flex items-center justify-center hover:bg-gray-200 shadow-lg'>
                <span>+ İlan Vermek için Tıkla!</span>
            </button>
        </div>
        <div className='cardsSection flex flex-col gap-y-4 bg-gray-600 p-4 rounded-lg overflow-y-scroll'>
            {data.map((cardItemData) => {
                return (
                    <div>
                        <CardItem data={cardItemData} />
                    </div>
                )
            })}
        </div>
        <div className='flex justify-center items-center font-semibold'>
            <span>Son kur güncelleme zamanı: 17.10.2923 14:45</span>
        </div>
        <div className='flex items-center justify-center font-bold underline'>
            <button onClick={e => navigate("/about")}>
                Hakkında
            </button>
        </div>
    </div>
    )
}
