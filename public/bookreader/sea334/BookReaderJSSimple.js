//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1146;
    }
if (index == 1) {
     return 1055;
    }
if (index == 2) {
     return 1164;
    }
if (index == 3) {
     return 1098;
    }
if (index == 4) {
     return 1272;
    }
if (index == 5) {
     return 1563;
    }
if (index == 6) {
     return 1668;
    }
if (index == 7) {
     return 1690;
    }
if (index == 8) {
     return 1726;
    }
if (index == 9) {
     return 1593;
    }
if (index == 10) {
     return 1475;
    }
if (index == 11) {
     return 1500;
    }
if (index == 12) {
     return 1402;
    }
if (index == 13) {
     return 1479;
    }
if (index == 14) {
     return 1479;
    }
if (index == 15) {
     return 1458;
    }
if (index == 16) {
     return 1500;
    }
if (index == 17) {
     return 1519;
    }
if (index == 18) {
     return 1500;
    }
if (index == 19) {
     return 1500;
    }
if (index == 20) {
     return 1485;
    }
if (index == 21) {
     return 1500;
    }
if (index == 22) {
     return 1602;
    }
if (index == 23) {
     return 844;
    }
if (index == 24) {
     return 1401;
    }
if (index == 25) {
     return 1475;
    }
if (index == 26) {
     return 1148;
    }
if (index > 26) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1911;
    }
if (index == 1) {
     return 1931;
    }
if (index == 2) {
     return 1910;
    }
if (index == 3) {
     return 1896;
    }
if (index == 4) {
     return 1885;
    }
if (index == 5) {
     return 1479;
    }
if (index == 6) {
     return 1374;
    }
if (index == 7) {
     return 1449;
    }
if (index == 8) {
     return 1500;
    }
if (index == 9) {
     return 1492;
    }
if (index == 10) {
     return 1488;
    }
if (index == 11) {
     return 1344;
    }
if (index == 12) {
     return 1239;
    }
if (index == 13) {
     return 1482;
    }
if (index == 14) {
     return 1332;
    }
if (index == 15) {
     return 1290;
    }
if (index == 16) {
     return 1440;
    }
if (index == 17) {
     return 1440;
    }
if (index == 18) {
     return 1551;
    }
if (index == 19) {
     return 1463;
    }
if (index == 20) {
     return 1454;
    }
if (index == 21) {
     return 1410;
    }
if (index == 22) {
     return 1449;
    }
if (index == 23) {
     return 1419;
    }
if (index == 24) {
     return 1359;
    }
if (index == 25) {
     return 1464;
    }
if (index == 26) {
     return 1940;
    }
if (index > 26) {
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
    var url = '/fedora/get/seapage:334_' + imgStr + '/digitalImage';
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
br.numLeafs = 27;

// Book title and the URL used for the book title link
br.bookTitle= "Photographs of British Burma and the Straits, 1876-7-8-9";
br.bookAuthor= "no recorded author";
br.bookPub= "S.1: no recorded publisher, 1926";
br.bookKeyword= "Burma--Description and travel";
br.bookUrl  = '/catalog/sea:334';

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
