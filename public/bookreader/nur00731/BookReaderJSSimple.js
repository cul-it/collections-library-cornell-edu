//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 672;
    }
if (index == 1) {
     return 649;
    }
if (index == 2) {
     return 659;
    }
if (index == 3) {
     return 649;
    }
if (index == 4) {
     return 649;
    }
if (index == 5) {
     return 678;
    }
if (index == 6) {
     return 655;
    }
if (index == 7) {
     return 667;
    }
if (index == 8) {
     return 667;
    }
if (index == 9) {
     return 672;
    }
if (index == 10) {
     return 651;
    }
if (index == 11) {
     return 663;
    }
if (index == 12) {
     return 652;
    }
if (index == 13) {
     return 671;
    }
if (index == 14) {
     return 649;
    }
if (index == 15) {
     return 667;
    }
if (index == 16) {
     return 653;
    }
if (index == 17) {
     return 664;
    }
if (index == 18) {
     return 649;
    }
if (index == 19) {
     return 655;
    }
if (index == 20) {
     return 649;
    }
if (index == 21) {
     return 668;
    }
if (index == 22) {
     return 651;
    }
if (index == 23) {
     return 649;
    }
if (index == 24) {
     return 649;
    }
if (index == 25) {
     return 663;
    }
if (index == 26) {
     return 651;
    }
if (index == 27) {
     return 677;
    }
if (index == 28) {
     return 653;
    }
if (index == 29) {
     return 658;
    }
if (index == 30) {
     return 663;
    }
if (index == 31) {
     return 654;
    }
if (index == 32) {
     return 656;
    }
if (index == 33) {
     return 667;
    }
if (index == 34) {
     return 651;
    }
if (index == 35) {
     return 676;
    }
if (index == 36) {
     return 653;
    }
if (index == 37) {
     return 664;
    }
if (index == 38) {
     return 651;
    }
if (index == 39) {
     return 655;
    }
if (index == 40) {
     return 659;
    }
if (index == 41) {
     return 664;
    }
if (index == 42) {
     return 665;
    }
if (index == 43) {
     return 658;
    }
if (index == 44) {
     return 649;
    }
if (index == 45) {
     return 665;
    }
if (index == 46) {
     return 659;
    }
if (index == 47) {
     return 666;
    }
if (index == 48) {
     return 653;
    }
if (index == 49) {
     return 658;
    }
if (index == 50) {
     return 655;
    }
if (index == 51) {
     return 649;
    }
if (index == 52) {
     return 649;
    }
if (index == 53) {
     return 653;
    }
if (index == 54) {
     return 649;
    }
if (index == 55) {
     return 665;
    }
if (index > 55) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1025;
    }
if (index == 1) {
     return 1010;
    }
if (index == 2) {
     return 1017;
    }
if (index == 3) {
     return 1010;
    }
if (index == 4) {
     return 1010;
    }
if (index == 5) {
     return 1029;
    }
if (index == 6) {
     return 1014;
    }
if (index == 7) {
     return 1022;
    }
if (index == 8) {
     return 1022;
    }
if (index == 9) {
     return 1025;
    }
if (index == 10) {
     return 1012;
    }
if (index == 11) {
     return 1020;
    }
if (index == 12) {
     return 1012;
    }
if (index == 13) {
     return 1025;
    }
if (index == 14) {
     return 1010;
    }
if (index == 15) {
     return 1022;
    }
if (index == 16) {
     return 1013;
    }
if (index == 17) {
     return 1020;
    }
if (index == 18) {
     return 1010;
    }
if (index == 19) {
     return 1014;
    }
if (index == 20) {
     return 1010;
    }
if (index == 21) {
     return 1023;
    }
if (index == 22) {
     return 1012;
    }
if (index == 23) {
     return 1010;
    }
if (index == 24) {
     return 1010;
    }
if (index == 25) {
     return 1019;
    }
if (index == 26) {
     return 1012;
    }
if (index == 27) {
     return 1028;
    }
if (index == 28) {
     return 1013;
    }
if (index == 29) {
     return 1016;
    }
if (index == 30) {
     return 1020;
    }
if (index == 31) {
     return 1013;
    }
if (index == 32) {
     return 1015;
    }
if (index == 33) {
     return 1022;
    }
if (index == 34) {
     return 1012;
    }
if (index == 35) {
     return 1028;
    }
if (index == 36) {
     return 1013;
    }
if (index == 37) {
     return 1020;
    }
if (index == 38) {
     return 1011;
    }
if (index == 39) {
     return 1014;
    }
if (index == 40) {
     return 1017;
    }
if (index == 41) {
     return 1020;
    }
if (index == 42) {
     return 1021;
    }
if (index == 43) {
     return 1034;
    }
if (index == 44) {
     return 1028;
    }
if (index == 45) {
     return 1038;
    }
if (index == 46) {
     return 1035;
    }
if (index == 47) {
     return 1038;
    }
if (index == 48) {
     return 1031;
    }
if (index == 49) {
     return 1034;
    }
if (index == 50) {
     return 1032;
    }
if (index == 51) {
     return 1028;
    }
if (index == 52) {
     return 1028;
    }
if (index == 53) {
     return 1030;
    }
if (index == 54) {
     return 1028;
    }
if (index == 55) {
     return 1038;
    }
if (index > 55) {
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
    var url = '/fedora/get/nur:00731_' + imgStr + '/digitalImage';
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
br.numLeafs = 56;

// Book title and the URL used for the book title link
br.bookTitle= "War Crimes and Crimes Against Humanity / Part III / Common Plan and Conspiracy in / The Establishment of Concentration Camps ";
br.bookAuthor= "Nicholas R. Doman, 1st Lt.; Edgar G. Boedeker, Captain";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, Not dated";
br.bookKeyword= "";
br.bookUrl  = '/nuremberg/catalog/nur:00731';

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
