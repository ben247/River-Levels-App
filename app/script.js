// $.getJSON is a shorthand Ajax function
$.getJSON(
  "https://environment.data.gov.uk/flood-monitoring/id/floods",
  function(data) {
    console.log(data);
  }
);
