//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1025;
    }
if (index == 1) {
     return 1087;
    }
if (index == 2) {
     return 1042;
    }
if (index == 3) {
     return 1073;
    }
if (index == 4) {
     return 1595;
    }
if (index == 5) {
     return 1087;
    }
if (index == 6) {
     return 1610;
    }
if (index == 7) {
     return 1026;
    }
if (index == 8) {
     return 1581;
    }
if (index == 9) {
     return 1028;
    }
if (index == 10) {
     return 1023;
    }
if (index == 11) {
     return 1023;
    }
if (index == 12) {
     return 1018;
    }
if (index == 13) {
     return 1096;
    }
if (index == 14) {
     return 1592;
    }
if (index == 15) {
     return 1026;
    }
if (index == 16) {
     return 1040;
    }
if (index == 17) {
     return 1031;
    }
if (index == 18) {
     return 1002;
    }
if (index == 19) {
     return 1090;
    }
if (index == 20) {
     return 1021;
    }
if (index == 21) {
     return 1079;
    }
if (index == 22) {
     return 1040;
    }
if (index == 23) {
     return 1099;
    }
if (index == 24) {
     return 1024;
    }
if (index == 25) {
     return 1117;
    }
if (index == 26) {
     return 1594;
    }
if (index == 27) {
     return 1072;
    }
if (index == 28) {
     return 1071;
    }
if (index == 29) {
     return 1103;
    }
if (index == 30) {
     return 1035;
    }
if (index == 31) {
     return 1090;
    }
if (index == 32) {
     return 1017;
    }
if (index == 33) {
     return 1079;
    }
if (index == 34) {
     return 1572;
    }
if (index == 35) {
     return 1089;
    }
if (index == 36) {
     return 1107;
    }
if (index == 37) {
     return 1117;
    }
if (index == 38) {
     return 1016;
    }
if (index == 39) {
     return 1082;
    }
if (index == 40) {
     return 1603;
    }
if (index == 41) {
     return 1143;
    }
if (index == 42) {
     return 1019;
    }
if (index == 43) {
     return 1100;
    }
if (index == 44) {
     return 1567;
    }
if (index == 45) {
     return 1096;
    }
if (index == 46) {
     return 1009;
    }
if (index == 47) {
     return 1066;
    }
if (index == 48) {
     return 1013;
    }
if (index == 49) {
     return 1071;
    }
if (index == 50) {
     return 1622;
    }
if (index == 51) {
     return 1066;
    }
if (index == 52) {
     return 1042;
    }
if (index == 53) {
     return 1073;
    }
if (index == 54) {
     return 1024;
    }
if (index == 55) {
     return 1061;
    }
if (index == 56) {
     return 1023;
    }
if (index == 57) {
     return 1115;
    }
if (index == 58) {
     return 1164;
    }
if (index == 59) {
     return 1127;
    }
if (index == 60) {
     return 1077;
    }
if (index == 61) {
     return 1061;
    }
if (index == 62) {
     return 1108;
    }
if (index == 63) {
     return 1063;
    }
if (index == 64) {
     return 1032;
    }
if (index == 65) {
     return 1098;
    }
if (index == 66) {
     return 1082;
    }
if (index == 67) {
     return 1079;
    }
if (index == 68) {
     return 1046;
    }
if (index == 69) {
     return 1145;
    }
if (index == 70) {
     return 1052;
    }
if (index == 71) {
     return 1075;
    }
if (index == 72) {
     return 1581;
    }
if (index == 73) {
     return 1077;
    }
if (index == 74) {
     return 1551;
    }
if (index == 75) {
     return 1045;
    }
if (index == 76) {
     return 1596;
    }
if (index == 77) {
     return 1082;
    }
if (index == 78) {
     return 1013;
    }
if (index == 79) {
     return 1087;
    }
if (index > 79) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1623;
    }
if (index == 1) {
     return 1640;
    }
if (index == 2) {
     return 1633;
    }
if (index == 3) {
     return 1643;
    }
if (index == 4) {
     return 1124;
    }
