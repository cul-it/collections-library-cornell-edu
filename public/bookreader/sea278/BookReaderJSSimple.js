//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1240;
    }
if (index == 1) {
     return 1139;
    }
if (index == 2) {
     return 1107;
    }
if (index == 3) {
     return 1013;
    }
if (index == 4) {
     return 1018;
    }
if (index == 5) {
     return 1005;
    }
if (index == 6) {
     return 1062;
    }
if (index == 7) {
     return 1029;
    }
if (index == 8) {
     return 1089;
    }
if (index == 9) {
     return 1049;
    }
if (index == 10) {
     return 1057;
    }
if (index == 11) {
     return 1054;
    }
if (index == 12) {
     return 1046;
    }
if (index == 13) {
     return 1020;
    }
if (index == 14) {
     return 1080;
    }
if (index == 15) {
     return 1022;
    }
if (index == 16) {
     return 1057;
    }
if (index == 17) {
     return 1028;
    }
if (index == 18) {
     return 1064;
    }
if (index == 19) {
     return 1041;
    }
if (index == 20) {
     return 1061;
    }
if (index == 21) {
     return 1015;
    }
if (index == 22) {
     return 1041;
    }
if (index == 23) {
     return 1042;
    }
if (index == 24) {
     return 1062;
    }
if (index == 25) {
     return 1026;
    }
if (index == 26) {
     return 1067;
    }
if (index == 27) {
     return 1052;
    }
if (index == 28) {
     return 1076;
    }
if (index == 29) {
     return 1026;
    }
if (index == 30) {
     return 1054;
    }
if (index == 31) {
     return 1045;
    }
if (index == 32) {
     return 1048;
    }
if (index == 33) {
     return 1031;
    }
if (index == 34) {
     return 1060;
    }
if (index == 35) {
     return 1068;
    }
if (index == 36) {
     return 1102;
    }
if (index == 37) {
     return 1031;
    }
if (index == 38) {
     return 1055;
    }
if (index == 39) {
     return 1067;
    }
if (index == 40) {
     return 1051;
    }
if (index == 41) {
     return 1059;
    }
if (index == 42) {
     return 1086;
    }
if (index == 43) {
     return 1051;
    }
if (index == 44) {
     return 1043;
    }
if (index == 45) {
     return 1062;
    }
if (index == 46) {
     return 1054;
    }
if (index == 47) {
     return 1087;
    }
if (index == 48) {
     return 1043;
    }
if (index == 49) {
     return 1091;
    }
if (index == 50) {
     return 1065;
    }
if (index == 51) {
     return 1087;
    }
if (index == 52) {
     return 1055;
    }
if (index == 53) {
     return 1087;
    }
if (index == 54) {
     return 1072;
    }
if (index == 55) {
     return 1114;
    }
if (index == 56) {
     return 1069;
    }
if (index == 57) {
     return 1068;
    }
if (index == 58) {
     return 1029;
    }
if (index == 59) {
     return 1076;
    }
if (index == 60) {
     return 1063;
    }
if (index == 61) {
     return 1057;
    }
if (index == 62) {
     return 1059;
    }
if (index == 63) {
     return 1123;
    }
if (index == 64) {
     return 1075;
    }
if (index == 65) {
     return 1077;
    }
if (index == 66) {
     return 1093;
    }
if (index == 67) {
     return 1052;
    }
if (index == 68) {
     return 1041;
    }
if (index == 69) {
     return 1067;
    }
if (index == 70) {
     return 1026;
    }
if (index == 71) {
     return 1087;
    }
if (index == 72) {
     return 1030;
    }
if (index == 73) {
     return 1082;
    }
if (index == 74) {
     return 1025;
    }
if (index == 75) {
     return 1079;
    }
if (index == 76) {
     return 1040;
    }
if (index == 77) {
     return 1085;
    }
if (index == 78) {
     return 1029;
    }
if (index == 79) {
     return 1149;
    }
if (index > 79) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1572;
    }
if (index == 1) {
     return 1559;
    }
if (index == 2) {
     return 1531;
    }
if (index == 3) {
     return 1494;
    }
