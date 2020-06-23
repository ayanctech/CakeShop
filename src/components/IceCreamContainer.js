import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/icecream/IceCreamActions'

const IceCreamContainer = (props) => {
    return (
        <div>
            <h2>Iceeecream</h2>
            <h3>No of IceCreams {props.iceCreams}</h3>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      iceCreams: state.iceCreams.numIceCreams
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      buyIceCream: () => dispatch(buyIceCream())
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
