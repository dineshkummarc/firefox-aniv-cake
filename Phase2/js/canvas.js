set=true;
count=0;
width=0;
height=0;
spegni=false;

window.onload=function(){
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    
    canvas.height="300";
    canvas.width=window.innerWidth;
    
    height="300";
    width=window.innerWidth;

    f1=new Image();
    f2=new Image();
    senza=new Image();
    c0=new Image();
    c1=new Image();
    c2=new Image();
    
    f1.src='src/f1.png';
    f2.src='src/f2.png';
    senza.src='src/senza.png';
    
    anim=setInterval(gif,200);
}

function gif(){
    canvas.height=canvas.height;
    if(!spegni){
        draw();
    }else{
        context.drawImage(senza,(width-200)/2,70, 200, 180);
        context.font = 'bold 5pt Calibri';
        context.fillStyle = 'white';
        hp=context.measureText('Happy Firefox 10th').width;
        fx=context.measureText('Independence Year!').width;
        context.fillText('Happy Firefox 10th',(width-hp)/2,30);
        context.font = 'bold 5pt Calibri';
        context.fillStyle = 'white';
        context.fillText('Independence Year!',(width-fx)/2, 60);
    }
}

function draw(){ 
    if(set){
        context.drawImage(f1,(width-200)/2,70, 200, 180);
        set=false;   
    }else{
        context.drawImage(f2,(width-200)/2,70, 200, 180);
        set=true;
    }
    hint();
}

function hint(){
    if(count<15){
        context.font = 'bold 5px Calibri';
        lenght=context.measureText('Blow into your microphone!').width;
        console.log(lenght);
        context.fillStyle = 'white';
        context.fillText('Blow into your microphone!',(width-lenght)/2, 40);   
        count++;
    }
}


