module BlacklightHelper
  include Blacklight::BlacklightHelperBehavior

  def application_name
    if params[:subject] == "nuremberg"
      "Donovan Nuremberg Trials Collection"

    elsif params[:subject] == "trial"
      "Trial Pamphlets Collection"

    elsif params[:subject] == "scottsboro"
      "Scottsboro Trials"

    elsif params[:subject] == "liberian"
      "Liberian Law Collection"

    else
      "Law Collections"
    end
  end

  def id_to_subject(subject)
    params[:subject] = subject.downcase
  end

  def subject_to_prefix(subject)
    PREFIXES.each do |key,value|
      if subject == key
        prefix = value
        return prefix
      end
    end
  end

  def pubstmt_to_id(pubstmt)
    PREFIXES.each do |key,value|
      if pubstmt.start_with?(value)
        prefix = value
        number = pubstmt.gsub(prefix,':')
        return prefix + number
      end
    end
  end

  # Link to the previous document in the current search context
  def link_to_previous_document(previous_document)
    unless previous_document.nil?
      link_opts = session_tracking_params(previous_document, search_session['counter'].to_i - 1).merge(:class => "previous", :rel => 'prev')
      link_to_unless previous_document.nil?, raw(t('views.pagination.previous')), '/' + params[:subject] +'/' +'catalog' + '/' + previous_document[:id], link_opts do
        content_tag :span, raw(t('views.pagination.previous')), :class => 'previous'
      end
    end
  end

  ##
  # Link to the next document in the current search context
  def link_to_next_document(next_document)
    unless next_document.nil?
      link_opts = session_tracking_params(next_document, search_session['counter'].to_i + 1).merge(:class => "next", :rel => 'next')
      link_to_unless next_document.nil?, raw(t('views.pagination.next')), '/'+ params[:subject] +'/' +'catalog' + '/' + next_document[:id], link_opts do
        content_tag :span, raw(t('views.pagination.next')), :class => 'next'
      end
    end
  end


  PREFIXES = {
    'scottsboro' => 'scott',
    'liberian' => 'liber',
    'trial' => 'sat',
    'nuremberg' => 'nur'
  }



  def link_to_document(doc, opts={:label=>nil, :counter => nil, :subject=>params[:subject]})
    opts[:label] ||= document_show_link_field(doc)
    label = render_document_index_label doc, opts
    id=doc
    if params[:subject] || params[:controller] == 'bookmarks'
      if params[:subject].present?
        collection=params[:subject]
      else
        PREFIXES.each do |key,value|
          if doc[:id].start_with?(value)
            collection = key
          end
        end
      end
      link_to label, '/'+collection +'/' +'catalog' + '/' + doc[:id], document_link_params(doc, opts)
    else
      link_to label, url_for_document(doc), document_link_params(doc, opts)
    end
  end

  ##
  def extra_body_classes
    subject_class = request.fullpath.split('/')[1]
    @extra_body_classes ||= [subject_class, 'blacklight-' + controller.controller_name, 'blacklight-' + [controller.controller_name, controller.action_name].join('-')]
  end

end
