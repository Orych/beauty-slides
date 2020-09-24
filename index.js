let slide1 = {
  width: '800px',
  height: '600px',
  position: 1,
  objects: {
    text: [
      {
        id: 1, 
        data: 'Hello, this is slide number 1!', 
        font: 'Open Sans', 
        size: '15px', 
        color: '#000', 
        style: null, 
        weight: 400, 
        decoration: null
      }
    ],
    img: [
      {
        id: 2,
        path: './img/imageFromSlide1.jpg',
        width: '100px',
        height: '100px'
      }
    ]
  },
  backgroundImage: './bg.jpg',
  backgroundColor: null
};

let app = {
  currSlide: 1,
  slides: [ slide1 ],
  settings: null,
  history: null,
  choosedObjectId: 1
};

function nextSlide(app) {
  app.currSlide++;
  return app;
}
