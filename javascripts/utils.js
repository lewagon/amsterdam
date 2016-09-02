function addParam(value) {
  var state = '';
  var title = '';
  var url =  location.pathname + '?' + value;

  history.pushState(state, title, url);
}

function clearParams() {
 var state = '';
 var title = '';
 var url =  location.pathname;

 history.pushState(state, title, url);
}

function parseParam(val) {
    var result = false,
        tmp = [];
    location.search
    //.replace ( "?", "" )
    // this is better, there might be a question mark inside
    .substr(1)
        .split("&")
        .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
    });
    return result;
}
;
