//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 462;
    }
if (index == 1) {
     return 417;
    }
if (index == 2) {
     return 388;
    }
if (index == 3) {
     return 392;
    }
if (index == 4) {
     return 414;
    }
if (index == 5) {
     return 397;
    }
if (index == 6) {
     return 399;
    }
if (index == 7) {
     return 384;
    }
if (index == 8) {
     return 396;
    }
if (index == 9) {
     return 398;
    }
if (index == 10) {
     return 368;
    }
if (index == 11) {
     return 379;
    }
if (index == 12) {
     return 360;
    }
if (index == 13) {
     return 350;
    }
if (index == 14) {
     return 348;
    }
if (index == 15) {
     return 660;
    }
if (index == 16) {
     return 364;
    }
if (index == 17) {
     return 658;
    }
if (index == 18) {
     return 412;
    }
if (index == 19) {
     return 653;
    }
if (index == 20) {
     return 410;
    }
if (index == 21) {
     return 374;
    }
if (index == 22) {
     return 644;
    }
if (index == 23) {
     return 389;
    }
if (index == 24) {
     return 644;
    }
if (index == 25) {
     return 386;
    }
if (index == 26) {
     return 359;
    }
if (index == 27) {
     return 379;
    }
if (index == 28) {
     return 644;
    }
if (index == 29) {
     return 370;
    }
if (index == 30) {
     return 644;
    }
if (index == 31) {
     return 374;
    }
if (index == 32) {
     return 644;
    }
if (index == 33) {
     return 370;
    }
if (index == 34) {
     return 364;
    }
if (index == 35) {
     return 652;
    }
if (index == 36) {
     return 396;
    }
if (index == 37) {
     return 658;
    }
if (index == 38) {
     return 367;
    }
if (index == 39) {
     return 659;
    }
if (index == 40) {
     return 370;
    }
if (index == 41) {
     return 387;
    }
if (index == 42) {
     return 376;
    }
if (index == 43) {
     return 351;
    }
if (index == 44) {
     return 353;
    }
if (index == 45) {
     return 635;
    }
if (index == 46) {
     return 366;
    }
if (index == 47) {
     return 370;
    }
if (index == 48) {
     return 359;
    }
if (index == 49) {
     return 647;
    }
if (index == 50) {
     return 360;
    }
if (index == 51) {
     return 639;
    }
if (index == 52) {
     return 359;
    }
if (index == 53) {
     return 635;
    }
if (index == 54) {
     return 369;
    }
if (index == 55) {
     return 632;
    }
if (index == 56) {
     return 372;
    }
if (index == 57) {
     return 631;
    }
if (index == 58) {
     return 354;
    }
if (index == 59) {
     return 631;
    }
if (index == 60) {
     return 360;
    }
if (index == 61) {
     return 645;
    }
if (index == 62) {
     return 382;
    }
if (index == 63) {
     return 638;
    }
if (index == 64) {
     return 376;
    }
if (index == 65) {
     return 647;
    }
if (index == 66) {
     return 346;
    }
if (index == 67) {
     return 645;
    }
if (index == 68) {
     return 366;
    }
if (index == 69) {
     return 648;
    }
if (index == 70) {
     return 353;
    }
if (index == 71) {
     return 640;
    }
if (index == 72) {
     return 351;
    }
if (index == 73) {
     return 641;
    }
if (index == 74) {
     return 373;
    }
if (index == 75) {
     return 644;
    }
if (index == 76) {
     return 369;
    }
if (index == 77) {
     return 647;
    }
if (index == 78) {
     return 369;
    }
if (index == 79) {
     return 648;
    }
if (index == 80) {
     return 370;
    }
if (index == 81) {
     return 645;
    }
if (index == 82) {
     return 375;
    }
if (index == 83) {
     return 643;
    }
if (index == 84) {
     return 377;
    }
if (index == 85) {
     return 643;
    }
if (index == 86) {
     return 372;
    }
if (index == 87) {
     return 638;
    }
if (index == 88) {
     return 359;
    }
if (index == 89) {
     return 634;
    }
if (index == 90) {
     return 369;
    }
if (index == 91) {
     return 644;
    }
if (index == 92) {
     return 369;
    }
if (index == 93) {
     return 640;
    }
if (index == 94) {
     return 379;
    }
if (index == 95) {
     return 648;
    }
if (index == 96) {
     return 371;
    }
if (index == 97) {
     return 640;
    }
if (index == 98) {
     return 377;
    }
if (index == 99) {
     return 648;
    }
if (index == 100) {
     return 369;
    }
if (index == 101) {
     return 648;
    }
