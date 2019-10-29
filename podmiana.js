ar zmieniaczDebug = true;

var obrazki = new Array();

var obrazkiBlad = new Array();

function zmienObraz(nazwa, wersja) {}

function przygotujObraz(wersja, sciezka) {  
   if (!document.images) return; // jeśli stara przeglądarka, wyjdź
   var wer = obrazki[wersja] = new Image();
   obrazkiBlad[wersja] = false;
   wer.onerror = 
      new Function('obrazkiBlad['+q(wersja)+']=true');
   wer.src = sciezka;
}

function zmieniaczInit() {
   if (document.images) 
      if (navigator.userAgent.indexOf('Opera')!=-1) 
         zmienObraz= new Function('nazwa', 'wersja',   // Opera
            'document.images[nazwa].src=obrazki[wersja].src')
      else zmienObraz= new Function('nazwa', 'wersja', // IE i NN
         'var wer = obrazki[wersja];                            \n'+
         'if (wer.complete && !obrazkiBlad[wersja])             \n'+
         '   document.images[nazwa].src = wer.src               \n'
         );
}

function q(x) {
   return (typeof(x)=='string') ? '"'+x+'"' : x;
}

/*
     FILE ARCHIVED ON 23:09:12 Mar 10, 2002 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:03:13 Oct 29, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.resolve: 1035.994
  PetaboxLoader3.datanode: 104.598 (4)
  LoadShardBlock: 71.623 (3)
  CDXLines.iter: 18.708 (3)
  esindex: 0.015
  xauthn.chkprivs: 0.043
  exclusion.robots.policy: 316.149
  xauthn.identify: 315.867
  captures_list: 414.535
  RedisCDXSource: 5.172
  load_resource: 1125.005
  exclusion.robots: 316.161
*/
