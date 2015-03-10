//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 924;
    }
if (index == 1) {
     return 814;
    }
if (index == 2) {
     return 821;
    }
if (index == 3) {
     return 801;
    }
if (index == 4) {
     return 783;
    }
if (index == 5) {
     return 819;
    }
if (index == 6) {
     return 814;
    }
if (index == 7) {
     return 834;
    }
if (index == 8) {
     return 805;
    }
if (index == 9) {
     return 838;
    }
if (index == 10) {
     return 828;
    }
if (index == 11) {
     return 798;
    }
if (index == 12) {
     return 780;
    }
if (index == 13) {
     return 784;
    }
if (index == 14) {
     return 780;
    }
if (index == 15) {
     return 800;
    }
if (index == 16) {
     return 788;
    }
if (index == 17) {
     return 802;
    }
if (index == 18) {
     return 777;
    }
if (index == 19) {
     return 799;
    }
if (index == 20) {
     return 778;
    }
if (index == 21) {
     return 829;
    }
if (index == 22) {
     return 771;
    }
if (index == 23) {
     return 791;
    }
if (index == 24) {
     return 807;
    }
if (index == 25) {
     return 813;
    }
if (index == 26) {
     return 820;
    }
if (index == 27) {
     return 810;
    }
if (index == 28) {
     return 791;
    }
if (index == 29) {
     return 786;
    }
if (index == 30) {
     return 772;
    }
if (index == 31) {
     return 845;
    }
if (index == 32) {
     return 747;
    }
if (index == 33) {
     return 809;
    }
if (index == 34) {
     return 794;
    }
if (index == 35) {
     return 819;
    }
if (index == 36) {
     return 768;
    }
if (index == 37) {
     return 798;
    }
if (index == 38) {
     return 783;
    }
if (index == 39) {
     return 806;
    }
if (index == 40) {
     return 765;
    }
if (index == 41) {
     return 807;
    }
if (index == 42) {
     return 761;
    }
if (index == 43) {
     return 811;
    }
if (index == 44) {
     return 765;
    }
if (index == 45) {
     return 850;
    }
if (index == 46) {
     return 781;
    }
if (index == 47) {
     return 808;
    }
if (index == 48) {
     return 798;
    }
if (index == 49) {
     return 805;
    }
if (index == 50) {
     return 793;
    }
if (index == 51) {
     return 772;
    }
if (index == 52) {
     return 752;
    }
if (index == 53) {
     return 761;
    }
if (index == 54) {
     return 753;
    }
if (index == 55) {
     return 777;
    }
if (index == 56) {
     return 748;
    }
if (index == 57) {
     return 777;
    }
if (index == 58) {
     return 762;
    }
if (index == 59) {
     return 796;
    }
if (index == 60) {
     return 775;
    }
if (index == 61) {
     return 770;
    }
if (index == 62) {
     return 785;
    }
if (index == 63) {
     return 771;
    }
if (index == 64) {
     return 766;
    }
if (index == 65) {
     return 776;
    }
if (index == 66) {
     return 788;
    }
if (index == 67) {
     return 770;
    }
if (index == 68) {
     return 764;
    }
if (index == 69) {
     return 774;
    }
if (index == 70) {
     return 757;
    }
if (index == 71) {
     return 798;
    }
if (index == 72) {
     return 795;
    }
if (index == 73) {
     return 766;
    }
if (index == 74) {
     return 769;
    }
if (index == 75) {
     return 782;
    }
if (index == 76) {
     return 774;
    }
if (index == 77) {
     return 763;
    }
if (index == 78) {
     return 807;
    }
if (index == 79) {
     return 802;
    }
if (index == 80) {
     return 757;
    }
if (index == 81) {
     return 777;
    }
if (index == 82) {
     return 762;
    }
if (index == 83) {
     return 766;
    }
if (index == 84) {
     return 768;
    }
if (index == 85) {
     return 772;
    }
if (index == 86) {
     return 748;
    }
if (index == 87) {
     return 762;
    }
if (index == 88) {
     return 751;
    }
if (index == 89) {
     return 758;
    }
if (index == 90) {
     return 736;
    }
if (index == 91) {
     return 761;
    }
if (index == 92) {
     return 764;
    }
if (index == 93) {
     return 781;
    }
if (index == 94) {
     return 781;
    }
if (index == 95) {
     return 787;
    }
if (index == 96) {
     return 794;
    }
if (index == 97) {
     return 819;
    }
if (index == 98) {
     return 768;
    }
if (index == 99) {
     return 782;
    }
if (index == 100) {
     return 809;
    }
if (index == 101) {
     return 798;
    }
if (index == 102) {
     return 762;
    }
if (index == 103) {
     return 795;
    }
if (index == 104) {
     return 748;
    }
if (index == 105) {
     return 799;
    }
if (index == 106) {
     return 786;
    }
if (index == 107) {
     return 792;
    }
if (index == 108) {
     return 782;
    }
if (index == 109) {
     return 782;
    }
if (index == 110) {
     return 773;
    }
if (index == 111) {
     return 821;
    }
if (index == 112) {
     return 792;
    }
if (index == 113) {
     return 782;
    }
if (index > 113) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1406;
    }
if (index == 1) {
     return 1312;
    }
if (index == 2) {
     return 1319;
    }
if (index == 3) {
     return 1323;
    }
if (index == 4) {
     return 1309;
    }
if (index == 5) {
     return 1330;
    }
if (index == 6) {
     return 1346;
    }
if (index == 7) {
     return 1339;
    }
