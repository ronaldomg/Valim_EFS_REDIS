/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:47:27.39
*/
gx.evt.autoSkip = false;
gx.define('hdirfconta', false, function () {
   this.ServerClass =  "hdirfconta" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV75EmpresaPadraoConta=gx.fn.getControlValue("vEMPRESAPADRAOCONTA") ;
      this.AV80Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Valid_Contapagrecnumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(49) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECNUMERO", gx.fn.currentGridRowImpl(49));
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
   this.Valid_Contapagreccliforid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(49) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECCLIFORID", gx.fn.currentGridRowImpl(49));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11jx2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12jx2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e14jx2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13jx2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e17jx2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e19jx2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e20jx2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,19,22,24,25,28,31,34,36,38,40,43,45,46,50,51,52,53,54,55,62];
   this.GXLastCtrlId =62;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",49,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hdirfconta",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1686,50,"CONTAPAGRECNUMERO","","","ContaPagRecNumero","int",0,"px",8,8,"right",null,[],1686,"ContaPagRecNumero",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1637,51,"CONTAPAGRECCLIFORID","","","ContaPagRecCliForId","int",0,"px",7,7,"right",null,[],1637,"ContaPagRecCliForId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1638,52,"CONTAPAGRECCLIFORFANTASIA","","","ContaPagRecCliForFantasia","svchar",0,"px",60,60,"left",null,[],1638,"ContaPagRecCliForFantasia",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1699,53,"CONTAPAGRECDTEMISSAO","","","ContaPagRecDtEmissao","date",0,"px",10,10,"right",null,[],1699,"ContaPagRecDtEmissao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1700,54,"CONTAPAGRECDTPAGAMENTO","","","ContaPagRecDtPagamento","date",0,"px",10,10,"right",null,[],1700,"ContaPagRecDtPagamento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1713,55,"CONTAPAGRECVLRCONTA","","","ContaPagRecVlrConta","decimal",0,"px",22,22,"right",null,[],1713,"ContaPagRecVlrConta",true,2,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE6",grid:0};
   GXValidFnc[5]={fld:"TABLE10",grid:0};
   GXValidFnc[8]={fld:"TABLE11",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDIRFANORETENCAO",gxz:"ZV67DirfAnoRetencao",gxold:"OV67DirfAnoRetencao",gxvar:"AV67DirfAnoRetencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67DirfAnoRetencao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67DirfAnoRetencao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDIRFANORETENCAO",gx.O.AV67DirfAnoRetencao,0)},c2v:function(){gx.O.AV67DirfAnoRetencao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDIRFANORETENCAO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vRETENCAOCODIGO",gxz:"ZV68RetencaoCodigo",gxold:"OV68RetencaoCodigo",gxvar:"AV68RetencaoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68RetencaoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV68RetencaoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRETENCAOCODIGO",gx.O.AV68RetencaoCodigo,0)},c2v:function(){gx.O.AV68RetencaoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRETENCAOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRETENCAODESCRICAO",gxz:"ZV77RetencaoDescricao",gxold:"OV77RetencaoDescricao",gxvar:"AV77RetencaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77RetencaoDescricao=Value},v2z:function(Value){gx.O.ZV77RetencaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vRETENCAODESCRICAO",gx.O.AV77RetencaoDescricao,0)},c2v:function(){gx.O.AV77RetencaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vRETENCAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDIRFCPFCNPJ",gxz:"ZV76DirfCPFCNPJ",gxold:"OV76DirfCPFCNPJ",gxvar:"AV76DirfCPFCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76DirfCPFCNPJ=Value},v2z:function(Value){gx.O.ZV76DirfCPFCNPJ=Value},v2c:function(){gx.fn.setControlValue("vDIRFCPFCNPJ",gx.O.AV76DirfCPFCNPJ,0)},c2v:function(){gx.O.AV76DirfCPFCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vDIRFCPFCNPJ")},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFNOME",gxz:"ZV70DirfNome",gxold:"OV70DirfNome",gxvar:"AV70DirfNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70DirfNome=Value},v2z:function(Value){gx.O.ZV70DirfNome=Value},v2c:function(){gx.fn.setControlValue("vDIRFNOME",gx.O.AV70DirfNome,0)},c2v:function(){gx.O.AV70DirfNome=this.val()},val:function(){return gx.fn.getControlValue("vDIRFNOME")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE7",grid:0};
   GXValidFnc[31]={fld:"TABLE9",grid:0};
   GXValidFnc[34]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[36]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[38]={fld:"BTNHELP",grid:0};
   GXValidFnc[40]={fld:"TABLE8",grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:this.Valid_Contapagrecnumero,isvalid:null,rgrid:[],fld:"CONTAPAGRECNUMERO",gxz:"Z1686ContaPagRecNumero",gxold:"O1686ContaPagRecNumero",gxvar:"A1686ContaPagRecNumero",ucs:[],op:[52,51,53,54,55],ip:[52,53,54,55,51,50],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1686ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1686ContaPagRecNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(49),gx.O.A1686ContaPagRecNumero,0)},c2v:function(){gx.O.A1686ContaPagRecNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(49),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:this.Valid_Contapagreccliforid,isvalid:null,rgrid:[],fld:"CONTAPAGRECCLIFORID",gxz:"Z1637ContaPagRecCliForId",gxold:"O1637ContaPagRecCliForId",gxvar:"A1637ContaPagRecCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1637ContaPagRecCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1637ContaPagRecCliForId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECCLIFORID",row || gx.fn.currentGridRowImpl(49),gx.O.A1637ContaPagRecCliForId,0)},c2v:function(){gx.O.A1637ContaPagRecCliForId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPAGRECCLIFORID",row || gx.fn.currentGridRowImpl(49),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECCLIFORFANTASIA",gxz:"Z1638ContaPagRecCliForFantasia",gxold:"O1638ContaPagRecCliForFantasia",gxvar:"A1638ContaPagRecCliForFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1638ContaPagRecCliForFantasia=Value},v2z:function(Value){gx.O.Z1638ContaPagRecCliForFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECCLIFORFANTASIA",row || gx.fn.currentGridRowImpl(49),gx.O.A1638ContaPagRecCliForFantasia,0)},c2v:function(){gx.O.A1638ContaPagRecCliForFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECCLIFORFANTASIA",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECDTEMISSAO",gxz:"Z1699ContaPagRecDtEmissao",gxold:"O1699ContaPagRecDtEmissao",gxvar:"A1699ContaPagRecDtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECDTEMISSAO",row || gx.fn.currentGridRowImpl(49),gx.O.A1699ContaPagRecDtEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTAPAGRECDTEMISSAO",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECDTPAGAMENTO",gxz:"Z1700ContaPagRecDtPagamento",gxold:"O1700ContaPagRecDtPagamento",gxvar:"A1700ContaPagRecDtPagamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1700ContaPagRecDtPagamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1700ContaPagRecDtPagamento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECDTPAGAMENTO",row || gx.fn.currentGridRowImpl(49),gx.O.A1700ContaPagRecDtPagamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1700ContaPagRecDtPagamento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTAPAGRECDTPAGAMENTO",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECVLRCONTA",gxz:"Z1713ContaPagRecVlrConta",gxold:"O1713ContaPagRecVlrConta",gxvar:"A1713ContaPagRecVlrConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1713ContaPagRecVlrConta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1713ContaPagRecVlrConta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CONTAPAGRECVLRCONTA",row || gx.fn.currentGridRowImpl(49),gx.O.A1713ContaPagRecVlrConta,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1713ContaPagRecVlrConta=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CONTAPAGRECVLRCONTA",row || gx.fn.currentGridRowImpl(49),'.',',')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV67DirfAnoRetencao = 0 ;
   this.ZV67DirfAnoRetencao = 0 ;
   this.OV67DirfAnoRetencao = 0 ;
   this.AV68RetencaoCodigo = 0 ;
   this.ZV68RetencaoCodigo = 0 ;
   this.OV68RetencaoCodigo = 0 ;
   this.AV77RetencaoDescricao = "" ;
   this.ZV77RetencaoDescricao = "" ;
   this.OV77RetencaoDescricao = "" ;
   this.AV76DirfCPFCNPJ = "" ;
   this.ZV76DirfCPFCNPJ = "" ;
   this.OV76DirfCPFCNPJ = "" ;
   this.AV70DirfNome = "" ;
   this.ZV70DirfNome = "" ;
   this.OV70DirfNome = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1686ContaPagRecNumero = 0 ;
   this.O1686ContaPagRecNumero = 0 ;
   this.Z1637ContaPagRecCliForId = 0 ;
   this.O1637ContaPagRecCliForId = 0 ;
   this.Z1638ContaPagRecCliForFantasia = "" ;
   this.O1638ContaPagRecCliForFantasia = "" ;
   this.Z1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.O1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.Z1700ContaPagRecDtPagamento = gx.date.nullDate() ;
   this.O1700ContaPagRecDtPagamento = gx.date.nullDate() ;
   this.Z1713ContaPagRecVlrConta = 0 ;
   this.O1713ContaPagRecVlrConta = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV67DirfAnoRetencao = 0 ;
   this.AV68RetencaoCodigo = 0 ;
   this.AV77RetencaoDescricao = "" ;
   this.AV76DirfCPFCNPJ = "" ;
   this.AV70DirfNome = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A2885RetencaoCodigo = 0 ;
   this.A3056DirfCPFCNPJ = "" ;
   this.A3040DirfAnoRetencao = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A2884RetencaoEmpresaId = "" ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.A1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.A1700ContaPagRecDtPagamento = gx.date.nullDate() ;
   this.A1713ContaPagRecVlrConta = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV75EmpresaPadraoConta = "" ;
   this.AV80Pgmname = "" ;
   this.Events = {"e11jx2_client": ["'ANTERIOR'", true] ,"e12jx2_client": ["'PROXIMO'", true] ,"e14jx2_client": ["VPAGINA.CLICK", true] ,"e13jx2_client": ["'FECHAR'", true] ,"e17jx2_client": ["'ATUALIZAPAGINA'", true] ,"e19jx2_client": ["ENTER", true] ,"e20jx2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV75EmpresaPadraoConta',fld:'vEMPRESAPADRAOCONTA'},{av:'AV67DirfAnoRetencao',fld:'vDIRFANORETENCAO'},{av:'AV68RetencaoCodigo',fld:'vRETENCAOCODIGO'},{av:'AV76DirfCPFCNPJ',fld:'vDIRFCPFCNPJ'},{av:'AV80Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV75EmpresaPadraoConta',fld:'vEMPRESAPADRAOCONTA'},{av:'AV67DirfAnoRetencao',fld:'vDIRFANORETENCAO'},{av:'AV68RetencaoCodigo',fld:'vRETENCAOCODIGO'},{av:'AV76DirfCPFCNPJ',fld:'vDIRFCPFCNPJ'},{av:'AV80Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{ctrl:'CONTAPAGRECNUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECNUMERO","Title")',ctrl:'CONTAPAGRECNUMERO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CONTAPAGRECCLIFORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECCLIFORID","Title")',ctrl:'CONTAPAGRECCLIFORID',prop:'Title'},{ctrl:'CONTAPAGRECCLIFORFANTASIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECCLIFORFANTASIA","Title")',ctrl:'CONTAPAGRECCLIFORFANTASIA',prop:'Title'},{ctrl:'CONTAPAGRECDTEMISSAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECDTEMISSAO","Title")',ctrl:'CONTAPAGRECDTEMISSAO',prop:'Title'},{ctrl:'CONTAPAGRECDTPAGAMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECDTPAGAMENTO","Title")',ctrl:'CONTAPAGRECDTPAGAMENTO',prop:'Title'},{ctrl:'CONTAPAGRECVLRCONTA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTAPAGRECVLRCONTA","Title")',ctrl:'CONTAPAGRECVLRCONTA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV74filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV75EmpresaPadraoConta',fld:'vEMPRESAPADRAOCONTA'},{av:'AV67DirfAnoRetencao',fld:'vDIRFANORETENCAO'},{av:'AV68RetencaoCodigo',fld:'vRETENCAOCODIGO'},{av:'AV76DirfCPFCNPJ',fld:'vDIRFCPFCNPJ'},{av:'AV80Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV74filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV75EmpresaPadraoConta',fld:'vEMPRESAPADRAOCONTA'},{av:'AV67DirfAnoRetencao',fld:'vDIRFANORETENCAO'},{av:'AV68RetencaoCodigo',fld:'vRETENCAOCODIGO'},{av:'AV76DirfCPFCNPJ',fld:'vDIRFCPFCNPJ'},{av:'AV80Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV74filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV75EmpresaPadraoConta',fld:'vEMPRESAPADRAOCONTA'},{av:'AV67DirfAnoRetencao',fld:'vDIRFANORETENCAO'},{av:'AV68RetencaoCodigo',fld:'vRETENCAOCODIGO'},{av:'AV76DirfCPFCNPJ',fld:'vDIRFCPFCNPJ'},{av:'AV80Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV74filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV80Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV75EmpresaPadraoConta',fld:'vEMPRESAPADRAOCONTA'},{av:'AV67DirfAnoRetencao',fld:'vDIRFANORETENCAO'},{av:'AV68RetencaoCodigo',fld:'vRETENCAOCODIGO'},{av:'AV76DirfCPFCNPJ',fld:'vDIRFCPFCNPJ'},{av:'AV80Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV75EmpresaPadraoConta", "vEMPRESAPADRAOCONTA", 0, "char");
   this.setVCMap("AV80Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV75EmpresaPadraoConta", "vEMPRESAPADRAOCONTA", 0, "char");
   this.setVCMap("AV80Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV75EmpresaPadraoConta"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar({rfrVar:"AV80Pgmname"});
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdirfconta());
