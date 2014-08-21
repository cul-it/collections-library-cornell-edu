//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 753;
    }
if (index == 1) {
     return 676;
    }
if (index == 2) {
     return 624;
    }
if (index == 3) {
     return 633;
    }
if (index == 4) {
     return 686;
    }
if (index == 5) {
     return 644;
    }
if (index == 6) {
     return 607;
    }
if (index == 7) {
     return 638;
    }
if (index == 8) {
     return 633;
    }
if (index == 9) {
     return 674;
    }
if (index == 10) {
     return 676;
    }
if (index == 11) {
     return 657;
    }
if (index == 12) {
     return 650;
    }
if (index == 13) {
     return 671;
    }
if (index == 14) {
     return 670;
    }
if (index == 15) {
     return 670;
    }
if (index == 16) {
     return 655;
    }
if (index == 17) {
     return 669;
    }
if (index == 18) {
     return 661;
    }
if (index == 19) {
     return 695;
    }
if (index == 20) {
     return 639;
    }
if (index == 21) {
     return 662;
    }
if (index == 22) {
     return 634;
    }
if (index == 23) {
     return 639;
    }
if (index == 24) {
     return 641;
    }
if (index == 25) {
     return 648;
    }
if (index == 26) {
     return 662;
    }
if (index == 27) {
     return 685;
    }
if (index == 28) {
     return 661;
    }
if (index == 29) {
     return 701;
    }
if (index == 30) {
     return 649;
    }
if (index == 31) {
     return 678;
    }
if (index == 32) {
     return 659;
    }
if (index == 33) {
     return 684;
    }
if (index == 34) {
     return 655;
    }
if (index == 35) {
     return 692;
    }
if (index == 36) {
     return 665;
    }
if (index == 37) {
     return 666;
    }
if (index == 38) {
     return 670;
    }
if (index == 39) {
     return 665;
    }
if (index == 40) {
     return 672;
    }
if (index == 41) {
     return 684;
    }
if (index == 42) {
     return 699;
    }
if (index == 43) {
     return 698;
    }
if (index == 44) {
     return 690;
    }
if (index == 45) {
     return 670;
    }
if (index == 46) {
     return 682;
    }
if (index == 47) {
     return 691;
    }
if (index == 48) {
     return 644;
    }
if (index == 49) {
     return 667;
    }
if (index == 50) {
     return 649;
    }
if (index == 51) {
     return 687;
    }
if (index == 52) {
     return 661;
    }
if (index == 53) {
     return 690;
    }
if (index == 54) {
     return 630;
    }
if (index == 55) {
     return 660;
    }
if (index == 56) {
     return 668;
    }
if (index == 57) {
     return 684;
    }
if (index == 58) {
     return 688;
    }
if (index == 59) {
     return 680;
    }
if (index == 60) {
     return 653;
    }
if (index == 61) {
     return 682;
    }
if (index == 62) {
     return 680;
    }
if (index == 63) {
     return 684;
    }
if (index == 64) {
     return 673;
    }
if (index == 65) {
     return 673;
    }
if (index == 66) {
     return 680;
    }
if (index == 67) {
     return 659;
    }
if (index == 68) {
     return 629;
    }
if (index == 69) {
     return 677;
    }
if (index == 70) {
     return 666;
    }
if (index == 71) {
     return 661;
    }
if (index == 72) {
     return 687;
    }
if (index == 73) {
     return 673;
    }
if (index == 74) {
     return 653;
    }
if (index == 75) {
     return 671;
    }
if (index == 76) {
     return 665;
    }
if (index == 77) {
     return 675;
    }
if (index == 78) {
     return 661;
    }
if (index == 79) {
     return 665;
    }
if (index == 80) {
     return 670;
    }
if (index == 81) {
     return 677;
    }
if (index == 82) {
     return 647;
    }
if (index == 83) {
     return 690;
    }
if (index == 84) {
     return 666;
    }
if (index == 85) {
     return 670;
    }
if (index == 86) {
     return 659;
    }
if (index == 87) {
     return 692;
    }
if (index == 88) {
     return 642;
    }
if (index == 89) {
     return 679;
    }
if (index == 90) {
     return 661;
    }
if (index == 91) {
     return 659;
    }
if (index == 92) {
     return 649;
    }
if (index == 93) {
     return 684;
    }
if (index == 94) {
     return 672;
    }
if (index == 95) {
     return 684;
    }
if (index == 96) {
     return 679;
    }
if (index == 97) {
     return 674;
    }
if (index == 98) {
     return 653;
    }
if (index == 99) {
     return 678;
    }
