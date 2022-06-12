const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];


const newVue = new Vue({
    el: "#app",

    data: {
        slidesObjects: slides,
        currentImage: 1,
        imageSlider: "img/01.jpg",
    },
    methods: {
        clickedPrevious() {
            console.log('clicked previous');
            if(this.currentImage <= 1) {
                this.currentImage = 6;
            }
            this.currentImage--;
            this.imageSlider = `img/0${this.currentImage}.jpg`;
        },

        clickedNext() {
            console.log('clicked next');
            if(this.currentImage >= 5) {
                this.currentImage = 0;
            }
            this.currentImage++;
            this.imageSlider = `img/0${this.currentImage}.jpg`;

            
        }
    },

});

console.log(slides);