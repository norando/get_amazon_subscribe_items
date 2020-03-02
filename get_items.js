var lists = document.querySelectorAll('.productTitle');
var my_itemlist_box = document.createElement("ul");
my_itemlist_box.setAttribute("id", "my_itemlist_box");
for(var i = 0; i < lists.length; i++ ){
  var item = document.createElement("li");
  var text = document.createTextNode(lists[i].textContent);
  item.appendChild(text);
  my_itemlist_box.appendChild(item);
}
document.getElementById('mysDesktop').insertBefore(my_itemlist_box,document.querySelector('.subscriptionList'));