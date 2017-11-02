
(function(window){//window global nesnesinde oldugunu belirttik
	var byeSpeaker={};//yeni bir object yarattık
    var speakWord = "Good Bye";//speakwordunu 'Good Bye' tanımladık
    byeSpeaker.speak = function (name) {//objecte bağlı fonksiyon tanımladık
    console.log(speakWord + " " + name);
   }
    window.byeSpeaker=byeSpeaker;//dışarıdanda erişilebilmesi için belirttik

})(window);
