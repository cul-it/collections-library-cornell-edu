//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 897;
    }
if (index == 1) {
     return 812;
    }
if (index == 2) {
     return 862;
    }
if (index == 3) {
     return 853;
    }
if (index == 4) {
     return 816;
    }
if (index == 5) {
     return 726;
    }
if (index == 6) {
     return 793;
    }
if (index == 7) {
     return 790;
    }
if (index == 8) {
     return 814;
    }
if (index == 9) {
     return 800;
    }
if (index == 10) {
     return 717;
    }
if (index == 11) {
     return 756;
    }
if (index == 12) {
     return 774;
    }
if (index == 13) {
     return 736;
    }
if (index == 14) {
     return 751;
    }
if (index == 15) {
     return 767;
    }
if (index == 16) {
     return 764;
    }
if (index == 17) {
     return 789;
    }
if (index == 18) {
     return 696;
    }
if (index == 19) {
     return 813;
    }
if (index == 20) {
     return 780;
    }
if (index == 21) {
     return 848;
    }
if (index == 22) {
     return 760;
    }
if (index == 23) {
     return 818;
    }
if (index == 24) {
     return 796;
    }
if (index == 25) {
     return 837;
    }
if (index == 26) {
     return 760;
    }
if (index == 27) {
     return 841;
    }
if (index == 28) {
     return 728;
    }
if (index == 29) {
     return 829;
    }
if (index == 30) {
     return 810;
    }
if (index == 31) {
     return 808;
    }
if (index == 32) {
     return 772;
    }
if (index == 33) {
     return 817;
    }
if (index == 34) {
     return 770;
    }
if (index == 35) {
     return 824;
    }
if (index == 36) {
     return 777;
    }
if (index == 37) {
     return 771;
    }
if (index == 38) {
     return 758;
    }
if (index == 39) {
     return 777;
    }
if (index == 40) {
     return 801;
    }
if (index == 41) {
     return 777;
    }
if (index == 42) {
     return 779;
    }
if (index == 43) {
     return 779;
    }
if (index == 44) {
     return 815;
    }
if (index == 45) {
     return 758;
    }
if (index == 46) {
     return 797;
    }
if (index == 47) {
     return 781;
    }
if (index == 48) {
     return 801;
    }
if (index == 49) {
     return 771;
    }
if (index == 50) {
     return 818;
    }
if (index == 51) {
     return 794;
    }
if (index == 52) {
     return 814;
    }
if (index == 53) {
     return 826;
    }
if (index == 54) {
     return 797;
    }
if (index == 55) {
     return 801;
    }
if (index == 56) {
     return 853;
    }
if (index == 57) {
     return 1639;
    }
if (index == 58) {
     return 763;
    }
if (index == 59) {
     return 854;
    }
if (index == 60) {
     return 804;
    }
if (index == 61) {
     return 861;
    }
if (index == 62) {
     return 815;
    }
if (index == 63) {
     return 847;
    }
if (index == 64) {
     return 809;
    }
if (index == 65) {
     return 795;
    }
if (index == 66) {
     return 826;
    }
if (index == 67) {
     return 785;
    }
if (index == 68) {
     return 785;
    }
if (index == 69) {
     return 770;
    }
if (index == 70) {
     return 792;
    }
if (index == 71) {
     return 781;
    }
if (index == 72) {
     return 802;
    }
if (index == 73) {
     return 787;
    }
if (index == 74) {
     return 810;
    }
if (index == 75) {
     return 744;
    }
if (index == 76) {
     return 809;
    }
if (index == 77) {
     return 853;
    }
if (index == 78) {
     return 831;
    }
if (index == 79) {
     return 768;
    }
if (index == 80) {
     return 804;
    }
if (index == 81) {
     return 805;
    }
if (index == 82) {
     return 851;
    }
if (index == 83) {
     return 798;
    }
if (index == 84) {
     return 788;
    }
if (index == 85) {
     return 804;
    }
if (index == 86) {
     return 755;
    }
if (index == 87) {
     return 846;
    }
if (index == 88) {
     return 752;
    }
if (index == 89) {
     return 807;
    }
if (index == 90) {
     return 762;
    }
if (index == 91) {
     return 808;
    }
if (index == 92) {
     return 783;
    }
if (index == 93) {
     return 806;
    }
if (index == 94) {
     return 853;
    }
if (index == 95) {
     return 827;
    }
if (index == 96) {
     return 824;
    }
