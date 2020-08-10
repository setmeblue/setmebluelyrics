$(".album-wrapper .cross-fade").click(function() {
    var a = $(this).data("album");
    $("body").addClass("album-activated");
    $(".tracklist-wrapper").each(function() {
      if ($(this).hasClass(a)) {
        $(this).fadeIn(1000)
      }
    })
  }),
  $(".color-btn").click(function() {
    $("html").toggleClass("color")
  }),
  $(".album-closer").click(function() {
    $(this).parent().fadeOut(1000),
      $(".song-title").text(""),
      $(".tracklist-wrapper").removeClass("lyric-activated"),
      $("body").removeClass("album-activated"),
      $(this).parent().find(".tracklist").show(),
      $(".detail .lyric").remove(),
      $(".album-list").masonry("layout")
  }),
  $(".back-to-tracklist").click(function() {
    var a = $(".icon-youtube-play");
    $(".color-btn, .member-colors").removeClass("reveal"),
      $(".song-title").text(""),
      $(this).parent().removeClass("lyric-activated"),
      $(this).parent().find(".tracklist").toggle(500),
      $(".detail .lyric").remove();
    if (a.length != 0) {
      a.remove()
    }
  }),
  $(".song-list").click(function() {
    var a = $(this).parents(".tracklist-wrapper").find(".lyric[data-track=" + $(this).index() + "]");
    $(".color-btn, .member-colors").addClass("reveal"),
      $(this).parents(".tracklist-wrapper").addClass("lyric-activated"),
      $(this).parent().toggle(500),
      $(this).parents(".tracklist-wrapper").find(".song-title").text($(this).text()),
      $(this).parents(".detail").children(".lyric").not(a).remove(),
      a.clone().appendTo($(this).parents(".detail"));
    if ($(this).is("[data-video]")) {
      $(this).parents(".tracklist-wrapper").find(".song-info").append("<a class='icon-youtube-play youtube-btn' data-video=" + $(this).data("video") + "></a>"),
        $(".youtube-btn").on("click", function() {
          $(".video-popup").addClass("reveal"),
            $(".video-popup .video-wrapper").remove(),
            $(".video-popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://youtube.com/embed/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
        }),
        $(".video-popup-closer").on("click", function() {
          $(".video-popup .video-wrapper").remove(),
            $(".video-popup").removeClass("reveal")
        })
    }
  }),
  $(".album-bg").each(function() {
    $(this).css("background-image", "url(\"" + $(this).parent().find(".album-art-img").attr("src") + "\")")
  }),
  $(".lang>a").click(function() {
    $(".album-wrapper").attr("data-lang", $(this).data("lang")), $(".album-list").masonry("layout")
  }), $(".album-list").masonry({
    itemSelector: ".cross-fade",
    columnWidth: ".album-column",
    gutter: ".album-gutter",
    percentPosition: !0
  });
