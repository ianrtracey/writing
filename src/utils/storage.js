const isBrowser = () => typeof window !== "undefined"

const get = key => isBrowser() && window.localStorage.getItem(key)

const put = (key, value) => {
  if (!isBrowser()) {
    return
  }
  window.localStorage.setItem(key, value)
}

const SUBSCRIPTION_KEY = "ianrtracey.com:subscribed:email"
export const setSubscribed = () => {
  put(SUBSCRIPTION_KEY, "true")
}
export const getSubscribed = () => get(SUBSCRIPTION_KEY) === "true"
