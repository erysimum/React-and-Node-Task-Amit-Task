import React from 'react';
import { Button } from 'semantic-ui-react';
import RecordList from './components/RecordList';
import UserInterface from './components/UserInterface';
import { connect } from 'react-redux';
import { removeRecords } from './actions/actionRecords';

const App = ({ removeRecords }) => {
  return (
    <div className='ui  container'>
      <UserInterface />
      <RecordList />
      <Button style={{ margin: '0px  15px' }} negative type='submit' onClick={removeRecords}>
        Clear All Records
      </Button>
    </div>
  );
};

export default connect(null, { removeRecords })(App);
