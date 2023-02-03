// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   //   baseUrl: 'https://63d8236b74f386d4efd40b2f.mockapi.io/',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://63d8236b74f386d4efd40b2f.mockapi.io/',
//   }),

//   endpoints: builder => ({
//     fetchContacts: builder.query({
//       query: () => `/contacts`,
//     }),
//   }),
// });

// export const { useFetchContacts } = contactsApi;
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations.js';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
