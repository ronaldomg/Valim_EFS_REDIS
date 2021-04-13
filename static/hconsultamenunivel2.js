/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:49:38.47
*/
gx.evt.autoSkip = false;
gx.define('hconsultamenunivel2', false, function () {
   this.ServerClass =  "hconsultamenunivel2" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV11MenuNivel1Id=gx.fn.getIntegerValue("vMENUNIVEL1ID",'.') ;
      this.AV12MenuNivel2Id=gx.fn.getIntegerValue("vMENUNIVEL2ID",'.') ;
   };
   this.e18192_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11192_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12192_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13192_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14192_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15192_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e16192_client=function()
   {
      this.executeServerEvent("VCMENUNIVEL1ID.ISVALID", true, null, false, true);
   };
   this.e20192_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e22191_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,22,24,27,29,32,34,37,39,45,46,47,48,49,55,58,60,62,64,66,67,68,69,70,71,72];
   this.GXLastCtrlId =72;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultamenunivel2",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(77,45,"MENUNIVEL2ID","","","MenuNivel2Id","int",0,"px",7,7,"right",null,[],77,"MenuNivel2Id",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(80,46,"MENUNIVEL2DESCRICAO","","","MenuNivel2Descricao","svchar",0,"px",40,40,"left",null,[],80,"MenuNivel2Descricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(375,47,"MENUNIVEL2ORDEM","","","MenuNivel2Ordem","int",0,"px",4,4,"right",null,[],375,"MenuNivel2Ordem",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(376,48,"SISTEMANIVEL2","","","SistemaNivel2","char",0,"px",8,8,"left",null,[],376,"SistemaNivel2",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(377,49,"PROGRAMANIVEL2","","","ProgramaNivel2","int",0,"px",4,4,"right",null,[],377,"ProgramaNivel2",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e16192_client',rgrid:[this.GridContainer],fld:"vCMENUNIVEL1ID",gxz:"ZV18cMenuNivel1Id",gxold:"OV18cMenuNivel1Id",gxvar:"AV18cMenuNivel1Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18cMenuNivel1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18cMenuNivel1Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMENUNIVEL1ID",gx.O.AV18cMenuNivel1Id,0)},c2v:function(){gx.O.AV18cMenuNivel1Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMENUNIVEL1ID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMENUNIVEL1NOME",gxz:"ZV23MenuNivel1Nome",gxold:"OV23MenuNivel1Nome",gxvar:"AV23MenuNivel1Nome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23MenuNivel1Nome=Value},v2z:function(Value){gx.O.ZV23MenuNivel1Nome=Value},v2c:function(){gx.fn.setControlValue("vMENUNIVEL1NOME",gx.O.AV23MenuNivel1Nome,0)},c2v:function(){gx.O.AV23MenuNivel1Nome=this.val()},val:function(){return gx.fn.getControlValue("vMENUNIVEL1NOME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCMENUNIVEL2ID",gxz:"ZV13cMenuNivel2Id",gxold:"OV13cMenuNivel2Id",gxvar:"AV13cMenuNivel2Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13cMenuNivel2Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13cMenuNivel2Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMENUNIVEL2ID",gx.O.AV13cMenuNivel2Id,0)},c2v:function(){gx.O.AV13cMenuNivel2Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMENUNIVEL2ID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCMENUNIVEL2DESCRICAO",gxz:"ZV14cMenuNivel2Descricao",gxold:"OV14cMenuNivel2Descricao",gxvar:"AV14cMenuNivel2Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14cMenuNivel2Descricao=Value},v2z:function(Value){gx.O.ZV14cMenuNivel2Descricao=Value},v2c:function(){gx.fn.setControlValue("vCMENUNIVEL2DESCRICAO",gx.O.AV14cMenuNivel2Descricao,0)},c2v:function(){gx.O.AV14cMenuNivel2Descricao=this.val()},val:function(){return gx.fn.getControlValue("vCMENUNIVEL2DESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCMENUNIVEL2ORDEM",gxz:"ZV15cMenuNivel2Ordem",gxold:"OV15cMenuNivel2Ordem",gxvar:"AV15cMenuNivel2Ordem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15cMenuNivel2Ordem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15cMenuNivel2Ordem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMENUNIVEL2ORDEM",gx.O.AV15cMenuNivel2Ordem,0)},c2v:function(){gx.O.AV15cMenuNivel2Ordem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMENUNIVEL2ORDEM",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCSISTEMANIVEL2",gxz:"ZV16cSistemaNivel2",gxold:"OV16cSistemaNivel2",gxvar:"AV16cSistemaNivel2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16cSistemaNivel2=Value},v2z:function(Value){gx.O.ZV16cSistemaNivel2=Value},v2c:function(){gx.fn.setControlValue("vCSISTEMANIVEL2",gx.O.AV16cSistemaNivel2,0)},c2v:function(){gx.O.AV16cSistemaNivel2=this.val()},val:function(){return gx.fn.getControlValue("vCSISTEMANIVEL2")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCPROGRAMANIVEL2",gxz:"ZV17cProgramaNivel2",gxold:"OV17cProgramaNivel2",gxvar:"AV17cProgramaNivel2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17cProgramaNivel2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17cProgramaNivel2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPROGRAMANIVEL2",gx.O.AV17cProgramaNivel2,0)},c2v:function(){gx.O.AV17cProgramaNivel2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPROGRAMANIVEL2",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL2ID",gxz:"Z77MenuNivel2Id",gxold:"O77MenuNivel2Id",gxvar:"A77MenuNivel2Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A77MenuNivel2Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z77MenuNivel2Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL2ID",row || gx.fn.currentGridRowImpl(44),gx.O.A77MenuNivel2Id,0)},c2v:function(){gx.O.A77MenuNivel2Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL2ID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL2DESCRICAO",gxz:"Z80MenuNivel2Descricao",gxold:"O80MenuNivel2Descricao",gxvar:"A80MenuNivel2Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A80MenuNivel2Descricao=Value},v2z:function(Value){gx.O.Z80MenuNivel2Descricao=Value},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL2DESCRICAO",row || gx.fn.currentGridRowImpl(44),gx.O.A80MenuNivel2Descricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A80MenuNivel2Descricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MENUNIVEL2DESCRICAO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL2ORDEM",gxz:"Z375MenuNivel2Ordem",gxold:"O375MenuNivel2Ordem",gxvar:"A375MenuNivel2Ordem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A375MenuNivel2Ordem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z375MenuNivel2Ordem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL2ORDEM",row || gx.fn.currentGridRowImpl(44),gx.O.A375MenuNivel2Ordem,0)},c2v:function(){gx.O.A375MenuNivel2Ordem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL2ORDEM",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMANIVEL2",gxz:"Z376SistemaNivel2",gxold:"O376SistemaNivel2",gxvar:"A376SistemaNivel2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A376SistemaNivel2=Value},v2z:function(Value){gx.O.Z376SistemaNivel2=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMANIVEL2",row || gx.fn.currentGridRowImpl(44),gx.O.A376SistemaNivel2,0)},c2v:function(){gx.O.A376SistemaNivel2=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMANIVEL2",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMANIVEL2",gxz:"Z377ProgramaNivel2",gxold:"O377ProgramaNivel2",gxvar:"A377ProgramaNivel2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A377ProgramaNivel2=gx.num.intval(Value)},v2z:function(Value){gx.O.Z377ProgramaNivel2=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROGRAMANIVEL2",row || gx.fn.currentGridRowImpl(44),gx.O.A377ProgramaNivel2,0)},c2v:function(){gx.O.A377ProgramaNivel2=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROGRAMANIVEL2",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TABLENAV",grid:0};
   GXValidFnc[58]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[60]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[62]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[64]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[66]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[67]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV22PaginaAux",gxold:"OV22PaginaAux",gxvar:"AV22PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV22PaginaAux,0)},c2v:function(){gx.O.AV22PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV21Pagina",gxold:"OV21Pagina",gxvar:"AV21Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV21Pagina)},c2v:function(){gx.O.AV21Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"PROMPT_CMENUNIVEL1ID",grid:0};
   GXValidFnc[71]={fld:"PROMPT_CSISTEMANIVEL2",grid:0};
   GXValidFnc[72]={fld:"PROMPT_CPROGRAMANIVEL2",grid:0};
   this.AV18cMenuNivel1Id = 0 ;
   this.ZV18cMenuNivel1Id = 0 ;
   this.OV18cMenuNivel1Id = 0 ;
   this.AV23MenuNivel1Nome = "" ;
   this.ZV23MenuNivel1Nome = "" ;
   this.OV23MenuNivel1Nome = "" ;
   this.AV13cMenuNivel2Id = 0 ;
   this.ZV13cMenuNivel2Id = 0 ;
   this.OV13cMenuNivel2Id = 0 ;
   this.AV14cMenuNivel2Descricao = "" ;
   this.ZV14cMenuNivel2Descricao = "" ;
   this.OV14cMenuNivel2Descricao = "" ;
   this.AV15cMenuNivel2Ordem = 0 ;
   this.ZV15cMenuNivel2Ordem = 0 ;
   this.OV15cMenuNivel2Ordem = 0 ;
   this.AV16cSistemaNivel2 = "" ;
   this.ZV16cSistemaNivel2 = "" ;
   this.OV16cSistemaNivel2 = "" ;
   this.AV17cProgramaNivel2 = 0 ;
   this.ZV17cProgramaNivel2 = 0 ;
   this.OV17cProgramaNivel2 = 0 ;
   this.Z77MenuNivel2Id = 0 ;
   this.O77MenuNivel2Id = 0 ;
   this.Z80MenuNivel2Descricao = "" ;
   this.O80MenuNivel2Descricao = "" ;
   this.Z375MenuNivel2Ordem = 0 ;
   this.O375MenuNivel2Ordem = 0 ;
   this.Z376SistemaNivel2 = "" ;
   this.O376SistemaNivel2 = "" ;
   this.Z377ProgramaNivel2 = 0 ;
   this.O377ProgramaNivel2 = 0 ;
   this.AV22PaginaAux = 0 ;
   this.ZV22PaginaAux = 0 ;
   this.OV22PaginaAux = 0 ;
   this.AV21Pagina = 0 ;
   this.ZV21Pagina = 0 ;
   this.OV21Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV18cMenuNivel1Id = 0 ;
   this.AV23MenuNivel1Nome = "" ;
   this.AV13cMenuNivel2Id = 0 ;
   this.AV14cMenuNivel2Descricao = "" ;
   this.AV15cMenuNivel2Ordem = 0 ;
   this.AV16cSistemaNivel2 = "" ;
   this.AV17cProgramaNivel2 = 0 ;
   this.AV22PaginaAux = 0 ;
   this.AV21Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV11MenuNivel1Id = 0 ;
   this.AV12MenuNivel2Id = 0 ;
   this.A76MenuNivel1Id = 0 ;
   this.A77MenuNivel2Id = 0 ;
   this.A80MenuNivel2Descricao = "" ;
   this.A375MenuNivel2Ordem = 0 ;
   this.A376SistemaNivel2 = "" ;
   this.A377ProgramaNivel2 = 0 ;
   this.A79MenuNivel1Nome = "" ;
   this.Events = {"e18192_client": ["ENTER", true] ,"e11192_client": ["'GXM_FIRST'", true] ,"e12192_client": ["'GXM_PREVIOUS'", true] ,"e13192_client": ["'GXM_NEXT'", true] ,"e14192_client": ["'GXM_LAST'", true] ,"e15192_client": ["'PROCURAR'", true] ,"e16192_client": ["VCMENUNIVEL1ID.ISVALID", true] ,"e20192_client": ["'ATUALIZAPAGINA'", true] ,"e22191_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV13cMenuNivel2Id',fld:'vCMENUNIVEL2ID'},{av:'AV14cMenuNivel2Descricao',fld:'vCMENUNIVEL2DESCRICAO'},{av:'AV15cMenuNivel2Ordem',fld:'vCMENUNIVEL2ORDEM'},{av:'AV16cSistemaNivel2',fld:'vCSISTEMANIVEL2'},{av:'AV17cProgramaNivel2',fld:'vCPROGRAMANIVEL2'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'MENUNIVEL2ID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL2ID","Title")',ctrl:'MENUNIVEL2ID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'MENUNIVEL2DESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL2DESCRICAO","Title")',ctrl:'MENUNIVEL2DESCRICAO',prop:'Title'},{ctrl:'MENUNIVEL2ORDEM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL2ORDEM","Title")',ctrl:'MENUNIVEL2ORDEM',prop:'Title'},{ctrl:'SISTEMANIVEL2',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SISTEMANIVEL2","Title")',ctrl:'SISTEMANIVEL2',prop:'Title'},{ctrl:'PROGRAMANIVEL2',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMANIVEL2","Title")',ctrl:'PROGRAMANIVEL2',prop:'Title'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV20NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A77MenuNivel2Id',fld:'MENUNIVEL2ID'}],[{av:'AV12MenuNivel2Id',fld:'vMENUNIVEL2ID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV13cMenuNivel2Id',fld:'vCMENUNIVEL2ID'},{av:'AV14cMenuNivel2Descricao',fld:'vCMENUNIVEL2DESCRICAO'},{av:'AV15cMenuNivel2Ordem',fld:'vCMENUNIVEL2ORDEM'},{av:'AV16cSistemaNivel2',fld:'vCSISTEMANIVEL2'},{av:'AV17cProgramaNivel2',fld:'vCPROGRAMANIVEL2'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV13cMenuNivel2Id',fld:'vCMENUNIVEL2ID'},{av:'AV14cMenuNivel2Descricao',fld:'vCMENUNIVEL2DESCRICAO'},{av:'AV15cMenuNivel2Ordem',fld:'vCMENUNIVEL2ORDEM'},{av:'AV16cSistemaNivel2',fld:'vCSISTEMANIVEL2'},{av:'AV17cProgramaNivel2',fld:'vCPROGRAMANIVEL2'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21Pagina',fld:'vPAGINA'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV13cMenuNivel2Id',fld:'vCMENUNIVEL2ID'},{av:'AV14cMenuNivel2Descricao',fld:'vCMENUNIVEL2DESCRICAO'},{av:'AV15cMenuNivel2Ordem',fld:'vCMENUNIVEL2ORDEM'},{av:'AV16cSistemaNivel2',fld:'vCSISTEMANIVEL2'},{av:'AV17cProgramaNivel2',fld:'vCPROGRAMANIVEL2'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV13cMenuNivel2Id',fld:'vCMENUNIVEL2ID'},{av:'AV14cMenuNivel2Descricao',fld:'vCMENUNIVEL2DESCRICAO'},{av:'AV15cMenuNivel2Ordem',fld:'vCMENUNIVEL2ORDEM'},{av:'AV16cSistemaNivel2',fld:'vCSISTEMANIVEL2'},{av:'AV17cProgramaNivel2',fld:'vCPROGRAMANIVEL2'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV13cMenuNivel2Id',fld:'vCMENUNIVEL2ID'},{av:'AV14cMenuNivel2Descricao',fld:'vCMENUNIVEL2DESCRICAO'},{av:'AV15cMenuNivel2Ordem',fld:'vCMENUNIVEL2ORDEM'},{av:'AV16cSistemaNivel2',fld:'vCSISTEMANIVEL2'},{av:'AV17cProgramaNivel2',fld:'vCPROGRAMANIVEL2'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["VCMENUNIVEL1ID.ISVALID"] = [[{av:'AV18cMenuNivel1Id',fld:'vCMENUNIVEL1ID'}],[{av:'AV23MenuNivel1Nome',fld:'vMENUNIVEL1NOME'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV13cMenuNivel2Id',fld:'vCMENUNIVEL2ID'},{av:'AV14cMenuNivel2Descricao',fld:'vCMENUNIVEL2DESCRICAO'},{av:'AV15cMenuNivel2Ordem',fld:'vCMENUNIVEL2ORDEM'},{av:'AV16cSistemaNivel2',fld:'vCSISTEMANIVEL2'},{av:'AV17cProgramaNivel2',fld:'vCPROGRAMANIVEL2'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[]];
   this.setPrompt("PROMPT_CMENUNIVEL1ID", [13]);
   this.setPrompt("PROMPT_CSISTEMANIVEL2", [34]);
   this.setPrompt("PROMPT_CPROGRAMANIVEL2", [39]);
   this.setVCMap("AV11MenuNivel1Id", "vMENUNIVEL1ID", 0, "int");
   this.setVCMap("AV12MenuNivel2Id", "vMENUNIVEL2ID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar(this.GXValidFnc[34]);
   GridContainer.addRefreshingVar(this.GXValidFnc[39]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamenunivel2());
