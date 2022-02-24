const blogRouters = [
  {
    path: "/blog",
    name: "blog",
    component: () => import("@/views/blog/blogIndex.vue"),
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

export default blogRouters;
