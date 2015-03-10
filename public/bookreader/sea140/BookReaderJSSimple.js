//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1631;
    }
if (index == 1) {
     return 1468;
    }
if (index == 2) {
     return 1491;
    }
if (index == 3) {
     return 1418;
    }
if (index == 4) {
     return 1414;
    }
if (index == 5) {
     return 1465;
    }
if (index == 6) {
     return 1569;
    }
if (index == 7) {
     return 1445;
    }
if (index == 8) {
     return 1599;
    }
if (index == 9) {
     return 1425;
    }
if (index == 10) {
     return 1425;
    }
if (index == 11) {
     return 1353;
    }
if (index == 12) {
     return 1444;
    }
if (index == 13) {
     return 1024;
    }
if (index == 14) {
     return 1388;
    }
if (index == 15) {
     return 1387;
    }
if (index == 16) {
     return 1441;
    }
if (index == 17) {
     return 1701;
    }
if (index == 18) {
     return 1367;
    }
if (index == 19) {
     return 1386;
    }
if (index == 20) {
     return 1392;
    }
if (index == 21) {
     return 1030;
    }
if (index == 22) {
     return 1370;
    }
if (index == 23) {
     return 1360;
    }
if (index == 24) {
     return 1303;
    }
if (index == 25) {
     return 1035;
    }
if (index == 26) {
     return 1405;
    }
if (index == 27) {
     return 1406;
    }
if (index == 28) {
     return 1352;
    }
if (index == 29) {
     return 1027;
    }
if (index == 30) {
     return 1377;
    }
if (index == 31) {
     return 1400;
    }
if (index == 32) {
     return 1335;
    }
if (index == 33) {
     return 1036;
    }
if (index == 34) {
     return 1390;
    }
if (index == 35) {
     return 1390;
    }
if (index == 36) {
     return 1342;
    }
if (index == 37) {
     return 1024;
    }
if (index == 38) {
     return 1535;
    }
if (index == 39) {
     return 1524;
    }
if (index == 40) {
     return 1441;
    }
if (index == 41) {
     return 1808;
    }
if (index == 42) {
     return 1487;
    }
if (index == 43) {
     return 1450;
    }
if (index == 44) {
     return 1488;
    }
if (index == 45) {
     return 1415;
    }
if (index == 46) {
     return 1355;
    }
if (index == 47) {
     return 1031;
    }
if (index == 48) {
     return 1501;
    }
if (index == 49) {
     return 1505;
    }
if (index == 50) {
     return 1345;
    }
if (index == 51) {
     return 1033;
    }
if (index == 52) {
     return 1522;
    }
if (index == 53) {
     return 1504;
    }
if (index == 54) {
     return 1518;
    }
if (index == 55) {
     return 1509;
    }
if (index == 56) {
     return 1438;
    }
if (index == 57) {
     return 1033;
    }
if (index == 58) {
     return 1543;
    }
if (index == 59) {
     return 1538;
    }
if (index == 60) {
     return 1401;
    }
if (index == 61) {
     return 1033;
    }
if (index == 62) {
     return 1510;
    }
if (index == 63) {
     return 1538;
    }
if (index == 64) {
     return 1401;
    }
if (index == 65) {
     return 1033;
    }
if (index == 66) {
     return 1415;
    }
if (index == 67) {
     return 1387;
    }
if (index == 68) {
     return 1378;
    }
if (index == 69) {
     return 1010;
    }
if (index == 70) {
     return 1366;
    }
if (index == 71) {
     return 1395;
    }
if (index == 72) {
     return 1328;
    }
if (index == 73) {
     return 1031;
    }
if (index == 74) {
     return 1376;
    }
if (index == 75) {
     return 1372;
    }
if (index == 76) {
     return 1341;
    }
if (index == 77) {
     return 1766;
    }
if (index == 78) {
     return 1411;
    }
if (index == 79) {
     return 1398;
    }
if (index == 80) {
     return 1338;
    }
if (index == 81) {
     return 1033;
    }
if (index == 82) {
     return 1385;
    }
if (index == 83) {
     return 1385;
    }
if (index == 84) {
     return 1345;
    }
if (index == 85) {
     return 1007;
    }
if (index == 86) {
     return 1392;
    }
if (index == 87) {
     return 1380;
    }
if (index == 88) {
     return 1308;
    }
if (index == 89) {
     return 1031;
    }
if (index == 90) {
     return 1396;
    }
if (index == 91) {
     return 1408;
    }
if (index == 92) {
     return 1325;
    }
if (index == 93) {
     return 1026;
    }
if (index == 94) {
     return 1388;
    }
if (index == 95) {
     return 1378;
    }
if (index == 96) {
     return 1298;
    }
if (index == 97) {
     return 1995;
    }
if (index == 98) {
     return 1366;
    }
if (index == 99) {
     return 1429;
    }
if (index == 100) {
     return 1348;
    }
if (index == 101) {
     return 1015;
    }
if (index == 102) {
     return 1419;
    }
if (index == 103) {
     return 1414;
    }
if (index == 104) {
     return 1374;
    }
if (index == 105) {
     return 1008;
    }
if (index == 106) {
     return 1420;
    }
if (index == 107) {
     return 1396;
    }
if (index == 108) {
     return 1358;
    }
if (index == 109) {
     return 1008;
    }
if (index == 110) {
     return 1388;
    }
if (index == 111) {
     return 1385;
    }
if (index == 112) {
     return 1328;
    }
if (index == 113) {
     return 1644;
    }
if (index > 113) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1072;
    }
if (index == 1) {
     return 1029;
    }
if (index == 2) {
     return 1032;
    }
if (index == 3) {
     return 1023;
    }
if (index == 4) {
     return 1029;
    }
