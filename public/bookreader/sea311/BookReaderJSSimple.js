//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 870;
    }
if (index == 1) {
     return 835;
    }
if (index == 2) {
     return 812;
    }
if (index == 3) {
     return 779;
    }
if (index == 4) {
     return 796;
    }
if (index == 5) {
     return 777;
    }
if (index == 6) {
     return 765;
    }
if (index == 7) {
     return 771;
    }
if (index == 8) {
     return 768;
    }
if (index == 9) {
     return 769;
    }
if (index == 10) {
     return 758;
    }
if (index == 11) {
     return 758;
    }
if (index == 12) {
     return 749;
    }
if (index == 13) {
     return 778;
    }
if (index == 14) {
     return 747;
    }
if (index == 15) {
     return 763;
    }
if (index == 16) {
     return 743;
    }
if (index == 17) {
     return 770;
    }
if (index == 18) {
     return 747;
    }
if (index == 19) {
     return 779;
    }
if (index == 20) {
     return 745;
    }
if (index == 21) {
     return 772;
    }
if (index == 22) {
     return 741;
    }
if (index == 23) {
     return 765;
    }
if (index == 24) {
     return 731;
    }
if (index == 25) {
     return 772;
    }
if (index == 26) {
     return 741;
    }
if (index == 27) {
     return 778;
    }
if (index == 28) {
     return 759;
    }
if (index == 29) {
     return 780;
    }
if (index == 30) {
     return 750;
    }
if (index == 31) {
     return 778;
    }
if (index == 32) {
     return 749;
    }
if (index == 33) {
     return 771;
    }
if (index == 34) {
     return 750;
    }
if (index == 35) {
     return 772;
    }
if (index == 36) {
     return 732;
    }
if (index == 37) {
     return 784;
    }
if (index == 38) {
     return 741;
    }
if (index == 39) {
     return 785;
    }
if (index == 40) {
     return 764;
    }
if (index == 41) {
     return 767;
    }
if (index == 42) {
     return 758;
    }
if (index == 43) {
     return 766;
    }
if (index == 44) {
     return 757;
    }
if (index == 45) {
     return 765;
    }
if (index == 46) {
     return 746;
    }
if (index == 47) {
     return 775;
    }
if (index == 48) {
     return 756;
    }
if (index == 49) {
     return 779;
    }
if (index == 50) {
     return 744;
    }
if (index == 51) {
     return 767;
    }
if (index == 52) {
     return 746;
    }
if (index == 53) {
     return 757;
    }
if (index == 54) {
     return 743;
    }
if (index == 55) {
     return 765;
    }
if (index == 56) {
     return 753;
    }
if (index == 57) {
     return 770;
    }
if (index == 58) {
     return 736;
    }
if (index == 59) {
     return 757;
    }
if (index == 60) {
     return 726;
    }
if (index == 61) {
     return 753;
    }
if (index == 62) {
     return 747;
    }
if (index == 63) {
     return 764;
    }
if (index == 64) {
     return 746;
    }
if (index == 65) {
     return 755;
    }
if (index == 66) {
     return 751;
    }
if (index == 67) {
     return 775;
    }
if (index == 68) {
     return 743;
    }
if (index == 69) {
     return 761;
    }
if (index == 70) {
     return 746;
    }
if (index == 71) {
     return 777;
    }
if (index == 72) {
     return 776;
    }
if (index == 73) {
     return 768;
    }
if (index == 74) {
     return 748;
    }
if (index == 75) {
     return 765;
    }
if (index == 76) {
     return 763;
    }
if (index == 77) {
     return 756;
    }
if (index == 78) {
     return 758;
    }
if (index == 79) {
     return 760;
    }
if (index == 80) {
     return 750;
    }
if (index == 81) {
     return 762;
    }
if (index == 82) {
     return 760;
    }
if (index == 83) {
     return 771;
    }
if (index == 84) {
     return 734;
    }
if (index == 85) {
     return 753;
    }
if (index == 86) {
     return 741;
    }
if (index == 87) {
     return 769;
    }
if (index == 88) {
     return 760;
    }
if (index == 89) {
     return 758;
    }
if (index == 90) {
     return 755;
    }
if (index == 91) {
     return 760;
    }
if (index == 92) {
     return 783;
    }
if (index == 93) {
     return 747;
    }
if (index == 94) {
     return 739;
    }
if (index == 95) {
     return 760;
    }
if (index == 96) {
     return 742;
    }
if (index == 97) {
     return 756;
    }
if (index == 98) {
     return 747;
    }
if (index == 99) {
     return 752;
    }
if (index == 100) {
     return 750;
    }
if (index == 101) {
     return 754;
    }
if (index == 102) {
     return 741;
    }
if (index == 103) {
     return 764;
    }
if (index == 104) {
     return 734;
    }
if (index == 105) {
     return 759;
    }
if (index == 106) {
     return 737;
    }
if (index == 107) {
     return 766;
    }
if (index == 108) {
     return 752;
    }
if (index == 109) {
     return 768;
    }
if (index == 110) {
     return 730;
    }
if (index == 111) {
     return 748;
    }
if (index == 112) {
     return 784;
    }
if (index == 113) {
     return 769;
    }
if (index == 114) {
     return 751;
    }
if (index == 115) {
     return 772;
    }
if (index == 116) {
     return 726;
    }
if (index == 117) {
     return 819;
    }
if (index > 117) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1376;
    }
if (index == 1) {
     return 1320;
    }
if (index == 2) {
     return 1320;
    }
if (index == 3) {
     return 1312;
    }
if (index == 4) {
     return 1312;
    }
if (index == 5) {
     return 1310;
    }
if (index == 6) {
     return 1319;
    }
if (index == 7) {
     return 1324;
    }
