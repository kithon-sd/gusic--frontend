import {
    addUserToData,
    addCurrentUser
} from './helper'

const userDataManager = (name, sessionKey) => {
    addUserToData(name, sessionKey)
    addCurrentUser(name)
}

export default userDataManager