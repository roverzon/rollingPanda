window.editor = new Quill('#editor', {
  modules: {
    'toolbar': { container: '#toolbar' },
    'link-tooltip': true
  },
  theme: 'snow'
})