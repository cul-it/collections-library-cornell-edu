//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 879;
    }
if (index == 1) {
     return 906;
    }
if (index == 2) {
     return 897;
    }
if (index == 3) {
     return 906;
    }
if (index == 4) {
     return 897;
    }
if (index == 5) {
     return 906;
    }
if (index == 6) {
     return 897;
    }
if (index == 7) {
     return 873;
    }
if (index == 8) {
     return 882;
    }
if (index == 9) {
     return 850;
    }
if (index == 10) {
     return 867;
    }
if (index == 11) {
     return 849;
    }
if (index == 12) {
     return 881;
    }
if (index == 13) {
     return 855;
    }
if (index == 14) {
     return 828;
    }
if (index == 15) {
     return 872;
    }
if (index == 16) {
     return 859;
    }
if (index == 17) {
     return 866;
    }
if (index == 18) {
     return 851;
    }
if (index == 19) {
     return 837;
    }
if (index == 20) {
     return 862;
    }
if (index == 21) {
     return 843;
    }
if (index == 22) {
     return 855;
    }
if (index == 23) {
     return 848;
    }
if (index == 24) {
     return 839;
    }
if (index == 25) {
     return 847;
    }
if (index == 26) {
     return 863;
    }
if (index == 27) {
     return 841;
    }
if (index == 28) {
     return 862;
    }
if (index == 29) {
     return 826;
    }
if (index == 30) {
     return 848;
    }
if (index == 31) {
     return 853;
    }
if (index == 32) {
     return 853;
    }
if (index == 33) {
     return 854;
    }
if (index == 34) {
     return 853;
    }
if (index == 35) {
     return 1365;
    }
if (index == 36) {
     return 1365;
    }
if (index == 37) {
     return 1365;
    }
if (index == 38) {
     return 1344;
    }
if (index == 39) {
     return 892;
    }
if (index == 40) {
     return 853;
    }
if (index == 41) {
     return 853;
    }
if (index == 42) {
     return 853;
    }
if (index == 43) {
     return 853;
    }
if (index == 44) {
     return 852;
    }
if (index == 45) {
     return 849;
    }
if (index == 46) {
     return 857;
    }
if (index == 47) {
     return 839;
    }
if (index == 48) {
     return 847;
    }
if (index == 49) {
     return 836;
    }
if (index == 50) {
     return 857;
    }
if (index == 51) {
     return 859;
    }
if (index == 52) {
     return 841;
    }
if (index == 53) {
     return 845;
    }
if (index == 54) {
     return 851;
    }
if (index == 55) {
     return 853;
    }
if (index == 56) {
     return 835;
    }
if (index == 57) {
     return 844;
    }
if (index == 58) {
     return 838;
    }
if (index == 59) {
     return 864;
    }
if (index == 60) {
     return 837;
    }
if (index == 61) {
     return 853;
    }
if (index == 62) {
     return 862;
    }
if (index == 63) {
     return 874;
    }
if (index == 64) {
     return 872;
    }
if (index == 65) {
     return 867;
    }
if (index == 66) {
     return 855;
    }
if (index == 67) {
     return 846;
    }
if (index == 68) {
     return 847;
    }
if (index == 69) {
     return 853;
    }
if (index == 70) {
     return 837;
    }
if (index == 71) {
     return 842;
    }
if (index == 72) {
     return 822;
    }
if (index == 73) {
     return 858;
    }
if (index == 74) {
     return 832;
    }
if (index == 75) {
     return 839;
    }
if (index == 76) {
     return 834;
    }
if (index == 77) {
     return 844;
    }
if (index == 78) {
     return 867;
    }
if (index == 79) {
     return 853;
    }
if (index == 80) {
     return 853;
    }
if (index == 81) {
     return 845;
    }
if (index == 82) {
     return 832;
    }
if (index == 83) {
     return 1443;
    }
if (index == 84) {
     return 853;
    }
if (index == 85) {
     return 1163;
    }
if (index == 86) {
     return 830;
    }
if (index == 87) {
     return 897;
    }
if (index > 87) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1413;
    }
if (index == 1) {
     return 1392;
    }
if (index == 2) {
     return 1391;
    }
if (index == 3) {
     return 1392;
    }
if (index == 4) {
     return 1391;
    }
if (index == 5) {
     return 1392;
    }
