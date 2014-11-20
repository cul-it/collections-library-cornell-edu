//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 526;
    }
if (index == 1) {
     return 522;
    }
if (index == 2) {
     return 490;
    }
if (index == 3) {
     return 490;
    }
if (index == 4) {
     return 475;
    }
if (index == 5) {
     return 514;
    }
if (index == 6) {
     return 487;
    }
if (index == 7) {
     return 501;
    }
if (index == 8) {
     return 474;
    }
if (index == 9) {
     return 514;
    }
if (index == 10) {
     return 474;
    }
if (index == 11) {
     return 489;
    }
if (index == 12) {
     return 439;
    }
if (index == 13) {
     return 503;
    }
if (index == 14) {
     return 523;
    }
if (index == 15) {
     return 494;
    }
if (index == 16) {
     return 501;
    }
if (index == 17) {
     return 507;
    }
if (index == 18) {
     return 487;
    }
if (index == 19) {
     return 537;
    }
if (index == 20) {
     return 491;
    }
if (index == 21) {
     return 487;
    }
if (index == 22) {
     return 507;
    }
if (index == 23) {
     return 490;
    }
if (index == 24) {
     return 485;
    }
if (index == 25) {
     return 519;
    }
if (index == 26) {
     return 493;
    }
if (index == 27) {
     return 1042;
    }
if (index == 28) {
     return 549;
    }
if (index == 29) {
     return 858;
    }
if (index == 30) {
     return 493;
    }
if (index == 31) {
     return 488;
    }
if (index == 32) {
     return 566;
    }
if (index == 33) {
     return 568;
    }
if (index == 34) {
     return 502;
    }
if (index == 35) {
     return 501;
    }
if (index == 36) {
     return 512;
    }
if (index == 37) {
     return 526;
    }
if (index == 38) {
     return 507;
    }
if (index == 39) {
     return 492;
    }
if (index == 40) {
     return 571;
    }
if (index == 41) {
     return 503;
    }
if (index == 42) {
     return 530;
    }
if (index == 43) {
     return 507;
    }
if (index == 44) {
     return 542;
    }
if (index == 45) {
     return 491;
    }
if (index == 46) {
     return 495;
    }
if (index == 47) {
     return 494;
    }
if (index == 48) {
     return 513;
    }
if (index == 49) {
     return 510;
    }
if (index == 50) {
     return 480;
    }
if (index == 51) {
     return 496;
    }
if (index == 52) {
     return 524;
    }
if (index == 53) {
     return 515;
    }
if (index == 54) {
     return 861;
    }
if (index == 55) {
     return 1000;
    }
if (index == 56) {
     return 471;
    }
if (index == 57) {
     return 513;
    }
if (index == 58) {
     return 524;
    }
if (index > 58) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 870;
    }
if (index == 1) {
     return 866;
    }
if (index == 2) {
     return 866;
    }
if (index == 3) {
     return 858;
    }
if (index == 4) {
     return 871;
    }
if (index == 5) {
     return 855;
    }
if (index == 6) {
     return 866;
    }
if (index == 7) {
     return 855;
    }
if (index == 8) {
     return 865;
    }
if (index == 9) {
     return 860;
    }
if (index == 10) {
     return 865;
    }
if (index == 11) {
     return 859;
    }
if (index == 12) {
     return 858;
    }
if (index == 13) {
     return 856;
    }
if (index == 14) {
     return 878;
    }
if (index == 15) {
     return 841;
    }
if (index == 16) {
     return 853;
    }
if (index == 17) {
     return 837;
    }
if (index == 18) {
     return 857;
    }
if (index == 19) {
     return 817;
    }
if (index == 20) {
     return 839;
    }
if (index == 21) {
     return 859;
    }
if (index == 22) {
     return 845;
    }
if (index == 23) {
     return 853;
    }
if (index == 24) {
     return 869;
    }
if (index == 25) {
     return 835;
    }
if (index == 26) {
     return 835;
    }
if (index == 27) {
     return 832;
    }
if (index == 28) {
     return 830;
    }
if (index == 29) {
     return 515;
    }
if (index == 30) {
     return 856;
    }
if (index == 31) {
     return 861;
    }
if (index == 32) {
     return 861;
    }
if (index == 33) {
     return 863;
    }
if (index == 34) {
     return 846;
    }
if (index == 35) {
     return 847;
    }
if (index == 36) {
     return 834;
    }
if (index == 37) {
     return 853;
    }
if (index == 38) {
     return 841;
    }
if (index == 39) {
     return 859;
    }
if (index == 40) {
     return 876;
    }
if (index == 41) {
     return 851;
    }
if (index == 42) {
     return 865;
    }
if (index == 43) {
     return 857;
    }
if (index == 44) {
     return 858;
    }
if (index == 45) {
     return 854;
    }
if (index == 46) {
     return 859;
    }
if (index == 47) {
     return 860;
    }
if (index == 48) {
     return 862;
    }
if (index == 49) {
     return 858;
    }
if (index == 50) {
     return 856;
    }
if (index == 51) {
     return 860;
    }
if (index == 52) {
     return 859;
    }
if (index == 53) {
     return 858;
    }
if (index == 54) {
     return 972;
    }
if (index == 55) {
     return 769;
    }
if (index == 56) {
     return 814;
    }
if (index == 57) {
     return 841;
    }
if (index == 58) {
     return 875;
    }
if (index > 58) {
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
    var url = '/fedora/get/seapage:289_' + imgStr + '/digitalImage';
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
br.numLeafs = 59;

// Book title and the URL used for the book title link
br.bookTitle= "Tourist guide and shopping list : where to go, what to see, where to shop in Calcutta and Burma";
br.bookAuthor= "California Directory Co";
br.bookPub= "Calcutta: s.n, 1920";
br.bookKeyword= "Calcutta (India)--Guidebooks<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Burma--Guidebooks";
br.bookUrl  = '/catalog/sea:289';

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
