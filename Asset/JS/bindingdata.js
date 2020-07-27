function loadData(request, targetId, sourceId) {
    var PATH = "/Asset/Data/"+request+".json"
    fetch(PATH)
    .then(response => response.json())
    .then(json => {
        let jsonData = {
            data: json
          };
          let target = $(targetId);
          let source = $(sourceId).html();
          let template = Handlebars.compile(source);
          $(target).html(template(jsonData));
    });
}