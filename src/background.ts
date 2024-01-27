type BrowserSearchAPI = {
  url: string;
};

const saveSearch = (payload: BrowserSearchAPI) => {
  chrome.identity.getAuthToken({ interactive: true }, async (token) => {
    try {
      const requestHeaders: HeadersInit | { "x-auth-key": string } =
        new Headers();
      requestHeaders.set("Content-Type", "application/json");
      requestHeaders.set("x-auth-key", token || "");

      const response = await fetch(
        "https://browser-search-api.onrender.com/api/v1/searches",
        {
          method: "POST",
          headers: requestHeaders,
          body: JSON.stringify(payload),
        }
      );
    } catch (error) {
      console.log(error);
    }
  });
};

chrome.webNavigation.onCompleted.addListener((details) => {
  saveSearch({
    url: details.url,
  });
});
