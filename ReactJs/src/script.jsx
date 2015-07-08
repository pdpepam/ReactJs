
var Calculator = React.createClass({
    /*custome methods*/
    constant:{
       'plus':'+',
       'minus':'+',
       'devide':'+',
       'multiply':'+'
    },

    getNumbButVal: function(e){
        var numbValue = e.target.value;
        /**
            check state of numbButVal at 0
        */
        if(this.state.numbButVal){
            this.state.numbButVal = this.state.numbButVal+ numbValue;
            this.setState({screen: this.state.numbButVal + numbValue});
        }else{
            this.state.numbButVal = numbValue;
            this.setState({screen: numbValue})
        }
    },

    getOpperandButVal: function(e){
        var operandValue = e.target.value;
        this.state.operand = operandValue;
        this.setState({operand: operandValue});
        console.log(this.state.operand)
    },

    getResult: function(e){

        this.getOpperandButVal(e);

        var result     = this.state.result,
            numbButVal = this.state.numbButVal,
            operrand   = this.state.operand;

        switch (operrand){
            case '+':
                var newResult = result + numbButVal;
                this.setState({
                    result:+newResult,
                    screen:newResult
                });
                break;

            case '-':
                var newResult = result - +numbButVal;
                this.setState({
                    result:newResult,
                    screen:newResult
                });
                break;

            case '/':
                var newResult = result / numbButVal;
                this.setState({
                    result:newResult,
                    screen:newResult
                });
                break;

            case '*':
                var newResult = result * numbButVal;
                this.setState({
                    result:newResult,
                    screen:newResult
                });
                break;

        }
    },

    setStartValues: function(){
        this.setState(
            { screen:0,
              result:0,
              numbButVal:0,
              operand:'null'}
        );
    },

    setReset: function(){
        this.setStartValues();
    },

    /*React methods*/
    getInitialState: function() {
        return {
            screen:0,
            result:0,
            numbButVal:0,
            operand:'null'
        }
    },

    render: function() {
             var numberBottons = <div className="sign-button-wrapper">
                            <button id="sign_7" className="number-button" value='7' name="7" onClick={this.getNumbButVal}>7</button>
                            <button id="sign_8" className="number-button" value='8' name="8" onClick={this.getNumbButVal}>8</button>
                            <button id="sign_9" className="number-button" value='9' name="9" onClick={this.getNumbButVal}>9</button>
                            <button id="sign_4" className="number-button" value='4' name="4" onClick={this.getNumbButVal}>4</button>
                            <button id="sign_5" className="number-button" value='5' name="5" onClick={this.getNumbButVal}>5</button>
                            <button id="sign_6" className="number-button" value='6' name="6" onClick={this.getNumbButVal}>6</button>
                            <button id="sign_1" className="number-button" value='1' name="1" onClick={this.getNumbButVal}>1</button>
                            <button id="sign_2" className="number-button" value='2' name="2" onClick={this.getNumbButVal}>2</button>
                            <button id="sign_3" className="number-button" value='3' name="3" onClick={this.getNumbButVal}>3</button>
                            <button id="sign_0" className="number-button" value='0' name="0" onClick={this.getNumbButVal}>0</button>
                            <button id="sign_comma" className="number-button" commaButValue=','>,</button>
                        </div>,

                  resetButton = <button id="sign_rusult" className="calculate-button"   value='=' onClick={this.setReset}>reset</button>,

                  opperandButtons = <div className="calculate-button-wrapper">
                                        {resetButton}
                                        <button id="sign_plus" className="calculate-button"  value='+' onClick={this.getResult}>+</button>
                                        <button id="sign_minus" className="calculate-button"  value='-' onClick={this.getResult} >-</button>
                                        <button id="sign_division" className="calculate-button"  value='/' onClick={this.getResult}>/</button>
                                        <button id="sign_plus_multiplicat" className="calculate-button"  value='*' onClick={this.getResult}>*</button>
                                        <button id="sign_rusult" className="calculate-button"   value='=' onClick={this.getResult}>=</button>
                                    </div>;




        return (
            <div className = "calc-wrapper">
                <div className="calc-screen-wrapper">
                    <input type="text" className="calc-screen" value={this.state.screen}/>
                </div>

                <div className="buttons-wrapper">
                    {numberBottons}
                    {opperandButtons}
                </div>
            </div>
        )
    }

});

React.render(<Calculator/>, document.body);
