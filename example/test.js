'use strict';

const element = React.createElement;

class TestClass extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    // return element(
    //   'button',{onClick : ()=>console.log('Hello')},'Hello Wrold'
    // )
    return (
      <h1>Hello World</h1>
    )
  }
}

const testContainer = document.querySelector('#test_container');
ReactDOM.render(element(TestClass), testContainer)