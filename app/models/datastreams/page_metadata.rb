class PageMetadata < ActiveFedora::OmDatastream

  set_terminology do |t|
    t.root(path: "PAGE")
    t.head(index_as: :stored_searchable)
    t.book_id(index_as: :stored_searchable)
    t.book_title(index_as: :stored_searchable)
    t.node(index_as: :stored_searchable)
    t.node_type(index_as: :stored_searchable)
    t.image_ref(index_as: :stored_searchable)
    t.image_seq(index_as: :stored_searchable)
    t.image_res(index_as: :stored_searchable)
    t.image_fmt(index_as: :stored_searchable)
    t.image_dim(index_as: :stored_searchable)
    t.image_ftr(index_as: :stored_searchable)
    t.image_n(index_as: :stored_searchable)
    t.image_format(index_as: :stored_searchable)
    t.image_geo(index_as: :stored_searchable)
    t.image_date(index_as: :stored_searchable)
    t.image_ethnic(index_as: :stored_searchable)
    t.image_keyword(index_as: :stored_searchable)
    t.image_caption(index_as: :stored_searchable)
    t.image_ocr(index_as: :stored_searchable)
    t.image_metadata(index_as: :stored_searchable)
    t.book_author(index_as: :stored_searchable)
    t.book_publisher(index_as: :stored_searchable)
    t.book_pubplace(index_as: :stored_searchable)
    t.book_pubdate(index_as: :stored_searchable)
    t.book_bibid(index_as: :stored_searchable)
#    t.image(index_as: :stored_searchable)
#    t.thumbnail(index_as: :stored_searchable)
  end

  def self.xml_template
    Nokogiri::XML.parse("<PAGE/>")
  end
  

end
