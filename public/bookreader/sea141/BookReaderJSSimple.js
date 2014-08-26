//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1286;
    }
if (index == 1) {
     return 1286;
    }
if (index == 2) {
     return 991;
    }
if (index == 3) {
     return 986;
    }
if (index == 4) {
     return 1008;
    }
if (index == 5) {
     return 956;
    }
if (index == 6) {
     return 1223;
    }
if (index == 7) {
     return 1024;
    }
if (index == 8) {
     return 1377;
    }
if (index == 9) {
     return 1305;
    }
if (index == 10) {
     return 1343;
    }
if (index == 11) {
     return 1286;
    }
if (index == 12) {
     return 1348;
    }
if (index == 13) {
     return 1008;
    }
if (index == 14) {
     return 1321;
    }
if (index == 15) {
     return 1386;
    }
if (index == 16) {
     return 947;
    }
if (index == 17) {
     return 1349;
    }
if (index == 18) {
     return 1306;
    }
if (index == 19) {
     return 1069;
    }
if (index == 20) {
     return 954;
    }
if (index == 21) {
     return 1317;
    }
if (index == 22) {
     return 540;
    }
if (index == 23) {
     return 1298;
    }
if (index == 24) {
     return 581;
    }
if (index == 25) {
     return 1318;
    }
if (index == 26) {
     return 1385;
    }
if (index == 27) {
     return 921;
    }
if (index == 28) {
     return 1262;
    }
if (index == 29) {
     return 1356;
    }
if (index == 30) {
     return 1363;
    }
if (index == 31) {
     return 1329;
    }
if (index == 32) {
     return 1300;
    }
if (index == 33) {
     return 1299;
    }
if (index == 34) {
     return 1334;
    }
if (index == 35) {
     return 1311;
    }
if (index == 36) {
     return 1305;
    }
if (index == 37) {
     return 1301;
    }
if (index == 38) {
     return 1304;
    }
if (index == 39) {
     return 1354;
    }
if (index == 40) {
     return 1028;
    }
if (index == 41) {
     return 1367;
    }
if (index == 42) {
     return 1364;
    }
if (index == 43) {
     return 1357;
    }
if (index == 44) {
     return 1357;
    }
if (index == 45) {
     return 1351;
    }
if (index == 46) {
     return 1374;
    }
if (index == 47) {
     return 1145;
    }
if (index == 48) {
     return 1341;
    }
if (index == 49) {
     return 1344;
    }
if (index == 50) {
     return 1338;
    }
if (index == 51) {
     return 1232;
    }
if (index == 52) {
     return 1341;
    }
if (index == 53) {
     return 745;
    }
if (index == 54) {
     return 1015;
    }
if (index == 55) {
     return 1618;
    }
if (index == 56) {
     return 636;
    }
if (index == 57) {
     return 1023;
    }
if (index == 58) {
     return 1351;
    }
if (index == 59) {
     return 1652;
    }
if (index == 60) {
     return 1596;
    }
if (index == 61) {
     return 1390;
    }
if (index == 62) {
     return 1044;
    }
if (index == 63) {
     return 1064;
    }
if (index == 64) {
     return 1014;
    }
if (index == 65) {
     return 1027;
    }
if (index == 66) {
     return 1026;
    }
if (index == 67) {
     return 1041;
    }
if (index == 68) {
     return 1034;
    }
if (index == 69) {
     return 1034;
    }
if (index == 70) {
     return 1034;
    }
if (index == 71) {
     return 1034;
    }
if (index == 72) {
     return 986;
    }
if (index == 73) {
     return 980;
    }
if (index == 74) {
     return 1030;
    }
if (index == 75) {
     return 1032;
    }
if (index == 76) {
     return 1031;
    }
if (index == 77) {
     return 937;
    }
if (index == 78) {
     return 1036;
    }
if (index == 79) {
     return 1334;
    }
if (index == 80) {
     return 1044;
    }
if (index == 81) {
     return 892;
    }
if (index == 82) {
     return 929;
    }
if (index == 83) {
     return 928;
    }
if (index == 84) {
     return 933;
    }
if (index == 85) {
     return 936;
    }
if (index == 86) {
     return 1046;
    }
if (index == 87) {
     return 1052;
    }
if (index == 88) {
     return 1046;
    }
if (index == 89) {
     return 931;
    }
if (index == 90) {
     return 951;
    }
if (index == 91) {
     return 880;
    }
if (index == 92) {
     return 1048;
    }
if (index == 93) {
     return 924;
    }
if (index == 94) {
     return 917;
    }
if (index == 95) {
     return 953;
    }
if (index == 96) {
     return 1336;
    }
if (index == 97) {
     return 1324;
    }
if (index == 98) {
     return 1051;
    }
if (index == 99) {
     return 1298;
    }
if (index == 100) {
     return 1286;
    }
if (index > 100) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1882;
    }
if (index == 1) {
     return 1882;
    }
if (index == 2) {
     return 1290;
    }
if (index == 3) {
     return 1269;
    }
if (index == 4) {
     return 1293;
    }
if (index == 5) {
     return 1238;
    }
