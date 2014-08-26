//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 428;
    }
if (index == 1) {
     return 367;
    }
if (index == 2) {
     return 376;
    }
if (index == 3) {
     return 378;
    }
if (index == 4) {
     return 375;
    }
if (index == 5) {
     return 367;
    }
if (index == 6) {
     return 383;
    }
if (index == 7) {
     return 617;
    }
if (index == 8) {
     return 400;
    }
if (index == 9) {
     return 388;
    }
if (index == 10) {
     return 400;
    }
if (index == 11) {
     return 402;
    }
if (index == 12) {
     return 390;
    }
if (index == 13) {
     return 392;
    }
if (index == 14) {
     return 414;
    }
if (index == 15) {
     return 390;
    }
if (index == 16) {
     return 409;
    }
if (index == 17) {
     return 411;
    }
if (index == 18) {
     return 405;
    }
if (index == 19) {
     return 414;
    }
if (index == 20) {
     return 401;
    }
if (index == 21) {
     return 400;
    }
if (index == 22) {
     return 395;
    }
if (index == 23) {
     return 407;
    }
if (index == 24) {
     return 395;
    }
if (index == 25) {
     return 406;
    }
if (index == 26) {
     return 395;
    }
if (index == 27) {
     return 415;
    }
if (index == 28) {
     return 394;
    }
if (index == 29) {
     return 398;
    }
if (index == 30) {
     return 404;
    }
if (index == 31) {
     return 389;
    }
if (index == 32) {
     return 397;
    }
if (index == 33) {
     return 413;
    }
if (index == 34) {
     return 402;
    }
if (index == 35) {
     return 411;
    }
if (index == 36) {
     return 401;
    }
if (index == 37) {
     return 405;
    }
if (index == 38) {
     return 396;
    }
if (index == 39) {
     return 410;
    }
if (index == 40) {
     return 407;
    }
if (index == 41) {
     return 407;
    }
if (index == 42) {
     return 412;
    }
if (index == 43) {
     return 410;
    }
if (index == 44) {
     return 402;
    }
if (index == 45) {
     return 410;
    }
if (index == 46) {
     return 403;
    }
if (index == 47) {
     return 392;
    }
if (index == 48) {
     return 417;
    }
if (index == 49) {
     return 397;
    }
if (index == 50) {
     return 409;
    }
if (index == 51) {
     return 414;
    }
if (index == 52) {
     return 422;
    }
if (index == 53) {
     return 415;
    }
if (index == 54) {
     return 414;
    }
if (index == 55) {
     return 423;
    }
if (index == 56) {
     return 410;
    }
if (index == 57) {
     return 414;
    }
if (index == 58) {
     return 417;
    }
if (index == 59) {
     return 427;
    }
if (index == 60) {
     return 403;
    }
if (index == 61) {
     return 425;
    }
if (index == 62) {
     return 404;
    }
if (index == 63) {
     return 424;
    }
if (index == 64) {
     return 405;
    }
if (index == 65) {
     return 390;
    }
if (index == 66) {
     return 405;
    }
if (index == 67) {
     return 414;
    }
if (index == 68) {
     return 398;
    }
if (index == 69) {
     return 420;
    }
if (index == 70) {
     return 407;
    }
if (index == 71) {
     return 424;
    }
if (index == 72) {
     return 403;
    }
if (index == 73) {
     return 414;
    }
if (index == 74) {
     return 396;
    }
if (index == 75) {
     return 419;
    }
if (index == 76) {
     return 398;
    }
if (index == 77) {
     return 418;
    }
if (index == 78) {
     return 403;
    }
if (index == 79) {
     return 417;
    }
if (index == 80) {
     return 398;
    }
if (index == 81) {
     return 418;
    }
if (index == 82) {
     return 398;
    }
if (index == 83) {
     return 418;
    }
if (index == 84) {
     return 404;
    }
if (index == 85) {
     return 418;
    }
if (index == 86) {
     return 401;
    }
if (index == 87) {
     return 421;
    }
if (index == 88) {
     return 399;
    }
if (index == 89) {
     return 424;
    }
if (index == 90) {
     return 407;
    }
