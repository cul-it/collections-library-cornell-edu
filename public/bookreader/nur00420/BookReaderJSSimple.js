//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 640;
    }
if (index == 1) {
     return 635;
    }
if (index == 2) {
     return 639;
    }
if (index == 3) {
     return 638;
    }
if (index == 4) {
     return 629;
    }
if (index == 5) {
     return 634;
    }
if (index == 6) {
     return 640;
    }
if (index == 7) {
     return 627;
    }
if (index == 8) {
     return 639;
    }
if (index == 9) {
     return 635;
    }
if (index == 10) {
     return 627;
    }
if (index == 11) {
     return 627;
    }
if (index == 12) {
     return 627;
    }
if (index == 13) {
     return 632;
    }
if (index == 14) {
     return 635;
    }
if (index == 15) {
     return 640;
    }
if (index == 16) {
     return 627;
    }
if (index == 17) {
     return 629;
    }
if (index == 18) {
     return 628;
    }
if (index == 19) {
     return 627;
    }
if (index == 20) {
     return 633;
    }
if (index == 21) {
     return 634;
    }
if (index == 22) {
     return 633;
    }
if (index == 23) {
     return 641;
    }
if (index == 24) {
     return 640;
    }
if (index == 25) {
     return 627;
    }
if (index == 26) {
     return 636;
    }
if (index == 27) {
     return 627;
    }
if (index == 28) {
     return 627;
    }
if (index == 29) {
     return 634;
    }
if (index == 30) {
     return 627;
    }
if (index == 31) {
     return 631;
    }
if (index == 32) {
     return 631;
    }
if (index == 33) {
     return 628;
    }
if (index == 34) {
     return 630;
    }
if (index == 35) {
     return 627;
    }
if (index == 36) {
     return 632;
    }
if (index == 37) {
     return 636;
    }
if (index == 38) {
     return 631;
    }
if (index == 39) {
     return 627;
    }
if (index == 40) {
     return 637;
    }
if (index > 40) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 871;
    }
if (index == 1) {
     return 868;
    }
if (index == 2) {
     return 871;
    }
if (index == 3) {
     return 850;
    }
if (index == 4) {
     return 863;
    }
if (index == 5) {
     return 855;
    }
if (index == 6) {
     return 871;
    }
if (index == 7) {
     return 862;
    }
if (index == 8) {
     return 871;
    }
if (index == 9) {
     return 867;
    }
if (index == 10) {
     return 862;
    }
if (index == 11) {
     return 862;
    }
if (index == 12) {
     return 862;
    }
if (index == 13) {
     return 865;
    }
if (index == 14) {
     return 868;
    }
if (index == 15) {
     return 853;
    }
if (index == 16) {
     return 862;
    }
if (index == 17) {
     return 863;
    }
if (index == 18) {
     return 863;
    }
if (index == 19) {
     return 862;
    }
if (index == 20) {
     return 866;
    }
if (index == 21) {
     return 867;
    }
if (index == 22) {
     return 867;
    }
if (index == 23) {
     return 872;
    }
if (index == 24) {
     return 872;
    }
if (index == 25) {
     return 862;
    }
if (index == 26) {
     return 868;
    }
if (index == 27) {
     return 862;
    }
if (index == 28) {
     return 862;
    }
if (index == 29) {
     return 867;
    }
if (index == 30) {
     return 862;
    }
if (index == 31) {
     return 864;
    }
if (index == 32) {
     return 864;
    }
if (index == 33) {
     return 863;
    }
if (index == 34) {
     return 864;
    }
if (index == 35) {
     return 860;
    }
if (index == 36) {
     return 862;
    }
if (index == 37) {
     return 868;
    }
if (index == 38) {
     return 865;
    }
if (index == 39) {
     return 862;
    }
if (index == 40) {
     return 858;
    }
if (index > 40) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/nur:00420_' + imgStr + '/digitalImage';
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
br.numLeafs = 41;

// Book title and the URL used for the book title link
br.bookTitle= "R &amp; A No. 3092: Nazi Changes in the Field of Family  and Inheritance Law  / Office of Strategic Services / Research and Analysis  Branch / CONFIDENTIAL";
br.bookAuthor= "The author's name is not given.";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, 1945-07-16";
br.bookKeyword= "Family law; Betrothal; Marriage; Divorce; Adoption;  Inheritance; German blood; Dowry; Jews; Farm inheritance";
br.bookUrl  = '/nuremberg/catalog/nur:00420';

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
