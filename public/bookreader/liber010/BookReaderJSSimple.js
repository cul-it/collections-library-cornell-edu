//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 770;
    }
if (index == 1) {
     return 732;
    }
if (index == 2) {
     return 782;
    }
if (index == 3) {
     return 738;
    }
if (index == 4) {
     return 746;
    }
if (index == 5) {
     return 734;
    }
if (index == 6) {
     return 756;
    }
if (index == 7) {
     return 730;
    }
if (index == 8) {
     return 735;
    }
if (index == 9) {
     return 748;
    }
if (index == 10) {
     return 719;
    }
if (index == 11) {
     return 764;
    }
if (index == 12) {
     return 736;
    }
if (index == 13) {
     return 762;
    }
if (index == 14) {
     return 750;
    }
if (index == 15) {
     return 717;
    }
if (index == 16) {
     return 746;
    }
if (index == 17) {
     return 701;
    }
if (index == 18) {
     return 726;
    }
if (index == 19) {
     return 699;
    }
if (index == 20) {
     return 721;
    }
if (index == 21) {
     return 710;
    }
if (index == 22) {
     return 730;
    }
if (index == 23) {
     return 712;
    }
if (index == 24) {
     return 743;
    }
if (index == 25) {
     return 709;
    }
if (index == 26) {
     return 752;
    }
if (index == 27) {
     return 749;
    }
if (index == 28) {
     return 741;
    }
if (index == 29) {
     return 719;
    }
if (index == 30) {
     return 757;
    }
if (index == 31) {
     return 741;
    }
if (index == 32) {
     return 734;
    }
if (index == 33) {
     return 721;
    }
if (index == 34) {
     return 756;
    }
if (index == 35) {
     return 703;
    }
if (index == 36) {
     return 742;
    }
if (index == 37) {
     return 749;
    }
if (index == 38) {
     return 748;
    }
if (index == 39) {
     return 727;
    }
if (index == 40) {
     return 754;
    }
if (index == 41) {
     return 757;
    }
if (index == 42) {
     return 754;
    }
if (index == 43) {
     return 756;
    }
if (index == 44) {
     return 754;
    }
if (index == 45) {
     return 753;
    }
if (index == 46) {
     return 782;
    }
if (index == 47) {
     return 762;
    }
if (index == 48) {
     return 748;
    }
if (index == 49) {
     return 753;
    }
if (index == 50) {
     return 758;
    }
if (index == 51) {
     return 758;
    }
if (index == 52) {
     return 773;
    }
if (index == 53) {
     return 748;
    }
if (index == 54) {
     return 747;
    }
if (index == 55) {
     return 771;
    }
if (index == 56) {
     return 765;
    }
if (index == 57) {
     return 757;
    }
if (index == 58) {
     return 764;
    }
if (index == 59) {
     return 760;
    }
if (index == 60) {
     return 748;
    }
if (index == 61) {
     return 732;
    }
if (index == 62) {
     return 748;
    }
if (index == 63) {
     return 768;
    }
if (index == 64) {
     return 756;
    }
if (index == 65) {
     return 773;
    }
if (index == 66) {
     return 759;
    }
if (index == 67) {
     return 773;
    }
if (index == 68) {
     return 739;
    }
if (index == 69) {
     return 772;
    }
if (index == 70) {
     return 767;
    }
if (index == 71) {
     return 773;
    }
if (index == 72) {
     return 777;
    }
if (index == 73) {
     return 777;
    }
if (index == 74) {
     return 765;
    }
if (index == 75) {
     return 789;
    }
if (index == 76) {
     return 784;
    }
if (index == 77) {
     return 785;
    }
if (index == 78) {
     return 763;
    }
if (index == 79) {
     return 749;
    }
if (index == 80) {
     return 756;
    }
if (index == 81) {
     return 762;
    }
if (index == 82) {
     return 744;
    }
if (index == 83) {
     return 730;
    }
if (index == 84) {
     return 746;
    }
if (index == 85) {
     return 723;
    }
if (index == 86) {
     return 741;
    }
if (index == 87) {
     return 745;
    }
if (index == 88) {
     return 723;
    }
if (index == 89) {
     return 755;
    }
if (index == 90) {
     return 741;
    }
if (index == 91) {
     return 755;
    }
if (index == 92) {
     return 762;
    }
if (index == 93) {
     return 764;
    }
if (index == 94) {
     return 758;
    }
if (index == 95) {
     return 762;
    }
if (index > 95) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1202;
    }
if (index == 1) {
     return 1177;
    }
if (index == 2) {
     return 1177;
    }
if (index == 3) {
     return 1181;
    }
if (index == 4) {
     return 1168;
    }
if (index == 5) {
     return 1175;
    }
if (index == 6) {
     return 1186;
    }
