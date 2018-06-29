// $.getJSON is a shorthand Ajax function
// $.getJSON(
//   "https://environment.data.gov.uk/flood-monitoring/id/floods",
//   function(data) {
//     console.log(data);
//   }
// );

var riverSearch = $("#river-search").val();
var url =
  "http://environment.data.gov.uk/flood-monitoring/id/stations?riverName=";

$(document).ready(function() {
  $("#search-button").click(function() {
    $.getJSON(url + riverSearch, function(data) {
      console.log(data);
    });
  });
});