if (index == 91) {
     return 423;
    }
if (index == 92) {
     return 406;
    }
if (index == 93) {
     return 419;
    }
if (index == 94) {
     return 403;
    }
if (index == 95) {
     return 423;
    }
if (index == 96) {
     return 402;
    }
if (index == 97) {
     return 419;
    }
if (index == 98) {
     return 400;
    }
if (index == 99) {
     return 416;
    }
if (index == 100) {
     return 409;
    }
if (index == 101) {
     return 402;
    }
if (index == 102) {
     return 380;
    }
if (index == 103) {
     return 410;
    }
if (index == 104) {
     return 406;
    }
if (index == 105) {
     return 424;
    }
if (index == 106) {
     return 406;
    }
if (index == 107) {
     return 424;
    }
if (index == 108) {
     return 410;
    }
if (index == 109) {
     return 425;
    }
if (index == 110) {
     return 407;
    }
if (index == 111) {
     return 417;
    }
if (index == 112) {
     return 402;
    }
if (index == 113) {
     return 416;
    }
if (index == 114) {
     return 384;
    }
if (index == 115) {
     return 383;
    }
if (index == 116) {
     return 396;
    }
if (index == 117) {
     return 411;
    }
if (index == 118) {
     return 395;
    }
if (index == 119) {
     return 410;
    }
if (index == 120) {
     return 403;
    }
if (index == 121) {
     return 411;
    }
if (index == 122) {
     return 648;
    }
if (index == 123) {
     return 380;
    }
if (index == 124) {
     return 394;
    }
if (index == 125) {
     return 419;
    }
if (index == 126) {
     return 398;
    }
if (index == 127) {
     return 384;
    }
if (index == 128) {
     return 389;
    }
if (index == 129) {
     return 437;
    }
if (index > 129) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 661;
    }
if (index == 1) {
     return 618;
    }
if (index == 2) {
     return 643;
    }
if (index == 3) {
     return 634;
    }
if (index == 4) {
     return 636;
    }
if (index == 5) {
     return 635;
    }
if (index == 6) {
     return 633;
    }
if (index == 7) {
     return 382;
    }
if (index == 8) {
     return 626;
    }
if (index == 9) {
     return 626;
    }
if (index == 10) {
     return 628;
    }
if (index == 11) {
     return 624;
    }
if (index == 12) {
     return 624;
    }
if (index == 13) {
     return 626;
    }
if (index == 14) {
     return 626;
    }
if (index == 15) {
     return 622;
    }
if (index == 16) {
     return 632;
    }
if (index == 17) {
     return 633;
    }
if (index == 18) {
     return 633;
    }
if (index == 19) {
     return 630;
    }
if (index == 20) {
     return 622;
    }
if (index == 21) {
     return 630;
    }
if (index == 22) {
     return 625;
    }
if (index == 23) {
     return 639;
    }
if (index == 24) {
     return 633;
    }
if (index == 25) {
     return 642;
    }
if (index == 26) {
     return 637;
    }
if (index == 27) {
     return 642;
    }
if (index == 28) {
     return 636;
    }
if (index == 29) {
     return 636;
    }
if (index == 30) {
     return 639;
    }
if (index == 31) {
     return 626;
    }
if (index == 32) {
     return 639;
    }
if (index == 33) {
     return 627;
    }
if (index == 34) {
     return 631;
    }
if (index == 35) {
     return 633;
    }
if (index == 36) {
     return 630;
    }
if (index == 37) {
     return 626;
    }
if (index == 38) {
     return 626;
    }
if (index == 39) {
     return 636;
    }
if (index == 40) {
     return 633;
    }
if (index == 41) {
     return 630;
    }
if (index == 42) {
     return 637;
    }
if (index == 43) {
     return 636;
    }
if (index == 44) {
     return 627;
    }
if (index == 45) {
     return 634;
    }
if (index == 46) {
     return 630;
    }
if (index == 47) {
     return 623;
    }
if (index == 48) {
     return 628;
    }
if (index == 49) {
     return 626;
    }
if (index == 50) {
     return 636;
    }
if (index == 51) {
     return 622;
    }
if (index == 52) {
     return 635;
    }
