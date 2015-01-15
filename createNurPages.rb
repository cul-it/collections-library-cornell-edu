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
    keywords = ""
    titlestmt_titletype = ""
    titlestmt_title = ""
    titlestmt_author = ""
    extent = ""
    pages = ""
    pubstmt_publisher = ""
    pubstmt_pubplace = ""
    pubstmt_idno_type = ""
    pubstmt_idno = ""
    bibl_titletype = ""
    note = ""
    vol = ""
    section = ""
    dname = ""
    subdiv = ""
    part = ""
    lang = ""
    author_b = ""
    witness = ""
    wit_b = ""
    onames = ""
    odates = ""
    abstract = ""
    supages = ""
    editorialdecl_n = ""
    editorialdecl = ""
    
    image_format_values = [ 'photographs', 'engravings', 'engravings (color)', 'drawings', 'drawings (color)', 'tables', 'etchings', 'portraits', 'maps',
                             'maps (color)', 'paintings', 'plans', 'watercolors', 'sketches', 'woodcuts', 'postcards', 'diagrams', 'lithographs', 'timetables',
                             'photocollages', 'plates', 'plates (color)', 'symbols', 'genealogical tables', 'lists', 'sculptures' ]
    title = @doc.xpath(sprintf('//%s', 'TITLE'))[0].content
    author = @doc.xpath(sprintf('//%s', 'AUTHOR'))[0].content
    publisher = @doc.xpath(sprintf('//%s', 'BIBL//PUBLISHER'))[0].content
    pubplace = @doc.xpath(sprintf('//%s', 'BIBL//PUBPLACE'))[0].content
    pubdate = @doc.xpath(sprintf('//%s', 'BIBL//DATE'))[0].content
    puts title
    puts author    
    puts publisher
    puts pubplace
    puts pubdate
#    puts "START OF PAGES"
    head = ""
    
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
         note = getChildNodeContents(bibl, "NOTE")
         vol = getChildNodeContents(bibl, "vol")
         section = getChildNodeContents(bibl, "section")
         dname = getChildNodeContents(bibl, "dname")
         subdiv = getChildNodeContents(bibl, "subdiv")
         part = getChildNodeContents(bibl, "part")
         lang = getChildNodeContents(bibl, "lang")
         author_b = getChildNodeContents(bibl, "author_b")
         witness = getChildNodeContents(bibl, "witness")
         wit_b = getChildNodeContents(bibl, "wit_b")
         onames = getChildNodeContents(bibl, "onames")
         odates = getChildNodeContents(bibl, "odates")
         abstract = getChildNodeContents(bibl, "abstract")
         supages = getChildNodeContents(bibl, "supages")
         
         
     end
    @doc.xpath(sprintf('//%s','ENCODINGDESC')).each do |ncode|
      ncode.xpath('.//EDITORIALDECL').each do |code|
        editorialdecl_n = code.values[0]
        editorialdecl = getChildNodeContents(code,"P")
      end
    end
    @doc.xpath(sprintf('//%s','KEYWORDS')).each do |k|
   #   keywords << k.content() << " "
       k.xpath('.//TERM').each do |term|
         keywords << term.content()
       end    
    end

    
    
    image_counter = 0
    record_counter = 0
    @doc.xpath(sprintf('//%s',tagname)).each do |record|
#              puts
#              puts "START OF DIV1 PAGES"
#              puts
            image_ref = " "
            image_seq = " "
            image_res = " "
            image_fmt = " "
            image_dim = " "
            image_ftr = " "
            image_n = " "
            image_format = " "
            image_geo = " "
            image_date = " "
            image_keyword = " "
            image_caption = " "
            image_ocr = " "
            
       
       node = record.values[0].split(':')[1]
       node_type = record.values[1]
#       puts "NODE = " + node + " TYPE = " + node_type
#       head = record.xpath('HEAD')
       head = getChildNodeContents(record,"HEAD")
#            head = head.gsub!('\"','')
       if head == 0 or head.nil?
         head = ""
#       else
#        head = head.gsub!('\"', '')
       end
        
       epb1 = getChildNodeContents(record,"EPB1")
   #    puts head      
       epbs1 = record.xpath('.//EPB1')
       epbs1count = 0
               image_keyword_add = []
       record.xpath('PB1').each do |pb1|
