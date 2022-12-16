img = "";
Status = "";
objects = [];
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
    if(Status != "")
    {
    for(i = 0;i<objects.length;i++)
    {
        document.getElementById("status").innerHTML = "Status : objects detected";
        fill("red");
        percent = floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
        noFill();
        stroke("orange");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
    }
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
        objects = results;
    }
}