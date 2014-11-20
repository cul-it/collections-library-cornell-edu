//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1184;
    }
if (index == 1) {
     return 1182;
    }
if (index == 2) {
     return 1179;
    }
if (index == 3) {
     return 1270;
    }
if (index == 4) {
     return 1739;
    }
if (index == 5) {
     return 1189;
    }
if (index == 6) {
     return 1193;
    }
if (index == 7) {
     return 1198;
    }
if (index == 8) {
     return 1738;
    }
if (index == 9) {
     return 1185;
    }
if (index == 10) {
     return 1753;
    }
if (index == 11) {
     return 1184;
    }
if (index == 12) {
     return 1218;
    }
if (index == 13) {
     return 1190;
    }
if (index == 14) {
     return 1188;
    }
if (index == 15) {
     return 1177;
    }
if (index == 16) {
     return 1183;
    }
if (index == 17) {
     return 1184;
    }
if (index == 18) {
     return 1173;
    }
if (index == 19) {
     return 1204;
    }
if (index == 20) {
     return 1176;
    }
if (index == 21) {
     return 1183;
    }
if (index == 22) {
     return 1701;
    }
if (index == 23) {
     return 1180;
    }
if (index == 24) {
     return 1744;
    }
if (index == 25) {
     return 1135;
    }
if (index == 26) {
     return 1171;
    }
if (index == 27) {
     return 1181;
    }
if (index == 28) {
     return 1741;
    }
if (index == 29) {
     return 1168;
    }
if (index == 30) {
     return 1181;
    }
if (index == 31) {
     return 1174;
    }
if (index > 31) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1744;
    }
if (index == 1) {
     return 1747;
    }
if (index == 2) {
     return 1741;
    }
if (index == 3) {
     return 1757;
    }
if (index == 4) {
     return 1219;
    }
if (index == 5) {
     return 1740;
    }
if (index == 6) {
     return 1743;
    }
if (index == 7) {
     return 1740;
    }
if (index == 8) {
     return 1207;
    }
if (index == 9) {
     return 1739;
    }
if (index == 10) {
     return 1213;
    }
if (index == 11) {
     return 1752;
    }
if (index == 12) {
     return 1746;
    }
if (index == 13) {
     return 1746;
    }
if (index == 14) {
     return 1740;
    }
if (index == 15) {
     return 1744;
    }
if (index == 16) {
     return 1736;
    }
if (index == 17) {
     return 1742;
    }
if (index == 18) {
     return 1745;
    }
if (index == 19) {
     return 1744;
    }
if (index == 20) {
     return 1748;
    }
if (index == 21) {
     return 1749;
    }
if (index == 22) {
     return 1203;
    }
if (index == 23) {
     return 1749;
    }
if (index == 24) {
     return 1215;
    }
if (index == 25) {
     return 1749;
    }
if (index == 26) {
     return 1746;
    }
if (index == 27) {
     return 1741;
    }
if (index == 28) {
     return 1209;
    }
if (index == 29) {
     return 1744;
    }
if (index == 30) {
     return 1741;
    }
if (index == 31) {
     return 1747;
    }
if (index > 31) {
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
    var url = '/fedora/get/seapage:A21_' + imgStr + '/digitalImage';
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
br.numLeafs = 32;

// Book title and the URL used for the book title link
br.bookTitle= "De Koutei a Bandjirmasin, voyage a travers Borneo";
br.bookAuthor= "Bock, Carl";
br.bookPub= "Ithaca, NY: Cornell University Library, 1890";
br.bookKeyword= "Borneo<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indonesia--Kalimantan";
br.bookUrl  = '/catalog/sea:A21';

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
