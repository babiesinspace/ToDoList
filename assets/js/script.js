//Strike Through Specific Items When Clicked:

$("li").click(() => {
  let item = $(event.target)
  if ($(item).css("color") === "rgb(128, 128, 128)") {
    $(item).css({
    color: "black",
    textDecoration: "none"})
  } else {
    $(event.target).css({
      color: "gray",
      textDecoration: "line-through"})
  }
})

//Delete ToDo Items:
$("span").on("click", (event) => {
  $(event.target).parent().remove()
})