if (index == 7) {
     return 1190;
    }
if (index == 8) {
     return 1188;
    }
if (index == 9) {
     return 1191;
    }
if (index == 10) {
     return 1194;
    }
if (index == 11) {
     return 1184;
    }
if (index == 12) {
     return 1209;
    }
if (index == 13) {
     return 1196;
    }
if (index == 14) {
     return 1190;
    }
if (index == 15) {
     return 1201;
    }
if (index == 16) {
     return 1203;
    }
if (index == 17) {
     return 1200;
    }
if (index == 18) {
     return 1207;
    }
if (index == 19) {
     return 1219;
    }
if (index == 20) {
     return 1213;
    }
if (index == 21) {
     return 1195;
    }
if (index == 22) {
     return 1202;
    }
if (index == 23) {
     return 1202;
    }
if (index == 24) {
     return 1203;
    }
if (index == 25) {
     return 1207;
    }
if (index == 26) {
     return 1200;
    }
if (index == 27) {
     return 1212;
    }
if (index == 28) {
     return 1206;
    }
if (index == 29) {
     return 1205;
    }
if (index == 30) {
     return 1181;
    }
if (index == 31) {
     return 1190;
    }
if (index == 32) {
     return 1190;
    }
if (index == 33) {
     return 1201;
    }
if (index == 34) {
     return 1217;
    }
if (index == 35) {
     return 1195;
    }
if (index == 36) {
     return 1182;
    }
if (index == 37) {
     return 1188;
    }
if (index == 38) {
     return 1181;
    }
if (index == 39) {
     return 1204;
    }
if (index == 40) {
     return 1196;
    }
if (index == 41) {
     return 1199;
    }
if (index == 42) {
     return 1192;
    }
if (index == 43) {
     return 1194;
    }
if (index == 44) {
     return 1198;
    }
if (index == 45) {
     return 1188;
    }
if (index == 46) {
     return 1183;
    }
if (index == 47) {
     return 1201;
    }
if (index == 48) {
     return 1188;
    }
if (index == 49) {
     return 1192;
    }
if (index == 50) {
     return 1196;
    }
if (index == 51) {
     return 1207;
    }
if (index == 52) {
     return 1171;
    }
if (index == 53) {
     return 1202;
    }
if (index == 54) {
     return 1190;
    }
if (index == 55) {
     return 1192;
    }
if (index == 56) {
     return 1199;
    }
if (index == 57) {
     return 1186;
    }
if (index == 58) {
     return 1197;
    }
if (index == 59) {
     return 1199;
    }
if (index == 60) {
     return 1190;
    }
if (index == 61) {
     return 1197;
    }
if (index == 62) {
     return 1187;
    }
if (index == 63) {
     return 1203;
    }
if (index == 64) {
     return 1202;
    }
if (index == 65) {
     return 1182;
    }
if (index == 66) {
     return 1189;
    }
if (index == 67) {
     return 1202;
    }
if (index == 68) {
     return 1192;
    }
if (index == 69) {
     return 1196;
    }
if (index == 70) {
     return 1196;
    }
if (index == 71) {
     return 1212;
    }
if (index == 72) {
     return 1183;
    }
if (index == 73) {
     return 1193;
    }
if (index == 74) {
     return 1196;
    }
if (index == 75) {
     return 1199;
    }
if (index == 76) {
     return 1190;
    }
if (index == 77) {
     return 1203;
    }
if (index == 78) {
     return 1190;
    }
if (index == 79) {
     return 1196;
    }
if (index == 80) {
     return 1190;
    }
if (index == 81) {
     return 1189;
    }
if (index == 82) {
     return 1202;
    }
if (index == 83) {
     return 1198;
    }
if (index == 84) {
     return 1194;
    }
if (index == 85) {
     return 1202;
    }
if (index == 86) {
     return 1190;
    }
if (index == 87) {
     return 1207;
    }
if (index == 88) {
     return 1169;
    }
if (index == 89) {
     return 1186;
    }
if (index == 90) {
     return 1187;
    }
if (index == 91) {
     return 1201;
    }
if (index == 92) {
     return 1189;
    }
if (index == 93) {
     return 1195;
    }
if (index == 94) {
     return 1183;
    }
if (index == 95) {
     return 1199;
    }
if (index > 95) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/liber:010_' + imgStr + '/digitalImage';
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
br.numLeafs = 96;

// Book title and the URL used for the book title link
br.bookTitle= "Acts Passed by the Legislature, Republic of Liberia During the Sessions: 1857-1861";
br.bookAuthor= "Legislature, Republic of Liberia";
br.bookPub= "Moravia, Liberia: Herald Office, J.C. Minor, 1862";
br.bookKeyword= "Liberia<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Liberian Law";
br.bookUrl  = '/liberian/catalog/liber:010';

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
