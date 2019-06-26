var el=document.getElementById("1"); //получаем p
var txt=el.textContent; //получаем текст из p
var obj={}; //создаем обьект для хранения данных из p


console.log('данные из p:',txt); //выводим строку в консоль

txt=txt.split(/\;|\:/); //разбиваем строку и записываем данные в объект
obj.Tag=txt[1].toLowerCase();
obj.Text=txt[3];
obj.Count=parseInt(txt[5]);

console.log('данные из объекта:',obj); //выводим обьект в консоль

document.body.removeChild(el); //удаляем p из html

for(var cnt=0;cnt<obj.Count;cnt++) //создаем разметку по правилам из объекта
{
  var x=document.createElement(obj.Tag); //создаем новый эл-т
  var xTxt=document.createTextNode(obj.Text); //создаем текстовый узел
  x.appendChild(xTxt); //делаем эл-т родителем текстового узла
  document.body.appendChild(x); //добавляем эл-т в тело
}