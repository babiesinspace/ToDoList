//Strike Through Specific Items When Clicked:
$("ul").on("click", "li", () => {
  $(event.target).toggleClass("checked")
})

//Delete ToDo Items:
$("ul").on("click", "span", (event) => {
  $(event.target).parent().fadeOut(500, () => {
    $(this).remove( )
  })
  event.stopPropagation()
})

//Submit on 'enter'
$("input[type='text']").on("keypress", (event) => {
  if (event.which == 13) {
    let newItem = $(event.target).val()
    $("<li><span>X</span> " + newItem + "</li>").appendTo("#list")
    $(event.target).val("")
  }
})