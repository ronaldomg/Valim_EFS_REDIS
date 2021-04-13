/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:3:23.72
*/
gx.evt.autoSkip = false;
gx.define('haparelhocaracvalor', false, function () {
   this.ServerClass =  "haparelhocaracvalor" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV33SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV36Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e111bm2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121bm2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e171bm2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131bm2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e141bm2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151bm2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e161bm2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e201bm2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e211bm2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e221bm2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e231bm2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e251bm2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e261bm2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,35,38,41,43,45,47,49,51,54,56,57,61,62,63,64,65,66,73];
   this.GXLastCtrlId =73;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",60,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"haparelhocaracvalor",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8837,61,"APARELHOCARACVALORID","","","AparelhoCaracValorId","int",0,"px",4,4,"right",null,[],8837,"AparelhoCaracValorId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8834,62,"APARELHOCARACVALORCONTEUDO","","","AparelhoCaracValorConteudo","svchar",0,"px",30,30,"left",null,[],8834,"AparelhoCaracValorConteudo",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",63,0,"px",17,"px","e201bm2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",64,0,"px",17,"px","e211bm2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",65,0,"px",17,"px","e221bm2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(8832,66,"APARELHOCARACID","Código da Caracteristica","","AparelhoCaracId","int",0,"px",4,4,"right",null,[],8832,"AparelhoCaracId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE6",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE8",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAPARELHOCARACID",gxz:"ZV32AparelhoCaracId",gxold:"OV32AparelhoCaracId",gxvar:"AV32AparelhoCaracId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32AparelhoCaracId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32AparelhoCaracId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACID",gx.O.AV32AparelhoCaracId,0)},c2v:function(){gx.O.AV32AparelhoCaracId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAPARELHOCARACID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACDESCRICAO",gxz:"ZV30AparelhoCaracDescricao",gxold:"OV30AparelhoCaracDescricao",gxvar:"AV30AparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30AparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV30AparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACDESCRICAO",gx.O.AV30AparelhoCaracDescricao,0)},c2v:function(){gx.O.AV30AparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAPARELHOCARACVALORID",gxz:"ZV28AparelhoCaracValorId",gxold:"OV28AparelhoCaracValorId",gxvar:"AV28AparelhoCaracValorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28AparelhoCaracValorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28AparelhoCaracValorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACVALORID",gx.O.AV28AparelhoCaracValorId,0)},c2v:function(){gx.O.AV28AparelhoCaracValorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAPARELHOCARACVALORID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAPARELHOCARACVALORCONTEUDO",gxz:"ZV29AparelhoCaracValorConteudo",gxold:"OV29AparelhoCaracValorConteudo",gxvar:"AV29AparelhoCaracValorConteudo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29AparelhoCaracValorConteudo=Value},v2z:function(Value){gx.O.ZV29AparelhoCaracValorConteudo=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACVALORCONTEUDO",gx.O.AV29AparelhoCaracValorConteudo,0)},c2v:function(){gx.O.AV29AparelhoCaracValorConteudo=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACVALORCONTEUDO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLE4",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[41]={fld:"IMAGE2",grid:0};
   GXValidFnc[43]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[45]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[47]={fld:"IMAGE1",grid:0};
   GXValidFnc[49]={fld:"BTNHELP",grid:0};
   GXValidFnc[51]={fld:"TABLE5",grid:0};
   GXValidFnc[54]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCARACVALORID",gxz:"Z8837AparelhoCaracValorId",gxold:"O8837AparelhoCaracValorId",gxvar:"A8837AparelhoCaracValorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8837AparelhoCaracValorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8837AparelhoCaracValorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APARELHOCARACVALORID",row || gx.fn.currentGridRowImpl(60),gx.O.A8837AparelhoCaracValorId,0)},c2v:function(){gx.O.A8837AparelhoCaracValorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APARELHOCARACVALORID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCARACVALORCONTEUDO",gxz:"Z8834AparelhoCaracValorConteudo",gxold:"O8834AparelhoCaracValorConteudo",gxvar:"A8834AparelhoCaracValorConteudo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8834AparelhoCaracValorConteudo=Value},v2z:function(Value){gx.O.Z8834AparelhoCaracValorConteudo=Value},v2c:function(row){gx.fn.setGridControlValue("APARELHOCARACVALORCONTEUDO",row || gx.fn.currentGridRowImpl(60),gx.O.A8834AparelhoCaracValorConteudo,0)},c2v:function(){gx.O.A8834AparelhoCaracValorConteudo=this.val()},val:function(row){return gx.fn.getGridControlValue("APARELHOCARACVALORCONTEUDO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(60),gx.O.AV7bmpAlt,gx.O.AV38Bmpalt_GXI)},c2v:function(){gx.O.AV38Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV38Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(60),gx.O.AV8bmpExc,gx.O.AV39Bmpexc_GXI)},c2v:function(){gx.O.AV39Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV39Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(60),gx.O.AV16bmpCon,gx.O.AV40Bmpcon_GXI)},c2v:function(){gx.O.AV40Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV40Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"APARELHOCARACID",gxz:"Z8832AparelhoCaracId",gxold:"O8832AparelhoCaracId",gxvar:"A8832AparelhoCaracId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8832AparelhoCaracId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8832AparelhoCaracId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APARELHOCARACID",row || gx.fn.currentGridRowImpl(60),gx.O.A8832AparelhoCaracId,0)},c2v:function(){gx.O.A8832AparelhoCaracId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APARELHOCARACID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV32AparelhoCaracId = 0 ;
   this.ZV32AparelhoCaracId = 0 ;
   this.OV32AparelhoCaracId = 0 ;
   this.AV30AparelhoCaracDescricao = "" ;
   this.ZV30AparelhoCaracDescricao = "" ;
   this.OV30AparelhoCaracDescricao = "" ;
   this.AV28AparelhoCaracValorId = 0 ;
   this.ZV28AparelhoCaracValorId = 0 ;
   this.OV28AparelhoCaracValorId = 0 ;
   this.AV29AparelhoCaracValorConteudo = "" ;
   this.ZV29AparelhoCaracValorConteudo = "" ;
   this.OV29AparelhoCaracValorConteudo = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z8837AparelhoCaracValorId = 0 ;
   this.O8837AparelhoCaracValorId = 0 ;
   this.Z8834AparelhoCaracValorConteudo = "" ;
   this.O8834AparelhoCaracValorConteudo = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z8832AparelhoCaracId = 0 ;
   this.O8832AparelhoCaracId = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV32AparelhoCaracId = 0 ;
   this.AV30AparelhoCaracDescricao = "" ;
   this.AV28AparelhoCaracValorId = 0 ;
   this.AV29AparelhoCaracValorConteudo = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A8833AparelhoCaracEmpresaId = "" ;
   this.A8837AparelhoCaracValorId = 0 ;
   this.A8834AparelhoCaracValorConteudo = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A8832AparelhoCaracId = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV33SnRecuperaFiltro = "" ;
   this.AV36Pgmname = "" ;
   this.Events = {"e111bm2_client": ["'ANTERIOR'", true] ,"e121bm2_client": ["'PROXIMO'", true] ,"e171bm2_client": ["VPAGINA.CLICK", true] ,"e131bm2_client": ["'NOVO'", true] ,"e141bm2_client": ["'FECHAR'", true] ,"e151bm2_client": ["'IMPRIMIR'", true] ,"e161bm2_client": ["'PROCURAR'", true] ,"e201bm2_client": ["'ALTERAR'", true] ,"e211bm2_client": ["'EXCLUIR'", true] ,"e221bm2_client": ["'CONSULTAR'", true] ,"e231bm2_client": ["'ATUALIZAPAGINA'", true] ,"e251bm2_client": ["ENTER", true] ,"e261bm2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28AparelhoCaracValorId',fld:'vAPARELHOCARACVALORID'},{av:'AV29AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28AparelhoCaracValorId',fld:'vAPARELHOCARACVALORID'},{av:'AV29AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{ctrl:'APARELHOCARACVALORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("APARELHOCARACVALORID","Title")',ctrl:'APARELHOCARACVALORID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'APARELHOCARACVALORCONTEUDO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("APARELHOCARACVALORCONTEUDO","Title")',ctrl:'APARELHOCARACVALORCONTEUDO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV28AparelhoCaracValorId',fld:'vAPARELHOCARACVALORID'},{av:'AV29AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28AparelhoCaracValorId',fld:'vAPARELHOCARACVALORID'},{av:'AV29AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28AparelhoCaracValorId',fld:'vAPARELHOCARACVALORID'},{av:'AV29AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28AparelhoCaracValorId',fld:'vAPARELHOCARACVALORID'},{av:'AV29AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV32AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28AparelhoCaracValorId',fld:'vAPARELHOCARACVALORID'},{av:'AV29AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'AV32AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV36Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV32AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV30AparelhoCaracDescricao',fld:'vAPARELHOCARACDESCRICAO'},{av:'AV31QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV37Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV31QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV30AparelhoCaracDescricao',fld:'vAPARELHOCARACDESCRICAO'},{av:'AV32AparelhoCaracId',fld:'vAPARELHOCARACID'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28AparelhoCaracValorId',fld:'vAPARELHOCARACVALORID'},{av:'AV29AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV32AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'A8837AparelhoCaracValorId',fld:'APARELHOCARACVALORID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28AparelhoCaracValorId',fld:'vAPARELHOCARACVALORID'},{av:'AV29AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'A8837AparelhoCaracValorId',fld:'APARELHOCARACVALORID'},{av:'AV32AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV32AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'A8837AparelhoCaracValorId',fld:'APARELHOCARACVALORID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28AparelhoCaracValorId',fld:'vAPARELHOCARACVALORID'},{av:'AV29AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'A8837AparelhoCaracValorId',fld:'APARELHOCARACVALORID'},{av:'AV32AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV32AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'A8837AparelhoCaracValorId',fld:'APARELHOCARACVALORID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28AparelhoCaracValorId',fld:'vAPARELHOCARACVALORID'},{av:'AV29AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'A8837AparelhoCaracValorId',fld:'APARELHOCARACVALORID'},{av:'AV32AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28AparelhoCaracValorId',fld:'vAPARELHOCARACVALORID'},{av:'AV29AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV36Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV36Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV33SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV36Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new haparelhocaracvalor());
