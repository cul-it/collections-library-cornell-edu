//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 981;
    }
if (index == 1) {
     return 1136;
    }
if (index == 2) {
     return 1152;
    }
if (index == 3) {
     return 980;
    }
if (index == 4) {
     return 1016;
    }
if (index == 5) {
     return 828;
    }
if (index == 6) {
     return 936;
    }
if (index == 7) {
     return 856;
    }
if (index == 8) {
     return 848;
    }
if (index == 9) {
     return 848;
    }
if (index == 10) {
     return 848;
    }
if (index == 11) {
     return 852;
    }
if (index == 12) {
     return 852;
    }
if (index == 13) {
     return 848;
    }
if (index == 14) {
     return 844;
    }
if (index == 15) {
     return 876;
    }
if (index == 16) {
     return 876;
    }
if (index == 17) {
     return 1085;
    }
if (index == 18) {
     return 1084;
    }
if (index == 19) {
     return 836;
    }
if (index == 20) {
     return 836;
    }
if (index == 21) {
     return 836;
    }
if (index == 22) {
     return 836;
    }
if (index == 23) {
     return 836;
    }
if (index == 24) {
     return 836;
    }
if (index == 25) {
     return 836;
    }
if (index == 26) {
     return 836;
    }
if (index == 27) {
     return 1060;
    }
if (index == 28) {
     return 1067;
    }
if (index == 29) {
     return 1067;
    }
if (index == 30) {
     return 1066;
    }
if (index == 31) {
     return 1376;
    }
if (index == 32) {
     return 1320;
    }
if (index == 33) {
     return 1296;
    }
if (index == 34) {
     return 824;
    }
if (index == 35) {
     return 824;
    }
if (index == 36) {
     return 816;
    }
if (index == 37) {
     return 816;
    }
if (index == 38) {
     return 816;
    }
if (index == 39) {
     return 824;
    }
if (index == 40) {
     return 796;
    }
if (index == 41) {
     return 796;
    }
if (index == 42) {
     return 796;
    }
if (index == 43) {
     return 816;
    }
if (index == 44) {
     return 1177;
    }
if (index == 45) {
     return 872;
    }
if (index == 46) {
     return 872;
    }
if (index == 47) {
     return 872;
    }
if (index > 47) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1500;
    }
if (index == 1) {
     return 1544;
    }
if (index == 2) {
     return 1568;
    }
if (index == 3) {
     return 1532;
    }
if (index == 4) {
     return 1548;
    }
if (index == 5) {
     return 1300;
    }
if (index == 6) {
     return 1372;
    }
if (index == 7) {
     return 1336;
    }
if (index == 8) {
     return 1360;
    }
if (index == 9) {
     return 1360;
    }
if (index == 10) {
     return 1360;
    }
if (index == 11) {
     return 1248;
    }
if (index == 12) {
     return 1248;
    }
if (index == 13) {
     return 1248;
    }
if (index == 14) {
     return 1268;
    }
if (index == 15) {
     return 1296;
    }
if (index == 16) {
     return 1296;
    }
if (index == 17) {
     return 1556;
    }
if (index == 18) {
     return 1596;
    }
if (index == 19) {
     return 1312;
    }
if (index == 20) {
     return 1312;
    }
if (index == 21) {
     return 1312;
    }
if (index == 22) {
     return 1312;
    }
if (index == 23) {
     return 1312;
    }
if (index == 24) {
     return 1312;
    }
if (index == 25) {
     return 1312;
    }
if (index == 26) {
     return 1312;
    }
if (index == 27) {
     return 1532;
    }
if (index == 28) {
     return 1550;
    }
if (index == 29) {
     return 1550;
    }
if (index == 30) {
     return 1540;
    }
if (index == 31) {
     return 880;
    }
if (index == 32) {
     return 828;
    }
if (index == 33) {
     return 812;
    }
if (index == 34) {
     return 1288;
    }
if (index == 35) {
     return 1288;
    }
if (index == 36) {
     return 1252;
    }
if (index == 37) {
     return 1252;
    }
if (index == 38) {
     return 1252;
    }
if (index == 39) {
     return 1268;
    }
if (index == 40) {
     return 1248;
    }
if (index == 41) {
     return 1248;
    }
if (index == 42) {
     return 1248;
    }
if (index == 43) {
     return 1068;
    }
if (index == 44) {
     return 1394;
    }
if (index == 45) {
     return 1404;
    }
if (index == 46) {
     return 1404;
    }
if (index == 47) {
     return 1404;
    }
if (index > 47) {
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
    var url = '/fedora/get/seapage:047_' + imgStr + '/digitalImage';
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
br.numLeafs = 48;

// Book title and the URL used for the book title link
br.bookTitle= "A travers le Laos : guide a l'usage des voyageurs";
br.bookAuthor= "Baudenne, A";
br.bookPub= "Saigon: Inspecteur-Conseil des services agricoles et commerciaux, 1911";
br.bookKeyword= "Laos--Guidebooks";
br.bookUrl  = '/catalog/sea:047';

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
