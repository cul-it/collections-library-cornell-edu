//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 906;
    }
if (index == 1) {
     return 1899;
    }
if (index == 2) {
     return 1885;
    }
if (index == 3) {
     return 1909;
    }
if (index == 4) {
     return 1702;
    }
if (index == 5) {
     return 1949;
    }
if (index == 6) {
     return 2000;
    }
if (index == 7) {
     return 1984;
    }
if (index == 8) {
     return 1926;
    }
if (index == 9) {
     return 1314;
    }
if (index == 10) {
     return 1886;
    }
if (index == 11) {
     return 1896;
    }
if (index == 12) {
     return 1298;
    }
if (index == 13) {
     return 1277;
    }
if (index == 14) {
     return 1257;
    }
if (index > 14) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1286;
    }
if (index == 1) {
     return 1326;
    }
if (index == 2) {
     return 1290;
    }
if (index == 3) {
     return 1322;
    }
if (index == 4) {
     return 1212;
    }
if (index == 5) {
     return 1324;
    }
if (index == 6) {
     return 1385;
    }
if (index == 7) {
     return 1341;
    }
if (index == 8) {
     return 1314;
    }
if (index == 9) {
     return 1923;
    }
if (index == 10) {
     return 1300;
    }
if (index == 11) {
     return 1293;
    }
if (index == 12) {
     return 1734;
    }
if (index == 13) {
     return 1904;
    }
if (index == 14) {
     return 1811;
    }
if (index > 14) {
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
    var url = '/fedora/get/seapage:034c_' + imgStr + '/digitalImage';
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
br.numLeafs = 15;

// Book title and the URL used for the book title link
br.bookTitle= "Les monuments du Cambodge; etudes d'architecture khmere. D'apres les documents recueillis au cours des missions qu'il a dirigees en 1873 et 1882-1883 et de la mission complementaire de M. Faraut en 1874-1875, vol.3";
br.bookAuthor= "Delaporte, Louis";
br.bookPub= "Paris: Editions E. Leroux, 1914";
br.bookKeyword= "Temples--Cambodia<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sculpture, Khmer<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Angkor (Extinct city)";
br.bookUrl  = '/catalog/sea:034c';

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
