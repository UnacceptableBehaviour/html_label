window.addEventListener('load',function(){
  document.querySelector('.glider').addEventListener('glider-slide-visible', function(event){
      var glider = Glider(this);
      console.log('Slide Visible %s', event.detail.slide)
  });
  document.querySelector('.glider').addEventListener('glider-slide-hidden', function(event){
      console.log('Slide Hidden %s', event.detail.slide)
  });
  document.querySelector('.glider').addEventListener('glider-refresh', function(event){
      console.log('Refresh')
  });
  document.querySelector('.glider').addEventListener('glider-loaded', function(event){
      console.log('Loaded')
  });


  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  window._ = new Glider(document.querySelector('.glider'), {
      slidesToShow: 1, //'auto',
      slidesToScroll: 1,
      itemWidth: 150,
      draggable: true,
      scrollLock: false,
      dots: '#dots',
      rewind: true,
      arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
      },
      responsive: [
          {
              breakpoint: 800,
              settings: {
                  slidesToScroll: 'auto',
                  itemWidth: 300,
                  slidesToShow: 'auto',
                  exactWidth: true
              }
          },
          {
              breakpoint: 700,
              settings: {
                  slidesToScroll: 4,
                  slidesToShow: 4,
                  dots: false,
                  arrows: false,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToScroll: 3,
                  slidesToShow: 3
              }
          },
          {
              breakpoint: 500,
              settings: {
                  slidesToScroll: 2,
                  slidesToShow: 2,
                  dots: false,
                  arrows: false,
                  scrollLock: true
              }
          }
      ]
  });


  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  window._ = new Glider(document.querySelector('.glider-2'), {
      slidesToShow: 1, //'auto',
      slidesToScroll: 1,
      itemWidth: 150,
      draggable: true,
      scrollLock: false,
      dots: '#dots',
      rewind: true,
      arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
      },
      responsive: [
          {
              breakpoint: 800,
              settings: {
                  slidesToScroll: 'auto',
                  itemWidth: 300,
                  slidesToShow: 'auto',
                  exactWidth: true
              }
          },
          {
              breakpoint: 700,
              settings: {
                  slidesToScroll: 4,
                  slidesToShow: 4,
                  dots: false,
                  arrows: false,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToScroll: 3,
                  slidesToShow: 3
              }
          },
          {
              breakpoint: 500,
              settings: {
                  slidesToScroll: 2,
                  slidesToShow: 2,
                  dots: false,
                  arrows: false,
                  scrollLock: true
              }
          }
      ]
  });

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  window._ = new Glider(document.querySelector('.glider-3'), {
      slidesToShow: 1, //'auto',
      slidesToScroll: 1,
      itemWidth: 150,
      draggable: true,
      scrollLock: false,
      dots: '#dots',
      rewind: true,
      arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
      },
      responsive: [
          {
              breakpoint: 800,
              settings: {
                  slidesToScroll: 'auto',
                  itemWidth: 300,
                  slidesToShow: 'auto',
                  exactWidth: true
              }
          },
          {
              breakpoint: 700,
              settings: {
                  slidesToScroll: 4,
                  slidesToShow: 4,
                  dots: false,
                  arrows: false,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToScroll: 3,
                  slidesToShow: 3
              }
          },
          {
              breakpoint: 500,
              settings: {
                  slidesToScroll: 2,
                  slidesToShow: 2,
                  dots: false,
                  arrows: false,
                  scrollLock: true
              }
          }
      ]
  });

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  window._ = new Glider(document.querySelector('.glider-4'), {
      slidesToShow: 1, //'auto',
      slidesToScroll: 1,
      itemWidth: 150,
      draggable: true,
      scrollLock: false,
      dots: '#dots',
      rewind: true,
      arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
      },
      responsive: [
          {
              breakpoint: 800,
              settings: {
                  slidesToScroll: 'auto',
                  itemWidth: 300,
                  slidesToShow: 'auto',
                  exactWidth: true
              }
          },
          {
              breakpoint: 700,
              settings: {
                  slidesToScroll: 4,
                  slidesToShow: 4,
                  dots: false,
                  arrows: false,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToScroll: 3,
                  slidesToShow: 3
              }
          },
          {
              breakpoint: 500,
              settings: {
                  slidesToScroll: 2,
                  slidesToShow: 2,
                  dots: false,
                  arrows: false,
                  scrollLock: true
              }
          }
      ]
  });

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  window._ = new Glider(document.querySelector('.glider-5'), {
      slidesToShow: 1, //'auto',
      slidesToScroll: 1,
      itemWidth: 150,
      draggable: true,
      scrollLock: false,
      dots: '#dots',
      rewind: true,
      arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
      },
      responsive: [
          {
              breakpoint: 800,
              settings: {
                  slidesToScroll: 'auto',
                  itemWidth: 300,
                  slidesToShow: 'auto',
                  exactWidth: true
              }
          },
          {
              breakpoint: 700,
              settings: {
                  slidesToScroll: 4,
                  slidesToShow: 4,
                  dots: false,
                  arrows: false,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToScroll: 3,
                  slidesToShow: 3
              }
          },
          {
              breakpoint: 500,
              settings: {
                  slidesToScroll: 2,
                  slidesToShow: 2,
                  dots: false,
                  arrows: false,
                  scrollLock: true
              }
          }
      ]
  });

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  window._ = new Glider(document.querySelector('.glider-6'), {
      slidesToShow: 1, //'auto',
      slidesToScroll: 1,
      itemWidth: 150,
      draggable: true,
      scrollLock: false,
      dots: '#dots',
      rewind: true,
      arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
      },
      responsive: [
          {
              breakpoint: 800,
              settings: {
                  slidesToScroll: 'auto',
                  itemWidth: 300,
                  slidesToShow: 'auto',
                  exactWidth: true
              }
          },
          {
              breakpoint: 700,
              settings: {
                  slidesToScroll: 4,
                  slidesToShow: 4,
                  dots: false,
                  arrows: false,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToScroll: 3,
                  slidesToShow: 3
              }
          },
          {
              breakpoint: 500,
              settings: {
                  slidesToScroll: 2,
                  slidesToShow: 2,
                  dots: false,
                  arrows: false,
                  scrollLock: true
              }
          }
      ]
  });

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  window._ = new Glider(document.querySelector('.glider-7'), {
      slidesToShow: 1, //'auto',
      slidesToScroll: 1,
      itemWidth: 150,
      draggable: true,
      scrollLock: false,
      dots: '#dots',
      rewind: true,
      arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
      },
      responsive: [
          {
              breakpoint: 800,
              settings: {
                  slidesToScroll: 'auto',
                  itemWidth: 300,
                  slidesToShow: 'auto',
                  exactWidth: true
              }
          },
          {
              breakpoint: 700,
              settings: {
                  slidesToScroll: 4,
                  slidesToShow: 4,
                  dots: false,
                  arrows: false,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToScroll: 3,
                  slidesToShow: 3
              }
          },
          {
              breakpoint: 500,
              settings: {
                  slidesToScroll: 2,
                  slidesToShow: 2,
                  dots: false,
                  arrows: false,
                  scrollLock: true
              }
          }
      ]
  });


  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // top ten slider
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  window._ = new Glider(document.querySelector('.glider-8'), {
      slidesToShow: 1, //'auto',
      slidesToScroll: 1,
      itemWidth: 50,
      draggable: true,
      dragVelocity: 3.3,     // default 3.3
      scrollLock: false,   // set to false to turn off snap to movie
      dots: '#dots',
      rewind: true,
      arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
      },
      responsive: [
          {
              breakpoint: 800,
              settings: {
                  slidesToScroll: 'auto',
                  itemWidth: 300,
                  slidesToShow: 'auto',
                  exactWidth: true
              }
          },
          {
              breakpoint: 700,
              settings: {
                  slidesToScroll: 4,
                  slidesToShow: 4,
                  dots: false,
                  arrows: false,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToScroll: 3,
                  slidesToShow: 3
              }
          },
          {
              breakpoint: 500,
              settings: {
                  slidesToScroll: 2,
                  slidesToShow: 2,
                  dots: false,
                  arrows: false,
                  scrollLock: true
              }
          }
      ]
  });

});
