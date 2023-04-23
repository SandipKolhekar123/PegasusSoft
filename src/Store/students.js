import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const studentSlice = createSlice({
    name: "studentR",
    initialState: {
       studData: [],
    },
    reducers: {
      getStudent: (state) => {
        state.studData = [{ id: 1, lastName: 'Snow', firstName: 'Jon', email: 'snowjohn123@gmail.com', phone: '9500443328', course: 'FullStack', fees:'Unpaid' },
            { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'lannisterserceei123@gmail.com', phone: '9500443328', course: 'Salesforce', fees:'Paid' },
            { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'snowjohn123@gmail.com', phone: '9500443328', course: 'C Language', fees:'Unpaid' },
            { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'aryasatark@gmail.com', phone: '9500443328', course: 'Java', fees:'Paid' },
            { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: null, phone: '9500443328', course: 'FullStack', fees:'Paid' },
            { id: 6, lastName: 'Melisandre', firstName: null, email: 'mailsandre345@gmail.com', phone: '9500443328', course: 'Salesforce', fees:'Unpaid'},
            { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'climfiold123@gmail.com', phone: '9500443328',  course: 'C Language', fees:'Paid' },
            { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'rossoni123@gmail.com', phone: '9500443328', course: 'Java', fees:'Unpaid' },
            { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'harveyR@gmail.com', phone: '9500443328', course: 'FullStack', fees:'Paid' },
            { id: 10, lastName: 'Clifford', firstName: 'Ferrara', email: 'climfiold123@gmail.com', phone: '9500443328',  course: 'C Language', fees:'Unpaid' },
            { id: 11, lastName: 'Frances', firstName: 'Rossini', email: 'rossoni123@gmail.com', phone: '9500443328', course: 'Java', fees:'Paid' },
            { id: 12, lastName: 'Roxie', firstName: 'Harvey', email: 'harveyR@gmail.com', phone: '9500443328', course: 'FullStack', fees:'Paid' }
        ]
      },
      addStudent: (state, payload) => {
        // state.studData;
      },
      deleteStudent: (state, action) => {
        // state.studData;
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { getStudent, addStudent, deleteStudent } = studentSlice.actions
  
  export default studentSlice.reducer