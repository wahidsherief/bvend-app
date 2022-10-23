// change local to production if the app is in production
const ENV = 'local'

const LOCAL_SERVER_URL = 'http://127.0.0.1:8000'
const PRODUCTION_SERVER_URL = 'https://bvend.xyz'

const API_URL = ENV === 'local' ? `${LOCAL_SERVER_URL}/api/` : `${PRODUCTION_SERVER_URL}/api/`

const IMAGE_PATH = ENV === 'local'
    ? `${LOCAL_SERVER_URL}/storage/uploads/images`
    : `${PRODUCTION_SERVER_URL}/storage/uploads/images`

export { API_URL, LOCAL_SERVER_URL, PRODUCTION_SERVER_URL, IMAGE_PATH }


