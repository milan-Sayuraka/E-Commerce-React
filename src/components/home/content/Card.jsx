import React from 'react'
import { card } from "../../assets/data/data"

export const Card = () => {
    return (
        <>
            <section className='cards'>
                {card.map((item) => (
                    <div className='card' key={item.id}>
                        <div className='left'>
                            <img src={item.cover} alt='' />
                        </div>
                        <div className='right'>
                            <h4>{item.name}</h4>
                            <p>{item.items} items</p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}