if (index == 8) {
     return 1335;
    }
if (index == 9) {
     return 1379;
    }
if (index == 10) {
     return 1327;
    }
if (index == 11) {
     return 1336;
    }
if (index == 12) {
     return 1338;
    }
if (index == 13) {
     return 1353;
    }
if (index == 14) {
     return 1334;
    }
if (index == 15) {
     return 1341;
    }
if (index == 16) {
     return 1331;
    }
if (index == 17) {
     return 1354;
    }
if (index == 18) {
     return 1353;
    }
if (index == 19) {
     return 1351;
    }
if (index == 20) {
     return 1319;
    }
if (index == 21) {
     return 1350;
    }
if (index == 22) {
     return 1307;
    }
if (index == 23) {
     return 1341;
    }
if (index == 24) {
     return 1338;
    }
if (index == 25) {
     return 1346;
    }
if (index == 26) {
     return 1302;
    }
if (index == 27) {
     return 1370;
    }
if (index == 28) {
     return 1303;
    }
if (index == 29) {
     return 1374;
    }
if (index == 30) {
     return 1297;
    }
if (index == 31) {
     return 1344;
    }
if (index == 32) {
     return 1308;
    }
if (index == 33) {
     return 1342;
    }
if (index == 34) {
     return 1322;
    }
if (index == 35) {
     return 1339;
    }
if (index == 36) {
     return 1304;
    }
if (index == 37) {
     return 1339;
    }
if (index == 38) {
     return 1312;
    }
if (index == 39) {
     return 1343;
    }
if (index == 40) {
     return 1298;
    }
if (index == 41) {
     return 1343;
    }
if (index == 42) {
     return 1315;
    }
if (index == 43) {
     return 1347;
    }
if (index == 44) {
     return 1303;
    }
if (index == 45) {
     return 1356;
    }
if (index == 46) {
     return 1306;
    }
if (index == 47) {
     return 1362;
    }
if (index == 48) {
     return 1319;
    }
if (index == 49) {
     return 1355;
    }
if (index == 50) {
     return 1321;
    }
if (index == 51) {
     return 1358;
    }
if (index == 52) {
     return 1277;
    }
if (index == 53) {
     return 1369;
    }
if (index == 54) {
     return 1278;
    }
if (index == 55) {
     return 1358;
    }
if (index == 56) {
     return 1287;
    }
if (index == 57) {
     return 1361;
    }
if (index == 58) {
     return 1292;
    }
if (index == 59) {
     return 1344;
    }
if (index == 60) {
     return 1306;
    }
if (index == 61) {
     return 1312;
    }
if (index == 62) {
     return 1314;
    }
if (index == 63) {
     return 1334;
    }
if (index == 64) {
     return 1316;
    }
if (index == 65) {
     return 1340;
    }
if (index == 66) {
     return 1323;
    }
if (index == 67) {
     return 1329;
    }
if (index == 68) {
     return 1313;
    }
if (index == 69) {
     return 1334;
    }
if (index == 70) {
     return 1304;
    }
if (index == 71) {
     return 1336;
    }
if (index == 72) {
     return 1318;
    }
if (index == 73) {
     return 1323;
    }
if (index == 74) {
     return 1312;
    }
if (index == 75) {
     return 1329;
    }
if (index == 76) {
     return 1310;
    }
if (index == 77) {
     return 1325;
    }
if (index == 78) {
     return 1321;
    }
if (index == 79) {
     return 1339;
    }
if (index == 80) {
     return 1310;
    }
if (index == 81) {
     return 1333;
    }
if (index == 82) {
     return 1306;
    }
if (index == 83) {
     return 1333;
    }
if (index == 84) {
     return 1306;
    }
if (index == 85) {
     return 1327;
    }
if (index == 86) {
     return 1300;
    }
if (index == 87) {
     return 1336;
    }
if (index == 88) {
     return 1313;
    }
if (index == 89) {
     return 1332;
    }
if (index == 90) {
     return 1296;
    }
if (index == 91) {
     return 1333;
    }
if (index == 92) {
     return 1305;
    }
if (index == 93) {
     return 1338;
    }
if (index == 94) {
     return 1314;
    }
if (index == 95) {
     return 1341;
    }
if (index == 96) {
     return 1322;
    }
if (index == 97) {
     return 1351;
    }
if (index == 98) {
     return 1319;
    }
if (index == 99) {
     return 1329;
    }
if (index == 100) {
     return 1312;
    }
if (index == 101) {
     return 1342;
    }
if (index == 102) {
     return 1321;
    }
if (index == 103) {
     return 1337;
    }
if (index == 104) {
     return 1319;
    }
if (index == 105) {
     return 1341;
    }
if (index == 106) {
     return 1323;
    }
if (index == 107) {
     return 1337;
    }
if (index == 108) {
     return 1332;
    }
if (index == 109) {
     return 1329;
    }
if (index == 110) {
     return 1315;
    }
if (index == 111) {
     return 1352;
    }
if (index == 112) {
     return 1310;
    }
if (index == 113) {
     return 1329;
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
    var url = '/fedora/get/seapage:349_' + imgStr + '/digitalImage';
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
br.bookTitle= "Journal of a voyage up the Irrawaddy to Mandalay and Bhamo";
br.bookAuthor= "Wheeler, James Talboys";
br.bookPub= "Rangoon : London: Printed by J.W. Baynes ; Trubner, 1871";
br.bookKeyword= "Burma--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Irrawaddy River (Burma)--Description and travel";
br.bookUrl  = '/catalog/sea:349';

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