#            puts 
#            puts "START OF DIV1 IMAGE INFO"
#            puts
        #    puts pb1.keys[0] + " " + pb1.values[0] + " " + pb1.keys[1] + " = " + pb1.values[1] + " " + pb1.keys[2] + " = " + pb1.values[2]
        #    puts pb1.keys[3] + " " + pb1.values[3] + " " + pb1.keys[4] + " = " + pb1.values[4] + " " + pb1.keys[5] + " = " + pb1.values[5]
        #  puts epbs1[epbs1count].content()
#            head = getChildNodeContents(pb1,"HEAD")
         #   pb1.values.each do |pika|
         #   puts "pb1 values = " + pika
         #   end
            image_ref = " "
            image_seq = " "
            image_res = " "
            image_fmt = " "
            image_dim = " "
            image_ftr = " "
            image_n = " "
            image_ref = pb1.values[0]
            image_seq = pb1.values[1]
            image_res = pb1.values[2]
            image_fmt = pb1.values[3]
            image_dim = pb1.values[4]
            image_ftr = pb1.values[5]
            image_n = pb1.values[6]

            image_format = ""
            image_geo = ""
            image_date = ""
            image_ethnic = ""
            image_keyword = ""
            image_caption = ""
            image_ocr = ""

          epbs1[epbs1count].xpath('.//P').each do |pee1|
          #   puts "Ralph" + pee1.content()
               test = pee1.content()
               case test
                when /^Image\ format/i
                  image_format = pee1.content().split(':')[1]
                  image_format = image_format.strip
                  if !image_format.nil? and (image_format.include? ";" or image_format.include? "|")
                    if image_format.include? ";"
                      image_format = image_format.split(';')
                    end
                    if image_format.include? "|"
                      image_format = image_format.split("|")
                    end
                    image_format = image_format.collect{|x| x.strip}
                    image_format = image_format.collect{|x| x.downcase}
                    image_format = image_format.collect{|x| (x == "photos" or x == "phots" or x == "photos ") ? "photographs" : x}
                    image_format = image_format.collect{|x| (x == "engraving") ? "engravings" : x}
                    image_format = image_format.collect{|x| (x == "coloredengravings") ? "engravings (color)" : x}
                    image_format = image_format.collect{|x| (x == "drawing") ? "drawings" : x}
                    image_format = image_format.collect{|x| (x == "drawings--color" or x == "coloreddrawings") ? "drawings (color)" : x}
                    image_format = image_format.collect{|x| (x == "table") ? "tables" : x}
                    image_format = image_format.collect{|x| (x == "etchigns" or x == "etching") ? "etchings" : x}
                    image_format = image_format.collect{|x| (x == "portrait") ? "portraits" : x}
                    image_format = image_format.collect{|x| (x == "map") ? "maps" : x}
                    image_format = image_format.collect{|x| (x == "coloredmaps") ? "maps (color)" : x}
                    image_format = image_format.collect{|x| (x == "painting") ? "paintings" : x}
                    image_format = image_format.collect{|x| (x == "plan") ? "plans" : x}
                    image_format = image_format.collect{|x| (x == "diagram") ? "diagrams" : x}
                    image_format = image_format.collect{|x| (x == "coloredplates") ? "plates (color)" : x}
                    image_format = image_format.collect{|x| (x == "genealogicaltables") ? "genealogical tables" : x}
                    image_format.collect{|x| (!image_format_values.include(x)) ? image_keyword_add << x : nil}
                    image_format = image_format.reject! { |x| !image_format_values.include?(x)}
                   puts "line 143 image_keyword_add begin"
                   puts image_keyword_add
                   puts "image_keyword_add end"
                      puts "here is "
                      puts image_keyword_add
                      puts "image_keyword_add"
                   puts image_format
                  else
                    image_format = image_format.strip
                    image_format = image_format.downcase
                    if image_format == "photos" or image_format == "phots" or image_format == "photos " 
                       image_format = "photographs" 
                    end
                    if image_format == "engraving"
                      image_format = "engravings"
                    end
                    if image_format == "coloredengravings"
                      image_format = "engravings (color)"
                    end
                    if image_format == "drawing"
                      image_format = "drawings"
                    end
                    if image_format == "drawings--color" or image_format == "coloreddrawings"
                      image_format = "drawings (color)"
                    end
                    if image_format == "table"
                      image_format = "tables"
                    end
                    if image_format == "etchigns" or image_format == "etching"
                      image_format = "etchings"
                    end
                    if image_format == "portrait"
                      image_format = "portraits"
                    end
                    if image_format == "map"
                      image_format = "maps"
                    end
                    if image_format == "coloredmaps"
                      image_format = "maps (color)"
                    end
                    if image_format == "painting"
                      image_format = "paintings"
                    end
                    if image_format == "plan"
                      image_format = "plans"
                    end
                    if image_format == "diagram"
                      image_format = "diagrams"
                    end
                    if image_format == "coloredplates"
                      image_format == "plates (color)"
                    end
                    if image_format == "genealogicaltables"
                      image_format = "genealogical tables"
                    end
                    if !image_format_values.include?(image_format)
                      image_keyword_add << image_format
                      puts "here is "
                      puts image_keyword_add
                      puts "image_keyword_add"
                      image_format = ""
                    end
                    puts "line 197 image_keyword_add begin"  
                    puts image_keyword_add  
                    puts "image_keyword_add end"
                    puts image_format
                  end
                 when /^Image\ geographic/i
                  image_geo = pee1.content().split(':')[1]
                when /^Image\ Date/i
                  image_date = pee1.content().split(':')[1]
                when /^Image Ethnic/i
                  image_ethnic = pee1.content().split(':')[1]
                  image_ethnic = image_ethnic.strip
                  if !image_ethnic.nil? and (image_ethnic.include? ";" or image_ethnic.include? "|")
                    if image_ethnic.include? ";"
                      image_ethnic = image_ethnic.split(';')
                    end
                    if image_ethnic.include? "|"
                      image_ethnic = image_ethnic.split("|")
                    end
                    image_ethnic = image_ethnic.collect{|x| x.strip}
                   puts image_ethnic
                  else
                    image_ethnic = image_ethnic.strip
                    puts image_ethnic
                  end
              #  when /^Image ethnic/i
              #    image_ethnic = pee1.content()#.split(':')[1]
                when /^Image keyword/i
                  image_keyword = pee1.content().split(':')[1] #.strip.gsub!(';','')
                  image_keyword = image_keyword.strip
                  if !image_keyword.nil? and (image_keyword.include? ";" or image_keyword.include? "|")
                    if image_keyword.include? ";"
                      image_keyword = image_keyword.split(';')
                    end
                    if image_keyword.include? "|"
                      image_keyword = image_keyword.split("|")
                    end
                    image_keyword = image_keyword.collect{|x| x.strip}
                    image_keyword = image_keyword.concat image_keyword_add
                   puts image_keyword
                  else
                    image_keyword = image_keyword.strip
                    if image_keyword_add.size > 0
                      image_keyword = image_keyword_add << image_keyword
                    end
                    puts image_keyword
                  end
                  
