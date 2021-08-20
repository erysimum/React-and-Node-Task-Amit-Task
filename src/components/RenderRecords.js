import React, { Fragment } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { removeRecord, updateRecord } from '../actions/actionRecords';

const RenderRecords = ({ record, id, removeRecord, updateRecord, text, selected }) => {
  return (
    <Fragment>
      <Grid>
        <Grid.Column width={11}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              border: '1px solid white',
              padding: '1px',
              cursor: 'pointer'
            }}
          >
            <h1 onClick={() => updateRecord(id)}>{selected === id ? text : record}</h1>

            <div>
              <Button negative type='submit' onClick={(e) => removeRecord(id)}>
                Remove
              </Button>
            </div>
          </div>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    text: state.recordReducer.text,
    selected: state.recordReducer.selected
  };
};
export default connect(mapStateToProps, { removeRecord, updateRecord })(RenderRecords);
