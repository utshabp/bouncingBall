let ball=document.querySelector('.bouncingBall'),
    y=1,
    gravity=1;

    setInterval(function(){
        if(y>250)
        gravity=-gravity;
        gravity+=1;
        y+=gravity;
        ball.style.top=(y)+'px';
        

    },100);