#                when /^Image\ caption/i
#                  image_caption = pee1.content().split(':',2)[1]
#                when /^Image\ Keyword/i
#                  image_keyword = pee1.content().split(':')[1].gsub!(';','')
#                  image_keyword = image_keyword.gsub!(' ', '')
                when /^Image\ Caption/i
                  image_caption = pee1.content().split(':',2)[1] #.gsub!('\"',' ')
                when /^No\ valid/i
                  image_ocr = pee1.content() #.split(':')[1]
                else
                  image_ocr = pee1.content()
                end
    
          end
 #          if head.nil? or head == 0
 #            head = " "
 #          end
           if image_caption.nil?
             image_caption = " "
           end
           if image_keyword.nil?
             image_keyword = " "
           end
           if image_ocr.nil?
             image_ocr = " "
           end
          epbs1count = epbs1count + 1
          case image_seq.length
          when 1
            image_idno = "000" + image_seq
          when 2
            image_idno = "00" + image_seq
          when 3
            image_idno = "0" + image_seq
          end
    pagepid = "nur:" + ARGV[0] + "_" + image_seq
          thumbnail = "http://hydrastg.library.cornell.edu/fedora/get/" + pagepid + "/thumbnailImage"
#    puts  " page = Page.create(pid: \"" + pagepid + "\", book_id: \"sea:" + ARGV[0] + "\", node: \"" + node + "\", node_type: \"" + 
#          node_type + "\", head: \"" + head + "\", image_ref: \"" + image_ref + "\", image_seq: \"" + image_seq + 
#          "\", image_res: \"" + image_res + "\", image_fmt: \"" + image_fmt + "\", image_ftr: \"" + image_ftr + 
#          "\", image_n: \"" + image_n + "\", image_format: \"" + image_format + "\", image_geo: \"" + image_geo + 
#          "\", image_date: \"" + image_date + "\", image_ethnic: \"" + image_ethnic + "\", image_keyword: \"" + image_keyword + "\", image_caption: \"" + 
#          image_caption + "\", image_ocr: \"" + image_ocr + "\")"
#          puts "Got Here before page.create"
           page = Page.create(pid: pagepid, book_id: "nur:" + ARGV[0], book_title: title, node: node, node_type: node_type, 
                              head: head, image_ref: image_ref, image_seq: image_seq, image_res: image_res, image_fmt: image_fmt, 
                              image_dim: image_dim, image_ftr: image_ftr, image_n: image_n, image_format: image_format,  
                              image_ocr: image_ocr, bibid: ARGV[1], image: thumbnail,
                              titlestmt_titletype: titlestmt_titletype, titlestmt_title: titlestmt_title, 
                              titlestmt_author: titlestmt_author, extent: extent, pubstmt_publisher: pubstmt_publisher, 
                              pubstmt_pubplace: pubstmt_pubplace, pubstmt_idno_type: pubstmt_idno_type, pubstmt_idno: pubstmt_idno, 
                              bibl_titletype: bibl_titletype, title: title, author: author, publisher: publisher, pubplace: pubplace, 
                              pubdate: pubdate, note: note, vol: vol, section: section, dname: dname, subdiv: subdiv, part: part,
                              lang: lang, author_b: author_b, witness: witness, wit_b: wit_b, onames: onames, odates: odates,
                              abstract: abstract, supages: supages, subject: "Nuremberg", editorialdecl_n: editorialdecl_n, 
                              editorialdecl: editorialdecl, keywords: keywords)
   #        puts "Got Here"
           page.add_relationship(:is_page_of, "info:fedora/nur:" + ARGV[0], versionable=false )
   #        puts "Here too"
           page.digitalImage.content = File.open("/cul/data/collections/nur/nur" + ARGV[0] +"/jpg/" + image_ref) 
           page.thumbnailImage.content = File.open("/cul/data/collections/nur/nur" + ARGV[0] +"/thumbs/" + image_ref) 
  #         puts "Hey Man"
            image_format = ""
            image_geo = ""
            image_date = ""
            image_ethnic = ""
            image_keyword = ""
            image_caption = ""
            image_ocr = ""
            head = ""
