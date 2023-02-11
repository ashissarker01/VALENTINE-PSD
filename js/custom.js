$(function () {
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
  });

  new VenoBox({
    selector: ".my-image-links",
    numeration: true,
    infinigall: true,
    share: true,
    spinner: "rotating-plane",
  });

  new VenoBox({
    selector: '.my-video-links',
  });
});