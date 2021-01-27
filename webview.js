module.exports = (Franz) => {
  function getMessages() {
    let direct = document.querySelector('i.fas.fa-bell').attributes[1].value;

    Franz.setBadge(direct);
  }

  Franz.loop(getMessages);
}
