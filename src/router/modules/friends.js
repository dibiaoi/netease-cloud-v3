const friendsRouters = [
  {
    path: "/friends",
    name: "friends",
    component: () => import("@/views/friends/friendsIndex.vue"),
    children: [
      // {
      //   path: "/user",
      //   name: "user",
      //   meta: {
      //     role: ["user"]
      //   },
      //   component: () => import("@/views/user/test.vue")
      // }
    ]
  }
];

export default friendsRouters;
