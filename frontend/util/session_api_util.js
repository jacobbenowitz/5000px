export const createUser = user => {
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