$(function(){
  $.ajax({
    url:"http://of6m03mmi.bkt.clouddn.com/111.txt",
    method:"get",
    success:function(msg){
      console.log(1);

      $("#111").text(msg);
    }
  })
});
