//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 532;
    }
if (index == 1) {
     return 483;
    }
if (index == 2) {
     return 475;
    }
if (index == 3) {
     return 432;
    }
if (index == 4) {
     return 435;
    }
if (index == 5) {
     return 693;
    }
if (index == 6) {
     return 458;
    }
if (index == 7) {
     return 455;
    }
if (index == 8) {
     return 468;
    }
if (index == 9) {
     return 435;
    }
if (index == 10) {
     return 454;
    }
if (index == 11) {
     return 433;
    }
if (index == 12) {
     return 437;
    }
if (index == 13) {
     return 433;
    }
if (index == 14) {
     return 433;
    }
if (index == 15) {
     return 423;
    }
if (index == 16) {
     return 431;
    }
if (index == 17) {
     return 431;
    }
if (index == 18) {
     return 430;
    }
if (index == 19) {
     return 433;
    }
if (index == 20) {
     return 414;
    }
if (index == 21) {
     return 423;
    }
if (index == 22) {
     return 423;
    }
if (index == 23) {
     return 425;
    }
if (index == 24) {
     return 421;
    }
if (index == 25) {
     return 692;
    }
if (index == 26) {
     return 436;
    }
if (index == 27) {
     return 692;
    }
if (index == 28) {
     return 423;
    }
if (index == 29) {
     return 692;
    }
if (index == 30) {
     return 423;
    }
if (index == 31) {
     return 411;
    }
if (index == 32) {
     return 692;
    }
if (index == 33) {
     return 423;
    }
if (index == 34) {
     return 692;
    }
if (index == 35) {
     return 416;
    }
if (index == 36) {
     return 423;
    }
if (index == 37) {
     return 692;
    }
if (index == 38) {
     return 423;
    }
if (index == 39) {
     return 460;
    }
if (index == 40) {
     return 692;
    }
if (index == 41) {
     return 426;
    }
if (index == 42) {
     return 1676;
    }
if (index == 43) {
     return 430;
    }
if (index == 44) {
     return 692;
    }
if (index == 45) {
     return 458;
    }
if (index == 46) {
     return 426;
    }
if (index == 47) {
     return 692;
    }
if (index == 48) {
     return 436;
    }
if (index == 49) {
     return 458;
    }
if (index == 50) {
     return 692;
    }
if (index == 51) {
     return 458;
    }
if (index == 52) {
     return 688;
    }
if (index == 53) {
     return 692;
    }
if (index == 54) {
     return 403;
    }
if (index == 55) {
     return 432;
    }
if (index == 56) {
     return 685;
    }
if (index == 57) {
     return 437;
    }
if (index == 58) {
     return 415;
    }
if (index == 59) {
     return 691;
    }
if (index == 60) {
     return 416;
    }
if (index == 61) {
     return 429;
    }
if (index == 62) {
     return 417;
    }
if (index == 63) {
     return 426;
    }
if (index == 64) {
     return 687;
    }
if (index == 65) {
     return 692;
    }
if (index == 66) {
     return 417;
    }
if (index == 67) {
     return 419;
    }
if (index == 68) {
     return 680;
    }
if (index == 69) {
     return 691;
    }
if (index == 70) {
     return 477;
    }
if (index == 71) {
     return 425;
    }
if (index == 72) {
     return 425;
    }
if (index == 73) {
     return 434;
    }
if (index == 74) {
     return 437;
    }
if (index == 75) {
     return 419;
    }
if (index == 76) {
     return 688;
    }
if (index == 77) {
     return 681;
    }
if (index == 78) {
     return 423;
    }
if (index == 79) {
     return 421;
    }
if (index == 80) {
     return 433;
    }
if (index == 81) {
     return 435;
    }
if (index == 82) {
     return 424;
    }
if (index == 83) {
     return 429;
    }
if (index == 84) {
     return 423;
    }
if (index == 85) {
     return 438;
    }
if (index == 86) {
     return 436;
    }
if (index == 87) {
     return 433;
    }
if (index == 88) {
     return 455;
    }
if (index == 89) {
     return 683;
    }
if (index == 90) {
     return 451;
    }
if (index == 91) {
     return 437;
    }
if (index == 92) {
     return 424;
    }
if (index == 93) {
     return 456;
    }
if (index == 94) {
     return 689;
    }
if (index == 95) {
     return 461;
    }
if (index == 96) {
     return 426;
    }
if (index == 97) {
     return 434;
    }
if (index == 98) {
     return 444;
    }
if (index == 99) {
     return 449;
    }
if (index == 100) {
     return 472;
    }
if (index == 101) {
     return 705;
    }
if (index == 102) {
     return 434;
    }
if (index == 103) {
     return 434;
    }
if (index == 104) {
     return 705;
    }
if (index == 105) {
     return 711;
    }
if (index == 106) {
     return 474;
    }
if (index == 107) {
     return 706;
    }
if (index == 108) {
     return 701;
    }
if (index == 109) {
     return 432;
    }
if (index == 110) {
     return 432;
    }
if (index == 111) {
     return 436;
    }
if (index == 112) {
     return 425;
    }
if (index == 113) {
     return 430;
    }
if (index == 114) {
     return 410;
    }
if (index == 115) {
     return 441;
    }
if (index == 116) {
     return 446;
    }
if (index == 117) {
     return 463;
    }
if (index == 118) {
     return 454;
    }
if (index == 119) {
     return 535;
    }
if (index > 119) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 735;
    }
if (index == 1) {
     return 709;
    }
if (index == 2) {
     return 710;
    }
if (index == 3) {
     return 705;
    }
if (index == 4) {
     return 704;
    }
if (index == 5) {
     return 463;
    }
