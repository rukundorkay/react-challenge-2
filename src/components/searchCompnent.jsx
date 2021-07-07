import React, { Component } from "react";
import Result from "./resultComponent";
import Loader from "./loaderComponent";
class Search extends Component {
  state = {
    value: "",
    character: [],
    isloading:false,
    isfirst:true,
  };
  handleChange=(event)=>{
    this.setState({value: event.target.value});
  };

  handleSearch = (event) => {
    event.preventDefault();
    this.setState({isfirst: false});
    this.setState({isloading:true})
    fetch(
      `https://jsonplaceholder.typicode.com/albums/${this.state.value}/photos`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ character: data ,
        isloading:false});
      })
  };

  render() {
    const content = this.state.isloading ? <Loader/> : <div className="container"><Result mycharacter={this.state.character} /></div>;
    return (
      <div className="cardList">
        
        <form className="form-wrapper cf" onSubmit={this.handleSearch}>
        <h1>Challenge two</h1>
          <input
            type="number"
            placeholder="Search album here..."
            value={this.state.value}
            onChange={this.handleChange}
            required
          />
          <button type="submit"> Get Album Photos By Id </button>
        </form>
        {this.state.isfirst?"":content}
       
       
      </div>
    );
  }
}

export default Search;
