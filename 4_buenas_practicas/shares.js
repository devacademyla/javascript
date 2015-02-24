var name = "DevAcademy.la";
var parent = document.getElementsByClassName("_5pcb")[0];
var childs = parent.querySelectorAll("span.fwb");
var i = 0;
var arr = [];
for (i; i < childs.length; i++) {
  var html = childs[i].firstChild.firstChild.data;
  arr.push(html);
}

Array.prototype.unique = function () {
  var r = new Array();
  o:for(var i = 0, n = this.length; i < n; i++)
  {
    for(var x = 0, y = r.length; x < y; x++)
    {
      if(r[x]==this[i])
      {
        continue o;
      }
    }
    r[r.length] = this[i];
  }
  return r;
}

var unique = arr.unique();

i=0;
for (i;i<unique.length;i++) {
  console.log(unique[i]);
}