//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 634;
    }
if (index == 1) {
     return 627;
    }
if (index == 2) {
     return 626;
    }
if (index == 3) {
     return 635;
    }
if (index == 4) {
     return 626;
    }
if (index == 5) {
     return 634;
    }
if (index == 6) {
     return 626;
    }
if (index == 7) {
     return 638;
    }
if (index == 8) {
     return 626;
    }
if (index == 9) {
     return 639;
    }
if (index == 10) {
     return 643;
    }
if (index == 11) {
     return 639;
    }
if (index == 12) {
     return 642;
    }
if (index == 13) {
     return 645;
    }
if (index == 14) {
     return 651;
    }
if (index == 15) {
     return 641;
    }
if (index > 15) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1002;
    }
if (index == 1) {
     return 997;
    }
if (index == 2) {
     return 997;
    }
if (index == 3) {
     return 1003;
    }
if (index == 4) {
     return 997;
    }
if (index == 5) {
     return 1002;
    }
if (index == 6) {
     return 997;
    }
if (index == 7) {
     return 1004;
    }
if (index == 8) {
     return 997;
    }
if (index == 9) {
     return 1005;
    }
if (index == 10) {
     return 1008;
    }
if (index == 11) {
     return 1005;
    }
if (index == 12) {
     return 1007;
    }
if (index == 13) {
     return 1009;
    }
if (index == 14) {
     return 1012;
    }
if (index == 15) {
     return 1006;
    }
if (index > 15) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/nur:00687_' + imgStr + '/digitalImage';
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
br.numLeafs = 17;

// Book title and the URL used for the book title link
br.bookTitle= "Basic Facts for a History of German War and Armaments Economy  / Translation of Extracts of Document 2353-PS / Office of U.S. Chief of Counsel";
br.bookAuthor= "General Georg R. Thomas (see Abstract); the translator is Evelyn Glazer, P/O, W.R.N.S., 37371.";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, 1945-11-15";
br.bookKeyword= "War economy organization; WO; Reich Defense Law; War preparations; Action Otto; OKW; Military mobilization; Economic mobilization; Divided mobilization; Inspectorate of War Economy Prague; War with Poland; Camouflaged mobilization; Occupation of Denmark and Norway; Economic evacuation; War material; Russia; Hungary; Romania; Finland; Bulgaria; Turkey; Seelowe; Sea-lion; War Economy of the Soviet Union";
br.bookUrl  = '/nuremberg/catalog/nur:00687';

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
