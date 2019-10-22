function MessageList(data) {
  function render() {
    return [
      "<h1> Scene: Cloud City </h1>",


      data.map(function(messageData) {
        return "<li>" + messageData.message + "</li>" 

      }).join(' '),

    ].join(' ')

  }

return {
  render: render
  }
}
