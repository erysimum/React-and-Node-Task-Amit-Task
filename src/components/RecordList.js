import React from 'react';
import { connect } from 'react-redux';
import RenderRecords from './RenderRecords';

const RecordList = ({ records }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '300px',
        overflowY: 'auto',
        overflowX: 'hidden'
      }}
    >
      {records.map((record, i) => (
        <RenderRecords key={i} record={record} id={i} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { records: state.recordReducer.todos };
};

export default connect(mapStateToProps)(RecordList);
