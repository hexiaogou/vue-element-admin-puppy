const getters = {
    sidebar: state => state.app.sidebar,
    size: state => state.app.size,
    device: state => state.app.device,
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
    name: state => state.user.name,
    token: state => state.user.token,
    roles: state => state.user.roles,
    permission_routes: state => state.permission.routes
}
export default getters