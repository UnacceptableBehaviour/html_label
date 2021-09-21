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
  // text cards
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  window._ = new Glider(document.querySelector('#recipe-titles'), {
      slidesToShow: 6, //'auto',
      slidesToScroll: 1,
      itemWidth: 300,
      draggable: true,
      scrollLock: false,
      dots: '#dots',
      rewind: true,
      arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
      },
      //responsive: [
      //    {
      //        breakpoint: 800,
      //        settings: {
      //            slidesToScroll: 'auto',
      //            itemWidth: 300,
      //            slidesToShow: 'auto',
      //            exactWidth: true
      //        }
      //    },
      //    {
      //        breakpoint: 700,
      //        settings: {
      //            slidesToScroll: 4,
      //            slidesToShow: 4,
      //            dots: false,
      //            arrows: false,
      //        }
      //    },
      //    {
      //        breakpoint: 600,
      //        settings: {
      //            slidesToScroll: 3,
      //            slidesToShow: 3
      //        }
      //    },
      //    {
      //        breakpoint: 500,
      //        settings: {
      //            slidesToScroll: 2,
      //            slidesToShow: 2,
      //            dots: false,
      //            arrows: false,
      //            scrollLock: true
      //        }
      //    }
      //]
  });

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  window._ = new Glider(document.querySelector('#sushi-g'), {
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
  window._ = new Glider(document.querySelector('#bread-g'), {
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
  window._ = new Glider(document.querySelector('#comfort-g'), {
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
  window._ = new Glider(document.querySelector('#cheese-g'), {
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
  window._ = new Glider(document.querySelector('#make_sroll-g'), {
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
  window._ = new Glider(document.querySelector('#sweet-g'), {
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
  window._ = new Glider(document.querySelector('#movies-g'), {
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

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // top ten slider 2
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  window._ = new Glider(document.querySelector('#movies-g2'), {
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

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //window._ = new Glider(document.querySelector('.glider'), {homegrown-g
  window._ = new Glider(document.querySelector('#homegrown-g'), {
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

});
