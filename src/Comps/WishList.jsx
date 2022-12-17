import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function WishList({WishLister, Wisher, setWish}) {

    function MudarEstadoParaTrue(Wisher){
        let WisherNovo = {
            Text: Wisher.Text,
            Completed: true
        };
        WishLister[WishLister.indexOf(Wisher)] = WisherNovo;
        setWish([...WishLister])
    }

    function MudarEstadoParaFalse(Wisher){
        let WisherNovo = {
            Text: Wisher.Text,
            Completed: false
        };
        WishLister[WishLister.indexOf(Wisher)] = WisherNovo;
        setWish([...WishLister])
    }

    function RemoverWisher(){
        WishLister.splice(WishLister.indexOf(Wisher), 1);
        setWish([...WishLister])
    }
    
    if(Wisher.Completed === true){
        return (
            <>
                <div className='flex flex-row flex-nowrap items-center justify-center h-[50px] min-h-[50px] w-[100%] px-[2.5px] shadow-inner'>
                <p className='w-[100%] h-[40px] mx-[2.5px] px-[2.5px] font-kanit font-light text-[.8rem] bg-gray rounded-lg text-justify'>{Wisher.Text}</p>
                <button type="submit" onClick={() => {MudarEstadoParaFalse(Wisher)}} className='transition ease-in-out flex flex-row flex-nowrap items-center justify-center w-[28px] h-[28px] mx-[2.5px] px-[5px] bg-branco hover:bg-gray shadow-md rounded-[2px]'><AiOutlineCheckCircle size={18} color='#00000099'/></button>
                <button type="submit" onClick={() => {RemoverWisher(Wisher)}} className='transition ease-in-out flex flex-row flex-nowrap items-center justify-center w-[28px] h-[28px] mx-[2.5px] px-[5px] bg-branco hover:bg-gray shadow-md rounded-[2px]'><AiOutlineCloseCircle size={18} color='#00000099'/></button>
                </div>
            </>
        )
    }else{
        return (
            <>
                <div className='flex flex-row flex-nowrap items-center justify-center h-[50px] min-h-[50px] w-[100%] px-[2.5px] bg-gray shadow-inner'>
                <p className='w-[100%] h-[40px] mx-[2.5px] px-[2.5px] font-kanit font-light text-[.8rem] bg-branco rounded-lg text-justify'>{Wisher.Text}</p>
                <button type="submit" onClick={() => {MudarEstadoParaTrue(Wisher)}}  className='transition ease-in-out flex flex-row flex-nowrap items-center justify-center w-[28px] h-[28px] mx-[2.5px] px-[5px]  bg-gray hover:bg-branco shadow-md rounded-[2px]'><AiOutlineMinusCircle size={18} color='#00000099'/></button>
                <button type="submit" onClick={() => {RemoverWisher(Wisher)}} className='transition ease-in-out flex flex-row flex-nowrap items-center justify-center w-[28px] h-[28px] mx-[2.5px] px-[5px] bg-gray hover:bg-branco shadow-md rounded-[2px]'><AiOutlineCloseCircle size={18} color='#00000099'/></button>
                </div>
            </>
        )
    }
}

export default WishList;