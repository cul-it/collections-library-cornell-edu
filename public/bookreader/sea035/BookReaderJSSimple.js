//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 809;
    }
if (index == 1) {
     return 810;
    }
if (index == 2) {
     return 810;
    }
if (index == 3) {
     return 792;
    }
if (index == 4) {
     return 810;
    }
if (index == 5) {
     return 792;
    }
if (index == 6) {
     return 810;
    }
if (index == 7) {
     return 781;
    }
if (index == 8) {
     return 808;
    }
if (index == 9) {
     return 777;
    }
if (index == 10) {
     return 775;
    }
if (index == 11) {
     return 774;
    }
if (index == 12) {
     return 772;
    }
if (index == 13) {
     return 783;
    }
if (index == 14) {
     return 775;
    }
if (index == 15) {
     return 765;
    }
if (index == 16) {
     return 765;
    }
if (index == 17) {
     return 780;
    }
if (index == 18) {
     return 782;
    }
if (index == 19) {
     return 784;
    }
if (index == 20) {
     return 782;
    }
if (index == 21) {
     return 777;
    }
if (index == 22) {
     return 765;
    }
if (index == 23) {
     return 765;
    }
if (index == 24) {
     return 765;
    }
if (index == 25) {
     return 765;
    }
if (index == 26) {
     return 765;
    }
if (index == 27) {
     return 788;
    }
if (index == 28) {
     return 782;
    }
if (index == 29) {
     return 798;
    }
if (index == 30) {
     return 767;
    }
if (index == 31) {
     return 796;
    }
if (index == 32) {
     return 762;
    }
if (index == 33) {
     return 782;
    }
if (index == 34) {
     return 765;
    }
if (index == 35) {
     return 785;
    }
if (index == 36) {
     return 767;
    }
if (index == 37) {
     return 776;
    }
if (index == 38) {
     return 764;
    }
if (index == 39) {
     return 787;
    }
if (index == 40) {
     return 773;
    }
if (index == 41) {
     return 776;
    }
if (index == 42) {
     return 1226;
    }
if (index == 43) {
     return 784;
    }
if (index == 44) {
     return 756;
    }
if (index == 45) {
     return 776;
    }
if (index == 46) {
     return 770;
    }
if (index == 47) {
     return 787;
    }
if (index == 48) {
     return 765;
    }
if (index == 49) {
     return 768;
    }
if (index == 50) {
     return 756;
    }
if (index == 51) {
     return 765;
    }
if (index == 52) {
     return 1465;
    }
if (index == 53) {
     return 765;
    }
if (index > 53) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1261;
    }
if (index == 1) {
     return 1243;
    }
if (index == 2) {
     return 1261;
    }
if (index == 3) {
     return 1243;
    }
if (index == 4) {
     return 1252;
    }
if (index == 5) {
     return 1243;
    }
if (index == 6) {
     return 1252;
    }
if (index == 7) {
     return 1252;
    }
if (index == 8) {
     return 1262;
    }
if (index == 9) {
     return 1250;
    }
if (index == 10) {
     return 1232;
    }
if (index == 11) {
     return 1248;
    }
if (index == 12) {
     return 1230;
    }
if (index == 13) {
     return 1254;
    }
if (index == 14) {
     return 1232;
    }
if (index == 15) {
     return 1243;
    }
if (index == 16) {
     return 1226;
    }
if (index == 17) {
     return 1252;
    }
if (index == 18) {
     return 1236;
    }
if (index == 19) {
     return 1254;
    }
if (index == 20) {
     return 1236;
    }
if (index == 21) {
     return 1250;
    }
if (index == 22) {
     return 1226;
    }
if (index == 23) {
     return 1243;
    }
if (index == 24) {
     return 1226;
    }
if (index == 25) {
     return 1243;
    }
if (index == 26) {
     return 1226;
    }
if (index == 27) {
     return 1251;
    }
if (index == 28) {
     return 1236;
    }
if (index == 29) {
     return 1263;
    }
if (index == 30) {
     return 1233;
    }
if (index == 31) {
     return 1261;
    }
if (index == 32) {
     return 1229;
    }
if (index == 33) {
     return 1253;
    }
if (index == 34) {
     return 1231;
    }
if (index == 35) {
     return 1255;
    }
if (index == 36) {
     return 1233;
    }
if (index == 37) {
     return 1250;
    }
if (index == 38) {
     return 1231;
    }
if (index == 39) {
     return 1256;
    }
if (index == 40) {
     return 1236;
    }
if (index == 41) {
     return 1250;
    }
if (index == 42) {
     return 756;
    }
if (index == 43) {
     return 1254;
    }
if (index == 44) {
     return 1226;
    }
if (index == 45) {
     return 1250;
    }
if (index == 46) {
     return 1235;
    }
if (index == 47) {
     return 1256;
    }
if (index == 48) {
     return 1231;
    }
if (index == 49) {
     return 1244;
    }
if (index == 50) {
     return 1226;
    }
if (index == 51) {
     return 1243;
    }
if (index == 52) {
     return 1248;
    }
if (index == 53) {
     return 1244;
    }
if (index > 53) {
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
    var url = '/fedora/get/seapage:035_' + imgStr + '/digitalImage';
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
br.numLeafs = 54;

// Book title and the URL used for the book title link
br.bookTitle= "Notes on the Lung Chow T'ing, Langson and Caobang";
br.bookAuthor= "Bos, C.";
br.bookPub= "none recorded: S.1, 1909";
br.bookKeyword= "Tea--Chin";
br.bookUrl  = '/catalog/sea:035';

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
