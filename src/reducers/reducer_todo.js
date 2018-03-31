export default function(state = [], action) {
    switch(action.type) {
        case "NEW_TODO": {
            return [ action.payload.data, ...state ]
        }
        default: {
            return state
        }
    }
}