//All of your API calls are going to be in here.
import axios from 'axios'

console.log(process.env)
//Where your server/backend lives
const serverUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_SERVER_URL : `http://localhost:5000`

const createHeaders = () => {
    return {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
}

const actions = {

    getUser: async () => {
        return await axios.get(`${serverUrl}/get-user`, createHeaders())
    },
    getMessages: async () => {
        let messages = await axios.get(`${serverUrl}/get-messages`)
        return messages.data
    },
    getMyMessages: async () => {
        let messages = await axios.get(`${serverUrl}/get-my-messages`, createHeaders())
        console.log(messages)
        return messages.data
    },
    addMessage: async ({ message }) => {
        return await axios.post(`${serverUrl}/add-message`, { message }, createHeaders())
    },





    // ---- Products ---- //

    // PCs
    getMainPC: async () => {
        let PC = await axios.get(`${serverUrl}/get-main-PC`)
        return PC.data
    },
    getOtherPCs: async () => {
        let PCs = await axios.get(`${serverUrl}/get-other-PCs`)
        return PCs.data
    },

    // Mouse
    getMainMouse: async () => {
        let mouse = await axios.get(`${serverUrl}/get-main-mouse`)
        return mouse.data
    },
    getOtherMouse: async () => {
        let mouse = await axios.get(`${serverUrl}/get-other-mouse`)
        return mouse.data
    },

    // Chairs
    getMainChair: async () => {
        let chair = await axios.get(`${serverUrl}/get-main-chair`)
        return chair.data
    },
    getOtherChairs: async () => {
        let chairs = await axios.get(`${serverUrl}/get-other-chairs`)
        return chairs.data
    },

    // Monitors
    getMainMonitor: async () => {
        let monitor = await axios.get(`${serverUrl}/get-main-monitor`)
        return monitor.data
    },
    getOtherMonitors: async () => {
        let monitors = await axios.get(`${serverUrl}/get-other-monitors`)
        console.log(monitors)
        return monitors.data
    },

    // Keyboards
    getMainKeyboard: async () => {
        let keyboard = await axios.get(`${serverUrl}/get-main-keyboard`)
        return keyboard.data
    },
    getOtherKeyboards: async () => {
        let keyboards = await axios.get(`${serverUrl}/get-other-keyboards`)
        return keyboards.data
    },




    // logIn: async ({ profileObj }) => {
    //     let res = await axios.post(`${serverUrl}/logMeIn`, profileObj)
    //     localStorage.setItem('token', res.data.token)
    //     return res.data.user
    // },

    signUp: async ({ email, password }) => {
        let res = await axios.post(`${serverUrl}/logMeIn`, { email, password })
        localStorage.setItem('token', res.data.token)
        return (res.data)
    }


}

export default actions