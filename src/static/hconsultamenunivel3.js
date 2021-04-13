/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:49:41.74
*/
gx.evt.autoSkip = false;
gx.define('hconsultamenunivel3', false, function () {
   this.ServerClass =  "hconsultamenunivel3" ;
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
      this.AV13MenuNivel3Id=gx.fn.getIntegerValue("vMENUNIVEL3ID",'.') ;
   };
   this.e181a2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111a2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121a2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131a2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141a2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151a2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e161a2_client=function()
   {
      this.executeServerEvent("VCMENUNIVEL1ID.ISVALID", true, null, false, true);
   };
   this.e201a2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e221a1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,17,20,22,23,26,28,31,33,35,38,40,43,45,54,55,56,57,58,64,67,69,71,73,75,76,77,78,79,80,81,82,83];
   this.GXLastCtrlId =83;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",53,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultamenunivel3",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(78,54,"MENUNIVEL3ID","","","MenuNivel3Id","int",0,"px",7,7,"right",null,[],78,"MenuNivel3Id",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(81,55,"MENUNIVEL3DESCRICAO","","","MenuNivel3Descricao","svchar",0,"px",40,40,"left",null,[],81,"MenuNivel3Descricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(382,56,"MENUNIVEL3ORDEM","","","MenuNivel3Ordem","int",0,"px",4,4,"right",null,[],382,"MenuNivel3Ordem",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(383,57,"SISTEMANIVEL3","","","SistemaNivel3","char",0,"px",8,8,"left",null,[],383,"SistemaNivel3",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(384,58,"PROGRAMANIVEL3","","","ProgramaNivel3","int",0,"px",4,4,"right",null,[],384,"ProgramaNivel3",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE2",grid:0};
   GXValidFnc[11]={fld:"TABLE3",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e161a2_client',rgrid:[this.GridContainer],fld:"vCMENUNIVEL1ID",gxz:"ZV20cMenuNivel1Id",gxold:"OV20cMenuNivel1Id",gxvar:"AV20cMenuNivel1Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20cMenuNivel1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20cMenuNivel1Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMENUNIVEL1ID",gx.O.AV20cMenuNivel1Id,0)},c2v:function(){gx.O.AV20cMenuNivel1Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMENUNIVEL1ID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMENUNIVEL1NOME",gxz:"ZV25MenuNivel1Nome",gxold:"OV25MenuNivel1Nome",gxvar:"AV25MenuNivel1Nome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25MenuNivel1Nome=Value},v2z:function(Value){gx.O.ZV25MenuNivel1Nome=Value},v2c:function(){gx.fn.setControlValue("vMENUNIVEL1NOME",gx.O.AV25MenuNivel1Nome,0)},c2v:function(){gx.O.AV25MenuNivel1Nome=this.val()},val:function(){return gx.fn.getControlValue("vMENUNIVEL1NOME")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCMENUNIVEL2ID",gxz:"ZV19cMenuNivel2Id",gxold:"OV19cMenuNivel2Id",gxvar:"AV19cMenuNivel2Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19cMenuNivel2Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19cMenuNivel2Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMENUNIVEL2ID",gx.O.AV19cMenuNivel2Id,0)},c2v:function(){gx.O.AV19cMenuNivel2Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMENUNIVEL2ID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMENUNIVEL2DESCRICAO",gxz:"ZV26MenuNivel2Descricao",gxold:"OV26MenuNivel2Descricao",gxvar:"AV26MenuNivel2Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26MenuNivel2Descricao=Value},v2z:function(Value){gx.O.ZV26MenuNivel2Descricao=Value},v2c:function(){gx.fn.setControlValue("vMENUNIVEL2DESCRICAO",gx.O.AV26MenuNivel2Descricao,0)},c2v:function(){gx.O.AV26MenuNivel2Descricao=this.val()},val:function(){return gx.fn.getControlValue("vMENUNIVEL2DESCRICAO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCMENUNIVEL3ID",gxz:"ZV14cMenuNivel3Id",gxold:"OV14cMenuNivel3Id",gxvar:"AV14cMenuNivel3Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14cMenuNivel3Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14cMenuNivel3Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMENUNIVEL3ID",gx.O.AV14cMenuNivel3Id,0)},c2v:function(){gx.O.AV14cMenuNivel3Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMENUNIVEL3ID",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCMENUNIVEL3DESCRICAO",gxz:"ZV15cMenuNivel3Descricao",gxold:"OV15cMenuNivel3Descricao",gxvar:"AV15cMenuNivel3Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15cMenuNivel3Descricao=Value},v2z:function(Value){gx.O.ZV15cMenuNivel3Descricao=Value},v2c:function(){gx.fn.setControlValue("vCMENUNIVEL3DESCRICAO",gx.O.AV15cMenuNivel3Descricao,0)},c2v:function(){gx.O.AV15cMenuNivel3Descricao=this.val()},val:function(){return gx.fn.getControlValue("vCMENUNIVEL3DESCRICAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLE4",grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCSISTEMANIVEL3",gxz:"ZV17cSistemaNivel3",gxold:"OV17cSistemaNivel3",gxvar:"AV17cSistemaNivel3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17cSistemaNivel3=Value},v2z:function(Value){gx.O.ZV17cSistemaNivel3=Value},v2c:function(){gx.fn.setControlValue("vCSISTEMANIVEL3",gx.O.AV17cSistemaNivel3,0)},c2v:function(){gx.O.AV17cSistemaNivel3=this.val()},val:function(){return gx.fn.getControlValue("vCSISTEMANIVEL3")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCPROGRAMANIVEL3",gxz:"ZV18cProgramaNivel3",gxold:"OV18cProgramaNivel3",gxvar:"AV18cProgramaNivel3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18cProgramaNivel3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18cProgramaNivel3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPROGRAMANIVEL3",gx.O.AV18cProgramaNivel3,0)},c2v:function(){gx.O.AV18cProgramaNivel3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPROGRAMANIVEL3",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL3ID",gxz:"Z78MenuNivel3Id",gxold:"O78MenuNivel3Id",gxvar:"A78MenuNivel3Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A78MenuNivel3Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z78MenuNivel3Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL3ID",row || gx.fn.currentGridRowImpl(53),gx.O.A78MenuNivel3Id,0)},c2v:function(){gx.O.A78MenuNivel3Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL3ID",row || gx.fn.currentGridRowImpl(53),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL3DESCRICAO",gxz:"Z81MenuNivel3Descricao",gxold:"O81MenuNivel3Descricao",gxvar:"A81MenuNivel3Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A81MenuNivel3Descricao=Value},v2z:function(Value){gx.O.Z81MenuNivel3Descricao=Value},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL3DESCRICAO",row || gx.fn.currentGridRowImpl(53),gx.O.A81MenuNivel3Descricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A81MenuNivel3Descricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MENUNIVEL3DESCRICAO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL3ORDEM",gxz:"Z382MenuNivel3Ordem",gxold:"O382MenuNivel3Ordem",gxvar:"A382MenuNivel3Ordem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A382MenuNivel3Ordem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z382MenuNivel3Ordem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL3ORDEM",row || gx.fn.currentGridRowImpl(53),gx.O.A382MenuNivel3Ordem,0)},c2v:function(){gx.O.A382MenuNivel3Ordem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL3ORDEM",row || gx.fn.currentGridRowImpl(53),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMANIVEL3",gxz:"Z383SistemaNivel3",gxold:"O383SistemaNivel3",gxvar:"A383SistemaNivel3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A383SistemaNivel3=Value},v2z:function(Value){gx.O.Z383SistemaNivel3=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMANIVEL3",row || gx.fn.currentGridRowImpl(53),gx.O.A383SistemaNivel3,0)},c2v:function(){gx.O.A383SistemaNivel3=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMANIVEL3",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMANIVEL3",gxz:"Z384ProgramaNivel3",gxold:"O384ProgramaNivel3",gxvar:"A384ProgramaNivel3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A384ProgramaNivel3=gx.num.intval(Value)},v2z:function(Value){gx.O.Z384ProgramaNivel3=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROGRAMANIVEL3",row || gx.fn.currentGridRowImpl(53),gx.O.A384ProgramaNivel3,0)},c2v:function(){gx.O.A384ProgramaNivel3=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROGRAMANIVEL3",row || gx.fn.currentGridRowImpl(53),'.')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TABLENAV",grid:0};
   GXValidFnc[67]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[69]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[71]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[73]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[75]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[76]={fld:"JAVASCRIPT", format:2,grid:0};
   GXValidFnc[77]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV24PaginaAux",gxold:"OV24PaginaAux",gxvar:"AV24PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV24PaginaAux,0)},c2v:function(){gx.O.AV24PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV23Pagina",gxold:"OV23Pagina",gxvar:"AV23Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV23Pagina)},c2v:function(){gx.O.AV23Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[80]={fld:"PROMPT_CMENUNIVEL1ID",grid:0};
   GXValidFnc[81]={fld:"PROMPT_CMENUNIVEL2ID",grid:0};
   GXValidFnc[82]={fld:"PROMPT_CSISTEMANIVEL3",grid:0};
   GXValidFnc[83]={fld:"PROMPT_CPROGRAMANIVEL3",grid:0};
   this.AV20cMenuNivel1Id = 0 ;
   this.ZV20cMenuNivel1Id = 0 ;
   this.OV20cMenuNivel1Id = 0 ;
   this.AV25MenuNivel1Nome = "" ;
   this.ZV25MenuNivel1Nome = "" ;
   this.OV25MenuNivel1Nome = "" ;
   this.AV19cMenuNivel2Id = 0 ;
   this.ZV19cMenuNivel2Id = 0 ;
   this.OV19cMenuNivel2Id = 0 ;
   this.AV26MenuNivel2Descricao = "" ;
   this.ZV26MenuNivel2Descricao = "" ;
   this.OV26MenuNivel2Descricao = "" ;
   this.AV14cMenuNivel3Id = 0 ;
   this.ZV14cMenuNivel3Id = 0 ;
   this.OV14cMenuNivel3Id = 0 ;
   this.AV15cMenuNivel3Descricao = "" ;
   this.ZV15cMenuNivel3Descricao = "" ;
   this.OV15cMenuNivel3Descricao = "" ;
   this.AV17cSistemaNivel3 = "" ;
   this.ZV17cSistemaNivel3 = "" ;
   this.OV17cSistemaNivel3 = "" ;
   this.AV18cProgramaNivel3 = 0 ;
   this.ZV18cProgramaNivel3 = 0 ;
   this.OV18cProgramaNivel3 = 0 ;
   this.Z78MenuNivel3Id = 0 ;
   this.O78MenuNivel3Id = 0 ;
   this.Z81MenuNivel3Descricao = "" ;
   this.O81MenuNivel3Descricao = "" ;
   this.Z382MenuNivel3Ordem = 0 ;
   this.O382MenuNivel3Ordem = 0 ;
   this.Z383SistemaNivel3 = "" ;
   this.O383SistemaNivel3 = "" ;
   this.Z384ProgramaNivel3 = 0 ;
   this.O384ProgramaNivel3 = 0 ;
   this.AV24PaginaAux = 0 ;
   this.ZV24PaginaAux = 0 ;
   this.OV24PaginaAux = 0 ;
   this.AV23Pagina = 0 ;
   this.ZV23Pagina = 0 ;
   this.OV23Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV20cMenuNivel1Id = 0 ;
   this.AV25MenuNivel1Nome = "" ;
   this.AV19cMenuNivel2Id = 0 ;
   this.AV26MenuNivel2Descricao = "" ;
   this.AV14cMenuNivel3Id = 0 ;
   this.AV15cMenuNivel3Descricao = "" ;
   this.AV17cSistemaNivel3 = "" ;
   this.AV18cProgramaNivel3 = 0 ;
   this.AV24PaginaAux = 0 ;
   this.AV23Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV11MenuNivel1Id = 0 ;
   this.AV12MenuNivel2Id = 0 ;
   this.AV13MenuNivel3Id = 0 ;
   this.A77MenuNivel2Id = 0 ;
   this.A76MenuNivel1Id = 0 ;
   this.A78MenuNivel3Id = 0 ;
   this.A81MenuNivel3Descricao = "" ;
   this.A382MenuNivel3Ordem = 0 ;
   this.A383SistemaNivel3 = "" ;
   this.A384ProgramaNivel3 = 0 ;
   this.A80MenuNivel2Descricao = "" ;
   this.A79MenuNivel1Nome = "" ;
   this.Events = {"e181a2_client": ["ENTER", true] ,"e111a2_client": ["'GXM_FIRST'", true] ,"e121a2_client": ["'GXM_PREVIOUS'", true] ,"e131a2_client": ["'GXM_NEXT'", true] ,"e141a2_client": ["'GXM_LAST'", true] ,"e151a2_client": ["'PROCURAR'", true] ,"e161a2_client": ["VCMENUNIVEL1ID.ISVALID", true] ,"e201a2_client": ["'ATUALIZAPAGINA'", true] ,"e221a1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV19cMenuNivel2Id',fld:'vCMENUNIVEL2ID'},{av:'AV14cMenuNivel3Id',fld:'vCMENUNIVEL3ID'},{av:'AV15cMenuNivel3Descricao',fld:'vCMENUNIVEL3DESCRICAO'},{av:'AV17cSistemaNivel3',fld:'vCSISTEMANIVEL3'},{av:'AV18cProgramaNivel3',fld:'vCPROGRAMANIVEL3'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'MENUNIVEL3ID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL3ID","Title")',ctrl:'MENUNIVEL3ID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'MENUNIVEL3DESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL3DESCRICAO","Title")',ctrl:'MENUNIVEL3DESCRICAO',prop:'Title'},{ctrl:'MENUNIVEL3ORDEM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL3ORDEM","Title")',ctrl:'MENUNIVEL3ORDEM',prop:'Title'},{ctrl:'SISTEMANIVEL3',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SISTEMANIVEL3","Title")',ctrl:'SISTEMANIVEL3',prop:'Title'},{ctrl:'PROGRAMANIVEL3',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMANIVEL3","Title")',ctrl:'PROGRAMANIVEL3',prop:'Title'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV22NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A78MenuNivel3Id',fld:'MENUNIVEL3ID'}],[{av:'AV13MenuNivel3Id',fld:'vMENUNIVEL3ID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV19cMenuNivel2Id',fld:'vCMENUNIVEL2ID'},{av:'AV14cMenuNivel3Id',fld:'vCMENUNIVEL3ID'},{av:'AV15cMenuNivel3Descricao',fld:'vCMENUNIVEL3DESCRICAO'},{av:'AV17cSistemaNivel3',fld:'vCSISTEMANIVEL3'},{av:'AV18cProgramaNivel3',fld:'vCPROGRAMANIVEL3'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV19cMenuNivel2Id',fld:'vCMENUNIVEL2ID'},{av:'AV14cMenuNivel3Id',fld:'vCMENUNIVEL3ID'},{av:'AV15cMenuNivel3Descricao',fld:'vCMENUNIVEL3DESCRICAO'},{av:'AV17cSistemaNivel3',fld:'vCSISTEMANIVEL3'},{av:'AV18cProgramaNivel3',fld:'vCPROGRAMANIVEL3'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV23Pagina',fld:'vPAGINA'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV19cMenuNivel2Id',fld:'vCMENUNIVEL2ID'},{av:'AV14cMenuNivel3Id',fld:'vCMENUNIVEL3ID'},{av:'AV15cMenuNivel3Descricao',fld:'vCMENUNIVEL3DESCRICAO'},{av:'AV17cSistemaNivel3',fld:'vCSISTEMANIVEL3'},{av:'AV18cProgramaNivel3',fld:'vCPROGRAMANIVEL3'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV19cMenuNivel2Id',fld:'vCMENUNIVEL2ID'},{av:'AV14cMenuNivel3Id',fld:'vCMENUNIVEL3ID'},{av:'AV15cMenuNivel3Descricao',fld:'vCMENUNIVEL3DESCRICAO'},{av:'AV17cSistemaNivel3',fld:'vCSISTEMANIVEL3'},{av:'AV18cProgramaNivel3',fld:'vCPROGRAMANIVEL3'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV19cMenuNivel2Id',fld:'vCMENUNIVEL2ID'},{av:'AV14cMenuNivel3Id',fld:'vCMENUNIVEL3ID'},{av:'AV15cMenuNivel3Descricao',fld:'vCMENUNIVEL3DESCRICAO'},{av:'AV17cSistemaNivel3',fld:'vCSISTEMANIVEL3'},{av:'AV18cProgramaNivel3',fld:'vCPROGRAMANIVEL3'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16cMenuNivel3Ordem',fld:'vCMENUNIVEL3ORDEM'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["VCMENUNIVEL1ID.ISVALID"] = [[{av:'AV20cMenuNivel1Id',fld:'vCMENUNIVEL1ID'}],[{av:'AV25MenuNivel1Nome',fld:'vMENUNIVEL1NOME'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV19cMenuNivel2Id',fld:'vCMENUNIVEL2ID'},{av:'AV14cMenuNivel3Id',fld:'vCMENUNIVEL3ID'},{av:'AV15cMenuNivel3Descricao',fld:'vCMENUNIVEL3DESCRICAO'},{av:'AV17cSistemaNivel3',fld:'vCSISTEMANIVEL3'},{av:'AV18cProgramaNivel3',fld:'vCPROGRAMANIVEL3'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[]];
   this.setPrompt("PROMPT_CMENUNIVEL1ID", [16]);
   this.setPrompt("PROMPT_CMENUNIVEL2ID", [22]);
   this.setPrompt("PROMPT_CSISTEMANIVEL3", [40]);
   this.setPrompt("PROMPT_CPROGRAMANIVEL3", [45]);
   this.setVCMap("AV11MenuNivel1Id", "vMENUNIVEL1ID", 0, "int");
   this.setVCMap("AV12MenuNivel2Id", "vMENUNIVEL2ID", 0, "int");
   this.setVCMap("AV13MenuNivel3Id", "vMENUNIVEL3ID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridContainer.addRefreshingVar(this.GXValidFnc[40]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamenunivel3());
