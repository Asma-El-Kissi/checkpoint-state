import "./App.css";
import React from "react";
import personalImg  from './photo.jpg';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      show : true,
      Person : { 
                fullName : "Asma El Kissi",
                bio : 'She is Electrical Engineer. She has a Master and PhD in Electrical Engineering from National Engineering School of Monastir. Actually she is project manager in 3D Wave and Full-stack JavaScript Developer apprenant in GoMyCode', 
                imgSrc: personalImg,
                profession:"Project Manager",
             },
      interval: null, 
      timer: 0,
    }
  this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount(){
      this.setState({
          interval : setInterval(() => {
             this.setState ({ timer : this.state.timer +1}); 
          }, 1000)
      })
  }

componentDidUpdate(){ }
componentWillUnmount(){
    clearInterval(this.state.interval)
}
clickHandler(){
  this.setState(function (prevState){
    return{
      show : !prevState.show ,
    }
  });
}
render() {
  if(this.state.show)
    return (
      <div>
        <h1> {this.state.Person.fullName} </h1>
        <h2> {this.state.Person.profession} </h2>
        <h3> {this.state.Person.bio} </h3>
        <h4>  <img src={personalImg} alt="image personel" width="120" height="140" /> </h4>
        <h4><button className="togglebtn" onClick={this.clickHandler}>
        {this.state.show
            ? "Hide profile information"
            : " Show profile information"}
        </button></h4>
        <h4> {this.state.timer} </h4>
     </div>
   );
  else
    return(
     <h4><button className="togglebtn" onClick={this.clickHandler}>
      {this.state.show
      ? "Hide profile information"
      : " Show profile information"}
     </button></h4>
    )
  }
}
export default App;