img = "";
Status = "";
function setup()
{
    canvas = createCanvas(640 , 420);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}
function preload()
{
    img = loadImage("dog_cat.jpg");
}
function draw()
{
    image(img , 0 , 0 , 640 , 420);
    fill("red");
    text("Dog", 45 , 75);
    noFill();
    stroke("red");
    rect(30 , 60 , 450 , 350);
    fill("orange");
    text("Cat", 320 , 120);
    noFill();
    stroke("orange");
    rect(300 , 90 , 270 , 320);
}
function modelLoaded()
{
    console.log("Model is loaded");
    Status = true;
    object_detector.detect(img , gotResult);
}
function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(results);
    }
}