import { ADD_RECORD, CREATE_NEW_RECORD, REMOVE_RECORD, REMOVE_RECORDS, UPDATE_RECORD, UPDATE_RECORD_SELECTED } from './actionTypes';
export const createRecord = (record) => {
  return {
    type: CREATE_NEW_RECORD,
    payload: record
  };
};

export const addRecord = (record) => {
  return {
    type: ADD_RECORD,
    payload: record
  };
};

export const removeRecord = (id) => {
  return {
    type: REMOVE_RECORD,
    payload: id
  };
};

export const updateRecord = (id) => {
  return {
    type: UPDATE_RECORD,
    payload: id
  };
};
export const updateRecordSelected = (obj) => {
  return {
    type: UPDATE_RECORD_SELECTED,
    payload: obj
  };
};

export const removeRecords = () => {
  return {
    type: REMOVE_RECORDS
  };
};
