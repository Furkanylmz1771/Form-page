

$(document).ready(function(){

    $("input").on({
        focus: function(){
        $(this).css({"background-color" : "black", "color" : "white"});
    },
    blur:function(){
        $(this).css({"background-color" : "", color : ""});
    }
});


// Şifre Özellikleri Kısmı

$("#sifre").on("keydown" , function(){
    var uzunluk = $("#sifre").val().length +1;             
    var durum = $("#durum");

    if(uzunluk <= 3){
        durum.addClass("zayif");
        durum.removeClass("orta")
        durum.removeClass("guclu")
        durum.text("Şifre zayıf")
    }
    else if(uzunluk > 3 && uzunluk <= 6){
        durum.addClass("orta");
        durum.removeClass("zayif")
        durum.removeClass("guclu")
        durum.text("Şifre orta")
    }
    else if( uzunluk >6 ){
        durum.addClass("guclu");
        durum.removeClass("orta")
        durum.removeClass("zayif")
        durum.text("Şifre güçlü");
    }

 

})

$(".buton").click(function(){
    window.open("https://www.google.com/")
    
})













});




