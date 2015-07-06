//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 627;
    }
if (index == 1) {
     return 627;
    }
if (index == 2) {
     return 627;
    }
if (index == 3) {
     return 627;
    }
if (index == 4) {
     return 640;
    }
if (index == 5) {
     return 629;
    }
if (index == 6) {
     return 627;
    }
if (index == 7) {
     return 642;
    }
if (index == 8) {
     return 635;
    }
if (index == 9) {
     return 627;
    }
if (index == 10) {
     return 627;
    }
if (index == 11) {
     return 640;
    }
if (index == 12) {
     return 644;
    }
if (index == 13) {
     return 650;
    }
if (index == 14) {
     return 640;
    }
if (index == 15) {
     return 641;
    }
if (index == 16) {
     return 627;
    }
if (index == 17) {
     return 638;
    }
if (index == 18) {
     return 637;
    }
if (index == 19) {
     return 646;
    }
if (index == 20) {
     return 638;
    }
if (index == 21) {
     return 640;
    }
if (index == 22) {
     return 638;
    }
if (index == 23) {
     return 638;
    }
if (index == 24) {
     return 633;
    }
if (index == 25) {
     return 651;
    }
if (index == 26) {
     return 641;
    }
if (index == 27) {
     return 648;
    }
if (index == 28) {
     return 637;
    }
if (index == 29) {
     return 641;
    }
if (index == 30) {
     return 636;
    }
if (index == 31) {
     return 645;
    }
if (index == 32) {
     return 636;
    }
if (index == 33) {
     return 631;
    }
if (index == 34) {
     return 638;
    }
if (index == 35) {
     return 648;
    }
if (index == 36) {
     return 642;
    }
if (index == 37) {
     return 631;
    }
if (index == 38) {
     return 637;
    }
if (index == 39) {
     return 631;
    }
if (index == 40) {
     return 629;
    }
if (index == 41) {
     return 632;
    }
if (index == 42) {
     return 637;
    }
if (index == 43) {
     return 627;
    }
if (index == 44) {
     return 631;
    }
if (index == 45) {
     return 634;
    }
if (index == 46) {
     return 627;
    }
if (index == 47) {
     return 632;
    }
if (index == 48) {
     return 627;
    }
if (index == 49) {
     return 633;
    }
if (index == 50) {
     return 633;
    }
if (index == 51) {
     return 634;
    }
if (index == 52) {
     return 639;
    }
if (index == 53) {
     return 635;
    }
if (index == 54) {
     return 637;
    }
if (index == 55) {
     return 630;
    }
if (index == 56) {
     return 638;
    }
if (index == 57) {
     return 627;
    }
if (index == 58) {
     return 639;
    }
if (index == 59) {
     return 634;
    }
if (index == 60) {
     return 627;
    }
if (index == 61) {
     return 634;
    }
if (index == 62) {
     return 634;
    }
if (index == 63) {
     return 629;
    }
if (index == 64) {
     return 633;
    }
if (index == 65) {
     return 647;
    }
if (index == 66) {
     return 639;
    }
if (index == 67) {
     return 627;
    }
if (index == 68) {
     return 627;
    }
if (index == 69) {
     return 627;
    }
if (index == 70) {
     return 627;
    }
if (index == 71) {
     return 630;
    }
if (index == 72) {
     return 634;
    }
if (index == 73) {
     return 627;
    }
if (index == 74) {
     return 641;
    }
if (index == 75) {
     return 637;
    }
if (index == 76) {
     return 637;
    }
if (index == 77) {
     return 643;
    }
if (index == 78) {
     return 634;
    }
if (index == 79) {
     return 640;
    }
if (index == 80) {
     return 634;
    }
if (index == 81) {
     return 639;
    }
if (index == 82) {
     return 627;
    }
if (index == 83) {
     return 634;
    }
if (index == 84) {
     return 627;
    }
if (index == 85) {
     return 632;
    }
if (index == 86) {
     return 636;
    }
if (index == 87) {
     return 639;
    }
if (index == 88) {
     return 629;
    }
if (index == 89) {
     return 636;
    }
if (index == 90) {
     return 632;
    }
if (index == 91) {
     return 642;
    }
if (index == 92) {
     return 641;
    }
if (index == 93) {
     return 640;
    }
if (index == 94) {
     return 632;
    }
if (index == 95) {
     return 637;
    }
if (index == 96) {
     return 627;
    }
if (index == 97) {
     return 638;
    }
if (index == 98) {
     return 627;
    }
if (index == 99) {
     return 626;
    }
if (index == 100) {
     return 627;
    }
if (index > 100) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1059;
    }
if (index == 1) {
     return 1059;
    }
if (index == 2) {
     return 1059;
    }
if (index == 3) {
     return 1059;
    }
if (index == 4) {
     return 1079;
    }
if (index == 5) {
     return 1073;
    }
if (index == 6) {
     return 1072;
    }
if (index == 7) {
     return 1080;
    }
