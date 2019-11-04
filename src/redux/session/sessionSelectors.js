export const getIsAuthenticated = state => state.session.authenticated;

export const getToken = state => state.session.token;

export const getUser = state => state.session.user;

export const getUserName = state => state.session.user.name.fullName;
