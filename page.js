document.querySelectorAll('a.x1i10hfl.xjbqb8w.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xt0psk2.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz._a6hd').forEach(i=> {let pattern = /\/p\/|\/reel\//;
if (pattern.test(i.href)) {
    console.log("The string contains '/p/' or '/reel/'.");
console.log(i.href)}})


let allLinks=[]; document.querySelectorAll('img').forEach(i=>allLinks.push(i.src)); allLinks[2]



// Function to download the image
function downloadImage(url, filename) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            alert('Your file has downloaded!'); // Optional
        })
        .catch(() => alert('Could not download the image'));
}

// Get the image URL
//const imageUrl = document.querySelector('img').src; // or specify the exact image selector

// Specify the filename
const filename = 'downloaded_image.jpg'; // Change the filename and extension as needed

// Download the image
downloadImage(window.location.href, filename);