if (index == 102) {
     return 375;
    }
if (index == 103) {
     return 648;
    }
if (index == 104) {
     return 360;
    }
if (index == 105) {
     return 350;
    }
if (index == 106) {
     return 350;
    }
if (index == 107) {
     return 648;
    }
if (index == 108) {
     return 377;
    }
if (index == 109) {
     return 648;
    }
if (index == 110) {
     return 380;
    }
if (index == 111) {
     return 643;
    }
if (index == 112) {
     return 644;
    }
if (index == 113) {
     return 642;
    }
if (index == 114) {
     return 644;
    }
if (index == 115) {
     return 646;
    }
if (index == 116) {
     return 620;
    }
if (index == 117) {
     return 386;
    }
if (index == 118) {
     return 385;
    }
if (index == 119) {
     return 381;
    }
if (index == 120) {
     return 387;
    }
if (index == 121) {
     return 372;
    }
if (index == 122) {
     return 384;
    }
if (index == 123) {
     return 372;
    }
if (index == 124) {
     return 642;
    }
if (index == 125) {
     return 380;
    }
if (index == 126) {
     return 1250;
    }
if (index == 127) {
     return 1304;
    }
if (index == 128) {
     return 651;
    }
if (index == 129) {
     return 629;
    }
if (index == 130) {
     return 377;
    }
if (index == 131) {
     return 644;
    }
if (index == 132) {
     return 376;
    }
if (index == 133) {
     return 644;
    }
if (index == 134) {
     return 370;
    }
if (index == 135) {
     return 640;
    }
if (index == 136) {
     return 370;
    }
if (index == 137) {
     return 641;
    }
if (index == 138) {
     return 372;
    }
if (index == 139) {
     return 640;
    }
if (index == 140) {
     return 347;
    }
if (index == 141) {
     return 640;
    }
if (index == 142) {
     return 358;
    }
if (index == 143) {
     return 387;
    }
if (index == 144) {
     return 370;
    }
if (index == 145) {
     return 630;
    }
if (index == 146) {
     return 375;
    }
if (index == 147) {
     return 630;
    }
if (index == 148) {
     return 354;
    }
if (index == 149) {
     return 381;
    }
if (index == 150) {
     return 368;
    }
if (index == 151) {
     return 634;
    }
if (index == 152) {
     return 358;
    }
if (index == 153) {
     return 374;
    }
if (index == 154) {
     return 352;
    }
if (index == 155) {
     return 625;
    }
if (index == 156) {
     return 363;
    }
if (index == 157) {
     return 374;
    }
if (index == 158) {
     return 380;
    }
if (index == 159) {
     return 628;
    }
if (index == 160) {
     return 365;
    }
if (index == 161) {
     return 626;
    }
if (index == 162) {
     return 365;
    }
if (index == 163) {
     return 624;
    }
if (index == 164) {
     return 362;
    }
if (index == 165) {
     return 367;
    }
if (index == 166) {
     return 362;
    }
if (index == 167) {
     return 369;
    }
if (index == 168) {
     return 361;
    }
if (index == 169) {
     return 370;
    }
if (index == 170) {
     return 365;
    }
if (index == 171) {
     return 619;
    }
if (index == 172) {
     return 370;
    }
if (index == 173) {
     return 656;
    }
if (index == 174) {
     return 386;
    }
if (index == 175) {
     return 657;
    }
if (index == 176) {
     return 385;
    }
if (index == 177) {
     return 657;
    }
if (index == 178) {
     return 382;
    }
if (index == 179) {
     return 658;
    }
if (index == 180) {
     return 384;
    }
if (index == 181) {
     return 652;
    }
if (index == 182) {
     return 866;
    }
if (index == 183) {
     return 387;
    }
if (index == 184) {
     return 398;
    }
if (index == 185) {
     return 648;
    }
if (index == 186) {
     return 399;
    }
if (index == 187) {
     return 387;
    }
if (index == 188) {
     return 385;
    }
if (index == 189) {
     return 650;
    }
if (index == 190) {
     return 364;
    }
if (index == 191) {
     return 376;
    }
if (index == 192) {
     return 364;
    }
if (index == 193) {
     return 386;
    }
if (index == 194) {
     return 339;
    }
if (index == 195) {
     return 457;
    }
if (index > 195) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 689;
    }
if (index == 1) {
     return 657;
    }
if (index == 2) {
     return 660;
    }
if (index == 3) {
     return 657;
    }
if (index == 4) {
     return 664;
    }
if (index == 5) {
     return 645;
    }
if (index == 6) {
     return 658;
    }
