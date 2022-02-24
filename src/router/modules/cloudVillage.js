const cloudVillageRouters = [
  {
    path: "/cloud-village",
    name: "cloud-village",
    component: () => import("@/views/cloud-village/cloudVillageIndex.vue"),
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

export default cloudVillageRouters;
