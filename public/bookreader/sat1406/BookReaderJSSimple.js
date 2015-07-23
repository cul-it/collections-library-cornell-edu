//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 366;
    }
if (index == 1) {
     return 366;
    }
if (index == 2) {
     return 366;
    }
if (index == 3) {
     return 366;
    }
if (index == 4) {
     return 366;
    }
if (index == 5) {
     return 366;
    }
if (index == 6) {
     return 366;
    }
if (index == 7) {
     return 366;
    }
if (index == 8) {
     return 366;
    }
if (index == 9) {
     return 366;
    }
if (index == 10) {
     return 366;
    }
if (index == 11) {
     return 366;
    }
if (index == 12) {
     return 366;
    }
if (index == 13) {
     return 366;
    }
if (index == 14) {
     return 366;
    }
if (index == 15) {
     return 366;
    }
if (index == 16) {
     return 366;
    }
if (index == 17) {
     return 366;
    }
if (index == 18) {
     return 366;
    }
if (index == 19) {
     return 366;
    }
if (index == 20) {
     return 366;
    }
if (index == 21) {
     return 366;
    }
if (index == 22) {
     return 366;
    }
if (index == 23) {
     return 366;
    }
if (index == 24) {
     return 366;
    }
if (index == 25) {
     return 366;
    }
if (index == 26) {
     return 366;
    }
if (index == 27) {
     return 366;
    }
if (index == 28) {
     return 366;
    }
if (index == 29) {
     return 366;
    }
if (index == 30) {
     return 366;
    }
if (index == 31) {
     return 366;
    }
if (index == 32) {
     return 366;
    }
if (index == 33) {
     return 366;
    }
if (index == 34) {
     return 366;
    }
if (index == 35) {
     return 366;
    }
if (index == 36) {
     return 366;
    }
if (index == 37) {
     return 366;
    }
if (index == 38) {
     return 366;
    }
if (index == 39) {
     return 366;
    }
if (index == 40) {
     return 366;
    }
if (index == 41) {
     return 366;
    }
if (index == 42) {
     return 366;
    }
if (index == 43) {
     return 366;
    }
if (index == 44) {
     return 366;
    }
if (index == 45) {
     return 366;
    }
if (index == 46) {
     return 366;
    }
if (index == 47) {
     return 366;
    }
if (index > 47) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 598;
    }
if (index == 1) {
     return 598;
    }
if (index == 2) {
     return 598;
    }
if (index == 3) {
     return 598;
    }
if (index == 4) {
     return 598;
    }
if (index == 5) {
     return 598;
    }
if (index == 6) {
     return 598;
    }
if (index == 7) {
     return 598;
    }
if (index == 8) {
     return 598;
    }
if (index == 9) {
     return 598;
    }
if (index == 10) {
     return 598;
    }
if (index == 11) {
     return 598;
    }
if (index == 12) {
     return 598;
    }
if (index == 13) {
     return 598;
    }
if (index == 14) {
     return 598;
    }
if (index == 15) {
     return 598;
    }
if (index == 16) {
     return 598;
    }
if (index == 17) {
     return 598;
    }
if (index == 18) {
     return 598;
    }
if (index == 19) {
     return 598;
    }
if (index == 20) {
     return 598;
    }
if (index == 21) {
     return 598;
    }
if (index == 22) {
     return 598;
    }
if (index == 23) {
     return 598;
    }
if (index == 24) {
     return 598;
    }
if (index == 25) {
     return 598;
    }
if (index == 26) {
     return 598;
    }
if (index == 27) {
     return 598;
    }
if (index == 28) {
     return 598;
    }
if (index == 29) {
     return 598;
    }
if (index == 30) {
     return 598;
    }
if (index == 31) {
     return 598;
    }
if (index == 32) {
     return 598;
    }
if (index == 33) {
     return 598;
    }
if (index == 34) {
     return 598;
    }
if (index == 35) {
     return 598;
    }
if (index == 36) {
     return 598;
    }
if (index == 37) {
     return 598;
    }
if (index == 38) {
     return 598;
    }
if (index == 39) {
     return 598;
    }
if (index == 40) {
     return 598;
    }
if (index == 41) {
     return 598;
    }
if (index == 42) {
     return 598;
    }
if (index == 43) {
     return 598;
    }
if (index == 44) {
     return 598;
    }
if (index == 45) {
     return 598;
    }
if (index == 46) {
     return 598;
    }
if (index == 47) {
     return 598;
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
    var url = '/fedora/get/sat:1406_' + imgStr + '/digitalImage';
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
br.bookTitle= "Circuit court of the United State, Massachusetts. Union Sugar Refinery, in Equity, vs. Francis O. Matthiessen / Union Sugar Refinery.";
br.bookAuthor= "Unknown Author";
br.bookPub= "Boston: Press of Arthur W. Locke, 1866";
br.bookKeyword= "";
br.bookUrl  = '/trial/catalog/sat:1406';

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
