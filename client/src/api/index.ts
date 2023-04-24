import { api } from "../lib/axios"

// get requests
export async function fetchFeed() {
  const { data } = await api.get("/api/feed")
  return data
}

export async function fetchTrip(tripId) {
  const { data } = await api.get(`/api/trip/${tripId}`)
  return data
}

export async function fetchGear(gearId) {
  const { data } = await api.get(`/api/gear/${gearId}`)
  return data
}

// const fetchTemplates () {
//   const { data } = await api.get(`/api/template/AllTemplates`)
//   return data
// }

// gear actions
export async function putGear(id, gear) {
  const { data } = await api.put(`/api/gear/updateGear/${id}`, {
    gear,
  })
  return data
}

export async function deleteGear(id) {
  const { data } = await api.delete(`/api/template/deleteGearTemplate/${id}`)
  return data
}

// post actions
export async function postLike(id) {
  const { data } = await api.put(`/api/post/likePost/${id}`)
  return data
}

// have to send img path with api
// export async function createPost (formData) {
//   const { data } = await api.post(`/api/post/createPost`, formData)
//   return data
// }

export async function postDelete(id) {
  const { data } = await api.delete(`/api/post/deletePost/${id}`)
  return data
}

// trip actions
export async function createTrip(formData) {
  const { data } = await api.post(`/api/trip/postTrip`, formData)
  return data
}

export async function completedTrip(id, completed) {
  const { data } = await api.put(`/api/trip/tripUpdate/${id}`, {
    completed: !completed,
  })
  return data
}

export async function deleteTrip(id) {
  const { data } = await api.delete(`/api/trip/deleteTrip/${id}`)
  return data
}
