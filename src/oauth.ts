document.getElementById("login")?.addEventListener("click", () => {
  chrome.identity.getAuthToken({ interactive: true }, async (token) => {
    chrome.identity.getProfileUserInfo(async (userInfo) => {
      try {
        const payload = {
          email: userInfo.email,
        };
        const requestHeaders: HeadersInit | { "x-auth-key": string } =
          new Headers();
        requestHeaders.set("Content-Type", "application/json");
        requestHeaders.set("x-auth-key", token || "");
        const response = await fetch(
          "https://browser-search-api.onrender.com/api/v1/users/login",
          {
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify(payload),
          }
        );
        chrome.action.setPopup({ popup: "popup_signed_in.html" });
      } catch (error) {
        console.log(error);
      }
    });
  });
});

document.getElementById("logout")?.addEventListener("click", () => {
  chrome.identity.getAuthToken({ interactive: true }, async (token) => {
    const current_token = token || "";
    chrome.identity.removeCachedAuthToken(
      { token: current_token },
      async () => {
        try {
          const requestHeaders: HeadersInit | { "x-auth-key": string } =
            new Headers();
          requestHeaders.set("Content-Type", "application/json");
          requestHeaders.set("x-auth-key", current_token);
          const response = await fetch(
            "https://browser-search-api.onrender.com/api/v1/users/logout",
            {
              method: "POST",
              headers: requestHeaders,
            }
          );
          chrome.action.setPopup({ popup: "popup.html" });
        } catch (error) {
          console.log(error);
        }
      }
    );
  });
});
