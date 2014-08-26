//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1144;
    }
if (index == 1) {
     return 1141;
    }
if (index == 2) {
     return 1133;
    }
if (index == 3) {
     return 1139;
    }
if (index == 4) {
     return 1145;
    }
if (index == 5) {
     return 1154;
    }
if (index == 6) {
     return 1147;
    }
if (index == 7) {
     return 1149;
    }
if (index == 8) {
     return 1674;
    }
if (index == 9) {
     return 1149;
    }
if (index == 10) {
     return 1147;
    }
if (index == 11) {
     return 1178;
    }
if (index == 12) {
     return 1128;
    }
if (index == 13) {
     return 1155;
    }
if (index == 14) {
     return 1131;
    }
if (index == 15) {
     return 1144;
    }
if (index == 16) {
     return 1095;
    }
if (index == 17) {
     return 1152;
    }
if (index == 18) {
     return 1649;
    }
if (index == 19) {
     return 1156;
    }
if (index == 20) {
     return 1150;
    }
if (index == 21) {
     return 1166;
    }
if (index == 22) {
     return 1127;
    }
if (index == 23) {
     return 1141;
    }
if (index == 24) {
     return 1698;
    }
if (index == 25) {
     return 1166;
    }
if (index == 26) {
     return 1125;
    }
if (index == 27) {
     return 1161;
    }
if (index == 28) {
     return 1698;
    }
if (index == 29) {
     return 1175;
    }
if (index == 30) {
     return 1128;
    }
if (index == 31) {
     return 1163;
    }
if (index == 32) {
     return 1101;
    }
if (index == 33) {
     return 1163;
    }
if (index == 34) {
     return 1136;
    }
if (index == 35) {
     return 1166;
    }
if (index == 36) {
     return 1696;
    }
if (index == 37) {
     return 1160;
    }
if (index == 38) {
     return 1143;
    }
if (index == 39) {
     return 1136;
    }
if (index == 40) {
     return 1673;
    }
if (index == 41) {
     return 1158;
    }
if (index == 42) {
     return 1128;
    }
if (index == 43) {
     return 1164;
    }
if (index == 44) {
     return 1122;
    }
if (index == 45) {
     return 1170;
    }
if (index == 46) {
     return 1131;
    }
if (index == 47) {
     return 1152;
    }
if (index == 48) {
     return 1131;
    }
if (index == 49) {
     return 1177;
    }
if (index == 50) {
     return 1127;
    }
if (index == 51) {
     return 1148;
    }
if (index == 52) {
     return 1695;
    }
if (index == 53) {
     return 1152;
    }
if (index == 54) {
     return 1158;
    }
if (index == 55) {
     return 1147;
    }
if (index == 56) {
     return 1698;
    }
if (index == 57) {
     return 1166;
    }
if (index == 58) {
     return 1696;
    }
if (index == 59) {
     return 1152;
    }
if (index == 60) {
     return 1144;
    }
if (index == 61) {
     return 1163;
    }
if (index == 62) {
     return 1128;
    }
if (index == 63) {
     return 1155;
    }
if (index > 63) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1669;
    }
if (index == 1) {
     return 1698;
    }
if (index == 2) {
     return 1696;
    }
if (index == 3) {
     return 1702;
    }
if (index == 4) {
     return 1678;
    }
if (index == 5) {
     return 1684;
    }
if (index == 6) {
     return 1680;
    }
if (index == 7) {
     return 1681;
    }
if (index == 8) {
     return 1132;
    }
if (index == 9) {
     return 1701;
    }
if (index == 10) {
     return 1683;
    }
if (index == 11) {
     return 1717;
    }
if (index == 12) {
     return 1668;
    }
if (index == 13) {
     return 1698;
    }
if (index == 14) {
     return 1686;
    }
if (index == 15) {
     return 1696;
    }
if (index == 16) {
     return 1698;
    }
if (index == 17) {
     return 1698;
    }
if (index == 18) {
     return 1115;
    }
if (index == 19) {
     return 1713;
    }
if (index == 20) {
     return 1711;
    }
if (index == 21) {
     return 1698;
    }
if (index == 22) {
     return 1672;
    }
if (index == 23) {
     return 1698;
    }
if (index == 24) {
     return 1144;
    }
if (index == 25) {
     return 1698;
    }
if (index == 26) {
     return 1698;
    }
if (index == 27) {
     return 1698;
    }
if (index == 28) {
     return 1152;
    }
if (index == 29) {
     return 1715;
    }
if (index == 30) {
     return 1670;
    }
if (index == 31) {
     return 1698;
    }
if (index == 32) {
     return 1675;
    }
if (index == 33) {
     return 1698;
    }
if (index == 34) {
     return 1686;
    }
if (index == 35) {
     return 1698;
    }
if (index == 36) {
     return 1144;
    }
if (index == 37) {
     return 1698;
    }
if (index == 38) {
     return 1687;
    }
if (index == 39) {
     return 1698;
    }
if (index == 40) {
     return 1139;
    }
if (index == 41) {
     return 1696;
    }
if (index == 42) {
     return 1698;
    }
if (index == 43) {
     return 1704;
    }
if (index == 44) {
     return 1698;
    }
if (index == 45) {
     return 1703;
    }
if (index == 46) {
     return 1698;
    }
if (index == 47) {
     return 1698;
    }
if (index == 48) {
     return 1698;
    }
if (index == 49) {
     return 1720;
    }
if (index == 50) {
     return 1687;
    }
if (index == 51) {
     return 1675;
    }
if (index == 52) {
     return 1125;
    }
if (index == 53) {
     return 1698;
    }
if (index == 54) {
     return 1698;
    }
if (index == 55) {
     return 1698;
    }
if (index == 56) {
     return 1136;
    }
if (index == 57) {
     return 1698;
    }
if (index == 58) {
     return 1131;
    }
if (index == 59) {
     return 1698;
    }
if (index == 60) {
     return 1698;
    }
if (index == 61) {
     return 1698;
    }
if (index == 62) {
     return 1698;
    }
if (index == 63) {
     return 1696;
    }
if (index > 63) {
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
    var url = '/fedora/get/seapage:A12_' + imgStr + '/digitalImage';
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
br.numLeafs = 306;

// Book title and the URL used for the book title link
br.bookTitle= "Voyage en Nouvelle-Guine, 1876-1877";
br.bookAuthor= "Raffray, Achille";
br.bookPub= "Ithaca, NY: Cornell University Library, 1879";
br.bookKeyword= "Voyages and travels--Periodicals<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ethnology<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New Guinea";
br.bookUrl  = '/catalog/sea:A12';

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
