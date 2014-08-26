//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 776;
    }
if (index == 1) {
     return 756;
    }
if (index == 2) {
     return 730;
    }
if (index == 3) {
     return 756;
    }
if (index == 4) {
     return 730;
    }
if (index == 5) {
     return 756;
    }
if (index == 6) {
     return 761;
    }
if (index == 7) {
     return 729;
    }
if (index == 8) {
     return 772;
    }
if (index == 9) {
     return 755;
    }
if (index == 10) {
     return 755;
    }
if (index == 11) {
     return 725;
    }
if (index == 12) {
     return 739;
    }
if (index == 13) {
     return 727;
    }
if (index == 14) {
     return 793;
    }
if (index == 15) {
     return 727;
    }
if (index == 16) {
     return 739;
    }
if (index == 17) {
     return 694;
    }
if (index == 18) {
     return 717;
    }
if (index == 19) {
     return 703;
    }
if (index == 20) {
     return 769;
    }
if (index == 21) {
     return 765;
    }
if (index == 22) {
     return 739;
    }
if (index == 23) {
     return 721;
    }
if (index == 24) {
     return 811;
    }
if (index == 25) {
     return 751;
    }
if (index == 26) {
     return 764;
    }
if (index == 27) {
     return 758;
    }
if (index == 28) {
     return 742;
    }
if (index == 29) {
     return 718;
    }
if (index == 30) {
     return 739;
    }
if (index == 31) {
     return 726;
    }
if (index == 32) {
     return 759;
    }
if (index == 33) {
     return 703;
    }
if (index == 34) {
     return 753;
    }
if (index == 35) {
     return 738;
    }
if (index == 36) {
     return 743;
    }
if (index == 37) {
     return 736;
    }
if (index == 38) {
     return 745;
    }
if (index == 39) {
     return 727;
    }
if (index == 40) {
     return 739;
    }
if (index == 41) {
     return 710;
    }
if (index == 42) {
     return 739;
    }
if (index == 43) {
     return 717;
    }
if (index == 44) {
     return 750;
    }
if (index == 45) {
     return 746;
    }
if (index == 46) {
     return 739;
    }
if (index == 47) {
     return 705;
    }
if (index == 48) {
     return 765;
    }
if (index == 49) {
     return 711;
    }
if (index == 50) {
     return 767;
    }
if (index == 51) {
     return 731;
    }
if (index == 52) {
     return 758;
    }
if (index == 53) {
     return 730;
    }
if (index == 54) {
     return 739;
    }
if (index == 55) {
     return 711;
    }
if (index == 56) {
     return 746;
    }
if (index == 57) {
     return 703;
    }
if (index == 58) {
     return 751;
    }
if (index == 59) {
     return 725;
    }
if (index == 60) {
     return 757;
    }
if (index == 61) {
     return 782;
    }
if (index == 62) {
     return 795;
    }
if (index == 63) {
     return 764;
    }
if (index == 64) {
     return 769;
    }
if (index == 65) {
     return 732;
    }
if (index == 66) {
     return 791;
    }
if (index == 67) {
     return 749;
    }
if (index == 68) {
     return 773;
    }
if (index == 69) {
     return 752;
    }
if (index == 70) {
     return 779;
    }
if (index == 71) {
     return 791;
    }
if (index == 72) {
     return 789;
    }
if (index == 73) {
     return 908;
    }
if (index == 74) {
     return 805;
    }
if (index == 75) {
     return 748;
    }
if (index == 76) {
     return 766;
    }
if (index == 77) {
     return 798;
    }
if (index > 77) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1131;
    }
if (index == 1) {
     return 1077;
    }
if (index == 2) {
     return 1059;
    }
if (index == 3) {
     return 1042;
    }
if (index == 4) {
     return 1059;
    }
if (index == 5) {
     return 1059;
    }
if (index == 6) {
     return 1080;
    }
if (index == 7) {
     return 1079;
    }
if (index == 8) {
     return 1093;
    }
if (index == 9) {
     return 1085;
    }
if (index == 10) {
     return 1080;
    }
