import { getAuthRole } from "services/AuthService"

// change local to production if the app is in production
const ENV = 'local'

const role = getAuthRole();

const LOCAL_SERVER_URL = `http://127.0.0.1:8000/api`
const PRODUCTION_SERVER_URL = 'https://bvend.xyz/api'


let API_URL = ENV === 'local' ? LOCAL_SERVER_URL : PRODUCTION_SERVER_URL;

if (role) {
    API_URL += `/${role}`;
}

console.log(API_URL)

const IMAGE_PATH = ENV === 'local'
    ? `${LOCAL_SERVER_URL}/storage/uploads/images`
    : `${PRODUCTION_SERVER_URL}/storage/uploads/images`

export { API_URL, LOCAL_SERVER_URL, PRODUCTION_SERVER_URL, IMAGE_PATH }