#              puts
#              puts "END OF IMAGE INFO"
#            puts image_seq
            page.save
            page.to_solr
            puts "Page " + image_seq + " in " + ARGV[0] + " saved "
       end
      epbcount = 0
      @div2 = Nokogiri::XML::fragment(record.xpath('.//DIV2'))
       image_caption = ""
       image_ocr = ""
       @div2.xpath('.//DIV2').each do |div3|
#              puts
#              puts "START OF DIV2"
#              puts
         image_ref = " "
         image_seq = " "
         image_res = " "
         image_fmt = " "
         image_dim = " "
         image_ftr = " "
         image_n = " "
         image_format = ""
         image_geo = ""
         image_date = ""
         image_ethnic = ""
         image_keyword = ""
         image_caption = ""
         image_ocr = ""

         node = div3.values[0].split(':')[1]
         node_type = div3.values[1]
#         puts "NODE = " + node + " TYPE = " + node_type
         head2 = getChildNodeContents(div3,"HEAD")
    #        head2 = head2.gsub!('\"','')
#         puts head2
         if head2 == 0
           head2 = " "
         end
         epbs = div3.xpath('EPB')
         image_format = ""
         image_geo = ""
         image_date = ""
         image_ethnic = ""
         image_keyword = ""
         image_caption = ""
         image_ocr = ""
            
         epbcount = 0
               image_keyword_add = []
         div3.xpath('.//PB').each do |pb|
