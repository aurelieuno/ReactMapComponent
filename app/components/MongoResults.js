import React from "react";
import axios from "axios";

class MongoResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: null};
  }

  componentDidMount() {
     axios.get("/data")
    .then (res => this.setState({data: res.data}).bind(this))
    .catch(error => console.log(error))
  }

  render() {

    const data = this.state.data;

    return (
      <div>
      <ul>
      {data && data.map(el=>
        <li key ={el.name}> {el.name}</li>)}
      </ul>
      </div>
    );
  }
}

module.exports=  MongoResults;