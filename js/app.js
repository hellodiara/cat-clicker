class Cat {
    constructor() {
      this.cat_list = [];
    }

  addCat(cat) {
    // Add Cat if it has a name and picture
    if ( cat.hasOwnProperty("name") && cat.hasOwnProperty("picture") && cat.hasOwnProperty("clicks")) {
      this.cat_list.push(cat)
    }
  }

  removeCat(cat) {
    // Remove Cat if it has a name and picture
    if ( cat.hasOwnProperty("name") && cat.hasOwnProperty("picture")&& cat.hasOwnProperty("clicks") ) {
      for (let i=0; i < this.cat_list.length; i++) {
        if ( this.cat_list[i].name === cat.name ) {
          delete this.cat_list[i];
        }
      }
    }
  }

  getSelectedCatHTML(cat) {
    if ( cat.hasOwnProperty("name") && cat.hasOwnProperty("picture") && cat.hasOwnProperty("clicks")) {
      return `<div class="card" style="width:400px" onClick="javascript:catClass.addClick('${cat.name}' , '${cat.picture}', '${cat.clicks}')">
        <img class="card-img-top" src="${cat.picture}" alt="Cat image">
        <div class="card-body">
        <h4 class="card-title text-center">${cat.name}</h4>
        <span class="badge badge-info" id="${cat.name}-clicks">${cat.clicks}</span>
        </div>
      </div>`;
    } else {
      return "Invalid cat!";
    }
  }

  addClick(name, picture, clicks) {
    for (let i=0; i < this.cat_list.length; i++) {
        if ( this.cat_list[i].name === name ) {
           this.cat_list[i]["clicks"] = this.cat_list[i].hasOwnProperty("clicks") ? this.cat_list[i]["clicks"]+1 : 1
           document.getElementById(name + '-clicks').innerHTML = this.cat_list[i]["clicks"];
        }
      }

  }

  getCatList() {
    const catHTML = this.cat_list.map(( cat, index ) => {
      return `<li onClick="javascript: catClass.displaySelectedCatHTML('${cat.name}', '${cat.picture}', '${cat.clicks}')" id="${cat.name}" class="list-group-item">${cat.name}</li>`
    });

    return catHTML;
  }
// Displays the selected cat
  displaySelectedCatHTML(name, picture, clicks) {
    console.log(clicks);
    const selectedCatHTML = this.getSelectedCatHTML({
      "name": name,
      "picture": picture,
      "clicks": clicks
    });
    document.getElementById("selected-cat").innerHTML = selectedCatHTML;

  }

// Displays the cat list
  displayCatList(catList) {
    document.getElementById("cat-list").innerHTML = catList.join("");
  }


} // End Cat Class

// Cat objects list
const catClass = new Cat();
catClass.addCat({
        "name": "Smokey",
        "picture": "https://farm2.staticflickr.com/1126/625069434_db86b67df8_b.jpg",
        "clicks": 0
      });

catClass.addCat({
        "name": "Azul",
        "picture": "https://farm3.staticflickr.com/2298/2290467335_89067c7b51_b.jpg",
        "clicks": 0
      });

catClass.addCat({
        "name": "Pumpkin",
        "picture": "img/pexels-photo-1216491.jpeg",
        "clicks": 0
      });

catClass.addCat({
        "name": "Ebony",
        "picture": "img/pexels-photo-1307503.jpeg",
        "clicks": 0    
      });

catClass.addCat({
        "name": "Spice",
        "picture": "https://farm3.staticflickr.com/2298/2290467335_89067c7b51_b.jpg",
        "clicks": 0    
      });


const catList = catClass.getCatList();

catClass.displayCatList(catList);



