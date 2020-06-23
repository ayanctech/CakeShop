import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/CakeActions'

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Cakky</h2>
            <h3>No of Cakes {props.cakes}</h3>
            <button onClick={props.buyCake}>Buy Cake</button>
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
      buyCake: () => dispatch(buyCake())
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
