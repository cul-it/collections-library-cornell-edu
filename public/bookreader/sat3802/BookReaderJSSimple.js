//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 381;
    }
if (index == 1) {
     return 381;
    }
if (index == 2) {
     return 381;
    }
if (index == 3) {
     return 381;
    }
if (index == 4) {
     return 381;
    }
if (index == 5) {
     return 381;
    }
if (index == 6) {
     return 381;
    }
if (index == 7) {
     return 381;
    }
if (index == 8) {
     return 381;
    }
if (index == 9) {
     return 381;
    }
if (index == 10) {
     return 381;
    }
if (index == 11) {
     return 381;
    }
if (index == 12) {
     return 381;
    }
if (index == 13) {
     return 381;
    }
if (index == 14) {
     return 381;
    }
if (index == 15) {
     return 381;
    }
if (index == 16) {
     return 381;
    }
if (index == 17) {
     return 381;
    }
if (index == 18) {
     return 381;
    }
if (index == 19) {
     return 381;
    }
if (index == 20) {
     return 381;
    }
if (index == 21) {
     return 381;
    }
if (index == 22) {
     return 381;
    }
if (index == 23) {
     return 381;
    }
if (index == 24) {
     return 381;
    }
if (index == 25) {
     return 381;
    }
if (index == 26) {
     return 381;
    }
if (index == 27) {
     return 381;
    }
if (index == 28) {
     return 381;
    }
if (index == 29) {
     return 381;
    }
if (index == 30) {
     return 381;
    }
if (index == 31) {
     return 381;
    }
if (index == 32) {
     return 381;
    }
if (index == 33) {
     return 381;
    }
if (index == 34) {
     return 381;
    }
if (index == 35) {
     return 381;
    }
if (index == 36) {
     return 381;
    }
if (index == 37) {
     return 381;
    }
if (index == 38) {
     return 381;
    }
if (index == 39) {
     return 381;
    }
if (index == 40) {
     return 381;
    }
if (index == 41) {
     return 381;
    }
if (index == 42) {
     return 381;
    }
if (index == 43) {
     return 381;
    }
if (index == 44) {
     return 381;
    }
if (index == 45) {
     return 381;
    }
if (index == 46) {
     return 381;
    }
if (index == 47) {
     return 381;
    }
if (index == 48) {
     return 381;
    }
if (index == 49) {
     return 381;
    }
if (index > 49) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 683;
    }
if (index == 1) {
     return 683;
    }
if (index == 2) {
     return 683;
    }
if (index == 3) {
     return 683;
    }
if (index == 4) {
     return 683;
    }
if (index == 5) {
     return 683;
    }
if (index == 6) {
     return 683;
    }
if (index == 7) {
     return 683;
    }
if (index == 8) {
     return 683;
    }
if (index == 9) {
     return 683;
    }
if (index == 10) {
     return 683;
    }
if (index == 11) {
     return 683;
    }
if (index == 12) {
     return 683;
    }
if (index == 13) {
     return 683;
    }
if (index == 14) {
     return 683;
    }
if (index == 15) {
     return 683;
    }
if (index == 16) {
     return 683;
    }
if (index == 17) {
     return 683;
    }
if (index == 18) {
     return 683;
    }
if (index == 19) {
     return 683;
    }
if (index == 20) {
     return 683;
    }
if (index == 21) {
     return 683;
    }
if (index == 22) {
     return 683;
    }
if (index == 23) {
     return 683;
    }
if (index == 24) {
     return 683;
    }
if (index == 25) {
     return 683;
    }
if (index == 26) {
     return 683;
    }
if (index == 27) {
     return 683;
    }
if (index == 28) {
     return 683;
    }
if (index == 29) {
     return 683;
    }
if (index == 30) {
     return 683;
    }
if (index == 31) {
     return 683;
    }
if (index == 32) {
     return 683;
    }
if (index == 33) {
     return 683;
    }
if (index == 34) {
     return 683;
    }
if (index == 35) {
     return 683;
    }
if (index == 36) {
     return 683;
    }
if (index == 37) {
     return 683;
    }
if (index == 38) {
     return 683;
    }
if (index == 39) {
     return 683;
    }
if (index == 40) {
     return 683;
    }
if (index == 41) {
     return 683;
    }
if (index == 42) {
     return 683;
    }
if (index == 43) {
     return 683;
    }
if (index == 44) {
     return 683;
    }
if (index == 45) {
     return 683;
    }
if (index == 46) {
     return 683;
    }
if (index == 47) {
     return 683;
    }
if (index == 48) {
     return 683;
    }
if (index == 49) {
     return 683;
    }
if (index > 49) {
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
    var url = '/fedora/get/sat:3802_' + imgStr + '/digitalImage';
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
br.numLeafs = 50;

// Book title and the URL used for the book title link
br.bookTitle= "Argument of Benj. F. Butler, before the Rhode Island Supreme Court, (sitting in equity) Justices Potter, Stiness, and Tillinghast, Sept. 28, 1881. : In cases Quidnick co. vs. Chafee, et als., Same vs. Same, Chafee, trustee, et als., vs. A. and W. Sprague Manufacturing Co., et als.";
br.bookAuthor= "Butler, Benjamin F. (Benjamin Franklin), 1818-1893.";
br.bookPub= "[s.l.]: [s.n.], 1881";
br.bookKeyword= "";
br.bookUrl  = '/trial/catalog/sat:3802';

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
