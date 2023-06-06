import { createSlice} from '@reduxjs/toolkit';

const initialAuthState = {
    isAuthenticated: false
};

// note: NEVER MUTATE STATE, NEVER CHANGE IT
// always override by returning new
// objects are reference values
// potentially more complex apps can get out of sync
// deepcopy objects where necessary

const authSlice = createSlice({
    name: "authentication",
    initialState:initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});
export const authActions = authSlice.actions;

export default authSlice.reducer;