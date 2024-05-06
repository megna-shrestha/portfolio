document.getElementById("b1").addEventListener("click", function() {
    // URL of the file to download
    var fileUrl = "	https://megna-shrestha.github.io/portfolio/assets/CV.pdf";

    // Creating a temporary anchor element
    var downloadLink = document.createElement("a");
    downloadLink.href = fileUrl;

    // Setting the filename for the downloaded file
    downloadLink.download = "filename.ext";

    // Appending the anchor element to the DOM
    document.body.appendChild(downloadLink);

    // Simulating a click to trigger the download
    downloadLink.click();

    // Removing the anchor element from the DOM
    document.body.removeChild(downloadLink);
});
