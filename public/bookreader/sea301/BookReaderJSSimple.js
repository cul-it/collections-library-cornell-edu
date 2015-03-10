//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 815;
    }
if (index == 1) {
     return 751;
    }
if (index == 2) {
     return 741;
    }
if (index == 3) {
     return 655;
    }
if (index == 4) {
     return 724;
    }
if (index == 5) {
     return 634;
    }
if (index == 6) {
     return 746;
    }
if (index == 7) {
     return 675;
    }
if (index == 8) {
     return 720;
    }
if (index == 9) {
     return 723;
    }
if (index == 10) {
     return 630;
    }
if (index == 11) {
     return 730;
    }
if (index == 12) {
     return 577;
    }
if (index == 13) {
     return 648;
    }
if (index == 14) {
     return 688;
    }
if (index == 15) {
     return 662;
    }
if (index == 16) {
     return 692;
    }
if (index == 17) {
     return 707;
    }
if (index == 18) {
     return 713;
    }
if (index == 19) {
     return 712;
    }
if (index == 20) {
     return 701;
    }
if (index == 21) {
     return 708;
    }
if (index == 22) {
     return 654;
    }
if (index == 23) {
     return 706;
    }
if (index == 24) {
     return 720;
    }
if (index == 25) {
     return 709;
    }
if (index == 26) {
     return 708;
    }
if (index == 27) {
     return 710;
    }
if (index == 28) {
     return 718;
    }
if (index == 29) {
     return 691;
    }
if (index == 30) {
     return 704;
    }
if (index == 31) {
     return 714;
    }
if (index == 32) {
     return 702;
    }
if (index == 33) {
     return 672;
    }
if (index == 34) {
     return 683;
    }
if (index == 35) {
     return 716;
    }
if (index == 36) {
     return 691;
    }
if (index == 37) {
     return 707;
    }
if (index == 38) {
     return 690;
    }
if (index == 39) {
     return 688;
    }
if (index == 40) {
     return 688;
    }
if (index == 41) {
     return 704;
    }
if (index == 42) {
     return 658;
    }
if (index == 43) {
     return 683;
    }
if (index == 44) {
     return 694;
    }
if (index == 45) {
     return 715;
    }
if (index == 46) {
     return 718;
    }
if (index == 47) {
     return 711;
    }
if (index == 48) {
     return 716;
    }
if (index == 49) {
     return 713;
    }
if (index == 50) {
     return 708;
    }
if (index == 51) {
     return 722;
    }
if (index == 52) {
     return 1025;
    }
if (index == 53) {
     return 691;
    }
if (index == 54) {
     return 713;
    }
if (index == 55) {
     return 689;
    }
if (index == 56) {
     return 691;
    }
if (index == 57) {
     return 731;
    }
if (index == 58) {
     return 692;
    }
if (index == 59) {
     return 718;
    }
if (index == 60) {
     return 693;
    }
if (index == 61) {
     return 727;
    }
if (index == 62) {
     return 609;
    }
if (index == 63) {
     return 693;
    }
if (index == 64) {
     return 706;
    }
if (index == 65) {
     return 657;
    }
if (index == 66) {
     return 638;
    }
if (index == 67) {
     return 655;
    }
if (index == 68) {
     return 631;
    }
if (index == 69) {
     return 670;
    }
if (index == 70) {
     return 665;
    }
if (index == 71) {
     return 661;
    }
if (index == 72) {
     return 980;
    }
if (index == 73) {
     return 706;
    }
if (index == 74) {
     return 652;
    }
if (index == 75) {
     return 700;
    }
if (index == 76) {
     return 693;
    }
if (index == 77) {
     return 682;
    }
if (index == 78) {
     return 681;
    }
if (index == 79) {
     return 692;
    }
if (index == 80) {
     return 688;
    }
if (index == 81) {
     return 696;
    }
if (index == 82) {
     return 687;
    }
if (index == 83) {
     return 743;
    }
if (index == 84) {
     return 675;
    }
if (index == 85) {
     return 696;
    }
if (index == 86) {
     return 697;
    }
