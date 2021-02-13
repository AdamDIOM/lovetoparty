

window.onload = (function(){addText()});
//window.onload = (function(){walkText(document.body)});

function addText(){
    var addresses = [
        "https://www.instagram.com/tv/CKmsw1EpCWZ",
        "https://www.instagram.com/tv/CJTpueQJF1k/",
        "https://www.instagram.com/tv/CJmEBiTJatX/",
    
    ]
    
    var random = Math.floor(Math.random() * addresses.length);
    console.log(random);
    document.getElementById("content").innerHTML = `<blockquote class=\"instagram-media\" data-instgrm-permalink=\"https://www.instagram.com/tv/CKmsw1EpCWZ/?utm_source=ig_embed&amp;utm_campaign=loading\" data-instgrm-version=\"13\" style=\" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);\"></blockquote></blockquote><script async src=\"//www.instagram.com/embed.js\"></script>`
    document.getElementById("content").innerHTML += `iFrame not working? Link here: <a href=\"${addresses[random]}\">watch video</a>`;

    
}

function walkText(node) {
    if (node.nodeType == 3) {
      node.data = node.data.replace("https://www.instagram.com/tv/CKmsw1EpCWZ", "bar");
    }
    if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
      for (var i = 0; i < node.childNodes.length; i++) {
        walkText(node.childNodes[i]);
      }
    }
  }
  //walkText(document.body);

function myfuncname(){
    var docEl = document.getElementById("content");
    docEl.innerHTML += `<blockquote class="instagram-media" data-instgrm-permalink="${addresses[random]}?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="13" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote></blockquote> <script async src="//www.instagram.com/embed.js"></script>`
    docEl.innerHTML += "hi";
}

