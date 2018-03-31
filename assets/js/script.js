//Strike Through Specific Items When Clicked:
$("#list").on("click", "li", () => {
  $(event.target).toggleClass("checked")
})

//Delete ToDo Items:
$("#list").on("click", ".todo", (event) => {
  $(event.target).closest("li").fadeOut(500, () => {
    $(this).remove( )
  })
  event.stopPropagation()
})

//Submit on 'enter'
$("input[type='text']").on("keypress", (event) => {
  if (event.which == 13) {
    let newItem = $(event.target).val()
    $("<li><span class='todo'><i class='fas fa-trash-alt'></i></span> " + newItem + "</li>").appendTo("#list")
    $(event.target).val("")
  }
})

//Hide list
$("#plus").on("click", () => {
  $("#list").toggleClass("hidden")
})