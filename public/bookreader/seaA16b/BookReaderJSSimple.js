//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 998;
    }
if (index == 1) {
     return 1124;
    }
if (index == 2) {
     return 1040;
    }
if (index == 3) {
     return 1148;
    }
if (index == 4) {
     return 1089;
    }
if (index == 5) {
     return 1113;
    }
if (index == 6) {
     return 1617;
    }
if (index == 7) {
     return 1076;
    }
if (index == 8) {
     return 1624;
    }
if (index == 9) {
     return 1025;
    }
if (index == 10) {
     return 1001;
    }
if (index == 11) {
     return 1007;
    }
if (index == 12) {
     return 1603;
    }
if (index == 13) {
     return 1062;
    }
if (index == 14) {
     return 1069;
    }
if (index == 15) {
     return 1138;
    }
if (index == 16) {
     return 1022;
    }
if (index == 17) {
     return 1051;
    }
if (index == 18) {
     return 1021;
    }
if (index == 19) {
     return 1067;
    }
if (index == 20) {
     return 1026;
    }
if (index == 21) {
     return 1052;
    }
if (index == 22) {
     return 1054;
    }
if (index == 23) {
     return 1045;
    }
if (index == 24) {
     return 1599;
    }
if (index == 25) {
     return 1042;
    }
if (index == 26) {
     return 1074;
    }
if (index == 27) {
     return 1075;
    }
if (index == 28) {
     return 1620;
    }
if (index == 29) {
     return 1103;
    }
if (index == 30) {
     return 1062;
    }
if (index == 31) {
     return 1056;
    }
if (index == 32) {
     return 1046;
    }
if (index == 33) {
     return 1054;
    }
if (index == 34) {
     return 1616;
    }
if (index == 35) {
     return 1054;
    }
if (index == 36) {
     return 1073;
    }
if (index == 37) {
     return 1051;
    }
if (index == 38) {
     return 1057;
    }
if (index == 39) {
     return 1023;
    }
if (index == 40) {
     return 1612;
    }
if (index == 41) {
     return 1041;
    }
if (index == 42) {
     return 1052;
    }
if (index == 43) {
     return 1073;
    }
if (index == 44) {
     return 1069;
    }
if (index == 45) {
     return 1029;
    }
if (index == 46) {
     return 1042;
    }
if (index == 47) {
     return 1046;
    }
if (index > 47) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1596;
    }
if (index == 1) {
     return 1667;
    }
if (index == 2) {
     return 1627;
    }
if (index == 3) {
     return 1665;
    }
if (index == 4) {
     return 1632;
    }
if (index == 5) {
     return 1639;
    }
if (index == 6) {
     return 1131;
    }
if (index == 7) {
     return 1630;
    }
if (index == 8) {
     return 1123;
    }
if (index == 9) {
     return 1607;
    }
if (index == 10) {
     return 1583;
    }
if (index == 11) {
     return 1622;
    }
if (index == 12) {
     return 1145;
    }
if (index == 13) {
     return 1645;
    }
if (index == 14) {
     return 1662;
    }
if (index == 15) {
     return 1645;
    }
if (index == 16) {
     return 1603;
    }
if (index == 17) {
     return 1607;
    }
if (index == 18) {
     return 1624;
    }
if (index == 19) {
     return 1649;
    }
if (index == 20) {
     return 1626;
    }
if (index == 21) {
     return 1655;
    }
if (index == 22) {
     return 1624;
    }
if (index == 23) {
     return 1616;
    }
if (index == 24) {
     return 1136;
    }
if (index == 25) {
     return 1602;
    }
if (index == 26) {
     return 1622;
    }
if (index == 27) {
     return 1647;
    }
if (index == 28) {
     return 1157;
    }
if (index == 29) {
     return 1650;
    }
if (index == 30) {
     return 1628;
    }
if (index == 31) {
     return 1622;
    }
if (index == 32) {
     return 1612;
    }
if (index == 33) {
     return 1627;
    }
if (index == 34) {
     return 1128;
    }
if (index == 35) {
     return 1652;
    }
if (index == 36) {
     return 1638;
    }
if (index == 37) {
     return 1622;
    }
if (index == 38) {
     return 1618;
    }
if (index == 39) {
     return 1634;
    }
if (index == 40) {
     return 1158;
    }
if (index == 41) {
     return 1635;
    }
if (index == 42) {
     return 1618;
    }
if (index == 43) {
     return 1630;
    }
if (index == 44) {
     return 1627;
    }
if (index == 45) {
     return 1624;
    }
if (index == 46) {
     return 1625;
    }
if (index == 47) {
     return 1630;
    }
if (index > 47) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:A16b_' + imgStr + '/digitalImage';
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
br.numLeafs = 48;

// Book title and the URL used for the book title link
br.bookTitle= "Voyage aux Philippines 1879-1881, V-VIII";
br.bookAuthor= "Montano, Joseph";
br.bookPub= "Ithaca, NY: Cornell University Library, 1884";
br.bookKeyword= "Philippines";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:A16b';

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
