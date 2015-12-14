//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 639;
    }
if (index == 1) {
     return 627;
    }
if (index == 2) {
     return 643;
    }
if (index == 3) {
     return 628;
    }
if (index == 4) {
     return 645;
    }
if (index == 5) {
     return 626;
    }
if (index == 6) {
     return 640;
    }
if (index == 7) {
     return 630;
    }
if (index == 8) {
     return 642;
    }
if (index == 9) {
     return 633;
    }
if (index == 10) {
     return 633;
    }
if (index == 11) {
     return 635;
    }
if (index == 12) {
     return 637;
    }
if (index == 13) {
     return 632;
    }
if (index == 14) {
     return 637;
    }
if (index == 15) {
     return 630;
    }
if (index == 16) {
     return 637;
    }
if (index == 17) {
     return 633;
    }
if (index == 18) {
     return 639;
    }
if (index == 19) {
     return 635;
    }
if (index == 20) {
     return 646;
    }
if (index == 21) {
     return 634;
    }
if (index == 22) {
     return 632;
    }
if (index == 23) {
     return 630;
    }
if (index == 24) {
     return 633;
    }
if (index == 25) {
     return 638;
    }
if (index == 26) {
     return 635;
    }
if (index == 27) {
     return 626;
    }
if (index == 28) {
     return 633;
    }
if (index == 29) {
     return 636;
    }
if (index == 30) {
     return 628;
    }
if (index == 31) {
     return 638;
    }
if (index == 32) {
     return 629;
    }
if (index == 33) {
     return 626;
    }
if (index == 34) {
     return 634;
    }
if (index == 35) {
     return 636;
    }
if (index == 36) {
     return 629;
    }
if (index == 37) {
     return 629;
    }
if (index == 38) {
     return 626;
    }
if (index == 39) {
     return 630;
    }
if (index == 40) {
     return 633;
    }
if (index == 41) {
     return 629;
    }
if (index == 42) {
     return 631;
    }
if (index == 43) {
     return 631;
    }
if (index == 44) {
     return 634;
    }
if (index == 45) {
     return 628;
    }
if (index == 46) {
     return 635;
    }
if (index == 47) {
     return 637;
    }
if (index == 48) {
     return 629;
    }
if (index == 49) {
     return 637;
    }
if (index == 50) {
     return 638;
    }
if (index == 51) {
     return 631;
    }
if (index == 52) {
     return 626;
    }
if (index == 53) {
     return 635;
    }
if (index == 54) {
     return 635;
    }
if (index == 55) {
     return 628;
    }
if (index == 56) {
     return 629;
    }
if (index == 57) {
     return 630;
    }
if (index == 58) {
     return 630;
    }
if (index == 59) {
     return 633;
    }
if (index == 60) {
     return 626;
    }
if (index == 61) {
     return 629;
    }
if (index == 62) {
     return 633;
    }
if (index == 63) {
     return 633;
    }
if (index == 64) {
     return 632;
    }
if (index == 65) {
     return 629;
    }
if (index == 66) {
     return 629;
    }
if (index == 67) {
     return 633;
    }
if (index == 68) {
     return 629;
    }
if (index == 69) {
     return 635;
    }
if (index == 70) {
     return 626;
    }
if (index == 71) {
     return 627;
    }
if (index == 72) {
     return 641;
    }
if (index == 73) {
     return 628;
    }
if (index == 74) {
     return 631;
    }
if (index == 75) {
     return 632;
    }
if (index == 76) {
     return 627;
    }
if (index == 77) {
     return 630;
    }
if (index == 78) {
     return 631;
    }
if (index == 79) {
     return 632;
    }
if (index == 80) {
     return 627;
    }
if (index == 81) {
     return 627;
    }
if (index == 82) {
     return 627;
    }
if (index == 83) {
     return 630;
    }
if (index == 84) {
     return 632;
    }
if (index == 85) {
     return 630;
    }
if (index == 86) {
     return 627;
    }
if (index == 87) {
     return 629;
    }
if (index == 88) {
     return 627;
    }
if (index == 89) {
     return 630;
    }
if (index == 90) {
     return 632;
    }
if (index == 91) {
     return 631;
    }
if (index == 92) {
     return 629;
    }
if (index == 93) {
     return 632;
    }
if (index == 94) {
     return 627;
    }
if (index == 95) {
     return 627;
    }
if (index == 96) {
     return 635;
    }
if (index == 97) {
     return 630;
    }
if (index == 98) {
     return 632;
    }
if (index == 99) {
     return 633;
    }
if (index == 100) {
     return 627;
    }
if (index == 101) {
     return 1200;
    }
if (index == 102) {
     return 640;
    }
if (index == 103) {
     return 575;
    }
if (index == 104) {
     return 590;
    }
if (index == 105) {
     return 577;
    }
if (index == 106) {
     return 591;
    }
if (index == 107) {
     return 587;
    }
if (index == 108) {
     return 586;
    }
if (index == 109) {
     return 1210;
    }
if (index == 110) {
     return 574;
    }
if (index == 111) {
     return 574;
    }
if (index > 111) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 823;
    }
if (index == 1) {
     return 814;
    }
if (index == 2) {
     return 826;
    }
if (index == 3) {
     return 815;
    }
if (index == 4) {
     return 828;
    }
if (index == 5) {
     return 814;
    }
if (index == 6) {
     return 825;
    }
if (index == 7) {
     return 817;
    }
if (index == 8) {
     return 826;
    }
if (index == 9) {
     return 819;
    }
if (index == 10) {
     return 819;
    }
if (index == 11) {
     return 820;
    }
if (index == 12) {
     return 822;
    }
if (index == 13) {
     return 818;
    }
