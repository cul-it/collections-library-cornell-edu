//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1093;
    }
if (index == 1) {
     return 1989;
    }
if (index == 2) {
     return 1108;
    }
if (index == 3) {
     return 1989;
    }
if (index == 4) {
     return 1107;
    }
if (index == 5) {
     return 1989;
    }
if (index == 6) {
     return 1111;
    }
if (index == 7) {
     return 1883;
    }
if (index == 8) {
     return 1887;
    }
if (index == 9) {
     return 1992;
    }
if (index == 10) {
     return 1989;
    }
if (index == 11) {
     return 1973;
    }
if (index == 12) {
     return 1429;
    }
if (index == 13) {
     return 1382;
    }
if (index == 14) {
     return 1821;
    }
if (index == 15) {
     return 900;
    }
if (index == 16) {
     return 889;
    }
if (index == 17) {
     return 956;
    }
if (index == 18) {
     return 983;
    }
if (index == 19) {
     return 1369;
    }
if (index == 20) {
     return 1974;
    }
if (index == 21) {
     return 1373;
    }
if (index == 22) {
     return 1006;
    }
if (index == 23) {
     return 1004;
    }
if (index == 24) {
     return 1974;
    }
if (index == 25) {
     return 1974;
    }
if (index == 26) {
     return 1372;
    }
if (index == 27) {
     return 1974;
    }
if (index == 28) {
     return 1370;
    }
if (index == 29) {
     return 1360;
    }
if (index == 30) {
     return 893;
    }
if (index == 31) {
     return 1362;
    }
if (index == 32) {
     return 1368;
    }
if (index == 33) {
     return 999;
    }
if (index == 34) {
     return 1376;
    }
if (index == 35) {
     return 1367;
    }
if (index == 36) {
     return 1350;
    }
if (index == 37) {
     return 1373;
    }
if (index == 38) {
     return 1665;
    }
if (index == 39) {
     return 1686;
    }
if (index == 40) {
     return 1686;
    }
if (index == 41) {
     return 1662;
    }
if (index == 42) {
     return 1788;
    }
if (index == 43) {
     return 1734;
    }
if (index == 44) {
     return 1680;
    }
if (index == 45) {
     return 1677;
    }
if (index == 46) {
     return 1710;
    }
if (index == 47) {
     return 1800;
    }
if (index == 48) {
     return 1785;
    }
if (index == 49) {
     return 1948;
    }
if (index == 50) {
     return 1704;
    }
if (index == 51) {
     return 1809;
    }
if (index == 52) {
     return 1767;
    }
if (index == 53) {
     return 1962;
    }
if (index == 54) {
     return 1767;
    }
if (index == 55) {
     return 1240;
    }
if (index == 56) {
     return 1252;
    }
if (index == 57) {
     return 1147;
    }
if (index == 58) {
     return 1159;
    }
if (index == 59) {
     return 1734;
    }
if (index > 59) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1514;
    }
if (index == 1) {
     return 1414;
    }
if (index == 2) {
     return 1534;
    }
if (index == 3) {
     return 1414;
    }
if (index == 4) {
     return 1527;
    }
if (index == 5) {
     return 1414;
    }
if (index == 6) {
     return 1515;
    }
if (index == 7) {
     return 1519;
    }
if (index == 8) {
     return 1513;
    }
if (index == 9) {
     return 1418;
    }
if (index == 10) {
     return 1414;
    }
if (index == 11) {
     return 1302;
    }
if (index == 12) {
     return 1056;
    }
if (index == 13) {
     return 1005;
    }
if (index == 14) {
     return 726;
    }
if (index == 15) {
     return 513;
    }
if (index == 16) {
     return 522;
    }
if (index == 17) {
     return 1358;
    }
if (index == 18) {
     return 1366;
    }
if (index == 19) {
     return 992;
    }
if (index == 20) {
     return 1336;
    }
if (index == 21) {
     return 1005;
    }
if (index == 22) {
     return 669;
    }
if (index == 23) {
     return 674;
    }
if (index == 24) {
     return 666;
    }
if (index == 25) {
     return 684;
    }
if (index == 26) {
     return 998;
    }
if (index == 27) {
     return 1374;
    }
if (index == 28) {
     return 1002;
    }
if (index == 29) {
     return 1000;
    }
if (index == 30) {
     return 1267;
    }
if (index == 31) {
     return 1000;
    }
if (index == 32) {
     return 992;
    }
if (index == 33) {
     return 1365;
    }
if (index == 34) {
     return 1004;
    }
if (index == 35) {
     return 1001;
    }
if (index == 36) {
     return 987;
    }
if (index == 37) {
     return 1001;
    }
if (index == 38) {
     return 1356;
    }
if (index == 39) {
     return 1368;
    }
if (index == 40) {
     return 1359;
    }
if (index == 41) {
     return 1376;
    }
if (index == 42) {
     return 1364;
    }
if (index == 43) {
     return 1391;
    }
if (index == 44) {
     return 1376;
    }
if (index == 45) {
     return 1322;
    }
if (index == 46) {
     return 1352;
    }
if (index == 47) {
     return 651;
    }
if (index == 48) {
     return 582;
    }
if (index == 49) {
     return 1065;
    }
if (index == 50) {
     return 1367;
    }
if (index == 51) {
     return 558;
    }
if (index == 52) {
     return 648;
    }
if (index == 53) {
     return 1179;
    }
if (index == 54) {
     return 1409;
    }
if (index == 55) {
     return 924;
    }
if (index == 56) {
     return 928;
    }
if (index == 57) {
     return 812;
    }
if (index == 58) {
     return 1040;
    }
if (index == 59) {
     return 1446;
    }
if (index > 59) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:011d_' + imgStr + '/digitalImage';
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
br.numLeafs = 60;

// Book title and the URL used for the book title link
br.bookTitle= "Voyage d'exploration en Indo-Chine : effectue pendant les annees 1866, 1867 et 1868, v.4";
br.bookAuthor= "Garnier, Francis";
br.bookPub= "Paris: Hachette et cie, 1873";
br.bookKeyword= "Indochina<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scientific expeditions<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Natural history--Indochina";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:011d';

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
