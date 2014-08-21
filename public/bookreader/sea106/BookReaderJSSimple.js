//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 409;
    }
if (index == 1) {
     return 350;
    }
if (index == 2) {
     return 346;
    }
if (index == 3) {
     return 335;
    }
if (index == 4) {
     return 348;
    }
if (index == 5) {
     return 344;
    }
if (index == 6) {
     return 346;
    }
if (index == 7) {
     return 352;
    }
if (index == 8) {
     return 338;
    }
if (index == 9) {
     return 352;
    }
if (index == 10) {
     return 340;
    }
if (index == 11) {
     return 352;
    }
if (index == 12) {
     return 552;
    }
if (index == 13) {
     return 352;
    }
if (index == 14) {
     return 352;
    }
if (index == 15) {
     return 356;
    }
if (index == 16) {
     return 362;
    }
if (index == 17) {
     return 361;
    }
if (index == 18) {
     return 355;
    }
if (index == 19) {
     return 363;
    }
if (index == 20) {
     return 359;
    }
if (index == 21) {
     return 371;
    }
if (index == 22) {
     return 338;
    }
if (index == 23) {
     return 551;
    }
if (index == 24) {
     return 338;
    }
if (index == 25) {
     return 354;
    }
if (index == 26) {
     return 338;
    }
if (index == 27) {
     return 359;
    }
if (index == 28) {
     return 338;
    }
if (index == 29) {
     return 350;
    }
if (index == 30) {
     return 338;
    }
if (index == 31) {
     return 358;
    }
if (index == 32) {
     return 546;
    }
if (index == 33) {
     return 352;
    }
if (index == 34) {
     return 361;
    }
if (index == 35) {
     return 352;
    }
if (index == 36) {
     return 367;
    }
if (index == 37) {
     return 349;
    }
if (index == 38) {
     return 342;
    }
if (index == 39) {
     return 360;
    }
if (index == 40) {
     return 363;
    }
if (index == 41) {
     return 371;
    }
if (index == 42) {
     return 352;
    }
if (index == 43) {
     return 534;
    }
if (index == 44) {
     return 350;
    }
if (index == 45) {
     return 350;
    }
if (index == 46) {
     return 356;
    }
if (index == 47) {
     return 356;
    }
if (index == 48) {
     return 351;
    }
if (index == 49) {
     return 360;
    }
if (index == 50) {
     return 354;
    }
if (index == 51) {
     return 363;
    }
if (index == 52) {
     return 539;
    }
if (index == 53) {
     return 360;
    }
if (index == 54) {
     return 357;
    }
if (index == 55) {
     return 371;
    }
if (index == 56) {
     return 353;
    }
if (index == 57) {
     return 354;
    }
if (index == 58) {
     return 357;
    }
if (index == 59) {
     return 363;
    }
if (index == 60) {
     return 358;
    }
if (index == 61) {
     return 363;
    }
if (index == 62) {
     return 336;
    }
if (index == 63) {
     return 534;
    }
if (index == 64) {
     return 358;
    }
if (index == 65) {
     return 360;
    }
if (index == 66) {
     return 362;
    }
if (index == 67) {
     return 362;
    }
if (index == 68) {
     return 357;
    }
if (index == 69) {
     return 363;
    }
if (index == 70) {
     return 354;
    }
if (index == 71) {
     return 354;
    }
if (index == 72) {
     return 367;
    }
if (index == 73) {
     return 360;
    }
if (index == 74) {
     return 362;
    }
if (index == 75) {
     return 360;
    }
if (index == 76) {
     return 374;
    }
if (index == 77) {
     return 360;
    }
if (index == 78) {
     return 358;
    }
if (index == 79) {
     return 364;
    }
if (index == 80) {
     return 357;
    }
if (index == 81) {
     return 353;
    }
if (index == 82) {
     return 339;
    }
if (index == 83) {
     return 360;
    }
if (index == 84) {
     return 356;
    }
