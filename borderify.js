let links = {
  "Poppins Import":
    "@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');",
  "Poppins Link": `<link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"> `,
  "Roboto Font Link": `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>`,
  "Web3.js ": `<script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.8.0/web3.min.js" integrity="sha512-bSQ2kf76XufUYS/4XinoHLp5S4lNOyRv0/x5UJACiOMy8ueqTNwRFfUZWmWpwnczjRp9SjiF1jrXbGEim7Y0Xg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`,
  Ethers: `<script src="https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.1/ethers.esm.js" integrity="sha512-bRsr+X44NlgQIRrJCWWS0XxTZ9LIPfckTg2vWbtfGbu3BOkPdpJjioUc77Y0GJXOvHjUhENjN3J96W76EMaF8g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`,
  "Bootsrap JS": `<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0-beta1/js/bootstrap.min.js" integrity="sha512-Hqe3s+yLpqaBbXM6VA0cnj/T56ii5YjNrMT9v+us11Q81L0wzUG0jEMNECtugqNu2Uq5MSttCg0p4KK0kCPVaQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`,
  "Bootstrap CSS Import": `@import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0-beta1/css/bootstrap.min.css")`,
  "Bootstrap CSS Link": `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0-beta1/css/bootstrap.min.css" integrity="sha512-o/MhoRPVLExxZjCFVBsm17Pkztkzmh7Dp8k7/3JrtNCHh0AQ489kwpfA3dPSHzKDe8YCuEhxXq3Y71eb/o6amg==" crossorigin="anonymous" referrerpolicy="no-referrer" />`,
  Gaming: "No i dontdo",
  "Font Awesome": `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css`,
  "Material Icon Fonts": `<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />`,
  "Ant Design": `<script src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.23.4/antd.min.js" integrity="sha512-TX5xqH1bMGCs+tNkJDdtQxK9QapYEXyP1PucEJdrNxSjtZKEW+1JNe3oEO5nY/Vv2+KZC3pPXJojTb9XDdinOg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`,
  "Material-UI": `<script src="https://cdnjs.cloudflare.com/ajax/libs/material-ui/4.12.4/index.js" integrity="sha512-wEnX3bNd/CdyrOFR0KIGlHihK/w9x3/It8Vc18aymEF/F/f1q0Mq8T+GSxF1wYUACLEGECapuIYQdQlKY1LBJw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`,
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
