let fileLoc;

if (location.origin === "file://" || (location.origin.indexOf("localhost") > -1 && location.origin.indexOf(".") === -1)) {
    fileLoc = "local";
} else if (location.hostname.toLowerCase().includes(".github.io")) {
    fileLoc = "gh-pages";
} else if (location.hostname.toLowerCase().includes(".netlify.app")) {
    if (location.hostname.toLowerCase().includes("royalsgamedev.netlify.app")) {
        fileLoc = "netlify-prod";
    } else {
        fileLoc = "netlify-test";
    }
} else {
    fileLoc = "unknown";
}

document.querySelector("#warning-banner").setAttribute("data-loc", fileLoc);