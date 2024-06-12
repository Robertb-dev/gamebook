
/*Script do projeto gamebook */
/*Lógica dos comentários, por Arthur Dias Oliveira */

document.getElementById("commentForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var name = document.getElementById("name").value;
  var comment = document.getElementById("comment").value;
  
  var commentDiv = document.createElement("div");
  commentDiv.classList.add("comment");
  
  var namePara = document.createElement("p");
  namePara.textContent = "User: " + name;
  
  var commentPara = document.createElement("p");
  commentPara.textContent = "" + comment;
  
  commentDiv.appendChild(namePara);
  commentDiv.appendChild(commentPara);
  
  document.getElementById("comments").appendChild(commentDiv);
  
  // Limpa os campos após enviar o comentário
  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
});
