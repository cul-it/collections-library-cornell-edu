//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 363;
    }
if (index == 1) {
     return 363;
    }
if (index == 2) {
     return 363;
    }
if (index == 3) {
     return 363;
    }
if (index == 4) {
     return 363;
    }
if (index == 5) {
     return 363;
    }
if (index == 6) {
     return 363;
    }
if (index == 7) {
     return 363;
    }
if (index == 8) {
     return 363;
    }
if (index == 9) {
     return 363;
    }
if (index == 10) {
     return 363;
    }
if (index == 11) {
     return 363;
    }
if (index == 12) {
     return 363;
    }
if (index == 13) {
     return 363;
    }
if (index == 14) {
     return 363;
    }
if (index == 15) {
     return 363;
    }
if (index == 16) {
     return 363;
    }
if (index == 17) {
     return 363;
    }
if (index == 18) {
     return 363;
    }
if (index == 19) {
     return 363;
    }
if (index == 20) {
     return 363;
    }
if (index == 21) {
     return 363;
    }
if (index == 22) {
     return 363;
    }
if (index == 23) {
     return 363;
    }
if (index == 24) {
     return 363;
    }
if (index == 25) {
     return 363;
    }
if (index == 26) {
     return 363;
    }
if (index == 27) {
     return 363;
    }
if (index == 28) {
     return 363;
    }
if (index == 29) {
     return 363;
    }
if (index == 30) {
     return 363;
    }
if (index == 31) {
     return 363;
    }
if (index == 32) {
     return 363;
    }
if (index == 33) {
     return 363;
    }
if (index > 33) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 587;
    }
if (index == 1) {
     return 587;
    }
if (index == 2) {
     return 587;
    }
if (index == 3) {
     return 587;
    }
if (index == 4) {
     return 587;
    }
if (index == 5) {
     return 587;
    }
if (index == 6) {
     return 587;
    }
if (index == 7) {
     return 587;
    }
if (index == 8) {
     return 587;
    }
if (index == 9) {
     return 587;
    }
if (index == 10) {
     return 587;
    }
if (index == 11) {
     return 587;
    }
if (index == 12) {
     return 587;
    }
if (index == 13) {
     return 587;
    }
if (index == 14) {
     return 587;
    }
if (index == 15) {
     return 587;
    }
if (index == 16) {
     return 587;
    }
if (index == 17) {
     return 587;
    }
if (index == 18) {
     return 587;
    }
if (index == 19) {
     return 587;
    }
if (index == 20) {
     return 587;
    }
if (index == 21) {
     return 587;
    }
if (index == 22) {
     return 587;
    }
if (index == 23) {
     return 587;
    }
if (index == 24) {
     return 587;
    }
if (index == 25) {
     return 587;
    }
if (index == 26) {
     return 587;
    }
if (index == 27) {
     return 587;
    }
if (index == 28) {
     return 587;
    }
if (index == 29) {
     return 587;
    }
if (index == 30) {
     return 587;
    }
if (index == 31) {
     return 587;
    }
if (index == 32) {
     return 587;
    }
if (index == 33) {
     return 587;
    }
if (index > 33) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/sat:2609_' + imgStr + '/digitalImage';
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
br.numLeafs = 34;

// Book title and the URL used for the book title link
br.bookTitle= "Life and confession of Ann Walters, the female murderess! : also the execution of Enos G. Dudley, at Haverhill, N.H., May 23rd, 1849 : to which is added the confession of Mary Runkle, who was executed for murder.";
br.bookAuthor= "Unknown Author";
br.bookPub= "Boston, Mass.: Printed for the proprietor, 1850";
br.bookKeyword= "Trial Pamphlets; Law";
br.bookUrl  = '/trial/catalog/sat:2609';

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
