/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:23:22.14
*/
gx.evt.autoSkip = false;
gx.define('hdepartamento', false, function () {
   this.ServerClass =  "hdepartamento" ;
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
      this.AV38SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A1228FilialEmpresaId=gx.fn.getControlValue("FILIALEMPRESAID") ;
      this.A1156FilialId=gx.fn.getIntegerValue("FILIALID",'.') ;
      this.A1136FilialNome=gx.fn.getControlValue("FILIALNOME") ;
   };
   this.Validv_Departamentofilialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDEPARTAMENTOFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Responsavelpatid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(54) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("RESPONSAVELPATID", gx.fn.currentGridRowImpl(54));
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
   this.Validv_Departamentofilialempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDEPARTAMENTOFILIALEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11dh2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12dh2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17dh2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13dh2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14dh2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15dh2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16dh2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20dh2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21dh2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22dh2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23dh2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25dh2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26dh2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,24,29,32,35,37,39,41,43,45,48,50,51,55,56,57,58,59,60,61,67,69,70,71,72];
   this.GXLastCtrlId =72;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",54,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hdepartamento",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2248,55,"DEPARTAMENTOCODIGO","","","DepartamentoCodigo","svchar",0,"px",15,15,"left",null,[],2248,"DepartamentoCodigo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2249,56,"DEPARTAMENTONOME","","","DepartamentoNome","svchar",0,"px",40,40,"left",null,[],2249,"DepartamentoNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2281,57,"RESPONSAVELPATID","Código","","ResponsavelPatId","int",0,"px",4,4,"right",null,[],2281,"ResponsavelPatId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2282,58,"RESPONSAVELPATNOME","Nome Responsável","","ResponsavelPatNome","svchar",0,"px",40,40,"left",null,[],2282,"ResponsavelPatNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",59,0,"px",17,"px","e20dh2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",60,0,"px",17,"px","e21dh2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",61,0,"px",17,"px","e22dh2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEPARTAMENTOCODIGO",gxz:"ZV27DepartamentoCodigo",gxold:"OV27DepartamentoCodigo",gxvar:"AV27DepartamentoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27DepartamentoCodigo=Value},v2z:function(Value){gx.O.ZV27DepartamentoCodigo=Value},v2c:function(){gx.fn.setControlValue("vDEPARTAMENTOCODIGO",gx.O.AV27DepartamentoCodigo,0)},c2v:function(){gx.O.AV27DepartamentoCodigo=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTAMENTOCODIGO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEPARTAMENTONOME",gxz:"ZV28DepartamentoNome",gxold:"OV28DepartamentoNome",gxvar:"AV28DepartamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28DepartamentoNome=Value},v2z:function(Value){gx.O.ZV28DepartamentoNome=Value},v2c:function(){gx.fn.setControlValue("vDEPARTAMENTONOME",gx.O.AV28DepartamentoNome,0)},c2v:function(){gx.O.AV28DepartamentoNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Departamentofilialid,isvalid:null,rgrid:[this.GridContainer],fld:"vDEPARTAMENTOFILIALID",gxz:"ZV32DepartamentoFilialId",gxold:"OV32DepartamentoFilialId",gxvar:"AV32DepartamentoFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32DepartamentoFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32DepartamentoFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDEPARTAMENTOFILIALID",gx.O.AV32DepartamentoFilialId,0)},c2v:function(){gx.O.AV32DepartamentoFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDEPARTAMENTOFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPARTAMENTOFILIALDESC",gxz:"ZV33DepartamentoFilialDesc",gxold:"OV33DepartamentoFilialDesc",gxvar:"AV33DepartamentoFilialDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33DepartamentoFilialDesc=Value},v2z:function(Value){gx.O.ZV33DepartamentoFilialDesc=Value},v2c:function(){gx.fn.setControlValue("vDEPARTAMENTOFILIALDESC",gx.O.AV33DepartamentoFilialDesc,0)},c2v:function(){gx.O.AV33DepartamentoFilialDesc=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTAMENTOFILIALDESC")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TABLE4",grid:0};
   GXValidFnc[32]={fld:"TABLE1",grid:0};
   GXValidFnc[35]={fld:"IMAGE2",grid:0};
   GXValidFnc[37]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[39]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[41]={fld:"IMAGE1",grid:0};
   GXValidFnc[43]={fld:"BTNHELP",grid:0};
   GXValidFnc[45]={fld:"TABLE5",grid:0};
   GXValidFnc[48]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPARTAMENTOCODIGO",gxz:"Z2248DepartamentoCodigo",gxold:"O2248DepartamentoCodigo",gxvar:"A2248DepartamentoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2248DepartamentoCodigo=Value},v2z:function(Value){gx.O.Z2248DepartamentoCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("DEPARTAMENTOCODIGO",row || gx.fn.currentGridRowImpl(54),gx.O.A2248DepartamentoCodigo,0)},c2v:function(){gx.O.A2248DepartamentoCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPARTAMENTOCODIGO",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPARTAMENTONOME",gxz:"Z2249DepartamentoNome",gxold:"O2249DepartamentoNome",gxvar:"A2249DepartamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2249DepartamentoNome=Value},v2z:function(Value){gx.O.Z2249DepartamentoNome=Value},v2c:function(row){gx.fn.setGridControlValue("DEPARTAMENTONOME",row || gx.fn.currentGridRowImpl(54),gx.O.A2249DepartamentoNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2249DepartamentoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPARTAMENTONOME",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:this.Valid_Responsavelpatid,isvalid:null,rgrid:[],fld:"RESPONSAVELPATID",gxz:"Z2281ResponsavelPatId",gxold:"O2281ResponsavelPatId",gxvar:"A2281ResponsavelPatId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2281ResponsavelPatId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2281ResponsavelPatId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("RESPONSAVELPATID",row || gx.fn.currentGridRowImpl(54),gx.O.A2281ResponsavelPatId,0)},c2v:function(){gx.O.A2281ResponsavelPatId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("RESPONSAVELPATID",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"RESPONSAVELPATNOME",gxz:"Z2282ResponsavelPatNome",gxold:"O2282ResponsavelPatNome",gxvar:"A2282ResponsavelPatNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2282ResponsavelPatNome=Value},v2z:function(Value){gx.O.Z2282ResponsavelPatNome=Value},v2c:function(row){gx.fn.setGridControlValue("RESPONSAVELPATNOME",row || gx.fn.currentGridRowImpl(54),gx.O.A2282ResponsavelPatNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2282ResponsavelPatNome=this.val()},val:function(row){return gx.fn.getGridControlValue("RESPONSAVELPATNOME",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(54),gx.O.AV7bmpAlt,gx.O.AV44Bmpalt_GXI)},c2v:function(){gx.O.AV44Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV44Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(54),gx.O.AV8bmpExc,gx.O.AV45Bmpexc_GXI)},c2v:function(){gx.O.AV45Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV45Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(54),gx.O.AV16bmpCon,gx.O.AV46Bmpcon_GXI)},c2v:function(){gx.O.AV46Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV46Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Departamentofilialempid,isvalid:null,rgrid:[],fld:"vDEPARTAMENTOFILIALEMPID",gxz:"ZV34DepartamentoFilialEmpId",gxold:"OV34DepartamentoFilialEmpId",gxvar:"AV34DepartamentoFilialEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34DepartamentoFilialEmpId=Value},v2z:function(Value){gx.O.ZV34DepartamentoFilialEmpId=Value},v2c:function(){gx.fn.setControlValue("vDEPARTAMENTOFILIALEMPID",gx.O.AV34DepartamentoFilialEmpId,0)},c2v:function(){gx.O.AV34DepartamentoFilialEmpId=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTAMENTOFILIALEMPID")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"JS", format:2,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV39Qtde",gxold:"OV39Qtde",gxvar:"AV39Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV39Qtde,0)},c2v:function(){gx.O.AV39Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"PROMPT_DEPARTAMENTOFILIALID",grid:0};
   this.AV27DepartamentoCodigo = "" ;
   this.ZV27DepartamentoCodigo = "" ;
   this.OV27DepartamentoCodigo = "" ;
   this.AV28DepartamentoNome = "" ;
   this.ZV28DepartamentoNome = "" ;
   this.OV28DepartamentoNome = "" ;
   this.AV32DepartamentoFilialId = 0 ;
   this.ZV32DepartamentoFilialId = 0 ;
   this.OV32DepartamentoFilialId = 0 ;
   this.AV33DepartamentoFilialDesc = "" ;
   this.ZV33DepartamentoFilialDesc = "" ;
   this.OV33DepartamentoFilialDesc = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2248DepartamentoCodigo = "" ;
   this.O2248DepartamentoCodigo = "" ;
   this.Z2249DepartamentoNome = "" ;
   this.O2249DepartamentoNome = "" ;
   this.Z2281ResponsavelPatId = 0 ;
   this.O2281ResponsavelPatId = 0 ;
   this.Z2282ResponsavelPatNome = "" ;
   this.O2282ResponsavelPatNome = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV34DepartamentoFilialEmpId = "" ;
   this.ZV34DepartamentoFilialEmpId = "" ;
   this.OV34DepartamentoFilialEmpId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV39Qtde = 0 ;
   this.ZV39Qtde = 0 ;
   this.OV39Qtde = 0 ;
   this.AV27DepartamentoCodigo = "" ;
   this.AV28DepartamentoNome = "" ;
   this.AV32DepartamentoFilialId = 0 ;
   this.AV33DepartamentoFilialDesc = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV34DepartamentoFilialEmpId = "" ;
   this.AV11OrderedBy = 0 ;
   this.AV39Qtde = 0 ;
   this.A7591FilialDepartamentoId = 0 ;
   this.A2247DepartamentoEmpresaId = "" ;
   this.A2280ResponsavelPatEmpresaId = "" ;
   this.A2248DepartamentoCodigo = "" ;
   this.A2249DepartamentoNome = "" ;
   this.A2281ResponsavelPatId = 0 ;
   this.A2282ResponsavelPatNome = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV38SnRecuperaFiltro = "" ;
   this.Events = {"e11dh2_client": ["'ANTERIOR'", true] ,"e12dh2_client": ["'PROXIMO'", true] ,"e17dh2_client": ["VPAGINA.CLICK", true] ,"e13dh2_client": ["'NOVO'", true] ,"e14dh2_client": ["'FECHAR'", true] ,"e15dh2_client": ["'IMPRIMIR'", true] ,"e16dh2_client": ["'PROCURAR'", true] ,"e20dh2_client": ["'ALTERAR'", true] ,"e21dh2_client": ["'EXCLUIR'", true] ,"e22dh2_client": ["'CONSULTAR'", true] ,"e23dh2_client": ["'ATUALIZAPAGINA'", true] ,"e25dh2_client": ["ENTER", true] ,"e26dh2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV28DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV32DepartamentoFilialId',fld:'vDEPARTAMENTOFILIALID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV34DepartamentoFilialEmpId',fld:'vDEPARTAMENTOFILIALEMPID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV39Qtde',fld:'vQTDE'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV28DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV32DepartamentoFilialId',fld:'vDEPARTAMENTOFILIALID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV34DepartamentoFilialEmpId',fld:'vDEPARTAMENTOFILIALEMPID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV39Qtde',fld:'vQTDE'}],[{ctrl:'DEPARTAMENTOCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DEPARTAMENTOCODIGO","Title")',ctrl:'DEPARTAMENTOCODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'DEPARTAMENTONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DEPARTAMENTONOME","Title")',ctrl:'DEPARTAMENTONOME',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV28DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV32DepartamentoFilialId',fld:'vDEPARTAMENTOFILIALID'},{av:'AV33DepartamentoFilialDesc',fld:'vDEPARTAMENTOFILIALDESC'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV28DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV32DepartamentoFilialId',fld:'vDEPARTAMENTOFILIALID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV34DepartamentoFilialEmpId',fld:'vDEPARTAMENTOFILIALEMPID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV39Qtde',fld:'vQTDE'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV28DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV32DepartamentoFilialId',fld:'vDEPARTAMENTOFILIALID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV34DepartamentoFilialEmpId',fld:'vDEPARTAMENTOFILIALEMPID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV39Qtde',fld:'vQTDE'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV28DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV32DepartamentoFilialId',fld:'vDEPARTAMENTOFILIALID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV34DepartamentoFilialEmpId',fld:'vDEPARTAMENTOFILIALEMPID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV39Qtde',fld:'vQTDE'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV28DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV32DepartamentoFilialId',fld:'vDEPARTAMENTOFILIALID'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'AV29QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV43Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV29QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV28DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV32DepartamentoFilialId',fld:'vDEPARTAMENTOFILIALID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV34DepartamentoFilialEmpId',fld:'vDEPARTAMENTOFILIALEMPID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV39Qtde',fld:'vQTDE'},{av:'AV37TpErro',fld:'vTPERRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV37TpErro',fld:'vTPERRO'},{av:'AV47GXLvl208',fld:'vGXLVL208'},{av:'AV33DepartamentoFilialDesc',fld:'vDEPARTAMENTOFILIALDESC'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV28DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV32DepartamentoFilialId',fld:'vDEPARTAMENTOFILIALID'}],[{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV28DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV32DepartamentoFilialId',fld:'vDEPARTAMENTOFILIALID'}],[{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV28DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV32DepartamentoFilialId',fld:'vDEPARTAMENTOFILIALID'}],[{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV28DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV32DepartamentoFilialId',fld:'vDEPARTAMENTOFILIALID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV34DepartamentoFilialEmpId',fld:'vDEPARTAMENTOFILIALEMPID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV39Qtde',fld:'vQTDE'}],[]];
   this.setPrompt("PROMPT_DEPARTAMENTOFILIALID", [23]);
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV38SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("A1156FilialId", "FILIALID", 0, "int");
   this.setVCMap("A1136FilialNome", "FILIALNOME", 0, "svchar");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV38SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("A1156FilialId", "FILIALID", 0, "int");
   this.setVCMap("A1136FilialNome", "FILIALNOME", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[70]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV38SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A1228FilialEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[67]);
   GridContainer.addRefreshingVar({rfrVar:"A1156FilialId"});
   GridContainer.addRefreshingVar({rfrVar:"A1136FilialNome"});
   GridContainer.addRefreshingVar(this.GXValidFnc[71]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdepartamento());
