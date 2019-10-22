let appElement = document.getElementById('app')

window.addEventListener('load', function() {

  $.get("http://localhost:9292/api/messages", function(messageData){

    let parsedData = JSON.parse(messageData)

    appElement.innerHTML = new MessageList(parsedData).render()

  })
})
