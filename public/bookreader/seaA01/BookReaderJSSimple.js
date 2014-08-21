//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1164;
    }
if (index == 1) {
     return 1168;
    }
if (index == 2) {
     return 1147;
    }
if (index == 3) {
     return 1144;
    }
if (index == 4) {
     return 1754;
    }
if (index == 5) {
     return 1127;
    }
if (index == 6) {
     return 1173;
    }
if (index == 7) {
     return 1104;
    }
if (index == 8) {
     return 1149;
    }
if (index == 9) {
     return 1179;
    }
if (index == 10) {
     return 1179;
    }
if (index == 11) {
     return 1179;
    }
if (index == 12) {
     return 1165;
    }
if (index == 13) {
     return 1193;
    }
if (index == 14) {
     return 1165;
    }
if (index == 15) {
     return 1117;
    }
if (index == 16) {
     return 1704;
    }
if (index == 17) {
     return 1163;
    }
if (index == 18) {
     return 1165;
    }
if (index == 19) {
     return 1131;
    }
if (index > 19) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1752;
    }
if (index == 1) {
     return 1763;
    }
if (index == 2) {
     return 1764;
    }
if (index == 3) {
     return 1743;
    }
if (index == 4) {
     return 1189;
    }
if (index == 5) {
     return 1682;
    }
if (index == 6) {
     return 1748;
    }
if (index == 7) {
     return 1698;
    }
if (index == 8) {
     return 1767;
    }
if (index == 9) {
     return 1748;
    }
if (index == 10) {
     return 1751;
    }
if (index == 11) {
     return 1755;
    }
if (index == 12) {
     return 1740;
    }
if (index == 13) {
     return 1737;
    }
if (index == 14) {
     return 1749;
    }
if (index == 15) {
     return 1669;
    }
if (index == 16) {
     return 1178;
    }
if (index == 17) {
     return 1780;
    }
if (index == 18) {
     return 1788;
    }
if (index == 19) {
     return 1795;
    }
if (index > 19) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:A01_' + imgStr + '/digitalImage';
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
br.numLeafs = 20;

// Book title and the URL used for the book title link
br.bookTitle= "Voyage de circumnavigation de la fregate autrichienne la Novara (1857-1859)";
br.bookAuthor= "no recorded author";
br.bookPub= "Ithaca, NY: Cornell University Library, 1860";
br.bookKeyword= "Ceylon<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Java<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Philippines<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sri Lanka<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Singapore<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indonesia--Java<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;India--Nicobar Islands<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indian Ocean--Saint Paul Island";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:A01';

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
