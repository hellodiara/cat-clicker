/* ============================ Model ============================ */
const catModel = {
    selectedCat: null,
    cats: [ 
      {
        clickCount : 0,
        name: 'Smokey',
        imgSrc: 'https://farm2.staticflickr.com/1126/625069434_db86b67df8_b.jpg'
    },
    {
        clickCount : 0,
        name: 'Azul',
        imgSrc: 'https://farm3.staticflickr.com/2298/2290467335_89067c7b51_b.jpg'
    },
    {
        clickCount : 0,
        name: 'Pumpkin',
        imgSrc: 'img/pexels-photo-1216491.jpeg'
    },
    {
        clickCount : 0,
        name: 'Ebony',
        imgSrc: 'img/pexels-photo-1307503.jpeg'
    },
    {
        clickCount : 0,
        name: 'Spice',
        imgSrc: 'https://farm3.staticflickr.com/2298/2290467335_89067c7b51_b.jpg',
    }
  ]

};

/* ============================ Octopus ============================ */
const meow = {

  init: function() {
    // set our current cat to the first one in the list
    catModel.selectedCat = catModel.cats[0];
    catModel.selectedCat = catNameValue;

    // initialize view
    catListView.init();
    catView.init();
  },

  getSelectedCat: function() {
    return catModel.selectedCat;
  },

  getCats: function() {
    return catModel.cats;
  },

  setSelectedCat: function(cat) {
    catModel.selectedCat = cat;
  },

  incrementCounter: function() {
    catModel.selectedCat.clickCount++
    catView.render();
  }
};

/* ============================ View ============================ */

const catView  = {

  init: function() {
    // Select & store DOM elements to use later
    this.catElem = document.getElementById('selected-cat');
    this.catNameElem = document.getElementById('cat-name');
    this.catImageElem = document.getElementById('cat-img');
    this.countElem = document.getElementById('cat-counter');

    // For the form
    this.catNameValue = document.getElementById("input-cat-name").value;
    this.catImgSrcValue = document.getElementById("input-img-src").value;
    this.catClicksValue = document.getElementById("input-cat-counter").value;

    // on click : increment the selected cat' click counter
    this.catImageElem.addEventListener('click', function() {
      meow.incrementCounter();
    });

    // render the view: update the dom with correct values
    this.render();
  },
  // update the DOM with values from the selected cat
  render: function() {  
    const selectedCat = meow.getSelectedCat();
    this.countElem.textContent = selectedCat.clickCount;
    this.catNameElem.textContent = selectedCat.name;
    this.catImageElem.src = selectedCat.imgSrc;

    // For the form
    this.catNameValue.textContent = selectedCat.name;
    this.catImgSrcValue.src = selectedCat.imgSrc;
    this.catClicksValue.textContent = selectedCat.clickCount;

  }

};

const catListView = {

  init : function() {
    // Select & store DOM elements to use later
    this.catListElem = document.getElementById('cat-list');

    // render this view by updating DOM 
    this.render();

  },

  render: function() {
      var cat, elem, i;
      // get the cats to be rendered
      const cats = meow.getCats();

      // empty the cat list
      this.catListElem.innerHTML = '';

      // loop over the cats
      for (i=0; i < cats.length; i++) {
        cat = cats[i];

        // make a new cat list and set its text
        elem = document.createElement('li');
        elem.textContent = cat.name;

        // On click , setSelectedCat and render catView
        elem.addEventListener('click', (function(catCopy) {
          return function() {
            meow.setSelectedCat(catCopy);
            catView.render();
          };
        })(cat));

        // add element to the list
        this.catListElem.appendChild(elem);
      }
    }
};

const adminButton = document.getElementById('admin');
const adminPanel = document.getElementById('admin-panel');
const cancelButton = document.getElementById('cancel');
const saveButton = document.getElementById('save');

// displays admin panel when you click on admin button
function displayAdminPanel () {
  adminPanel.classList.remove('hide-admin-panel');
};
adminButton.addEventListener('click', displayAdminPanel);

// Hides admin panel when you click on cancel button
function hideAdminPanel() {
  adminPanel.classList.toggle("hide-admin-panel");
};
cancelButton.addEventListener('click', hideAdminPanel);

// Save button onclick updates the current cat data

// Save button onclick, closes the admin panel
saveButton.addEventListener('click', hideAdminPanel);

// launch
meow.init();