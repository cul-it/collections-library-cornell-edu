class Page < ActiveFedora::Base
  
  has_metadata 'descMetadata', type: PageMetadata, :versionable=>false
 
  belongs_to :book, :property=>:is_page_of
#  has_many :inspirations, :property=>:has_derivation  

  has_file_datastream :name=>'digitalImage', :type=>ActiveFedora::Datastream, :mimeType=>'image/jpeg', :controlGroup=>'M', :versionable=>false
  has_file_datastream :name=>'thumbnailImage', :type=>ActiveFedora::Datastream, :mimeType=>'image/jpeg', :controlGroup=>'M', :versionable=>false

  has_attributes :head, datastream: 'descMetadata', multiple: false
  has_attributes :book_id, datastream: 'descMetadata', multiple: false
  has_attributes :book_title, datastream: 'descMetadata', multiple: false
  has_attributes :node, datastream: 'descMetadata', multiple: false
  has_attributes :node_type, datastream: 'descMetadata', multiple: false
  has_attributes :image_ref, datastream: 'descMetadata', multiple: false
  has_attributes :image_seq, datastream: 'descMetadata', multiple: false
  has_attributes :image_res, datastream: 'descMetadata', multiple: false
  has_attributes :image_fmt, datastream: 'descMetadata', multiple: false
  has_attributes :image_dim, datastream: 'descMetadata', multiple: false
  has_attributes :image_ftr, datastream: 'descMetadata', multiple: true
  has_attributes :image_n, datastream: 'descMetadata', multiple: false
  has_attributes :image_format, datastream: 'descMetadata', multiple: false
  has_attributes :image_ocr, datastream: 'descMetadata', multiple: false
  has_attributes :image_metadata, datastream: 'descMetadata', multiple: false
  has_attributes :titlestmt_titletype, datastream: 'descMetadata', multiple: false
  has_attributes :titlestmt_title, datastream: 'descMetadata', multiple: false
  has_attributes :titlestmt_author, datastream: 'descMetadata', multiple: false
  has_attributes :extent, datastream: 'descMetadata', multiple: false
  has_attributes :pubstmt_publisher, datastream: 'descMetadata', multiple: false
  has_attributes :pubstmt_pubplace, datastream: 'descMetadata', multiple: false
  has_attributes :pubstmt_idno_type, datastream: 'descMetadata', multiple: false
  has_attributes :pubstmt_idno, datastream: 'descMetadata', multiple: false
  has_attributes :bibl_titletype, datastream: 'descMetadata', multiple: false
  has_attributes :title, datastream: 'descMetadata', multiple: false
  has_attributes :author, datastream: 'descMetadata', multiple: false
  has_attributes :publisher, datastream: 'descMetadata', multiple: false
  has_attributes :pubplace, datastream: 'descMetadata', multiple: false
  has_attributes :pubdate, datastream: 'descMetadata', multiple: false
  has_attributes :subject, datastream: 'descMetadata', multiple: false
  has_attributes :note, datastream: 'descMetadata', multiple: false
  has_attributes :vol, datastream: 'descMetadata', multiple: false
  has_attributes :section, datastream: 'descMetadata', multiple: false
  has_attributes :dname, datastream: 'descMetadata', multiple: false
  has_attributes :subdiv, datastream: 'descMetadata', multiple: false
  has_attributes :part, datastream: 'descMetadata', multiple: false
  has_attributes :lang, datastream: 'descMetadata', multiple: false
  has_attributes :author_b, datastream: 'descMetadata', multiple: true
  has_attributes :witness, datastream: 'descMetadata', multiple: true
  has_attributes :wit_b, datastream: 'descMetadata', multiple: true
  has_attributes :onames, datastream: 'descMetadata', multiple: true
  has_attributes :odates, datastream: 'descMetadata', multiple: true
  has_attributes :abstract, datastream: 'descMetadata', multiple: false
  has_attributes :supages, datastream: 'descMetadata', multiple: true
  has_attributes :subject, datastream: 'descMetadata', multiple: true
  has_attributes :editorialdecl_n, datastream: 'descMetadata', multiple: false
  has_attributes :editorialdecl, datastream: 'descMetadata', multiple: false
  has_attributes :keywords, datastream: 'descMetadata', multiple: true
  has_attributes :image, datastream: 'descMetadata', multiple: false
  has_attributes :bibid, datastream: 'descMetadata', multiple: false
##  has_attributes :thumbnail, datastream: 'digitalImage', multiple: false

end

