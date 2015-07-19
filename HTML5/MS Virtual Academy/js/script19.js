// $.getJSON() is limited to $.ajax()
// because it does not provide error handling if the server is not reached
// unlike $.ajax() which allows you to define what happens
// if a certain error is encountered.

$(function() {

  $('#clickJSON').click(function(){

    // $.getJSON()
    // get data from a server url (data19.json in this case)
    // data - this is a map object that contains keys and values

    $.getJSON('data19.json', function(data) {
        
        var items = []; // empty array

        $.each(data, function(key, value) {
             items.push("<li id='" + key + "'>" + value);
        });


        // create a new tag
        // set its html as items.join without separating the elements
        // of the array items e.g. (',') will separate by comma
        $('<ul>', { 'class': 'interest-list',
                    'id': 'first-ul',
                    html: items.join('')
                  }
        ).appendTo('body');
        
    }); // end of $.getJSON()

  }); // end of #clickJSON




  $('#clickAJAX').click(function(){

    // $.ajax()
    // get data from a server url (data19.json in this case)
    // data - this is a map object that contains keys and values
    
    $.ajax({
         url: 'data19.json',
         dataType: 'json',
         success: function(data) {
             
             var items = [];

             $.each(data, function(key, value){
                  items.push("<li id='" + key + "'>" + value);
             });

             $('<ul>', { 'class': 'interest-list',
                         'id': 'second-ul',
                         html: items.join('')
                       }
             ).appendTo('body');

         },
         statusCode: {
             404: function() {
                 alert ('Server could not be reached.');
             }
         }

    }); // end of $.ajax()

  }); // end of #clickAJAX()


});