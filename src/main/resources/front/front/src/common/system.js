export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["新增","查看","修改","删除"],"menu":"菜式类型","menuJump":"列表","tableName":"caishileixing"}],"menu":"菜式类型管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除","菜谱分类统计","菜谱评分统计","查看评论","首页总数","首页统计"],"menu":"菜谱信息","menuJump":"列表","tableName":"caipuxinxi"}],"menu":"菜谱信息管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看","删除","每日评分人数统计","首页总数","首页统计"],"menu":"评分信息","menuJump":"列表","tableName":"pingfenxinxi"}],"menu":"评分信息管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","回复","删除"],"menu":"留言信息","tableName":"messages"}],"menu":"留言信息"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-time","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-newshot","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","评分"],"menu":"菜谱信息列表","menuJump":"列表","tableName":"caipuxinxi"}],"menu":"菜谱信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看","删除"],"menu":"评分信息","menuJump":"列表","tableName":"pingfenxinxi"}],"menu":"评分信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","评分"],"menu":"菜谱信息列表","menuJump":"列表","tableName":"caipuxinxi"}],"menu":"菜谱信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