#            puts 
#            puts "START OF IMAGE INFO"
#            puts
            image_ref = " "
            image_seq = " "
            image_res = " "
            image_fmt = " "
            image_dim = " "
            image_ftr = " "
            image_n = " "
            image_ref = pb.values[0]
            image_seq = pb.values[1]
            image_res = pb.values[2]
            image_fmt = pb.values[3]
            image_dim = pb.values[4]
            image_ftr = pb.values[5]
            image_n = pb.values[6]
#              puts pb.keys[0] + " " + pb.values[0] + " " + pb.keys[1] + " = " + pb.values[1] + " " + pb.keys[2] + " = " + pb.values[2]
#              puts pb.keys[3] + " " + pb.values[3] + " " + pb.keys[4] + " = " + pb.values[4] + " " + pb.keys[5] + " = " + pb.values[5]
#              puts pb.keys[6] + " " + pb.values[6]
             ## puts pb
        #    puts div3.xpath('.//EPB').count
        #    puts div3.xpath('.//P').count
            div4 = div3.xpath('.//EPB')
          #  puts div4[0].content()
          #  marmaduke = getChildNodeContents(div3,"P")
          #  div3.xpath('.//P').each do |pee|
            div4[epbcount].xpath('.//P').each do |pee|
#              puts "ED " + pee.content()
              test = pee.content()
              case test
               when /^Image format/i
#                 puts "MOTHERFUQUA!!!!!!!!!!!!!!!!!!"
                 image_format = pee.content().split(':')[1]
                  image_format = image_format.strip
                  if !image_format.nil? and (image_format.include? ";" or image_format.include? "|")
                    if image_format.include? ";"
                      image_format = image_format.split(';')
                    end
                    if image_format.include? "|"
                      image_format = image_format.split("|")
                    end
                    image_format = image_format.collect{|x| x.strip}
                    image_format = image_format.collect{|x| x.downcase}
                    image_format = image_format.collect{|x| (x == "photos" or x == "phots" or x == "photos ") ? "photographs" : x}
                    image_format = image_format.collect{|x| (x == "engraving") ? "engravings" : x}
                    image_format = image_format.collect{|x| (x == "coloredengravings") ? "engravings (color)" : x}
                    image_format = image_format.collect{|x| (x == "drawing") ? "drawings" : x}
                    image_format = image_format.collect{|x| (x == "drawings--color" or x == "coloreddrawings") ? "drawings (color)" : x}
                    image_format = image_format.collect{|x| (x == "table") ? "tables" : x}
                    image_format = image_format.collect{|x| (x == "etchigns" or x == "etching") ? "etchings" : x}
                    image_format = image_format.collect{|x| (x == "portrait") ? "portraits" : x}
                    image_format = image_format.collect{|x| (x == "map") ? "maps" : x}
                    image_format = image_format.collect{|x| (x == "coloredmaps") ? "maps (color)" : x}
                    image_format = image_format.collect{|x| (x == "painting") ? "paintings" : x}
                    image_format = image_format.collect{|x| (x == "plan") ? "plans" : x}
                    image_format = image_format.collect{|x| (x == "diagram") ? "diagrams" : x}
                    image_format = image_format.collect{|x| (x == "coloredplates") ? "plates (color)" : x}
                    image_format = image_format.collect{|x| (x == "genealogicaltables") ? "genealogical tables" : x}
                    image_format.collect{|x| (!image_format_values.include?(x)) ? image_keyword_add << x : nil}
                    image_format = image_format.reject! { |x| !image_format_values.include?(x)}
                   puts "Line 413 image_keyword_add begin"
                   puts image_keyword_add
                   puts "image_keyword_add end"
                   puts image_format
                  else
                    image_format = image_format.strip
                    image_format = image_format.downcase
                    if image_format == "photos" or image_format == "phots" or image_format == "photos " 
                       image_format = "photographs" 
                    end
                    if image_format == "engraving"
                      image_format = "engravings"
                    end
                    if image_format == "coloredengravings"
                      image_format = "engravings (color)"
                    end
                    if image_format == "drawing"
                      image_format = "drawings"
                    end
                    if image_format == "drawings--color" or image_format == "coloreddrawings"
                      image_format = "drawings (color)"
                    end
                    if image_format == "table"
                      image_format = "tables"
                    end
                    if image_format == "etchigns" or image_format == "etching"
                      image_format = "etchings"
                    end
                    if image_format == "portrait"
                      image_format = "portraits"
                    end
                    if image_format == "map"
                      image_format = "maps"
                    end
                    if image_format == "coloredmaps"
                      image_format = "maps (color)"
                    end
                    if image_format == "painting"
                      image_format = "paintings"
                    end
                    if image_format == "plan"
                      image_format = "plans"
                    end
                    if image_format == "diagram"
                      image_format = "diagrams"
                    end
                    if image_format == "coloredplates"
                      image_format == "plates (color)"
                    end
                    if image_format == "genealogicaltables"
                      image_format = "genealogical tables"
                    end
                    if !image_format_values.include?(image_format)
                      image_keyword_add << image_format
                      image_format = ""
                    end
                    puts "line 468 image_keyword_add begin" 
                    puts image_keyword_add
                    puts "image_keyword_add end"
                    puts image_format
                  end
               when /^Image\ geographic/i
                 image_geo = pee.content().split(':')[1]
               when /^Image\ Date/i
                 image_date = pee.content().split(':')[1]
               when /^Image ethnic/i
                 image_ethnic = pee.content().split(':')[1]
                  image_ethnic = image_ethnic.strip
                  if !image_ethnic.nil? and (image_ethnic.include? ";" or image_ethnic.include? "|")
                    if image_ethnic.include? ";"
                      image_ethnic = image_ethnic.split(';')
                    end
                    if image_ethnic.include? "|"
                      image_ethnic = image_ethnic.split("|")
                    end
                    image_ethnic = image_ethnic.collect{|x| x.strip}
                   puts image_ethnic
                  else
                    image_ethnic = image_ethnic.strip
                    puts image_ethnic
                  end
