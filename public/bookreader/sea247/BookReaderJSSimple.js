//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 814;
    }
if (index == 1) {
     return 824;
    }
if (index == 2) {
     return 782;
    }
if (index == 3) {
     return 705;
    }
if (index == 4) {
     return 718;
    }
if (index == 5) {
     return 692;
    }
if (index == 6) {
     return 721;
    }
if (index == 7) {
     return 795;
    }
if (index == 8) {
     return 766;
    }
if (index == 9) {
     return 771;
    }
if (index == 10) {
     return 764;
    }
if (index == 11) {
     return 774;
    }
if (index == 12) {
     return 767;
    }
if (index == 13) {
     return 776;
    }
if (index == 14) {
     return 754;
    }
if (index == 15) {
     return 771;
    }
if (index == 16) {
     return 737;
    }
if (index == 17) {
     return 772;
    }
if (index == 18) {
     return 745;
    }
if (index == 19) {
     return 763;
    }
if (index == 20) {
     return 757;
    }
if (index == 21) {
     return 771;
    }
if (index == 22) {
     return 762;
    }
if (index == 23) {
     return 764;
    }
if (index == 24) {
     return 757;
    }
if (index == 25) {
     return 757;
    }
if (index == 26) {
     return 744;
    }
if (index == 27) {
     return 755;
    }
if (index == 28) {
     return 720;
    }
if (index == 29) {
     return 763;
    }
if (index == 30) {
     return 757;
    }
if (index == 31) {
     return 766;
    }
if (index == 32) {
     return 749;
    }
if (index == 33) {
     return 753;
    }
if (index == 34) {
     return 765;
    }
if (index == 35) {
     return 786;
    }
if (index == 36) {
     return 736;
    }
if (index == 37) {
     return 750;
    }
if (index > 37) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1243;
    }
if (index == 1) {
     return 1202;
    }
if (index == 2) {
     return 1213;
    }
if (index == 3) {
     return 1199;
    }
if (index == 4) {
     return 1216;
    }
if (index == 5) {
     return 1199;
    }
if (index == 6) {
     return 1225;
    }
if (index == 7) {
     return 1211;
    }
if (index == 8) {
     return 1230;
    }
if (index == 9) {
     return 1199;
    }
if (index == 10) {
     return 1224;
    }
if (index == 11) {
     return 1206;
    }
if (index == 12) {
     return 1223;
    }
if (index == 13) {
     return 1213;
    }
if (index == 14) {
     return 1213;
    }
if (index == 15) {
     return 1199;
    }
if (index == 16) {
     return 1216;
    }
if (index == 17) {
     return 1207;
    }
if (index == 18) {
     return 1216;
    }
if (index == 19) {
     return 1206;
    }
if (index == 20) {
     return 1223;
    }
if (index == 21) {
     return 1202;
    }
if (index == 22) {
     return 1227;
    }
if (index == 23) {
     return 1208;
    }
if (index == 24) {
     return 1228;
    }
if (index == 25) {
     return 1220;
    }
if (index == 26) {
     return 1228;
    }
if (index == 27) {
     return 1214;
    }
if (index == 28) {
     return 1226;
    }
if (index == 29) {
     return 1216;
    }
if (index == 30) {
     return 1227;
    }
if (index == 31) {
     return 1216;
    }
if (index == 32) {
     return 1231;
    }
if (index == 33) {
     return 1210;
    }
if (index == 34) {
     return 1235;
    }
if (index == 35) {
     return 1206;
    }
if (index == 36) {
     return 1209;
    }
if (index == 37) {
     return 1198;
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:247_' + imgStr + '/digitalImage';
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
br.bookTitle= "A trip into the Malay Peninsula, and a visit to the caves of Sungie Batu in Selangor : a paper read before the Portsmouth Literary and Scientific Society, session 1885-86";
br.bookAuthor= "Taylor, J. E.";
br.bookPub= "London: R. Clay and Sons, 1886";
br.bookKeyword= "Malay Peninsula--Description and travel";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:247';

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
