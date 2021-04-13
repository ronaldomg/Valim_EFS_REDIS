/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:59:51.45
*/
gx.evt.autoSkip = false;
gx.define('herroprocesso', false, function () {
   this.ServerClass =  "herroprocesso" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV28ProcessoRotina=gx.fn.getControlValue("vPROCESSOROTINA") ;
      this.AV36GridProcessoRotina=gx.fn.getControlValue("vGRIDPROCESSOROTINA") ;
      this.AV35SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A1551ErroProcessoDescricao=gx.fn.getControlValue("ERROPROCESSODESCRICAO") ;
   };
   this.e119y2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e129y2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e209y2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e219y2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e229y2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e169y2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e139y2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e149y2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e159y2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e239y2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e249y2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e259y2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,28,31,34,36,38,40,42,45,47,48,52,53,54,55,56,57,58,59,66];
   this.GXLastCtrlId =66;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"herroprocesso",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1544,52,"PROCESSOID","Número do Processo","","ProcessoId","int",0,"px",6,6,"right",null,[],1544,"ProcessoId",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(1543,53,"PROCESSOROTINA","Rotina","ProcessoRotina","svchar",null,0,false,false,0,"px","");
   GridContainer.addSingleLineEdit(1549,54,"ERROPROCESSOSEQUENCIA","","","ErroProcessoSequencia","int",0,"px",4,4,"right",null,[],1549,"ErroProcessoSequencia",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1550,55,"ERROPROCESSOID","","","ErroProcessoId","int",0,"px",4,4,"right",null,[],1550,"ErroProcessoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Erroprocessodescricao",56,"vERROPROCESSODESCRICAO","","","ErroProcessoDescricao","svchar",0,"px",100,80,"left",null,[],"Erroprocessodescricao","ErroProcessoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",57,0,"px",17,"px","e209y2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",58,0,"px",17,"px","e219y2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",59,0,"px",17,"px","e229y2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPROCESSOROTINA",gxz:"ZV37TProcessoRotina",gxold:"OV37TProcessoRotina",gxvar:"AV37TProcessoRotina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37TProcessoRotina=Value},v2z:function(Value){gx.O.ZV37TProcessoRotina=Value},v2c:function(){gx.fn.setControlValue("vTPROCESSOROTINA",gx.O.AV37TProcessoRotina,0)},c2v:function(){gx.O.AV37TProcessoRotina=this.val()},val:function(){return gx.fn.getControlValue("vTPROCESSOROTINA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROCESSOID",gxz:"ZV27ProcessoId",gxold:"OV27ProcessoId",gxvar:"AV27ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV27ProcessoId,0)},c2v:function(){gx.O.AV27ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vERROPROCESSOID",gxz:"ZV29ErroProcessoId",gxold:"OV29ErroProcessoId",gxvar:"AV29ErroProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ErroProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29ErroProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vERROPROCESSOID",gx.O.AV29ErroProcessoId,0)},c2v:function(){gx.O.AV29ErroProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vERROPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"IMAGE2",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNHELP",grid:0};
   GXValidFnc[42]={fld:"TABLE5",grid:0};
   GXValidFnc[45]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOID",gxz:"Z1544ProcessoId",gxold:"O1544ProcessoId",gxvar:"A1544ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1544ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1544ProcessoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSOID",row || gx.fn.currentGridRowImpl(51),gx.O.A1544ProcessoId,0)},c2v:function(){gx.O.A1544ProcessoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROCESSOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOROTINA",gxz:"Z1543ProcessoRotina",gxold:"O1543ProcessoRotina",gxvar:"A1543ProcessoRotina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1543ProcessoRotina=Value},v2z:function(Value){gx.O.Z1543ProcessoRotina=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PROCESSOROTINA",row || gx.fn.currentGridRowImpl(51),gx.O.A1543ProcessoRotina)},c2v:function(){gx.O.A1543ProcessoRotina=this.val()},val:function(row){return gx.fn.getGridControlValue("PROCESSOROTINA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ERROPROCESSOSEQUENCIA",gxz:"Z1549ErroProcessoSequencia",gxold:"O1549ErroProcessoSequencia",gxvar:"A1549ErroProcessoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1549ErroProcessoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1549ErroProcessoSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ERROPROCESSOSEQUENCIA",row || gx.fn.currentGridRowImpl(51),gx.O.A1549ErroProcessoSequencia,0)},c2v:function(){gx.O.A1549ErroProcessoSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ERROPROCESSOSEQUENCIA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ERROPROCESSOID",gxz:"Z1550ErroProcessoId",gxold:"O1550ErroProcessoId",gxvar:"A1550ErroProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1550ErroProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1550ErroProcessoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ERROPROCESSOID",row || gx.fn.currentGridRowImpl(51),gx.O.A1550ErroProcessoId,0)},c2v:function(){gx.O.A1550ErroProcessoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ERROPROCESSOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vERROPROCESSODESCRICAO",gxz:"ZV30ErroProcessoDescricao",gxold:"OV30ErroProcessoDescricao",gxvar:"AV30ErroProcessoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV30ErroProcessoDescricao=Value},v2z:function(Value){gx.O.ZV30ErroProcessoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vERROPROCESSODESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.AV30ErroProcessoDescricao,0)},c2v:function(){gx.O.AV30ErroProcessoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vERROPROCESSODESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(51),gx.O.AV7bmpAlt,gx.O.AV42Bmpalt_GXI)},c2v:function(){gx.O.AV42Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV42Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(51),gx.O.AV8bmpExc,gx.O.AV43Bmpexc_GXI)},c2v:function(){gx.O.AV43Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV43Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(51),gx.O.AV16bmpCon,gx.O.AV44Bmpcon_GXI)},c2v:function(){gx.O.AV44Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV44Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV37TProcessoRotina = "" ;
   this.ZV37TProcessoRotina = "" ;
   this.OV37TProcessoRotina = "" ;
   this.AV27ProcessoId = 0 ;
   this.ZV27ProcessoId = 0 ;
   this.OV27ProcessoId = 0 ;
   this.AV29ErroProcessoId = 0 ;
   this.ZV29ErroProcessoId = 0 ;
   this.OV29ErroProcessoId = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1544ProcessoId = 0 ;
   this.O1544ProcessoId = 0 ;
   this.Z1543ProcessoRotina = "" ;
   this.O1543ProcessoRotina = "" ;
   this.Z1549ErroProcessoSequencia = 0 ;
   this.O1549ErroProcessoSequencia = 0 ;
   this.Z1550ErroProcessoId = 0 ;
   this.O1550ErroProcessoId = 0 ;
   this.ZV30ErroProcessoDescricao = "" ;
   this.OV30ErroProcessoDescricao = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV37TProcessoRotina = "" ;
   this.AV27ProcessoId = 0 ;
   this.AV29ErroProcessoId = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV28ProcessoRotina = "" ;
   this.A1551ErroProcessoDescricao = "" ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1549ErroProcessoSequencia = 0 ;
   this.A1550ErroProcessoId = 0 ;
   this.AV30ErroProcessoDescricao = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV36GridProcessoRotina = "" ;
   this.AV35SnRecuperaFiltro = "" ;
   this.Events = {"e119y2_client": ["'ANTERIOR'", true] ,"e129y2_client": ["'PROXIMO'", true] ,"e209y2_client": ["'ALTERAR'", true] ,"e219y2_client": ["'EXCLUIR'", true] ,"e229y2_client": ["'CONSULTAR'", true] ,"e169y2_client": ["VPAGINA.CLICK", true] ,"e139y2_client": ["'NOVO'", true] ,"e149y2_client": ["'FECHAR'", true] ,"e159y2_client": ["'PROCURAR'", true] ,"e239y2_client": ["'ATUALIZAPAGINA'", true] ,"e249y2_client": ["ENTER", true] ,"e259y2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29ErroProcessoId',fld:'vERROPROCESSOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28ProcessoRotina',fld:'vPROCESSOROTINA',hsh:true},{av:'AV27ProcessoId',fld:'vPROCESSOID',hsh:true},{av:'AV36GridProcessoRotina',fld:'vGRIDPROCESSOROTINA'},{av:'AV37TProcessoRotina',fld:'vTPROCESSOROTINA'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1551ErroProcessoDescricao',fld:'ERROPROCESSODESCRICAO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29ErroProcessoId',fld:'vERROPROCESSOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28ProcessoRotina',fld:'vPROCESSOROTINA',hsh:true},{av:'AV27ProcessoId',fld:'vPROCESSOID',hsh:true},{av:'AV36GridProcessoRotina',fld:'vGRIDPROCESSOROTINA'},{av:'AV37TProcessoRotina',fld:'vTPROCESSOROTINA'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1551ErroProcessoDescricao',fld:'ERROPROCESSODESCRICAO'}],[{av:'AV37TProcessoRotina',fld:'vTPROCESSOROTINA'},{ctrl:'ERROPROCESSOSEQUENCIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ERROPROCESSOSEQUENCIA","Title")',ctrl:'ERROPROCESSOSEQUENCIA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'ERROPROCESSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ERROPROCESSOID","Title")',ctrl:'ERROPROCESSOID',prop:'Title'},{ctrl:'vERROPROCESSODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vERROPROCESSODESCRICAO","Title")',ctrl:'vERROPROCESSODESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29ErroProcessoId',fld:'vERROPROCESSOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28ProcessoRotina',fld:'vPROCESSOROTINA',hsh:true},{av:'AV27ProcessoId',fld:'vPROCESSOID',hsh:true},{av:'AV36GridProcessoRotina',fld:'vGRIDPROCESSOROTINA'},{av:'AV37TProcessoRotina',fld:'vTPROCESSOROTINA'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1551ErroProcessoDescricao',fld:'ERROPROCESSODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29ErroProcessoId',fld:'vERROPROCESSOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28ProcessoRotina',fld:'vPROCESSOROTINA',hsh:true},{av:'AV27ProcessoId',fld:'vPROCESSOID',hsh:true},{av:'AV36GridProcessoRotina',fld:'vGRIDPROCESSOROTINA'},{av:'AV37TProcessoRotina',fld:'vTPROCESSOROTINA'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1551ErroProcessoDescricao',fld:'ERROPROCESSODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1551ErroProcessoDescricao',fld:'ERROPROCESSODESCRICAO'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30ErroProcessoDescricao',fld:'vERROPROCESSODESCRICAO'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV28ProcessoRotina',fld:'vPROCESSOROTINA',hsh:true},{av:'AV27ProcessoId',fld:'vPROCESSOID',hsh:true},{av:'A1549ErroProcessoSequencia',fld:'ERROPROCESSOSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1549ErroProcessoSequencia',fld:'ERROPROCESSOSEQUENCIA'},{av:'AV27ProcessoId',fld:'vPROCESSOID',hsh:true},{av:'AV28ProcessoRotina',fld:'vPROCESSOROTINA',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV28ProcessoRotina',fld:'vPROCESSOROTINA',hsh:true},{av:'AV27ProcessoId',fld:'vPROCESSOID',hsh:true},{av:'A1549ErroProcessoSequencia',fld:'ERROPROCESSOSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1549ErroProcessoSequencia',fld:'ERROPROCESSOSEQUENCIA'},{av:'AV27ProcessoId',fld:'vPROCESSOID',hsh:true},{av:'AV28ProcessoRotina',fld:'vPROCESSOROTINA',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV28ProcessoRotina',fld:'vPROCESSOROTINA',hsh:true},{av:'AV27ProcessoId',fld:'vPROCESSOID',hsh:true},{av:'A1549ErroProcessoSequencia',fld:'ERROPROCESSOSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1549ErroProcessoSequencia',fld:'ERROPROCESSOSEQUENCIA'},{av:'AV27ProcessoId',fld:'vPROCESSOID',hsh:true},{av:'AV28ProcessoRotina',fld:'vPROCESSOROTINA',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29ErroProcessoId',fld:'vERROPROCESSOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28ProcessoRotina',fld:'vPROCESSOROTINA',hsh:true},{av:'AV27ProcessoId',fld:'vPROCESSOID',hsh:true},{av:'AV36GridProcessoRotina',fld:'vGRIDPROCESSOROTINA'},{av:'AV37TProcessoRotina',fld:'vTPROCESSOROTINA'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1551ErroProcessoDescricao',fld:'ERROPROCESSODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV28ProcessoRotina',fld:'vPROCESSOROTINA',hsh:true},{av:'AV27ProcessoId',fld:'vPROCESSOID',hsh:true}],[{av:'AV27ProcessoId',fld:'vPROCESSOID',hsh:true},{av:'AV28ProcessoRotina',fld:'vPROCESSOROTINA',hsh:true}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29ErroProcessoId',fld:'vERROPROCESSOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28ProcessoRotina',fld:'vPROCESSOROTINA',hsh:true},{av:'AV27ProcessoId',fld:'vPROCESSOID',hsh:true},{av:'AV36GridProcessoRotina',fld:'vGRIDPROCESSOROTINA'},{av:'AV37TProcessoRotina',fld:'vTPROCESSOROTINA'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1551ErroProcessoDescricao',fld:'ERROPROCESSODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29ErroProcessoId',fld:'vERROPROCESSOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28ProcessoRotina',fld:'vPROCESSOROTINA',hsh:true},{av:'AV27ProcessoId',fld:'vPROCESSOID',hsh:true},{av:'AV36GridProcessoRotina',fld:'vGRIDPROCESSOROTINA'},{av:'AV37TProcessoRotina',fld:'vTPROCESSOROTINA'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1551ErroProcessoDescricao',fld:'ERROPROCESSODESCRICAO'}],[]];
   this.setVCMap("AV28ProcessoRotina", "vPROCESSOROTINA", 0, "svchar");
   this.setVCMap("AV36GridProcessoRotina", "vGRIDPROCESSOROTINA", 0, "svchar");
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A1551ErroProcessoDescricao", "ERROPROCESSODESCRICAO", 0, "svchar");
   this.setVCMap("AV28ProcessoRotina", "vPROCESSOROTINA", 0, "svchar");
   this.setVCMap("AV36GridProcessoRotina", "vGRIDPROCESSOROTINA", 0, "svchar");
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A1551ErroProcessoDescricao", "ERROPROCESSODESCRICAO", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar({rfrVar:"AV28ProcessoRotina"});
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar({rfrVar:"AV36GridProcessoRotina"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"AV35SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A1551ErroProcessoDescricao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new herroprocesso());
