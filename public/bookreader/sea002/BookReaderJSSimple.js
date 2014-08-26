//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 753;
    }
if (index == 1) {
     return 381;
    }
if (index == 2) {
     return 361;
    }
if (index == 3) {
     return 355;
    }
if (index == 4) {
     return 355;
    }
if (index == 5) {
     return 357;
    }
if (index == 6) {
     return 473;
    }
if (index == 7) {
     return 587;
    }
if (index == 8) {
     return 460;
    }
if (index == 9) {
     return 346;
    }
if (index == 10) {
     return 344;
    }
if (index == 11) {
     return 345;
    }
if (index == 12) {
     return 338;
    }
if (index == 13) {
     return 681;
    }
if (index == 14) {
     return 450;
    }
if (index == 15) {
     return 451;
    }
if (index == 16) {
     return 453;
    }
if (index == 17) {
     return 446;
    }
if (index == 18) {
     return 450;
    }
if (index == 19) {
     return 448;
    }
if (index == 20) {
     return 336;
    }
if (index == 21) {
     return 445;
    }
if (index == 22) {
     return 446;
    }
if (index == 23) {
     return 330;
    }
if (index == 24) {
     return 451;
    }
if (index == 25) {
     return 330;
    }
if (index == 26) {
     return 451;
    }
if (index == 27) {
     return 334;
    }
if (index == 28) {
     return 336;
    }
if (index == 29) {
     return 328;
    }
if (index == 30) {
     return 340;
    }
if (index == 31) {
     return 333;
    }
if (index == 32) {
     return 453;
    }
if (index == 33) {
     return 445;
    }
if (index == 34) {
     return 466;
    }
if (index == 35) {
     return 449;
    }
if (index == 36) {
     return 468;
    }
if (index == 37) {
     return 337;
    }
if (index == 38) {
     return 459;
    }
if (index == 39) {
     return 459;
    }
if (index == 40) {
     return 344;
    }
if (index == 41) {
     return 341;
    }
if (index == 42) {
     return 462;
    }
if (index == 43) {
     return 336;
    }
if (index == 44) {
     return 344;
    }
if (index == 45) {
     return 339;
    }
if (index == 46) {
     return 464;
    }
if (index == 47) {
     return 452;
    }
if (index == 48) {
     return 342;
    }
if (index == 49) {
     return 456;
    }
if (index == 50) {
     return 343;
    }
if (index == 51) {
     return 342;
    }
if (index == 52) {
     return 347;
    }
if (index == 53) {
     return 456;
    }
if (index == 54) {
     return 458;
    }
if (index == 55) {
     return 343;
    }
if (index == 56) {
     return 346;
    }
if (index == 57) {
     return 455;
    }
if (index == 58) {
     return 458;
    }
if (index == 59) {
     return 449;
    }
if (index == 60) {
     return 459;
    }
if (index == 61) {
     return 448;
    }
if (index == 62) {
     return 341;
    }
if (index == 63) {
     return 444;
    }
if (index == 64) {
     return 347;
    }
if (index == 65) {
     return 440;
    }
if (index == 66) {
     return 456;
    }
if (index == 67) {
     return 436;
    }
if (index == 68) {
     return 463;
    }
if (index == 69) {
     return 443;
    }
if (index == 70) {
     return 453;
    }
if (index == 71) {
     return 452;
    }
if (index == 72) {
     return 453;
    }
if (index == 73) {
     return 446;
    }
if (index == 74) {
     return 345;
    }
if (index == 75) {
     return 446;
    }
if (index == 76) {
     return 341;
    }
if (index == 77) {
     return 446;
    }
if (index == 78) {
     return 468;
    }
if (index == 79) {
     return 445;
    }
if (index == 80) {
     return 460;
    }
if (index == 81) {
     return 448;
    }
if (index == 82) {
     return 342;
    }
if (index == 83) {
     return 437;
    }
if (index == 84) {
     return 342;
    }
