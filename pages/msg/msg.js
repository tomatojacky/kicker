var app = getApp()
Page({
    data:{
      list:[
          {
              list_tool:[
                {
                    img:"/assets/wx/ben.png",
                    name:"新的朋友"
                },
                {
                  img:"/assets/wx/ben.png",
                    name:"群聊"
                },
                {
                  img:"/assets/wx/ben.png",
                    name:"标签"
                },
                {
                  img:"/assets/wx/ben.png",
                    name:"公众号"
                }
            ]
          },
          {
              text:"C",
              list_tool:[
                {
                  img:"/assets/wx/ben.png",
                    name:"成凤杰"
                }
              ]
          },
          {
              text:"D",
              list_tool:[
                {
                  img:"/assets/wx/ben.png",
                    name:"邓福滨"
                }
              ]
          },
          {
              text:"L",
              list_tool:[
                {
                  img:"/assets/wx/ben.png",
                    name:"梁雨"
                },
                {
                  img:"/assets/wx/ben.png",
                    name:"廖芳樱"
                }
              ]
          },
          {
              text:"W",
              list_tool:[
                {
                  img:"/assets/wx/ben.png",
                    name:"王浩"
                }
              ]
          }
      ]
    },
    goPage:function(e){
        var url = e.currentTarget.dataset.url;
        wx.navigateTo({
            url: '/pages/msgdetail/msgdetail'
        })
    }
})