//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 351;
    }
if (index == 1) {
     return 351;
    }
if (index == 2) {
     return 351;
    }
if (index == 3) {
     return 351;
    }
if (index == 4) {
     return 351;
    }
if (index == 5) {
     return 351;
    }
if (index == 6) {
     return 351;
    }
if (index == 7) {
     return 351;
    }
if (index == 8) {
     return 351;
    }
if (index == 9) {
     return 351;
    }
if (index == 10) {
     return 351;
    }
if (index == 11) {
     return 351;
    }
if (index == 12) {
     return 351;
    }
if (index == 13) {
     return 351;
    }
if (index == 14) {
     return 351;
    }
if (index == 15) {
     return 351;
    }
if (index == 16) {
     return 351;
    }
if (index == 17) {
     return 351;
    }
if (index == 18) {
     return 351;
    }
if (index == 19) {
     return 351;
    }
if (index == 20) {
     return 351;
    }
if (index == 21) {
     return 351;
    }
if (index == 22) {
     return 351;
    }
if (index == 23) {
     return 351;
    }
if (index == 24) {
     return 351;
    }
if (index == 25) {
     return 351;
    }
if (index == 26) {
     return 351;
    }
if (index == 27) {
     return 351;
    }
if (index > 27) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 603;
    }
if (index == 1) {
     return 603;
    }
if (index == 2) {
     return 603;
    }
if (index == 3) {
     return 603;
    }
if (index == 4) {
     return 603;
    }
if (index == 5) {
     return 603;
    }
if (index == 6) {
     return 603;
    }
if (index == 7) {
     return 603;
    }
if (index == 8) {
     return 603;
    }
if (index == 9) {
     return 603;
    }
if (index == 10) {
     return 603;
    }
if (index == 11) {
     return 603;
    }
if (index == 12) {
     return 603;
    }
if (index == 13) {
     return 603;
    }
if (index == 14) {
     return 603;
    }
if (index == 15) {
     return 603;
    }
if (index == 16) {
     return 603;
    }
if (index == 17) {
     return 603;
    }
if (index == 18) {
     return 603;
    }
if (index == 19) {
     return 603;
    }
if (index == 20) {
     return 603;
    }
if (index == 21) {
     return 603;
    }
if (index == 22) {
     return 603;
    }
if (index == 23) {
     return 603;
    }
if (index == 24) {
     return 603;
    }
if (index == 25) {
     return 603;
    }
if (index == 26) {
     return 603;
    }
if (index == 27) {
     return 603;
    }
if (index > 27) {
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
    var url = '/fedora/get/sat:3701_' + imgStr + '/digitalImage';
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
br.numLeafs = 28;

// Book title and the URL used for the book title link
br.bookTitle= "Trial by jury and liberty of the press : the proceedings at the public meeting, December 29, 1817, at the City of London Tavern, for the purpose of enabling William Hone to surmount the difficulties in which he has been placed by being selected by the ministers of the Crown as the object of their persecution : Mr. Waithman in the chair, with the resolutions and speeches of Mr. Waithman, Sir Francis Burdett, Mr. Alderman Thorp, Mr. Perry, Mr. P. Walker, Lord Cochrane, Mr. Charles Pearson, Mr. Sturch, and Mr. Wooler : also, the subscriptions received from time to time, with all the names, mottoes, &amp;c.";
br.bookAuthor= "Hone, William, 1780-1842.";
br.bookPub= "London: Printed by and for William Hone, 1818";
br.bookKeyword= "";
br.bookUrl  = '/trial/catalog/sat:3701';

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
