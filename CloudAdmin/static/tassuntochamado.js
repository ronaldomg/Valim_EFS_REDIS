/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:15:9.76
*/
gx.evt.autoSkip=!1;gx.define("tassuntochamado",!1,function(){this.ServerClass="tassuntochamado";this.PackageName="";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Assuntochamadoid=function(){return gx.ajax.validSrvEvt("dyncall","valid_Assuntochamadoid",["gx.num.urlDecimal(gx.O.A10AssuntoChamadoId,'.',',')","gx.O.A54AssuntoDescricao","gx.O.A55AssuntoDestinatario","gx.num.urlDecimal(gx.O.A56AssuntoChamadoIdPai,'.',',')"],["A54AssuntoDescricao","A55AssuntoDestinatario","A56AssuntoChamadoIdPai","Gx_mode","Z10AssuntoChamadoId","Z54AssuntoDescricao","Z55AssuntoDestinatario","Z56AssuntoChamadoIdPai",["BTN_DELETE","Enabled"],["BTN_ENTER","Enabled"]]),!0};this.e110f18_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e120f18_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,16,17,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37];this.GXLastCtrlId=37;n[2]={fld:"",grid:0};n[3]={fld:"MAINTABLE",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"TITLE",format:0,grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"",grid:0};n[10]={fld:"",grid:0};n[16]={fld:"",grid:0};n[17]={fld:"",grid:0};n[19]={fld:"",grid:0};n[20]={fld:"",grid:0};n[21]={fld:"",grid:0};n[22]={lvl:0,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Assuntochamadoid,isvalid:null,rgrid:[],fld:"ASSUNTOCHAMADOID",gxz:"Z10AssuntoChamadoId",gxold:"O10AssuntoChamadoId",gxvar:"A10AssuntoChamadoId",ucs:[],op:[34,30,26],ip:[34,30,26,22],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A10AssuntoChamadoId=gx.num.intval(n)},v2z:function(n){gx.O.Z10AssuntoChamadoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("ASSUNTOCHAMADOID",gx.O.A10AssuntoChamadoId,0)},c2v:function(){gx.O.A10AssuntoChamadoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ASSUNTOCHAMADOID",".")},nac:gx.falseFn};n[23]={fld:"",grid:0};n[24]={fld:"",grid:0};n[25]={fld:"",grid:0};n[26]={lvl:0,type:"char",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSUNTODESCRICAO",gxz:"Z54AssuntoDescricao",gxold:"O54AssuntoDescricao",gxvar:"A54AssuntoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A54AssuntoDescricao=n},v2z:function(n){gx.O.Z54AssuntoDescricao=n},v2c:function(){gx.fn.setControlValue("ASSUNTODESCRICAO",gx.O.A54AssuntoDescricao,0)},c2v:function(){gx.O.A54AssuntoDescricao=this.val()},val:function(){return gx.fn.getControlValue("ASSUNTODESCRICAO")},nac:gx.falseFn};n[27]={fld:"",grid:0};n[28]={fld:"",grid:0};n[29]={fld:"",grid:0};n[30]={lvl:0,type:"svchar",len:2048,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSUNTODESTINATARIO",gxz:"Z55AssuntoDestinatario",gxold:"O55AssuntoDestinatario",gxvar:"A55AssuntoDestinatario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A55AssuntoDestinatario=n},v2z:function(n){gx.O.Z55AssuntoDestinatario=n},v2c:function(){gx.fn.setControlValue("ASSUNTODESTINATARIO",gx.O.A55AssuntoDestinatario,0)},c2v:function(){gx.O.A55AssuntoDestinatario=this.val()},val:function(){return gx.fn.getControlValue("ASSUNTODESTINATARIO")},nac:gx.falseFn};n[31]={fld:"",grid:0};n[32]={fld:"",grid:0};n[33]={fld:"",grid:0};n[34]={lvl:0,type:"int",len:18,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSUNTOCHAMADOIDPAI",gxz:"Z56AssuntoChamadoIdPai",gxold:"O56AssuntoChamadoIdPai",gxvar:"A56AssuntoChamadoIdPai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A56AssuntoChamadoIdPai=gx.num.intval(n)},v2z:function(n){gx.O.Z56AssuntoChamadoIdPai=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("ASSUNTOCHAMADOIDPAI",gx.O.A56AssuntoChamadoIdPai,0)},c2v:function(){gx.O.A56AssuntoChamadoIdPai=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ASSUNTOCHAMADOIDPAI",".")},nac:gx.falseFn};n[35]={fld:"",grid:0};n[36]={fld:"",grid:0};n[37]={fld:"",grid:0};this.A10AssuntoChamadoId=0;this.Z10AssuntoChamadoId=0;this.O10AssuntoChamadoId=0;this.A54AssuntoDescricao="";this.Z54AssuntoDescricao="";this.O54AssuntoDescricao="";this.A55AssuntoDestinatario="";this.Z55AssuntoDestinatario="";this.O55AssuntoDestinatario="";this.A56AssuntoChamadoIdPai=0;this.Z56AssuntoChamadoIdPai=0;this.O56AssuntoChamadoIdPai=0;this.A10AssuntoChamadoId=0;this.A54AssuntoDescricao="";this.A55AssuntoDestinatario="";this.A56AssuntoChamadoIdPai=0;this.Events={e110f18_client:["ENTER",!0],e120f18_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars()});gx.setParentObj(new tassuntochamado)