if (index == 7) {
     return 630;
    }
if (index == 8) {
     return 661;
    }
if (index == 9) {
     return 643;
    }
if (index == 10) {
     return 662;
    }
if (index == 11) {
     return 689;
    }
if (index == 12) {
     return 664;
    }
if (index == 13) {
     return 673;
    }
if (index == 14) {
     return 663;
    }
if (index == 15) {
     return 377;
    }
if (index == 16) {
     return 647;
    }
if (index == 17) {
     return 378;
    }
if (index == 18) {
     return 646;
    }
if (index == 19) {
     return 372;
    }
if (index == 20) {
     return 644;
    }
if (index == 21) {
     return 664;
    }
if (index == 22) {
     return 363;
    }
if (index == 23) {
     return 657;
    }
if (index == 24) {
     return 354;
    }
if (index == 25) {
     return 662;
    }
if (index == 26) {
     return 644;
    }
if (index == 27) {
     return 660;
    }
if (index == 28) {
     return 357;
    }
if (index == 29) {
     return 661;
    }
if (index == 30) {
     return 361;
    }
if (index == 31) {
     return 656;
    }
if (index == 32) {
     return 366;
    }
if (index == 33) {
     return 655;
    }
if (index == 34) {
     return 644;
    }
if (index == 35) {
     return 352;
    }
if (index == 36) {
     return 660;
    }
if (index == 37) {
     return 363;
    }
if (index == 38) {
     return 644;
    }
if (index == 39) {
     return 366;
    }
if (index == 40) {
     return 654;
    }
if (index == 41) {
     return 652;
    }
if (index == 42) {
     return 652;
    }
if (index == 43) {
     return 645;
    }
if (index == 44) {
     return 642;
    }
if (index == 45) {
     return 362;
    }
if (index == 46) {
     return 635;
    }
if (index == 47) {
     return 643;
    }
if (index == 48) {
     return 637;
    }
if (index == 49) {
     return 349;
    }
if (index == 50) {
     return 651;
    }
if (index == 51) {
     return 367;
    }
if (index == 52) {
     return 638;
    }
if (index == 53) {
     return 339;
    }
if (index == 54) {
     return 636;
    }
if (index == 55) {
     return 343;
    }
if (index == 56) {
     return 636;
    }
if (index == 57) {
     return 339;
    }
if (index == 58) {
     return 634;
    }
if (index == 59) {
     return 345;
    }
if (index == 60) {
     return 631;
    }
if (index == 61) {
     return 349;
    }
if (index == 62) {
     return 651;
    }
if (index == 63) {
     return 331;
    }
if (index == 64) {
     return 647;
    }
if (index == 65) {
     return 334;
    }
if (index == 66) {
     return 636;
    }
if (index == 67) {
     return 337;
    }
if (index == 68) {
     return 645;
    }
if (index == 69) {
     return 340;
    }
if (index == 70) {
     return 646;
    }
if (index == 71) {
     return 356;
    }
if (index == 72) {
     return 644;
    }
if (index == 73) {
     return 356;
    }
if (index == 74) {
     return 646;
    }
if (index == 75) {
     return 354;
    }
if (index == 76) {
     return 644;
    }
if (index == 77) {
     return 353;
    }
if (index == 78) {
     return 644;
    }
if (index == 79) {
     return 354;
    }
if (index == 80) {
     return 652;
    }
if (index == 81) {
     return 363;
    }
if (index == 82) {
     return 647;
    }
if (index == 83) {
     return 353;
    }
if (index == 84) {
     return 648;
    }
if (index == 85) {
     return 356;
    }
if (index == 86) {
     return 645;
    }
if (index == 87) {
     return 347;
    }
if (index == 88) {
     return 647;
    }
if (index == 89) {
     return 355;
    }
if (index == 90) {
     return 644;
    }
if (index == 91) {
     return 367;
    }
if (index == 92) {
     return 644;
    }
if (index == 93) {
     return 359;
    }
if (index == 94) {
     return 649;
    }
if (index == 95) {
     return 359;
    }
if (index == 96) {
     return 644;
    }
if (index == 97) {
     return 357;
    }
if (index == 98) {
     return 648;
    }
if (index == 99) {
     return 359;
    }
if (index == 100) {
     return 644;
    }
if (index == 101) {
     return 360;
    }
if (index == 102) {
     return 647;
    }
if (index == 103) {
     return 347;
    }
if (index == 104) {
     return 645;
    }
if (index == 105) {
     return 648;
    }
if (index == 106) {
     return 644;
    }
if (index == 107) {
     return 355;
    }
