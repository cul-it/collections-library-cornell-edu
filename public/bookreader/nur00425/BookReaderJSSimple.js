//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 649;
    }
if (index == 1) {
     return 660;
    }
if (index == 2) {
     return 648;
    }
if (index == 3) {
     return 645;
    }
if (index == 4) {
     return 658;
    }
if (index == 5) {
     return 649;
    }
if (index == 6) {
     return 662;
    }
if (index == 7) {
     return 649;
    }
if (index == 8) {
     return 654;
    }
if (index == 9) {
     return 658;
    }
if (index == 10) {
     return 649;
    }
if (index == 11) {
     return 652;
    }
if (index == 12) {
     return 657;
    }
if (index == 13) {
     return 649;
    }
if (index == 14) {
     return 660;
    }
if (index == 15) {
     return 655;
    }
if (index == 16) {
     return 649;
    }
if (index == 17) {
     return 660;
    }
if (index == 18) {
     return 657;
    }
if (index > 18) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1010;
    }
if (index == 1) {
     return 944;
    }
if (index == 2) {
     return 912;
    }
if (index == 3) {
     return 884;
    }
if (index == 4) {
     return 928;
    }
if (index == 5) {
     return 888;
    }
if (index == 6) {
     return 898;
    }
if (index == 7) {
     return 862;
    }
if (index == 8) {
     return 866;
    }
if (index == 9) {
     return 869;
    }
if (index == 10) {
     return 862;
    }
if (index == 11) {
     return 864;
    }
if (index == 12) {
     return 868;
    }
if (index == 13) {
     return 862;
    }
if (index == 14) {
     return 870;
    }
if (index == 15) {
     return 866;
    }
if (index == 16) {
     return 862;
    }
if (index == 17) {
     return 870;
    }
if (index == 18) {
     return 868;
    }
if (index > 18) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/nur:00425_' + imgStr + '/digitalImage';
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
br.numLeafs = 19;

// Book title and the URL used for the book title link
br.bookTitle= " R &amp; A No. 3114.3 / Nazi Plans for Dominating Germany  and Europe / The Criminal Conspiracy Against the Jews / Office of Strategic  Services / Research and Analysis Branch / Draft for the War Crimes Staff /  Copy No. 56 / SECRET  ";
br.bookAuthor= "The author's name is not given.";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, 1945-08-13";
br.bookKeyword= "Crimes against humanity; Persecution of Jews;  Anti-Semitism; Mass murder; Nazi criminal conspiracy; Disenfranchisement;  Economic persecution; Religious persecution; Starvation; Forced labor;  Enslavement; Spoliation; Torture; Deportation; Executions; Concentrations  camps; Jewish Question; Lebensraum; Nazi racial ideology; Volksgenosse; 'Mein  Kampf'; 'Voelkischer Beobachter'; 'Das Schwarze Korps'; 'Der  Stuermer'; 'Der Angriff'";
br.bookUrl  = '/nuremberg/catalog/nur:00425';

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
