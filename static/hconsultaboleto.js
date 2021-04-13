/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:26:25.25
*/
gx.evt.autoSkip = false;
gx.define('hconsultaboleto', false, function () {
   this.ServerClass =  "hconsultaboleto" ;
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
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19BoletoEmpresaId=gx.fn.getControlValue("vBOLETOEMPRESAID") ;
      this.AV16BancoId=gx.fn.getIntegerValue("vBANCOID",'.') ;
      this.AV17BancoAgenciaId=gx.fn.getIntegerValue("vBANCOAGENCIAID",'.') ;
      this.AV18BoletoId=gx.fn.getIntegerValue("vBOLETOID",'.') ;
      this.AV31BoletoNumero=gx.fn.getIntegerValue("vBOLETONUMERO",'.') ;
   };
   this.Validv_Cbancoagenciaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCBANCOAGENCIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e17dw2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11dw2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12dw2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13dw2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14dw2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15dw2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19dw2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21dw1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,20,23,25,31,32,33,34,35,36,37,38,44,47,49,51,53,55,56,57,58,59,60,61,62,63,64];
   this.GXLastCtrlId =64;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",30,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaboleto",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1821,31,"BOLETONUMERO","","","BoletoNumero","int",0,"px",18,18,"right",null,[],1821,"BoletoNumero",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1832,32,"BOLETONOMESACADO","","","BoletoNomeSacado","svchar",0,"px",50,50,"left",null,[],1832,"BoletoNomeSacado",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1830,33,"BOLETODATAEMISSAO","","","BoletoDataEmissao","date",0,"px",10,10,"right",null,[],1830,"BoletoDataEmissao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1831,34,"BOLETODATAVENCIMENTO","","","BoletoDataVencimento","date",0,"px",10,10,"right",null,[],1831,"BoletoDataVencimento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1823,35,"BOLETOVALOR","","","BoletoValor","decimal",0,"px",22,22,"right",null,[],1823,"BoletoValor",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2316,36,"BOLETOCEDENTEBANCONOME","","","BoletoCedenteBancoNome","svchar",0,"px",25,25,"left",null,[],2316,"BoletoCedenteBancoNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1817,37,"BOLETOCEDENTEAGENCIA","","","BoletoCedenteAgencia","int",0,"px",4,4,"right",null,[],1817,"BoletoCedenteAgencia",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1819,38,"BOLETOEMPRESAID","Empresa","","BoletoEmpresaId","char",0,"px",10,10,"left",null,[],1819,"BoletoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCBANCOID",gxz:"ZV20cBancoId",gxold:"OV20cBancoId",gxvar:"AV20cBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20cBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20cBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBANCOID",gx.O.AV20cBancoId,0)},c2v:function(){gx.O.AV20cBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCBANCONOME",gxz:"ZV27cBancoNome",gxold:"OV27cBancoNome",gxvar:"AV27cBancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27cBancoNome=Value},v2z:function(Value){gx.O.ZV27cBancoNome=Value},v2c:function(){gx.fn.setControlValue("vCBANCONOME",gx.O.AV27cBancoNome,0)},c2v:function(){gx.O.AV27cBancoNome=this.val()},val:function(){return gx.fn.getControlValue("vCBANCONOME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cbancoagenciaid,isvalid:null,rgrid:[this.GridContainer],fld:"vCBANCOAGENCIAID",gxz:"ZV21cBancoAgenciaId",gxold:"OV21cBancoAgenciaId",gxvar:"AV21cBancoAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21cBancoAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21cBancoAgenciaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBANCOAGENCIAID",gx.O.AV21cBancoAgenciaId,0)},c2v:function(){gx.O.AV21cBancoAgenciaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBANCOAGENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCBANCOAGENCIANOME",gxz:"ZV28cBancoAgenciaNome",gxold:"OV28cBancoAgenciaNome",gxvar:"AV28cBancoAgenciaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28cBancoAgenciaNome=Value},v2z:function(Value){gx.O.ZV28cBancoAgenciaNome=Value},v2c:function(){gx.fn.setControlValue("vCBANCOAGENCIANOME",gx.O.AV28cBancoAgenciaNome,0)},c2v:function(){gx.O.AV28cBancoAgenciaNome=this.val()},val:function(){return gx.fn.getControlValue("vCBANCOAGENCIANOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCBOLETONUMERO",gxz:"ZV22cBoletoNumero",gxold:"OV22cBoletoNumero",gxvar:"AV22cBoletoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22cBoletoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22cBoletoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBOLETONUMERO",gx.O.AV22cBoletoNumero,0)},c2v:function(){gx.O.AV22cBoletoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBOLETONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETONUMERO",gxz:"Z1821BoletoNumero",gxold:"O1821BoletoNumero",gxvar:"A1821BoletoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1821BoletoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1821BoletoNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETONUMERO",row || gx.fn.currentGridRowImpl(30),gx.O.A1821BoletoNumero,0)},c2v:function(){gx.O.A1821BoletoNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BOLETONUMERO",row || gx.fn.currentGridRowImpl(30),'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETONOMESACADO",gxz:"Z1832BoletoNomeSacado",gxold:"O1832BoletoNomeSacado",gxvar:"A1832BoletoNomeSacado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1832BoletoNomeSacado=Value},v2z:function(Value){gx.O.Z1832BoletoNomeSacado=Value},v2c:function(row){gx.fn.setGridControlValue("BOLETONOMESACADO",row || gx.fn.currentGridRowImpl(30),gx.O.A1832BoletoNomeSacado,0)},c2v:function(){gx.O.A1832BoletoNomeSacado=this.val()},val:function(row){return gx.fn.getGridControlValue("BOLETONOMESACADO",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETODATAEMISSAO",gxz:"Z1830BoletoDataEmissao",gxold:"O1830BoletoDataEmissao",gxvar:"A1830BoletoDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1830BoletoDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1830BoletoDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETODATAEMISSAO",row || gx.fn.currentGridRowImpl(30),gx.O.A1830BoletoDataEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1830BoletoDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("BOLETODATAEMISSAO",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETODATAVENCIMENTO",gxz:"Z1831BoletoDataVencimento",gxold:"O1831BoletoDataVencimento",gxvar:"A1831BoletoDataVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1831BoletoDataVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1831BoletoDataVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETODATAVENCIMENTO",row || gx.fn.currentGridRowImpl(30),gx.O.A1831BoletoDataVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1831BoletoDataVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("BOLETODATAVENCIMENTO",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOVALOR",gxz:"Z1823BoletoValor",gxold:"O1823BoletoValor",gxvar:"A1823BoletoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1823BoletoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1823BoletoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("BOLETOVALOR",row || gx.fn.currentGridRowImpl(30),gx.O.A1823BoletoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1823BoletoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("BOLETOVALOR",row || gx.fn.currentGridRowImpl(30),'.',',')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOCEDENTEBANCONOME",gxz:"Z2316BoletoCedenteBancoNome",gxold:"O2316BoletoCedenteBancoNome",gxvar:"A2316BoletoCedenteBancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2316BoletoCedenteBancoNome=Value},v2z:function(Value){gx.O.Z2316BoletoCedenteBancoNome=Value},v2c:function(row){gx.fn.setGridControlValue("BOLETOCEDENTEBANCONOME",row || gx.fn.currentGridRowImpl(30),gx.O.A2316BoletoCedenteBancoNome,0)},c2v:function(){gx.O.A2316BoletoCedenteBancoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("BOLETOCEDENTEBANCONOME",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOCEDENTEAGENCIA",gxz:"Z1817BoletoCedenteAgencia",gxold:"O1817BoletoCedenteAgencia",gxvar:"A1817BoletoCedenteAgencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1817BoletoCedenteAgencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1817BoletoCedenteAgencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETOCEDENTEAGENCIA",row || gx.fn.currentGridRowImpl(30),gx.O.A1817BoletoCedenteAgencia,0)},c2v:function(){gx.O.A1817BoletoCedenteAgencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BOLETOCEDENTEAGENCIA",row || gx.fn.currentGridRowImpl(30),'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOEMPRESAID",gxz:"Z1819BoletoEmpresaId",gxold:"O1819BoletoEmpresaId",gxvar:"A1819BoletoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1819BoletoEmpresaId=Value},v2z:function(Value){gx.O.Z1819BoletoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("BOLETOEMPRESAID",row || gx.fn.currentGridRowImpl(30),gx.O.A1819BoletoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1819BoletoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("BOLETOEMPRESAID",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TABLENAV",grid:0};
   GXValidFnc[47]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[49]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[51]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[53]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[55]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOEMPRESAID",gxz:"ZV15BancoEmpresaId",gxold:"OV15BancoEmpresaId",gxvar:"AV15BancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15BancoEmpresaId=Value},v2z:function(Value){gx.O.ZV15BancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vBANCOEMPRESAID",gx.O.AV15BancoEmpresaId,0)},c2v:function(){gx.O.AV15BancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vBANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV33Pagina",gxold:"OV33Pagina",gxvar:"AV33Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV33Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV33Pagina)},c2v:function(){gx.O.AV33Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV34PaginaAux",gxold:"OV34PaginaAux",gxvar:"AV34PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV34PaginaAux,0)},c2v:function(){gx.O.AV34PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCARAC",gxz:"ZV29QtCarac",gxold:"OV29QtCarac",gxvar:"AV29QtCarac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29QtCarac=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29QtCarac=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCARAC",gx.O.AV29QtCarac,0)},c2v:function(){gx.O.AV29QtCarac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCARAC",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSNDADOS",gxz:"ZV30SnDados",gxold:"OV30SnDados",gxvar:"AV30SnDados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30SnDados=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30SnDados=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSNDADOS",gx.O.AV30SnDados,0)},c2v:function(){gx.O.AV30SnDados=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSNDADOS",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"JS", format:2,grid:0};
   GXValidFnc[63]={fld:"PROMPT_CBANCOID",grid:0};
   GXValidFnc[64]={fld:"PROMPT_CBANCOAGENCIAID",grid:0};
   this.AV20cBancoId = 0 ;
   this.ZV20cBancoId = 0 ;
   this.OV20cBancoId = 0 ;
   this.AV27cBancoNome = "" ;
   this.ZV27cBancoNome = "" ;
   this.OV27cBancoNome = "" ;
   this.AV21cBancoAgenciaId = 0 ;
   this.ZV21cBancoAgenciaId = 0 ;
   this.OV21cBancoAgenciaId = 0 ;
   this.AV28cBancoAgenciaNome = "" ;
   this.ZV28cBancoAgenciaNome = "" ;
   this.OV28cBancoAgenciaNome = "" ;
   this.AV22cBoletoNumero = 0 ;
   this.ZV22cBoletoNumero = 0 ;
   this.OV22cBoletoNumero = 0 ;
   this.Z1821BoletoNumero = 0 ;
   this.O1821BoletoNumero = 0 ;
   this.Z1832BoletoNomeSacado = "" ;
   this.O1832BoletoNomeSacado = "" ;
   this.Z1830BoletoDataEmissao = gx.date.nullDate() ;
   this.O1830BoletoDataEmissao = gx.date.nullDate() ;
   this.Z1831BoletoDataVencimento = gx.date.nullDate() ;
   this.O1831BoletoDataVencimento = gx.date.nullDate() ;
   this.Z1823BoletoValor = 0 ;
   this.O1823BoletoValor = 0 ;
   this.Z2316BoletoCedenteBancoNome = "" ;
   this.O2316BoletoCedenteBancoNome = "" ;
   this.Z1817BoletoCedenteAgencia = 0 ;
   this.O1817BoletoCedenteAgencia = 0 ;
   this.Z1819BoletoEmpresaId = "" ;
   this.O1819BoletoEmpresaId = "" ;
   this.AV15BancoEmpresaId = "" ;
   this.ZV15BancoEmpresaId = "" ;
   this.OV15BancoEmpresaId = "" ;
   this.AV33Pagina = 0 ;
   this.ZV33Pagina = 0 ;
   this.OV33Pagina = 0 ;
   this.AV34PaginaAux = 0 ;
   this.ZV34PaginaAux = 0 ;
   this.OV34PaginaAux = 0 ;
   this.AV29QtCarac = 0 ;
   this.ZV29QtCarac = 0 ;
   this.OV29QtCarac = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV30SnDados = 0 ;
   this.ZV30SnDados = 0 ;
   this.OV30SnDados = 0 ;
   this.AV20cBancoId = 0 ;
   this.AV27cBancoNome = "" ;
   this.AV21cBancoAgenciaId = 0 ;
   this.AV28cBancoAgenciaNome = "" ;
   this.AV22cBoletoNumero = 0 ;
   this.AV15BancoEmpresaId = "" ;
   this.AV33Pagina = 0 ;
   this.AV34PaginaAux = 0 ;
   this.AV29QtCarac = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV30SnDados = 0 ;
   this.AV19BoletoEmpresaId = "" ;
   this.AV16BancoId = 0 ;
   this.AV17BancoAgenciaId = 0 ;
   this.AV18BoletoId = 0 ;
   this.AV31BoletoNumero = 0 ;
   this.A1820BoletoId = 0 ;
   this.A1816BoletoCedenteBanco = 0 ;
   this.A1815BoletoCedenteEmpId = "" ;
   this.A1821BoletoNumero = 0 ;
   this.A1832BoletoNomeSacado = "" ;
   this.A1830BoletoDataEmissao = gx.date.nullDate() ;
   this.A1831BoletoDataVencimento = gx.date.nullDate() ;
   this.A1823BoletoValor = 0 ;
   this.A2316BoletoCedenteBancoNome = "" ;
   this.A1817BoletoCedenteAgencia = 0 ;
   this.A1819BoletoEmpresaId = "" ;
   this.A947BancoId = 0 ;
   this.A950BancoEmpresaId = "" ;
   this.A948BancoNome = "" ;
   this.A953BancoAgenciaId = 0 ;
   this.A954BancoAgenciaNome = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17dw2_client": ["ENTER", true] ,"e11dw2_client": ["'GXM_FIRST'", true] ,"e12dw2_client": ["'GXM_PREVIOUS'", true] ,"e13dw2_client": ["'GXM_NEXT'", true] ,"e14dw2_client": ["'GXM_LAST'", true] ,"e15dw2_client": ["'PROCURAR'", true] ,"e19dw2_client": ["'ATUALIZAPAGINA'", true] ,"e21dw1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cBancoId',fld:'vCBANCOID'},{av:'AV21cBancoAgenciaId',fld:'vCBANCOAGENCIAID'},{av:'AV22cBoletoNumero',fld:'vCBOLETONUMERO'},{av:'AV30SnDados',fld:'vSNDADOS'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'BOLETONUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BOLETONUMERO","Title")',ctrl:'BOLETONUMERO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'BOLETONOMESACADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BOLETONOMESACADO","Title")',ctrl:'BOLETONOMESACADO',prop:'Title'},{ctrl:'BOLETODATAEMISSAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BOLETODATAEMISSAO","Title")',ctrl:'BOLETODATAEMISSAO',prop:'Title'},{ctrl:'BOLETODATAVENCIMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BOLETODATAVENCIMENTO","Title")',ctrl:'BOLETODATAVENCIMENTO',prop:'Title'},{ctrl:'BOLETOCEDENTEBANCONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BOLETOCEDENTEBANCONOME","Title")',ctrl:'BOLETOCEDENTEBANCONOME',prop:'Title'},{ctrl:'BOLETOCEDENTEAGENCIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BOLETOCEDENTEAGENCIA","Title")',ctrl:'BOLETOCEDENTEAGENCIA',prop:'Title'},{ctrl:'BOLETOVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BOLETOVALOR","Title")',ctrl:'BOLETOVALOR',prop:'Title'},{av:'AV34PaginaAux',fld:'vPAGINAAUX'},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV32NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A1820BoletoId',fld:'BOLETOID'},{av:'A1821BoletoNumero',fld:'BOLETONUMERO'}],[{av:'AV18BoletoId',fld:'vBOLETOID'},{av:'AV31BoletoNumero',fld:'vBOLETONUMERO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cBancoId',fld:'vCBANCOID'},{av:'AV21cBancoAgenciaId',fld:'vCBANCOAGENCIAID'},{av:'AV22cBoletoNumero',fld:'vCBOLETONUMERO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV30SnDados',fld:'vSNDADOS'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV33Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cBancoId',fld:'vCBANCOID'},{av:'AV21cBancoAgenciaId',fld:'vCBANCOAGENCIAID'},{av:'AV22cBoletoNumero',fld:'vCBOLETONUMERO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV30SnDados',fld:'vSNDADOS'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV33Pagina',fld:'vPAGINA'}],[{av:'AV33Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cBancoId',fld:'vCBANCOID'},{av:'AV21cBancoAgenciaId',fld:'vCBANCOAGENCIAID'},{av:'AV22cBoletoNumero',fld:'vCBOLETONUMERO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV30SnDados',fld:'vSNDADOS'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV34PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV33Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cBancoId',fld:'vCBANCOID'},{av:'AV21cBancoAgenciaId',fld:'vCBANCOAGENCIAID'},{av:'AV22cBoletoNumero',fld:'vCBOLETONUMERO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV30SnDados',fld:'vSNDADOS'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV34PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV33Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cBancoId',fld:'vCBANCOID'},{av:'AV21cBancoAgenciaId',fld:'vCBANCOAGENCIAID'},{av:'AV22cBoletoNumero',fld:'vCBOLETONUMERO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV30SnDados',fld:'vSNDADOS'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV30SnDados',fld:'vSNDADOS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cBancoId',fld:'vCBANCOID'},{av:'AV21cBancoAgenciaId',fld:'vCBANCOAGENCIAID'},{av:'AV22cBoletoNumero',fld:'vCBOLETONUMERO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV30SnDados',fld:'vSNDADOS'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setPrompt("PROMPT_CBANCOID", [13]);
   this.setPrompt("PROMPT_CBANCOAGENCIAID", [19]);
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19BoletoEmpresaId", "vBOLETOEMPRESAID", 0, "char");
   this.setVCMap("AV16BancoId", "vBANCOID", 0, "int");
   this.setVCMap("AV17BancoAgenciaId", "vBANCOAGENCIAID", 0, "int");
   this.setVCMap("AV18BoletoId", "vBOLETOID", 0, "int");
   this.setVCMap("AV31BoletoNumero", "vBOLETONUMERO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[60]);
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaboleto());
