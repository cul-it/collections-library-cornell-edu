//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 549;
    }
if (index == 1) {
     return 567;
    }
if (index == 2) {
     return 540;
    }
if (index == 3) {
     return 540;
    }
if (index == 4) {
     return 544;
    }
if (index == 5) {
     return 548;
    }
if (index == 6) {
     return 553;
    }
if (index == 7) {
     return 548;
    }
if (index == 8) {
     return 533;
    }
if (index == 9) {
     return 540;
    }
if (index == 10) {
     return 536;
    }
if (index == 11) {
     return 546;
    }
if (index == 12) {
     return 556;
    }
if (index == 13) {
     return 568;
    }
if (index == 14) {
     return 540;
    }
if (index == 15) {
     return 557;
    }
if (index == 16) {
     return 550;
    }
if (index == 17) {
     return 690;
    }
if (index == 18) {
     return 539;
    }
if (index > 18) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 845;
    }
if (index == 1) {
     return 829;
    }
if (index == 2) {
     return 843;
    }
if (index == 3) {
     return 853;
    }
if (index == 4) {
     return 848;
    }
if (index == 5) {
     return 838;
    }
if (index == 6) {
     return 835;
    }
if (index == 7) {
     return 841;
    }
if (index == 8) {
     return 849;
    }
if (index == 9) {
     return 853;
    }
if (index == 10) {
     return 850;
    }
if (index == 11) {
     return 845;
    }
if (index == 12) {
     return 832;
    }
if (index == 13) {
     return 829;
    }
if (index == 14) {
     return 841;
    }
if (index == 15) {
     return 832;
    }
if (index == 16) {
     return 834;
    }
if (index == 17) {
     return 538;
    }
if (index == 18) {
     return 700;
    }
if (index > 18) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/nur:00650_' + imgStr + '/digitalImage';
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
br.numLeafs = 19;

// Book title and the URL used for the book title link
br.bookTitle= "The Relations of the OKW to the Party, the OKH, and the SS ";
br.bookAuthor= "The author's name is not given; internal evidence strongly suggests the author is Walter Warlimont.";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, 1945-05-28";
br.bookKeyword= "OKW; OKH; SS; SA; Waffen-SS; Rearmament; German Army; German High Command; Roehm putsch; Fritsch Affair; Political murders; Rhineland occupation; Anschluss; Czechoslovakia; Invasion of Poland; Aggressive war; Occupied territories";
br.bookUrl  = '/nuremberg/catalog/nur:00650';

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
