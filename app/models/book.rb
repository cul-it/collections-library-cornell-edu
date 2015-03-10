class Book < ActiveFedora::Base
  
  has_metadata 'descMetadata', type: BookMetadata, :versionable=>false
  
  
  has_file_datastream :name=>'digitalImage', :type=>ActiveFedora::Datastream, :mimeType=>"image/jpeg", :controlGroup=>'M', :versionable=>false
  has_file_datastream :name=>'thumbnailImage', :type=>ActiveFedora::Datastream, :mimeType=>'image/jpeg', :controlGroup=>'M', :versionable=>false
  
  
  belongs_to :derivation, :property=>:has_derivation
  
  has_many :pages, :property=>:has_pages
  
  
#  has_attributes :header, datastream: 'descMetadata', multiplet: false
#  has_attributes :title, datastream: 'descMetadata', unique: true
#  has_attributes :author, datastream: 'descMetadata', unique: true
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
#  has_attributes :image, datastream: 'digitalImage', multiple: false

end
