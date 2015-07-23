//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1306;
    }
if (index == 1) {
     return 628;
    }
if (index == 2) {
     return 622;
    }
if (index == 3) {
     return 628;
    }
if (index == 4) {
     return 624;
    }
if (index == 5) {
     return 624;
    }
if (index == 6) {
     return 626;
    }
if (index == 7) {
     return 624;
    }
if (index == 8) {
     return 626;
    }
if (index == 9) {
     return 620;
    }
if (index == 10) {
     return 624;
    }
if (index == 11) {
     return 622;
    }
if (index == 12) {
     return 620;
    }
if (index == 13) {
     return 624;
    }
if (index == 14) {
     return 618;
    }
if (index == 15) {
     return 622;
    }
if (index == 16) {
     return 616;
    }
if (index == 17) {
     return 618;
    }
if (index == 18) {
     return 620;
    }
if (index == 19) {
     return 616;
    }
if (index == 20) {
     return 618;
    }
if (index == 21) {
     return 616;
    }
if (index == 22) {
     return 616;
    }
if (index == 23) {
     return 618;
    }
if (index == 24) {
     return 612;
    }
if (index == 25) {
     return 614;
    }
if (index == 26) {
     return 612;
    }
if (index == 27) {
     return 612;
    }
if (index == 28) {
     return 616;
    }
if (index == 29) {
     return 610;
    }
if (index == 30) {
     return 614;
    }
if (index == 31) {
     return 608;
    }
if (index == 32) {
     return 610;
    }
if (index == 33) {
     return 610;
    }
if (index == 34) {
     return 606;
    }
if (index == 35) {
     return 612;
    }
if (index == 36) {
     return 608;
    }
if (index == 37) {
     return 608;
    }
if (index == 38) {
     return 610;
    }
if (index == 39) {
     return 606;
    }
if (index == 40) {
     return 612;
    }
if (index == 41) {
     return 606;
    }
if (index == 42) {
     return 608;
    }
if (index == 43) {
     return 610;
    }
if (index == 44) {
     return 606;
    }
if (index == 45) {
     return 626;
    }
if (index == 46) {
     return 632;
    }
if (index == 47) {
     return 634;
    }
if (index == 48) {
     return 634;
    }
if (index == 49) {
     return 626;
    }
if (index == 50) {
     return 630;
    }
if (index == 51) {
     return 626;
    }
if (index == 52) {
     return 630;
    }
if (index == 53) {
     return 628;
    }
if (index == 54) {
     return 628;
    }
if (index == 55) {
     return 632;
    }
if (index == 56) {
     return 626;
    }
if (index == 57) {
     return 632;
    }
if (index == 58) {
     return 632;
    }
if (index == 59) {
     return 634;
    }
if (index == 60) {
     return 634;
    }
if (index == 61) {
     return 630;
    }
if (index == 62) {
     return 636;
    }
if (index == 63) {
     return 632;
    }
if (index == 64) {
     return 632;
    }
if (index == 65) {
     return 634;
    }
if (index == 66) {
     return 630;
    }
if (index == 67) {
     return 636;
    }
if (index == 68) {
     return 630;
    }
if (index == 69) {
     return 632;
    }
if (index == 70) {
     return 634;
    }
if (index == 71) {
     return 630;
    }
if (index == 72) {
     return 636;
    }
if (index == 73) {
     return 630;
    }
if (index == 74) {
     return 634;
    }
if (index == 75) {
     return 632;
    }
if (index == 76) {
     return 630;
    }
if (index == 77) {
     return 634;
    }
if (index == 78) {
     return 628;
    }
if (index == 79) {
     return 632;
    }
if (index == 80) {
     return 632;
    }
if (index == 81) {
     return 630;
    }
if (index == 82) {
     return 634;
    }
if (index == 83) {
     return 630;
    }
if (index == 84) {
     return 644;
    }
if (index == 85) {
     return 638;
    }
if (index == 86) {
     return 640;
    }
if (index == 87) {
     return 642;
    }
if (index == 88) {
     return 638;
    }
if (index == 89) {
     return 642;
    }
if (index == 90) {
     return 638;
    }
if (index == 91) {
     return 638;
    }
if (index == 92) {
     return 640;
    }
if (index == 93) {
     return 636;
    }
if (index == 94) {
     return 642;
    }
if (index == 95) {
     return 636;
    }
if (index == 96) {
     return 638;
    }
if (index == 97) {
     return 640;
    }
if (index == 98) {
     return 638;
    }
if (index == 99) {
     return 642;
    }
if (index == 100) {
     return 636;
    }
if (index == 101) {
     return 640;
    }
if (index == 102) {
     return 634;
    }
if (index == 103) {
     return 632;
    }
if (index == 104) {
     return 638;
    }
if (index == 105) {
     return 632;
    }
if (index == 106) {
     return 636;
    }
if (index == 107) {
     return 636;
    }
if (index == 108) {
     return 634;
    }
if (index == 109) {
     return 638;
    }
if (index == 110) {
     return 634;
    }
if (index == 111) {
     return 638;
    }
