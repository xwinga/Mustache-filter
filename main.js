filterX = 0;
filterY = 0;
function preload() {
image1 = loadImage("https://i.postimg.cc/Bnf1wYbH/R-1.png");
}
function setup() {
    canvas = createCanvas(600,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600,600);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw() {
image(video, 0, 0, 600, 600);
image(image1, filterX, filterY, 40, 40);
}
function takesnapshot(){
    save('Image.png');
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        filterX = results[0].pose.nose.x;
        filterY = results[0].pose.nose.y;
        console.log("nose x ="+filterX);
        console.log("nose y ="+filterY);
    }
}