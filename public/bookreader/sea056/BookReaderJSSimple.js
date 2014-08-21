//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 536;
    }
if (index == 1) {
     return 512;
    }
if (index == 2) {
     return 648;
    }
if (index == 3) {
     return 632;
    }
if (index == 4) {
     return 632;
    }
if (index == 5) {
     return 632;
    }
if (index == 6) {
     return 628;
    }
if (index == 7) {
     return 612;
    }
if (index == 8) {
     return 640;
    }
if (index == 9) {
     return 644;
    }
if (index == 10) {
     return 644;
    }
if (index == 11) {
     return 722;
    }
if (index == 12) {
     return 693;
    }
if (index == 13) {
     return 708;
    }
if (index == 14) {
     return 644;
    }
if (index == 15) {
     return 644;
    }
if (index == 16) {
     return 1203;
    }
if (index == 17) {
     return 624;
    }
if (index == 18) {
     return 632;
    }
if (index == 19) {
     return 632;
    }
if (index == 20) {
     return 628;
    }
if (index == 21) {
     return 628;
    }
if (index == 22) {
     return 632;
    }
if (index == 23) {
     return 632;
    }
if (index == 24) {
     return 632;
    }
if (index == 25) {
     return 632;
    }
if (index == 26) {
     return 632;
    }
if (index == 27) {
     return 632;
    }
if (index == 28) {
     return 632;
    }
if (index == 29) {
     return 632;
    }
if (index == 30) {
     return 632;
    }
if (index == 31) {
     return 632;
    }
if (index == 32) {
     return 632;
    }
if (index == 33) {
     return 632;
    }
if (index == 34) {
     return 632;
    }
if (index == 35) {
     return 632;
    }
if (index == 36) {
     return 632;
    }
if (index == 37) {
     return 632;
    }
if (index == 38) {
     return 632;
    }
if (index == 39) {
     return 632;
    }
if (index == 40) {
     return 632;
    }
if (index == 41) {
     return 632;
    }
if (index == 42) {
     return 632;
    }
if (index == 43) {
     return 632;
    }
if (index == 44) {
     return 632;
    }
if (index == 45) {
     return 632;
    }
if (index == 46) {
     return 632;
    }
if (index == 47) {
     return 632;
    }
if (index == 48) {
     return 632;
    }
if (index == 49) {
     return 632;
    }
if (index == 50) {
     return 632;
    }
if (index == 51) {
     return 632;
    }
if (index == 52) {
     return 632;
    }
if (index == 53) {
     return 632;
    }
if (index == 54) {
     return 632;
    }
if (index == 55) {
     return 632;
    }
if (index == 56) {
     return 632;
    }
if (index == 57) {
     return 632;
    }
if (index == 58) {
     return 632;
    }
if (index == 59) {
     return 632;
    }
if (index == 60) {
     return 648;
    }
if (index == 61) {
     return 648;
    }
if (index == 62) {
     return 648;
    }
if (index == 63) {
     return 648;
    }
if (index == 64) {
     return 648;
    }
if (index == 65) {
     return 648;
    }
if (index == 66) {
     return 648;
    }
if (index == 67) {
     return 648;
    }
if (index == 68) {
     return 648;
    }
if (index == 69) {
     return 648;
    }
if (index == 70) {
     return 648;
    }
if (index == 71) {
     return 648;
    }
if (index == 72) {
     return 648;
    }
if (index == 73) {
     return 624;
    }
if (index == 74) {
     return 620;
    }
if (index == 75) {
     return 620;
    }
if (index == 76) {
     return 620;
    }
if (index == 77) {
     return 588;
    }
if (index == 78) {
     return 588;
    }
if (index == 79) {
     return 588;
    }
if (index == 80) {
     return 616;
    }
if (index == 81) {
     return 616;
    }
if (index == 82) {
     return 616;
    }
if (index == 83) {
     return 616;
    }
if (index == 84) {
     return 616;
    }
if (index == 85) {
     return 616;
    }
if (index == 86) {
     return 616;
    }
if (index == 87) {
     return 616;
    }
if (index == 88) {
     return 616;
    }
if (index == 89) {
     return 616;
    }
if (index == 90) {
     return 616;
    }
if (index == 91) {
     return 616;
    }
if (index == 92) {
     return 616;
    }
if (index == 93) {
     return 616;
    }
if (index == 94) {
     return 616;
    }
if (index == 95) {
     return 616;
    }
if (index == 96) {
     return 616;
    }
if (index == 97) {
     return 670;
    }
if (index > 97) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 960;
    }
if (index == 1) {
     return 864;
    }
if (index == 2) {
     return 856;
    }
if (index == 3) {
     return 1120;
    }
if (index == 4) {
     return 1100;
    }
if (index == 5) {
     return 1100;
    }
if (index == 6) {
     return 900;
    }
