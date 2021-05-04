function ttt()
{
  var da=new Date();
  var h=da.getHours();
  var m=da.getMinutes();
  var s=da.getSeconds();
  h=checkTime(h);
 m=checkTime(m);
 s=checkTime(s);
  document.getElementById('sa').innerHTML= (h + ":"+ m + ":" + s);
      var t = setTimeout(ttt,1000);
}
function checkTime(i){
  if(i<10){i="0" + i};
  return i;
}
