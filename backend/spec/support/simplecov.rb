require 'simplecov'

SimpleCov.start 'rails' do
  add_filter '/bin/'
  add_filter '/db/'
  add_filter '/spec/'
  add_filter do |source_file|
    source_file.lines.count < 5
  end

  add_group 'Models', 'app/models'
  add_group 'Controllers', 'app/controllers'
  add_group 'Helpers', 'app/helpers'
  add_group 'Services', 'app/services'
end

puts "SimpleCov ran. Watch coverage/index.html after specs."
