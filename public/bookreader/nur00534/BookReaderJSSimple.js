//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 591;
    }
if (index == 1) {
     return 620;
    }
if (index == 2) {
     return 599;
    }
if (index == 3) {
     return 596;
    }
if (index == 4) {
     return 591;
    }
if (index == 5) {
     return 596;
    }
if (index == 6) {
     return 591;
    }
if (index == 7) {
     return 596;
    }
if (index == 8) {
     return 577;
    }
if (index == 9) {
     return 557;
    }
if (index == 10) {
     return 580;
    }
if (index == 11) {
     return 564;
    }
if (index == 12) {
     return 585;
    }
if (index == 13) {
     return 596;
    }
if (index == 14) {
     return 581;
    }
if (index == 15) {
     return 564;
    }
if (index == 16) {
     return 580;
    }
if (index == 17) {
     return 595;
    }
if (index == 18) {
     return 580;
    }
if (index > 18) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 918;
    }
if (index == 1) {
     return 947;
    }
if (index == 2) {
     return 933;
    }
if (index == 3) {
     return 932;
    }
if (index == 4) {
     return 927;
    }
if (index == 5) {
     return 932;
    }
if (index == 6) {
     return 927;
    }
if (index == 7) {
     return 932;
    }
if (index == 8) {
     return 1007;
    }
if (index == 9) {
     return 992;
    }
if (index == 10) {
     return 1005;
    }
if (index == 11) {
     return 977;
    }
if (index == 12) {
     return 989;
    }
if (index == 13) {
     return 993;
    }
if (index == 14) {
     return 1007;
    }
if (index == 15) {
     return 980;
    }
if (index == 16) {
     return 994;
    }
if (index == 17) {
     return 984;
    }
if (index == 18) {
     return 991;
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/nur:00534_' + imgStr + '/digitalImage';
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
br.bookTitle= "Statement of [illegible] / JJ.C. 1 / Between The Accession to Power (Early 1933) and the Outbreak of the War in Europe (Late 1939) the Nazi Conspirators Consolidated Their Control of Germany by Utilizing and Molding Its Political Machinery to Their Own Purposes ";
br.bookAuthor= "Major S. M. Peyser";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, Not dated";
br.bookKeyword= "Reichstag; Mein Kampf; Weimer Constitution; Reconstruction Law; Nuernberg Laws; Reich Election Law; Elections; Reich Governor; Land Government; Land officials; Land legislature; Reich Government; Reich Council; President; Chancellor; NSDAP; Civil servants; 'Purge Laws'; Communism; Marxism; Social Democracy; German Civil Service Law; Law for the Restoration of Professional Civil Service; Judiciary; judges; People's Court; Party Court; Hohnstein; Gestapo; State; Party; SA; SS";
br.bookUrl  = '/nuremberg/catalog/nur:00534';

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