if (index == 85) {
     return 363;
    }
if (index == 86) {
     return 353;
    }
if (index == 87) {
     return 362;
    }
if (index == 88) {
     return 353;
    }
if (index == 89) {
     return 362;
    }
if (index == 90) {
     return 353;
    }
if (index == 91) {
     return 351;
    }
if (index == 92) {
     return 357;
    }
if (index == 93) {
     return 360;
    }
if (index == 94) {
     return 354;
    }
if (index == 95) {
     return 347;
    }
if (index == 96) {
     return 346;
    }
if (index == 97) {
     return 347;
    }
if (index == 98) {
     return 347;
    }
if (index == 99) {
     return 356;
    }
if (index == 100) {
     return 338;
    }
if (index == 101) {
     return 354;
    }
if (index == 102) {
     return 348;
    }
if (index == 103) {
     return 347;
    }
if (index == 104) {
     return 348;
    }
if (index == 105) {
     return 352;
    }
if (index == 106) {
     return 349;
    }
if (index == 107) {
     return 352;
    }
if (index == 108) {
     return 349;
    }
if (index == 109) {
     return 355;
    }
if (index == 110) {
     return 349;
    }
if (index == 111) {
     return 352;
    }
if (index == 112) {
     return 539;
    }
if (index == 113) {
     return 347;
    }
if (index == 114) {
     return 348;
    }
if (index == 115) {
     return 349;
    }
if (index == 116) {
     return 356;
    }
if (index == 117) {
     return 352;
    }
if (index == 118) {
     return 350;
    }
if (index == 119) {
     return 350;
    }
if (index == 120) {
     return 351;
    }
if (index == 121) {
     return 360;
    }
if (index == 122) {
     return 347;
    }
if (index == 123) {
     return 407;
    }
if (index > 123) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 585;
    }
if (index == 1) {
     return 555;
    }
if (index == 2) {
     return 554;
    }
if (index == 3) {
     return 561;
    }
if (index == 4) {
     return 548;
    }
if (index == 5) {
     return 548;
    }
if (index == 6) {
     return 546;
    }
if (index == 7) {
     return 561;
    }
if (index == 8) {
     return 561;
    }
if (index == 9) {
     return 561;
    }
if (index == 10) {
     return 547;
    }
if (index == 11) {
     return 561;
    }
if (index == 12) {
     return 352;
    }
if (index == 13) {
     return 561;
    }
if (index == 14) {
     return 566;
    }
if (index == 15) {
     return 576;
    }
if (index == 16) {
     return 569;
    }
if (index == 17) {
     return 576;
    }
if (index == 18) {
     return 567;
    }
if (index == 19) {
     return 568;
    }
if (index == 20) {
     return 567;
    }
if (index == 21) {
     return 573;
    }
if (index == 22) {
     return 556;
    }
if (index == 23) {
     return 352;
    }
if (index == 24) {
     return 556;
    }
if (index == 25) {
     return 562;
    }
if (index == 26) {
     return 556;
    }
if (index == 27) {
     return 560;
    }
if (index == 28) {
     return 556;
    }
if (index == 29) {
     return 561;
    }
if (index == 30) {
     return 556;
    }
if (index == 31) {
     return 560;
    }
if (index == 32) {
     return 358;
    }
if (index == 33) {
     return 534;
    }
if (index == 34) {
     return 539;
    }
if (index == 35) {
     return 534;
    }
if (index == 36) {
     return 543;
    }
if (index == 37) {
     return 538;
    }
if (index == 38) {
     return 541;
    }
if (index == 39) {
     return 534;
    }
if (index == 40) {
     return 546;
    }
if (index == 41) {
     return 541;
    }
if (index == 42) {
     return 539;
    }
if (index == 43) {
     return 347;
    }
if (index == 44) {
     return 548;
    }
if (index == 45) {
     return 536;
    }
if (index == 46) {
     return 541;
    }
