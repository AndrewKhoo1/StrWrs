let appElement = document.getElementById('app')

window.addEventListener('load', function() {

  $.get("https://whispering-sierra-99988.herokuapp.com/api/messages", function(messageData){

    let parsedData = JSON.parse(messageData)

    appElement.innerHTML = new MessageList(parsedData).render()

  })
})