#               when /^Image Ethnic/i
#                 image_ethnic = pee.content().split(':')[1]
               when /^Image\ keyword/i
#                 image_keyword = pee.content().split(':')[1].gsub!(';','')
                  image_keyword = pee.content().split(':')[1] #.strip.gsub!(';','')
                  image_keyword = image_keyword.strip
                  if !image_keyword.nil? and (image_keyword.include? ";" or image_keyword.include? "|")
                    if image_keyword.include? ";"
                      image_keyword = image_keyword.split(';')
                    end
                    if image_keyword.include? "|"
                      image_keyword = image_keyword.split("|")
                    end
                    image_keyword = image_keyword.collect{|x| x.strip}
                    image_keyword = image_keyword.concat image_keyword_add
                   puts image_keyword
                  else
                    image_keyword = image_keyword.strip
                    if image_keyword_add.size > 0
                      puts "here is "
                      puts image_keyword_add
                      puts "image_keyword_add"
                      image_keyword = image_keyword_add << image_keyword
                    end
                    puts image_keyword
                  end
               when /^Image\ caption/i
                 image_caption = pee.content().split(':')[1]
#               when /^Image\ Keyword/i
#                 image_keyword = pee.content().split(':')[1] #.strip.gsub!(';','')
#               when /^Image\ Caption/i
#                 image_caption = pee.content().split(':',2)[1] #.gsub!('\"',' ')
 #             puts image_caption
               when /^No\ valid/i
                 image_ocr = pee.content() # .split(':')[1]
               else
                 image_ocr = pee.content()
              end
            
#            if pee.content().start_with?('Image format')
#                   image_format = pee.content().split(':')[1]
#            end
#            if pee.content().start_with?('Image geographic')
#                   image_geo = pee.content().split(':')[1]
#            end
#            if pee.content().start_with?('Image Date')
#                   image_date = pee.content().split(':')[1]
#            end
#            if pee.content().start_with?('Image Keyword')
#                   image_keyword = pee.content().split(':')[1].strip.gsub!(';','')
#            end
#            if pee.content().start_with?('Image Caption')
#                    image_caption = pee.content().split(':')[1]
#            end
#            if pee.content().start_with?('No valid')
#                    image_ocr = pee.content()
               #     puts image_ocr
#            end
          end

              epbcount = epbcount + 1
           if head.nil?
             head = " "
           end
