import React, {PureComponent} from 'react'
class TypeTags extends PureComponent{
  render(){
    return(
      <p key={this.props.type} className={`${this.props.type}Type small`}>{this.props.type}</p>
    )
  }
}
export default TypeTags
