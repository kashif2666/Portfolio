import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("GET_USER_REQUEST", (state) => {
      state.loading = true; // Set loading to true when the request is made
    })
    .addCase("GET_USER_SUCCESS", (state, action) => {
      state.loading = false; // Set loading to false when the request is successful
      state.user = action.payload; // Update the user state with the payload from the action
    })
    .addCase("GET_USER_FAILURE", (state, action) => {
      state.loading = false; // Set loading to false when the request fails
      state.error = action.payload; // Update the error state with the payload from the action
    })
    .addCase("CLEAR_ERRORS", (state) => {
      state.error = null; // Set loading to true when the request is made
    });
});

export const loginReducer = createReducer({}, (builder) => {
  builder
    .addCase("LOGIN_REQUEST", (state) => {
      state.loading = true; // Set loading to true when the request is made
      state.isAuthenticated = false;
    })
    .addCase("LOGIN_SUCCESS", (state, action) => {
      state.loading = false; // Set loading to false when the request is successful
      state.isAuthenticated = true;
      state.message = action.payload; // Update the user state with the payload from the action
    })
    .addCase("LOGIN_FAILURE", (state, action) => {
      state.loading = false; // Set loading to false when the request fails
      state.isAuthenticated = false;
      state.error = action.payload; // Update the error state with the payload from the action
    })
    .addCase("LOAD_USER_REQUEST", (state) => {
      state.loading = true; // Set loading to true when the request is made
      state.isAuthenticated = false;
    })
    .addCase("LOAD_USER_SUCCESS", (state, action) => {
      state.loading = false; // Set loading to false when the request is successful
      state.isAuthenticated = true;
      state.user = action.payload; // Update the user state with the payload from the action
    })
    .addCase("LOAD_USER_FAILURE", (state, action) => {
      state.loading = false; // Set loading to false when the request fails
      state.isAuthenticated = false;
      state.error = action.payload; // Update the error state with the payload from the action
    })
    .addCase("LOGOUT_REQUEST", (state) => {
      state.loading = true; // Set loading to true when the request is made
    })
    .addCase("LOGOUT_SUCCESS", (state, action) => {
      state.loading = false; // Set loading to false when the request is successful
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload; // Update the user state with the payload from the action
    })
    .addCase("LOGOUT_FAILURE", (state, action) => {
      state.loading = false; // Set loading to false when the request fails
      state.isAuthenticated = true;
      state.error = action.payload; // Update the error state with the payload from the action
    })
    .addCase("CLEAR_ERRORS", (state) => {
      state.error = null; // Set loading to true when the request is made
    })
    .addCase("CLEAR_MESSAGE", (state) => {
      state.message = null; // Set loading to true when the request is made
    });
});

export const updateReducer = createReducer({}, (builder) => {
  builder
    .addCase("UPDATE_USER_REQUEST", (state) => {
      state.loading = true; // Set loading to true when the request is made
    })
    .addCase("UPDATE_USER_SUCCESS", (state, action) => {
      state.loading = false; // Set loading to false when the request is successful
      state.message = action.payload; // Update the user state with the payload from the action
    })
    .addCase("UPDATE_USER_FAILURE", (state, action) => {
      state.loading = false; // Set loading to false when the request fails
      state.error = action.payload; // Update the error state with the payload from the action
    })
    .addCase("ADD_TIMELINE_REQUEST", (state) => {
      state.loading = true; // Set loading to true when the request is made
    })
    .addCase("ADD_TIMELINE_SUCCESS", (state, action) => {
      state.loading = false; // Set loading to false when the request is successful
      state.message = action.payload; // Update the user state with the payload from the action
    })
    .addCase("ADD_TIMELINE_FAILURE", (state, action) => {
      state.loading = false; // Set loading to false when the request fails
      state.error = action.payload; // Update the error state with the payload from the action
    })
    .addCase("DELETE_TIMELINE_REQUEST", (state) => {
      state.loading = true; // Set loading to true when the request is made
    })
    .addCase("DELETE_TIMELINE_SUCCESS", (state, action) => {
      state.loading = false; // Set loading to false when the request is successful
      state.message = action.payload; // Update the user state with the payload from the action
    })
    .addCase("DELETE_TIMELINE_FAILURE", (state, action) => {
      state.loading = false; // Set loading to false when the request fails
      state.error = action.payload; // Update the error state with the payload from the action
    })
    .addCase("ADD_YOUTUBE_REQUEST", (state) => {
      state.loading = true; // Set loading to true when the request is made
    })
    .addCase("ADD_YOUTUBE_SUCCESS", (state, action) => {
      state.loading = false; // Set loading to false when the request is successful
      state.message = action.payload; // Update the user state with the payload from the action
    })
    .addCase("ADD_YOUTUBE_FAILURE", (state, action) => {
      state.loading = false; // Set loading to false when the request fails
      state.error = action.payload; // Update the error state with the payload from the action
    })
    .addCase("DELETE_YOUTUBE_REQUEST", (state) => {
      state.loading = true; // Set loading to true when the request is made
    })
    .addCase("DELETE_YOUTUBE_SUCCESS", (state, action) => {
      state.loading = false; // Set loading to false when the request is successful
      state.message = action.payload; // Update the user state with the payload from the action
    })
    .addCase("DELETE_YOUTUBE_FAILURE", (state, action) => {
      state.loading = false; // Set loading to false when the request fails
      state.error = action.payload; // Update the error state with the payload from the action
    })
    .addCase("ADD_PROJECT_REQUEST", (state) => {
      state.loading = true; // Set loading to true when the request is made
    })
    .addCase("ADD_PROJECT_SUCCESS", (state, action) => {
      state.loading = false; // Set loading to false when the request is successful
      state.message = action.payload; // Update the user state with the payload from the action
    })
    .addCase("ADD_PROJECT_FAILURE", (state, action) => {
      state.loading = false; // Set loading to false when the request fails
      state.error = action.payload; // Update the error state with the payload from the action
    })
    .addCase("DELETE_PROJECT_REQUEST", (state) => {
      state.loading = true; // Set loading to true when the request is made
    })
    .addCase("DELETE_PROJECT_SUCCESS", (state, action) => {
      state.loading = false; // Set loading to false when the request is successful
      state.message = action.payload; // Update the user state with the payload from the action
    })
    .addCase("DELETE_PROJECT_FAILURE", (state, action) => {
      state.loading = false; // Set loading to false when the request fails
      state.error = action.payload; // Update the error state with the payload from the action
    })
    .addCase("CONTACT_US_REQUEST", (state) => {
      state.loading = true; // Set loading to true when the request is made
    })
    .addCase("CONTACT_US_SUCCESS", (state, action) => {
      state.loading = false; // Set loading to false when the request is successful
      state.message = action.payload; // Update the user state with the payload from the action
    })
    .addCase("CONTACT_US_FAILURE", (state, action) => {
      state.loading = false; // Set loading to false when the request fails
      state.error = action.payload; // Update the error state with the payload from the action
    })
    .addCase("CLEAR_ERRORS", (state) => {
      state.error = null; // Set loading to true when the request is made
    })
    .addCase("CLEAR_MESSAGE", (state) => {
      state.message = null; // Set loading to true when the request is made
    });
});
