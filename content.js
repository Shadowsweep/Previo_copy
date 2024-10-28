document.addEventListener("copy", () => {
    const copiedText = document.getSelection().toString();
    if (copiedText) {
        chrome.storage.local.set({ lastCopiedText: copiedText });
    }
});
