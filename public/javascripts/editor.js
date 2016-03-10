var editor = new Quill('#editor', {
  modules: {
    'toolbar': { container: '#toolbar' },
    'link-tooltip': true
  },
  theme: 'snow'
});

var PostModel = {"author" : "Roverzon"};


function edit( contentTitle ){
  $("#panel-title").html(contentTitle);
  $("#edit-panel").removeClass('hide')
  PostModel["title"] = contentTitle;
}

function save(){
  var inputHTML = editor.getHTML();
   PostModel["content"] = inputHTML;

  $.ajax({
    method : "POST",
    url: '/aarposts',
    data: PostModel
  })
  .done(function(recordHTML) {
    $('#record-txt').html(recordHTML["content"]);
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
  
}