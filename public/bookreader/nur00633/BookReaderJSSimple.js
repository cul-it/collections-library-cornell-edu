//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 631;
    }
if (index == 1) {
     return 631;
    }
if (index == 2) {
     return 631;
    }
if (index == 3) {
     return 649;
    }
if (index == 4) {
     return 635;
    }
if (index == 5) {
     return 637;
    }
if (index == 6) {
     return 643;
    }
if (index == 7) {
     return 645;
    }
if (index == 8) {
     return 639;
    }
if (index == 9) {
     return 647;
    }
if (index == 10) {
     return 641;
    }
if (index == 11) {
     return 651;
    }
if (index == 12) {
     return 636;
    }
if (index == 13) {
     return 641;
    }
if (index == 14) {
     return 634;
    }
if (index == 15) {
     return 644;
    }
if (index == 16) {
     return 631;
    }
if (index == 17) {
     return 651;
    }
if (index == 18) {
     return 637;
    }
if (index == 19) {
     return 650;
    }
if (index == 20) {
     return 637;
    }
if (index == 21) {
     return 650;
    }
if (index == 22) {
     return 638;
    }
if (index == 23) {
     return 672;
    }
if (index == 24) {
     return 634;
    }
if (index == 25) {
     return 652;
    }
if (index == 26) {
     return 637;
    }
if (index == 27) {
     return 646;
    }
if (index == 28) {
     return 633;
    }
if (index == 29) {
     return 631;
    }
if (index == 30) {
     return 631;
    }
if (index == 31) {
     return 649;
    }
if (index == 32) {
     return 635;
    }
if (index == 33) {
     return 648;
    }
if (index == 34) {
     return 639;
    }
if (index == 35) {
     return 651;
    }
if (index == 36) {
     return 633;
    }
if (index == 37) {
     return 639;
    }
if (index == 38) {
     return 642;
    }
if (index == 39) {
     return 644;
    }
if (index == 40) {
     return 637;
    }
if (index == 41) {
     return 643;
    }
if (index == 42) {
     return 636;
    }
if (index == 43) {
     return 631;
    }
if (index == 44) {
     return 593;
    }
if (index == 45) {
     return 621;
    }
if (index == 46) {
     return 597;
    }
if (index == 47) {
     return 619;
    }
if (index == 48) {
     return 590;
    }
if (index == 49) {
     return 609;
    }
if (index == 50) {
     return 587;
    }
if (index == 51) {
     return 639;
    }
if (index == 52) {
     return 599;
    }
if (index == 53) {
     return 609;
    }
if (index == 54) {
     return 592;
    }
if (index == 55) {
     return 641;
    }
if (index == 56) {
     return 596;
    }
if (index == 57) {
     return 625;
    }
if (index == 58) {
     return 598;
    }
if (index == 59) {
     return 615;
    }
if (index == 60) {
     return 599;
    }
if (index == 61) {
     return 618;
    }
if (index == 62) {
     return 591;
    }
if (index == 63) {
     return 616;
    }
if (index == 64) {
     return 589;
    }
if (index > 64) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 871;
    }
if (index == 1) {
     return 871;
    }
if (index == 2) {
     return 871;
    }
if (index == 3) {
     return 855;
    }
if (index == 4) {
     return 873;
    }
if (index == 5) {
     return 875;
    }
if (index == 6) {
     return 879;
    }
if (index == 7) {
     return 862;
    }
if (index == 8) {
     return 861;
    }
if (index == 9) {
     return 864;
    }
if (index == 10) {
     return 860;
    }
if (index == 11) {
     return 854;
    }
if (index == 12) {
     return 865;
    }
if (index == 13) {
     return 858;
    }
if (index == 14) {
     return 873;
    }
if (index == 15) {
     return 859;
    }
if (index == 16) {
     return 860;
    }
if (index == 17) {
     return 854;
    }
if (index == 18) {
     return 859;
    }
if (index == 19) {
     return 858;
    }
if (index == 20) {
     return 862;
    }
if (index == 21) {
     return 854;
    }
if (index == 22) {
     return 859;
    }
if (index == 23) {
     return 835;
    }
if (index == 24) {
     return 873;
    }
if (index == 25) {
     return 853;
    }
if (index == 26) {
     return 860;
    }
if (index == 27) {
     return 854;
    }
if (index == 28) {
     return 864;
    }
if (index == 29) {
     return 857;
    }
if (index == 30) {
     return 861;
    }
if (index == 31) {
     return 856;
    }
if (index == 32) {
     return 864;
    }