#           if image_caption.nil?
#             image_caption = " "
#           end
           if image_ethnic.nil?
             image_ethnic = ""
           end
           if image_keyword.nil?
             image_keyword = ""
           end
           if image_ocr.nil?
             image_ocr = ""
           end
          case image_seq.length
            when 1
              image_idno = "000" + image_seq
            when 2
              image_idno = "00" + image_seq
            when 3
              image_idno = "0" + image_seq
          end

          pagepid = "nur:" + ARGV[0] + "_" + image_seq
          thumbnail = "http://hydrastg.library.cornell.edu/fedora/get/" + pagepid + "/thumbnailImage"
#    puts  " page = Page.create(pid: \"" + pagepid + "\", book_id: \"sea:" + ARGV[0] + "\", node: \"" + node + 
#           "\", node_type: \"" + node_type + "\", head: \"" + head + "\", image_ref: \"" + image_ref + 
#           "\", image_seq: \"" + image_seq + "\", image_res: \"" + image_res + "\", image_fmt: \"" + 
#           image_fmt + "\", image_ftr: \"" + image_ftr + "\", image_n: \"" + image_n + 
#           "\", image_format: \"" + image_format + "\", image_geo: \"" + image_geo + 
#           "\", image_date: \"" + image_date + "\", image_ethnic: \"" + image_ethnic + "\", image_keyword: \"" + image_keyword + 
#           "\", image_caption: \"" + image_caption + "\", image_ocr: \"" + image_ocr + "\")"
#           puts "KUKAMUNGA !!!!!!!!!!!!! " + image_format
           page = Page.create(pid: pagepid, book_id: "nur:" + ARGV[0], book_title: title, node: node, node_type: node_type, 
                              head: head, image_ref: image_ref, image_seq: image_seq, image_res: image_res, image_fmt: image_fmt, 
                              image_dim: image_dim, image_ftr: image_ftr, image_n: image_n, image_format: image_format,  
                              image_ocr: image_ocr, bibid: ARGV[1], image: thumbnail,
                              titlestmt_titletype: titlestmt_titletype, titlestmt_title: titlestmt_title, 
                              titlestmt_author: titlestmt_author, extent: extent, pubstmt_publisher: pubstmt_publisher, 
                              pubstmt_pubplace: pubstmt_pubplace, pubstmt_idno_type: pubstmt_idno_type, pubstmt_idno: pubstmt_idno, 
                              bibl_titletype: bibl_titletype, title: title, author: author, publisher: publisher, pubplace: pubplace, 
                              pubdate: pubdate, note: note, vol: vol, section: section, dname: dname, subdiv: subdiv, part: part,
                              lang: lang, author_b: author_b, witness: witness, wit_b: wit_b, onames: onames, odates: odates,
                              abstract: abstract, supages: supages, subject: "Nuremberg", editorialdecl_n: editorialdecl_n, 
                              editorialdecl: editorialdecl, keywords: keywords)
     #      page.add_relationship(:is_page_of, "info:fedora/nur:" + ARGV[0], versionable=false )
           page.digitalImage.content = File.open("/cul/data/collections/nur/nur" + ARGV[0] +"/jpg/" + image_ref)
           page.thumbnailImage.content = File.open("/cul/data/collections/nur/nur" + ARGV[0] +"/thumbs/" + image_ref)
        #   page.
            image_format = ""
            image_geo = ""
            image_date = ""
            image_ethnic = ""
            image_keyword = ""
            image_caption = " "
            image_ocr = ""
            head2 = ""

     #         puts image_seq
              page.save
              page.to_solr
              puts "Page " + image_seq + " in " + ARGV[0] + " saved "
            end
     
#        puts
#        puts 
#        puts "END OF DIV2"
#        puts 
#        puts
          
        end

#    puts
#    puts
#    puts "END OF DIV1"
#    puts
#    puts
      
    end
  end
end
inputparam = ARGV[0]
bibid = ARGV[1]
if inputparam.nil?
  puts "You must pass in a record ID"
  exit
end
data = Parser.new("/cul/data/collections/nur/nur" + inputparam + "/nur" + inputparam + "_george_Nov25_dims.xml")
data.parseRecords("DIV1")