if (index == 14) {
     return 822;
    }
if (index == 15) {
     return 817;
    }
if (index == 16) {
     return 822;
    }
if (index == 17) {
     return 819;
    }
if (index == 18) {
     return 823;
    }
if (index == 19) {
     return 821;
    }
if (index == 20) {
     return 829;
    }
if (index == 21) {
     return 819;
    }
if (index == 22) {
     return 818;
    }
if (index == 23) {
     return 816;
    }
if (index == 24) {
     return 819;
    }
if (index == 25) {
     return 823;
    }
if (index == 26) {
     return 821;
    }
if (index == 27) {
     return 814;
    }
if (index == 28) {
     return 819;
    }
if (index == 29) {
     return 821;
    }
if (index == 30) {
     return 815;
    }
if (index == 31) {
     return 823;
    }
if (index == 32) {
     return 816;
    }
if (index == 33) {
     return 814;
    }
if (index == 34) {
     return 819;
    }
if (index == 35) {
     return 821;
    }
if (index == 36) {
     return 816;
    }
if (index == 37) {
     return 816;
    }
if (index == 38) {
     return 814;
    }
if (index == 39) {
     return 816;
    }
if (index == 40) {
     return 819;
    }
if (index == 41) {
     return 816;
    }
if (index == 42) {
     return 818;
    }
if (index == 43) {
     return 818;
    }
if (index == 44) {
     return 820;
    }
if (index == 45) {
     return 815;
    }
if (index == 46) {
     return 821;
    }
if (index == 47) {
     return 822;
    }
if (index == 48) {
     return 816;
    }
if (index == 49) {
     return 822;
    }
if (index == 50) {
     return 822;
    }
if (index == 51) {
     return 818;
    }
if (index == 52) {
     return 814;
    }
if (index == 53) {
     return 821;
    }
if (index == 54) {
     return 820;
    }
if (index == 55) {
     return 815;
    }
if (index == 56) {
     return 816;
    }
if (index == 57) {
     return 817;
    }
if (index == 58) {
     return 816;
    }
if (index == 59) {
     return 819;
    }
if (index == 60) {
     return 814;
    }
if (index == 61) {
     return 816;
    }
if (index == 62) {
     return 819;
    }
if (index == 63) {
     return 819;
    }
if (index == 64) {
     return 818;
    }
if (index == 65) {
     return 816;
    }
if (index == 66) {
     return 816;
    }
if (index == 67) {
     return 819;
    }
if (index == 68) {
     return 816;
    }
if (index == 69) {
     return 820;
    }
if (index == 70) {
     return 814;
    }
if (index == 71) {
     return 814;
    }
if (index == 72) {
     return 824;
    }
if (index == 73) {
     return 815;
    }
if (index == 74) {
     return 817;
    }
if (index == 75) {
     return 818;
    }
if (index == 76) {
     return 814;
    }
if (index == 77) {
     return 816;
    }
if (index == 78) {
     return 817;
    }
if (index == 79) {
     return 818;
    }
if (index == 80) {
     return 814;
    }
if (index == 81) {
     return 814;
    }
if (index == 82) {
     return 814;
    }
if (index == 83) {
     return 816;
    }
if (index == 84) {
     return 818;
    }
if (index == 85) {
     return 816;
    }
if (index == 86) {
     return 814;
    }
if (index == 87) {
     return 815;
    }
if (index == 88) {
     return 814;
    }
if (index == 89) {
     return 816;
    }
if (index == 90) {
     return 818;
    }
if (index == 91) {
     return 817;
    }
if (index == 92) {
     return 816;
    }
if (index == 93) {
     return 818;
    }
if (index == 94) {
     return 814;
    }
if (index == 95) {
     return 814;
    }
if (index == 96) {
     return 820;
    }
if (index == 97) {
     return 816;
    }
if (index == 98) {
     return 818;
    }
if (index == 99) {
     return 818;
    }
if (index == 100) {
     return 814;
    }
if (index == 101) {
     return 803;
    }
if (index == 102) {
     return 824;
    }
if (index == 103) {
     return 815;
    }
if (index == 104) {
     return 825;
    }
if (index == 105) {
     return 817;
    }
if (index == 106) {
     return 816;
    }
if (index == 107) {
     return 823;
    }
if (index == 108) {
     return 823;
    }
if (index == 109) {
     return 817;
    }
if (index == 110) {
     return 814;
    }
if (index == 111) {
     return 814;
    }
if (index > 111) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/nur:00688_' + imgStr + '/digitalImage';
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
br.numLeafs = 110;

// Book title and the URL used for the book title link
br.bookTitle= "The Reich Ministry of Armament and War Production (Speer Ministry)  / Foreign Economic Administration / German-Austrian Branch / Copy No. 310/SECRET";
br.bookAuthor= "The author's name is not given. The translator of the respective appendices (German-language originals) is not named.";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, 1945-02-00";
br.bookKeyword= "Speer Ministry; Ministry of Armament and War Production; Office of War Economy and Armament; Four Year Plan Administration; Ministry of Economics; Main Committees; Rings; Production Main Committees; Reichsstellen; Steered economy; Bewirtschaftungsstellen; Self-administrative agencies; Unified economic control; Reichsvereinigungen; Reich Association; Concentration decree; Warenverkehrsordnung; Commodity Control decree; Simplification decrees; Planning Office; Central Office; Armament Bureau; Generalreferat; Technical Bureau; Production Bureau; Raw Materials Bureau; Building Bureau; Power Supply Bureau; Armament Inspections; Labor Allocation Engineer; Production Spheres; Volkische Beobachter; Deutsche Volkswirtschaft";
br.bookUrl  = '/nuremberg/catalog/nur:00688';

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
