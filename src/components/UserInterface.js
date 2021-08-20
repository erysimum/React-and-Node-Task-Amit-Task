import React from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createRecord, updateRecord, addRecord, updateRecordSelected, removeRecords, removeRecord } from '../actions/actionRecords';

const actions = { createRecord, updateRecord, addRecord, updateRecordSelected, removeRecords, removeRecord };
class UserInterface extends React.Component {
  state = {
    emptyError: '',
    numberError: '',
    charLimitError: ''
  };

  validateEmptyError = () => {
    let emptyError = '';

    emptyError = 'Record should not be empty';
    this.setState({ numberError: '' });
    this.setState({ charLimitError: '' });
    this.setState({ emptyError });
  };

  validateNumberError = () => {
    let numberError = '';

    numberError = 'Record should not be contain a number';
    this.setState({ emptyError: '' });
    this.setState({ charLimitError: '' });
    this.setState({ numberError });
  };
  validateCharLimitError = () => {
    let charLimitError = '';

    charLimitError = 'Record Length should not exceed 10 characters';
    this.setState({ emptyError: '' });
    this.setState({ numberError: '' });
    this.setState({ charLimitError });
  };

  handleChange = (e) => {
    this.props.addRecord(e.target.value);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    var hasNumber = /\d/;
    if (this.props.selected || this.props.selected === 0) {
      if (hasNumber.test(this.props.text)) {
        this.validateNumberError();
        this.props.removeRecord(this.props.selected);
      } else if (this.props.text.length > 10) {
        this.validateCharLimitError();
        this.props.removeRecord(this.props.selected);
      }

      this.props.updateRecordSelected({
        value: this.props.text,
        selected: this.props.selected
      });
    } else if (e.target.value === '' || this.props.text === '') {
      this.validateEmptyError();
    } else if (hasNumber.test(e.target.value) || hasNumber.test(this.props.text)) {
      this.validateNumberError();
    } else if (this.props.text.length > 10) {
      this.validateCharLimitError();
    } else {
      this.setState({ emptyError: '' });
      this.setState({ numberError: '' });
      this.setState({ charLimitError: '' });
      this.props.createRecord(this.props.text);
    }
  };

  render() {
    return (
      <div className='ui middle aligned divided list'>
        <h1>Record User Input </h1>
        <Grid>
          <Grid.Column width={11}>
            <Segment>
              <Form onSubmit={this.handleFormSubmit}>
                <Form.Field>
                  <label>User Input</label>

                  <input name='name' placeholder='Enter Record Name' onChange={this.handleChange} value={this.props.text} />
                </Form.Field>
                <Button positive type='submit'>
                  ADD A RECORD
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
          <br />
        </Grid>
        {this.state.emptyError ? (
          <Grid>
            <Grid.Column width={11}>
              <Segment>
                {' '}
                <div style={{ color: 'red' }}> {this.state.emptyError} </div>{' '}
              </Segment>
            </Grid.Column>
          </Grid>
        ) : this.state.numberError ? (
          <Grid>
            <Grid.Column width={11}>
              <Segment>
                {' '}
                <div style={{ color: 'red' }}> {this.state.numberError} </div>{' '}
              </Segment>
            </Grid.Column>
          </Grid>
        ) : this.state.charLimitError ? (
          <Grid>
            <Grid.Column width={11}>
              <Segment>
                {' '}
                <div style={{ color: 'red' }}> {this.state.charLimitError} </div>{' '}
              </Segment>
            </Grid.Column>
          </Grid>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.recordReducer.text,
    selected: state.recordReducer.selected
  };
};

export default connect(mapStateToProps, actions)(UserInterface);
