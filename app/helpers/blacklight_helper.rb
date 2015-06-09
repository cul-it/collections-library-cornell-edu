module BlacklightHelper
  include Blacklight::BlacklightHelperBehavior

  def application_name
  	if params[:subject] == "nuremberg"
    "Donovan Nuremberg Trials Collection"

elsif params[:subject] == "trials"
	"Trial Pamplet Collection"

elsif params[:subject] == "scottsboro"
  "Trial Pamplet Collection"

else
	"Law Collections"
  end
end

def id_to_subject(subject)
  params[:subject] = subject.downcase
end

  def link_to_document(doc, opts={:label=>nil, :counter => nil, :subject=>params[:subject]})
    opts[:label] ||= document_show_link_field(doc)
    label = render_document_index_label doc, opts
    id=doc
    if params[:subject]
    collection=params[:subject]
    link_to label, '/'+collection +'/' +'catalog' + '/' + doc[:id], document_link_params(doc, opts)
	else
		link_to label, url_for_document(doc), document_link_params(doc, opts)
	end
  end

end