if (index == 6) {
     return 1391;
    }
if (index == 7) {
     return 1375;
    }
if (index == 8) {
     return 1397;
    }
if (index == 9) {
     return 1384;
    }
if (index == 10) {
     return 1362;
    }
if (index == 11) {
     return 1371;
    }
if (index == 12) {
     return 1398;
    }
if (index == 13) {
     return 1357;
    }
if (index == 14) {
     return 1376;
    }
if (index == 15) {
     return 1396;
    }
if (index == 16) {
     return 1394;
    }
if (index == 17) {
     return 1399;
    }
if (index == 18) {
     return 1383;
    }
if (index == 19) {
     return 1391;
    }
if (index == 20) {
     return 1383;
    }
if (index == 21) {
     return 1379;
    }
if (index == 22) {
     return 1392;
    }
if (index == 23) {
     return 1388;
    }
if (index == 24) {
     return 1390;
    }
if (index == 25) {
     return 1394;
    }
if (index == 26) {
     return 1390;
    }
if (index == 27) {
     return 1359;
    }
if (index == 28) {
     return 1387;
    }
if (index == 29) {
     return 1363;
    }
if (index == 30) {
     return 1391;
    }
if (index == 31) {
     return 1330;
    }
if (index == 32) {
     return 1330;
    }
if (index == 33) {
     return 1341;
    }
if (index == 34) {
     return 1330;
    }
if (index == 35) {
     return 1689;
    }
if (index == 36) {
     return 1689;
    }
if (index == 37) {
     return 1689;
    }
if (index == 38) {
     return 875;
    }
if (index == 39) {
     return 1355;
    }
if (index == 40) {
     return 1330;
    }
if (index == 41) {
     return 1330;
    }
if (index == 42) {
     return 1330;
    }
if (index == 43) {
     return 1330;
    }
if (index == 44) {
     return 1350;
    }
if (index == 45) {
     return 1333;
    }
if (index == 46) {
     return 1351;
    }
if (index == 47) {
     return 1335;
    }
if (index == 48) {
     return 1361;
    }
if (index == 49) {
     return 1332;
    }
if (index == 50) {
     return 1367;
    }
if (index == 51) {
     return 1334;
    }
if (index == 52) {
     return 1354;
    }
if (index == 53) {
     return 1330;
    }
if (index == 54) {
     return 1363;
    }
if (index == 55) {
     return 1330;
    }
if (index == 56) {
     return 1363;
    }
if (index == 57) {
     return 1332;
    }
if (index == 58) {
     return 1288;
    }
if (index == 59) {
     return 1313;
    }
if (index == 60) {
     return 1336;
    }
if (index == 61) {
     return 1330;
    }
if (index == 62) {
     return 1397;
    }
if (index == 63) {
     return 1343;
    }
if (index == 64) {
     return 1366;
    }
if (index == 65) {
     return 1339;
    }
if (index == 66) {
     return 1361;
    }
if (index == 67) {
     return 1344;
    }
if (index == 68) {
     return 1340;
    }
if (index == 69) {
     return 1346;
    }
if (index == 70) {
     return 1333;
    }
if (index == 71) {
     return 1342;
    }
if (index == 72) {
     return 1333;
    }
if (index == 73) {
     return 1338;
    }
if (index == 74) {
     return 1330;
    }
if (index == 75) {
     return 1341;
    }
if (index == 76) {
     return 1330;
    }
if (index == 77) {
     return 1340;
    }
if (index == 78) {
     return 1339;
    }
if (index == 79) {
     return 1330;
    }
if (index == 80) {
     return 1330;
    }
if (index == 81) {
     return 1343;
    }
if (index == 82) {
     return 1347;
    }
if (index == 83) {
     return 1861;
    }
if (index == 84) {
     return 1330;
    }
if (index == 85) {
     return 1631;
    }
if (index == 86) {
     return 1330;
    }
if (index == 87) {
     return 1418;
    }
if (index > 87) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:326_' + imgStr + '/digitalImage';
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
br.numLeafs = 88;

// Book title and the URL used for the book title link
br.bookTitle= "Journal of the Salween surveying expedition";
br.bookAuthor= "Sconce, Gideon Colquhoun";
br.bookPub= "s.1: s.n, 1864";
br.bookKeyword= "Salween River--Discovery and exploration<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Burma--Description and travel";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:326';

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