if (index == 5) {
     return 1643;
    }
if (index == 6) {
     return 1113;
    }
if (index == 7) {
     return 1612;
    }
if (index == 8) {
     return 1097;
    }
if (index == 9) {
     return 1640;
    }
if (index == 10) {
     return 1632;
    }
if (index == 11) {
     return 1645;
    }
if (index == 12) {
     return 1620;
    }
if (index == 13) {
     return 1665;
    }
if (index == 14) {
     return 1106;
    }
if (index == 15) {
     return 1640;
    }
if (index == 16) {
     return 1618;
    }
if (index == 17) {
     return 1640;
    }
if (index == 18) {
     return 1591;
    }
if (index == 19) {
     return 1640;
    }
if (index == 20) {
     return 1622;
    }
if (index == 21) {
     return 1643;
    }
if (index == 22) {
     return 1635;
    }
if (index == 23) {
     return 1609;
    }
if (index == 24) {
     return 1628;
    }
if (index == 25) {
     return 1653;
    }
if (index == 26) {
     return 1105;
    }
if (index == 27) {
     return 1635;
    }
if (index == 28) {
     return 1588;
    }
if (index == 29) {
     return 1646;
    }
if (index == 30) {
     return 1586;
    }
if (index == 31) {
     return 1632;
    }
if (index == 32) {
     return 1609;
    }
if (index == 33) {
     return 1643;
    }
if (index == 34) {
     return 1106;
    }
if (index == 35) {
     return 1650;
    }
if (index == 36) {
     return 1686;
    }
if (index == 37) {
     return 1651;
    }
if (index == 38) {
     return 1615;
    }
if (index == 39) {
     return 1640;
    }
if (index == 40) {
     return 1115;
    }
if (index == 41) {
     return 1657;
    }
if (index == 42) {
     return 1599;
    }
if (index == 43) {
     return 1640;
    }
if (index == 44) {
     return 1106;
    }
if (index == 45) {
     return 1620;
    }
if (index == 46) {
     return 1609;
    }
if (index == 47) {
     return 1643;
    }
if (index == 48) {
     return 1617;
    }
if (index == 49) {
     return 1645;
    }
if (index == 50) {
     return 1119;
    }
if (index == 51) {
     return 1638;
    }
if (index == 52) {
     return 1618;
    }
if (index == 53) {
     return 1609;
    }
if (index == 54) {
     return 1613;
    }
if (index == 55) {
     return 1633;
    }
if (index == 56) {
     return 1627;
    }
if (index == 57) {
     return 1657;
    }
if (index == 58) {
     return 1654;
    }
if (index == 59) {
     return 1655;
    }
if (index == 60) {
     return 1637;
    }
if (index == 61) {
     return 1640;
    }
if (index == 62) {
     return 1675;
    }
if (index == 63) {
     return 1612;
    }
if (index == 64) {
     return 1624;
    }
if (index == 65) {
     return 1626;
    }
if (index == 66) {
     return 1630;
    }
if (index == 67) {
     return 1643;
    }
if (index == 68) {
     return 1626;
    }
if (index == 69) {
     return 1660;
    }
if (index == 70) {
     return 1634;
    }
if (index == 71) {
     return 1610;
    }
if (index == 72) {
     return 1127;
    }
if (index == 73) {
     return 1627;
    }
if (index == 74) {
     return 1101;
    }
if (index == 75) {
     return 1643;
    }
if (index == 76) {
     return 1119;
    }
if (index == 77) {
     return 1632;
    }
if (index == 78) {
     return 1613;
    }
if (index == 79) {
     return 1638;
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
    var url = '/fedora/get/seapage:A13b_' + imgStr + '/digitalImage';
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
br.bookTitle= "Le Laos et les populations sauvages de l'Indo-Chine, 1877, XI-XXV";
br.bookAuthor= "Harmand, Jules";
br.bookPub= "Ithaca, NY: Cornell University Library, 1880";
br.bookKeyword= "ethnic minorities<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ethnology<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indochina<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Laos";
br.bookUrl  = '/catalog/sea:A13b';

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
