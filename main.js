// HTML element creation
const mainDiv = document.createElement("div");
const loaderContainer = document.createElement("div");
const loader1 = document.createElement("div");
const loader2 = document.createElement("div");
const loadingMsg = document.createElement("h2");

// append elements to page
document.body.append(mainDiv);
mainDiv.append(loaderContainer);
// loaderContainer.append(loader1);
loaderContainer.append(loader2);
loaderContainer.append(loadingMsg);

// value assignment
mainDiv.className = "loading-container";
loaderContainer.className = "sub-container";
loader1.className = "sub-container__loading-item1";
loader2.className = "sub-container__loading-item2";
loadingMsg.className = "sub-container__load-msg";
loadingMsg.innerText = "Getting started...";