if (index == 87) {
     return 722;
    }
if (index == 88) {
     return 678;
    }
if (index == 89) {
     return 697;
    }
if (index == 90) {
     return 702;
    }
if (index == 91) {
     return 735;
    }
if (index == 92) {
     return 1019;
    }
if (index == 93) {
     return 716;
    }
if (index == 94) {
     return 714;
    }
if (index == 95) {
     return 704;
    }
if (index == 96) {
     return 720;
    }
if (index == 97) {
     return 732;
    }
if (index == 98) {
     return 675;
    }
if (index == 99) {
     return 685;
    }
if (index == 100) {
     return 665;
    }
if (index == 101) {
     return 716;
    }
if (index == 102) {
     return 704;
    }
if (index == 103) {
     return 737;
    }
if (index == 104) {
     return 685;
    }
if (index == 105) {
     return 719;
    }
if (index == 106) {
     return 707;
    }
if (index == 107) {
     return 716;
    }
if (index == 108) {
     return 688;
    }
if (index == 109) {
     return 719;
    }
if (index == 110) {
     return 705;
    }
if (index == 111) {
     return 715;
    }
if (index == 112) {
     return 1058;
    }
if (index == 113) {
     return 736;
    }
if (index == 114) {
     return 701;
    }
if (index == 115) {
     return 721;
    }
if (index == 116) {
     return 704;
    }
if (index == 117) {
     return 721;
    }
if (index == 118) {
     return 731;
    }
if (index == 119) {
     return 697;
    }
if (index == 120) {
     return 723;
    }
if (index == 121) {
     return 711;
    }
if (index == 122) {
     return 697;
    }
if (index == 123) {
     return 691;
    }
if (index > 123) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1156;
    }
if (index == 1) {
     return 1084;
    }
if (index == 2) {
     return 1085;
    }
if (index == 3) {
     return 1080;
    }
if (index == 4) {
     return 1085;
    }
if (index == 5) {
     return 1036;
    }
if (index == 6) {
     return 1129;
    }
if (index == 7) {
     return 1092;
    }
if (index == 8) {
     return 1104;
    }
if (index == 9) {
     return 1061;
    }
if (index == 10) {
     return 1055;
    }
if (index == 11) {
     return 1065;
    }
if (index == 12) {
     return 1071;
    }
if (index == 13) {
     return 1048;
    }
if (index == 14) {
     return 1066;
    }
if (index == 15) {
     return 1045;
    }
if (index == 16) {
     return 1100;
    }
if (index == 17) {
     return 1031;
    }
if (index == 18) {
     return 1064;
    }
if (index == 19) {
     return 1103;
    }
if (index == 20) {
     return 1079;
    }
if (index == 21) {
     return 1094;
    }
if (index == 22) {
     return 1082;
    }
if (index == 23) {
     return 1051;
    }
if (index == 24) {
     return 1099;
    }
if (index == 25) {
     return 1059;
    }
if (index == 26) {
     return 1084;
    }
if (index == 27) {
     return 1067;
    }
if (index == 28) {
     return 1090;
    }
if (index == 29) {
     return 1049;
    }
if (index == 30) {
     return 1102;
    }
if (index == 31) {
     return 1080;
    }
if (index == 32) {
     return 1064;
    }
if (index == 33) {
     return 1059;
    }
if (index == 34) {
     return 1052;
    }
if (index == 35) {
     return 1071;
    }
if (index == 36) {
     return 1072;
    }
if (index == 37) {
     return 1067;
    }
if (index == 38) {
     return 1085;
    }
if (index == 39) {
     return 1090;
    }
if (index == 40) {
     return 1108;
    }
if (index == 41) {
     return 1101;
    }
if (index == 42) {
     return 1088;
    }
if (index == 43) {
     return 1047;
    }
if (index == 44) {
     return 1089;
    }
if (index == 45) {
     return 1066;
    }
if (index == 46) {
     return 1086;
    }
if (index == 47) {
     return 1080;
    }
if (index == 48) {
     return 1104;
    }
