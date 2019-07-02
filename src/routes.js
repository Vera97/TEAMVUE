/*webPack高版本已经不推荐使用，所以这里还是用官方推荐的工厂函数
const  Login = loadcomponents => require.ensure([], () => loadcomponents(require('@/components/login/login.vue')), 'home');
const Main = loadcomponents => require.ensure([], () => loadcomponents(require('@/components/Main.vue')), 'main');
//
const Navleft = loadcomponents => require.ensure([], () => loadcomponents(require('@/components/experiment/navleft.vue')), 'experiment');
const experimentTree = loadcomponents => require.ensure([], () => loadcomponents(require('@/components/experiment/experimentTree.vue')), 'experiment');
const listTable = loadcomponents => require.ensure([], () => loadcomponents(require('@/components/experiment/listTable.vue')), 'experiment');
const labinfo = loadcomponents => require.ensure([], () => loadcomponents(require('@/components/experiment/labinfo.vue')), 'experiment');
*/

const CourseTable = () => import('./components/selected_course_table.vue');
const TestPage = () => import('./components/TestPages.vue');

///正确的姿势建议应该是在组件的created钩子中，或者在组件的beforeEach导航钩子中从服务器请求资
// 源然后提交vuex，组件再同一从vuex中获取数据

let routes = [
    {
        path: '/',
        component: TestPage,
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: CourseTable,
                name: 'home'
            },
        ]
    },
];

export default routes;
