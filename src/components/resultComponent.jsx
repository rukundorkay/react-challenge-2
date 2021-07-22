import React, { Component }  from 'react';
class Result extends Component {
   //state = { result:"" }
    render() { 
        return (
            this.props.mycharacter.length!==1?this.props.mycharacter.map
            (res=>(<div className="innercontainer"><h3>{res.title}</h3> 
            <img src={res.thumbnailUrl} /></div>)):<h3>"No results found"</h3> );
    }
}
 
export default Result;