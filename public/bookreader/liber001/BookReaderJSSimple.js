//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 755;
    }
if (index == 1) {
     return 752;
    }
if (index == 2) {
     return 755;
    }
if (index == 3) {
     return 734;
    }
if (index == 4) {
     return 722;
    }
if (index == 5) {
     return 755;
    }
if (index == 6) {
     return 698;
    }
if (index == 7) {
     return 731;
    }
if (index == 8) {
     return 733;
    }
if (index == 9) {
     return 719;
    }
if (index == 10) {
     return 735;
    }
if (index == 11) {
     return 717;
    }
if (index == 12) {
     return 731;
    }
if (index == 13) {
     return 719;
    }
if (index == 14) {
     return 713;
    }
if (index == 15) {
     return 724;
    }
if (index == 16) {
     return 736;
    }
if (index == 17) {
     return 725;
    }
if (index == 18) {
     return 698;
    }
if (index == 19) {
     return 711;
    }
if (index == 20) {
     return 737;
    }
if (index == 21) {
     return 714;
    }
if (index == 22) {
     return 716;
    }
if (index == 23) {
     return 736;
    }
if (index == 24) {
     return 719;
    }
if (index == 25) {
     return 715;
    }
if (index == 26) {
     return 727;
    }
if (index == 27) {
     return 716;
    }
if (index == 28) {
     return 717;
    }
if (index == 29) {
     return 723;
    }
if (index == 30) {
     return 739;
    }
if (index == 31) {
     return 731;
    }
if (index == 32) {
     return 741;
    }
if (index == 33) {
     return 751;
    }
if (index == 34) {
     return 745;
    }
if (index == 35) {
     return 714;
    }
if (index == 36) {
     return 729;
    }
if (index == 37) {
     return 711;
    }
if (index == 38) {
     return 709;
    }
if (index == 39) {
     return 702;
    }
if (index == 40) {
     return 715;
    }
if (index == 41) {
     return 688;
    }
if (index == 42) {
     return 705;
    }
if (index == 43) {
     return 722;
    }
if (index == 44) {
     return 714;
    }
if (index == 45) {
     return 712;
    }
if (index == 46) {
     return 731;
    }
if (index == 47) {
     return 709;
    }
if (index == 48) {
     return 716;
    }
if (index == 49) {
     return 697;
    }
if (index == 50) {
     return 1060;
    }
if (index == 51) {
     return 1060;
    }
if (index == 52) {
     return 667;
    }
if (index == 53) {
     return 651;
    }
if (index == 54) {
     return 691;
    }
if (index == 55) {
     return 729;
    }
if (index > 55) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1164;
    }
if (index == 1) {
     return 1140;
    }
if (index == 2) {
     return 1162;
    }
if (index == 3) {
     return 1045;
    }
if (index == 4) {
     return 1139;
    }
if (index == 5) {
     return 1130;
    }
if (index == 6) {
     return 1105;
    }
if (index == 7) {
     return 1132;
    }
if (index == 8) {
     return 1131;
    }
if (index == 9) {
     return 1126;
    }
if (index == 10) {
     return 1148;
    }
if (index == 11) {
     return 1137;
    }
if (index == 12) {
     return 1139;
    }
if (index == 13) {
     return 1146;
    }
if (index == 14) {
     return 1130;
    }
if (index == 15) {
     return 1133;
    }
if (index == 16) {
     return 1143;
    }
if (index == 17) {
     return 1137;
    }
if (index == 18) {
     return 1122;
    }
if (index == 19) {
     return 1145;
    }
if (index == 20) {
     return 1146;
    }
if (index == 21) {
     return 1153;
    }
if (index == 22) {
     return 1153;
    }
if (index == 23) {
     return 1139;
    }
if (index == 24) {
     return 1142;
    }
if (index == 25) {
     return 1148;
    }
if (index == 26) {
     return 1144;
    }
if (index == 27) {
     return 1145;
    }
if (index == 28) {
     return 1140;
    }
if (index == 29) {
     return 1142;
    }
if (index == 30) {
     return 1134;
    }
if (index == 31) {
     return 1148;
    }
if (index == 32) {
     return 1144;
    }
if (index == 33) {
     return 1152;
    }
if (index == 34) {
     return 1142;
    }
if (index == 35) {
     return 1152;
    }
if (index == 36) {
     return 1138;
    }
if (index == 37) {
     return 1159;
    }
if (index == 38) {
     return 1133;
    }
if (index == 39) {
     return 1149;
    }
if (index == 40) {
     return 1150;
    }
if (index == 41) {
     return 1146;
    }
if (index == 42) {
     return 1144;
    }
if (index == 43) {
     return 1149;
    }
if (index == 44) {
     return 1139;
    }
if (index == 45) {
     return 1157;
    }
if (index == 46) {
     return 1142;
    }
if (index == 47) {
     return 1152;
    }
if (index == 48) {
     return 1136;
    }
if (index == 49) {
     return 1159;
    }
if (index == 50) {
     return 1581;
    }
if (index == 51) {
     return 1581;
    }
if (index == 52) {
     return 1143;
    }
if (index == 53) {
     return 1120;
    }
if (index == 54) {
     return 1152;
    }
if (index == 55) {
     return 1148;
    }
if (index > 55) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/liber:001_' + imgStr + '/digitalImage';
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
br.numLeafs = 56;

// Book title and the URL used for the book title link
br.bookTitle= "Constitution and Laws of the Commonweath of Liberia, 1st Part";
br.bookAuthor= "President Barclay";
br.bookPub= "Moravia, Liberia: Legislative Council, Commwealth of Liberia, 1846";
br.bookKeyword= "Liberia<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Liberian Law";
br.bookUrl  = '/liberian/catalog/liber:001';

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