if (index == 8) {
     return 1077;
    }
if (index == 9) {
     return 1072;
    }
if (index == 10) {
     return 1072;
    }
if (index == 11) {
     return 1079;
    }
if (index == 12) {
     return 1082;
    }
if (index == 13) {
     return 1102;
    }
if (index == 14) {
     return 1088;
    }
if (index == 15) {
     return 1098;
    }
if (index == 16) {
     return 1080;
    }
if (index == 17) {
     return 1087;
    }
if (index == 18) {
     return 1086;
    }
if (index == 19) {
     return 1100;
    }
if (index == 20) {
     return 1087;
    }
if (index == 21) {
     return 1097;
    }
if (index == 22) {
     return 1087;
    }
if (index == 23) {
     return 1096;
    }
if (index == 24) {
     return 1084;
    }
if (index == 25) {
     return 1103;
    }
if (index == 26) {
     return 1088;
    }
if (index == 27) {
     return 1101;
    }
if (index == 28) {
     return 1086;
    }
if (index == 29) {
     return 992;
    }
if (index == 30) {
     return 1086;
    }
if (index == 31) {
     return 1020;
    }
if (index == 32) {
     return 1085;
    }
if (index == 33) {
     return 1092;
    }
if (index == 34) {
     return 1087;
    }
if (index == 35) {
     return 1101;
    }
if (index == 36) {
     return 1089;
    }
if (index == 37) {
     return 1091;
    }
if (index == 38) {
     return 1086;
    }
if (index == 39) {
     return 1092;
    }
if (index == 40) {
     return 1081;
    }
if (index == 41) {
     return 1092;
    }
if (index == 42) {
     return 1086;
    }
if (index == 43) {
     return 1089;
    }
if (index == 44) {
     return 1083;
    }
if (index == 45) {
     return 1094;
    }
if (index == 46) {
     return 1080;
    }
if (index == 47) {
     return 1092;
    }
if (index == 48) {
     return 1080;
    }
if (index == 49) {
     return 1093;
    }
if (index == 50) {
     return 1084;
    }
if (index == 51) {
     return 1094;
    }
if (index == 52) {
     return 1087;
    }
if (index == 53) {
     return 1094;
    }
if (index == 54) {
     return 1086;
    }
if (index == 55) {
     return 1091;
    }
if (index == 56) {
     return 1087;
    }
if (index == 57) {
     return 1089;
    }
if (index == 58) {
     return 1087;
    }
if (index == 59) {
     return 1093;
    }
if (index == 60) {
     return 1044;
    }
if (index == 61) {
     return 1033;
    }
if (index == 62) {
     return 1033;
    }
if (index == 63) {
     return 1065;
    }
if (index == 64) {
     return 1049;
    }
if (index == 65) {
     return 1058;
    }
if (index == 66) {
     return 1053;
    }
if (index == 67) {
     return 1046;
    }
if (index == 68) {
     return 1046;
    }
if (index == 69) {
     return 1046;
    }
if (index == 70) {
     return 1046;
    }
if (index == 71) {
     return 899;
    }
if (index == 72) {
     return 902;
    }
if (index == 73) {
     return 897;
    }
if (index == 74) {
     return 907;
    }
if (index == 75) {
     return 904;
    }
if (index == 76) {
     return 904;
    }
if (index == 77) {
     return 908;
    }
if (index == 78) {
     return 902;
    }
if (index == 79) {
     return 843;
    }
if (index == 80) {
     return 840;
    }
if (index == 81) {
     return 906;
    }
if (index == 82) {
     return 897;
    }
if (index == 83) {
     return 902;
    }
if (index == 84) {
     return 897;
    }
if (index == 85) {
     return 900;
    }
if (index == 86) {
     return 903;
    }
if (index == 87) {
     return 906;
    }
if (index == 88) {
     return 899;
    }
if (index == 89) {
     return 899;
    }
if (index == 90) {
     return 896;
    }
if (index == 91) {
     return 903;
    }
if (index == 92) {
     return 903;
    }
if (index == 93) {
     return 902;
    }
if (index == 94) {
     return 896;
    }
if (index == 95) {
     return 900;
    }
if (index == 96) {
     return 892;
    }
if (index == 97) {
     return 900;
    }
if (index == 98) {
     return 892;
    }
if (index == 99) {
     return 921;
    }
if (index == 100) {
     return 1033;
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
    var url = '/fedora/get/nur:00689_' + imgStr + '/digitalImage';
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
br.numLeafs = 99;

// Book title and the URL used for the book title link
br.bookTitle= "Germany's Economic Base for Aggression  / Statement Submitted by Leo T. Crowley / Foreign Economic Administrator / before the Sub-Committee on / War Mobilization of the / Senate Military Affairs Committee";
br.bookAuthor= "Leo T. Crowley";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, 1945-06-26";
br.bookKeyword= "";
br.bookUrl  = '/nuremberg/catalog/nur:00689';

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