if (index == 11) {
     return 1083;
    }
if (index == 12) {
     return 1077;
    }
if (index == 13) {
     return 1085;
    }
if (index == 14) {
     return 1113;
    }
if (index == 15) {
     return 1085;
    }
if (index == 16) {
     return 1077;
    }
if (index == 17) {
     return 1087;
    }
if (index == 18) {
     return 1098;
    }
if (index == 19) {
     return 1069;
    }
if (index == 20) {
     return 1089;
    }
if (index == 21) {
     return 1108;
    }
if (index == 22) {
     return 1069;
    }
if (index == 23) {
     return 1081;
    }
if (index == 24) {
     return 1125;
    }
if (index == 25) {
     return 1108;
    }
if (index == 26) {
     return 1094;
    }
if (index == 27) {
     return 1113;
    }
if (index == 28) {
     return 1079;
    }
if (index == 29) {
     return 1088;
    }
if (index == 30) {
     return 1077;
    }
if (index == 31) {
     return 1093;
    }
if (index == 32) {
     return 1091;
    }
if (index == 33) {
     return 1078;
    }
if (index == 34) {
     return 1087;
    }
if (index == 35) {
     return 1100;
    }
if (index == 36) {
     return 1080;
    }
if (index == 37) {
     return 1099;
    }
if (index == 38) {
     return 1081;
    }
if (index == 39) {
     return 1093;
    }
if (index == 40) {
     return 1077;
    }
if (index == 41) {
     return 1082;
    }
if (index == 42) {
     return 1077;
    }
if (index == 43) {
     return 1087;
    }
if (index == 44) {
     return 1084;
    }
if (index == 45) {
     return 1105;
    }
if (index == 46) {
     return 1077;
    }
if (index == 47) {
     return 1079;
    }
if (index == 48) {
     return 1095;
    }
if (index == 49) {
     return 1083;
    }
if (index == 50) {
     return 1096;
    }
if (index == 51) {
     return 1096;
    }
if (index == 52) {
     return 1090;
    }
if (index == 53) {
     return 1096;
    }
if (index == 54) {
     return 1077;
    }
if (index == 55) {
     return 1083;
    }
if (index == 56) {
     return 1082;
    }
if (index == 57) {
     return 1078;
    }
if (index == 58) {
     return 1085;
    }
if (index == 59) {
     return 1093;
    }
if (index == 60) {
     return 1089;
    }
if (index == 61) {
     return 1095;
    }
if (index == 62) {
     return 1140;
    }
if (index == 63) {
     return 1117;
    }
if (index == 64) {
     return 1123;
    }
if (index == 65) {
     return 1097;
    }
if (index == 66) {
     return 1137;
    }
if (index == 67) {
     return 1107;
    }
if (index == 68) {
     return 1125;
    }
if (index == 69) {
     return 1109;
    }
if (index == 70) {
     return 1129;
    }
if (index == 71) {
     return 1132;
    }
if (index == 72) {
     return 1127;
    }
if (index == 73) {
     return 1304;
    }
if (index == 74) {
     return 1138;
    }
if (index == 75) {
     return 1103;
    }
if (index == 76) {
     return 1112;
    }
if (index == 77) {
     return 1125;
    }
if (index > 77) {
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
    var url = '/fedora/get/seapage:044_' + imgStr + '/digitalImage';
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
br.numLeafs = 78;

// Book title and the URL used for the book title link
br.bookTitle= "Cochin-China : Containing many admirable Rarities and Singularities of that Countrey. Extracted out of an Italian Relation, lately presented to the pope, by Christophoro Barri, that liued certaine yeeres there";
br.bookAuthor= "Borri, Cristoforo";
br.bookPub= "London: Printed by Robert Raworth; for Richard Clutterbuck, and are to be sold at the signe of the Ball in Little-Brittaine, 1633";
br.bookKeyword= "Missions--Cochin China<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jesuits--Cochin China<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cochin China<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vietnam--History--To 1858";
br.bookUrl  = '/catalog/sea:044';

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
