require 'sinatra/base'
require 'sinatra/namespace'

class ApiExample < Sinatra::Base
    register Sinatra::Namespace

    namespace '/api' do
      get '/messages' do
        response['Access-Control-Allow-Origin'] = '*'
        [
          {
            id: 1,
            message: "I am your father."
          },

          {
            id: 2,
            message: "NOOOOOOOOO!!!"
          }
        ].to_json
      end
    end
  end