if (index == 85) {
     return 440;
    }
if (index == 86) {
     return 341;
    }
if (index == 87) {
     return 445;
    }
if (index == 88) {
     return 451;
    }
if (index == 89) {
     return 333;
    }
if (index == 90) {
     return 345;
    }
if (index == 91) {
     return 335;
    }
if (index == 92) {
     return 341;
    }
if (index == 93) {
     return 334;
    }
if (index == 94) {
     return 330;
    }
if (index == 95) {
     return 432;
    }
if (index == 96) {
     return 334;
    }
if (index == 97) {
     return 435;
    }
if (index == 98) {
     return 336;
    }
if (index == 99) {
     return 436;
    }
if (index == 100) {
     return 447;
    }
if (index == 101) {
     return 442;
    }
if (index == 102) {
     return 336;
    }
if (index == 103) {
     return 445;
    }
if (index == 104) {
     return 340;
    }
if (index == 105) {
     return 431;
    }
if (index == 106) {
     return 463;
    }
if (index == 107) {
     return 332;
    }
if (index == 108) {
     return 339;
    }
if (index == 109) {
     return 441;
    }
if (index == 110) {
     return 342;
    }
if (index == 111) {
     return 458;
    }
if (index == 112) {
     return 344;
    }
if (index == 113) {
     return 438;
    }
if (index == 114) {
     return 341;
    }
if (index == 115) {
     return 447;
    }
if (index == 116) {
     return 345;
    }
if (index == 117) {
     return 332;
    }
if (index == 118) {
     return 460;
    }
if (index == 119) {
     return 439;
    }
if (index == 120) {
     return 342;
    }
if (index == 121) {
     return 334;
    }
if (index == 122) {
     return 350;
    }
if (index == 123) {
     return 334;
    }
if (index == 124) {
     return 455;
    }
if (index == 125) {
     return 340;
    }
if (index == 126) {
     return 337;
    }
if (index == 127) {
     return 441;
    }
if (index == 128) {
     return 333;
    }
if (index == 129) {
     return 443;
    }
if (index == 130) {
     return 340;
    }
if (index == 131) {
     return 451;
    }
if (index == 132) {
     return 343;
    }
if (index == 133) {
     return 442;
    }
if (index == 134) {
     return 341;
    }
if (index == 135) {
     return 440;
    }
if (index == 136) {
     return 453;
    }
if (index == 137) {
     return 444;
    }
if (index == 138) {
     return 342;
    }
if (index == 139) {
     return 339;
    }
if (index == 140) {
     return 353;
    }
if (index == 141) {
     return 439;
    }
if (index == 142) {
     return 447;
    }
if (index == 143) {
     return 442;
    }
if (index == 144) {
     return 339;
    }
if (index == 145) {
     return 443;
    }
if (index == 146) {
     return 342;
    }
if (index == 147) {
     return 448;
    }
if (index == 148) {
     return 338;
    }
if (index == 149) {
     return 331;
    }
if (index == 150) {
     return 449;
    }
if (index == 151) {
     return 441;
    }
if (index == 152) {
     return 340;
    }
if (index == 153) {
     return 334;
    }
if (index == 154) {
     return 456;
    }
if (index == 155) {
     return 442;
    }
if (index == 156) {
     return 456;
    }
if (index == 157) {
     return 443;
    }
if (index == 158) {
     return 454;
    }
if (index == 159) {
     return 442;
    }
if (index == 160) {
     return 343;
    }
if (index == 161) {
     return 443;
    }
if (index == 162) {
     return 464;
    }
if (index == 163) {
     return 439;
    }
if (index == 164) {
     return 454;
    }
if (index == 165) {
     return 329;
    }
if (index == 166) {
     return 345;
    }
if (index == 167) {
     return 744;
    }
if (index > 167) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1078;
    }
if (index == 1) {
     return 518;
    }
if (index == 2) {
     return 518;
    }
if (index == 3) {
     return 520;
    }
