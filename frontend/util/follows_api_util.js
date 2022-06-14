
export const fetchFollows = () => {
  return $.ajax({
    method: "GET",
    url: "api/follows"
  })
}

export const newFollow = follow => {
  return $.ajax({
    method: "POST",
    url: "api/follows",
    data: { follow }
  })
}

export const deleteFollow = followId => {
  return $.ajax({
    method: "DELETE",
    url: `api/follows/${followId}`
  })
}