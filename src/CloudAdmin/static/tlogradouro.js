/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:15:29.78
*/
gx.evt.autoSkip=!1;gx.define("tlogradouro",!1,function(){this.ServerClass="tlogradouro";this.PackageName="";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Logradouronocep=function(){return gx.ajax.validSrvEvt("dyncall","valid_Logradouronocep",["gx.O.A182LogradouroNoCep","gx.O.A177LogradouroTipoLogradouro","gx.O.A178LogradouroNome","gx.O.A179LogradouroComplemento","gx.O.A180LogradouroBairroInicial","gx.O.A181LogradouroBairroFinal","gx.O.A168CidadesId"],["A177LogradouroTipoLogradouro","A178LogradouroNome","A179LogradouroComplemento","A180LogradouroBairroInicial","A181LogradouroBairroFinal","A168CidadesId","A170CidadesNome","Gx_mode","Z182LogradouroNoCep","Z177LogradouroTipoLogradouro","Z178LogradouroNome","Z179LogradouroComplemento","Z180LogradouroBairroInicial","Z181LogradouroBairroFinal","Z168CidadesId","Z170CidadesNome",["BTN_DELETE","Enabled"],["BTN_ENTER","Enabled"]]),!0};this.Valid_Cidadesid=function(){return gx.ajax.validSrvEvt("dyncall","valid_Cidadesid",["gx.O.A168CidadesId","gx.O.A170CidadesNome"],["A170CidadesNome"]),!0};this.e110p41_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e120p41_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,16,17,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,57];this.GXLastCtrlId=57;n[2]={fld:"",grid:0};n[3]={fld:"MAINTABLE",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"TITLE",format:0,grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"",grid:0};n[10]={fld:"",grid:0};n[16]={fld:"",grid:0};n[17]={fld:"",grid:0};n[19]={fld:"",grid:0};n[20]={fld:"",grid:0};n[21]={fld:"",grid:0};n[22]={lvl:0,type:"char",len:9,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Logradouronocep,isvalid:null,rgrid:[],fld:"LOGRADOURONOCEP",gxz:"Z182LogradouroNoCep",gxold:"O182LogradouroNoCep",gxvar:"A182LogradouroNoCep",ucs:[],op:[46,42,38,34,30,26],ip:[46,42,38,34,30,26,22],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A182LogradouroNoCep=n},v2z:function(n){gx.O.Z182LogradouroNoCep=n},v2c:function(){gx.fn.setControlValue("LOGRADOURONOCEP",gx.O.A182LogradouroNoCep,0)},c2v:function(){gx.O.A182LogradouroNoCep=this.val()},val:function(){return gx.fn.getControlValue("LOGRADOURONOCEP")},nac:gx.falseFn};n[23]={fld:"",grid:0};n[24]={fld:"",grid:0};n[25]={fld:"",grid:0};n[26]={lvl:0,type:"char",len:15,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOGRADOUROTIPOLOGRADOURO",gxz:"Z177LogradouroTipoLogradouro",gxold:"O177LogradouroTipoLogradouro",gxvar:"A177LogradouroTipoLogradouro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A177LogradouroTipoLogradouro=n},v2z:function(n){gx.O.Z177LogradouroTipoLogradouro=n},v2c:function(){gx.fn.setControlValue("LOGRADOUROTIPOLOGRADOURO",gx.O.A177LogradouroTipoLogradouro,0)},c2v:function(){gx.O.A177LogradouroTipoLogradouro=this.val()},val:function(){return gx.fn.getControlValue("LOGRADOUROTIPOLOGRADOURO")},nac:gx.falseFn};n[27]={fld:"",grid:0};n[28]={fld:"",grid:0};n[29]={fld:"",grid:0};n[30]={lvl:0,type:"svchar",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOGRADOURONOME",gxz:"Z178LogradouroNome",gxold:"O178LogradouroNome",gxvar:"A178LogradouroNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A178LogradouroNome=n},v2z:function(n){gx.O.Z178LogradouroNome=n},v2c:function(){gx.fn.setControlValue("LOGRADOURONOME",gx.O.A178LogradouroNome,0)},c2v:function(){gx.O.A178LogradouroNome=this.val()},val:function(){return gx.fn.getControlValue("LOGRADOURONOME")},nac:gx.falseFn};n[31]={fld:"",grid:0};n[32]={fld:"",grid:0};n[33]={fld:"",grid:0};n[34]={lvl:0,type:"svchar",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOGRADOUROCOMPLEMENTO",gxz:"Z179LogradouroComplemento",gxold:"O179LogradouroComplemento",gxvar:"A179LogradouroComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A179LogradouroComplemento=n},v2z:function(n){gx.O.Z179LogradouroComplemento=n},v2c:function(){gx.fn.setControlValue("LOGRADOUROCOMPLEMENTO",gx.O.A179LogradouroComplemento,0)},c2v:function(){gx.O.A179LogradouroComplemento=this.val()},val:function(){return gx.fn.getControlValue("LOGRADOUROCOMPLEMENTO")},nac:gx.falseFn};n[35]={fld:"",grid:0};n[36]={fld:"",grid:0};n[37]={fld:"",grid:0};n[38]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOGRADOUROBAIRROINICIAL",gxz:"Z180LogradouroBairroInicial",gxold:"O180LogradouroBairroInicial",gxvar:"A180LogradouroBairroInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A180LogradouroBairroInicial=gx.num.intval(n)},v2z:function(n){gx.O.Z180LogradouroBairroInicial=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("LOGRADOUROBAIRROINICIAL",gx.O.A180LogradouroBairroInicial,0)},c2v:function(){gx.O.A180LogradouroBairroInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOGRADOUROBAIRROINICIAL",".")},nac:gx.falseFn};n[39]={fld:"",grid:0};n[40]={fld:"",grid:0};n[41]={fld:"",grid:0};n[42]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOGRADOUROBAIRROFINAL",gxz:"Z181LogradouroBairroFinal",gxold:"O181LogradouroBairroFinal",gxvar:"A181LogradouroBairroFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A181LogradouroBairroFinal=gx.num.intval(n)},v2z:function(n){gx.O.Z181LogradouroBairroFinal=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("LOGRADOUROBAIRROFINAL",gx.O.A181LogradouroBairroFinal,0)},c2v:function(){gx.O.A181LogradouroBairroFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOGRADOUROBAIRROFINAL",".")},nac:gx.falseFn};n[43]={fld:"",grid:0};n[44]={fld:"",grid:0};n[45]={fld:"",grid:0};n[46]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cidadesid,isvalid:null,rgrid:[],fld:"CIDADESID",gxz:"Z168CidadesId",gxold:"O168CidadesId",gxvar:"A168CidadesId",ucs:[],op:[50],ip:[50,46],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A168CidadesId=gx.num.intval(n)},v2z:function(n){gx.O.Z168CidadesId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("CIDADESID",gx.O.A168CidadesId,0)},c2v:function(){gx.O.A168CidadesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CIDADESID",".")},nac:gx.falseFn};n[47]={fld:"",grid:0};n[48]={fld:"",grid:0};n[49]={fld:"",grid:0};n[50]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESNOME",gxz:"Z170CidadesNome",gxold:"O170CidadesNome",gxvar:"A170CidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A170CidadesNome=n},v2z:function(n){gx.O.Z170CidadesNome=n},v2c:function(){gx.fn.setControlValue("CIDADESNOME",gx.O.A170CidadesNome,0)},c2v:function(){gx.O.A170CidadesNome=this.val()},val:function(){return gx.fn.getControlValue("CIDADESNOME")},nac:gx.falseFn};n[51]={fld:"",grid:0};n[52]={fld:"",grid:0};n[53]={fld:"",grid:0};n[57]={fld:"PROMPT_168",grid:41};this.A182LogradouroNoCep="";this.Z182LogradouroNoCep="";this.O182LogradouroNoCep="";this.A177LogradouroTipoLogradouro="";this.Z177LogradouroTipoLogradouro="";this.O177LogradouroTipoLogradouro="";this.A178LogradouroNome="";this.Z178LogradouroNome="";this.O178LogradouroNome="";this.A179LogradouroComplemento="";this.Z179LogradouroComplemento="";this.O179LogradouroComplemento="";this.A180LogradouroBairroInicial=0;this.Z180LogradouroBairroInicial=0;this.O180LogradouroBairroInicial=0;this.A181LogradouroBairroFinal=0;this.Z181LogradouroBairroFinal=0;this.O181LogradouroBairroFinal=0;this.A168CidadesId=0;this.Z168CidadesId=0;this.O168CidadesId=0;this.A170CidadesNome="";this.Z170CidadesNome="";this.O170CidadesNome="";this.A182LogradouroNoCep="";this.A177LogradouroTipoLogradouro="";this.A178LogradouroNome="";this.A179LogradouroComplemento="";this.A180LogradouroBairroInicial=0;this.A181LogradouroBairroFinal=0;this.A168CidadesId=0;this.A170CidadesNome="";this.Events={e110p41_client:["ENTER",!0],e120p41_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.setPrompt("PROMPT_168",[46]);this.EnterCtrl=["BTN_ENTER"];this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars()});gx.setParentObj(new tlogradouro)