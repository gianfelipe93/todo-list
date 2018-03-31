import axios from 'axios'

function getTodos(){
    const url = ""
    const request = axios.get(url)

    return {
        type: "NEW_TODO",
        payload: request
    }
}

export default {getTodos}