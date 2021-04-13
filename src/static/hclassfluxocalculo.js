/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:56:36.5
*/
gx.evt.autoSkip = false;
gx.define('hclassfluxocalculo', false, function () {
   this.ServerClass =  "hclassfluxocalculo" ;
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
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV34SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV41Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV35TipoClassFluxoEmpresaId=gx.fn.getControlValue("vTIPOCLASSFLUXOEMPRESAID") ;
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
   this.e112652_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122652_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e162652_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e132652_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e142652_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152652_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e202652_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e212652_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e222652_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e232652_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e242652_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e252652_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,32,35,38,41,43,45,47,49,52,54,55,59,60,61,62,63,64,71];
   this.GXLastCtrlId =71;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",58,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hclassfluxocalculo",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(10218,59,"CLASSFLUXOCALCULOID","Grupo de Cálculo","","ClassFluxoCalculoId","svchar",0,"px",10,10,"left",null,[],10218,"ClassFluxoCalculoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Classfluxocalculodescricao",60,"vCLASSFLUXOCALCULODESCRICAO","Descrição","","ClassFluxoCalculoDescricao","svchar",0,"px",60,60,"left",null,[],"Classfluxocalculodescricao","ClassFluxoCalculoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(10342,61,"CLASSFLUXOCALCULOOPERACAO","Operação","ClassFluxoCalculoOperacao","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",62,0,"px",17,"px","e202652_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",63,0,"px",17,"px","e212652_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",64,0,"px",17,"px","e222652_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE1",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Tipoclassfluxoid,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOCLASSFLUXOID",gxz:"ZV36TipoClassFluxoId",gxold:"OV36TipoClassFluxoId",gxvar:"AV36TipoClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36TipoClassFluxoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36TipoClassFluxoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXOID",gx.O.AV36TipoClassFluxoId,0)},c2v:function(){gx.O.AV36TipoClassFluxoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCLASSFLUXOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCLASSFLUXODESCRICAO",gxz:"ZV37TipoClassFluxoDescricao",gxold:"OV37TipoClassFluxoDescricao",gxvar:"AV37TipoClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37TipoClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV37TipoClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXODESCRICAO",gx.O.AV37TipoClassFluxoDescricao,0)},c2v:function(){gx.O.AV37TipoClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[25]={fld:"TABLE3",grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Classfluxoid,isvalid:null,rgrid:[this.GridContainer],fld:"vCLASSFLUXOID",gxz:"ZV27ClassFluxoId",gxold:"OV27ClassFluxoId",gxvar:"AV27ClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ClassFluxoId=Value},v2z:function(Value){gx.O.ZV27ClassFluxoId=Value},v2c:function(){gx.fn.setControlValue("vCLASSFLUXOID",gx.O.AV27ClassFluxoId,0)},c2v:function(){gx.O.AV27ClassFluxoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSFLUXOID")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSFLUXODESCRICAO",gxz:"ZV28ClassFluxoDescricao",gxold:"OV28ClassFluxoDescricao",gxvar:"AV28ClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV28ClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSFLUXODESCRICAO",gx.O.AV28ClassFluxoDescricao,0)},c2v:function(){gx.O.AV28ClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLE4",grid:0};
   GXValidFnc[38]={fld:"TABLE6",grid:0};
   GXValidFnc[41]={fld:"IMAGE2",grid:0};
   GXValidFnc[43]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[45]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   GXValidFnc[49]={fld:"TABLE5",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOCALCULOID",gxz:"Z10218ClassFluxoCalculoId",gxold:"O10218ClassFluxoCalculoId",gxvar:"A10218ClassFluxoCalculoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10218ClassFluxoCalculoId=Value},v2z:function(Value){gx.O.Z10218ClassFluxoCalculoId=Value},v2c:function(row){gx.fn.setGridControlValue("CLASSFLUXOCALCULOID",row || gx.fn.currentGridRowImpl(58),gx.O.A10218ClassFluxoCalculoId,0)},c2v:function(){gx.O.A10218ClassFluxoCalculoId=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSFLUXOCALCULOID",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSFLUXOCALCULODESCRICAO",gxz:"ZV38ClassFluxoCalculoDescricao",gxold:"OV38ClassFluxoCalculoDescricao",gxvar:"AV38ClassFluxoCalculoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV38ClassFluxoCalculoDescricao=Value},v2z:function(Value){gx.O.ZV38ClassFluxoCalculoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vCLASSFLUXOCALCULODESCRICAO",row || gx.fn.currentGridRowImpl(58),gx.O.AV38ClassFluxoCalculoDescricao,0)},c2v:function(){gx.O.AV38ClassFluxoCalculoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vCLASSFLUXOCALCULODESCRICAO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOCALCULOOPERACAO",gxz:"Z10342ClassFluxoCalculoOperacao",gxold:"O10342ClassFluxoCalculoOperacao",gxvar:"A10342ClassFluxoCalculoOperacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A10342ClassFluxoCalculoOperacao=Value},v2z:function(Value){gx.O.Z10342ClassFluxoCalculoOperacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CLASSFLUXOCALCULOOPERACAO",row || gx.fn.currentGridRowImpl(58),gx.O.A10342ClassFluxoCalculoOperacao)},c2v:function(){gx.O.A10342ClassFluxoCalculoOperacao=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSFLUXOCALCULOOPERACAO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(58),gx.O.AV7bmpAlt,gx.O.AV43Bmpalt_GXI)},c2v:function(){gx.O.AV43Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV43Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58),gx.O.AV8bmpExc,gx.O.AV44Bmpexc_GXI)},c2v:function(){gx.O.AV44Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV44Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(58),gx.O.AV16bmpCon,gx.O.AV45Bmpcon_GXI)},c2v:function(){gx.O.AV45Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV45Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV36TipoClassFluxoId = 0 ;
   this.ZV36TipoClassFluxoId = 0 ;
   this.OV36TipoClassFluxoId = 0 ;
   this.AV37TipoClassFluxoDescricao = "" ;
   this.ZV37TipoClassFluxoDescricao = "" ;
   this.OV37TipoClassFluxoDescricao = "" ;
   this.AV27ClassFluxoId = "" ;
   this.ZV27ClassFluxoId = "" ;
   this.OV27ClassFluxoId = "" ;
   this.AV28ClassFluxoDescricao = "" ;
   this.ZV28ClassFluxoDescricao = "" ;
   this.OV28ClassFluxoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z10218ClassFluxoCalculoId = "" ;
   this.O10218ClassFluxoCalculoId = "" ;
   this.ZV38ClassFluxoCalculoDescricao = "" ;
   this.OV38ClassFluxoCalculoDescricao = "" ;
   this.Z10342ClassFluxoCalculoOperacao = "" ;
   this.O10342ClassFluxoCalculoOperacao = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV36TipoClassFluxoId = 0 ;
   this.AV37TipoClassFluxoDescricao = "" ;
   this.AV27ClassFluxoId = "" ;
   this.AV28ClassFluxoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV35TipoClassFluxoEmpresaId = "" ;
   this.A3288ClassFluxoId = "" ;
   this.A10199TipoClassFluxoId = 0 ;
   this.A10198TipoClassFluxoEmpresaId = "" ;
   this.A10218ClassFluxoCalculoId = "" ;
   this.AV38ClassFluxoCalculoDescricao = "" ;
   this.A10342ClassFluxoCalculoOperacao = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A3289ClassFluxoDescricao = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV34SnRecuperaFiltro = "" ;
   this.AV41Pgmname = "" ;
   this.Events = {"e112652_client": ["'ANTERIOR'", true] ,"e122652_client": ["'PROXIMO'", true] ,"e162652_client": ["VPAGINA.CLICK", true] ,"e132652_client": ["'NOVO'", true] ,"e142652_client": ["'FECHAR'", true] ,"e152652_client": ["'PROCURAR'", true] ,"e202652_client": ["'ALTERAR'", true] ,"e212652_client": ["'EXCLUIR'", true] ,"e222652_client": ["'CONSULTAR'", true] ,"e232652_client": ["'ATUALIZAPAGINA'", true] ,"e242652_client": ["ENTER", true] ,"e252652_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'A10218ClassFluxoCalculoId',fld:'CLASSFLUXOCALCULOID'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'A10218ClassFluxoCalculoId',fld:'CLASSFLUXOCALCULOID'}],[{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'A10218ClassFluxoCalculoId',fld:'CLASSFLUXOCALCULOID'}],[{av:'AV38ClassFluxoCalculoDescricao',fld:'vCLASSFLUXOCALCULODESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'A10218ClassFluxoCalculoId',fld:'CLASSFLUXOCALCULOID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'A10218ClassFluxoCalculoId',fld:'CLASSFLUXOCALCULOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'A10218ClassFluxoCalculoId',fld:'CLASSFLUXOCALCULOID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'A10218ClassFluxoCalculoId',fld:'CLASSFLUXOCALCULOID'},{av:'AV31ClassFluxoSelecaoDescricao',fld:'vCLASSFLUXOSELECAODESCRICAO'},{av:'AV30ClassFluxoSelecaoSeq',fld:'vCLASSFLUXOSELECAOSEQ'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'A10218ClassFluxoCalculoId',fld:'CLASSFLUXOCALCULOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'A10218ClassFluxoCalculoId',fld:'CLASSFLUXOCALCULOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'A10218ClassFluxoCalculoId',fld:'CLASSFLUXOCALCULOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'A10218ClassFluxoCalculoId',fld:'CLASSFLUXOCALCULOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'A10218ClassFluxoCalculoId',fld:'CLASSFLUXOCALCULOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'A10218ClassFluxoCalculoId',fld:'CLASSFLUXOCALCULOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV27ClassFluxoId',fld:'vCLASSFLUXOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV35TipoClassFluxoEmpresaId',fld:'vTIPOCLASSFLUXOEMPRESAID'},{av:'A10218ClassFluxoCalculoId',fld:'CLASSFLUXOCALCULOID'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV35TipoClassFluxoEmpresaId", "vTIPOCLASSFLUXOEMPRESAID", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV35TipoClassFluxoEmpresaId", "vTIPOCLASSFLUXOEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV34SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV41Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV35TipoClassFluxoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A10218ClassFluxoCalculoId", rfrProp:"Value", gxAttId:"10218"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hclassfluxocalculo());