if (index == 8) {
     return 1323;
    }
if (index == 9) {
     return 1318;
    }
if (index == 10) {
     return 1312;
    }
if (index == 11) {
     return 1312;
    }
if (index == 12) {
     return 1312;
    }
if (index == 13) {
     return 1317;
    }
if (index == 14) {
     return 1312;
    }
if (index == 15) {
     return 1316;
    }
if (index == 16) {
     return 1303;
    }
if (index == 17) {
     return 1313;
    }
if (index == 18) {
     return 1300;
    }
if (index == 19) {
     return 1322;
    }
if (index == 20) {
     return 1305;
    }
if (index == 21) {
     return 1305;
    }
if (index == 22) {
     return 1306;
    }
if (index == 23) {
     return 1314;
    }
if (index == 24) {
     return 1311;
    }
if (index == 25) {
     return 1314;
    }
if (index == 26) {
     return 1309;
    }
if (index == 27) {
     return 1316;
    }
if (index == 28) {
     return 1306;
    }
if (index == 29) {
     return 1322;
    }
if (index == 30) {
     return 1304;
    }
if (index == 31) {
     return 1321;
    }
if (index == 32) {
     return 1300;
    }
if (index == 33) {
     return 1322;
    }
if (index == 34) {
     return 1306;
    }
if (index == 35) {
     return 1325;
    }
if (index == 36) {
     return 1305;
    }
if (index == 37) {
     return 1321;
    }
if (index == 38) {
     return 1308;
    }
if (index == 39) {
     return 1328;
    }
if (index == 40) {
     return 1318;
    }
if (index == 41) {
     return 1324;
    }
if (index == 42) {
     return 1300;
    }
if (index == 43) {
     return 1297;
    }
if (index == 44) {
     return 1295;
    }
if (index == 45) {
     return 1285;
    }
if (index == 46) {
     return 1299;
    }
if (index == 47) {
     return 1312;
    }
if (index == 48) {
     return 1320;
    }
if (index == 49) {
     return 1318;
    }
if (index == 50) {
     return 1319;
    }
if (index == 51) {
     return 1324;
    }
if (index == 52) {
     return 1314;
    }
if (index == 53) {
     return 1322;
    }
if (index == 54) {
     return 1316;
    }
if (index == 55) {
     return 1322;
    }
if (index == 56) {
     return 1315;
    }
if (index == 57) {
     return 1318;
    }
if (index == 58) {
     return 1314;
    }
if (index == 59) {
     return 1312;
    }
if (index == 60) {
     return 1312;
    }
if (index == 61) {
     return 1319;
    }
if (index == 62) {
     return 1312;
    }
if (index == 63) {
     return 1310;
    }
if (index == 64) {
     return 1319;
    }
if (index == 65) {
     return 1310;
    }
if (index == 66) {
     return 1310;
    }
if (index == 67) {
     return 1319;
    }
if (index == 68) {
     return 1312;
    }
if (index == 69) {
     return 1318;
    }
if (index == 70) {
     return 1327;
    }
if (index == 71) {
     return 1311;
    }
if (index == 72) {
     return 1310;
    }
if (index == 73) {
     return 1302;
    }
if (index == 74) {
     return 1312;
    }
if (index == 75) {
     return 1305;
    }
if (index == 76) {
     return 1326;
    }
if (index == 77) {
     return 1299;
    }
if (index == 78) {
     return 1330;
    }
if (index == 79) {
     return 1302;
    }
if (index == 80) {
     return 1312;
    }
if (index == 81) {
     return 1306;
    }
if (index == 82) {
     return 1306;
    }
if (index == 83) {
     return 1322;
    }
if (index == 84) {
     return 1307;
    }
if (index == 85) {
     return 1300;
    }
if (index == 86) {
     return 1298;
    }
if (index == 87) {
     return 1308;
    }
if (index == 88) {
     return 1305;
    }
if (index == 89) {
     return 1315;
    }
if (index == 90) {
     return 1313;
    }
if (index == 91) {
     return 1310;
    }
if (index == 92) {
     return 1314;
    }
if (index == 93) {
     return 1306;
    }
if (index == 94) {
     return 1308;
    }
if (index == 95) {
     return 1316;
    }
if (index == 96) {
     return 1293;
    }
if (index == 97) {
     return 1304;
    }
if (index == 98) {
     return 1298;
    }
if (index == 99) {
     return 1303;
    }
if (index == 100) {
     return 1308;
    }
if (index == 101) {
     return 1311;
    }
if (index == 102) {
     return 1302;
    }
if (index == 103) {
     return 1322;
    }
if (index == 104) {
     return 1299;
    }
if (index == 105) {
     return 1312;
    }
if (index == 106) {
     return 1304;
    }
if (index == 107) {
     return 1326;
    }
if (index == 108) {
     return 1321;
    }
if (index == 109) {
     return 1308;
    }
if (index == 110) {
     return 1308;
    }
if (index == 111) {
     return 1317;
    }
if (index == 112) {
     return 1314;
    }
if (index == 113) {
     return 1321;
    }
if (index == 114) {
     return 1336;
    }
if (index == 115) {
     return 1306;
    }
if (index == 116) {
     return 1300;
    }
if (index == 117) {
     return 1312;
    }
if (index > 117) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:311_' + imgStr + '/digitalImage';
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
br.numLeafs = 118;

// Book title and the URL used for the book title link
br.bookTitle= "A sketch of the services of the Madras European Regiment during the Burmese War. By an officer of the corps";
br.bookAuthor= "[Butler, John] Major";
br.bookPub= "London: Smith, Elder, 1839";
br.bookKeyword= "East India Company.--Army<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Great Britain.--Army--Colonial forces<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Burmese War, 1824-1826";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:311';

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
