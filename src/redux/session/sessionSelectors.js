export const getIsAuthenticated = state => state.session.authenticated;

export const getToken = state => state.session.token;

export const getUser = state => state.session.user;

export const haveTraining = state => {
  if (state.session.user) {
    return state.session.user.haveTraining;
  }
  return false;
};

export const isAutorise = state => state.session.authenticated;
export const getUserName = state => state.session.user.name.fullName;

export const getPhoto = state => state.session.user.photo;
