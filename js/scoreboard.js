function setupScoreboard(){
    $.ajax({
        'url': 'index',
        'method': 'get',
        'data': {'action': 'getScore'},
        'success': function(receivedData) {
            if(receivedData.result) {
                //alles gut - reload der seite
                //anzeigen des scoreboards...
            }
        }
    });
}