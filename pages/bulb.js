import React from 'react'
//import css from '../styles/bulb.css'

class Lamp extends React.Component {
  
    constructor(props){
      super(props);
      this.state = {isOn: this.props.bulbOn};
      
      this.toggleActive = this.toggleActive.bind(this);
    }
    
    toggleActive(){
                    
      this.setState((prevState) => ({
        isOn: !prevState.isOn
      }));
    }
    
    render() {
      if(this.state.isOn){
        return (
                <div className='lightBulb' onClick={this.toggleActive}>
                  <img src='http://res.cloudinary.com/dtjoxh5wb/image/upload/v1495532392/on_med_n3p8pd.png'/>
                </div>
               );
      }
      else{
        return (
                <div className='lightBulb' onClick={this.toggleActive}>
                  <img src='http://res.cloudinary.com/dtjoxh5wb/image/upload/v1495532392/off_med_fmma6p.png'/>
                </div>
               );      
      }
  
    }
  }
  
  class App extends React.Component {
    
    render() {
      return (
        <div id='lightBulbWrapper'>
            <Lamp />
            <Lamp />
            <Lamp bulbOn={true}/>
        </div>
      );
    }
  }
  
  //Render App component composed of many ReactButton components
  React.render(<App/>, document.getElementById('root'));