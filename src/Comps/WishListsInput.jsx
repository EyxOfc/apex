import React from 'react';

function WishListsInput({Wish, setWish, InputRef}) {

    function AddWish(){
        let Value = InputRef.current.value;
        if(Value != ''){
            setWish([
                ...Wish
                ,{
                    Text: Value,
                    Completed: false
                }
            ])
        }
    }

    return ( 
        <>
        <div className='absolute top-[0px] left-[0px] pl-[8px] flex flex-row flex-nowrap items-center justify-center w-[100%] h-[55px] min-h-[55px] px-[2.5px] border-b-[1px] border-b-[#d1d5db] bg-branco'>
            <input ref={InputRef} type="text" className='transition ease-in-out w-[100%] h-[30px] font-kanit font-light px-[5px] mx-[2.5px] shadow-lg rounded-[2px] border-[1px] border-[#0002] focus:border-cyan'/>
            <button onClick={AddWish} type="submit" className='transition ease-in-out flex flex-row flex-nowrap items-center justify-center w-[50px] h-[30px] mx-[2.5px] bg-cyan hover:bg-gray text-branco hover:text-[#000] rounded-[2px] shadow-lg border-[1px] border-transparent hover:border-[#0002]'>+</button>
        </div>
        </>
    );
}

export default WishListsInput;