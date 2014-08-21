//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 708;
    }
if (index == 1) {
     return 596;
    }
if (index == 2) {
     return 590;
    }
if (index == 3) {
     return 591;
    }
if (index == 4) {
     return 591;
    }
if (index == 5) {
     return 945;
    }
if (index == 6) {
     return 609;
    }
if (index == 7) {
     return 578;
    }
if (index == 8) {
     return 597;
    }
if (index == 9) {
     return 597;
    }
if (index == 10) {
     return 596;
    }
if (index == 11) {
     return 591;
    }
if (index == 12) {
     return 595;
    }
if (index == 13) {
     return 594;
    }
if (index == 14) {
     return 596;
    }
if (index == 15) {
     return 592;
    }
if (index == 16) {
     return 608;
    }
if (index == 17) {
     return 591;
    }
if (index == 18) {
     return 572;
    }
if (index == 19) {
     return 585;
    }
if (index == 20) {
     return 581;
    }
if (index == 21) {
     return 586;
    }
if (index == 22) {
     return 571;
    }
if (index == 23) {
     return 584;
    }
if (index == 24) {
     return 560;
    }
if (index == 25) {
     return 584;
    }
if (index == 26) {
     return 562;
    }
if (index == 27) {
     return 596;
    }
if (index == 28) {
     return 583;
    }
if (index == 29) {
     return 569;
    }
if (index == 30) {
     return 572;
    }
if (index == 31) {
     return 585;
    }
if (index == 32) {
     return 571;
    }
if (index == 33) {
     return 578;
    }
if (index == 34) {
     return 572;
    }
if (index == 35) {
     return 594;
    }
if (index == 36) {
     return 568;
    }
if (index == 37) {
     return 582;
    }
if (index == 38) {
     return 565;
    }
if (index == 39) {
     return 592;
    }
if (index == 40) {
     return 577;
    }
if (index == 41) {
     return 566;
    }
if (index == 42) {
     return 566;
    }
if (index == 43) {
     return 584;
    }
if (index == 44) {
     return 589;
    }
if (index == 45) {
     return 591;
    }
if (index == 46) {
     return 553;
    }
if (index == 47) {
     return 596;
    }
if (index == 48) {
     return 553;
    }
if (index == 49) {
     return 589;
    }
if (index == 50) {
     return 565;
    }
if (index == 51) {
     return 596;
    }
if (index == 52) {
     return 583;
    }
if (index == 53) {
     return 586;
    }
if (index == 54) {
     return 562;
    }
if (index == 55) {
     return 589;
    }
if (index == 56) {
     return 557;
    }
if (index == 57) {
     return 595;
    }
if (index == 58) {
     return 581;
    }
if (index == 59) {
     return 592;
    }
if (index == 60) {
     return 571;
    }
if (index == 61) {
     return 582;
    }
if (index == 62) {
     return 569;
    }
if (index == 63) {
     return 589;
    }
if (index == 64) {
     return 563;
    }
if (index == 65) {
     return 608;
    }
if (index == 66) {
     return 569;
    }
if (index == 67) {
     return 604;
    }
if (index == 68) {
     return 569;
    }
if (index == 69) {
     return 594;
    }
if (index == 70) {
     return 566;
    }
if (index == 71) {
     return 583;
    }
if (index == 72) {
     return 563;
    }
if (index == 73) {
     return 595;
    }
if (index == 74) {
     return 558;
    }
if (index == 75) {
     return 599;
    }
if (index == 76) {
     return 578;
    }
if (index == 77) {
     return 563;
    }
if (index == 78) {
     return 561;
    }
if (index == 79) {
     return 567;
    }
if (index == 80) {
     return 560;
    }
if (index == 81) {
     return 578;
    }
if (index == 82) {
     return 550;
    }
if (index == 83) {
     return 578;
    }
if (index == 84) {
     return 556;
    }
if (index == 85) {
     return 573;
    }
if (index == 86) {
     return 560;
    }
if (index == 87) {
     return 584;
    }
if (index == 88) {
     return 559;
    }
if (index == 89) {
     return 587;
    }
if (index == 90) {
     return 566;
    }
if (index == 91) {
     return 565;
    }
if (index == 92) {
     return 585;
    }
if (index == 93) {
     return 613;
    }
if (index == 94) {
     return 647;
    }
if (index == 95) {
     return 1260;
    }
if (index == 96) {
     return 1788;
    }
if (index == 97) {
     return 712;
    }
if (index > 97) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1017;
    }
if (index == 1) {
     return 933;
    }
if (index == 2) {
     return 993;
    }
if (index == 3) {
     return 935;
    }
