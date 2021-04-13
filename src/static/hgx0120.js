/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:51:12.19
*/
gx.evt.autoSkip = false;
gx.define('hgx0120', false, function () {
   this.ServerClass =  "hgx0120" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV11pMenuNivel1Id=gx.fn.getIntegerValue("vPMENUNIVEL1ID",'.') ;
   };
   this.e15282_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11282_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", false, null, false, false);
   };
   this.e12282_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", false, null, false, false);
   };
   this.e13282_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", false, null, false, false);
   };
   this.e14282_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", false, null, false, false);
   };
   this.e17281_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,11,13,17,19,23,25,29,31,35,37,41,43,49,50,51];
   this.GXLastCtrlId =51;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hgx0120",[],false,1,false,true,10,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(76,49,"MENUNIVEL1ID","","","MenuNivel1Id","int",0,"px",7,7,"right",null,[],76,"MenuNivel1Id",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(79,50,"MENUNIVEL1NOME","","","MenuNivel1Nome","svchar",0,"px",40,40,"left",null,[],79,"MenuNivel1Nome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(373,51,"MENUNIVEL1ORDEM","","","MenuNivel1Ordem","int",0,"px",4,4,"right",null,[],373,"MenuNivel1Ordem",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE2",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMENUNIVEL1ID",gxz:"ZV5cMenuNivel1Id",gxold:"OV5cMenuNivel1Id",gxvar:"AV5cMenuNivel1Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5cMenuNivel1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5cMenuNivel1Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMENUNIVEL1ID",gx.O.AV5cMenuNivel1Id,0)},c2v:function(){gx.O.AV5cMenuNivel1Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMENUNIVEL1ID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMENUNIVEL1NOME",gxz:"ZV6cMenuNivel1Nome",gxold:"OV6cMenuNivel1Nome",gxvar:"AV6cMenuNivel1Nome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cMenuNivel1Nome=Value},v2z:function(Value){gx.O.ZV6cMenuNivel1Nome=Value},v2c:function(){gx.fn.setControlValue("vCMENUNIVEL1NOME",gx.O.AV6cMenuNivel1Nome,0)},c2v:function(){gx.O.AV6cMenuNivel1Nome=this.val()},val:function(){return gx.fn.getControlValue("vCMENUNIVEL1NOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMENUNIVEL1ULTIMONIVEL2",gxz:"ZV7cMenuNivel1UltimoNivel2",gxold:"OV7cMenuNivel1UltimoNivel2",gxvar:"AV7cMenuNivel1UltimoNivel2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cMenuNivel1UltimoNivel2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cMenuNivel1UltimoNivel2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMENUNIVEL1ULTIMONIVEL2",gx.O.AV7cMenuNivel1UltimoNivel2,0)},c2v:function(){gx.O.AV7cMenuNivel1UltimoNivel2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMENUNIVEL1ULTIMONIVEL2",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMENUNIVEL1ORDEM",gxz:"ZV8cMenuNivel1Ordem",gxold:"OV8cMenuNivel1Ordem",gxvar:"AV8cMenuNivel1Ordem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cMenuNivel1Ordem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cMenuNivel1Ordem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMENUNIVEL1ORDEM",gx.O.AV8cMenuNivel1Ordem,0)},c2v:function(){gx.O.AV8cMenuNivel1Ordem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMENUNIVEL1ORDEM",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSISTEMANIVEL1",gxz:"ZV9cSistemaNivel1",gxold:"OV9cSistemaNivel1",gxvar:"AV9cSistemaNivel1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cSistemaNivel1=Value},v2z:function(Value){gx.O.ZV9cSistemaNivel1=Value},v2c:function(){gx.fn.setControlValue("vCSISTEMANIVEL1",gx.O.AV9cSistemaNivel1,0)},c2v:function(){gx.O.AV9cSistemaNivel1=this.val()},val:function(){return gx.fn.getControlValue("vCSISTEMANIVEL1")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROGRAMANIVEL1",gxz:"ZV10cProgramaNivel1",gxold:"OV10cProgramaNivel1",gxvar:"AV10cProgramaNivel1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cProgramaNivel1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cProgramaNivel1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPROGRAMANIVEL1",gx.O.AV10cProgramaNivel1,0)},c2v:function(){gx.O.AV10cProgramaNivel1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPROGRAMANIVEL1",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL1ID",gxz:"Z76MenuNivel1Id",gxold:"O76MenuNivel1Id",gxvar:"A76MenuNivel1Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A76MenuNivel1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z76MenuNivel1Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL1ID",row || gx.fn.currentGridRowImpl(48),gx.O.A76MenuNivel1Id,0)},c2v:function(){gx.O.A76MenuNivel1Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL1ID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL1NOME",gxz:"Z79MenuNivel1Nome",gxold:"O79MenuNivel1Nome",gxvar:"A79MenuNivel1Nome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A79MenuNivel1Nome=Value},v2z:function(Value){gx.O.Z79MenuNivel1Nome=Value},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL1NOME",row || gx.fn.currentGridRowImpl(48),gx.O.A79MenuNivel1Nome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A79MenuNivel1Nome=this.val()},val:function(row){return gx.fn.getGridControlValue("MENUNIVEL1NOME",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL1ORDEM",gxz:"Z373MenuNivel1Ordem",gxold:"O373MenuNivel1Ordem",gxvar:"A373MenuNivel1Ordem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A373MenuNivel1Ordem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z373MenuNivel1Ordem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL1ORDEM",row || gx.fn.currentGridRowImpl(48),gx.O.A373MenuNivel1Ordem,0)},c2v:function(){gx.O.A373MenuNivel1Ordem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL1ORDEM",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   this.AV5cMenuNivel1Id = 0 ;
   this.ZV5cMenuNivel1Id = 0 ;
   this.OV5cMenuNivel1Id = 0 ;
   this.AV6cMenuNivel1Nome = "" ;
   this.ZV6cMenuNivel1Nome = "" ;
   this.OV6cMenuNivel1Nome = "" ;
   this.AV7cMenuNivel1UltimoNivel2 = 0 ;
   this.ZV7cMenuNivel1UltimoNivel2 = 0 ;
   this.OV7cMenuNivel1UltimoNivel2 = 0 ;
   this.AV8cMenuNivel1Ordem = 0 ;
   this.ZV8cMenuNivel1Ordem = 0 ;
   this.OV8cMenuNivel1Ordem = 0 ;
   this.AV9cSistemaNivel1 = "" ;
   this.ZV9cSistemaNivel1 = "" ;
   this.OV9cSistemaNivel1 = "" ;
   this.AV10cProgramaNivel1 = 0 ;
   this.ZV10cProgramaNivel1 = 0 ;
   this.OV10cProgramaNivel1 = 0 ;
   this.Z76MenuNivel1Id = 0 ;
   this.O76MenuNivel1Id = 0 ;
   this.Z79MenuNivel1Nome = "" ;
   this.O79MenuNivel1Nome = "" ;
   this.Z373MenuNivel1Ordem = 0 ;
   this.O373MenuNivel1Ordem = 0 ;
   this.AV5cMenuNivel1Id = 0 ;
   this.AV6cMenuNivel1Nome = "" ;
   this.AV7cMenuNivel1UltimoNivel2 = 0 ;
   this.AV8cMenuNivel1Ordem = 0 ;
   this.AV9cSistemaNivel1 = "" ;
   this.AV10cProgramaNivel1 = 0 ;
   this.AV11pMenuNivel1Id = 0 ;
   this.A366MenuNivel1UltimoNivel2 = 0 ;
   this.A367SistemaNivel1 = "" ;
   this.A368ProgramaNivel1 = 0 ;
   this.A76MenuNivel1Id = 0 ;
   this.A79MenuNivel1Nome = "" ;
   this.A373MenuNivel1Ordem = 0 ;
   this.Events = {"e15282_client": ["ENTER", true] ,"e11282_client": ["'GXM_FIRST'", true] ,"e12282_client": ["'GXM_PREVIOUS'", true] ,"e13282_client": ["'GXM_NEXT'", true] ,"e14282_client": ["'GXM_LAST'", true] ,"e17281_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV5cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV6cMenuNivel1Nome',fld:'vCMENUNIVEL1NOME'},{av:'AV7cMenuNivel1UltimoNivel2',fld:'vCMENUNIVEL1ULTIMONIVEL2'},{av:'AV8cMenuNivel1Ordem',fld:'vCMENUNIVEL1ORDEM'},{av:'AV9cSistemaNivel1',fld:'vCSISTEMANIVEL1'},{av:'AV10cProgramaNivel1',fld:'vCPROGRAMANIVEL1'}],[]];
   this.EvtParms["ENTER"] = [[{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'}],[{av:'AV11pMenuNivel1Id',fld:'vPMENUNIVEL1ID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV5cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV6cMenuNivel1Nome',fld:'vCMENUNIVEL1NOME'},{av:'AV7cMenuNivel1UltimoNivel2',fld:'vCMENUNIVEL1ULTIMONIVEL2'},{av:'AV8cMenuNivel1Ordem',fld:'vCMENUNIVEL1ORDEM'},{av:'AV9cSistemaNivel1',fld:'vCSISTEMANIVEL1'},{av:'AV10cProgramaNivel1',fld:'vCPROGRAMANIVEL1'}],[]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV5cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV6cMenuNivel1Nome',fld:'vCMENUNIVEL1NOME'},{av:'AV7cMenuNivel1UltimoNivel2',fld:'vCMENUNIVEL1ULTIMONIVEL2'},{av:'AV8cMenuNivel1Ordem',fld:'vCMENUNIVEL1ORDEM'},{av:'AV9cSistemaNivel1',fld:'vCSISTEMANIVEL1'},{av:'AV10cProgramaNivel1',fld:'vCPROGRAMANIVEL1'}],[]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV5cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV6cMenuNivel1Nome',fld:'vCMENUNIVEL1NOME'},{av:'AV7cMenuNivel1UltimoNivel2',fld:'vCMENUNIVEL1ULTIMONIVEL2'},{av:'AV8cMenuNivel1Ordem',fld:'vCMENUNIVEL1ORDEM'},{av:'AV9cSistemaNivel1',fld:'vCSISTEMANIVEL1'},{av:'AV10cProgramaNivel1',fld:'vCPROGRAMANIVEL1'}],[]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV5cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV6cMenuNivel1Nome',fld:'vCMENUNIVEL1NOME'},{av:'AV7cMenuNivel1UltimoNivel2',fld:'vCMENUNIVEL1ULTIMONIVEL2'},{av:'AV8cMenuNivel1Ordem',fld:'vCMENUNIVEL1ORDEM'},{av:'AV9cSistemaNivel1',fld:'vCSISTEMANIVEL1'},{av:'AV10cProgramaNivel1',fld:'vCPROGRAMANIVEL1'}],[]];
   this.setVCMap("AV11pMenuNivel1Id", "vPMENUNIVEL1ID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[13]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[25]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[31]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[37]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[43]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgx0120());