if (index == 112) {
     return 636;
    }
if (index == 113) {
     return 636;
    }
if (index == 114) {
     return 644;
    }
if (index == 115) {
     return 640;
    }
if (index == 116) {
     return 646;
    }
if (index == 117) {
     return 640;
    }
if (index == 118) {
     return 642;
    }
if (index == 119) {
     return 644;
    }
if (index == 120) {
     return 640;
    }
if (index == 121) {
     return 646;
    }
if (index == 122) {
     return 642;
    }
if (index == 123) {
     return 642;
    }
if (index == 124) {
     return 644;
    }
if (index == 125) {
     return 640;
    }
if (index == 126) {
     return 644;
    }
if (index == 127) {
     return 640;
    }
if (index == 128) {
     return 644;
    }
if (index == 129) {
     return 644;
    }
if (index == 130) {
     return 642;
    }
if (index == 131) {
     return 646;
    }
if (index == 132) {
     return 640;
    }
if (index == 133) {
     return 644;
    }
if (index == 134) {
     return 644;
    }
if (index == 135) {
     return 642;
    }
if (index == 136) {
     return 646;
    }
if (index == 137) {
     return 640;
    }
if (index == 138) {
     return 646;
    }
if (index == 139) {
     return 642;
    }
if (index == 140) {
     return 642;
    }
if (index == 141) {
     return 646;
    }
if (index == 142) {
     return 640;
    }
if (index == 143) {
     return 646;
    }
if (index == 144) {
     return 642;
    }
if (index == 145) {
     return 644;
    }
if (index == 146) {
     return 646;
    }
if (index == 147) {
     return 640;
    }
if (index == 148) {
     return 646;
    }
if (index == 149) {
     return 642;
    }
if (index == 150) {
     return 642;
    }
if (index == 151) {
     return 644;
    }
if (index == 152) {
     return 640;
    }
if (index == 153) {
     return 646;
    }
if (index == 154) {
     return 642;
    }
if (index == 155) {
     return 644;
    }
if (index == 156) {
     return 644;
    }
if (index == 157) {
     return 642;
    }
if (index == 158) {
     return 646;
    }
if (index == 159) {
     return 642;
    }
if (index == 160) {
     return 644;
    }
if (index == 161) {
     return 644;
    }
if (index > 161) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 904;
    }
if (index == 1) {
     return 904;
    }
if (index == 2) {
     return 904;
    }
if (index == 3) {
     return 904;
    }
if (index == 4) {
     return 904;
    }
if (index == 5) {
     return 904;
    }
if (index == 6) {
     return 904;
    }
if (index == 7) {
     return 904;
    }
if (index == 8) {
     return 904;
    }
if (index == 9) {
     return 904;
    }
if (index == 10) {
     return 904;
    }
if (index == 11) {
     return 904;
    }
if (index == 12) {
     return 904;
    }
if (index == 13) {
     return 904;
    }
if (index == 14) {
     return 904;
    }
if (index == 15) {
     return 904;
    }
if (index == 16) {
     return 904;
    }
if (index == 17) {
     return 904;
    }
if (index == 18) {
     return 904;
    }
if (index == 19) {
     return 904;
    }
if (index == 20) {
     return 904;
    }
if (index == 21) {
     return 904;
    }
if (index == 22) {
     return 904;
    }
if (index == 23) {
     return 904;
    }
if (index == 24) {
     return 904;
    }
if (index == 25) {
     return 904;
    }
if (index == 26) {
     return 904;
    }
if (index == 27) {
     return 904;
    }
if (index == 28) {
     return 904;
    }
if (index == 29) {
     return 904;
    }
if (index == 30) {
     return 904;
    }
if (index == 31) {
     return 904;
    }
if (index == 32) {
     return 904;
    }
if (index == 33) {
     return 904;
    }
if (index == 34) {
     return 904;
    }
if (index == 35) {
     return 904;
    }
if (index == 36) {
     return 904;
    }
if (index == 37) {
     return 904;
    }
if (index == 38) {
     return 904;
    }
if (index == 39) {
     return 904;
    }
if (index == 40) {
     return 904;
    }
if (index == 41) {
     return 904;
    }
if (index == 42) {
     return 904;
    }
if (index == 43) {
     return 904;
    }
if (index == 44) {
     return 904;
    }
if (index == 45) {
     return 904;
    }
if (index == 46) {
     return 904;
    }
if (index == 47) {
     return 904;
    }
if (index == 48) {
     return 904;
    }
if (index == 49) {
     return 904;
    }
if (index == 50) {
     return 904;
    }
if (index == 51) {
     return 904;
    }
if (index == 52) {
     return 904;
    }
if (index == 53) {
     return 904;
    }
if (index == 54) {
     return 904;
    }
if (index == 55) {
     return 904;
    }
if (index == 56) {
     return 904;
    }
if (index == 57) {
     return 904;
    }
if (index == 58) {
     return 904;
    }
if (index == 59) {
     return 904;
    }
if (index == 60) {
     return 904;
    }
if (index == 61) {
     return 904;
    }