if (index == 4) {
     return 935;
    }
if (index == 5) {
     return 597;
    }
if (index == 6) {
     return 954;
    }
if (index == 7) {
     return 943;
    }
if (index == 8) {
     return 976;
    }
if (index == 9) {
     return 945;
    }
if (index == 10) {
     return 970;
    }
if (index == 11) {
     return 947;
    }
if (index == 12) {
     return 967;
    }
if (index == 13) {
     return 938;
    }
if (index == 14) {
     return 944;
    }
if (index == 15) {
     return 939;
    }
if (index == 16) {
     return 940;
    }
if (index == 17) {
     return 935;
    }
if (index == 18) {
     return 929;
    }
if (index == 19) {
     return 942;
    }
if (index == 20) {
     return 929;
    }
if (index == 21) {
     return 937;
    }
if (index == 22) {
     return 927;
    }
if (index == 23) {
     return 938;
    }
if (index == 24) {
     return 929;
    }
if (index == 25) {
     return 938;
    }
if (index == 26) {
     return 929;
    }
if (index == 27) {
     return 946;
    }
if (index == 28) {
     return 927;
    }
if (index == 29) {
     return 938;
    }
if (index == 30) {
     return 929;
    }
if (index == 31) {
     return 935;
    }
if (index == 32) {
     return 929;
    }
if (index == 33) {
     return 938;
    }
if (index == 34) {
     return 929;
    }
if (index == 35) {
     return 932;
    }
if (index == 36) {
     return 927;
    }
if (index == 37) {
     return 929;
    }
if (index == 38) {
     return 926;
    }
if (index == 39) {
     return 945;
    }
if (index == 40) {
     return 929;
    }
if (index == 41) {
     return 927;
    }
if (index == 42) {
     return 924;
    }
if (index == 43) {
     return 930;
    }
if (index == 44) {
     return 921;
    }
if (index == 45) {
     return 938;
    }
if (index == 46) {
     return 929;
    }
if (index == 47) {
     return 951;
    }
if (index == 48) {
     return 929;
    }
if (index == 49) {
     return 942;
    }
if (index == 50) {
     return 929;
    }
if (index == 51) {
     return 945;
    }
if (index == 52) {
     return 929;
    }
if (index == 53) {
     return 935;
    }
if (index == 54) {
     return 929;
    }
if (index == 55) {
     return 942;
    }
if (index == 56) {
     return 929;
    }
if (index == 57) {
     return 934;
    }
if (index == 58) {
     return 929;
    }
if (index == 59) {
     return 936;
    }
if (index == 60) {
     return 929;
    }
if (index == 61) {
     return 936;
    }
if (index == 62) {
     return 927;
    }
if (index == 63) {
     return 949;
    }
if (index == 64) {
     return 929;
    }
if (index == 65) {
     return 955;
    }
if (index == 66) {
     return 921;
    }
if (index == 67) {
     return 949;
    }
if (index == 68) {
     return 929;
    }
if (index == 69) {
     return 944;
    }
if (index == 70) {
     return 929;
    }
if (index == 71) {
     return 943;
    }
if (index == 72) {
     return 929;
    }
if (index == 73) {
     return 948;
    }
if (index == 74) {
     return 926;
    }
if (index == 75) {
     return 951;
    }
if (index == 76) {
     return 929;
    }
if (index == 77) {
     return 938;
    }
if (index == 78) {
     return 929;
    }
if (index == 79) {
     return 936;
    }
if (index == 80) {
     return 929;
    }
if (index == 81) {
     return 938;
    }
if (index == 82) {
     return 929;
    }
if (index == 83) {
     return 936;
    }
if (index == 84) {
     return 929;
    }
if (index == 85) {
     return 936;
    }
if (index == 86) {
     return 929;
    }
if (index == 87) {
     return 947;
    }
if (index == 88) {
     return 929;
    }
if (index == 89) {
     return 953;
    }
if (index == 90) {
     return 923;
    }
if (index == 91) {
     return 938;
    }
if (index == 92) {
     return 929;
    }
if (index == 93) {
     return 958;
    }
if (index == 94) {
     return 1006;
    }
if (index == 95) {
     return 1508;
    }
if (index == 96) {
     return 1305;
    }
if (index == 97) {
     return 1018;
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:143_' + imgStr + '/digitalImage';
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
br.bookTitle= "Illustrated guide to East Java";
br.bookAuthor= "Plante Febure, J. M";
br.bookPub= "Weltevreden, Batavia: Vereeniging Toeristenverkeer, 1910";
br.bookKeyword= "Jawa Timur (Indonesia)--Guidebooks";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:143';

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
