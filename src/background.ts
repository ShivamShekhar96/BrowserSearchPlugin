import axios from "axios";

type BrowserSearchAPI = {
    url: string;
    user_id?: number
}

const sendToDB = async (payload: BrowserSearchAPI) => {
    payload['user_id'] = 4
    try {
        const response = await axios.post("https://browser-search-api.onrender.com/api/v1/searches", payload)
    } catch (error) {
        console.log(error)
    }
}

chrome.webNavigation.onCompleted.addListener(async (details) => {
    await sendToDB({
        url: details.url
    })
});
