import { linksData } from "../data/links.js";
import { appVersion } from "./version.js";

export function renderLinksOnPage() {
    // creating and appending links to DOM.
    linksData.forEach((_linkObject) => {
        var node = document.createElement("a");
        node.href = "#";
        node.innerHTML = _linkObject.name;
        node.classList.add(['ec__cdn_link'])
        document.getElementById("ec__links_container").appendChild(node);
    });


    //Attaching click listeners on links.
    var allLinks = document.querySelectorAll(".ec__cdn_link");
    allLinks.forEach((_link) => {
        _link.addEventListener("click", () => {
            let selectedObject = linksData.filter(item => item.name === _link.innerHTML)
            navigator.clipboard.writeText(selectedObject[0].text);
            document.getElementById("ec__message_text").innerHTML = "Text Copied!!";
        });

        _link.addEventListener("mousemove", (e) => {
            document.getElementById("ec__message_text").innerHTML = _link.innerHTML;
        });
    });

    document.getElementById("ec__search_input").addEventListener("keydown", searchForLinks);
    document.getElementById("ec__version").innerHTML=appVersion

}


export function searchForLinks(event) {
    var allLinks = document.querySelectorAll(".ec__cdn_link");
    allLinks.forEach((_link) => {
        if (_link.innerHTML.search(event.target.value) != -1) {
            _link.style.display = "";
        } else {
            _link.style.display = "none";
        }
    });
}