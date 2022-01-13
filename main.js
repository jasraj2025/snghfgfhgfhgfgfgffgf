song = "";

leftWristX="";
leftWristY="";
righttWristY="";
righttWristX="";


function setup() {
    canvas = createCanvas(500,500);
    canvas.center();
    video =  createCapture(500,500);
    video.hide();
    poseNet = ml5.poseNet(video , gotPoses);
    poseNet.on('pose', gotPoses)
}

function preload(){
    song = loadSound("music.mp3");
}

function draw() {
    image(video,0,0,500,500);
}

function play_song(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX   =   results[0].pose.leftWrist.x;
        leftWristY   =   results[0].pose.leftWrist.y;
        console.log("left Wrist x " + leftWristX + "left Wrist y " + leftWristY  )
        
        righttWristY   =   results[0].pose.rightWrist.y;
        righttWristX   =   results[0].pose.rightWrist.x;
        console.log("right Wrist x " + righttWristX + "right Wrist y " + righttWristY  )
    }





}












