if (index == 6) {
     return 776;
    }
if (index == 7) {
     return 829;
    }
if (index == 8) {
     return 1071;
    }
if (index == 9) {
     return 1011;
    }
if (index == 10) {
     return 1047;
    }
if (index == 11) {
     return 1044;
    }
if (index == 12) {
     return 1031;
    }
if (index == 13) {
     return 757;
    }
if (index == 14) {
     return 1011;
    }
if (index == 15) {
     return 1706;
    }
if (index == 16) {
     return 798;
    }
if (index == 17) {
     return 1001;
    }
if (index == 18) {
     return 992;
    }
if (index == 19) {
     return 876;
    }
if (index == 20) {
     return 843;
    }
if (index == 21) {
     return 972;
    }
if (index == 22) {
     return 701;
    }
if (index == 23) {
     return 928;
    }
if (index == 24) {
     return 372;
    }
if (index == 25) {
     return 1012;
    }
if (index == 26) {
     return 1084;
    }
if (index == 27) {
     return 1236;
    }
if (index == 28) {
     return 949;
    }
if (index == 29) {
     return 1058;
    }
if (index == 30) {
     return 1038;
    }
if (index == 31) {
     return 1015;
    }
if (index == 32) {
     return 998;
    }
if (index == 33) {
     return 995;
    }
if (index == 34) {
     return 1028;
    }
if (index == 35) {
     return 1015;
    }
if (index == 36) {
     return 1008;
    }
if (index == 37) {
     return 994;
    }
if (index == 38) {
     return 999;
    }
if (index == 39) {
     return 1054;
    }
if (index == 40) {
     return 868;
    }
if (index == 41) {
     return 1047;
    }
if (index == 42) {
     return 1047;
    }
if (index == 43) {
     return 1038;
    }
if (index == 44) {
     return 1051;
    }
if (index == 45) {
     return 1057;
    }
if (index == 46) {
     return 1044;
    }
if (index == 47) {
     return 972;
    }
if (index == 48) {
     return 1051;
    }
if (index == 49) {
     return 1051;
    }
if (index == 50) {
     return 1031;
    }
if (index == 51) {
     return 953;
    }
if (index == 52) {
     return 1034;
    }
if (index == 53) {
     return 461;
    }
if (index == 54) {
     return 822;
    }
if (index == 55) {
     return 1197;
    }
if (index == 56) {
     return 790;
    }
if (index == 57) {
     return 781;
    }
if (index == 58) {
     return 1041;
    }
if (index == 59) {
     return 1246;
    }
if (index == 60) {
     return 1201;
    }
if (index == 61) {
     return 1719;
    }
if (index == 62) {
     return 1324;
    }
if (index == 63) {
     return 1338;
    }
if (index == 64) {
     return 1329;
    }
if (index == 65) {
     return 1329;
    }
if (index == 66) {
     return 1333;
    }
if (index == 67) {
     return 1344;
    }
if (index == 68) {
     return 1347;
    }
if (index == 69) {
     return 1347;
    }
if (index == 70) {
     return 1347;
    }
if (index == 71) {
     return 1331;
    }
if (index == 72) {
     return 1343;
    }
if (index == 73) {
     return 1341;
    }
if (index == 74) {
     return 1351;
    }
if (index == 75) {
     return 1340;
    }
if (index == 76) {
     return 1241;
    }
if (index == 77) {
     return 1167;
    }
if (index == 78) {
     return 1330;
    }
if (index == 79) {
     return 1028;
    }
if (index == 80) {
     return 1333;
    }
if (index == 81) {
     return 1083;
    }
if (index == 82) {
     return 1229;
    }
if (index == 83) {
     return 1265;
    }
if (index == 84) {
     return 1342;
    }
if (index == 85) {
     return 1118;
    }
if (index == 86) {
     return 1334;
    }
if (index == 87) {
     return 1352;
    }
if (index == 88) {
     return 1341;
    }
if (index == 89) {
     return 1233;
    }
if (index == 90) {
     return 1155;
    }
if (index == 91) {
     return 1178;
    }
if (index == 92) {
     return 1348;
    }
if (index == 93) {
     return 1146;
    }
if (index == 94) {
     return 1085;
    }
if (index == 95) {
     return 1275;
    }
if (index == 96) {
     return 1702;
    }
if (index == 97) {
     return 1010;
    }
if (index == 98) {
     return 1355;
    }
if (index == 99) {
     return 1891;
    }
if (index == 100) {
     return 1882;
    }
if (index > 100) {
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
    var url = '/fedora/get/seapage:141_' + imgStr + '/digitalImage';
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
br.numLeafs = 101;

// Book title and the URL used for the book title link
br.bookTitle= "Photograph album of Siam, 1900";
br.bookAuthor= "no author";
br.bookPub= "Ithaca, NY: Division of Rare and Manuscript Collections, Cornell University, 1900";
br.bookKeyword= "Pictorial works<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kings and Rulers<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20th Century<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Social Life and Customs<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Religious Life and Customs";
br.bookUrl  = '/catalog/sea:141';

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
