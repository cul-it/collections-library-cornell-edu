//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 881;
    }
if (index == 1) {
     return 828;
    }
if (index == 2) {
     return 805;
    }
if (index == 3) {
     return 755;
    }
if (index == 4) {
     return 773;
    }
if (index == 5) {
     return 805;
    }
if (index == 6) {
     return 812;
    }
if (index == 7) {
     return 788;
    }
if (index == 8) {
     return 774;
    }
if (index == 9) {
     return 785;
    }
if (index == 10) {
     return 791;
    }
if (index == 11) {
     return 788;
    }
if (index == 12) {
     return 798;
    }
if (index == 13) {
     return 805;
    }
if (index == 14) {
     return 797;
    }
if (index == 15) {
     return 795;
    }
if (index == 16) {
     return 802;
    }
if (index == 17) {
     return 788;
    }
if (index == 18) {
     return 795;
    }
if (index == 19) {
     return 787;
    }
if (index == 20) {
     return 774;
    }
if (index == 21) {
     return 794;
    }
if (index == 22) {
     return 786;
    }
if (index == 23) {
     return 794;
    }
if (index == 24) {
     return 787;
    }
if (index == 25) {
     return 791;
    }
if (index == 26) {
     return 782;
    }
if (index == 27) {
     return 790;
    }
if (index == 28) {
     return 775;
    }
if (index == 29) {
     return 784;
    }
if (index == 30) {
     return 785;
    }
if (index == 31) {
     return 810;
    }
if (index == 32) {
     return 793;
    }
if (index == 33) {
     return 793;
    }
if (index == 34) {
     return 785;
    }
if (index == 35) {
     return 815;
    }
if (index == 36) {
     return 801;
    }
if (index == 37) {
     return 798;
    }
if (index == 38) {
     return 787;
    }
if (index == 39) {
     return 785;
    }
if (index == 40) {
     return 790;
    }
if (index == 41) {
     return 791;
    }
if (index == 42) {
     return 787;
    }
if (index == 43) {
     return 793;
    }
if (index == 44) {
     return 790;
    }
if (index == 45) {
     return 786;
    }
if (index == 46) {
     return 787;
    }
if (index == 47) {
     return 789;
    }
if (index == 48) {
     return 794;
    }
if (index == 49) {
     return 777;
    }
if (index == 50) {
     return 804;
    }
if (index == 51) {
     return 796;
    }
if (index == 52) {
     return 802;
    }
if (index == 53) {
     return 782;
    }
if (index == 54) {
     return 771;
    }
if (index == 55) {
     return 769;
    }
if (index == 56) {
     return 773;
    }
if (index == 57) {
     return 790;
    }
if (index == 58) {
     return 782;
    }
if (index == 59) {
     return 790;
    }
if (index == 60) {
     return 769;
    }
if (index == 61) {
     return 818;
    }
if (index == 62) {
     return 758;
    }
if (index == 63) {
     return 813;
    }
if (index == 64) {
     return 789;
    }
if (index == 65) {
     return 852;
    }
if (index == 66) {
     return 794;
    }
if (index == 67) {
     return 925;
    }
if (index > 67) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1329;
    }
if (index == 1) {
     return 1273;
    }
if (index == 2) {
     return 1273;
    }
if (index == 3) {
     return 1264;
    }
if (index == 4) {
     return 1273;
    }
if (index == 5) {
     return 1273;
    }
if (index == 6) {
     return 1280;
    }
if (index == 7) {
     return 1273;
    }
if (index == 8) {
     return 1275;
    }
if (index == 9) {
     return 1285;
    }
if (index == 10) {
     return 1292;
    }
if (index == 11) {
     return 1289;
    }
if (index == 12) {
     return 1289;
    }
if (index == 13) {
     return 1296;
    }
if (index == 14) {
     return 1301;
    }
if (index == 15) {
     return 1293;
    }
if (index == 16) {
     return 1296;
    }
if (index == 17) {
     return 1300;
    }
if (index == 18) {
     return 1299;
    }
if (index == 19) {
     return 1281;
    }
if (index == 20) {
     return 1300;
    }
if (index == 21) {
     return 1310;
    }
if (index == 22) {
     return 1319;
    }
if (index == 23) {
     return 1291;
    }
if (index == 24) {
     return 1300;
    }
if (index == 25) {
     return 1289;
    }
if (index == 26) {
     return 1294;
    }
if (index == 27) {
     return 1299;
    }
if (index == 28) {
     return 1285;
    }
if (index == 29) {
     return 1297;
    }
if (index == 30) {
     return 1304;
    }
if (index == 31) {
     return 1300;
    }
if (index == 32) {
     return 1285;
    }
if (index == 33) {
     return 1296;
    }
if (index == 34) {
     return 1307;
    }
if (index == 35) {
     return 1286;
    }
if (index == 36) {
     return 1288;
    }
if (index == 37) {
     return 1311;
    }
if (index == 38) {
     return 1298;
    }
if (index == 39) {
     return 1315;
    }
if (index == 40) {
     return 1299;
    }
if (index == 41) {
     return 1300;
    }
if (index == 42) {
     return 1311;
    }
if (index == 43) {
     return 1300;
    }
if (index == 44) {
     return 1298;
    }
if (index == 45) {
     return 1301;
    }
if (index == 46) {
     return 1306;
    }
if (index == 47) {
     return 1303;
    }
if (index == 48) {
     return 1315;
    }
if (index == 49) {
     return 1311;
    }
if (index == 50) {
     return 1324;
    }
if (index == 51) {
     return 1300;
    }
if (index == 52) {
     return 1336;
    }
if (index == 53) {
     return 1311;
    }
if (index == 54) {
     return 1274;
    }
if (index == 55) {
     return 1282;
    }
if (index == 56) {
     return 1278;
    }
if (index == 57) {
     return 1266;
    }
if (index == 58) {
     return 1291;
    }
if (index == 59) {
     return 1275;
    }
if (index == 60) {
     return 1262;
    }
if (index == 61) {
     return 1260;
    }
if (index == 62) {
     return 1247;
    }
if (index == 63) {
     return 1221;
    }
if (index == 64) {
     return 1258;
    }
if (index == 65) {
     return 1258;
    }
if (index == 66) {
     return 1254;
    }
if (index == 67) {
     return 1319;
    }
if (index > 67) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:133_' + imgStr + '/digitalImage';
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
br.numLeafs = 68;

// Book title and the URL used for the book title link
br.bookTitle= "Historical account of Siam in the 17th century";
br.bookAuthor= "Vliet, Jeremias van";
br.bookPub= "Bangkok: Printed for H. R. H. Prince Damrong Rajanubhab, 1904";
br.bookKeyword= "Thailand--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thailand--History";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:133';

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
