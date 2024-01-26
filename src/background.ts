type BrowserSearchAPI = {
    url: string;
    user_id?: number
}

const sendToDB = async (payload: BrowserSearchAPI) => {
    payload['user_id'] = 4
    try {
        const response = await fetch("https://browser-search-api.onrender.com/api/v1/searches", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        })
    } catch (error) {
        console.log(error)
    }
}

chrome.webNavigation.onCompleted.addListener(async (details) => {
    await sendToDB({
        url: details.url
    })
});
