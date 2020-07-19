import React from 'react';

class ResultSpace extends React.Component{
    render(){
        return ( <div className="col-10 col-xl-10">
            <p className="m-2" style={{color:this.props.color,fontSize:parseInt(this.props.size)}}>Nội dung được trả về </p>
        </div>)
    }
}

export default ResultSpace