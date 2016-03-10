var editor = new Quill('#editor', {
  modules: {
    'toolbar': { container: '#toolbar' },
    'link-tooltip': true
  },
  theme: 'snow'
})

function edit( content ){
  $("#panel-title").html(content);
}

function save(){
  var inputHTML = editor.getHTML();

  $.ajax({
    method : "POST",
    url: '/users',
    data: {
      "html": inputHTML
    },
  })
  .done(function(recordHTML) {
    $('#record-txt').html(recordHTML["html"]);
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
  
}