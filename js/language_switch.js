// function confirmRefresh() {
//   var okToRefresh = confirm("Do you really want to refresh the page?");
//   if (okToRefresh)
//     {
      
//       setTimeout("switchLanguage();",5000);
//       location.reload();
//     }
//   }

function switchLanguage() {
  $('.translate').click(function() {
      
      var lang = $(this).attr('id');
      
      $('.lang').each(function(index, item) {
          $(this).text(arrLang[lang][$(this).attr('key')]);
          
          //Change placeholder
          $(this).prop('placeholder', arrLang[lang][$(this).attr('key')]);
          
      });

  });
};

function translateLang(lang) {
  $('.lang').each(function(index, item) {
      
      var item = $(this);
      //Change text
      item.text(arrLang[lang][item.attr('key')]);
      
      //Change placeholder
      item.prop('placeholder', arrLang[lang][item.attr('key')]);


  });
  
  // swicth language for css，re-define language
  var html = document.documentElement;
  html.setAttribute('lang', 'en');
  html.removeAttribute('lang');
  html.setAttribute('lang', lang);
  



  $('.imageset').each(function() {
      //Change image
      var newImg = $(this).data("key");
      $(this).prop('srcset', arrImg[lang][0][newImg]);

  });

}

$(function() {
  
  let stored_lang = localStorage.getItem('stored_lang');
  //check current language 
  switch (stored_lang){
    case 'EN': localStorage.setItem("stored_lang", "EN");
    break;
    case 'TC': localStorage.setItem("stored_lang", "TC");
    break;
    case 'SC': localStorage.setItem("stored_lang", "SC");
    break;
    //set "EN" for default language
    default: localStorage.setItem("stored_lang", "EN");
    //force refresh
    location.reload();
    break;
}

  let lang = stored_lang;

  translateLang(lang);

  $('.translate').click(function() {
      
      var lang = $(this).attr('id');
      //on click store language to localStorage
      localStorage.setItem("stored_lang", lang);
      // translateLang(lang);
      

  });

});



// Refresh page after selecting other language
$(function() {

  $('.language-tap').click(function() {
    location.reload();
    setTimeout("translateLang(lang);",3000);
  })

})