if (index == 100) {
     return 671;
    }
if (index == 101) {
     return 642;
    }
if (index == 102) {
     return 642;
    }
if (index == 103) {
     return 645;
    }
if (index == 104) {
     return 651;
    }
if (index == 105) {
     return 670;
    }
if (index == 106) {
     return 640;
    }
if (index == 107) {
     return 654;
    }
if (index == 108) {
     return 665;
    }
if (index == 109) {
     return 666;
    }
if (index == 110) {
     return 680;
    }
if (index == 111) {
     return 638;
    }
if (index == 112) {
     return 630;
    }
if (index == 113) {
     return 697;
    }
if (index == 114) {
     return 695;
    }
if (index == 115) {
     return 676;
    }
if (index == 116) {
     return 645;
    }
if (index == 117) {
     return 667;
    }
if (index == 118) {
     return 652;
    }
if (index == 119) {
     return 675;
    }
if (index == 120) {
     return 643;
    }
if (index == 121) {
     return 622;
    }
if (index == 122) {
     return 649;
    }
if (index == 123) {
     return 645;
    }
if (index == 124) {
     return 646;
    }
if (index == 125) {
     return 663;
    }
if (index == 126) {
     return 661;
    }
if (index == 127) {
     return 665;
    }
if (index == 128) {
     return 667;
    }
if (index == 129) {
     return 680;
    }
if (index == 130) {
     return 683;
    }
if (index == 131) {
     return 675;
    }
if (index == 132) {
     return 662;
    }
if (index == 133) {
     return 657;
    }
if (index == 134) {
     return 674;
    }
if (index == 135) {
     return 682;
    }
if (index == 136) {
     return 674;
    }
if (index == 137) {
     return 719;
    }
if (index == 138) {
     return 659;
    }
if (index == 139) {
     return 684;
    }
if (index == 140) {
     return 657;
    }
if (index == 141) {
     return 684;
    }
if (index > 141) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1248;
    }
if (index == 1) {
     return 1204;
    }
if (index == 2) {
     return 1167;
    }
if (index == 3) {
     return 1149;
    }
if (index == 4) {
     return 1197;
    }
if (index == 5) {
     return 1156;
    }
if (index == 6) {
     return 1157;
    }
if (index == 7) {
     return 1175;
    }
if (index == 8) {
     return 1168;
    }
if (index == 9) {
     return 1191;
    }
if (index == 10) {
     return 1173;
    }
if (index == 11) {
     return 1196;
    }
if (index == 12) {
     return 1164;
    }
if (index == 13) {
     return 1183;
    }
if (index == 14) {
     return 1180;
    }
if (index == 15) {
     return 1190;
    }
if (index == 16) {
     return 1134;
    }
if (index == 17) {
     return 1187;
    }
if (index == 18) {
     return 1161;
    }
if (index == 19) {
     return 1175;
    }
if (index == 20) {
     return 1162;
    }
if (index == 21) {
     return 1141;
    }
if (index == 22) {
     return 1151;
    }
if (index == 23) {
     return 1167;
    }
if (index == 24) {
     return 1157;
    }
if (index == 25) {
     return 1173;
    }
if (index == 26) {
     return 1143;
    }
if (index == 27) {
     return 1182;
    }
if (index == 28) {
     return 1132;
    }
if (index == 29) {
     return 1190;
    }
if (index == 30) {
     return 1148;
    }
if (index == 31) {
     return 1189;
    }
if (index == 32) {
     return 1152;
    }
if (index == 33) {
     return 1178;
    }
if (index == 34) {
     return 1136;
    }
if (index == 35) {
     return 1179;
    }
if (index == 36) {
     return 1149;
    }
if (index == 37) {
     return 1172;
    }
if (index == 38) {
     return 1143;
    }
if (index == 39) {
     return 1179;
    }
if (index == 40) {
     return 1136;
    }
if (index == 41) {
     return 1181;
    }
if (index == 42) {
     return 1150;
    }
if (index == 43) {
     return 1183;
    }
if (index == 44) {
     return 1135;
    }
if (index == 45) {
     return 1144;
    }
if (index == 46) {
     return 1115;
    }
if (index == 47) {
     return 1176;
    }
if (index == 48) {
     return 1136;
    }
if (index == 49) {
     return 1184;
    }
if (index == 50) {
     return 1124;
    }
if (index == 51) {
     return 1170;
    }
if (index == 52) {
     return 1123;
    }
if (index == 53) {
     return 1170;
    }
if (index == 54) {
     return 1107;
    }
if (index == 55) {
     return 1158;
    }
if (index == 56) {
     return 1098;
    }