if (index == 108) {
     return 648;
    }
if (index == 109) {
     return 341;
    }
if (index == 110) {
     return 650;
    }
if (index == 111) {
     return 383;
    }
if (index == 112) {
     return 390;
    }
if (index == 113) {
     return 398;
    }
if (index == 114) {
     return 353;
    }
if (index == 115) {
     return 371;
    }
if (index == 116) {
     return 939;
    }
if (index == 117) {
     return 648;
    }
if (index == 118) {
     return 655;
    }
if (index == 119) {
     return 643;
    }
if (index == 120) {
     return 651;
    }
if (index == 121) {
     return 653;
    }
if (index == 122) {
     return 652;
    }
if (index == 123) {
     return 658;
    }
if (index == 124) {
     return 369;
    }
if (index == 125) {
     return 661;
    }
if (index == 126) {
     return 640;
    }
if (index == 127) {
     return 633;
    }
if (index == 128) {
     return 405;
    }
if (index == 129) {
     return 353;
    }
if (index == 130) {
     return 643;
    }
if (index == 131) {
     return 363;
    }
if (index == 132) {
     return 643;
    }
if (index == 133) {
     return 387;
    }
if (index == 134) {
     return 639;
    }
if (index == 135) {
     return 379;
    }
if (index == 136) {
     return 635;
    }
if (index == 137) {
     return 369;
    }
if (index == 138) {
     return 636;
    }
if (index == 139) {
     return 372;
    }
if (index == 140) {
     return 633;
    }
if (index == 141) {
     return 387;
    }
if (index == 142) {
     return 645;
    }
if (index == 143) {
     return 634;
    }
if (index == 144) {
     return 640;
    }
if (index == 145) {
     return 376;
    }
if (index == 146) {
     return 642;
    }
if (index == 147) {
     return 379;
    }
if (index == 148) {
     return 638;
    }
if (index == 149) {
     return 635;
    }
if (index == 150) {
     return 637;
    }
if (index == 151) {
     return 376;
    }
if (index == 152) {
     return 639;
    }
if (index == 153) {
     return 630;
    }
if (index == 154) {
     return 640;
    }
if (index == 155) {
     return 362;
    }
if (index == 156) {
     return 636;
    }
if (index == 157) {
     return 624;
    }
if (index == 158) {
     return 636;
    }
if (index == 159) {
     return 384;
    }
if (index == 160) {
     return 630;
    }
if (index == 161) {
     return 368;
    }
if (index == 162) {
     return 629;
    }
if (index == 163) {
     return 362;
    }
if (index == 164) {
     return 629;
    }
if (index == 165) {
     return 619;
    }
if (index == 166) {
     return 626;
    }
if (index == 167) {
     return 619;
    }
if (index == 168) {
     return 626;
    }
if (index == 169) {
     return 617;
    }
if (index == 170) {
     return 628;
    }
if (index == 171) {
     return 369;
    }
if (index == 172) {
     return 623;
    }
if (index == 173) {
     return 366;
    }
if (index == 174) {
     return 655;
    }
if (index == 175) {
     return 370;
    }
if (index == 176) {
     return 651;
    }
if (index == 177) {
     return 372;
    }
if (index == 178) {
     return 655;
    }
if (index == 179) {
     return 370;
    }
if (index == 180) {
     return 652;
    }
if (index == 181) {
     return 364;
    }
if (index == 182) {
     return 1274;
    }
if (index == 183) {
     return 653;
    }
if (index == 184) {
     return 652;
    }
if (index == 185) {
     return 363;
    }
if (index == 186) {
     return 652;
    }
if (index == 187) {
     return 650;
    }
if (index == 188) {
     return 642;
    }
if (index == 189) {
     return 368;
    }
if (index == 190) {
     return 648;
    }
if (index == 191) {
     return 649;
    }
if (index == 192) {
     return 646;
    }
if (index == 193) {
     return 647;
    }
if (index == 194) {
     return 641;
    }
if (index == 195) {
     return 683;
    }
if (index > 195) {
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
    var url = '/fedora/get/seapage:096_' + imgStr + '/digitalImage';
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
br.numLeafs = 200;

// Book title and the URL used for the book title link
br.bookTitle= "Short guide of Sumatra, with a more complete description of the Padang highlands";
br.bookAuthor= "Officieel Toeristenbureau voor Nederlandsch-Indie";
br.bookPub= "Batavia: Printed by G. Kolff and co, 1921";
br.bookKeyword= "Sumatra (Indonesia)--Guidebooks";
br.bookUrl  = '/catalog/sea:096';

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