if (index == 97) {
     return 774;
    }
if (index == 98) {
     return 774;
    }
if (index == 99) {
     return 789;
    }
if (index == 100) {
     return 787;
    }
if (index == 101) {
     return 812;
    }
if (index == 102) {
     return 787;
    }
if (index == 103) {
     return 818;
    }
if (index == 104) {
     return 785;
    }
if (index == 105) {
     return 820;
    }
if (index == 106) {
     return 755;
    }
if (index == 107) {
     return 826;
    }
if (index == 108) {
     return 764;
    }
if (index == 109) {
     return 816;
    }
if (index == 110) {
     return 754;
    }
if (index == 111) {
     return 833;
    }
if (index == 112) {
     return 807;
    }
if (index == 113) {
     return 798;
    }
if (index == 114) {
     return 739;
    }
if (index == 115) {
     return 826;
    }
if (index == 116) {
     return 794;
    }
if (index == 117) {
     return 791;
    }
if (index == 118) {
     return 753;
    }
if (index == 119) {
     return 827;
    }
if (index == 120) {
     return 851;
    }
if (index == 121) {
     return 762;
    }
if (index == 122) {
     return 815;
    }
if (index == 123) {
     return 825;
    }
if (index == 124) {
     return 793;
    }
if (index == 125) {
     return 868;
    }
if (index == 126) {
     return 820;
    }
if (index == 127) {
     return 757;
    }
if (index == 128) {
     return 771;
    }
if (index == 129) {
     return 733;
    }
if (index == 130) {
     return 799;
    }
if (index == 131) {
     return 766;
    }
if (index == 132) {
     return 841;
    }
if (index == 133) {
     return 762;
    }
if (index == 134) {
     return 828;
    }
if (index == 135) {
     return 645;
    }
if (index == 136) {
     return 924;
    }
if (index > 136) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1391;
    }
if (index == 1) {
     return 1345;
    }
if (index == 2) {
     return 1347;
    }
if (index == 3) {
     return 1347;
    }
if (index == 4) {
     return 1364;
    }
if (index == 5) {
     return 1345;
    }
if (index == 6) {
     return 1356;
    }
if (index == 7) {
     return 1330;
    }
if (index == 8) {
     return 1371;
    }
if (index == 9) {
     return 1321;
    }
if (index == 10) {
     return 1322;
    }
if (index == 11) {
     return 1338;
    }
if (index == 12) {
     return 1332;
    }
if (index == 13) {
     return 1328;
    }
if (index == 14) {
     return 1341;
    }
if (index == 15) {
     return 1316;
    }
if (index == 16) {
     return 1330;
    }
if (index == 17) {
     return 1317;
    }
if (index == 18) {
     return 1325;
    }
if (index == 19) {
     return 1329;
    }
if (index == 20) {
     return 1295;
    }
if (index == 21) {
     return 1328;
    }
if (index == 22) {
     return 1293;
    }
if (index == 23) {
     return 1318;
    }
if (index == 24) {
     return 1307;
    }
if (index == 25) {
     return 1333;
    }
if (index == 26) {
     return 1291;
    }
if (index == 27) {
     return 1327;
    }
if (index == 28) {
     return 1293;
    }
if (index == 29) {
     return 1320;
    }
if (index == 30) {
     return 1313;
    }
if (index == 31) {
     return 1333;
    }
if (index == 32) {
     return 1295;
    }
if (index == 33) {
     return 1320;
    }
if (index == 34) {
     return 1298;
    }
if (index == 35) {
     return 1314;
    }
if (index == 36) {
     return 1303;
    }
if (index == 37) {
     return 1311;
    }
if (index == 38) {
     return 1293;
    }
if (index == 39) {
     return 1302;
    }
if (index == 40) {
     return 1305;
    }
if (index == 41) {
     return 1302;
    }
if (index == 42) {
     return 1293;
    }
if (index == 43) {
     return 1314;
    }
if (index == 44) {
     return 1305;
    }
if (index == 45) {
     return 1302;
    }
if (index == 46) {
     return 1305;
    }
if (index == 47) {
     return 1304;
    }
if (index == 48) {
     return 1293;
    }
if (index == 49) {
     return 1302;
    }
if (index == 50) {
     return 1303;
    }
if (index == 51) {
     return 1313;
    }
if (index == 52) {
     return 1315;
    }
if (index == 53) {
     return 1314;
    }
