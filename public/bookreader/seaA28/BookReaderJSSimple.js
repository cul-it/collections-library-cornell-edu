//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1085;
    }
if (index == 1) {
     return 1103;
    }
if (index == 2) {
     return 1019;
    }
if (index == 3) {
     return 1080;
    }
if (index == 4) {
     return 1017;
    }
if (index == 5) {
     return 1061;
    }
if (index == 6) {
     return 1006;
    }
if (index == 7) {
     return 1092;
    }
if (index == 8) {
     return 1023;
    }
if (index == 9) {
     return 1054;
    }
if (index == 10) {
     return 1101;
    }
if (index == 11) {
     return 1027;
    }
if (index == 12) {
     return 1012;
    }
if (index == 13) {
     return 1035;
    }
if (index == 14) {
     return 1015;
    }
if (index == 15) {
     return 1035;
    }
if (index > 15) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1653;
    }
if (index == 1) {
     return 1670;
    }
if (index == 2) {
     return 1664;
    }
if (index == 3) {
     return 1661;
    }
if (index == 4) {
     return 1662;
    }
if (index == 5) {
     return 1663;
    }
if (index == 6) {
     return 1665;
    }
if (index == 7) {
     return 1672;
    }
if (index == 8) {
     return 1667;
    }
if (index == 9) {
     return 1673;
    }
if (index == 10) {
     return 1632;
    }
if (index == 11) {
     return 1667;
    }
if (index == 12) {
     return 1661;
    }
if (index == 13) {
     return 1678;
    }
if (index == 14) {
     return 1665;
    }
if (index == 15) {
     return 1666;
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
    var url = '/fedora/get/seapage:A28_' + imgStr + '/digitalImage';
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
br.numLeafs = 16;

// Book title and the URL used for the book title link
br.bookTitle= "Aux monuments anciens des Kiams (excursion archeologique en Annam)";
br.bookAuthor= "Lemire, Ch. (Charles)";
br.bookPub= "Ithaca, NY: Cornell University Library, 1894";
br.bookKeyword= "monuments<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vietnam";
br.bookUrl  = '/catalog/sea:A28';

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
