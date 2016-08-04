//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 295;
    }
if (index == 1) {
     return 295;
    }
if (index == 2) {
     return 295;
    }
if (index == 3) {
     return 295;
    }
if (index == 4) {
     return 295;
    }
if (index == 5) {
     return 295;
    }
if (index == 6) {
     return 295;
    }
if (index == 7) {
     return 295;
    }
if (index == 8) {
     return 295;
    }
if (index == 9) {
     return 295;
    }
if (index == 10) {
     return 295;
    }
if (index == 11) {
     return 295;
    }
if (index == 12) {
     return 295;
    }
if (index == 13) {
     return 295;
    }
if (index == 14) {
     return 295;
    }
if (index == 15) {
     return 295;
    }
if (index == 16) {
     return 295;
    }
if (index == 17) {
     return 295;
    }
if (index == 18) {
     return 295;
    }
if (index == 19) {
     return 295;
    }
if (index == 20) {
     return 295;
    }
if (index == 21) {
     return 295;
    }
if (index == 22) {
     return 295;
    }
if (index == 23) {
     return 295;
    }
if (index == 24) {
     return 295;
    }
if (index == 25) {
     return 295;
    }
if (index == 26) {
     return 295;
    }
if (index == 27) {
     return 295;
    }
if (index == 28) {
     return 295;
    }
if (index == 29) {
     return 295;
    }
if (index == 30) {
     return 295;
    }
if (index == 31) {
     return 295;
    }
if (index == 32) {
     return 295;
    }
if (index == 33) {
     return 295;
    }
if (index == 34) {
     return 295;
    }
if (index == 35) {
     return 295;
    }
if (index == 36) {
     return 295;
    }
if (index == 37) {
     return 295;
    }
if (index == 38) {
     return 295;
    }
if (index > 38) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 510;
    }
if (index == 1) {
     return 510;
    }
if (index == 2) {
     return 510;
    }
if (index == 3) {
     return 510;
    }
if (index == 4) {
     return 510;
    }
if (index == 5) {
     return 510;
    }
if (index == 6) {
     return 510;
    }
if (index == 7) {
     return 510;
    }
if (index == 8) {
     return 510;
    }
if (index == 9) {
     return 510;
    }
if (index == 10) {
     return 510;
    }
if (index == 11) {
     return 510;
    }
if (index == 12) {
     return 510;
    }
if (index == 13) {
     return 510;
    }
if (index == 14) {
     return 510;
    }
if (index == 15) {
     return 510;
    }
if (index == 16) {
     return 510;
    }
if (index == 17) {
     return 510;
    }
if (index == 18) {
     return 510;
    }
if (index == 19) {
     return 510;
    }
if (index == 20) {
     return 510;
    }
if (index == 21) {
     return 510;
    }
if (index == 22) {
     return 510;
    }
if (index == 23) {
     return 510;
    }
if (index == 24) {
     return 510;
    }
if (index == 25) {
     return 510;
    }
if (index == 26) {
     return 510;
    }
if (index == 27) {
     return 510;
    }
if (index == 28) {
     return 510;
    }
if (index == 29) {
     return 510;
    }
if (index == 30) {
     return 510;
    }
if (index == 31) {
     return 510;
    }
if (index == 32) {
     return 510;
    }
if (index == 33) {
     return 510;
    }
if (index == 34) {
     return 510;
    }
if (index == 35) {
     return 510;
    }
if (index == 36) {
     return 510;
    }
if (index == 37) {
     return 510;
    }
if (index == 38) {
     return 510;
    }
if (index > 38) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/sat:0501_' + imgStr + '/digitalImage';
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
br.numLeafs = 39;

// Book title and the URL used for the book title link
br.bookTitle= "A report of the trial of Samuel Tulley and John Dalton, on an indictment for piracy, committed January 21st, 1812. Before the Circuit court of the United States, at Boston, 28th October, 1812. Containing the evidence at large, a sketch of the arguments of counsel, and the charge of the Hon. Judge Story, on pronouncing sentence of death. (From minutes taken at the trial)";
br.bookAuthor= "Tully, Samuel, 1771-1812, defendant.";
br.bookPub= "Boston: Printed by J. Belcher., 1812";
br.bookKeyword= "Trial Pamphlets; Law";
br.bookUrl  = '/trial/catalog/sat:0501';

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
