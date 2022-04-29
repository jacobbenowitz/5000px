export const createUser = user => {
  // debugger
  // testing: removed brackets from {user} bc could be causing too much nesting when hits reducer (ie. currentUser.user.id instead of currentUser.id) and that is not consistent with login(user) format
  // did not work, sent null object to reducer
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: { user }
  })
};

export const login = user => {
  // debugger
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: { user }
  })
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
}

export const fetchUser = userId => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}`
  })
}