if (index == 62) {
     return 904;
    }
if (index == 63) {
     return 904;
    }
if (index == 64) {
     return 904;
    }
if (index == 65) {
     return 904;
    }
if (index == 66) {
     return 904;
    }
if (index == 67) {
     return 904;
    }
if (index == 68) {
     return 904;
    }
if (index == 69) {
     return 904;
    }
if (index == 70) {
     return 904;
    }
if (index == 71) {
     return 904;
    }
if (index == 72) {
     return 904;
    }
if (index == 73) {
     return 904;
    }
if (index == 74) {
     return 904;
    }
if (index == 75) {
     return 904;
    }
if (index == 76) {
     return 904;
    }
if (index == 77) {
     return 904;
    }
if (index == 78) {
     return 904;
    }
if (index == 79) {
     return 904;
    }
if (index == 80) {
     return 904;
    }
if (index == 81) {
     return 904;
    }
if (index == 82) {
     return 904;
    }
if (index == 83) {
     return 904;
    }
if (index == 84) {
     return 904;
    }
if (index == 85) {
     return 904;
    }
if (index == 86) {
     return 904;
    }
if (index == 87) {
     return 904;
    }
if (index == 88) {
     return 904;
    }
if (index == 89) {
     return 904;
    }
if (index == 90) {
     return 904;
    }
if (index == 91) {
     return 904;
    }
if (index == 92) {
     return 904;
    }
if (index == 93) {
     return 904;
    }
if (index == 94) {
     return 904;
    }
if (index == 95) {
     return 904;
    }
if (index == 96) {
     return 904;
    }
if (index == 97) {
     return 904;
    }
if (index == 98) {
     return 904;
    }
if (index == 99) {
     return 904;
    }
if (index == 100) {
     return 904;
    }
if (index == 101) {
     return 904;
    }
if (index == 102) {
     return 904;
    }
if (index == 103) {
     return 904;
    }
if (index == 104) {
     return 904;
    }
if (index == 105) {
     return 904;
    }
if (index == 106) {
     return 904;
    }
if (index == 107) {
     return 904;
    }
if (index == 108) {
     return 904;
    }
if (index == 109) {
     return 904;
    }
if (index == 110) {
     return 904;
    }
if (index == 111) {
     return 904;
    }
if (index == 112) {
     return 904;
    }
if (index == 113) {
     return 904;
    }
if (index == 114) {
     return 904;
    }
if (index == 115) {
     return 904;
    }
if (index == 116) {
     return 904;
    }
if (index == 117) {
     return 904;
    }
if (index == 118) {
     return 904;
    }
if (index == 119) {
     return 904;
    }
if (index == 120) {
     return 904;
    }
if (index == 121) {
     return 904;
    }
if (index == 122) {
     return 904;
    }
if (index == 123) {
     return 904;
    }
if (index == 124) {
     return 904;
    }
if (index == 125) {
     return 904;
    }
if (index == 126) {
     return 904;
    }
if (index == 127) {
     return 904;
    }
if (index == 128) {
     return 904;
    }
if (index == 129) {
     return 904;
    }
if (index == 130) {
     return 904;
    }
if (index == 131) {
     return 904;
    }
if (index == 132) {
     return 904;
    }
if (index == 133) {
     return 904;
    }
if (index == 134) {
     return 904;
    }
if (index == 135) {
     return 904;
    }
if (index == 136) {
     return 904;
    }
if (index == 137) {
     return 904;
    }
if (index == 138) {
     return 904;
    }
if (index == 139) {
     return 904;
    }
if (index == 140) {
     return 904;
    }
if (index == 141) {
     return 904;
    }
if (index == 142) {
     return 904;
    }
if (index == 143) {
     return 904;
    }
if (index == 144) {
     return 904;
    }
if (index == 145) {
     return 904;
    }
if (index == 146) {
     return 904;
    }
if (index == 147) {
     return 904;
    }
if (index == 148) {
     return 904;
    }
if (index == 149) {
     return 904;
    }
if (index == 150) {
     return 904;
    }
if (index == 151) {
     return 904;
    }
if (index == 152) {
     return 904;
    }
if (index == 153) {
     return 904;
    }
if (index == 154) {
     return 904;
    }
if (index == 155) {
     return 904;
    }
if (index == 156) {
     return 904;
    }
if (index == 157) {
     return 904;
    }
if (index == 158) {
     return 904;
    }
if (index == 159) {
     return 904;
    }
if (index == 160) {
     return 904;
    }
if (index == 161) {
     return 904;
    }
if (index > 161) {
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
    var url = '/fedora/get/scott:6032_' + imgStr + '/digitalImage';
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
br.numLeafs = 162;

// Book title and the URL used for the book title link
br.bookTitle= "State v. Patterson. Supreme Court of Alabama. April 1936.  Bill of exceptions to Supreme Court of Alabama. 162 p.";
br.bookAuthor= "Circuit Court, Morgan County";
br.bookPub= "Unknown: , April, 1936";
br.bookKeyword= "";
br.bookUrl  = '/scottsboro/catalog/scott:6032';

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
