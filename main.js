


var plus1=document.getElementById('plus1'),
    minus1=document.getElementById('minus1'),
    price1=document.getElementById('price1')
    quantity1=document.getElementById('quantity1'),
    close1=document.getElementById('close1'),
    love1=document.getElementById('love1'),
    loveSymbole1=document.getElementById('loveSymbole1'),
    cart1=document.getElementById('cart1'),
    checkLove1=true;

plus1.onclick=function(){
    quantity1.innerHTML=parseInt(quantity1.innerHTML)+1;
    price1.innerHTML=parseInt(33)*parseInt(quantity1.innerHTML);
}

minus1.onclick=function(){
    if(quantity1.innerHTML=='0'){
        quantity1.innerHTML='0'
    }else{
        quantity1.innerHTML=parseInt(quantity1.innerHTML)-1;
        price1.innerHTML=parseInt(33)*parseInt(quantity1.innerHTML);
    }  
}

close1.onclick=function(){
    cart1.style.display='none';
}

love1.onclick=function(){
    if(checkLove1==true){
        loveSymbole1.style.color='red';
        checkLove1=false;
    }else{
        loveSymbole1.style.color='black';
        checkLove1=true;
    }
}




var plus2=document.getElementById('plus2'),
    minus2=document.getElementById('minus2'),
    price2=document.getElementById('price2')
    quantity2=document.getElementById('quantity2'),
    close2=document.getElementById('close2'),
    cart2=document.getElementById('cart2'),
    love2=document.getElementById('love2'),
    loveSymbole2=document.getElementById('loveSymbole2'),
    checkLove2=true;

plus2.onclick=function(){
    quantity2.innerHTML=parseInt(quantity2.innerHTML)+1;
    price2.innerHTML=parseInt(23)*parseInt(quantity2.innerHTML);
}

minus2.onclick=function(){
    if(quantity2.innerHTML=='0'){
        quantity2.innerHTML='0'
    }else{
        quantity2.innerHTML=parseInt(quantity2.innerHTML)-1;
        price2.innerHTML=parseInt(23)*parseInt(quantity2.innerHTML);
    }  
}

close2.onclick=function(){
    cart2.style.display='none';
}

love2.onclick=function(){
    if(checkLove2==true){
        loveSymbole2.style.color='red';
        checkLove2=false;
    }else{
        loveSymbole2.style.color='black';
        checkLove2=true;
    }
}




var plus3=document.getElementById('plus3'),
    minus3=document.getElementById('minus3'),
    price3=document.getElementById('price3')
    quantity3=document.getElementById('quantity3'),
    close3=document.getElementById('close3'),
    cart3=document.getElementById('cart3'),
    love3=document.getElementById('love3'),
    loveSymbole3=document.getElementById('loveSymbole3'),
    checkLove3=true;

plus3.onclick=function(){
    quantity3.innerHTML=parseInt(quantity3.innerHTML)+1;
    price3.innerHTML=parseInt(25)*parseInt(quantity3.innerHTML);
}

minus3.onclick=function(){
    if(quantity3.innerHTML=='0'){
        quantity3.innerHTML='0'
    }else{
        quantity3.innerHTML=parseInt(quantity3.innerHTML)-1;
        price3.innerHTML=parseInt(25)*parseInt(quantity3.innerHTML);
    }  
}

close3.onclick=function(){
    cart3.style.display='none';
}

love3.onclick=function(){
    if(checkLove3==true){
        loveSymbole3.style.color='red';
        checkLove3=false;
    }else{
        loveSymbole3.style.color='black';
        checkLove3=true;
    }
}