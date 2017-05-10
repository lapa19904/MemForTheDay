 var memRand = [];

document.querySelector('.btn').addEventListener('click', function MemForTheDay(){
   var mem, memDOM;
   
    
   
    mem = Math.round(Math.random() * 34) +1;
    memRand[memRand.length] = mem;
        
    
   memDOM = document.querySelector('.mem');
    memDOM.style.visibility = 'visible';
    if(mem <= 25){
    memDOM.src = 'mem-' + mem + '-min.jpg';
    } else if (mem > 25){
        memDOM.src = 'mem-' + mem + '.gif';
    }
    
    
   console.log(memRand);
    
});



