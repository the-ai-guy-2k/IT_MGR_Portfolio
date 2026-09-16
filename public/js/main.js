(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");

  if (!toggle || !nav) {
    return;
  }

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("is-open"));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setOpen(false);
    }
  });
})();

(function () {
  var CANONICAL = "https://it-management-leadership-portfolio.replit.app/";
  var SHARE_TITLE = "Sanil D Tison — IT Support & Operations Leader";
  var SHARE_TEXT =
    "IT Support & Operations Leader. Desktop Support, End-User Computing, service delivery, and technology operations leadership.";
  var canNativeShare = typeof navigator.share === "function";

  function copyCanonical(feedback) {
    function confirmCopied() {
      feedback.textContent = "Link copied";
      window.setTimeout(function () {
        if (feedback.textContent === "Link copied") {
          feedback.textContent = "";
        }
      }, 2500);
    }

    function fallbackCopy() {
      var input = document.createElement("textarea");
      input.value = CANONICAL;
      input.setAttribute("readonly", "");
      input.style.position = "absolute";
      input.style.left = "-9999px";
      document.body.appendChild(input);
      input.select();
      var copied = false;
      try {
        copied = document.execCommand("copy");
      } catch (error) {
        copied = false;
      }
      document.body.removeChild(input);
      if (copied) {
        confirmCopied();
      } else {
        feedback.textContent = CANONICAL;
      }
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(CANONICAL).then(confirmCopied).catch(fallbackCopy);
      return;
    }

    fallbackCopy();
  }

  document.querySelectorAll("[data-share]").forEach(function (widget) {
    var nativeButton = widget.querySelector("[data-share-native]");
    var copyButton = widget.querySelector("[data-copy-link]");
    var feedback = widget.querySelector("[data-share-feedback]");

    if (canNativeShare && nativeButton) {
      nativeButton.hidden = false;
      nativeButton.addEventListener("click", function () {
        navigator.share({
          title: SHARE_TITLE,
          text: SHARE_TEXT,
          url: CANONICAL
        }).catch(function () {
          /* Visitor cancelled the system share sheet. */
        });
      });
    }

    if (copyButton && feedback) {
      copyButton.addEventListener("click", function () {
        copyCanonical(feedback);
      });
    }

    widget.setAttribute("data-share-ready", canNativeShare ? "native" : "fallback");
  });
})();
