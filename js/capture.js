const cameraButton = document.querySelector("start-camera");
const videoElem = document.querySelector("#camera");
const takePictureButton = document.querySelector("#fotoavtryckare-knapp");
const canvas = document.querySelector("#picture");
const galleryElem = document.querySelector("#gallery");

/* var constraints = { audio: false, video: { width: 1280, height: 720 } };  */

/* function avTryckare () {
    onclick=""
} */

/* const status = await navigator.permissions.query({name: "camera"});
status.addEventListener("change", (evt) => {
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(handleStream)
    .catch(handleDeny);
}, { once: true });
 */

// kamera och galleri
const ctx = canvas.getContext("2d");
let stream;
const images = [];


async function cameraStart(){
    if ('mediaDevices' in navigator) {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        console.log(stream);
        videoElem.srcObject = stream;
    }}

    cameraStart();
    

/* cameraButton.addEventListener("click", async () => {
    console.log("takePictureButton");
    if ("mediaDevices" in navigator) {
        stream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
        console.log(stream)
        videoElem.srcObject = stream;
    }
}); */

takePictureButton.addEventListener("click", () => {
    console.log("takePictureButton");
    ctx.drawImage(videoElem, 0, 0, canvas.width, canvas.height); /* clientWidth */
    const imageData = canvas.toDataURL("image/png");  /* gör om det till en png-bild */
    console.log(imageData);
    
    images.push({
        id: images.length,
        image: imageData
    });

    localStorage.setItem("cameraApp", JSON.stringify(images));
});

function createImage(image) {
    const imageElem = document.createElement("img");
    imageElem.setAttribute("src", image.image);

    galleryElem.append(imageElem);
} 
/* göra tillbaka till ett vanligt javscript object */
 function getImages() {
    const images = JSON.parse(localStorage.getItem("cameraApp"));

    for (const image of images) {
        createImage(image);
    }
}

getImages();


//installerbar som app

