//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1162;
    }
if (index == 1) {
     return 1028;
    }
if (index == 2) {
     return 1016;
    }
if (index == 3) {
     return 1527;
    }
if (index == 4) {
     return 1077;
    }
if (index == 5) {
     return 1021;
    }
if (index == 6) {
     return 993;
    }
if (index == 7) {
     return 1019;
    }
if (index == 8) {
     return 983;
    }
if (index == 9) {
     return 992;
    }
if (index == 10) {
     return 1042;
    }
if (index == 11) {
     return 1037;
    }
if (index == 12) {
     return 1008;
    }
if (index == 13) {
     return 985;
    }
if (index == 14) {
     return 992;
    }
if (index == 15) {
     return 1036;
    }
if (index == 16) {
     return 1022;
    }
if (index == 17) {
     return 1014;
    }
if (index == 18) {
     return 1005;
    }
if (index == 19) {
     return 1027;
    }
if (index == 20) {
     return 985;
    }
if (index == 21) {
     return 1054;
    }
if (index == 22) {
     return 990;
    }
if (index == 23) {
     return 1036;
    }
if (index == 24) {
     return 990;
    }
if (index == 25) {
     return 995;
    }
if (index == 26) {
     return 988;
    }
if (index == 27) {
     return 1031;
    }
if (index == 28) {
     return 973;
    }
if (index == 29) {
     return 975;
    }
if (index == 30) {
     return 993;
    }
if (index == 31) {
     return 1016;
    }
if (index == 32) {
     return 1544;
    }
if (index == 33) {
     return 1009;
    }
if (index == 34) {
     return 1029;
    }
if (index == 35) {
     return 1021;
    }
if (index == 36) {
     return 1549;
    }
if (index == 37) {
     return 972;
    }
if (index == 38) {
     return 950;
    }
if (index == 39) {
     return 1002;
    }
if (index == 40) {
     return 1542;
    }
if (index == 41) {
     return 1044;
    }
if (index == 42) {
     return 1007;
    }
if (index == 43) {
     return 1530;
    }
if (index == 44) {
     return 1028;
    }
if (index == 45) {
     return 1001;
    }
if (index == 46) {
     return 1540;
    }
if (index == 47) {
     return 1039;
    }
if (index == 48) {
     return 986;
    }
if (index == 49) {
     return 1018;
    }
if (index == 50) {
     return 1532;
    }
if (index == 51) {
     return 1027;
    }
if (index == 52) {
     return 1000;
    }
if (index == 53) {
     return 1007;
    }
if (index == 54) {
     return 1550;
    }
if (index == 55) {
     return 1005;
    }
if (index == 56) {
     return 977;
    }
if (index == 57) {
     return 1005;
    }
if (index == 58) {
     return 1550;
    }
if (index == 59) {
     return 1005;
    }
if (index == 60) {
     return 977;
    }
if (index == 61) {
     return 1550;
    }
if (index == 62) {
     return 1017;
    }
if (index == 63) {
     return 952;
    }
if (index == 64) {
     return 1550;
    }
if (index == 65) {
     return 1005;
    }
if (index == 66) {
     return 994;
    }
if (index == 67) {
     return 997;
    }
if (index == 68) {
     return 1550;
    }
if (index == 69) {
     return 1005;
    }
if (index == 70) {
     return 979;
    }
if (index == 71) {
     return 947;
    }
if (index == 72) {
     return 974;
    }
if (index == 73) {
     return 979;
    }
if (index == 74) {
     return 1550;
    }
if (index == 75) {
     return 1005;
    }
if (index == 76) {
     return 972;
    }
if (index == 77) {
     return 985;
    }
if (index == 78) {
     return 994;
    }
if (index == 79) {
     return 997;
    }
if (index == 80) {
     return 1540;
    }
if (index == 81) {
     return 980;
    }
if (index == 82) {
     return 999;
    }
if (index == 83) {
     return 1018;
    }
if (index == 84) {
     return 1007;
    }
if (index == 85) {
     return 1037;
    }
if (index == 86) {
     return 1541;
    }
if (index == 87) {
     return 1005;
    }
if (index == 88) {
     return 995;
    }
if (index == 89) {
     return 1005;
    }
if (index == 90) {
     return 1021;
    }
if (index == 91) {
     return 1005;
    }
if (index == 92) {
     return 1541;
    }
if (index == 93) {
     return 1005;
    }
if (index == 94) {
     return 1056;
    }
if (index == 95) {
     return 1023;
    }
if (index == 96) {
     return 1012;
    }
if (index == 97) {
     return 995;
    }
if (index == 98) {
     return 1027;
    }
if (index == 99) {
     return 970;
    }
if (index == 100) {
     return 985;
    }
if (index == 101) {
     return 1005;
    }
if (index == 102) {
     return 997;
    }
if (index == 103) {
     return 1168;
    }
if (index > 103) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1648;
    }
if (index == 1) {
     return 1537;
    }
if (index == 2) {
     return 1554;
    }
if (index == 3) {
     return 1019;
    }
if (index == 4) {
     return 1532;
    }
if (index == 5) {
     return 1532;
    }
if (index == 6) {
     return 1532;
    }
