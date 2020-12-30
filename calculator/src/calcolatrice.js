import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

class Calcolatrice extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        totale: 0,
        visuale: '',
        operator: '',
        flagOperator: false,
        valoreAppoggio: '0',
        count: []
      }
  }

    render() {
        const buttonStyle = {
            width: '100px',
            borderColor: 'black'
        };

        const inputText = {
                width: '400px',
                position: 'relative',
                left: '354px',
                textAlign: 'right'
            
        };

        return (
            <React.Fragment>

                <Container>
                <Row>
                        <Col>
                            <Form.Group>
                                <Form.Control size="lg" type="text" style={inputText} value={this.state.visuale}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="info" style={buttonStyle} onClick={() => this.calcolo('(')}><h2>(</h2></Button>
                            <Button variant="info" style={buttonStyle} onClick={() => this.calcolo(')')}><h2>)</h2></Button>
                            <Button variant="info" style={buttonStyle} onClick={() => this.calcolo('%')}><h2>%</h2></Button>
                            <Button variant="info" style={buttonStyle} onClick={() => this.clearCalcolatrice()}><h2>AC</h2></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="light" style={buttonStyle} onClick={() => this.calcolo('7')}><h2>7</h2></Button>
                            <Button variant="light" style={buttonStyle} onClick={() => this.calcolo('8')}><h2>8</h2></Button>
                            <Button variant="light" style={buttonStyle} onClick={() => this.calcolo('9')}><h2>9</h2></Button>
                            <Button variant="info"  style={buttonStyle} onClick={() => this.calcolo('/')}><h2>÷</h2></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="light" style={buttonStyle} onClick={() => this.calcolo('4')}><h2>4</h2></Button>
                            <Button variant="light" style={buttonStyle} onClick={() => this.calcolo('5')}><h2>5</h2></Button>
                            <Button variant="light" style={buttonStyle} onClick={() => this.calcolo('6')}><h2>6</h2></Button>
                            <Button variant="info"  style={buttonStyle} onClick={() => this.calcolo('*')}><h2>X</h2></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="light" style={buttonStyle} onClick={() => this.state.count.push('1')}><h2>1</h2></Button>
                            <Button variant="light" style={buttonStyle} onClick={() => this.state.count.push('2')}><h2>2</h2></Button>
                            <Button variant="light" style={buttonStyle} onClick={() => this.state.count.push('3')}><h2>3</h2></Button>
                            <Button variant="info"  style={buttonStyle} onClick={() => this.calcolo('-')}><h2>-</h2></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="light"   style={buttonStyle}   onClick={() => this.calcolo('0')}><h2>0</h2></Button>
                            <Button variant="light"   style={buttonStyle}   onClick={() => this.calcolo('.')}><h2>.</h2></Button>
                            <Button variant="primary" style={buttonStyle}   onClick={() => this.risultato()}><h2>=</h2></Button>
                            <Button variant="info"    style={buttonStyle}   onClick={() => this.state.count.push('+')}><h2>+</h2></Button>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }


    calcolo = (valori) => {

    }

    clearCalcolatrice = () => {
        this.setState({visuale: '', totale: 0});
    }

    risultato = () => {
        this.setState({visuale: this.state.totale })
        console.log(this.state.count);
        for(let i=0; i < this.state.count.length; i++){
            console.log(this.state.count[i]);
        }
    }

    

}

export default Calcolatrice;