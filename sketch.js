
    

function setup(){
   createCanvas(1400,600,WEBGL);
}
function draw(){
    background(21, 67, 96);
    
    fill(52, 152, 219);
    rotateY(millis() / 1000); 
   
    sphere(120);
    translate(320,140,0);

    fill(234, 237, 237);
    rotateX(millis() / 3000);
    rotateY(millis()/3000);
    sphere(80);
    translate(150,0,0);

   
    
    }
   