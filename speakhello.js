
(function(window){//window global nesnesinde oldugunu belirttik
	var helloSpeaker={};//yeni bir object yarattık
    var speakWord = "Hello";//speakwordunu 'Hello' tanımladık
    helloSpeaker.speak = function (name) {//objecte bağlı fonksiyon tanımladık
    console.log(speakWord + " " + name);
    
}
window.helloSpeaker=helloSpeaker;//dışarıdanda erişilebilmesi için belirttik
})(window);



