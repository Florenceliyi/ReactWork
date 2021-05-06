import React from "react";
import store from "./store/store";
import { addAction, ADD_COUNT, subAction, SUB_COUNT } from "./store/action";
import GrandFather from '@/components/ForwardRef.tsx'

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: store.getState().count,
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        count: store.getState().count,
      });
    });
  }
  componentWillUnmount() {
    store.unsubscribe();
  }
  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={this.btnClick1.bind(this)}>点我+</button>
        <button onClick={this.btnClick2.bind(this)}>点我-</button>
        <GrandFather/>
      </>
    );
  }
  btnClick1() {
    store.dispatch(addAction(3));
  }
  btnClick2() {
    store.dispatch(subAction(3));
  }
}

export default App;
