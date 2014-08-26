//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1108;
    }
if (index == 1) {
     return 1134;
    }
if (index == 2) {
     return 1151;
    }
if (index == 3) {
     return 1131;
    }
if (index == 4) {
     return 1139;
    }
if (index == 5) {
     return 1125;
    }
if (index == 6) {
     return 1177;
    }
if (index == 7) {
     return 1134;
    }
if (index == 8) {
     return 1740;
    }
if (index == 9) {
     return 1163;
    }
if (index == 10) {
     return 1132;
    }
if (index == 11) {
     return 1156;
    }
if (index == 12) {
     return 1150;
    }
if (index == 13) {
     return 1152;
    }
if (index == 14) {
     return 1729;
    }
if (index == 15) {
     return 1153;
    }
if (index == 16) {
     return 1124;
    }
if (index == 17) {
     return 1189;
    }
if (index == 18) {
     return 1728;
    }
if (index == 19) {
     return 1158;
    }
if (index == 20) {
     return 1150;
    }
if (index == 21) {
     return 1180;
    }
if (index == 22) {
     return 1173;
    }
if (index == 23) {
     return 1150;
    }
if (index == 24) {
     return 1738;
    }
if (index == 25) {
     return 1187;
    }
if (index == 26) {
     return 1135;
    }
if (index == 27) {
     return 1129;
    }
if (index == 28) {
     return 1144;
    }
if (index == 29) {
     return 1137;
    }
if (index == 30) {
     return 1732;
    }
if (index == 31) {
     return 1178;
    }
if (index == 32) {
     return 1178;
    }
if (index == 33) {
     return 1151;
    }
if (index == 34) {
     return 1141;
    }
if (index == 35) {
     return 1160;
    }
if (index == 36) {
     return 1145;
    }
if (index == 37) {
     return 1195;
    }
if (index == 38) {
     return 1716;
    }
if (index == 39) {
     return 1137;
    }
if (index == 40) {
     return 1722;
    }
if (index == 41) {
     return 1179;
    }
if (index == 42) {
     return 1126;
    }
if (index == 43) {
     return 1177;
    }
if (index == 44) {
     return 1712;
    }
if (index == 45) {
     return 1166;
    }
if (index == 46) {
     return 1171;
    }
if (index == 47) {
     return 1139;
    }
if (index > 47) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1731;
    }
if (index == 1) {
     return 1756;
    }
if (index == 2) {
     return 1749;
    }
if (index == 3) {
     return 1739;
    }
if (index == 4) {
     return 1735;
    }
if (index == 5) {
     return 1753;
    }
if (index == 6) {
     return 1725;
    }
if (index == 7) {
     return 1749;
    }
if (index == 8) {
     return 1212;
    }
if (index == 9) {
     return 1750;
    }
if (index == 10) {
     return 1748;
    }
if (index == 11) {
     return 1760;
    }
if (index == 12) {
     return 1731;
    }
if (index == 13) {
     return 1753;
    }
if (index == 14) {
     return 1212;
    }
if (index == 15) {
     return 1714;
    }
if (index == 16) {
     return 1745;
    }
if (index == 17) {
     return 1752;
    }
if (index == 18) {
     return 1199;
    }
if (index == 19) {
     return 1755;
    }
if (index == 20) {
     return 1751;
    }
if (index == 21) {
     return 1751;
    }
if (index == 22) {
     return 1754;
    }
if (index == 23) {
     return 1736;
    }
if (index == 24) {
     return 1207;
    }
if (index == 25) {
     return 1728;
    }
if (index == 26) {
     return 1739;
    }
if (index == 27) {
     return 1734;
    }
if (index == 28) {
     return 1735;
    }
if (index == 29) {
     return 1743;
    }
if (index == 30) {
     return 1223;
    }
if (index == 31) {
     return 1746;
    }
if (index == 32) {
     return 1759;
    }
if (index == 33) {
     return 1753;
    }
if (index == 34) {
     return 1735;
    }
if (index == 35) {
     return 1742;
    }
if (index == 36) {
     return 1742;
    }
if (index == 37) {
     return 1753;
    }
if (index == 38) {
     return 1145;
    }
if (index == 39) {
     return 1749;
    }
if (index == 40) {
     return 1209;
    }
if (index == 41) {
     return 1744;
    }
if (index == 42) {
     return 1725;
    }
if (index == 43) {
     return 1744;
    }
if (index == 44) {
     return 1241;
    }
if (index == 45) {
     return 1737;
    }
if (index == 46) {
     return 1753;
    }
if (index == 47) {
     return 1714;
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
    var url = '/fedora/get/seapage:A19a_' + imgStr + '/digitalImage';
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
br.numLeafs = 96;

// Book title and the URL used for the book title link
br.bookTitle= "Lucon et Palaouan (six annees aux Philippines), I-XII";
br.bookAuthor= "Marche, Alfred";
br.bookPub= "Ithaca, NY: Cornell University Library, 1886";
br.bookKeyword= "Philippines--Palawan<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Philippines--Luzon";
br.bookUrl  = '/catalog/sea:A19a';

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
