//A hírek szerkesztőfelületén a permalink részbe egy gomb beszúrása, hogy a scheduled posztok linkjét ki lehessen másolni vágólapra egyből
(function($) {

  $(document).ready(function () {

    setTimeout(function () {
      //Gomb beszúráa
      $preview_div = $('.components-panel__body .edit-post-post-link__preview-link-container');

      var $input = $('<input class="agrarcopyurlbutton" type="button" value="Link másolása vágólapra" />');

      $input.appendTo($preview_div);

      //Gomb kattintása másol a vágólapra
      $input.click(function(e) {
        e.preventDefault();
        var permalink_url_1 = $(".edit-post-post-link__preview-link-container a.components-external-link span.edit-post-post-link__link-prefix").text();
        var permalink_url_2 = $(".edit-post-post-link__preview-link-container a.components-external-link span.edit-post-post-link__link-post-name").text();

        let permalink_url = permalink_url_1.concat(permalink_url_2);

        document.addEventListener('copy', function(e) {
          e.clipboardData.setData('text/plain', permalink_url);
          e.preventDefault();
        }, true);

        document.execCommand('copy');
        console.log('copied text : ', permalink_url);

      });

    }, 1500);

  });

})( jQuery );
