import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function addition(x, y){
  return x += y;
}

function subtraction(x, y){
  return x -= y;
}

function multiplication(x, y){
  return x *= y;
}

function division(x, y){
  return x /= y;
}

function round(num){
  return Number(Math.round(num * 10000) / 10000);
}


class View extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div id={this.props.tag}>
        <h1>{this.props.startValue}{this.props.activeValue}</h1>
      </div>
    )
  }
}

class Buttons extends React.Component{
  constructor(props){
    super(props);
    this.state = {
     
    }
  }
  render(){
    return(
        <button id={this.props.tag} 
                class={this.props.type} 
                onClick={(event) => this.props.globalOnClick(this.props.issuedValue)}>
                    {this.props.issuedValue}
        </button>
      
    );
  }
}
class Application extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      initialState: "0", 
      calculatingState: "",
      calculatedState: [],
      recordedState: [],
      runningTotal: '',
      operator: '',
      testState: '2',
      negative: false
    }

    this.handleOnClick = this.handleOnClick.bind(this);
    this.clearOnClick = this.clearOnClick.bind(this);

    this.digitLimit = this.digitLimit.bind(this);

  }
  
  handleOnClick(event){

    switch(event){

      case '0':

          if(this.state.calculatingState === '0'){

           this.setState({
             initialState: '',
             calculatingState: event,
             calculatedState: this.state.calculatedState + event,
             recordedState: [this.state.recordedState + event],
             operator: this.state.operator
           });

         }else if(this.state.operator === '+'){

           let currentTotal = parseFloat(this.state.calculatedState);

              this.setState({
              initialState: '',
              calculatingState: this.state.calculatingState + event,
              calculatedState: currentTotal,
              runningTotal: addition(currentTotal, parseFloat(this.state.calculatingState + event)),
              recordedState: [this.state.recordedState + event],
              operator: this.state.operator
              });

          }else if(this.state.operator === '-'){

            let currentTotal = parseFloat(this.state.calculatedState);

            this.setState({
              initialState: '',
              calculatingState: this.state.calculatingState + event,
              calculatedState: currentTotal,
              runningTotal: subtraction(currentTotal, parseFloat(this.state.calculatingState + event)),
              recordedState: [this.state.recordedState + event],
              operator: this.state.operator
            });

          }else if(this.state.operator === 'x'){

            let currentTotal = parseFloat(this.state.calculatedState);

            this.setState({
              initialState: '',
              calculatingState: this.state.calculatingState + event,
              calculatedState: currentTotal,
              runningTotal: multiplication(currentTotal, parseFloat(this.state.calculatingState + event)),
              recordedState: [this.state.recordedState + event],
              operator: this.state.operator
            });

          }else if(this.state.operator === '÷'){

            let currentTotal = parseFloat(this.state.calculatedState);

            this.setState({
              initialState: '',
              calculatingState: this.state.calculatingState + event,
              calculatedState: currentTotal,
              runningTotal: division(currentTotal, parseFloat(this.state.calculatingState + event)),
              recordedState: [this.state.recordedState + event],
              operator: this.state.operator
            });

        }else{

          this.setState({
            initialState: '',
            calculatingState: this.state.calculatingState + event,
            calculatedState: [this.state.calculatedState + event],
            recordedState: [this.state.recordedState + event],
            operator: this.state.operator
          });
        }
        break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if(this.state.operator === "+"){

          let currentTotal = parseFloat(this.state.calculatedState);

          this.setState({
          initialState: '',
          calculatingState: this.state.calculatingState + event,
          calculatedState: currentTotal,
          runningTotal: addition(currentTotal, parseFloat(this.state.calculatingState + event)),
          recordedState: [this.state.recordedState + event],
          operator: this.state.operator
        });

        }else if(this.state.operator === "-"){

          let currentTotal = parseFloat(this.state.calculatedState);

          this.setState({
            initialState: '',
            calculatingState: this.state.calculatingState +     event,
            calculatedState: currentTotal,
            runningTotal: subtraction(currentTotal, parseFloat(this.state.calculatingState + event)),
            recordedState: [this.state.recordedState + event],
            operator: this.state.operator
          });

      //code from here to next comment, pertains to the handling of negative numbers

      }else if(this.state.negative === true && this.state.operator[this.state.operator.length - 2] === '+'){

        let currentTotal = parseFloat(this.state.calculatedState);

        this.setState({
        initialState: '',
        calculatingState: this.state.calculatingState + event,
        calculatedState: currentTotal,
        runningTotal: addition(currentTotal, parseFloat(-Math.abs(this.state.calculatingState + event))),
        recordedState: [this.state.recordedState + event],
        operator: this.state.operator
      });

      }else if(this.state.negative === true && this.state.operator[this.state.operator.length - 2] === 'x'){

        let currentTotal = parseFloat(this.state.calculatedState);

          this.setState({
          initialState: '',
          calculatingState: this.state.calculatingState + event,
          calculatedState: currentTotal,
          runningTotal: multiplication(currentTotal, parseFloat(-Math.abs(this.state.calculatingState + event))),
          recordedState: [this.state.recordedState + event],
          operator: this.state.operator
      });

      }else if(this.state.negative === true && this.state.operator[this.state.operator.length - 2] === '÷'){

        let currentTotal = parseFloat(this.state.calculatedState);

        this.setState({
        initialState: '',
        calculatingState: this.state.calculatingState + event,
        calculatedState: currentTotal,
        runningTotal: division(currentTotal, parseFloat(-Math.abs(this.state.calculatingState + event))),
        recordedState: [this.state.recordedState + event],
        operator: this.state.operator
      });

      //end of Negative Numbers
  
      }else if(this.state.operator === "x"){

        let currentTotal = parseFloat(this.state.calculatedState);

        this.setState({
        initialState: '',
        calculatingState: this.state.calculatingState + event,
        calculatedState: currentTotal,
        runningTotal: multiplication(currentTotal, parseFloat(this.state.calculatingState + event)),
        recordedState: [this.state.recordedState + event],
        operator: this.state.operator
      });

      }else if(this.state.operator === '÷'){

        let currentTotal = parseFloat(this.state.calculatedState);

        this.setState({
        initialState: '',
        calculatingState: this.state.calculatingState + event,
        calculatedState: currentTotal,
        runningTotal: division(currentTotal, parseFloat(this.state.calculatingState + event)),
        recordedState: [this.state.recordedState + event],
        operator: this.state.operator
    });

      }else{

        this.setState({
          initialState: '',
          calculatingState: this.state.calculatingState + event,
          calculatedState: [this.state.calculatedState + event], 
          recordedState: [this.state.recordedState + event],
          operator: this.state.operator
        });
      }
        break;

      case '+':
        if(this.state.runningTotal){

          this.setState({
            initialState: event,
            calculatingState: '',
            calculatedState: this.state.runningTotal,
            recordedState: [this.state.recordedState + event],
            operator: event,
            negative: false
          }); 

        }else{

        this.setState({
          initialState: event,
          calculatingState: '',
          calculatedState: [this.state.calculatedState + event],
          recordedState: [this.state.recordedState + event], 
          operator: event,
          negative: false
        });
      }
        break;

      case '-':

      let currentRecordString = this.state.recordedState.toString();

      let currentRecord = currentRecordString.charAt(currentRecordString.length - 1);

      const numRegEx = /[0-9 | .]/;

      const signRegEx = /[+ | x | ÷]/;

          if(this.state.runningTotal && signRegEx.test(currentRecord)){

          this.setState({
            initialState: this.state.operator + event,
            calculatingState: '',
            calculatedState: this.state.runningTotal,
            recordedState: [this.state.recordedState + event],
            operator: this.state.operator + event,
            negative: true
          });

        }else if(this.state.negative === false && signRegEx.test(currentRecord)){

          this.setState({
            initialState: this.state.operator + event,
            calculatingState: '',
            calculatedState: [this.state.calculatedState + event],
            recordedState: [this.state.recordedState + event],
            operator: this.state.operator + event,
            negative: true
          });

        }else if(this.state.runningTotal && numRegEx.test(currentRecord)){

          this.setState({
            initialState: event,
            calculatingState: '',
            calculatedState: this.state.runningTotal,
            recordedState: [this.state.recordedState + event],
            operator: event,
            negative: false
          });

        }else{

        this.setState({
          initialState: event,
          calculatingState: '',
          calculatedState: [this.state.calculatedState + event], 
          recordedState: [this.state.recordedState + event],
          operator: event,
          negative: false
        });
        }
        break;

      case 'x':
        if(this.state.runningTotal){

          this.setState({
            initialState: event,
            calculatingState: '',
            calculatedState: this.state.runningTotal,
            recordedState: [this.state.recordedState + event],
            operator: event,
            negative: false
          });

        }else{

        this.setState({
          initialState: event,
          calculatingState: '',
          calculatedState: [this.state.calculatedState + event],
          recordedState: [this.state.recordedState + event],
          operator: event,
          negative: false
        });
      }
        break;

      case '÷':
        if(this.state.runningTotal){

          this.setState({
            initialState: event,
            calculatingState: '',
            calculatedState: this.state.runningTotal,
            recordedState: [this.state.recordedState + event],
            operator: event,
            negative: false
          });

        }else{

        this.setState({
          initialState: event,
          calculatingState: '',
          calculatedState: [this.state.calculatedState + event],
          recordedState: [this.state.recordedState + event],
          operator: event,
          negative: false
        });
      }
        break;

      case '.':
        if(this.state.calculatingState.includes('.')){

            this.setState({
              initialState: '',
              calculatingState: this.state.calculatingState,
              calculatedState: [this.state.calculatedState],
              recordedState: [this.state.recordedState],
              operator: this.state.operator
            });

        }else{

          this.setState({
            initialState: '',
            calculatingState: this.state.calculatingState + event,
            calculatedState: [this.state.calculatedState + event],
            recordedState: [this.state.recordedState + event],
            operator: this.state.operator
          });
        }
        break;

        case '=':
         this.setState({
           calculatingState: round(this.state.runningTotal)
         });
          break;

        default: 

        this.setState({
          initialState: '',
          calculatingState: this.state.calculatingState,
          calculatedState: [this.state.calculatedState],
          recordedState: [this.state.recordedState],
          operator: this.state.operator
        });
    }
    this.digitLimit();
  }

 
  clearOnClick(){
    this.setState({
      initialState: "0",
      calculatingState: "",
      calculatedState: [],
      runningTotal: '',
      recordedState: [],
      operator: ''
    });
  }

  digitLimit(){
    if(this.state.calculatingState.length === 13){
      alert("You have used the maximum digits for this calculator, press 'AC' and try again");
        this.setState({
          calculatingState: this.state.calculatingState
        });
    }
  }

  
  
  render(){ 
    return(
      <div id="container">
        <View tag="display" 
              startValue={this.state.initialState} 
              activeValue={this.state.calculatingState} />

        <Buttons tag="zero" 
                 issuedValue="0" 
                 globalOnClick={this.handleOnClick} type="number" />

        <Buttons tag="one" 
                 issuedValue="1" 
                 globalOnClick={this.handleOnClick} type="number" />

        <Buttons tag="two" 
                 issuedValue="2" 
                 globalOnClick={this.handleOnClick} type="number"/>

        <Buttons tag="three" 
                 issuedValue="3" 
                 globalOnClick={this.handleOnClick} type="number" />

        <Buttons tag="four" 
                 issuedValue="4" 
                 globalOnClick={this.handleOnClick} type="number"/>

        <Buttons tag="five" 
                 issuedValue="5" 
                 globalOnClick={this.handleOnClick} type="number"/>

        <Buttons tag="six" 
                 issuedValue="6" 
                 globalOnClick={this.handleOnClick} type="number"/>

        <Buttons tag="seven" 
                 issuedValue="7" 
                 globalOnClick={this.handleOnClick} type="number"/>

        <Buttons tag="eight" 
                 issuedValue="8"  
                 globalOnClick={this.handleOnClick} type="number"/>

        <Buttons tag="nine" 
                 issuedValue="9" 
                 globalOnClick={this.handleOnClick} type="number"/>

        <Buttons tag="add" 
                 issuedValue="+" 
                 globalOnClick={this.handleOnClick} type="operator"/>

        <Buttons tag="subtract" 
                 issuedValue="-" 
                 globalOnClick={this.handleOnClick} type="operator"/>

        <Buttons tag="multiply" 
                 issuedValue="x" 
                 globalOnClick={this.handleOnClick} type="operator"/>

        <Buttons tag="divide" 
                 issuedValue="÷" 
                 globalOnClick={this.handleOnClick} type="operator"/>

        <Buttons tag="equals" 
                 issuedValue="=" 
                 globalOnClick={this.handleOnClick} type="operator"/>

        <Buttons tag="decimal" 
                 issuedValue="." 
                 globalOnClick={this.handleOnClick} type="number" />

        <Buttons tag="clear" 
                 issuedValue="AC" 
                 globalOnClick={this.clearOnClick} type="all-clear"/>
      </div>
    )
  }
}

ReactDOM.render( 
  <Application / >,
  document.getElementById('root')
);