if (index == 57) {
     return 1156;
    }
if (index == 58) {
     return 1136;
    }
if (index == 59) {
     return 1145;
    }
if (index == 60) {
     return 1117;
    }
if (index == 61) {
     return 1143;
    }
if (index == 62) {
     return 1123;
    }
if (index == 63) {
     return 1152;
    }
if (index == 64) {
     return 1103;
    }
if (index == 65) {
     return 1141;
    }
if (index == 66) {
     return 1124;
    }
if (index == 67) {
     return 1145;
    }
if (index == 68) {
     return 1069;
    }
if (index == 69) {
     return 1141;
    }
if (index == 70) {
     return 1113;
    }
if (index == 71) {
     return 1139;
    }
if (index == 72) {
     return 1132;
    }
if (index == 73) {
     return 1143;
    }
if (index == 74) {
     return 1109;
    }
if (index == 75) {
     return 1131;
    }
if (index == 76) {
     return 1100;
    }
if (index == 77) {
     return 1141;
    }
if (index == 78) {
     return 1100;
    }
if (index == 79) {
     return 1140;
    }
if (index == 80) {
     return 1115;
    }
if (index == 81) {
     return 1149;
    }
if (index == 82) {
     return 1111;
    }
if (index == 83) {
     return 1149;
    }
if (index == 84) {
     return 1117;
    }
if (index == 85) {
     return 1131;
    }
if (index == 86) {
     return 1098;
    }
if (index == 87) {
     return 1152;
    }
if (index == 88) {
     return 1083;
    }
if (index == 89) {
     return 1135;
    }
if (index == 90) {
     return 1102;
    }
if (index == 91) {
     return 1123;
    }
if (index == 92) {
     return 1083;
    }
if (index == 93) {
     return 1125;
    }
if (index == 94) {
     return 1078;
    }
if (index == 95) {
     return 1109;
    }
if (index == 96) {
     return 1081;
    }
if (index == 97) {
     return 1052;
    }
if (index == 98) {
     return 1094;
    }
if (index == 99) {
     return 1132;
    }
if (index == 100) {
     return 1109;
    }
if (index == 101) {
     return 1130;
    }
if (index == 102) {
     return 1088;
    }
if (index == 103) {
     return 1132;
    }
if (index == 104) {
     return 1064;
    }
if (index == 105) {
     return 1083;
    }
if (index == 106) {
     return 1088;
    }
if (index == 107) {
     return 1076;
    }
if (index == 108) {
     return 1073;
    }
if (index == 109) {
     return 1108;
    }
if (index == 110) {
     return 1079;
    }
if (index == 111) {
     return 1143;
    }
if (index == 112) {
     return 1133;
    }
if (index == 113) {
     return 1156;
    }
if (index == 114) {
     return 1140;
    }
if (index == 115) {
     return 1108;
    }
if (index == 116) {
     return 1120;
    }
if (index == 117) {
     return 1155;
    }
if (index == 118) {
     return 1106;
    }
if (index == 119) {
     return 1138;
    }
if (index == 120) {
     return 1111;
    }
if (index == 121) {
     return 1137;
    }
if (index == 122) {
     return 1117;
    }
if (index == 123) {
     return 1151;
    }
if (index == 124) {
     return 1130;
    }
if (index == 125) {
     return 1186;
    }
if (index == 126) {
     return 1173;
    }
if (index == 127) {
     return 1172;
    }
if (index == 128) {
     return 1166;
    }
if (index == 129) {
     return 1177;
    }
if (index == 130) {
     return 1161;
    }
if (index == 131) {
     return 1167;
    }
if (index == 132) {
     return 1154;
    }
if (index == 133) {
     return 1194;
    }
if (index == 134) {
     return 1188;
    }
if (index == 135) {
     return 1194;
    }
if (index == 136) {
     return 1196;
    }
if (index == 137) {
     return 1239;
    }
if (index == 138) {
     return 1138;
    }
if (index == 139) {
     return 1190;
    }
if (index == 140) {
     return 1181;
    }
if (index == 141) {
     return 1190;
    }
if (index > 141) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:101_' + imgStr + '/digitalImage';
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
br.numLeafs = 142;

// Book title and the URL used for the book title link
br.bookTitle= "From jungle to Java : the trivial impresssions of a short excursion to Netherlands India";
br.bookAuthor= "Keyser, Arthur Louis";
br.bookPub= "Westminster [London]: Roxburghe Press, Ltd, 1897";
br.bookKeyword= "Java (Indonesia)--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Java (Indonesia)--Social life and customs";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:101';

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
