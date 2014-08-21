//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 873;
    }
if (index == 1) {
     return 766;
    }
if (index == 2) {
     return 781;
    }
if (index == 3) {
     return 838;
    }
if (index == 4) {
     return 838;
    }
if (index == 5) {
     return 1323;
    }
if (index == 6) {
     return 762;
    }
if (index == 7) {
     return 786;
    }
if (index == 8) {
     return 785;
    }
if (index == 9) {
     return 743;
    }
if (index == 10) {
     return 736;
    }
if (index == 11) {
     return 749;
    }
if (index == 12) {
     return 736;
    }
if (index == 13) {
     return 745;
    }
if (index == 14) {
     return 746;
    }
if (index == 15) {
     return 753;
    }
if (index == 16) {
     return 761;
    }
if (index == 17) {
     return 773;
    }
if (index == 18) {
     return 744;
    }
if (index == 19) {
     return 759;
    }
if (index == 20) {
     return 746;
    }
if (index == 21) {
     return 750;
    }
if (index == 22) {
     return 737;
    }
if (index == 23) {
     return 758;
    }
if (index == 24) {
     return 746;
    }
if (index == 25) {
     return 760;
    }
if (index == 26) {
     return 739;
    }
if (index == 27) {
     return 774;
    }
if (index == 28) {
     return 752;
    }
if (index == 29) {
     return 747;
    }
if (index == 30) {
     return 746;
    }
if (index == 31) {
     return 749;
    }
if (index == 32) {
     return 752;
    }
if (index == 33) {
     return 743;
    }
if (index == 34) {
     return 742;
    }
if (index == 35) {
     return 744;
    }
if (index == 36) {
     return 747;
    }
if (index == 37) {
     return 754;
    }
if (index == 38) {
     return 739;
    }
if (index == 39) {
     return 768;
    }
if (index == 40) {
     return 772;
    }
if (index == 41) {
     return 755;
    }
if (index == 42) {
     return 742;
    }
if (index == 43) {
     return 746;
    }
if (index == 44) {
     return 707;
    }
if (index == 45) {
     return 1313;
    }
if (index == 46) {
     return 750;
    }
if (index == 47) {
     return 760;
    }
if (index == 48) {
     return 716;
    }
if (index == 49) {
     return 736;
    }
if (index == 50) {
     return 733;
    }
if (index == 51) {
     return 749;
    }
if (index == 52) {
     return 752;
    }
if (index == 53) {
     return 781;
    }
if (index == 54) {
     return 741;
    }
if (index == 55) {
     return 750;
    }
if (index == 56) {
     return 732;
    }
if (index == 57) {
     return 746;
    }
if (index == 58) {
     return 742;
    }
if (index == 59) {
     return 745;
    }
if (index == 60) {
     return 740;
    }
if (index == 61) {
     return 732;
    }
if (index == 62) {
     return 745;
    }
if (index == 63) {
     return 698;
    }
if (index == 64) {
     return 698;
    }
if (index == 65) {
     return 874;
    }
if (index > 65) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1336;
    }
if (index == 1) {
     return 1243;
    }
if (index == 2) {
     return 1251;
    }
if (index == 3) {
     return 1334;
    }
if (index == 4) {
     return 1334;
    }
if (index == 5) {
     return 1896;
    }
if (index == 6) {
     return 1251;
    }
if (index == 7) {
     return 1260;
    }
if (index == 8) {
     return 1266;
    }
if (index == 9) {
     return 1258;
    }
if (index == 10) {
     return 1242;
    }
if (index == 11) {
     return 1232;
    }
if (index == 12) {
     return 1238;
    }
if (index == 13) {
     return 1244;
    }
if (index == 14) {
     return 1234;
    }
if (index == 15) {
     return 1244;
    }
if (index == 16) {
     return 1250;
    }
if (index == 17) {
     return 1243;
    }
if (index == 18) {
     return 1246;
    }
if (index == 19) {
     return 1244;
    }
if (index == 20) {
     return 1247;
    }
if (index == 21) {
     return 1234;
    }
if (index == 22) {
     return 1229;
    }
if (index == 23) {
     return 1240;
    }
if (index == 24) {
     return 1243;
    }
if (index == 25) {
     return 1246;
    }
if (index == 26) {
     return 1247;
    }
if (index == 27) {
     return 1238;
    }
if (index == 28) {
     return 1250;
    }
if (index == 29) {
     return 1226;
    }
if (index == 30) {
     return 1236;
    }
if (index == 31) {
     return 1241;
    }
if (index == 32) {
     return 1236;
    }
if (index == 33) {
     return 1227;
    }
if (index == 34) {
     return 1232;
    }
if (index == 35) {
     return 1231;
    }
if (index == 36) {
     return 1231;
    }
if (index == 37) {
     return 1232;
    }
if (index == 38) {
     return 1236;
    }
if (index == 39) {
     return 1253;
    }
if (index == 40) {
     return 1245;
    }
if (index == 41) {
     return 1235;
    }
if (index == 42) {
     return 1247;
    }
if (index == 43) {
     return 1227;
    }
if (index == 44) {
     return 1240;
    }
if (index == 45) {
     return 1050;
    }
if (index == 46) {
     return 1280;
    }
if (index == 47) {
     return 1268;
    }
if (index == 48) {
     return 1247;
    }
if (index == 49) {
     return 1245;
    }
if (index == 50) {
     return 1258;
    }
if (index == 51) {
     return 1252;
    }
if (index == 52) {
     return 1257;
    }
if (index == 53) {
     return 1249;
    }
if (index == 54) {
     return 1253;
    }
if (index == 55) {
     return 1253;
    }
if (index == 56) {
     return 1245;
    }
if (index == 57) {
     return 1248;
    }
if (index == 58) {
     return 1249;
    }
if (index == 59) {
     return 1257;
    }
if (index == 60) {
     return 1260;
    }
if (index == 61) {
     return 1253;
    }
if (index == 62) {
     return 1238;
    }
if (index == 63) {
     return 1226;
    }
if (index == 64) {
     return 1227;
    }
if (index == 65) {
     return 1311;
    }
if (index > 65) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:111_' + imgStr + '/digitalImage';
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
br.numLeafs = 67;

// Book title and the URL used for the book title link
br.bookTitle= "Notes of a journey across the Isthmus of Kra, made with the French government survey expedition, January-April, 1883 : with explanatory map and sections, and appendix containing reprint of a report to the Indian government";
br.bookAuthor= "Loftus, Alfred John";
br.bookPub= "Singapore: Singapore and Straits Printing Office, 1883";
br.bookKeyword= "Kra, Isthmus of (Thailand)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Malay Peninsula";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:111';

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