if (index == 6) {
     return 693;
    }
if (index == 7) {
     return 693;
    }
if (index == 8) {
     return 688;
    }
if (index == 9) {
     return 692;
    }
if (index == 10) {
     return 690;
    }
if (index == 11) {
     return 698;
    }
if (index == 12) {
     return 691;
    }
if (index == 13) {
     return 694;
    }
if (index == 14) {
     return 693;
    }
if (index == 15) {
     return 692;
    }
if (index == 16) {
     return 699;
    }
if (index == 17) {
     return 696;
    }
if (index == 18) {
     return 700;
    }
if (index == 19) {
     return 698;
    }
if (index == 20) {
     return 692;
    }
if (index == 21) {
     return 692;
    }
if (index == 22) {
     return 692;
    }
if (index == 23) {
     return 693;
    }
if (index == 24) {
     return 692;
    }
if (index == 25) {
     return 423;
    }
if (index == 26) {
     return 700;
    }
if (index == 27) {
     return 423;
    }
if (index == 28) {
     return 692;
    }
if (index == 29) {
     return 423;
    }
if (index == 30) {
     return 692;
    }
if (index == 31) {
     return 694;
    }
if (index == 32) {
     return 423;
    }
if (index == 33) {
     return 692;
    }
if (index == 34) {
     return 423;
    }
if (index == 35) {
     return 695;
    }
if (index == 36) {
     return 692;
    }
if (index == 37) {
     return 453;
    }
if (index == 38) {
     return 692;
    }
if (index == 39) {
     return 692;
    }
if (index == 40) {
     return 466;
    }
if (index == 41) {
     return 694;
    }
if (index == 42) {
     return 688;
    }
if (index == 43) {
     return 692;
    }
if (index == 44) {
     return 458;
    }
if (index == 45) {
     return 692;
    }
if (index == 46) {
     return 692;
    }
if (index == 47) {
     return 458;
    }
if (index == 48) {
     return 692;
    }
if (index == 49) {
     return 692;
    }
if (index == 50) {
     return 458;
    }
if (index == 51) {
     return 692;
    }
if (index == 52) {
     return 456;
    }
if (index == 53) {
     return 441;
    }
if (index == 54) {
     return 687;
    }
if (index == 55) {
     return 686;
    }
if (index == 56) {
     return 432;
    }
if (index == 57) {
     return 692;
    }
if (index == 58) {
     return 695;
    }
if (index == 59) {
     return 424;
    }
if (index == 60) {
     return 688;
    }
if (index == 61) {
     return 692;
    }
if (index == 62) {
     return 699;
    }
if (index == 63) {
     return 691;
    }
if (index == 64) {
     return 458;
    }
if (index == 65) {
     return 444;
    }
if (index == 66) {
     return 686;
    }
if (index == 67) {
     return 690;
    }
if (index == 68) {
     return 456;
    }
if (index == 69) {
     return 434;
    }
if (index == 70) {
     return 687;
    }
if (index == 71) {
     return 691;
    }
if (index == 72) {
     return 702;
    }
if (index == 73) {
     return 692;
    }
if (index == 74) {
     return 687;
    }
if (index == 75) {
     return 692;
    }
if (index == 76) {
     return 466;
    }
if (index == 77) {
     return 442;
    }
if (index == 78) {
     return 687;
    }
if (index == 79) {
     return 692;
    }
if (index == 80) {
     return 685;
    }
if (index == 81) {
     return 692;
    }
if (index == 82) {
     return 685;
    }
if (index == 83) {
     return 688;
    }
if (index == 84) {
     return 683;
    }
if (index == 85) {
     return 685;
    }
if (index == 86) {
     return 682;
    }
if (index == 87) {
     return 684;
    }
if (index == 88) {
     return 682;
    }
if (index == 89) {
     return 441;
    }
if (index == 90) {
     return 683;
    }
if (index == 91) {
     return 686;
    }
if (index == 92) {
     return 682;
    }
if (index == 93) {
     return 684;
    }
if (index == 94) {
     return 432;
    }
if (index == 95) {
     return 706;
    }
if (index == 96) {
     return 709;
    }
if (index == 97) {
     return 703;
    }
if (index == 98) {
     return 706;
    }
if (index == 99) {
     return 706;
    }
if (index == 100) {
     return 705;
    }
if (index == 101) {
     return 458;
    }
if (index == 102) {
     return 701;
    }
if (index == 103) {
     return 711;
    }
if (index == 104) {
     return 464;
    }
if (index == 105) {
     return 466;
    }
if (index == 106) {
     return 706;
    }
if (index == 107) {
     return 478;
    }
if (index == 108) {
     return 433;
    }
if (index == 109) {
     return 706;
    }
if (index == 110) {
     return 703;
    }
if (index == 111) {
     return 716;
    }
if (index == 112) {
     return 705;
    }
if (index == 113) {
     return 710;
    }
if (index == 114) {
     return 712;
    }
if (index == 115) {
     return 708;
    }
if (index == 116) {
     return 707;
    }
if (index == 117) {
     return 705;
    }
if (index == 118) {
     return 708;
    }
if (index == 119) {
     return 729;
    }
if (index > 119) {
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
    var url = '/fedora/get/seapage:098_' + imgStr + '/digitalImage';
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
br.numLeafs = 120;

// Book title and the URL used for the book title link
br.bookTitle= "Java, the wonderland : [Guide and tourist's hand book] This book describes one of the most beautiful countries in the world";
br.bookAuthor= "no recorded author";
br.bookPub= "Arnhem: Thieme, 1900";
br.bookKeyword= "Java (Indonesia)--Guidebooks";
br.bookUrl  = '/catalog/sea:098';

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
