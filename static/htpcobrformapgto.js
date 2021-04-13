/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:9:24.17
*/
gx.evt.autoSkip = false;
gx.define('htpcobrformapgto', false, function () {
   this.ServerClass =  "htpcobrformapgto" ;
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
      this.AV40SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV44Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Validv_Formapgtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFORMAPGTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11qi2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12qi2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17qi2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13qi2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14qi2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15qi2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16qi2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e21qi2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22qi2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23qi2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e18qi2_client=function()
   {
      this.executeServerEvent("'CADASTRAFORMAPGTO'", true, null, false, false);
   };
   this.e24qi2_client=function()
   {
      this.executeServerEvent("'COPIATPCOBR'", true, arguments[0], false, false);
   };
   this.e25qi2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e27qi2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e28qi2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,21,24,26,29,31,36,39,42,44,46,48,50,52,54,57,59,60,64,65,66,67,68,69,70,71,78,79,80];
   this.GXLastCtrlId =80;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",63,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htpcobrformapgto",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3377,64,"TPCOBRFORMAPGTOID","","","TpCobrFormaPgtoId","int",0,"px",3,3,"right",null,[],3377,"TpCobrFormaPgtoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3797,65,"TPCOBRFORMAPGTODESCRICAO","","","TpCobrFormaPgtoDescricao","svchar",0,"px",25,25,"left",null,[],3797,"TpCobrFormaPgtoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4119,66,"TPCOBRFORMAPGTOTRNRECID","","","TpCobrFormaPgtoTrnRecId","char",0,"px",8,8,"left",null,[],4119,"TpCobrFormaPgtoTrnRecId",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",67,0,"px",17,"px","e21qi2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",68,0,"px",17,"px","e22qi2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",69,0,"px",17,"px","e23qi2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(3376,70,"FORMAPGTOID","Código da Forma de Pagamento","","FormaPgtoId","int",0,"px",3,3,"right",null,[],3376,"FormaPgtoId",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpduplicar","vBMPDUPLICAR",71,0,"px",17,"px","e24qi2_client","","Copiar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE10",grid:0};
   GXValidFnc[14]={fld:"TABLE3",grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Formapgtoid,isvalid:null,rgrid:[this.GridContainer],fld:"vFORMAPGTOID",gxz:"ZV31FormaPgtoId",gxold:"OV31FormaPgtoId",gxvar:"AV31FormaPgtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31FormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31FormaPgtoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFORMAPGTOID",gx.O.AV31FormaPgtoId,0)},c2v:function(){gx.O.AV31FormaPgtoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFORMAPGTOID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFORMAPGTODESCRICAO",gxz:"ZV32FormaPgtoDescricao",gxold:"OV32FormaPgtoDescricao",gxvar:"AV32FormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32FormaPgtoDescricao=Value},v2z:function(Value){gx.O.ZV32FormaPgtoDescricao=Value},v2c:function(){gx.fn.setControlValue("vFORMAPGTODESCRICAO",gx.O.AV32FormaPgtoDescricao,0)},c2v:function(){gx.O.AV32FormaPgtoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vFORMAPGTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTPCOBRFORMAPGTOID",gxz:"ZV27TpCobrFormaPgtoId",gxold:"OV27TpCobrFormaPgtoId",gxvar:"AV27TpCobrFormaPgtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TpCobrFormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27TpCobrFormaPgtoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPCOBRFORMAPGTOID",gx.O.AV27TpCobrFormaPgtoId,0)},c2v:function(){gx.O.AV27TpCobrFormaPgtoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPCOBRFORMAPGTOID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTPCOBRFORMAPGTODESCRICAO",gxz:"ZV28TpCobrFormaPgtoDescricao",gxold:"OV28TpCobrFormaPgtoDescricao",gxvar:"AV28TpCobrFormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TpCobrFormaPgtoDescricao=Value},v2z:function(Value){gx.O.ZV28TpCobrFormaPgtoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTPCOBRFORMAPGTODESCRICAO",gx.O.AV28TpCobrFormaPgtoDescricao,0)},c2v:function(){gx.O.AV28TpCobrFormaPgtoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTPCOBRFORMAPGTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TABLE4",grid:0};
   GXValidFnc[39]={fld:"TABLE6",grid:0};
   GXValidFnc[42]={fld:"IMAGE2",grid:0};
   GXValidFnc[44]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[46]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[48]={fld:"IMAGE1",grid:0};
   GXValidFnc[50]={fld:"IMAGE4",grid:0};
   GXValidFnc[52]={fld:"BTNHELP",grid:0};
   GXValidFnc[54]={fld:"TABLE5",grid:0};
   GXValidFnc[57]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TPCOBRFORMAPGTOID",gxz:"Z3377TpCobrFormaPgtoId",gxold:"O3377TpCobrFormaPgtoId",gxvar:"A3377TpCobrFormaPgtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3377TpCobrFormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3377TpCobrFormaPgtoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TPCOBRFORMAPGTOID",row || gx.fn.currentGridRowImpl(63),gx.O.A3377TpCobrFormaPgtoId,0)},c2v:function(){gx.O.A3377TpCobrFormaPgtoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TPCOBRFORMAPGTOID",row || gx.fn.currentGridRowImpl(63),'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TPCOBRFORMAPGTODESCRICAO",gxz:"Z3797TpCobrFormaPgtoDescricao",gxold:"O3797TpCobrFormaPgtoDescricao",gxvar:"A3797TpCobrFormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3797TpCobrFormaPgtoDescricao=Value},v2z:function(Value){gx.O.Z3797TpCobrFormaPgtoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TPCOBRFORMAPGTODESCRICAO",row || gx.fn.currentGridRowImpl(63),gx.O.A3797TpCobrFormaPgtoDescricao,0)},c2v:function(){gx.O.A3797TpCobrFormaPgtoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TPCOBRFORMAPGTODESCRICAO",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TPCOBRFORMAPGTOTRNRECID",gxz:"Z4119TpCobrFormaPgtoTrnRecId",gxold:"O4119TpCobrFormaPgtoTrnRecId",gxvar:"A4119TpCobrFormaPgtoTrnRecId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4119TpCobrFormaPgtoTrnRecId=Value},v2z:function(Value){gx.O.Z4119TpCobrFormaPgtoTrnRecId=Value},v2c:function(row){gx.fn.setGridControlValue("TPCOBRFORMAPGTOTRNRECID",row || gx.fn.currentGridRowImpl(63),gx.O.A4119TpCobrFormaPgtoTrnRecId,0)},c2v:function(){gx.O.A4119TpCobrFormaPgtoTrnRecId=this.val()},val:function(row){return gx.fn.getGridControlValue("TPCOBRFORMAPGTOTRNRECID",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(63),gx.O.AV7bmpAlt,gx.O.AV46Bmpalt_GXI)},c2v:function(){gx.O.AV46Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(63))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(63))}, gxvar_GXI:'AV46Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(63),gx.O.AV8bmpExc,gx.O.AV47Bmpexc_GXI)},c2v:function(){gx.O.AV47Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(63))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(63))}, gxvar_GXI:'AV47Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(63),gx.O.AV16bmpCon,gx.O.AV48Bmpcon_GXI)},c2v:function(){gx.O.AV48Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(63))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(63))}, gxvar_GXI:'AV48Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FORMAPGTOID",gxz:"Z3376FormaPgtoId",gxold:"O3376FormaPgtoId",gxvar:"A3376FormaPgtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3376FormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3376FormaPgtoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FORMAPGTOID",row || gx.fn.currentGridRowImpl(63),gx.O.A3376FormaPgtoId,0)},c2v:function(){gx.O.A3376FormaPgtoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FORMAPGTOID",row || gx.fn.currentGridRowImpl(63),'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDUPLICAR",gxz:"ZV36bmpDuplicar",gxold:"OV36bmpDuplicar",gxvar:"AV36bmpDuplicar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV36bmpDuplicar=Value},v2z:function(Value){gx.O.ZV36bmpDuplicar=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDUPLICAR",row || gx.fn.currentGridRowImpl(63),gx.O.AV36bmpDuplicar,gx.O.AV49Bmpduplicar_GXI)},c2v:function(){gx.O.AV49Bmpduplicar_GXI=this.val_GXI();gx.O.AV36bmpDuplicar=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDUPLICAR",row || gx.fn.currentGridRowImpl(63))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDUPLICAR_GXI",row || gx.fn.currentGridRowImpl(63))}, gxvar_GXI:'AV49Bmpduplicar_GXI',nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAEMPRESAID",gxz:"ZV35TipoCobrancaEmpresaId",gxold:"OV35TipoCobrancaEmpresaId",gxvar:"AV35TipoCobrancaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35TipoCobrancaEmpresaId=Value},v2z:function(Value){gx.O.ZV35TipoCobrancaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAEMPRESAID",gx.O.AV35TipoCobrancaEmpresaId,0)},c2v:function(){gx.O.AV35TipoCobrancaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCOBRANCAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV31FormaPgtoId = 0 ;
   this.ZV31FormaPgtoId = 0 ;
   this.OV31FormaPgtoId = 0 ;
   this.AV32FormaPgtoDescricao = "" ;
   this.ZV32FormaPgtoDescricao = "" ;
   this.OV32FormaPgtoDescricao = "" ;
   this.AV27TpCobrFormaPgtoId = 0 ;
   this.ZV27TpCobrFormaPgtoId = 0 ;
   this.OV27TpCobrFormaPgtoId = 0 ;
   this.AV28TpCobrFormaPgtoDescricao = "" ;
   this.ZV28TpCobrFormaPgtoDescricao = "" ;
   this.OV28TpCobrFormaPgtoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3377TpCobrFormaPgtoId = 0 ;
   this.O3377TpCobrFormaPgtoId = 0 ;
   this.Z3797TpCobrFormaPgtoDescricao = "" ;
   this.O3797TpCobrFormaPgtoDescricao = "" ;
   this.Z4119TpCobrFormaPgtoTrnRecId = "" ;
   this.O4119TpCobrFormaPgtoTrnRecId = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z3376FormaPgtoId = 0 ;
   this.O3376FormaPgtoId = 0 ;
   this.ZV36bmpDuplicar = "" ;
   this.OV36bmpDuplicar = "" ;
   this.AV35TipoCobrancaEmpresaId = "" ;
   this.ZV35TipoCobrancaEmpresaId = "" ;
   this.OV35TipoCobrancaEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV31FormaPgtoId = 0 ;
   this.AV32FormaPgtoDescricao = "" ;
   this.AV27TpCobrFormaPgtoId = 0 ;
   this.AV28TpCobrFormaPgtoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV35TipoCobrancaEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV11OrderedBy = 0 ;
   this.A3375FormaPgtoEmpresaId = "" ;
   this.A3377TpCobrFormaPgtoId = 0 ;
   this.A3797TpCobrFormaPgtoDescricao = "" ;
   this.A4119TpCobrFormaPgtoTrnRecId = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A3376FormaPgtoId = 0 ;
   this.AV36bmpDuplicar = "" ;
   this.A3489FormaPgtoDescricao = "" ;
   this.AV40SnRecuperaFiltro = "" ;
   this.AV44Pgmname = "" ;
   this.Events = {"e11qi2_client": ["'ANTERIOR'", true] ,"e12qi2_client": ["'PROXIMO'", true] ,"e17qi2_client": ["VPAGINA.CLICK", true] ,"e13qi2_client": ["'NOVO'", true] ,"e14qi2_client": ["'FECHAR'", true] ,"e15qi2_client": ["'IMPRIMIR'", true] ,"e16qi2_client": ["'PROCURAR'", true] ,"e21qi2_client": ["'ALTERAR'", true] ,"e22qi2_client": ["'EXCLUIR'", true] ,"e23qi2_client": ["'CONSULTAR'", true] ,"e18qi2_client": ["'CADASTRAFORMAPGTO'", true] ,"e24qi2_client": ["'COPIATPCOBR'", true] ,"e25qi2_client": ["'ATUALIZAPAGINA'", true] ,"e27qi2_client": ["ENTER", true] ,"e28qi2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV28TpCobrFormaPgtoDescricao',fld:'vTPCOBRFORMAPGTODESCRICAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31FormaPgtoId',fld:'vFORMAPGTOID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Jsonclick")',ctrl:'vBMPDUPLICAR',prop:'Jsonclick'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV36bmpDuplicar',fld:'vBMPDUPLICAR'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Tooltiptext")',ctrl:'vBMPDUPLICAR',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV44Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV28TpCobrFormaPgtoDescricao',fld:'vTPCOBRFORMAPGTODESCRICAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31FormaPgtoId',fld:'vFORMAPGTOID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Jsonclick")',ctrl:'vBMPDUPLICAR',prop:'Jsonclick'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV36bmpDuplicar',fld:'vBMPDUPLICAR'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Tooltiptext")',ctrl:'vBMPDUPLICAR',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV44Pgmname',fld:'vPGMNAME'}],[{ctrl:'TPCOBRFORMAPGTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TPCOBRFORMAPGTOID","Title")',ctrl:'TPCOBRFORMAPGTOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TPCOBRFORMAPGTODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TPCOBRFORMAPGTODESCRICAO","Title")',ctrl:'TPCOBRFORMAPGTODESCRICAO',prop:'Title'},{ctrl:'TPCOBRFORMAPGTOTRNRECID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TPCOBRFORMAPGTOTRNRECID","Title")',ctrl:'TPCOBRFORMAPGTOTRNRECID',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV28TpCobrFormaPgtoDescricao',fld:'vTPCOBRFORMAPGTODESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV28TpCobrFormaPgtoDescricao',fld:'vTPCOBRFORMAPGTODESCRICAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31FormaPgtoId',fld:'vFORMAPGTOID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Jsonclick")',ctrl:'vBMPDUPLICAR',prop:'Jsonclick'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV36bmpDuplicar',fld:'vBMPDUPLICAR'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Tooltiptext")',ctrl:'vBMPDUPLICAR',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV44Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV28TpCobrFormaPgtoDescricao',fld:'vTPCOBRFORMAPGTODESCRICAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31FormaPgtoId',fld:'vFORMAPGTOID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Jsonclick")',ctrl:'vBMPDUPLICAR',prop:'Jsonclick'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV36bmpDuplicar',fld:'vBMPDUPLICAR'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Tooltiptext")',ctrl:'vBMPDUPLICAR',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV44Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV28TpCobrFormaPgtoDescricao',fld:'vTPCOBRFORMAPGTODESCRICAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31FormaPgtoId',fld:'vFORMAPGTOID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Jsonclick")',ctrl:'vBMPDUPLICAR',prop:'Jsonclick'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV36bmpDuplicar',fld:'vBMPDUPLICAR'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Tooltiptext")',ctrl:'vBMPDUPLICAR',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV44Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31FormaPgtoId',fld:'vFORMAPGTOID',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV28TpCobrFormaPgtoDescricao',fld:'vTPCOBRFORMAPGTODESCRICAO'},{av:'AV44Pgmname',fld:'vPGMNAME'}],[{av:'AV39SNTipoCobranca',fld:'vSNTIPOCOBRANCA'},{av:'AV31FormaPgtoId',fld:'vFORMAPGTOID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV44Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV44Pgmname',fld:'vPGMNAME'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV31FormaPgtoId',fld:'vFORMAPGTOID',hsh:true},{av:'AV32FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV45Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV41QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV32FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV31FormaPgtoId',fld:'vFORMAPGTOID',hsh:true},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV28TpCobrFormaPgtoDescricao',fld:'vTPCOBRFORMAPGTODESCRICAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31FormaPgtoId',fld:'vFORMAPGTOID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Jsonclick")',ctrl:'vBMPDUPLICAR',prop:'Jsonclick'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV36bmpDuplicar',fld:'vBMPDUPLICAR'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Tooltiptext")',ctrl:'vBMPDUPLICAR',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV44Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'A3377TpCobrFormaPgtoId',fld:'TPCOBRFORMAPGTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV28TpCobrFormaPgtoDescricao',fld:'vTPCOBRFORMAPGTODESCRICAO'},{av:'AV44Pgmname',fld:'vPGMNAME'}],[{av:'A3377TpCobrFormaPgtoId',fld:'TPCOBRFORMAPGTOID'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID',grid:63},{av:'A3377TpCobrFormaPgtoId',fld:'TPCOBRFORMAPGTOID',grid:63},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV28TpCobrFormaPgtoDescricao',fld:'vTPCOBRFORMAPGTODESCRICAO'},{av:'AV44Pgmname',fld:'vPGMNAME'}],[{av:'AV37Cont',fld:'vCONT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A3377TpCobrFormaPgtoId',fld:'TPCOBRFORMAPGTOID'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'A3377TpCobrFormaPgtoId',fld:'TPCOBRFORMAPGTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV28TpCobrFormaPgtoDescricao',fld:'vTPCOBRFORMAPGTODESCRICAO'},{av:'AV44Pgmname',fld:'vPGMNAME'}],[{av:'A3377TpCobrFormaPgtoId',fld:'TPCOBRFORMAPGTOID'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CADASTRAFORMAPGTO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV28TpCobrFormaPgtoDescricao',fld:'vTPCOBRFORMAPGTODESCRICAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31FormaPgtoId',fld:'vFORMAPGTOID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Jsonclick")',ctrl:'vBMPDUPLICAR',prop:'Jsonclick'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV36bmpDuplicar',fld:'vBMPDUPLICAR'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Tooltiptext")',ctrl:'vBMPDUPLICAR',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV44Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'COPIATPCOBR'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31FormaPgtoId',fld:'vFORMAPGTOID',hsh:true},{av:'A3377TpCobrFormaPgtoId',fld:'TPCOBRFORMAPGTOID'}],[{av:'AV39SNTipoCobranca',fld:'vSNTIPOCOBRANCA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV28TpCobrFormaPgtoDescricao',fld:'vTPCOBRFORMAPGTODESCRICAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31FormaPgtoId',fld:'vFORMAPGTOID',hsh:true},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Jsonclick")',ctrl:'vBMPDUPLICAR',prop:'Jsonclick'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV36bmpDuplicar',fld:'vBMPDUPLICAR'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Tooltiptext")',ctrl:'vBMPDUPLICAR',prop:'Tooltiptext'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV44Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV40SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV44Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV40SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV44Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar(this.GXValidFnc[80]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar({rfrVar:"AV36bmpDuplicar", rfrProp:"Jsonclick", gxAttId:"Bmpduplicar"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV36bmpDuplicar", rfrProp:"Value", gxAttId:"Bmpduplicar"});
   GridContainer.addRefreshingVar({rfrVar:"AV36bmpDuplicar", rfrProp:"Tooltiptext", gxAttId:"Bmpduplicar"});
   GridContainer.addRefreshingVar({rfrVar:"AV40SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV44Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htpcobrformapgto());
