import React from 'react';
import axios from "axios";
import {useDispatch} from 'react-redux'

import {Header} from './components';
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";
import {setPizzas} from './redux/actions/pizzas'

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    // move to Redux and use redux-thunk
    // track filters and sorting and use params in URL from Redux
    // add imitation of loading of pizzas (CSS and PizzaBlock)
    axios.get('http://localhost:3001/pizzas').then(({data}) => {
      dispatch(setPizzas(data))
    })
  }, [])

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route path="/" component={Home} exact/>
        <Route path="/cart" component={Cart} exact/>
      </div>
    </div>
  )
}

/*class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      this.props.setPizzas(data.pizzas)
    })
  }

  render() {
    // console.log(this.props)
    return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Route path="/" render={() => <Home items={this.props.items}/>} exact/>
          <Route path="/cart" component={Cart} exact/>
        </div>
      </div>
    )
  }
}*/


export default App
//
// return {
//   items: state.pizzas.items,
//   filters: state.filters
// }
