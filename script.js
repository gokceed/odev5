
( function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i=0; i<names.length;i++) {//ad sayısı kadar döndürme işlemi yaptık

  var firstLetter = names[i].charAt(0);//adın ilk harfini atadık
  var x = firstLetter.toLowerCase();//adın ilk harfini küçük harfe çevirdik

  if ( x=='j' ) {//j oldugu zaman bu clause'a girmesini sağladık
    byeSpeaker.speak(names[i]);
  } else {//başka bir harf ise buraya girer
    helloSpeaker.speak(names[i]);
  }
}
})();
 