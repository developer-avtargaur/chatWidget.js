;(function () {
  'use strict'

  const chatmlTmpl = window.chatml_tmpl

  class MessageList {
    constructor (options) {
      this.el = options.el
      this.messages = JSON.parse(window.sessionStorage.getItem('chatHistory') || '[]')
    }

    render () {
      this.el.innerHTML = chatmlTmpl({
        messages: this.messages
      })
    }

//    getMessageList () {
//      return this.messages
//    }
//
//    addMessage (data) {
//      this.messages.unshift({ // unshift is no good
//        text: data.text,
//        my: data.my || false,
//        date: new Date().getHours() + ':' + new Date().getMinutes()
//      })
//      window.sessionStorage.setItem('chatHistory', JSON.stringify(this.messages))
//    }
  }

  window.MessageList = MessageList
})()
