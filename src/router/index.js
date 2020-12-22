import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject)
        return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch((err) => {
        if (VueRouter.isNavigationFailure(err)) {
            // resolve err
            return err
        }
        // rethrow error
        return Promise.reject(err)
    })
}

export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/search/:keyword',
            component: Search,
            name: 'search',
            props(route) {
                return {
                    keyword: route.params.keyword
                }
            }
        }, {
            path: '/login',
            component: Login,
            meta: {
                isHideFooter: true
            }
        }
    ]
})