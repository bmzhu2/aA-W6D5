import React from 'react';

class Tabs extends React.Component{
  constructor(props) {
    super(props);
    this.state = {tabIndex: 0};
  }
  
  render(){
    return (
      <div className="tabs">
        <ul className="tab-index">
          {this.props.tabItems.map((el) =>{
            return <li><h1 className="tab-index-item">{el.title}</h1></li>
          })}
        </ul>
        <article className="content">
          {this.props.tabItems[this.state.tabIndex].content}
        </article>
      </div>
    )
  }
}

export default Tabs;