//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 692;
    }
if (index == 1) {
     return 640;
    }
if (index == 2) {
     return 627;
    }
if (index == 3) {
     return 640;
    }
if (index == 4) {
     return 640;
    }
if (index == 5) {
     return 640;
    }
if (index == 6) {
     return 641;
    }
if (index == 7) {
     return 635;
    }
if (index == 8) {
     return 612;
    }
if (index == 9) {
     return 621;
    }
if (index == 10) {
     return 618;
    }
if (index == 11) {
     return 626;
    }
if (index == 12) {
     return 618;
    }
if (index == 13) {
     return 626;
    }
if (index == 14) {
     return 618;
    }
if (index == 15) {
     return 626;
    }
if (index == 16) {
     return 618;
    }
if (index == 17) {
     return 626;
    }
if (index == 18) {
     return 618;
    }
if (index == 19) {
     return 618;
    }
if (index == 20) {
     return 618;
    }
if (index == 21) {
     return 618;
    }
if (index == 22) {
     return 618;
    }
if (index == 23) {
     return 618;
    }
if (index == 24) {
     return 618;
    }
if (index == 25) {
     return 618;
    }
if (index == 26) {
     return 611;
    }
if (index == 27) {
     return 622;
    }
if (index == 28) {
     return 600;
    }
if (index == 29) {
     return 605;
    }
if (index == 30) {
     return 621;
    }
if (index == 31) {
     return 600;
    }
if (index == 32) {
     return 617;
    }
if (index == 33) {
     return 605;
    }
if (index == 34) {
     return 600;
    }
if (index == 35) {
     return 600;
    }
if (index == 36) {
     return 600;
    }
if (index == 37) {
     return 600;
    }
if (index > 37) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 969;
    }
if (index == 1) {
     return 1011;
    }
if (index == 2) {
     return 862;
    }
if (index == 3) {
     return 1011;
    }
if (index == 4) {
     return 1011;
    }
if (index == 5) {
     return 1011;
    }
if (index == 6) {
     return 1027;
    }
if (index == 7) {
     return 1024;
    }
if (index == 8) {
     return 1021;
    }
if (index == 9) {
     return 1023;
    }
if (index == 10) {
     return 1024;
    }
if (index == 11) {
     return 1024;
    }
if (index == 12) {
     return 1024;
    }
if (index == 13) {
     return 1024;
    }
if (index == 14) {
     return 1023;
    }
if (index == 15) {
     return 1024;
    }
if (index == 16) {
     return 1023;
    }
if (index == 17) {
     return 1024;
    }
if (index == 18) {
     return 1023;
    }
if (index == 19) {
     return 1024;
    }
if (index == 20) {
     return 1023;
    }
if (index == 21) {
     return 1024;
    }
if (index == 22) {
     return 1023;
    }
if (index == 23) {
     return 1024;
    }
if (index == 24) {
     return 1023;
    }
if (index == 25) {
     return 1024;
    }
if (index == 26) {
     return 1018;
    }
if (index == 27) {
     return 1042;
    }
if (index == 28) {
     return 1023;
    }
if (index == 29) {
     return 1027;
    }
if (index == 30) {
     return 1035;
    }
if (index == 31) {
     return 1029;
    }
if (index == 32) {
     return 1037;
    }
if (index == 33) {
     return 1030;
    }
if (index == 34) {
     return 1023;
    }
if (index == 35) {
     return 1024;
    }
if (index == 36) {
     return 1023;
    }
if (index == 37) {
     return 1024;
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/nur:00456_' + imgStr + '/digitalImage';
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
br.bookTitle= "Newsreels from 1933 to 1944  Showing How the Nazis Prepared, Started and Prolonged the Second World War ";
br.bookAuthor= "The author's name is not given.  The title page bears General Donovan's signature stamp and is  marked 'SECRET.'";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, Unknown";
br.bookKeyword= "Nazi leaders; Speeches; Nazi propaganda; Film evidence;  Nazi films";
br.bookUrl  = '/nuremberg/catalog/nur:00456';

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
