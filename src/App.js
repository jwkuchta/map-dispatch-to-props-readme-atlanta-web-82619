import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    // this.props.store.dispatch(addItem()); //we want to remove a reference to the store from Component
    //because this line of code makes the component reliant on Redux
    // the line above is replaced with the following:
    this.props.addItem()
  }

  render() {
    debugger
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items // will be made available to App as this.props.items
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: () => {dispatch(addItem())}
    // It returns an object that contains a function as a value
    // Notice above in handleOnClick() that this function, addItem(),
    // is what is called, NOT the addItem action creator itself.
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// alternatively:
// export default connect(mapStateToProps, { addItem: addItem })(App);
// or even shorter
// export default connect(mapStateToProps, { addItem })(App);
// we could also replace out mapStateToProps item with a POJO:
// export default connect(state => ({ items: state.items }), { addItem })(App);
