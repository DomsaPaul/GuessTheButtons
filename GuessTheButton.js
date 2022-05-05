  <script>
      function Buttons() {
  var Addnr = document.getElementById("number").value;
  const Winner = Math.floor(Math.random() * (Addnr - 1 + 1)) + 1;
  while (Addnr > 0) {
    var AddButtons = document.createElement("button");
    var ClButton = Addnr;
    AddButtons.innerHTML = "Hit";
    AddButtons.type = "button";
    AddButtons.onclick = function() {
      if (Winner == ClButton + 1) {
        Score++;
        alert("You WIN!");
      } else {
        alert("You LOSE!");
        Score = 0;
      }
      location.reload();
    }
    document.body.appendChild(AddButtons);
    --Addnr;
    --ClButton;
  }
}
    </script>
