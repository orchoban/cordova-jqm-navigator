navigator_corJQM={constructor:(props)=>{navigator_corJQM.state={myChildrens:[],screenPages:[],historyPages:[props.defaultPage]}
document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",(e)=>{navigator_corJQM.closeOrBack()},!1)},!1);navigator_corJQM.full_Height=window.innerHeight;navigator_corJQM.bezy=!1;navigator_corJQM.listLevelPages=props.listLevelPages;return!0},setState:(state)=>{for(var item in state){navigator_corJQM.state[item]=state[item]}},ChangePage:(goToPage,fromPage)=>{if(!navigator_corJQM.bezy){if(fromPage===null){fromPage=""+navigator_corJQM.state.historyPages[navigator_corJQM.state.historyPages.length-1]+""}
if(goToPage!==fromPage){navigator_corJQM.bezy=!0;if(navigator_corJQM.state.historyPages.length===1&&(goToPage===undefined||goToPage==="undefined")){console.log('"window.navigator.app.exitApp()"');window.navigator.app.exitApp()}else{let new_historyPages=navigator_corJQM.state.historyPages;if(navigator_corJQM.listLevelPages[goToPage]<=navigator_corJQM.listLevelPages[fromPage]){new_historyPages=new_historyPages.filter((x)=>navigator_corJQM.listLevelPages[x]<navigator_corJQM.listLevelPages[goToPage])}
new_historyPages.push(goToPage);navigator_corJQM.setState({historyPages:new_historyPages})}}
navigator_corJQM.bezy=!1;return!0}else return!1},closeOrBack:()=>{$.mobile.changePage("#"+navigator_corJQM.state.historyPages[navigator_corJQM.state.historyPages.length-2],{transition:"slide",reverse:!0})}}
if($.mobile){firstTime=!0;$(document).bind('pagebeforechange',function(event,data){if(data.toPage.includes!==undefined)
if(data.toPage.includes('/'))
return;if(!firstTime){navigator_corJQM.ChangePage(data.toPage.attr!==undefined?data.toPage.attr('id'):data.toPage.replace('#',""),null)}else firstTime=!1})}