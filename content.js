
window.onload = function () {
  alert(location.href)
  let links = document.getElementsByTagName('a')
  for (let a of links) {
    let hrefUrl
    try {
      hrefUrl = new URL(a.href)
    } catch (e) {
      continue
    }
    let locationUrl = new URL(location.href)
    if (hrefUrl.host !== locationUrl.host) {
      a.style.backgroundColor = 'pink'
    }
  }
}
