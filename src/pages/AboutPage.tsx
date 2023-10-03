import ArrowIcon from '../assets/icons/arrow.svg'
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
    const navigate = useNavigate();
    return (
        <div className='px-4'>
            <div className='absolute left-0 top-0 ml-4 cursor-pointer' onClick={e => navigate('/')}>
                <img className='w-16 h-16 -rotate-90 hover:scale-105' src={ArrowIcon} alt="arrowIcon" />
            </div>
            <div className='text-center p-4 mt-4'>
                <span className='font-bold'>Hakkında</span>
            </div>
            <div className='flex flex-col mt-4'>
                <span>Nasıl Çalışıyor?</span>
                <span>Örnek bir kazanç hesaplaması:<br/> Bir bankanın dolar alış kurunun 10 TL, satış kurunun ise 12 TL olduğunu varsayalım. Bu durumda kur makası 2 TL olarak belirlenmiştir. Eğer bir müşteri 1000 dolar satın almak isterse, bu işlem için 12.000 TL ödemek zorundadır. Eğer aynı müşteri 1000 dolarını bozdurmak isterse, sadece 10.000 TL alacaktır. İşlem sırasında, %0.2 oranında vergi alındığını göz önünde bulundurursak; alış işlemi için 24 TL vergi ödenmektedir. Bu platform, alıcı ve satıcıları bir araya getirerek doğrudan havale yoluyla alışveriş yapmalarını teşvik etmektedir. Bu yöntemle, hem alış hem de satış işlemlerinde ekonomik bir kazanç elde edilmesi hedeflenmektedir. Alıcı ve satıcıların, alış-satış kurunun orta noktasını baz alarak işlem yapmaları önerilmektedir.<br/>
                Piyasa fiyatları üzerinden işlem yapıldığında:<br/>Alış = 1000$ x 12 TL/$ + %0.2 x (1000$ x 12TL/$) = 12.024 TL<br/>Satış = 1000$ x 10 TL/$ = 10.000 TL  Uygulama aracılığıyla işlem yapıldığında:<br/>Alış = 1000$ x 11 TL/$ = 11.000 TL<br/>Satış = 1000$ x 11 TL/$ = 11.000 TL<br/><br/>Kazanç:
                <br/>Alış = 12.024 - 11.000 = 1024 TL<br/>Satış = 11.000 - 10.000 = 1000 TL
                </span>
            </div>
        </div>
    )
}

export default AboutPage