//Strike Through Specific Items When Clicked:
$("li").click(() => {
  $(event.target).toggleClass("checked")
})

//Delete ToDo Items:
$("span").on("click", (event) => {
  $(event.target).parent().fadeOut(500, () => {
    $(this).remove( )
  })
  event.stopPropagation()
})

//Submit on 'enter'
$("input[type='text']").on("keypress", (event) => {
  if (event.charCode == 13) {
    let newItem = $(event.target).val()
    $("<li/>").text(newItem).appendTo("#list")
    $(event.target).val("")
  }
})