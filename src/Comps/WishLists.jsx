import React from 'react';
import WishList from './WishList';
import WishListsInput from './WishListsInput';

function WishLists({Wish, setWish, InputRef}) {
    return ( 
        <>
        <main className='relative left-0 overflow-hidden overflow-y-scroll flex flex-col flex-nowrap items-center justify-start h-[90%] pt-[55px] pl-[8px] max-h-[450px] w-[300px] shadow-xl bg-branco rounded-lg'>
        <WishListsInput InputRef={InputRef} Wish={Wish} setWish={setWish}/>
        {
            Wish.map((Value, index) => <WishList key={index} WishLister={Wish} Wisher={Value} setWish={setWish}/>)
        }
        </main>
        </>
    );
}

export default WishLists;