const findRouters = [
  {
    path: "/find",
    name: "find",
    meta: {
      title: "发现页"
    },
    component: () => import("@/views/find/find.vue")
  },
  {
    path: "/songsList",
    name: "songsList",
    props: router => ({
      playlistId: router.query.playlistId
    }),
    meta: {
      title: "歌单详情页"
    },
    component: () => import("@/views/base/songsList.vue")
  }
];

export default findRouters;
