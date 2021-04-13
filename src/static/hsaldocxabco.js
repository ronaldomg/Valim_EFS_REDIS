/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:9:59.30
*/
gx.evt.autoSkip = false;
gx.define('hsaldocxabco', false, function () {
   this.ServerClass =  "hsaldocxabco" ;
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
      this.AV37SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Valid_Caixabancoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(56) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CAIXABANCOID", gx.fn.currentGridRowImpl(56));
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
   this.Valid_Caixabancoempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(56) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CAIXABANCOEMPRESAID", gx.fn.currentGridRowImpl(56));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11ax2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12ax2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e20ax2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21ax2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22ax2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e16ax2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13ax2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, arguments[0], false, false);
   };
   this.e14ax2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15ax2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e24ax2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25ax2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26ax2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,30,35,38,41,43,45,47,50,52,53,57,58,59,60,61,62,63,64,70,72,73,74];
   this.GXLastCtrlId =74;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",56,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hsaldocxabco",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1015,57,"CAIXABANCOID","","","CaixaBancoId","int",0,"px",5,5,"right",null,[],1015,"CaixaBancoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1017,58,"CAIXABANCODESCRICAO","","","CaixaBancoDescricao","svchar",0,"px",25,25,"left",null,[],1017,"CaixaBancoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1978,59,"SALDOCXABCODATA","","","SaldoCxaBcoData","date",0,"px",10,10,"right",null,[],1978,"SaldoCxaBcoData",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1979,60,"SALDOCXABCOVALOR","Valor","","SaldoCxaBcoValor","decimal",0,"px",18,18,"right",null,[],1979,"SaldoCxaBcoValor",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",61,0,"px",17,"px","e20ax2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",62,0,"px",17,"px","e21ax2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",63,0,"px",17,"px","e22ax2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1014,64,"CAIXABANCOEMPRESAID","Empresa","","CaixaBancoEmpresaId","char",0,"px",10,10,"left",null,[],1014,"CaixaBancoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE10",grid:0};
   GXValidFnc[8]={fld:"TABLE11",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE13",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXABANCOID",gxz:"ZV27CaixaBancoId",gxold:"OV27CaixaBancoId",gxvar:"AV27CaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27CaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOID",gx.O.AV27CaixaBancoId,0)},c2v:function(){gx.O.AV27CaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCODESCRICAO",gxz:"ZV28CaixaBancoDescricao",gxold:"OV28CaixaBancoDescricao",gxvar:"AV28CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28CaixaBancoDescricao=Value},v2z:function(Value){gx.O.ZV28CaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCODESCRICAO",gx.O.AV28CaixaBancoDescricao,0)},c2v:function(){gx.O.AV28CaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[23]={fld:"TABLE12",grid:0};
   GXValidFnc[26]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAINI",gxz:"ZV29DataIni",gxold:"OV29DataIni",gxvar:"AV29DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV29DataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV29DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAFIN",gxz:"ZV30DataFin",gxold:"OV30DataFin",gxvar:"AV30DataFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30DataFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30DataFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFIN",gx.O.AV30DataFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV30DataFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[35]={fld:"TABLE4",grid:0};
   GXValidFnc[38]={fld:"TABLE9",grid:0};
   GXValidFnc[41]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[43]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[45]={fld:"BTNHELP",grid:0};
   GXValidFnc[47]={fld:"TABLE5",grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:this.Valid_Caixabancoid,isvalid:null,rgrid:[],fld:"CAIXABANCOID",gxz:"Z1015CaixaBancoId",gxold:"O1015CaixaBancoId",gxvar:"A1015CaixaBancoId",ucs:[],op:[58],ip:[58,57,64],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1015CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1015CaixaBancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCOID",row || gx.fn.currentGridRowImpl(56),gx.O.A1015CaixaBancoId,0)},c2v:function(){gx.O.A1015CaixaBancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXABANCOID",row || gx.fn.currentGridRowImpl(56),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCODESCRICAO",gxz:"Z1017CaixaBancoDescricao",gxold:"O1017CaixaBancoDescricao",gxvar:"A1017CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1017CaixaBancoDescricao=Value},v2z:function(Value){gx.O.Z1017CaixaBancoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCODESCRICAO",row || gx.fn.currentGridRowImpl(56),gx.O.A1017CaixaBancoDescricao,0)},c2v:function(){gx.O.A1017CaixaBancoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXABANCODESCRICAO",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SALDOCXABCODATA",gxz:"Z1978SaldoCxaBcoData",gxold:"O1978SaldoCxaBcoData",gxvar:"A1978SaldoCxaBcoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1978SaldoCxaBcoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1978SaldoCxaBcoData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SALDOCXABCODATA",row || gx.fn.currentGridRowImpl(56),gx.O.A1978SaldoCxaBcoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1978SaldoCxaBcoData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SALDOCXABCODATA",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SALDOCXABCOVALOR",gxz:"Z1979SaldoCxaBcoValor",gxold:"O1979SaldoCxaBcoValor",gxvar:"A1979SaldoCxaBcoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1979SaldoCxaBcoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1979SaldoCxaBcoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("SALDOCXABCOVALOR",row || gx.fn.currentGridRowImpl(56),gx.O.A1979SaldoCxaBcoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1979SaldoCxaBcoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("SALDOCXABCOVALOR",row || gx.fn.currentGridRowImpl(56),'.',',')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(56),gx.O.AV7bmpAlt,gx.O.AV43Bmpalt_GXI)},c2v:function(){gx.O.AV43Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV43Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(56),gx.O.AV8bmpExc,gx.O.AV44Bmpexc_GXI)},c2v:function(){gx.O.AV44Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV44Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(56),gx.O.AV16bmpCon,gx.O.AV45Bmpcon_GXI)},c2v:function(){gx.O.AV45Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(56))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(56))}, gxvar_GXI:'AV45Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:this.Valid_Caixabancoempresaid,isvalid:null,rgrid:[],fld:"CAIXABANCOEMPRESAID",gxz:"Z1014CaixaBancoEmpresaId",gxold:"O1014CaixaBancoEmpresaId",gxvar:"A1014CaixaBancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1014CaixaBancoEmpresaId=Value},v2z:function(Value){gx.O.Z1014CaixaBancoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCOEMPRESAID",row || gx.fn.currentGridRowImpl(56),gx.O.A1014CaixaBancoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1014CaixaBancoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXABANCOEMPRESAID",row || gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCOEMPRESAID",gxz:"ZV32CaixaBancoEmpresaId",gxold:"OV32CaixaBancoEmpresaId",gxvar:"AV32CaixaBancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32CaixaBancoEmpresaId=Value},v2z:function(Value){gx.O.ZV32CaixaBancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCOEMPRESAID",gx.O.AV32CaixaBancoEmpresaId,0)},c2v:function(){gx.O.AV32CaixaBancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"JSJSON", format:2,grid:0};
   GXValidFnc[74]={fld:"PROMPT_CAIXABANCOID",grid:0};
   this.AV27CaixaBancoId = 0 ;
   this.ZV27CaixaBancoId = 0 ;
   this.OV27CaixaBancoId = 0 ;
   this.AV28CaixaBancoDescricao = "" ;
   this.ZV28CaixaBancoDescricao = "" ;
   this.OV28CaixaBancoDescricao = "" ;
   this.AV29DataIni = gx.date.nullDate() ;
   this.ZV29DataIni = gx.date.nullDate() ;
   this.OV29DataIni = gx.date.nullDate() ;
   this.AV30DataFin = gx.date.nullDate() ;
   this.ZV30DataFin = gx.date.nullDate() ;
   this.OV30DataFin = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1015CaixaBancoId = 0 ;
   this.O1015CaixaBancoId = 0 ;
   this.Z1017CaixaBancoDescricao = "" ;
   this.O1017CaixaBancoDescricao = "" ;
   this.Z1978SaldoCxaBcoData = gx.date.nullDate() ;
   this.O1978SaldoCxaBcoData = gx.date.nullDate() ;
   this.Z1979SaldoCxaBcoValor = 0 ;
   this.O1979SaldoCxaBcoValor = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z1014CaixaBancoEmpresaId = "" ;
   this.O1014CaixaBancoEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV32CaixaBancoEmpresaId = "" ;
   this.ZV32CaixaBancoEmpresaId = "" ;
   this.OV32CaixaBancoEmpresaId = "" ;
   this.AV27CaixaBancoId = 0 ;
   this.AV28CaixaBancoDescricao = "" ;
   this.AV29DataIni = gx.date.nullDate() ;
   this.AV30DataFin = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV32CaixaBancoEmpresaId = "" ;
   this.A1015CaixaBancoId = 0 ;
   this.A1017CaixaBancoDescricao = "" ;
   this.A1978SaldoCxaBcoData = gx.date.nullDate() ;
   this.A1979SaldoCxaBcoValor = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV37SnRecuperaFiltro = "" ;
   this.Events = {"e11ax2_client": ["'ANTERIOR'", true] ,"e12ax2_client": ["'PROXIMO'", true] ,"e20ax2_client": ["'ALTERAR'", true] ,"e21ax2_client": ["'EXCLUIR'", true] ,"e22ax2_client": ["'CONSULTAR'", true] ,"e16ax2_client": ["VPAGINA.CLICK", true] ,"e13ax2_client": ["'NOVO'", true] ,"e14ax2_client": ["'FECHAR'", true] ,"e15ax2_client": ["'PROCURAR'", true] ,"e24ax2_client": ["'ATUALIZAPAGINA'", true] ,"e25ax2_client": ["ENTER", true] ,"e26ax2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV29DataIni',fld:'vDATAINI'},{av:'AV30DataFin',fld:'vDATAFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV29DataIni',fld:'vDATAINI'},{av:'AV30DataFin',fld:'vDATAFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'}],[{ctrl:'CAIXABANCOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXABANCOID","Title")',ctrl:'CAIXABANCOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CAIXABANCODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXABANCODESCRICAO","Title")',ctrl:'CAIXABANCODESCRICAO',prop:'Title'},{ctrl:'SALDOCXABCODATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SALDOCXABCODATA","Title")',ctrl:'SALDOCXABCODATA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV29DataIni',fld:'vDATAINI'},{av:'AV30DataFin',fld:'vDATAFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV29DataIni',fld:'vDATAINI'},{av:'AV30DataFin',fld:'vDATAFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV29DataIni',fld:'vDATAINI'},{av:'AV30DataFin',fld:'vDATAFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV29DataIni',fld:'vDATAINI'},{av:'AV30DataFin',fld:'vDATAFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1978SaldoCxaBcoData',fld:'SALDOCXABCODATA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV29DataIni',fld:'vDATAINI'},{av:'AV30DataFin',fld:'vDATAFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1978SaldoCxaBcoData',fld:'SALDOCXABCODATA'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1978SaldoCxaBcoData',fld:'SALDOCXABCODATA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV29DataIni',fld:'vDATAINI'},{av:'AV30DataFin',fld:'vDATAFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1978SaldoCxaBcoData',fld:'SALDOCXABCODATA'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1978SaldoCxaBcoData',fld:'SALDOCXABCODATA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV29DataIni',fld:'vDATAINI'},{av:'AV30DataFin',fld:'vDATAFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1978SaldoCxaBcoData',fld:'SALDOCXABCODATA'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV29DataIni',fld:'vDATAINI'},{av:'AV30DataFin',fld:'vDATAFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'Gx_date',fld:'vTODAY'}],[{av:'AV31Data',fld:'vDATA'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV29DataIni',fld:'vDATAINI'},{av:'AV30DataFin',fld:'vDATAFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV36TpErro',fld:'vTPERRO'},{av:'AV32CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV36TpErro',fld:'vTPERRO'},{av:'AV35snExiste',fld:'vSNEXISTE'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV29DataIni',fld:'vDATAINI'},{av:'AV30DataFin',fld:'vDATAFIN'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV37SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'}],[]];
   this.setPrompt("PROMPT_CAIXABANCOID", [16]);
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV37SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV37SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[70]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV37SnRecuperaFiltro"});
   GridContainer.addRefreshingVar(this.GXValidFnc[52]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hsaldocxabco());
