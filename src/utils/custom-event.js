export const snackbarEvents = (eventName, detail = {}) => new CustomEvent(eventName, {
  cancelable: true,
  detail,
})
