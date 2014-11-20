require 'nokogiri'

class Parser

  attr_accessor :doc

  def initialize(filename) 
    file = File.open(filename, "r")
    @doc = Nokogiri::XML(file) 
  end

  def getChildNodeContents(parentNode, childNode) 
    parentNode.xpath(sprintf('./%s',childNode)).each do |node|
      return node.content
    end
  end
  
  def getNode(parentNode)
     return parentNode.xpath()
  end

  def parseRecords(tagname)
    editorialdecl = ""
    editorialdecl_n = ""
    pubdate = ""
    pubplace = ""
    publisher = ""
    author = ""
    title = ""
    bibl_titletype = ""
    pubstmt_idno = ""
    pubstmt_idno_type = ""
    pubstmt_pubplace = ""
    pubstmt_publisher = ""
    extent = ""
    titlestmt_author = ""
    titlestmt_title = ""
    titlestmt_titletype = ""
    keywords = "" 
    pages = ""
    @doc.xpath(sprintf('//%s','TITLESTMT')).each do |header|
      header.xpath('.//TITLE').each do |tstmt|
        titlestmt_titletype = tstmt.values[0]       
      end
      titlestmt_title = getChildNodeContents(header,"TITLE")
      titlestmt_author = getChildNodeContents(header,"AUTHOR")
    end
    @doc.xpath(sprintf('//%s','FILEDESC')).each do |xtent|
      extent = getChildNodeContents(xtent, "EXTENT")
      pages = extent.split(' ')[0]
    end
    @doc.xpath(sprintf('//%s','PUBLICATIONSTMT')).each do |pubstmt|
      pubstmt_publisher = getChildNodeContents(pubstmt,"PUBLISHER")
      pubstmt_pubplace = getChildNodeContents(pubstmt,"PUBPLACE")
      pubstmt.xpath('.//IDNO').each do |idno|
        pubstmt_idno_type = idno.values[0]
      end
      pubstmt_idno = getChildNodeContents(pubstmt,"IDNO")
    end
    @doc.xpath(sprintf('//%s','BIBL')).each do |bibl|
       bibl.xpath('.//TITLE').each do |biblt|
         bibl_titletype = biblt.values[0]
      end
         title = getChildNodeContents(bibl, "TITLE")
         author = getChildNodeContents(bibl, "AUTHOR")
         publisher = getChildNodeContents(bibl, "PUBLISHER")
         pubplace = getChildNodeContents(bibl, "PUBPLACE")
         pubdate = getChildNodeContents(bibl, "DATE")
     end
    @doc.xpath(sprintf('//%s','ENCODINGDESC')).each do |ncode|
      ncode.xpath('.//EDITORIALDECL').each do |code|
        editorialdecl_n = code.values[0]
        editorialdecl = getChildNodeContents(code,"P")
      end
    end
    @doc.xpath(sprintf('//%s','KEYWORDS')).each do |k|
      keywords << k.content() << " "    
    end
    
    image_counter = 0
    record_counter = 0
       bookpid = "nur:" + ARGV[0]
     #  thumbnail = "http://hydrastg.library.cornell.edu/fedora/get/seapage:" + ARGV[0] + "_1/thumbnailImage"
       book = Book.create(pid: bookpid , titlestmt_titletype: titlestmt_titletype, titlestmt_title: titlestmt_title, titlestmt_author: titlestmt_author, extent: extent, pubstmt_publisher: pubstmt_publisher, pubstmt_pubplace: pubstmt_pubplace, pubstmt_idno_type: pubstmt_idno_type, pubstmt_idno: pubstmt_idno, bibl_titletype: bibl_titletype, title: title, author: author, publisher: publisher, pubplace: pubplace, pubdate: pubdate, subject: "East Asia", editorialdecl_n: editorialdecl_n, editorialdecl: editorialdecl, keywords: keywords)
#puts pages
       for i in 1..pages.to_i
         num = i.to_s
         pagetext = "info:fedora/seapage:" + ARGV[0] + "_" + num 
         book.add_relationship(:has_pages, pagetext, versionable=false)
       end 
       book.save
       book.to_solr
      puts bookpid
  end
end
inputparam = ARGV[0]
bibid = ARGV[1]
if inputparam.nil?
  puts "You must pass in a record ID"
  exit
end
data = Parser.new("/users/jac244/" + inputparam + ".xml")
data.parseRecords("HEADER")

