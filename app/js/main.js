/**
 * Created by анна on 25.10.2016.
 */
// pre-browserify.js
$(document).ready(function() {

    var owl = $("#owl-demo");

    owl.owlCarousel({

        itemsCustom : [
            [0, 1],
            [450, 1],
            [600, 2],
            [700, 4],
            [1000, 4],
        ],
        navigation : true

    });
    var owl1 = $("#owl-demo1");

    owl1.owlCarousel({

        itemsCustom : [
            [0, 1],
            [450, 1],
            [600, 2],
            [700, 4],
            [1000, 4],
        ],
        navigation : true

    });
    var owl2 = $("#owl-demo2");

    owl2.owlCarousel({

        itemsCustom : [
            [0, 1],
            [450, 1],
            [600, 2],
            [700, 4],
            [1000, 4],
        ],
        navigation : true

    });
});