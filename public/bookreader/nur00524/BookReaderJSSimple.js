//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 584;
    }
if (index == 1) {
     return 558;
    }
if (index == 2) {
     return 577;
    }
if (index == 3) {
     return 598;
    }
if (index == 4) {
     return 592;
    }
if (index == 5) {
     return 602;
    }
if (index == 6) {
     return 586;
    }
if (index == 7) {
     return 590;
    }
if (index == 8) {
     return 588;
    }
if (index > 8) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 944;
    }
if (index == 1) {
     return 935;
    }
if (index == 2) {
     return 935;
    }
if (index == 3) {
     return 932;
    }
if (index == 4) {
     return 954;
    }
if (index == 5) {
     return 930;
    }
if (index == 6) {
     return 894;
    }
if (index == 7) {
     return 916;
    }
if (index == 8) {
     return 909;
    }
if (index > 8) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/nur:00524_' + imgStr + '/digitalImage';
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
br.numLeafs = 9;

// Book title and the URL used for the book title link
br.bookTitle= "[Fuller's Conversation with Schacht, 23 Sept. 1935 ]: title not printed on document; see table of contents for Volume II.";
br.bookAuthor= "S. R. Fuller";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, 1945-10-18";
br.bookKeyword= "Hitler's Germany; Nazi policies; German politics; Persecution of Jews; Nuremberg Laws; Economic conditions; Colonies; 'Most Favored Nation'; Currency; Stabilization of currency; Exchange rates; Nuremberg rally";
br.bookUrl  = '/nuremberg/catalog/nur:00524';

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