if (index == 5) {
     return 1036;
    }
if (index == 6) {
     return 1047;
    }
if (index == 7) {
     return 1026;
    }
if (index == 8) {
     return 1050;
    }
if (index == 9) {
     return 1033;
    }
if (index == 10) {
     return 1043;
    }
if (index == 11) {
     return 1049;
    }
if (index == 12) {
     return 1049;
    }
if (index == 13) {
     return 1474;
    }
if (index == 14) {
     return 1037;
    }
if (index == 15) {
     return 1040;
    }
if (index == 16) {
     return 1037;
    }
if (index == 17) {
     return 1457;
    }
if (index == 18) {
     return 1041;
    }
if (index == 19) {
     return 1042;
    }
if (index == 20) {
     return 1017;
    }
if (index == 21) {
     return 1464;
    }
if (index == 22) {
     return 1035;
    }
if (index == 23) {
     return 1041;
    }
if (index == 24) {
     return 1017;
    }
if (index == 25) {
     return 1461;
    }
if (index == 26) {
     return 1042;
    }
if (index == 27) {
     return 1045;
    }
if (index == 28) {
     return 1008;
    }
if (index == 29) {
     return 1450;
    }
if (index == 30) {
     return 1039;
    }
if (index == 31) {
     return 1038;
    }
if (index == 32) {
     return 1025;
    }
if (index == 33) {
     return 1468;
    }
if (index == 34) {
     return 1040;
    }
if (index == 35) {
     return 1037;
    }
if (index == 36) {
     return 1019;
    }
if (index == 37) {
     return 1462;
    }
if (index == 38) {
     return 1028;
    }
if (index == 39) {
     return 1028;
    }
if (index == 40) {
     return 1022;
    }
if (index == 41) {
     return 1467;
    }
if (index == 42) {
     return 1024;
    }
if (index == 43) {
     return 1029;
    }
if (index == 44) {
     return 1032;
    }
if (index == 45) {
     return 1020;
    }
if (index == 46) {
     return 1014;
    }
if (index == 47) {
     return 1505;
    }
if (index == 48) {
     return 1031;
    }
if (index == 49) {
     return 1031;
    }
if (index == 50) {
     return 1024;
    }
if (index == 51) {
     return 1461;
    }
if (index == 52) {
     return 1029;
    }
if (index == 53) {
     return 1039;
    }
if (index == 54) {
     return 1037;
    }
if (index == 55) {
     return 1045;
    }
if (index == 56) {
     return 1019;
    }
if (index == 57) {
     return 1455;
    }
if (index == 58) {
     return 1036;
    }
if (index == 59) {
     return 1047;
    }
if (index == 60) {
     return 1022;
    }
if (index == 61) {
     return 1475;
    }
if (index == 62) {
     return 1028;
    }
if (index == 63) {
     return 1044;
    }
if (index == 64) {
     return 1017;
    }
if (index == 65) {
     return 1475;
    }
if (index == 66) {
     return 1034;
    }
if (index == 67) {
     return 1038;
    }
if (index == 68) {
     return 1015;
    }
if (index == 69) {
     return 1503;
    }
if (index == 70) {
     return 1029;
    }
if (index == 71) {
     return 1031;
    }
if (index == 72) {
     return 1987;
    }
if (index == 73) {
     return 1438;
    }
if (index == 74) {
     return 1023;
    }
if (index == 75) {
     return 1031;
    }
if (index == 76) {
     return 1994;
    }
if (index == 77) {
     return 1428;
    }
if (index == 78) {
     return 1031;
    }
if (index == 79) {
     return 1051;
    }
if (index == 80) {
     return 1009;
    }
if (index == 81) {
     return 1468;
    }
if (index == 82) {
     return 1024;
    }
if (index == 83) {
     return 1042;
    }
if (index == 84) {
     return 1009;
    }
if (index == 85) {
     return 1476;
    }
if (index == 86) {
     return 1029;
    }
if (index == 87) {
     return 1032;
    }
if (index == 88) {
     return 1012;
    }
if (index == 89) {
     return 1465;
    }
if (index == 90) {
     return 1027;
    }
if (index == 91) {
     return 1026;
    }
if (index == 92) {
     return 1009;
    }
if (index == 93) {
     return 1475;
    }
if (index == 94) {
     return 1024;
    }
if (index == 95) {
     return 1026;
    }
if (index == 96) {
     return 1990;
    }
if (index == 97) {
     return 1460;
    }
if (index == 98) {
     return 1026;
    }
if (index == 99) {
     return 1031;
    }
if (index == 100) {
     return 1015;
    }
if (index == 101) {
     return 1455;
    }
if (index == 102) {
     return 1036;
    }
if (index == 103) {
     return 1039;
    }
if (index == 104) {
     return 1997;
    }
if (index == 105) {
     return 1486;
    }
if (index == 106) {
     return 1031;
    }
if (index == 107) {
     return 1045;
    }
if (index == 108) {
     return 1017;
    }
if (index == 109) {
     return 1455;
    }
if (index == 110) {
     return 1041;
    }
if (index == 111) {
     return 1031;
    }
if (index == 112) {
     return 1025;
    }
if (index == 113) {
     return 1076;
    }
if (index > 113) {
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
    var url = '/fedora/get/seapage:140_' + imgStr + '/digitalImage';
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
br.numLeafs = 114;

// Book title and the URL used for the book title link
br.bookTitle= "Views in the Eastern Archipelago : Borneo, Sarawak, Labuan, and c.";
br.bookAuthor= "Saint John, James Augustus";
br.bookPub= "London: no recorded publisher, 1847";
br.bookKeyword= "Borneo--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sarawak--Description and travel";
br.bookUrl  = '/catalog/sea:140';

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
