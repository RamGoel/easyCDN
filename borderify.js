let links = {
  "Poppins Import":
    "@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');",
  "Poppins Link": `<link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"> `,
  "Bootsrap JS": `<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0-beta1/js/bootstrap.min.js" integrity="sha512-Hqe3s+yLpqaBbXM6VA0cnj/T56ii5YjNrMT9v+us11Q81L0wzUG0jEMNECtugqNu2Uq5MSttCg0p4KK0kCPVaQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`,
  "Bootstrap CSS Import": `@import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0-beta1/css/bootstrap.min.css")`,
  "Bootstrap CSS Link": `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0-beta1/css/bootstrap.min.css" integrity="sha512-o/MhoRPVLExxZjCFVBsm17Pkztkzmh7Dp8k7/3JrtNCHh0AQ489kwpfA3dPSHzKDe8YCuEhxXq3Y71eb/o6amg==" crossorigin="anonymous" referrerpolicy="no-referrer" />`,
 "Gaming":"No i dontdo",
  "Font Awesome":'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
};

window.addEventListener("load", (e) => {
  var names = Object.keys(links);
  names.forEach((nme) => {
    var node = document.createElement("a");
    node.href = "#";
    node.innerHTML = nme;
    document.getElementById("itemContain").appendChild(node);
  });

  var button = document.querySelectorAll("a");
  button.forEach((elm) => {
    elm.addEventListener("click", (e) => {
      navigator.clipboard.writeText(links[elm.innerHTML]);
      document.getElementById("mainHead").innerHTML = "Text Copied!!";
      
    });

    elm.addEventListener("mousemove", (e) => {
      document.getElementById("mainHead").innerHTML = elm.innerHTML;
    });
  });
});

document.getElementById("searchInput").addEventListener("keydown", (e) => {
  var button = document.querySelectorAll("a");
  button.forEach((elm) => {
    if (elm.innerHTML.search(e.target.value) != -1) {
      elm.style.display = "";
    } else {
      elm.style.display = "none";
    }
  });
});
