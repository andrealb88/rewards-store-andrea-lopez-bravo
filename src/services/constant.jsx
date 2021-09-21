export const BASE_URL = "https://coding-challenge-api.aerolab.co/"

const KEY = process.env.REACT_APP_KEY

export const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${KEY}`
}
//     Authorization: 'Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkODgzMGMxZDFhNzAwMjE5ZjNjNDAiLCJpYXQiOjE2MjkzMjUzNjB9.HeH4l-c3cqHsv9KSBssO8DOMPIB1RTLaZw_1yHFQbmw)'
// }

