import React, {useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/CakeActions'

const CustomCakeContainer = (props) => {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Cakky</h2>
            <h3>No of Cakes {props.cakes}</h3><input type="text" value={number} onChange={e=>setNumber(e.target.value)} />
    <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      cakes: state.cakes.numCakes
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      buyCake: (number) => dispatch(buyCake(number))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CustomCakeContainer)
