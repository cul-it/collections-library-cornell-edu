//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 666;
    }
if (index == 1) {
     return 663;
    }
if (index == 2) {
     return 689;
    }
if (index == 3) {
     return 668;
    }
if (index == 4) {
     return 671;
    }
if (index == 5) {
     return 654;
    }
if (index == 6) {
     return 674;
    }
if (index == 7) {
     return 659;
    }
if (index == 8) {
     return 680;
    }
if (index == 9) {
     return 664;
    }
if (index == 10) {
     return 682;
    }
if (index == 11) {
     return 652;
    }
if (index == 12) {
     return 674;
    }
if (index > 12) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1013;
    }
if (index == 1) {
     return 1011;
    }
if (index == 2) {
     return 1028;
    }
if (index == 3) {
     return 1014;
    }
if (index == 4) {
     return 1016;
    }
if (index == 5) {
     return 1005;
    }
if (index == 6) {
     return 1018;
    }
if (index == 7) {
     return 1008;
    }
if (index == 8) {
     return 1022;
    }
if (index == 9) {
     return 1011;
    }
if (index == 10) {
     return 1023;
    }
if (index == 11) {
     return 1004;
    }
if (index == 12) {
     return 1018;
    }
if (index > 12) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/nur:00820_' + imgStr + '/digitalImage';
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
br.numLeafs = 13;

// Book title and the URL used for the book title link
br.bookTitle= "Aggression Against Norway and Denmark";
br.bookAuthor= "Major Lacy W. Hinely";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, Not dated";
br.bookKeyword= "Operation order Hartmut; Fall Weserubung; OKM; OKW; Aggressive war; Crimes against peace; Hague Convention; Kellogg-Briand Pact; Fifth Column activities; Collaborationists; APA; Military strategy";
br.bookUrl  = '/nuremberg/catalog/nur:00820';

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