if (index == 54) {
     return 1295;
    }
if (index == 55) {
     return 1323;
    }
if (index == 56) {
     return 1295;
    }
if (index == 57) {
     return 1316;
    }
if (index == 58) {
     return 1259;
    }
if (index == 59) {
     return 1361;
    }
if (index == 60) {
     return 1345;
    }
if (index == 61) {
     return 1345;
    }
if (index == 62) {
     return 1360;
    }
if (index == 63) {
     return 1350;
    }
if (index == 64) {
     return 1328;
    }
if (index == 65) {
     return 1333;
    }
if (index == 66) {
     return 1340;
    }
if (index == 67) {
     return 1328;
    }
if (index == 68) {
     return 1330;
    }
if (index == 69) {
     return 1330;
    }
if (index == 70) {
     return 1330;
    }
if (index == 71) {
     return 1330;
    }
if (index == 72) {
     return 1326;
    }
if (index == 73) {
     return 1330;
    }
if (index == 74) {
     return 1343;
    }
if (index == 75) {
     return 1322;
    }
if (index == 76) {
     return 1338;
    }
if (index == 77) {
     return 1298;
    }
if (index == 78) {
     return 1291;
    }
if (index == 79) {
     return 1328;
    }
if (index == 80) {
     return 1336;
    }
if (index == 81) {
     return 1336;
    }
if (index == 82) {
     return 1348;
    }
if (index == 83) {
     return 1330;
    }
if (index == 84) {
     return 1342;
    }
if (index == 85) {
     return 1328;
    }
if (index == 86) {
     return 1338;
    }
if (index == 87) {
     return 1350;
    }
if (index == 88) {
     return 1334;
    }
if (index == 89) {
     return 1331;
    }
if (index == 90) {
     return 1336;
    }
if (index == 91) {
     return 1326;
    }
if (index == 92) {
     return 1328;
    }
if (index == 93) {
     return 1339;
    }
if (index == 94) {
     return 1330;
    }
if (index == 95) {
     return 1342;
    }
if (index == 96) {
     return 1350;
    }
if (index == 97) {
     return 1326;
    }
if (index == 98) {
     return 1326;
    }
if (index == 99) {
     return 1330;
    }
if (index == 100) {
     return 1330;
    }
if (index == 101) {
     return 1336;
    }
if (index == 102) {
     return 1328;
    }
if (index == 103) {
     return 1335;
    }
if (index == 104) {
     return 1328;
    }
if (index == 105) {
     return 1336;
    }
if (index == 106) {
     return 1328;
    }
if (index == 107) {
     return 1342;
    }
if (index == 108) {
     return 1330;
    }
if (index == 109) {
     return 1339;
    }
if (index == 110) {
     return 1348;
    }
if (index == 111) {
     return 1342;
    }
if (index == 112) {
     return 1349;
    }
if (index == 113) {
     return 1330;
    }
if (index == 114) {
     return 1332;
    }
if (index == 115) {
     return 1340;
    }
if (index == 116) {
     return 1347;
    }
if (index == 117) {
     return 1326;
    }
if (index == 118) {
     return 1333;
    }
if (index == 119) {
     return 1341;
    }
if (index == 120) {
     return 1327;
    }
if (index == 121) {
     return 1321;
    }
if (index == 122) {
     return 1314;
    }
if (index == 123) {
     return 1344;
    }
if (index == 124) {
     return 1339;
    }
if (index == 125) {
     return 1331;
    }
if (index == 126) {
     return 1324;
    }
if (index == 127) {
     return 1324;
    }
if (index == 128) {
     return 1310;
    }
if (index == 129) {
     return 1321;
    }
if (index == 130) {
     return 1254;
    }
if (index == 131) {
     return 1320;
    }
if (index == 132) {
     return 1308;
    }
if (index == 133) {
     return 1321;
    }
if (index == 134) {
     return 1312;
    }
if (index == 135) {
     return 1124;
    }
if (index == 136) {
     return 1400;
    }
if (index > 136) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:259_' + imgStr + '/digitalImage';
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
br.numLeafs = 137;

// Book title and the URL used for the book title link
br.bookTitle= "The manners and customs of the Chinese of the Straits Settlements";
br.bookAuthor= "Vaughan, Jonas Daniel, 1825-1891";
br.bookPub= "Singapore: printed at the Mission Press, 1879";
br.bookKeyword= "Chinese--Straits Settlements--Social life and customs";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:259';

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