if (index == 4) {
     return 1507;
    }
if (index == 5) {
     return 1462;
    }
if (index == 6) {
     return 1521;
    }
if (index == 7) {
     return 1502;
    }
if (index == 8) {
     return 1526;
    }
if (index == 9) {
     return 1508;
    }
if (index == 10) {
     return 1534;
    }
if (index == 11) {
     return 1514;
    }
if (index == 12) {
     return 1519;
    }
if (index == 13) {
     return 1535;
    }
if (index == 14) {
     return 1539;
    }
if (index == 15) {
     return 1514;
    }
if (index == 16) {
     return 1531;
    }
if (index == 17) {
     return 1513;
    }
if (index == 18) {
     return 1517;
    }
if (index == 19) {
     return 1541;
    }
if (index == 20) {
     return 1515;
    }
if (index == 21) {
     return 1503;
    }
if (index == 22) {
     return 1512;
    }
if (index == 23) {
     return 1522;
    }
if (index == 24) {
     return 1527;
    }
if (index == 25) {
     return 1483;
    }
if (index == 26) {
     return 1535;
    }
if (index == 27) {
     return 1501;
    }
if (index == 28) {
     return 1526;
    }
if (index == 29) {
     return 1529;
    }
if (index == 30) {
     return 1537;
    }
if (index == 31) {
     return 1515;
    }
if (index == 32) {
     return 1522;
    }
if (index == 33) {
     return 1499;
    }
if (index == 34) {
     return 1524;
    }
if (index == 35) {
     return 1507;
    }
if (index == 36) {
     return 1548;
    }
if (index == 37) {
     return 1523;
    }
if (index == 38) {
     return 1518;
    }
if (index == 39) {
     return 1531;
    }
if (index == 40) {
     return 1525;
    }
if (index == 41) {
     return 1530;
    }
if (index == 42) {
     return 1536;
    }
if (index == 43) {
     return 1520;
    }
if (index == 44) {
     return 1528;
    }
if (index == 45) {
     return 1515;
    }
if (index == 46) {
     return 1542;
    }
if (index == 47) {
     return 1507;
    }
if (index == 48) {
     return 1502;
    }
if (index == 49) {
     return 1534;
    }
if (index == 50) {
     return 1521;
    }
if (index == 51) {
     return 1513;
    }
if (index == 52) {
     return 1513;
    }
if (index == 53) {
     return 1526;
    }
if (index == 54) {
     return 1504;
    }
if (index == 55) {
     return 1517;
    }
if (index == 56) {
     return 1504;
    }
if (index == 57) {
     return 1520;
    }
if (index == 58) {
     return 1497;
    }
if (index == 59) {
     return 1520;
    }
if (index == 60) {
     return 1530;
    }
if (index == 61) {
     return 1518;
    }
if (index == 62) {
     return 1518;
    }
if (index == 63) {
     return 1531;
    }
if (index == 64) {
     return 1513;
    }
if (index == 65) {
     return 1526;
    }
if (index == 66) {
     return 1529;
    }
if (index == 67) {
     return 1516;
    }
if (index == 68) {
     return 1509;
    }
if (index == 69) {
     return 1515;
    }
if (index == 70) {
     return 1504;
    }
if (index == 71) {
     return 1524;
    }
if (index == 72) {
     return 1497;
    }
if (index == 73) {
     return 1526;
    }
if (index == 74) {
     return 1507;
    }
if (index == 75) {
     return 1538;
    }
if (index == 76) {
     return 1509;
    }
if (index == 77) {
     return 1480;
    }
if (index == 78) {
     return 1504;
    }
if (index == 79) {
     return 1585;
    }
if (index > 79) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:278_' + imgStr + '/digitalImage';
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
br.numLeafs = 80;

// Book title and the URL used for the book title link
br.bookTitle= "A short account of the settlement, produce, and commerce, of Prince of Wales Island, in the Straits of Malacca";
br.bookAuthor= "Leith, George, Sir";
br.bookPub= "London: Printed for J. Booth, 1804";
br.bookKeyword= "Pinang";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:278';

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
