document.getElementById("copy-btn").addEventListener("click", () => {
    chrome.storage.local.get("lastCopiedText", (data) => {
        const text = data.lastCopiedText || "No text saved!";
        navigator.clipboard.writeText(text).then(() => {
            alert("Copied: " + text);
        }).catch((err) => {
            console.error("Could not copy text: ", err);
        });
    });
});
