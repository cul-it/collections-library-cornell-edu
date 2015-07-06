class Databases < ActiveRecord::Base
  require 'dotenv'

  ActiveRecord::Base.establish_connection(
    :adapter => 'mysql',
    :host => ENV['MYSQL_HOST'],
    :username => ENV['MYSQL_USERNAME'],
    :password => ENV['MYSQL_PASSWORD'],
    :database => ENV['MYSQL_DATABASE']
  )
  def self.update
     Rails.logger.info("You have successfully called this method")
  end
end
