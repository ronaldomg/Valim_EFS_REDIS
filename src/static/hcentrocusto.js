/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:59:3.97
*/
gx.evt.autoSkip = false;
gx.define('hcentrocusto', false, function () {
   this.ServerClass =  "hcentrocusto" ;
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
      this.AV40SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Valid_Centrocustotpclassificid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(48) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CENTROCUSTOTPCLASSIFICID", gx.fn.currentGridRowImpl(48));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e110m2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e120m2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e210m2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e220m2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e230m2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e170m2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e130m2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e140m2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e150m2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e160m2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e240m2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e250m2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e260m2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,55,56,63,64];
   this.GXLastCtrlId =64;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcentrocusto",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(51,49,"CENTROCUSTOID","","","CentroCustoId","svchar",0,"px",30,30,"left",null,[],51,"CentroCustoId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(150,50,"CENTROCUSTOSUPERIOR","","","CentroCustoSuperior","svchar",0,"px",30,30,"left",null,[],150,"CentroCustoSuperior",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(52,51,"CENTROCUSTODESCRICAO","","","CentroCustoDescricao","svchar",0,"px",35,35,"left",null,[],52,"CentroCustoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(10500,52,"CENTROCUSTOTPCLASSIFICID","Código","","CentroCustoTpClassificId","int",0,"px",7,7,"right",null,[],10500,"CentroCustoTpClassificId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(10501,53,"CENTROCUSTOTPCLASSIFICDESC","Classificação","","CentroCustoTpClassificDesc","svchar",0,"px",35,35,"left",null,[],10501,"CentroCustoTpClassificDesc",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",54,0,"px",17,"px","e210m2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",55,0,"px",17,"px","e220m2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",56,0,"px",17,"px","e230m2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCENTROCUSTOID",gxz:"ZV23CentroCustoId",gxold:"OV23CentroCustoId",gxvar:"AV23CentroCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23CentroCustoId=Value},v2z:function(Value){gx.O.ZV23CentroCustoId=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOID",gx.O.AV23CentroCustoId,0)},c2v:function(){gx.O.AV23CentroCustoId=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCENTROCUSTODESCRICAO",gxz:"ZV21CentroCustoDescricao",gxold:"OV21CentroCustoDescricao",gxvar:"AV21CentroCustoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21CentroCustoDescricao=Value},v2z:function(Value){gx.O.ZV21CentroCustoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTODESCRICAO",gx.O.AV21CentroCustoDescricao,0)},c2v:function(){gx.O.AV21CentroCustoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"IMAGE3",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTOID",gxz:"Z51CentroCustoId",gxold:"O51CentroCustoId",gxvar:"A51CentroCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A51CentroCustoId=Value},v2z:function(Value){gx.O.Z51CentroCustoId=Value},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTOID",row || gx.fn.currentGridRowImpl(48),gx.O.A51CentroCustoId,0)},c2v:function(){gx.O.A51CentroCustoId=this.val()},val:function(row){return gx.fn.getGridControlValue("CENTROCUSTOID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTOSUPERIOR",gxz:"Z150CentroCustoSuperior",gxold:"O150CentroCustoSuperior",gxvar:"A150CentroCustoSuperior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A150CentroCustoSuperior=Value},v2z:function(Value){gx.O.Z150CentroCustoSuperior=Value},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTOSUPERIOR",row || gx.fn.currentGridRowImpl(48),gx.O.A150CentroCustoSuperior,0)},c2v:function(){gx.O.A150CentroCustoSuperior=this.val()},val:function(row){return gx.fn.getGridControlValue("CENTROCUSTOSUPERIOR",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTODESCRICAO",gxz:"Z52CentroCustoDescricao",gxold:"O52CentroCustoDescricao",gxvar:"A52CentroCustoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A52CentroCustoDescricao=Value},v2z:function(Value){gx.O.Z52CentroCustoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTODESCRICAO",row || gx.fn.currentGridRowImpl(48),gx.O.A52CentroCustoDescricao,0)},c2v:function(){gx.O.A52CentroCustoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CENTROCUSTODESCRICAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:this.Valid_Centrocustotpclassificid,isvalid:null,rgrid:[],fld:"CENTROCUSTOTPCLASSIFICID",gxz:"Z10500CentroCustoTpClassificId",gxold:"O10500CentroCustoTpClassificId",gxvar:"A10500CentroCustoTpClassificId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10500CentroCustoTpClassificId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10500CentroCustoTpClassificId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTOTPCLASSIFICID",row || gx.fn.currentGridRowImpl(48),gx.O.A10500CentroCustoTpClassificId,0)},c2v:function(){gx.O.A10500CentroCustoTpClassificId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CENTROCUSTOTPCLASSIFICID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTOTPCLASSIFICDESC",gxz:"Z10501CentroCustoTpClassificDesc",gxold:"O10501CentroCustoTpClassificDesc",gxvar:"A10501CentroCustoTpClassificDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10501CentroCustoTpClassificDesc=Value},v2z:function(Value){gx.O.Z10501CentroCustoTpClassificDesc=Value},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTOTPCLASSIFICDESC",row || gx.fn.currentGridRowImpl(48),gx.O.A10501CentroCustoTpClassificDesc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10501CentroCustoTpClassificDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("CENTROCUSTOTPCLASSIFICDESC",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV46Bmpalt_GXI)},c2v:function(){gx.O.AV46Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV46Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV47Bmpexc_GXI)},c2v:function(){gx.O.AV47Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV47Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV48Bmpcon_GXI)},c2v:function(){gx.O.AV48Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV48Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[63]={fld:"JS", format:2,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV23CentroCustoId = "" ;
   this.ZV23CentroCustoId = "" ;
   this.OV23CentroCustoId = "" ;
   this.AV21CentroCustoDescricao = "" ;
   this.ZV21CentroCustoDescricao = "" ;
   this.OV21CentroCustoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z51CentroCustoId = "" ;
   this.O51CentroCustoId = "" ;
   this.Z150CentroCustoSuperior = "" ;
   this.O150CentroCustoSuperior = "" ;
   this.Z52CentroCustoDescricao = "" ;
   this.O52CentroCustoDescricao = "" ;
   this.Z10500CentroCustoTpClassificId = 0 ;
   this.O10500CentroCustoTpClassificId = 0 ;
   this.Z10501CentroCustoTpClassificDesc = "" ;
   this.O10501CentroCustoTpClassificDesc = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV23CentroCustoId = "" ;
   this.AV21CentroCustoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A153EmpresaCentroCustoEmpresaId = "" ;
   this.A10499CentroCustoTpClassificempid = "" ;
   this.A51CentroCustoId = "" ;
   this.A150CentroCustoSuperior = "" ;
   this.A52CentroCustoDescricao = "" ;
   this.A10500CentroCustoTpClassificId = 0 ;
   this.A10501CentroCustoTpClassificDesc = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV40SnRecuperaFiltro = "" ;
   this.Events = {"e110m2_client": ["'ANTERIOR'", true] ,"e120m2_client": ["'PROXIMO'", true] ,"e210m2_client": ["'ALTERAR'", true] ,"e220m2_client": ["'EXCLUIR'", true] ,"e230m2_client": ["'CONSULTAR'", true] ,"e170m2_client": ["VPAGINA.CLICK", true] ,"e130m2_client": ["'NOVO'", true] ,"e140m2_client": ["'FECHAR'", true] ,"e150m2_client": ["'IMPRIMIR'", true] ,"e160m2_client": ["'PROCURAR'", true] ,"e240m2_client": ["'ATUALIZAPAGINA'", true] ,"e250m2_client": ["ENTER", true] ,"e260m2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV21CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV21CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'CENTROCUSTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CENTROCUSTOID","Title")',ctrl:'CENTROCUSTOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CENTROCUSTODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CENTROCUSTODESCRICAO","Title")',ctrl:'CENTROCUSTODESCRICAO',prop:'Title'},{ctrl:'CENTROCUSTOSUPERIOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CENTROCUSTOSUPERIOR","Title")',ctrl:'CENTROCUSTOSUPERIOR',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV34filtros',fld:'vFILTROS'},{av:'AV23CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV21CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV21CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV34filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV21CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV34filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV21CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'AV34filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV21CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'AV34filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV21CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'AV34filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV21CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV34filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV45Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV41QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV21CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV34filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV21CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV40SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV40SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[64]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV40SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcentrocusto());
