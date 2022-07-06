import { stringify } from 'qs'

/*
 * convert object to json
 */
export const json = (data: any, headers: any) => {
  headers['Content-Type'] = 'application/json'

  return JSON.stringify(data)
}

/*
 * convert object to urlencoded
 */
export const url = (data: any, headers: any) => {
  headers['Content-Type'] = 'application/x-www-form-urlencoded'

  return stringify(data)
}

/*
 * convert object to formdata
 */
export const form = (data: any, headers: any) => {
  headers['Content-Type'] = 'multipart/form-data'

  const formData = new FormData()
  for (const key in data) {
    formData.append(key, data[key])
  }

  return formData
}
