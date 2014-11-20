//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1131;
    }
if (index == 1) {
     return 1182;
    }
if (index == 2) {
     return 1671;
    }
if (index == 3) {
     return 1188;
    }
if (index == 4) {
     return 1631;
    }
if (index == 5) {
     return 1182;
    }
if (index == 6) {
     return 1639;
    }
if (index == 7) {
     return 1195;
    }
if (index == 8) {
     return 1236;
    }
if (index == 9) {
     return 1105;
    }
if (index == 10) {
     return 1102;
    }
if (index == 11) {
     return 1182;
    }
if (index == 12) {
     return 1217;
    }
if (index == 13) {
     return 1106;
    }
if (index == 14) {
     return 1086;
    }
if (index == 15) {
     return 1064;
    }
if (index == 16) {
     return 1151;
    }
if (index == 17) {
     return 1049;
    }
if (index == 18) {
     return 1091;
    }
if (index == 19) {
     return 1083;
    }
if (index == 20) {
     return 1618;
    }
if (index == 21) {
     return 1066;
    }
if (index == 22) {
     return 1645;
    }
if (index == 23) {
     return 1106;
    }
if (index == 24) {
     return 1148;
    }
if (index == 25) {
     return 1074;
    }
if (index == 26) {
     return 1107;
    }
if (index == 27) {
     return 1132;
    }
if (index == 28) {
     return 1150;
    }
if (index == 29) {
     return 1128;
    }
if (index == 30) {
     return 1138;
    }
if (index == 31) {
     return 1114;
    }
if (index == 32) {
     return 1122;
    }
if (index == 33) {
     return 1123;
    }
if (index == 34) {
     return 1079;
    }
if (index == 35) {
     return 1123;
    }
if (index == 36) {
     return 1154;
    }
if (index == 37) {
     return 1092;
    }
if (index == 38) {
     return 1094;
    }
if (index == 39) {
     return 1112;
    }
if (index == 40) {
     return 1137;
    }
if (index == 41) {
     return 1107;
    }
if (index == 42) {
     return 1116;
    }
if (index == 43) {
     return 1140;
    }
if (index == 44) {
     return 1142;
    }
if (index == 45) {
     return 1110;
    }
if (index == 46) {
     return 1647;
    }
if (index == 47) {
     return 1151;
    }
if (index == 48) {
     return 1082;
    }
if (index == 49) {
     return 1126;
    }
if (index == 50) {
     return 1649;
    }
if (index == 51) {
     return 1154;
    }
if (index == 52) {
     return 1170;
    }
if (index == 53) {
     return 1127;
    }
if (index == 54) {
     return 1102;
    }
if (index == 55) {
     return 1134;
    }
if (index == 56) {
     return 1087;
    }
if (index == 57) {
     return 1112;
    }
if (index > 57) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1669;
    }
if (index == 1) {
     return 1689;
    }
if (index == 2) {
     return 1217;
    }
if (index == 3) {
     return 1693;
    }
if (index == 4) {
     return 1159;
    }
if (index == 5) {
     return 1689;
    }
if (index == 6) {
     return 1116;
    }
if (index == 7) {
     return 1698;
    }
if (index == 8) {
     return 1685;
    }
if (index == 9) {
     return 1654;
    }
if (index == 10) {
     return 1661;
    }
if (index == 11) {
     return 1689;
    }
if (index == 12) {
     return 1671;
    }
if (index == 13) {
     return 1684;
    }
if (index == 14) {
     return 1649;
    }
if (index == 15) {
     return 1698;
    }
if (index == 16) {
     return 1676;
    }
if (index == 17) {
     return 1660;
    }
if (index == 18) {
     return 1664;
    }
if (index == 19) {
     return 1688;
    }
if (index == 20) {
     return 1122;
    }
if (index == 21) {
     return 1660;
    }
if (index == 22) {
     return 1123;
    }
if (index == 23) {
     return 1693;
    }
if (index == 24) {
     return 1680;
    }
if (index == 25) {
     return 1679;
    }
if (index == 26) {
     return 1647;
    }
if (index == 27) {
     return 1705;
    }
if (index == 28) {
     return 1687;
    }
if (index == 29) {
     return 1660;
    }
if (index == 30) {
     return 1669;
    }
if (index == 31) {
     return 1668;
    }
if (index == 32) {
     return 1646;
    }
if (index == 33) {
     return 1675;
    }
if (index == 34) {
     return 1643;
    }
if (index == 35) {
     return 1693;
    }
if (index == 36) {
     return 1699;
    }
if (index == 37) {
     return 1655;
    }
if (index == 38) {
     return 1631;
    }
if (index == 39) {
     return 1678;
    }
if (index == 40) {
     return 1672;
    }
if (index == 41) {
     return 1675;
    }
if (index == 42) {
     return 1663;
    }
if (index == 43) {
     return 1690;
    }
if (index == 44) {
     return 1703;
    }
if (index == 45) {
     return 1675;
    }
if (index == 46) {
     return 1145;
    }
if (index == 47) {
     return 1696;
    }
if (index == 48) {
     return 1654;
    }
if (index == 49) {
     return 1675;
    }
if (index == 50) {
     return 1190;
    }
if (index == 51) {
     return 1707;
    }
if (index == 52) {
     return 1683;
    }
if (index == 53) {
     return 1662;
    }
if (index == 54) {
     return 1645;
    }
if (index == 55) {
     return 1673;
    }
if (index == 56) {
     return 1633;
    }
if (index == 57) {
     return 1675;
    }
if (index > 57) {
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
    var url = '/fedora/get/seapage:A08_' + imgStr + '/digitalImage';
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
br.numLeafs = 58;

// Book title and the URL used for the book title link
br.bookTitle= "Voyage a Java, 1858-1861";
br.bookAuthor= "Molins, M. de";
br.bookPub= "Ithaca, NY: Cornell University Library, 1864";
br.bookKeyword= "Java<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indonesia--Java";
br.bookUrl  = '/catalog/sea:A08';

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
