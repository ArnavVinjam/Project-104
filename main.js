Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

console.log('m15 version', m15.version);

classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/ubxN6Yt33/model.json', modelLoaded);