if (index == 33) {
     return 853;
    }
if (index == 34) {
     return 867;
    }
if (index == 35) {
     return 852;
    }
if (index == 36) {
     return 865;
    }
if (index == 37) {
     return 867;
    }
if (index == 38) {
     return 862;
    }
if (index == 39) {
     return 861;
    }
if (index == 40) {
     return 867;
    }
if (index == 41) {
     return 858;
    }
if (index == 42) {
     return 863;
    }
if (index == 43) {
     return 851;
    }
if (index == 44) {
     return 866;
    }
if (index == 45) {
     return 861;
    }
if (index == 46) {
     return 859;
    }
if (index == 47) {
     return 860;
    }
if (index == 48) {
     return 867;
    }
if (index == 49) {
     return 870;
    }
if (index == 50) {
     return 870;
    }
if (index == 51) {
     return 851;
    }
if (index == 52) {
     return 855;
    }
if (index == 53) {
     return 870;
    }
if (index == 54) {
     return 874;
    }
if (index == 55) {
     return 865;
    }
if (index == 56) {
     return 862;
    }
if (index == 57) {
     return 857;
    }
if (index == 58) {
     return 860;
    }
if (index == 59) {
     return 859;
    }
if (index == 60) {
     return 866;
    }
if (index == 61) {
     return 860;
    }
if (index == 62) {
     return 869;
    }
if (index == 63) {
     return 861;
    }
if (index == 64) {
     return 864;
    }
if (index > 64) {
    return 1200;
    }
}

// We load the images from archive.org -- you can modify this function to retrieve images
// using a different URL structure
br.getPageURI = function(index, reduce, rotate) {
    // reduce and rotate are ignored in this simple implementation, but we
    // could e.g. look at reduce and load images from a different directory
    // or pass the information to an image server
    var imgStr = (index+1).toString();
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/nur:00633_' + imgStr + '/digitalImage';
    return url;
}

// Return which side, left or right, that a given page should be displayed on
br.getPageSide = function(index) {
    if (0 == (index & 0x1)) {
        return 'R';
    } else {
        return 'L';
    }
}

// This function returns the left and right indices for the user-visible
// spread that contains the given index.  The return values may be
// null if there is no facing page or the index is invalid.
br.getSpreadIndices = function(pindex) {
    var spreadIndices = [null, null];
    if ('rl' == this.pageProgression) {
        // Right to Left
        if (this.getPageSide(pindex) == 'R') {
            spreadIndices[1] = pindex;
            spreadIndices[0] = pindex + 1;
        } else {
            // Given index was LHS
            spreadIndices[0] = pindex;
            spreadIndices[1] = pindex - 1;
        }
    } else {
        // Left to right
        if (this.getPageSide(pindex) == 'L') {
            spreadIndices[0] = pindex;
            spreadIndices[1] = pindex + 1;
        } else {
            // Given index was RHS
            spreadIndices[1] = pindex;
            spreadIndices[0] = pindex - 1;
        }
    }
    
    return spreadIndices;
}

// For a given "accessible page index" return the page number in the book.
//
// For example, index 5 might correspond to "Page 1" if there is front matter such
// as a title page and table of contents.
br.getPageNum = function(index) {
    return index+1;
}

// Total number of leafs
br.numLeafs = 65;

// Book title and the URL used for the book title link
br.bookTitle= "Introduction  [The German Army]";
br.bookAuthor= "Walther von Brauchitsch; Erich von Manstein; Franz Haider; Walter Warlimont; Siegfried Westphal";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, 1945-11-19";
br.bookKeyword= "Versailles Treaty; Weimar Constitution; Munich Putsch; NSDAP; Hinhaltender Widerstand (drawn-out resistance); Black Reichswehr; League of Nations; SA; SS; OKW; Sudeten question; Polish Campaign; Sea-lion; Reconstruction East; Occupied Territories; Partisan warfare; Hostages; Russian Campaign; Balkan Campaign; French Campaign; Norwegian Campaign; Frontier defense; Hague Convention";
br.bookUrl  = '/nuremberg/catalog/nur:00633';

// Override the path used to find UI images
br.imagesBaseURL = '../BookReader/images/';

br.getEmbedCode = function(frameWidth, frameHeight, viewParams) {
    return "Embed code not supported in bookreader demo.";
}

// Let's go!
br.init();

// read-aloud and search need backend compenents and are not supported in the demo
$('#BRtoolbar').find('.read').hide();
$('#textSrch').hide();
$('#btnSrch').hide();
