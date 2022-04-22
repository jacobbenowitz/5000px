const createUser = user => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: { user }
  })
)

const login = user => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: { user }
  })
)

const logout = () => (
  $.ajax({
    method: 'DEELTE',
    url: 'api/session'
  })
)