if (index == 7) {
     return 1532;
    }
if (index == 8) {
     return 1529;
    }
if (index == 9) {
     return 1525;
    }
if (index == 10) {
     return 1532;
    }
if (index == 11) {
     return 1532;
    }
if (index == 12) {
     return 1532;
    }
if (index == 13) {
     return 1511;
    }
if (index == 14) {
     return 1523;
    }
if (index == 15) {
     return 1531;
    }
if (index == 16) {
     return 1546;
    }
if (index == 17) {
     return 1589;
    }
if (index == 18) {
     return 1558;
    }
if (index == 19) {
     return 1588;
    }
if (index == 20) {
     return 1542;
    }
if (index == 21) {
     return 1595;
    }
if (index == 22) {
     return 1549;
    }
if (index == 23) {
     return 1585;
    }
if (index == 24) {
     return 1544;
    }
if (index == 25) {
     return 1525;
    }
if (index == 26) {
     return 1549;
    }
if (index == 27) {
     return 1600;
    }
if (index == 28) {
     return 1549;
    }
if (index == 29) {
     return 1546;
    }
if (index == 30) {
     return 1579;
    }
if (index == 31) {
     return 1595;
    }
if (index == 32) {
     return 1005;
    }
if (index == 33) {
     return 1526;
    }
if (index == 34) {
     return 1574;
    }
if (index == 35) {
     return 1591;
    }
if (index == 36) {
     return 990;
    }
if (index == 37) {
     return 1529;
    }
if (index == 38) {
     return 1549;
    }
if (index == 39) {
     return 1534;
    }
if (index == 40) {
     return 1014;
    }
if (index == 41) {
     return 1532;
    }
if (index == 42) {
     return 1547;
    }
if (index == 43) {
     return 1007;
    }
if (index == 44) {
     return 1581;
    }
if (index == 45) {
     return 1531;
    }
if (index == 46) {
     return 1019;
    }
if (index == 47) {
     return 1505;
    }
if (index == 48) {
     return 1569;
    }
if (index == 49) {
     return 1535;
    }
if (index == 50) {
     return 1033;
    }
if (index == 51) {
     return 1500;
    }
if (index == 52) {
     return 1565;
    }
if (index == 53) {
     return 1557;
    }
if (index == 54) {
     return 1022;
    }
if (index == 55) {
     return 1550;
    }
if (index == 56) {
     return 1550;
    }
if (index == 57) {
     return 1550;
    }
if (index == 58) {
     return 1022;
    }
if (index == 59) {
     return 1550;
    }
if (index == 60) {
     return 1550;
    }
if (index == 61) {
     return 963;
    }
if (index == 62) {
     return 1567;
    }
if (index == 63) {
     return 1550;
    }
if (index == 64) {
     return 1022;
    }
if (index == 65) {
     return 1550;
    }
if (index == 66) {
     return 1550;
    }
if (index == 67) {
     return 1577;
    }
if (index == 68) {
     return 1022;
    }
if (index == 69) {
     return 1550;
    }
if (index == 70) {
     return 1550;
    }
if (index == 71) {
     return 1550;
    }
if (index == 72) {
     return 1550;
    }
if (index == 73) {
     return 1569;
    }
if (index == 74) {
     return 1022;
    }
if (index == 75) {
     return 1550;
    }
if (index == 76) {
     return 1545;
    }
if (index == 77) {
     return 1540;
    }
if (index == 78) {
     return 1542;
    }
if (index == 79) {
     return 1584;
    }
if (index == 80) {
     return 1019;
    }
if (index == 81) {
     return 1541;
    }
if (index == 82) {
     return 1561;
    }
if (index == 83) {
     return 1560;
    }
if (index == 84) {
     return 1555;
    }
if (index == 85) {
     return 1561;
    }
if (index == 86) {
     return 1022;
    }
if (index == 87) {
     return 1541;
    }
if (index == 88) {
     return 1536;
    }
if (index == 89) {
     return 1541;
    }
if (index == 90) {
     return 1547;
    }
if (index == 91) {
     return 1541;
    }
if (index == 92) {
     return 1022;
    }
if (index == 93) {
     return 1541;
    }
if (index == 94) {
     return 1551;
    }
if (index == 95) {
     return 1553;
    }
if (index == 96) {
     return 1542;
    }
if (index == 97) {
     return 1557;
    }
if (index == 98) {
     return 1546;
    }
if (index == 99) {
     return 1541;
    }
if (index == 100) {
     return 1528;
    }
if (index == 101) {
     return 1541;
    }
if (index == 102) {
     return 1526;
    }
if (index == 103) {
     return 1651;
    }
if (index > 103) {
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
    var url = '/fedora/get/seapage:139_' + imgStr + '/digitalImage';
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
br.numLeafs = 104;

// Book title and the URL used for the book title link
br.bookTitle= "Rough pencillings of a rough trip to Rangoon in 1846";
br.bookAuthor= "Grant, Colesworthey";
br.bookPub= "Calcutta: Thacker, Spink and Co, 1853";
br.bookKeyword= "Burma--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rangoon (Burma)--Description and travel";
br.bookUrl  = '/catalog/sea:139';

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
