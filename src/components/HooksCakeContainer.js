import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/CakeActions'

const HooksCakeContainer = (props) => {
    const numofCakes = useSelector(state => state.cakes.numCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Cakky</h2>
            <h3>No of Cakes {numofCakes}</h3>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer