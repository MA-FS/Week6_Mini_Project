var buttonEl = document.getElementById("searchBtn");
var searchEl = document.getElementById("input");
var listContainer = document.getElementById("ul");
var linkEl = document.getElementById("readMeButton");
var select = document.getElementById(‘text-type’);
select.options[select.selectedIndex].value;



function searchItem() {
    var requestUrl = "https://www.loc.gov/" + format + "/?q=" + Search + "&fo=json";

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        for (var i = 0; i < data.length; i++) {
          var listItem = document.createElement('li');
          var readMeEl = document.createElement("a");
          listItem.textContent = data[i].name;
          link.href = data[i].url;
         listContainer.appendChild(listItem);
         linkEl.appendChild(link)
        }
      });
  };

  ListItem.addEventListener('click', searchItem());
