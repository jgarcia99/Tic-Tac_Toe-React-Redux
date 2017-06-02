import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Alert } from 'reactstrap';

class Result extends Component {
  render () {
    let result = '';
    if (this.props.turn) {
      result = `It's ${this.props.turn.toUpperCase()}'s turn bro.`;
    }
    if (this.props.won) {
      result = `Sick! ${this.props.won.toUpperCase()} won!`
    } else if (this.props.draw) {
      result = 'We have a draw! HAHA Try Again!';
    }
    return (
      <div>
        <h1 style={styles.centerIt}>
          {result}
        </h1>
        <span style={styles.centerIt}>
            <h2>Score</h2>
            <h3><span  style={styles.Osymbol}>O: 0</span><span style={styles.Xsymbol}>X: 0</span></h3>

        </span>
      </div>
    );
  }
}

var styles = {
    centerIt: {
        textAlign: "center"
    },
    Osymbol: {
        textAlign: "center",
        marginRight: '20px',
        color: "blue"
    },
    Xsymbol: {
        textAlign: "center",
        color: "red"
    }

}

Result.propTypes = {
  won: React.PropTypes.string,
  turn: React.PropTypes.string.isRequired,
  draw: React.PropTypes.bool.isRequired
};

export default connect(
  ({won, turn, draw}) => ({
    won, turn, draw
  })
)(Result);

export {Result as PureResult};
