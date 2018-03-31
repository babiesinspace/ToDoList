//Strike Through Specific Items When Clicked:

$("li").click(() => {
  $(event.target).toggleClass("checked")
})

//Delete ToDo Items:
$("span").on("click", (event) => {
  $(event.target).parent().fadeOut(500, () => {
    $(this).remove()
  })
  event.stopPropagation()
})
