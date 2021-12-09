import React, {useState} from 'react';
import {useParams} from 'react-router-dom'
import notImage from "../../assets/notImageBig.png";
import ChangeSize from "../ChangeSize/ChangeSize";
import BuyButton from "../BuyButton/BuyButton";
import images from '../../assets/notfound.jpg'

const ShoeMoreInfo = ({shoes, setShoes}) => {
    let params = useParams();
const [count, setCount] = useState('1');
    return (
        <div className='container'>
            {shoes.length === 0
                ? <>
                    <h2 className='card__notfound-title'>No result found for this request.</h2>
                    <img className='card__notfound-img' src={images} alt="not found"/>
                </>
                : ''}

            {shoes.filter((item)=>{
                return item.title === params.title.split('-').join('')
            }).map((item)=>{
                return(
                    <div key={item.id}>
                       <h2>{item.shoe}</h2>
                        <div className='shoeMore__row'>
                            <div className='shoeMore__col-img'>
                                <img src={item.media.smallImageUrl === null ? notImage : item.media.smallImageUrl} alt=""/>
                            </div>
                            <div className='shoeMore__col-details'>
                                <h3>{item.brand}{item.year}</h3>
                                <ChangeSize item={item} shoes={shoes} setShoes={setShoes}/>
                                <div className='shoeMore__pay'>
                                    <input value={count} type="number" className='shoeMore__number' min='1' max='10'
                                    onChange={(e)=> setCount(e.target.value)}/>
                                    <BuyButton item={item} shoes={shoes} count={+count} />
                                </div>
                            </div>
                        </div>
<h4>description</h4>
                            <p className='shoeMore__description'>When you wear the right pair of shoes, you can conquer the world.

                                These red high heel open-toed sandals will make you look bewitching and exquisite. These open-toed designs will show off your perfectly polished nails and are perfect for keeping your feet cool on hot summer days.

                                The ankle strap helps secure your foot and adds a touch of style to the sandals, and the heels will add some height and sexiness to your feet.

                                These lovely sandals will add a chic touch to your look! You don’t have to worry about making the right decision with these gorgeous high heel open-toed sandals. </p>




                    </div>
                )
            })}
        </div>
    );
};

export default ShoeMoreInfo;