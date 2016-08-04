//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 698;
    }
if (index == 1) {
     return 698;
    }
if (index == 2) {
     return 698;
    }
if (index == 3) {
     return 698;
    }
if (index == 4) {
     return 719;
    }
if (index == 5) {
     return 698;
    }
if (index == 6) {
     return 730;
    }
if (index == 7) {
     return 698;
    }
if (index == 8) {
     return 729;
    }
if (index == 9) {
     return 698;
    }
if (index == 10) {
     return 698;
    }
if (index == 11) {
     return 717;
    }
if (index == 12) {
     return 698;
    }
if (index == 13) {
     return 710;
    }
if (index == 14) {
     return 698;
    }
if (index == 15) {
     return 707;
    }
if (index == 16) {
     return 698;
    }
if (index == 17) {
     return 717;
    }
if (index == 18) {
     return 737;
    }
if (index == 19) {
     return 698;
    }
if (index == 20) {
     return 698;
    }
if (index == 21) {
     return 698;
    }
if (index == 22) {
     return 698;
    }
if (index == 23) {
     return 743;
    }
if (index == 24) {
     return 713;
    }
if (index == 25) {
     return 730;
    }
if (index == 26) {
     return 698;
    }
if (index == 27) {
     return 746;
    }
if (index == 28) {
     return 698;
    }
if (index == 29) {
     return 698;
    }
if (index == 30) {
     return 698;
    }
if (index == 31) {
     return 698;
    }
if (index == 32) {
     return 702;
    }
if (index == 33) {
     return 729;
    }
if (index == 34) {
     return 698;
    }
if (index == 35) {
     return 732;
    }
if (index == 36) {
     return 698;
    }
if (index == 37) {
     return 734;
    }
if (index > 37) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1050;
    }
if (index == 1) {
     return 1050;
    }
if (index == 2) {
     return 1050;
    }
if (index == 3) {
     return 1050;
    }
if (index == 4) {
     return 1064;
    }
if (index == 5) {
     return 1050;
    }
if (index == 6) {
     return 1071;
    }
if (index == 7) {
     return 1050;
    }
if (index == 8) {
     return 1070;
    }
if (index == 9) {
     return 1050;
    }
if (index == 10) {
     return 1050;
    }
if (index == 11) {
     return 1063;
    }
if (index == 12) {
     return 1050;
    }
if (index == 13) {
     return 1058;
    }
if (index == 14) {
     return 1050;
    }
if (index == 15) {
     return 1057;
    }
if (index == 16) {
     return 1050;
    }
if (index == 17) {
     return 1063;
    }
if (index == 18) {
     return 1075;
    }
if (index == 19) {
     return 1050;
    }
if (index == 20) {
     return 1050;
    }
if (index == 21) {
     return 1050;
    }
if (index == 22) {
     return 1050;
    }
if (index == 23) {
     return 1080;
    }
if (index == 24) {
     return 1060;
    }
if (index == 25) {
     return 1072;
    }
if (index == 26) {
     return 1050;
    }
if (index == 27) {
     return 1082;
    }
if (index == 28) {
     return 1050;
    }
if (index == 29) {
     return 1050;
    }
if (index == 30) {
     return 1050;
    }
if (index == 31) {
     return 1050;
    }
if (index == 32) {
     return 1053;
    }
if (index == 33) {
     return 1071;
    }
if (index == 34) {
     return 1050;
    }
if (index == 35) {
     return 1072;
    }
if (index == 36) {
     return 1050;
    }
if (index == 37) {
     return 1073;
    }
if (index > 37) {
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
    var url = '/fedora/get/nur:00875_' + imgStr + '/digitalImage';
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
br.numLeafs = 38;

// Book title and the URL used for the book title link
br.bookTitle= "Staff Evidence Analysis / Office of the U. S. Chief of Counsel for the Prosecution of Axis Criminality";
br.bookAuthor= "The names of the respective analysts are given as follows: Atherton; Bierer; Schafer; Landmann";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, 1945-09-14";
br.bookKeyword= "";
br.bookUrl  = '/nuremberg/catalog/nur:00875';

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
