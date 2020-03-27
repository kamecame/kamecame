var seiseki=new Object();
seiseki.data={'国語':100,'数学':90};

seiseki.count=function(){
    var n=0;
    for(var key in this.data){
        n++;
    }
    return n;
}

seiseki.total=function(){
    var total=0;
    for(var key in this.data){
        total+=this.data[key];
    }
    return total;
}

document.write(seiseki.count());
document.write('<p>合計は'+seiseki.total()+'です</p>');