if (index == 53) {
     return 623;
    }
if (index == 54) {
     return 639;
    }
if (index == 55) {
     return 627;
    }
if (index == 56) {
     return 637;
    }
if (index == 57) {
     return 622;
    }
if (index == 58) {
     return 639;
    }
if (index == 59) {
     return 630;
    }
if (index == 60) {
     return 630;
    }
if (index == 61) {
     return 629;
    }
if (index == 62) {
     return 631;
    }
if (index == 63) {
     return 628;
    }
if (index == 64) {
     return 631;
    }
if (index == 65) {
     return 620;
    }
if (index == 66) {
     return 632;
    }
if (index == 67) {
     return 622;
    }
if (index == 68) {
     return 627;
    }
if (index == 69) {
     return 626;
    }
if (index == 70) {
     return 633;
    }
if (index == 71) {
     return 628;
    }
if (index == 72) {
     return 630;
    }
if (index == 73) {
     return 622;
    }
if (index == 74) {
     return 626;
    }
if (index == 75) {
     return 625;
    }
if (index == 76) {
     return 627;
    }
if (index == 77) {
     return 624;
    }
if (index == 78) {
     return 630;
    }
if (index == 79) {
     return 624;
    }
if (index == 80) {
     return 627;
    }
if (index == 81) {
     return 624;
    }
if (index == 82) {
     return 627;
    }
if (index == 83) {
     return 624;
    }
if (index == 84) {
     return 631;
    }
if (index == 85) {
     return 624;
    }
if (index == 86) {
     return 629;
    }
if (index == 87) {
     return 616;
    }
if (index == 88) {
     return 622;
    }
if (index == 89) {
     return 629;
    }
if (index == 90) {
     return 633;
    }
if (index == 91) {
     return 628;
    }
if (index == 92) {
     return 632;
    }
if (index == 93) {
     return 626;
    }
if (index == 94) {
     return 630;
    }
if (index == 95) {
     return 628;
    }
if (index == 96) {
     return 630;
    }
if (index == 97) {
     return 625;
    }
if (index == 98) {
     return 628;
    }
if (index == 99) {
     return 623;
    }
if (index == 100) {
     return 634;
    }
if (index == 101) {
     return 633;
    }
if (index == 102) {
     return 626;
    }
if (index == 103) {
     return 631;
    }
if (index == 104) {
     return 632;
    }
if (index == 105) {
     return 629;
    }
if (index == 106) {
     return 632;
    }
if (index == 107) {
     return 629;
    }
if (index == 108) {
     return 634;
    }
if (index == 109) {
     return 629;
    }
if (index == 110) {
     return 633;
    }
if (index == 111) {
     return 624;
    }
if (index == 112) {
     return 630;
    }
if (index == 113) {
     return 623;
    }
if (index == 114) {
     return 629;
    }
if (index == 115) {
     return 622;
    }
if (index == 116) {
     return 633;
    }
if (index == 117) {
     return 628;
    }
if (index == 118) {
     return 629;
    }
if (index == 119) {
     return 626;
    }
if (index == 120) {
     return 629;
    }
if (index == 121) {
     return 623;
    }
if (index == 122) {
     return 1089;
    }
if (index == 123) {
     return 602;
    }
if (index == 124) {
     return 609;
    }
if (index == 125) {
     return 642;
    }
if (index == 126) {
     return 639;
    }
if (index == 127) {
     return 626;
    }
if (index == 128) {
     return 617;
    }
if (index == 129) {
     return 665;
    }
if (index > 129) {
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
    var url = '/fedora/get/seapage:089_' + imgStr + '/digitalImage';
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
br.numLeafs = 134;

// Book title and the URL used for the book title link
br.bookTitle= "Notes of a journey on the Upper Mekong, Siam";
br.bookAuthor= "Smyth, H. Warington (Herbert Warington)";
br.bookPub= "London: Published for the Royal Geographical Society by J. Murray, 1895";
br.bookKeyword= "Thailand--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Smyth, H. Warington--(Herbert Warington),--1867-1943--Journeys--Thailand";
br.bookUrl  = '/catalog/sea:089';

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
