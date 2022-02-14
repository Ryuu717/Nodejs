function protectRoutes(req, res, next) {
  if (!res.locals.isAuth) {
    return res.redirect('errors/401');
  }

  if (req.path.startsWith('/admin') && !res.locals.isAdmin) {
    return res.redirect('errors/403');
  }

  next();  
}

module.exports = protectRoutes;