if (index == 49) {
     return 1067;
    }
if (index == 50) {
     return 1093;
    }
if (index == 51) {
     return 1074;
    }
if (index == 52) {
     return 713;
    }
if (index == 53) {
     return 1061;
    }
if (index == 54) {
     return 1082;
    }
if (index == 55) {
     return 1067;
    }
if (index == 56) {
     return 1067;
    }
if (index == 57) {
     return 1064;
    }
if (index == 58) {
     return 1096;
    }
if (index == 59) {
     return 1071;
    }
if (index == 60) {
     return 1095;
    }
if (index == 61) {
     return 1078;
    }
if (index == 62) {
     return 1045;
    }
if (index == 63) {
     return 1043;
    }
if (index == 64) {
     return 1099;
    }
if (index == 65) {
     return 1018;
    }
if (index == 66) {
     return 1030;
    }
if (index == 67) {
     return 1020;
    }
if (index == 68) {
     return 1043;
    }
if (index == 69) {
     return 1066;
    }
if (index == 70) {
     return 1079;
    }
if (index == 71) {
     return 1077;
    }
if (index == 72) {
     return 680;
    }
if (index == 73) {
     return 1101;
    }
if (index == 74) {
     return 1101;
    }
if (index == 75) {
     return 1093;
    }
if (index == 76) {
     return 1106;
    }
if (index == 77) {
     return 1096;
    }
if (index == 78) {
     return 1099;
    }
if (index == 79) {
     return 1085;
    }
if (index == 80) {
     return 1096;
    }
if (index == 81) {
     return 1093;
    }
if (index == 82) {
     return 1089;
    }
if (index == 83) {
     return 1094;
    }
if (index == 84) {
     return 1104;
    }
if (index == 85) {
     return 1094;
    }
if (index == 86) {
     return 1076;
    }
if (index == 87) {
     return 1066;
    }
if (index == 88) {
     return 1069;
    }
if (index == 89) {
     return 1068;
    }
if (index == 90) {
     return 1059;
    }
if (index == 91) {
     return 1117;
    }
if (index == 92) {
     return 710;
    }
if (index == 93) {
     return 1074;
    }
if (index == 94) {
     return 1088;
    }
if (index == 95) {
     return 1077;
    }
if (index == 96) {
     return 1085;
    }
if (index == 97) {
     return 1081;
    }
if (index == 98) {
     return 1081;
    }
if (index == 99) {
     return 1063;
    }
if (index == 100) {
     return 1089;
    }
if (index == 101) {
     return 1059;
    }
if (index == 102) {
     return 1059;
    }
if (index == 103) {
     return 1088;
    }
if (index == 104) {
     return 1084;
    }
if (index == 105) {
     return 1093;
    }
if (index == 106) {
     return 1079;
    }
if (index == 107) {
     return 1080;
    }
if (index == 108) {
     return 1085;
    }
if (index == 109) {
     return 1080;
    }
if (index == 110) {
     return 1091;
    }
if (index == 111) {
     return 1085;
    }
if (index == 112) {
     return 736;
    }
if (index == 113) {
     return 1082;
    }
if (index == 114) {
     return 1080;
    }
if (index == 115) {
     return 1078;
    }
if (index == 116) {
     return 1078;
    }
if (index == 117) {
     return 1091;
    }
if (index == 118) {
     return 1087;
    }
if (index == 119) {
     return 1082;
    }
if (index == 120) {
     return 1084;
    }
if (index == 121) {
     return 1087;
    }
if (index == 122) {
     return 1082;
    }
if (index == 123) {
     return 983;
    }
if (index > 123) {
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
    var url = '/fedora/get/seapage:301_' + imgStr + '/digitalImage';
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
br.numLeafs = 124;

// Book title and the URL used for the book title link
br.bookTitle= "Burma";
br.bookAuthor= "Kelly, R. Talbot (Robert Talbot)";
br.bookPub= "London: A. and C. Black, 1908";
br.bookKeyword= "Burma--Description and travel";
br.bookUrl  = '/catalog/sea:301';

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
