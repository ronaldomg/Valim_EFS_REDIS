/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:59:59.16
*/
gx.evt.autoSkip = false;
gx.define('husuarioemail', false, function () {
   this.ServerClass =  "husuarioemail" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.e1120z2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1420z2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1520z2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,7,8,9,10,11];
   this.GXLastCtrlId =11;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",5,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"husuarioemail",[],false,1,false,true,0,false,false,false,"CollConfigEmail.ConfigEmailItem",0,"px","Novo registro",false,false,false,null,null,false,"AV6ConfigEmail",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV106",6,"CTLSERVIDOR","Servidor","","Servidor","svchar",0,"px",20,20,"left",null,[],"GXV106","GXV106",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV107",7,"CTLSMTP","SMTP","","SMTP","svchar",0,"px",100,80,"left",null,[],"GXV107","GXV107",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV108",8,"CTLPORTA","Porta","","Porta","int",0,"px",4,4,"right",null,[],"GXV108","GXV108",true,0,false,false,"Attribute",1,"");
   Grid1Container.addCheckBox("GXV109",9,"CTLAUTENTICACAO","Autenticação","","Autenticacao","boolean","true","false",null,true,false,0,"px","GridColumnImage");
   Grid1Container.addCheckBox("GXV10A",10,"CTLSSL","SSL","","SSL","boolean","true","false",null,true,false,0,"px","GridColumnImage");
   Grid1Container.addCheckBox("GXV10B",11,"CTLTLS","TLS","","TLS","boolean","true","false",null,true,false,0,"px","GridColumnImage");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSERVIDOR",gxz:"ZV11GXV106",gxold:"OV11GXV106",gxvar:"GXV106",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV106=Value},v2z:function(Value){gx.O.ZV11GXV106=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSERVIDOR",row || gx.fn.currentGridRowImpl(5),gx.O.GXV106,0)},c2v:function(){gx.O.GXV106=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSERVIDOR",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[7]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSMTP",gxz:"ZV12GXV107",gxold:"OV12GXV107",gxvar:"GXV107",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV107=Value},v2z:function(Value){gx.O.ZV12GXV107=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSMTP",row || gx.fn.currentGridRowImpl(5),gx.O.GXV107,0)},c2v:function(){gx.O.GXV107=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSMTP",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[8]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPORTA",gxz:"ZV13GXV108",gxold:"OV13GXV108",gxvar:"GXV108",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV108=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13GXV108=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPORTA",row || gx.fn.currentGridRowImpl(5),gx.O.GXV108,0)},c2v:function(){gx.O.GXV108=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPORTA",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[9]={lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLAUTENTICACAO",gxz:"ZV14GXV109",gxold:"OV14GXV109",gxvar:"GXV109",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV109=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV14GXV109=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLAUTENTICACAO",row || gx.fn.currentGridRowImpl(5),gx.O.GXV109,true)},c2v:function(){gx.O.GXV109=gx.lang.booleanValue(this.val())},val:function(row){return gx.fn.getGridControlValue("CTLAUTENTICACAO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[10]={lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSSL",gxz:"ZV15GXV10A",gxold:"OV15GXV10A",gxvar:"GXV10A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV10A=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV15GXV10A=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLSSL",row || gx.fn.currentGridRowImpl(5),gx.O.GXV10A,true)},c2v:function(){gx.O.GXV10A=gx.lang.booleanValue(this.val())},val:function(row){return gx.fn.getGridControlValue("CTLSSL",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[11]={lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLTLS",gxz:"ZV16GXV10B",gxold:"OV16GXV10B",gxvar:"GXV10B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV10B=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV16GXV10B=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLTLS",row || gx.fn.currentGridRowImpl(5),gx.O.GXV10B,true)},c2v:function(){gx.O.GXV10B=gx.lang.booleanValue(this.val())},val:function(row){return gx.fn.getGridControlValue("CTLTLS",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn,values:['true','false']};
   this.ZV11GXV106 = "" ;
   this.OV11GXV106 = "" ;
   this.ZV12GXV107 = "" ;
   this.OV12GXV107 = "" ;
   this.ZV13GXV108 = 0 ;
   this.OV13GXV108 = 0 ;
   this.ZV14GXV109 = false ;
   this.OV14GXV109 = false ;
   this.ZV15GXV10A = false ;
   this.OV15GXV10A = false ;
   this.ZV16GXV10B = false ;
   this.OV16GXV10B = false ;
   this.GXV106 = "" ;
   this.GXV107 = "" ;
   this.GXV108 = 0 ;
   this.GXV109 = false ;
   this.GXV10A = false ;
   this.GXV10B = false ;
   this.Events = {"e1120z2_client": ["'FECHAR'", true] ,"e1420z2_client": ["ENTER", true] ,"e1520z2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV6ConfigEmail',fld:'vCONFIGEMAIL',grid:5}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.addGridBCProperty("Configemail", ["Servidor"], this.GXValidFnc[6], "AV6ConfigEmail");
   this.addGridBCProperty("Configemail", ["SMTP"], this.GXValidFnc[7], "AV6ConfigEmail");
   this.addGridBCProperty("Configemail", ["Porta"], this.GXValidFnc[8], "AV6ConfigEmail");
   this.addGridBCProperty("Configemail", ["Autenticacao"], this.GXValidFnc[9], "AV6ConfigEmail");
   this.addGridBCProperty("Configemail", ["SSL"], this.GXValidFnc[10], "AV6ConfigEmail");
   this.addGridBCProperty("Configemail", ["TLS"], this.GXValidFnc[11], "AV6ConfigEmail");
   this.InitStandaloneVars( );
});
gx.setParentObj(new husuarioemail());