if (index == 4) {
     return 515;
    }
if (index == 5) {
     return 519;
    }
if (index == 6) {
     return 691;
    }
if (index == 7) {
     return 997;
    }
if (index == 8) {
     return 698;
    }
if (index == 9) {
     return 518;
    }
if (index == 10) {
     return 515;
    }
if (index == 11) {
     return 521;
    }
if (index == 12) {
     return 518;
    }
if (index == 13) {
     return 525;
    }
if (index == 14) {
     return 684;
    }
if (index == 15) {
     return 700;
    }
if (index == 16) {
     return 694;
    }
if (index == 17) {
     return 691;
    }
if (index == 18) {
     return 693;
    }
if (index == 19) {
     return 695;
    }
if (index == 20) {
     return 520;
    }
if (index == 21) {
     return 694;
    }
if (index == 22) {
     return 688;
    }
if (index == 23) {
     return 526;
    }
if (index == 24) {
     return 691;
    }
if (index == 25) {
     return 522;
    }
if (index == 26) {
     return 678;
    }
if (index == 27) {
     return 520;
    }
if (index == 28) {
     return 518;
    }
if (index == 29) {
     return 520;
    }
if (index == 30) {
     return 510;
    }
if (index == 31) {
     return 519;
    }
if (index == 32) {
     return 691;
    }
if (index == 33) {
     return 694;
    }
if (index == 34) {
     return 689;
    }
if (index == 35) {
     return 693;
    }
if (index == 36) {
     return 693;
    }
if (index == 37) {
     return 523;
    }
if (index == 38) {
     return 686;
    }
if (index == 39) {
     return 695;
    }
if (index == 40) {
     return 517;
    }
if (index == 41) {
     return 519;
    }
if (index == 42) {
     return 687;
    }
if (index == 43) {
     return 517;
    }
if (index == 44) {
     return 517;
    }
if (index == 45) {
     return 512;
    }
if (index == 46) {
     return 692;
    }
if (index == 47) {
     return 689;
    }
if (index == 48) {
     return 518;
    }
if (index == 49) {
     return 692;
    }
if (index == 50) {
     return 517;
    }
if (index == 51) {
     return 516;
    }
if (index == 52) {
     return 515;
    }
if (index == 53) {
     return 692;
    }
if (index == 54) {
     return 691;
    }
if (index == 55) {
     return 523;
    }
if (index == 56) {
     return 521;
    }
if (index == 57) {
     return 695;
    }
if (index == 58) {
     return 692;
    }
if (index == 59) {
     return 695;
    }
if (index == 60) {
     return 687;
    }
if (index == 61) {
     return 693;
    }
if (index == 62) {
     return 517;
    }
if (index == 63) {
     return 689;
    }
if (index == 64) {
     return 513;
    }
if (index == 65) {
     return 690;
    }
if (index == 66) {
     return 685;
    }
if (index == 67) {
     return 684;
    }
if (index == 68) {
     return 684;
    }
if (index == 69) {
     return 694;
    }
if (index == 70) {
     return 692;
    }
if (index == 71) {
     return 700;
    }
if (index == 72) {
     return 693;
    }
if (index == 73) {
     return 697;
    }
if (index == 74) {
     return 512;
    }
if (index == 75) {
     return 686;
    }
if (index == 76) {
     return 511;
    }
if (index == 77) {
     return 690;
    }
if (index == 78) {
     return 686;
    }
if (index == 79) {
     return 694;
    }
if (index == 80) {
     return 681;
    }
if (index == 81) {
     return 687;
    }
if (index == 82) {
     return 518;
    }
if (index == 83) {
     return 690;
    }
if (index == 84) {
     return 517;
    }
if (index == 85) {
     return 691;
    }
if (index == 86) {
     return 513;
    }
if (index == 87) {
     return 684;
    }
if (index == 88) {
     return 681;
    }
if (index == 89) {
     return 517;
    }
