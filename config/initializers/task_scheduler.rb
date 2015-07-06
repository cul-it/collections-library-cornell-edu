def execute_scheduler
  scheduler = Rufus::Scheduler.new
  #scheduler.cron '36 13 * * *' do
  scheduler.every '1m' do
    Rails.logger.info("Calling Databases.update #{Time.now}")
    Databases.update
  end
end

#exec('wget http://www.yahoo.com')
#pid_file =(Rails.root.to_s + "/tmp/pids/scheduler").to_s
pid_file =(File.dirname(__FILE__)+"/scheduler.pid").to_s
File.delete(pid_file) if FileTest.exists?(pid_file)

if defined?(PhusionPassenger) then
   PhusionPassenger.on_event(:starting_worker_process) do |forked|
     if forked && !FileTest.exists?(pid_file) then
        Rails.logger.info("SCHEDULER START ON PROCESS #{$$}")
        File.open(pid_file, "w") {
          |f| f.write($$)
        }
        File.delete(pid_file)
     end
   end
   execute_scheduler
   PhusionPassenger.on_event(:stopping_worker_process) do
    if FileTest.exists?(pid_file) then
        if File.open(pid_file, "r") {|f| pid = f.read.to_i} == $$ then
          Rails.logger.info("SCHEDULER STOP ON PROCESS #{$$}")
          File.delete(pid_file)
        end
     end
   end
else
   Rails.logger.info("PhusionPassenger not defined")
   execute_scheduler
end
