import React, { useEffect, useState } from "react"
import { MdStarRate } from "react-icons/md"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom"
import { ADD, DELETE, REMOVE_INT } from "../../../controller/action"

export const Details = () => {
    const [data, setData] = useState([])
    const { id } = useParams()

    const getdata = useSelector((state) => state.cartReducer.carts)

    const compare = () => {
        let compareData = getdata.filter((e) => {
            return e.id == id
        })
        setData(compareData)
    }

    // delete item
    const history = useHistory()
    const deletes = (id) => {
        dispatch(DELETE(id))
        history.push("/")
    }

    // increment item
    const dispatch = useDispatch()
    const increment = (e) => {
        dispatch(ADD(e))
    }

    // descriment item
    const decrement = (item) => {
        dispatch(REMOVE_INT(item))
    }

    useEffect(() => {
        compare()
    }, [id])

    return (
        <>
            <article>
                <section className='details'>
                    <h2 className='details_title'>Product Details Pages</h2>
                    {data.map((item) => (
                        <div className='details_content'>
                            <div className='details_content_img'>
                                <img src={item.cover} alt='' />
                            </div>
                            <div className='details_content_detail'>
                                <h1>{item.title}</h1>
                                <div className='rating'>
                                    <MdStarRate />
                                    <MdStarRate />
                                    <MdStarRate />
                                    <MdStarRate />
                                    <MdStarRate />
                                    <label htmlFor=''>(1 customer review)</label>
                                </div>
                                <h3> ${item.price * item.qty}</h3>
                                <p>{item.author}</p>
                                <div className='qty'>
                                    <div className='count'>
                                        <button onClick={() => increment(item)}>
                                            <AiOutlinePlus />
                                        </button>
                                        <span>{item.qty}</span>
                                        <button onClick={item.qty <= 1 ? () => deletes(item.id) : () => decrement(item)}>
                                            <AiOutlineMinus />
                                        </button>
                                    </div>
                                    <button className='button'>Add To Cart</button>
                                </div>
                                <div className='desc'>
                                    <h4>PRODUCTS DESCRIPTION</h4>
                                    <p>{item.description}</p>
                                    <h4> PRODUCT DETAILS</h4>
                                    <ul>
                                        <li>
                                            <p> Material: {item.material}</p>
                                        </li>
                                        <li>
                                            <p>Legs: {item.legs}</p>
                                        </li>
                                        <li>
                                            <p>Dimensions and Weight: {item.dimensionsWeight}</p>
                                        </li>
                                        <li>
                                            <p>Length: {item.length}</p>
                                        </li>
                                        <li>
                                            <p>Depth: {item.depth}</p>
                                        </li>
                                        <li>
                                            <p>Seat Height: {item.seatHeight}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    ))}
                </section>
            </article>
        </>
    )

}


