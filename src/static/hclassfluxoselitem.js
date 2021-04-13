/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:10:2.0
*/
gx.evt.autoSkip = false;
gx.define('hclassfluxoselitem', false, function () {
   this.ServerClass =  "hclassfluxoselitem" ;
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
      this.AV34TipoClassFluxoEmpresaId=gx.fn.getControlValue("vTIPOCLASSFLUXOEMPRESAID") ;
      this.AV33SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV39Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV31ClassFluxoSelecaoTipo=gx.fn.getControlValue("vCLASSFLUXOSELECAOTIPO") ;
   };
   this.Validv_Tipoclassfluxoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCLASSFLUXOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Classfluxoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLASSFLUXOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Classfluxoselecaoseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLASSFLUXOSELECAOSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11rs2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12rs2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16rs2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13rs2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14rs2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15rs2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e19rs2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20rs2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21rs2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e22rs2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24rs2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25rs2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,32,35,37,40,42,44,47,50,53,55,57,59,61,64,66,67,71,72,73,74,81];
   this.GXLastCtrlId =81;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",70,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hclassfluxoselitem",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3297,71,"CLASSFLUXOSELITEMSEQ","","","ClassFluxoSelItemSeq","int",0,"px",4,4,"right",null,[],3297,"ClassFluxoSelItemSeq",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",72,0,"px",17,"px","e19rs2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",73,0,"px",17,"px","e20rs2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",74,0,"px",17,"px","e21rs2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE1",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tipoclassfluxoid,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOCLASSFLUXOID",gxz:"ZV35TipoClassFluxoId",gxold:"OV35TipoClassFluxoId",gxvar:"AV35TipoClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35TipoClassFluxoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35TipoClassFluxoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXOID",gx.O.AV35TipoClassFluxoId,0)},c2v:function(){gx.O.AV35TipoClassFluxoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCLASSFLUXOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCLASSFLUXODESCRICAO",gxz:"ZV36TipoClassFluxoDescricao",gxold:"OV36TipoClassFluxoDescricao",gxvar:"AV36TipoClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36TipoClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV36TipoClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXODESCRICAO",gx.O.AV36TipoClassFluxoDescricao,0)},c2v:function(){gx.O.AV36TipoClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[25]={fld:"TABLE3",grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Classfluxoid,isvalid:null,rgrid:[this.GridContainer],fld:"vCLASSFLUXOID",gxz:"ZV27ClassFluxoId",gxold:"OV27ClassFluxoId",gxvar:"AV27ClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ClassFluxoId=Value},v2z:function(Value){gx.O.ZV27ClassFluxoId=Value},v2c:function(){gx.fn.setControlValue("vCLASSFLUXOID",gx.O.AV27ClassFluxoId,0)},c2v:function(){gx.O.AV27ClassFluxoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSFLUXOID")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSFLUXODESCRICAO",gxz:"ZV28ClassFluxoDescricao",gxold:"OV28ClassFluxoDescricao",gxvar:"AV28ClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV28ClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSFLUXODESCRICAO",gx.O.AV28ClassFluxoDescricao,0)},c2v:function(){gx.O.AV28ClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[37]={fld:"TABLE7",grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Classfluxoselecaoseq,isvalid:null,rgrid:[this.GridContainer],fld:"vCLASSFLUXOSELECAOSEQ",gxz:"ZV29ClassFluxoSelecaoSeq",gxold:"OV29ClassFluxoSelecaoSeq",gxvar:"AV29ClassFluxoSelecaoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ClassFluxoSelecaoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29ClassFluxoSelecaoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLASSFLUXOSELECAOSEQ",gx.O.AV29ClassFluxoSelecaoSeq,0)},c2v:function(){gx.O.AV29ClassFluxoSelecaoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLASSFLUXOSELECAOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSFLUXOSELECAODESCRICAO",gxz:"ZV30ClassFluxoSelecaoDescricao",gxold:"OV30ClassFluxoSelecaoDescricao",gxvar:"AV30ClassFluxoSelecaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ClassFluxoSelecaoDescricao=Value},v2z:function(Value){gx.O.ZV30ClassFluxoSelecaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSFLUXOSELECAODESCRICAO",gx.O.AV30ClassFluxoSelecaoDescricao,0)},c2v:function(){gx.O.AV30ClassFluxoSelecaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSFLUXOSELECAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TABLE4",grid:0};
   GXValidFnc[50]={fld:"TABLE6",grid:0};
   GXValidFnc[53]={fld:"IMAGE2",grid:0};
   GXValidFnc[55]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[57]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[59]={fld:"BTNHELP",grid:0};
   GXValidFnc[61]={fld:"TABLE5",grid:0};
   GXValidFnc[64]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOSELITEMSEQ",gxz:"Z3297ClassFluxoSelItemSeq",gxold:"O3297ClassFluxoSelItemSeq",gxvar:"A3297ClassFluxoSelItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3297ClassFluxoSelItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3297ClassFluxoSelItemSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CLASSFLUXOSELITEMSEQ",row || gx.fn.currentGridRowImpl(70),gx.O.A3297ClassFluxoSelItemSeq,0)},c2v:function(){gx.O.A3297ClassFluxoSelItemSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CLASSFLUXOSELITEMSEQ",row || gx.fn.currentGridRowImpl(70),'.')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(70),gx.O.AV7bmpAlt,gx.O.AV41Bmpalt_GXI)},c2v:function(){gx.O.AV41Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(70))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(70))}, gxvar_GXI:'AV41Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(70),gx.O.AV8bmpExc,gx.O.AV42Bmpexc_GXI)},c2v:function(){gx.O.AV42Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(70))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(70))}, gxvar_GXI:'AV42Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(70),gx.O.AV16bmpCon,gx.O.AV43Bmpcon_GXI)},c2v:function(){gx.O.AV43Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(70))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(70))}, gxvar_GXI:'AV43Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[81]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV35TipoClassFluxoId = 0 ;
   this.ZV35TipoClassFluxoId = 0 ;
   this.OV35TipoClassFluxoId = 0 ;
   this.AV36TipoClassFluxoDescricao = "" ;
   this.ZV36TipoClassFluxoDescricao = "" ;
   this.OV36TipoClassFluxoDescricao = "" ;
   this.AV27ClassFluxoId = "" ;
   this.ZV27ClassFluxoId = "" ;
   this.OV27ClassFluxoId = "" ;
   this.AV28ClassFluxoDescricao = "" ;
   this.ZV28ClassFluxoDescricao = "" ;
   this.OV28ClassFluxoDescricao = "" ;
   this.AV29ClassFluxoSelecaoSeq = 0 ;
   this.ZV29ClassFluxoSelecaoSeq = 0 ;
   this.OV29ClassFluxoSelecaoSeq = 0 ;
   this.AV30ClassFluxoSelecaoDescricao = "" ;
   this.ZV30ClassFluxoSelecaoDescricao = "" ;
   this.OV30ClassFluxoSelecaoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3297ClassFluxoSelItemSeq = 0 ;
   this.O3297ClassFluxoSelItemSeq = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV35TipoClassFluxoId = 0 ;
   this.AV36TipoClassFluxoDescricao = "" ;
   this.AV27ClassFluxoId = "" ;
   this.AV28ClassFluxoDescricao = "" ;
   this.AV29ClassFluxoSelecaoSeq = 0 ;
   this.AV30ClassFluxoSelecaoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV34TipoClassFluxoEmpresaId = "" ;
   this.AV31ClassFluxoSelecaoTipo = "" ;
   this.A3293ClassFluxoSelecaoSeq = 0 ;
   this.A3288ClassFluxoId = "" ;
   this.A10199TipoClassFluxoId = 0 ;
   this.A10198TipoClassFluxoEmpresaId = "" ;
   this.A3297ClassFluxoSelItemSeq = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A3294ClassFluxoSelecaoDescricao = "" ;
   this.A3289ClassFluxoDescricao = "" ;
   this.AV33SnRecuperaFiltro = "" ;
   this.AV39Pgmname = "" ;
   this.Events = {"e11rs2_client": ["'ANTERIOR'", true] ,"e12rs2_client": ["'PROXIMO'", true] ,"e16rs2_client": ["VPAGINA.CLICK", true] ,"e13rs2_client": ["'NOVO'", true] ,"e14rs2_client": ["'FECHAR'", true] ,"e15rs2_client": ["'PROCURAR'", true] ,"e19rs2_client": ["'ALTERAR'", true] ,"e20rs2_client": ["'EXCLUIR'", true] ,"e21rs2_client": ["'CONSULTAR'", true] ,"e22rs2_client": ["'ATUALIZAPAGINA'", true] ,"e24rs2_client": ["ENTER", true] ,"e25rs2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV34TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV35TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV34TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV35TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{ctrl:'CLASSFLUXOSELITEMSEQ',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CLASSFLUXOSELITEMSEQ","Title")',ctrl:'CLASSFLUXOSELITEMSEQ',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV34TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV35TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV34TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV35TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV34TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV35TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV34TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV35TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV36TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV31ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'AV31ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV36TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV35TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV34TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'AV34TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV35TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV36TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'}],[{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV36TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV35TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV34TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV34TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV35TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV34TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV35TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV36TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV31ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'A3297ClassFluxoSelItemSeq',fld:'CLASSFLUXOSELITEMSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'A3297ClassFluxoSelItemSeq',fld:'CLASSFLUXOSELITEMSEQ'},{av:'AV31ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV36TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV35TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV34TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV34TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV35TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV36TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV31ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'A3297ClassFluxoSelItemSeq',fld:'CLASSFLUXOSELITEMSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'A3297ClassFluxoSelItemSeq',fld:'CLASSFLUXOSELITEMSEQ'},{av:'AV31ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV36TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV35TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV34TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV34TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV35TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV36TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV31ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'A3297ClassFluxoSelItemSeq',fld:'CLASSFLUXOSELITEMSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'A3297ClassFluxoSelItemSeq',fld:'CLASSFLUXOSELITEMSEQ'},{av:'AV31ClassFluxoSelecaoTipo',fld:'vCLASSFLUXOSELECAOTIPO'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV36TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV35TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV34TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV34TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV35TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV29ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV34TipoClassFluxoEmpresaId", "vTIPOCLASSFLUXOEMPRESAID", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV39Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV31ClassFluxoSelecaoTipo", "vCLASSFLUXOSELECAOTIPO", 0, "char");
   this.setVCMap("AV34TipoClassFluxoEmpresaId", "vTIPOCLASSFLUXOEMPRESAID", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV39Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[81]);
   GridContainer.addRefreshingVar({rfrVar:"AV34TipoClassFluxoEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[40]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV33SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV39Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hclassfluxoselitem());
