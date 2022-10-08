const LOCAL_API_URL = 'http://127.0.0.1:8000/api/'
const PRODUCTION_API_URL = 'https://bvend.xyz/api'

// change local to production if the app is in production
const ENV = 'local'

let API_URL = null

if (ENV === 'local') {
    API_URL = LOCAL_API_URL
} else {
    API_URL = PRODUCTION_API_URL
}

export { API_URL }


