//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 709;
    }
if (index == 1) {
     return 712;
    }
if (index == 2) {
     return 711;
    }
if (index == 3) {
     return 717;
    }
if (index == 4) {
     return 729;
    }
if (index == 5) {
     return 713;
    }
if (index == 6) {
     return 727;
    }
if (index == 7) {
     return 721;
    }
if (index == 8) {
     return 725;
    }
if (index == 9) {
     return 740;
    }
if (index == 10) {
     return 725;
    }
if (index == 11) {
     return 706;
    }
if (index == 12) {
     return 690;
    }
if (index == 13) {
     return 691;
    }
if (index > 13) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1137;
    }
if (index == 1) {
     return 1126;
    }
if (index == 2) {
     return 1138;
    }
if (index == 3) {
     return 1127;
    }
if (index == 4) {
     return 1143;
    }
if (index == 5) {
     return 1139;
    }
if (index == 6) {
     return 1141;
    }
if (index == 7) {
     return 1137;
    }
if (index == 8) {
     return 1139;
    }
if (index == 9) {
     return 1149;
    }
if (index == 10) {
     return 1139;
    }
if (index == 11) {
     return 1141;
    }
if (index == 12) {
     return 1117;
    }
if (index == 13) {
     return 1145;
    }
if (index > 13) {
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
    var url = '/fedora/get/liber:005_' + imgStr + '/digitalImage';
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
br.numLeafs = 14;

// Book title and the URL used for the book title link
br.bookTitle= "Acts of the Governor and Council of Liberia, passed January 1843";
br.bookAuthor= "Governor and Council of Liberia";
br.bookPub= "Moravia, Liberia: Herald Office, J.C. Minor, 1843";
br.bookKeyword= "Liberia<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Liberian Law";
br.bookUrl  = '/liberian/catalog/liber:005';

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