if (index == 47) {
     return 540;
    }
if (index == 48) {
     return 545;
    }
if (index == 49) {
     return 534;
    }
if (index == 50) {
     return 546;
    }
if (index == 51) {
     return 536;
    }
if (index == 52) {
     return 374;
    }
if (index == 53) {
     return 534;
    }
if (index == 54) {
     return 543;
    }
if (index == 55) {
     return 541;
    }
if (index == 56) {
     return 540;
    }
if (index == 57) {
     return 541;
    }
if (index == 58) {
     return 542;
    }
if (index == 59) {
     return 536;
    }
if (index == 60) {
     return 545;
    }
if (index == 61) {
     return 536;
    }
if (index == 62) {
     return 539;
    }
if (index == 63) {
     return 360;
    }
if (index == 64) {
     return 542;
    }
if (index == 65) {
     return 534;
    }
if (index == 66) {
     return 543;
    }
if (index == 67) {
     return 535;
    }
if (index == 68) {
     return 541;
    }
if (index == 69) {
     return 536;
    }
if (index == 70) {
     return 540;
    }
if (index == 71) {
     return 538;
    }
if (index == 72) {
     return 539;
    }
if (index == 73) {
     return 534;
    }
if (index == 74) {
     return 542;
    }
if (index == 75) {
     return 534;
    }
if (index == 76) {
     return 539;
    }
if (index == 77) {
     return 539;
    }
if (index == 78) {
     return 553;
    }
if (index == 79) {
     return 541;
    }
if (index == 80) {
     return 541;
    }
if (index == 81) {
     return 541;
    }
if (index == 82) {
     return 539;
    }
if (index == 83) {
     return 539;
    }
if (index == 84) {
     return 539;
    }
if (index == 85) {
     return 541;
    }
if (index == 86) {
     return 542;
    }
if (index == 87) {
     return 540;
    }
if (index == 88) {
     return 543;
    }
if (index == 89) {
     return 540;
    }
if (index == 90) {
     return 542;
    }
if (index == 91) {
     return 543;
    }
if (index == 92) {
     return 536;
    }
if (index == 93) {
     return 539;
    }
if (index == 94) {
     return 538;
    }
if (index == 95) {
     return 539;
    }
if (index == 96) {
     return 540;
    }
if (index == 97) {
     return 539;
    }
if (index == 98) {
     return 541;
    }
if (index == 99) {
     return 544;
    }
if (index == 100) {
     return 541;
    }
if (index == 101) {
     return 543;
    }
if (index == 102) {
     return 539;
    }
if (index == 103) {
     return 539;
    }
if (index == 104) {
     return 539;
    }
if (index == 105) {
     return 542;
    }
if (index == 106) {
     return 540;
    }
if (index == 107) {
     return 542;
    }
if (index == 108) {
     return 540;
    }
if (index == 109) {
     return 544;
    }
if (index == 110) {
     return 537;
    }
if (index == 111) {
     return 542;
    }
if (index == 112) {
     return 370;
    }
if (index == 113) {
     return 534;
    }
if (index == 114) {
     return 534;
    }
if (index == 115) {
     return 540;
    }
if (index == 116) {
     return 544;
    }
if (index == 117) {
     return 542;
    }
if (index == 118) {
     return 541;
    }
if (index == 119) {
     return 541;
    }
if (index == 120) {
     return 541;
    }
if (index == 121) {
     return 547;
    }
if (index == 122) {
     return 539;
    }
if (index == 123) {
     return 585;
    }
if (index > 123) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:106_' + imgStr + '/digitalImage';
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
br.numLeafs = 124;

// Book title and the URL used for the book title link
br.bookTitle= "Java";
br.bookAuthor= "Scheltema, J. F. (Johann Friedrich)";
br.bookPub= "London: A. and C. Black, 1912";
br.bookKeyword= "Java (Indonesia)--Description and travel";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:106';

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
