import '../scss/app.scss';


/* eslint-disable */
if (module.hot) {
  const reporter = window.__webpack_hot_middleware_reporter__;
  const success = reporter.success;
  reporter.success = function () {
    document.querySelectorAll('link[href][rel=stylesheet]').forEach((link) => {
      const nextStyleHref = link.href.replace(/(\?\d+)?$/, `?${Date.now()}`);
      link.href = nextStyleHref;
    });
    success();
  };
}