if (index == 90) {
     return 518;
    }
if (index == 91) {
     return 519;
    }
if (index == 92) {
     return 515;
    }
if (index == 93) {
     return 517;
    }
if (index == 94) {
     return 516;
    }
if (index == 95) {
     return 688;
    }
if (index == 96) {
     return 511;
    }
if (index == 97) {
     return 685;
    }
if (index == 98) {
     return 510;
    }
if (index == 99) {
     return 683;
    }
if (index == 100) {
     return 683;
    }
if (index == 101) {
     return 691;
    }
if (index == 102) {
     return 509;
    }
if (index == 103) {
     return 683;
    }
if (index == 104) {
     return 516;
    }
if (index == 105) {
     return 697;
    }
if (index == 106) {
     return 687;
    }
if (index == 107) {
     return 524;
    }
if (index == 108) {
     return 515;
    }
if (index == 109) {
     return 698;
    }
if (index == 110) {
     return 520;
    }
if (index == 111) {
     return 702;
    }
if (index == 112) {
     return 516;
    }
if (index == 113) {
     return 688;
    }
if (index == 114) {
     return 508;
    }
if (index == 115) {
     return 690;
    }
if (index == 116) {
     return 513;
    }
if (index == 117) {
     return 520;
    }
if (index == 118) {
     return 692;
    }
if (index == 119) {
     return 693;
    }
if (index == 120) {
     return 518;
    }
if (index == 121) {
     return 517;
    }
if (index == 122) {
     return 521;
    }
if (index == 123) {
     return 517;
    }
if (index == 124) {
     return 689;
    }
if (index == 125) {
     return 516;
    }
if (index == 126) {
     return 519;
    }
if (index == 127) {
     return 694;
    }
if (index == 128) {
     return 519;
    }
if (index == 129) {
     return 689;
    }
if (index == 130) {
     return 515;
    }
if (index == 131) {
     return 693;
    }
if (index == 132) {
     return 516;
    }
if (index == 133) {
     return 694;
    }
if (index == 134) {
     return 517;
    }
if (index == 135) {
     return 693;
    }
if (index == 136) {
     return 686;
    }
if (index == 137) {
     return 691;
    }
if (index == 138) {
     return 511;
    }
if (index == 139) {
     return 522;
    }
if (index == 140) {
     return 519;
    }
if (index == 141) {
     return 690;
    }
if (index == 142) {
     return 686;
    }
if (index == 143) {
     return 695;
    }
if (index == 144) {
     return 516;
    }
if (index == 145) {
     return 694;
    }
if (index == 146) {
     return 517;
    }
if (index == 147) {
     return 687;
    }
if (index == 148) {
     return 509;
    }
if (index == 149) {
     return 518;
    }
if (index == 150) {
     return 695;
    }
if (index == 151) {
     return 694;
    }
if (index == 152) {
     return 510;
    }
if (index == 153) {
     return 523;
    }
if (index == 154) {
     return 696;
    }
if (index == 155) {
     return 690;
    }
if (index == 156) {
     return 690;
    }
if (index == 157) {
     return 694;
    }
if (index == 158) {
     return 688;
    }
if (index == 159) {
     return 687;
    }
if (index == 160) {
     return 512;
    }
if (index == 161) {
     return 695;
    }
if (index == 162) {
     return 692;
    }
if (index == 163) {
     return 689;
    }
if (index == 164) {
     return 688;
    }
if (index == 165) {
     return 520;
    }
if (index == 166) {
     return 509;
    }
if (index == 167) {
     return 1104;
    }
if (index > 167) {
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
    var url = '/fedora/get/seapage:002_' + imgStr + '/digitalImage';
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
br.bookTitle= "Siam and the Siamese as described by American missionaries";
br.bookAuthor= "no recorded author";
br.bookPub= "London: T. Woolmer, 1886";
br.bookKeyword= "Thailand";
br.bookUrl  = '/catalog/sea:002';

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
