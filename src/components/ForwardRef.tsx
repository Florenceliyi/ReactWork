import React from 'react';
function Son (props){
    const { grandRef } = props
    return <div>
        <div> i am alien </div>
        <span ref={grandRef} >这个是想要获取元素</span>
    </div>
}

class Father extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            <Son grandRef={this.props.grandRef}  />
        </div>
    }
}

const NewFather = React.forwardRef((props,ref)=><Father grandRef={ref}  {...props} />  )
console.log("🚀 ~ file: ForwardRef.tsx ~ line 22 ~ NewFather", NewFather)

class GrandFather extends React.Component{
    constructor(props){
        super(props)
    }
    node = null 
    componentDidMount(){
        console.log('node',this.node)
    }
    render(){
        return <div>
            <NewFather ref={(node)=> this.node = node } />
        </div>
    }
}

export default GrandFather;