if (index == 7) {
     return 1052;
    }
if (index == 8) {
     return 1048;
    }
if (index == 9) {
     return 1076;
    }
if (index == 10) {
     return 1076;
    }
if (index == 11) {
     return 1164;
    }
if (index == 12) {
     return 1160;
    }
if (index == 13) {
     return 1148;
    }
if (index == 14) {
     return 1076;
    }
if (index == 15) {
     return 1076;
    }
if (index == 16) {
     return 941;
    }
if (index == 17) {
     return 892;
    }
if (index == 18) {
     return 1028;
    }
if (index == 19) {
     return 1028;
    }
if (index == 20) {
     return 1048;
    }
if (index == 21) {
     return 1048;
    }
if (index == 22) {
     return 1072;
    }
if (index == 23) {
     return 1072;
    }
if (index == 24) {
     return 1072;
    }
if (index == 25) {
     return 1072;
    }
if (index == 26) {
     return 1072;
    }
if (index == 27) {
     return 1072;
    }
if (index == 28) {
     return 1072;
    }
if (index == 29) {
     return 1072;
    }
if (index == 30) {
     return 1072;
    }
if (index == 31) {
     return 1072;
    }
if (index == 32) {
     return 1072;
    }
if (index == 33) {
     return 1072;
    }
if (index == 34) {
     return 1072;
    }
if (index == 35) {
     return 1072;
    }
if (index == 36) {
     return 1072;
    }
if (index == 37) {
     return 1072;
    }
if (index == 38) {
     return 1072;
    }
if (index == 39) {
     return 1072;
    }
if (index == 40) {
     return 1072;
    }
if (index == 41) {
     return 1072;
    }
if (index == 42) {
     return 1072;
    }
if (index == 43) {
     return 1072;
    }
if (index == 44) {
     return 1072;
    }
if (index == 45) {
     return 1072;
    }
if (index == 46) {
     return 1072;
    }
if (index == 47) {
     return 1072;
    }
if (index == 48) {
     return 1072;
    }
if (index == 49) {
     return 1072;
    }
if (index == 50) {
     return 1072;
    }
if (index == 51) {
     return 1072;
    }
if (index == 52) {
     return 1072;
    }
if (index == 53) {
     return 1072;
    }
if (index == 54) {
     return 1072;
    }
if (index == 55) {
     return 1072;
    }
if (index == 56) {
     return 1072;
    }
if (index == 57) {
     return 1072;
    }
if (index == 58) {
     return 1072;
    }
if (index == 59) {
     return 1072;
    }
if (index == 60) {
     return 1056;
    }
if (index == 61) {
     return 1056;
    }
if (index == 62) {
     return 1056;
    }
if (index == 63) {
     return 1056;
    }
if (index == 64) {
     return 1056;
    }
if (index == 65) {
     return 1056;
    }
if (index == 66) {
     return 1056;
    }
if (index == 67) {
     return 1072;
    }
if (index == 68) {
     return 1072;
    }
if (index == 69) {
     return 1072;
    }
if (index == 70) {
     return 1072;
    }
if (index == 71) {
     return 1072;
    }
if (index == 72) {
     return 1072;
    }
if (index == 73) {
     return 1016;
    }
if (index == 74) {
     return 1056;
    }
if (index == 75) {
     return 1056;
    }
if (index == 76) {
     return 1080;
    }
if (index == 77) {
     return 1084;
    }
if (index == 78) {
     return 1084;
    }
if (index == 79) {
     return 1084;
    }
if (index == 80) {
     return 1072;
    }
if (index == 81) {
     return 1072;
    }
if (index == 82) {
     return 1072;
    }
if (index == 83) {
     return 1072;
    }
if (index == 84) {
     return 1072;
    }
if (index == 85) {
     return 1072;
    }
if (index == 86) {
     return 1072;
    }
if (index == 87) {
     return 1072;
    }
if (index == 88) {
     return 1072;
    }
if (index == 89) {
     return 1072;
    }
if (index == 90) {
     return 1072;
    }
if (index == 91) {
     return 1072;
    }
if (index == 92) {
     return 1072;
    }
if (index == 93) {
     return 1072;
    }
if (index == 94) {
     return 1072;
    }
if (index == 95) {
     return 1072;
    }
if (index == 96) {
     return 1072;
    }
if (index == 97) {
     return 1134;
    }
if (index > 97) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:056_' + imgStr + '/digitalImage';
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
br.numLeafs = 98;

// Book title and the URL used for the book title link
br.bookTitle= "The Chinaman abroad, or, A desultory account of the Malayan archipelago, particularly of Java";
br.bookAuthor= "Wang, Ta-hai";
br.bookPub= "Shanghae: Printed at the Mission Press, 1849";
br.bookKeyword= "Southeast Asia--Description and travel";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:056';

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
