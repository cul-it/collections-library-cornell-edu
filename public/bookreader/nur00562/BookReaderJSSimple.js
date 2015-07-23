//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 556;
    }
if (index == 1) {
     return 556;
    }
if (index == 2) {
     return 556;
    }
if (index == 3) {
     return 556;
    }
if (index == 4) {
     return 574;
    }
if (index == 5) {
     return 556;
    }
if (index == 6) {
     return 556;
    }
if (index == 7) {
     return 556;
    }
if (index == 8) {
     return 556;
    }
if (index == 9) {
     return 556;
    }
if (index == 10) {
     return 573;
    }
if (index == 11) {
     return 556;
    }
if (index == 12) {
     return 556;
    }
if (index == 13) {
     return 556;
    }
if (index == 14) {
     return 569;
    }
if (index == 15) {
     return 561;
    }
if (index == 16) {
     return 556;
    }
if (index == 17) {
     return 556;
    }
if (index == 18) {
     return 573;
    }
if (index == 19) {
     return 556;
    }
if (index == 20) {
     return 556;
    }
if (index == 21) {
     return 556;
    }
if (index == 22) {
     return 573;
    }
if (index == 23) {
     return 557;
    }
if (index == 24) {
     return 578;
    }
if (index == 25) {
     return 562;
    }
if (index == 26) {
     return 556;
    }
if (index == 27) {
     return 556;
    }
if (index == 28) {
     return 556;
    }
if (index == 29) {
     return 556;
    }
if (index == 30) {
     return 561;
    }
if (index == 31) {
     return 565;
    }
if (index == 32) {
     return 556;
    }
if (index == 33) {
     return 556;
    }
if (index == 34) {
     return 570;
    }
if (index == 35) {
     return 556;
    }
if (index == 36) {
     return 556;
    }
if (index == 37) {
     return 566;
    }
if (index == 38) {
     return 569;
    }
if (index == 39) {
     return 558;
    }
if (index == 40) {
     return 556;
    }
if (index == 41) {
     return 556;
    }
if (index == 42) {
     return 574;
    }
if (index == 43) {
     return 556;
    }
if (index == 44) {
     return 579;
    }
if (index == 45) {
     return 567;
    }
if (index == 46) {
     return 572;
    }
if (index == 47) {
     return 566;
    }
if (index == 48) {
     return 570;
    }
if (index == 49) {
     return 556;
    }
if (index == 50) {
     return 577;
    }
if (index == 51) {
     return 564;
    }
if (index == 52) {
     return 577;
    }
if (index == 53) {
     return 562;
    }
if (index == 54) {
     return 575;
    }
if (index == 55) {
     return 564;
    }
if (index == 56) {
     return 568;
    }
if (index == 57) {
     return 555;
    }
if (index == 58) {
     return 573;
    }
if (index == 59) {
     return 556;
    }
if (index == 60) {
     return 573;
    }
if (index == 61) {
     return 561;
    }
if (index == 62) {
     return 576;
    }
if (index == 63) {
     return 556;
    }
if (index == 64) {
     return 562;
    }
if (index == 65) {
     return 562;
    }
if (index == 66) {
     return 570;
    }
if (index == 67) {
     return 560;
    }
if (index == 68) {
     return 576;
    }
if (index == 69) {
     return 556;
    }
if (index == 70) {
     return 576;
    }
if (index == 71) {
     return 570;
    }
if (index == 72) {
     return 563;
    }
if (index == 73) {
     return 563;
    }
if (index == 74) {
     return 569;
    }
if (index == 75) {
     return 559;
    }
if (index > 75) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 862;
    }
if (index == 1) {
     return 862;
    }
if (index == 2) {
     return 862;
    }
if (index == 3) {
     return 862;
    }
if (index == 4) {
     return 859;
    }
if (index == 5) {
     return 862;
    }
if (index == 6) {
     return 862;
    }
if (index == 7) {
     return 862;
    }
if (index == 8) {
     return 862;
    }
if (index == 9) {
     return 862;
    }
if (index == 10) {
     return 861;
    }
if (index == 11) {
     return 862;
    }
if (index == 12) {
     return 862;
    }
if (index == 13) {
     return 862;
    }
if (index == 14) {
     return 861;
    }
if (index == 15) {
     return 859;
    }
if (index == 16) {
     return 862;
    }
if (index == 17) {
     return 862;
    }
if (index == 18) {
     return 861;
    }
if (index == 19) {
     return 862;
    }
if (index == 20) {
     return 862;
    }
if (index == 21) {
     return 862;
    }
if (index == 22) {
     return 859;
    }
if (index == 23) {
     return 863;
    }
if (index == 24) {
     return 859;
    }
if (index == 25) {
     return 862;
    }
if (index == 26) {
     return 862;
    }
if (index == 27) {
     return 862;
    }
if (index == 28) {
     return 862;
    }
if (index == 29) {
     return 862;
    }
if (index == 30) {
     return 853;
    }
if (index == 31) {
     return 857;
    }
if (index == 32) {
     return 862;
    }
if (index == 33) {
     return 862;
    }
if (index == 34) {
     return 861;
    }
if (index == 35) {
     return 862;
    }
if (index == 36) {
     return 862;
    }
if (index == 37) {
     return 858;
    }
if (index == 38) {
     return 861;
    }
if (index == 39) {
     return 863;
    }
if (index == 40) {
     return 862;
    }
if (index == 41) {
     return 862;
    }
if (index == 42) {
     return 861;
    }
if (index == 43) {
     return 862;
    }
if (index == 44) {
     return 861;
    }
if (index == 45) {
     return 865;
    }
if (index == 46) {
     return 860;
    }
if (index == 47) {
     return 865;
    }
if (index == 48) {
     return 862;
    }
if (index == 49) {
     return 862;
    }
if (index == 50) {
     return 861;
    }
if (index == 51) {
     return 865;
    }
if (index == 52) {
     return 861;
    }
if (index == 53) {
     return 864;
    }
if (index == 54) {
     return 863;
    }
if (index == 55) {
     return 858;
    }
if (index == 56) {
     return 861;
    }
if (index == 57) {
     return 859;
    }
if (index == 58) {
     return 862;
    }
if (index == 59) {
     return 862;
    }
if (index == 60) {
     return 859;
    }
if (index == 61) {
     return 860;
    }
if (index == 62) {
     return 862;
    }
if (index == 63) {
     return 862;
    }
if (index == 64) {
     return 861;
    }
if (index == 65) {
     return 864;
    }
if (index == 66) {
     return 862;
    }
if (index == 67) {
     return 862;
    }
if (index == 68) {
     return 862;
    }
if (index == 69) {
     return 862;
    }
if (index == 70) {
     return 862;
    }
if (index == 71) {
     return 866;
    }
if (index == 72) {
     return 861;
    }
if (index == 73) {
     return 862;
    }
if (index == 74) {
     return 860;
    }
if (index == 75) {
     return 855;
    }
if (index > 75) {
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
    var url = '/fedora/get/nur:00562_' + imgStr + '/digitalImage';
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
br.numLeafs = 76;

// Book title and the URL used for the book title link
br.bookTitle= "Nazi Plans for Dominating Germany and Europe: The Attitude of the NSDAP toward Political Terror.  Office of Strategic Services / Research and Analysis Branch /  R &amp; A 3114.1 / Draft for Use of the War Crimes Staff";
br.bookAuthor= "The author's name is not given.";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, 1945-07-09";
br.bookKeyword= "";
br.bookUrl  = '/nuremberg/catalog/nur:00562';

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
