$(document).ready(function() {
  var game = 0
  var player1 = new Player("red")
  var player2 = new Player("yellow")
  $("#board").on("click", "td.plain", function(e) {
    e.preventDefault();
    // debugger;
    var cellIndex = $(e.target).index();
    var rowIndex = $(e.target).parent().index();
    if ($(e.target).hasClass("plain")) {
      if (!($(e.target).parent().siblings().eq(rowIndex).children().eq(cellIndex).hasClass("plain"))) {
        if (game%2 == 0) {
          $(e.target).css("background-color", player1.color);
          $(e.target).removeClass("plain");
        } else {
          $(e.target).css("background-color", player2.color);
          $(e.target).removeClass("plain");
        };
        game += 1
      };
    };
  })
});


function Player(color) {
  this.color = color
}

// Player.prototype.move = function() {

// }
