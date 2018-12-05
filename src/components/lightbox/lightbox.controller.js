import photo1 from './images/adam-jaime-119568-unsplash.jpg';
import photo2 from './images/benjamin-sow-774817-unsplash.jpg';
import photo3 from './images/charles-koh-550122-unsplash.jpg';
import photo4 from './images/christine-siracusa-363257-unsplash.jpg';
import photo5 from './images/marie-france-latour-458412-unsplash.jpg';
import photo6 from './images/rawpixel-256640-unsplash.jpg';
import photo7 from './images/tae-in-kim-13629-unsplash.jpg';

import imagesLoaded from 'imagesloaded';
import Masonry from 'masonry-layout';

class lightboxController {
  constructor($scope){
    this.exibir = false;
    this.currentIndex = 1;
    this.photos = [
      photo1,
      photo3,
      photo2,
      photo4,
      photo5,
      photo6,
    ];

    var carregarMasonry = carregarLibraryMsnryLoad;

    $scope.$on('LastRepeaterElement', carregarMasonry);    

    function carregarLibraryMsnryLoad() {
      var msnry = new Masonry('.grid', {
        itemSelector: '.grid-item',
        columnWidth: 200,
      });
      
      imagesLoaded('.grid', function(){
        msnry.layout();
      });
    }
  }


  clickOpenImg(index){

    this.currentIndex = index;

    if(index > (this.photos.length-1)) { this.currentIndex = 0 };
    if(index < 0) { this.currentIndex = this.photos.length-1 };

    this.exibir = true;
    this.imageSrc = this.photos[this.currentIndex];
  }


  clickCloseImg(){
    this.exibir = false;
  }


  plusSlides(n){
    this.clickOpenImg(this.currentIndex += n);
  }

}

lightboxController.$inject = ['$scope'];

export default lightboxController;
